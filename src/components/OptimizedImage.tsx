import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const assetModules = (import.meta as any).glob('../assets/*.{avif,webp,jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const assetUrlMap = Object.fromEntries(
  Object.entries(assetModules).map(([key, url]) => {
    const fileName = key.split('/').pop()!;
    return [fileName, url];
  })
) as Record<string, string>;

const buildSrcSet = (base: string, extension: 'avif' | 'webp') => {
  const entries = Object.entries(assetUrlMap)
    .filter(([fileName]) => fileName.startsWith(`${base}-w`) && fileName.endsWith(`.${extension}`))
    .map(([fileName, url]) => {
      const widthMatch = fileName.match(/-w(\d+)\.(?:avif|webp)$/i);
      return widthMatch ? `${url} ${widthMatch[1]}w` : `${url} 1x`;
    })
    .sort((a, b) => {
      const aw = Number(a.split(' ')[1].replace(/[^0-9]/g, ''));
      const bw = Number(b.split(' ')[1].replace(/[^0-9]/g, ''));
      return aw - bw;
    });

  if (entries.length > 0) {
    return entries.join(', ');
  }

  const fallbackUrl = assetUrlMap[`${base}.${extension}`];
  return fallbackUrl ? `${fallbackUrl} 1x` : undefined;
};

const getOptimizedUrls = (src: string) => {
  const originalEntry = Object.entries(assetUrlMap).find(([, url]) => url === src);
  const fileName = originalEntry?.[0] ?? src.split('/').pop() ?? '';
  const base = fileName.replace(/\.(jpe?g|png|webp|avif)$/i, '');
  return {
    avifSrc: assetUrlMap[`${base}.avif`] ?? src.replace(/\.(jpe?g|png)$/i, '.avif'),
    webpSrc: assetUrlMap[`${base}.webp`] ?? src.replace(/\.(jpe?g|png)$/i, '.webp'),
    avifSrcSet: buildSrcSet(base, 'avif'),
    webpSrcSet: buildSrcSet(base, 'webp'),
  };
};

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  const { avifSrc, webpSrc, avifSrcSet, webpSrcSet } = getOptimizedUrls(src);
  const { srcSet, sizes, ...restProps } = props as any;

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <picture>
      <source type="image/avif" srcSet={isInView ? avifSrcSet ?? avifSrc : undefined} />
      <source type="image/webp" srcSet={isInView ? webpSrcSet ?? webpSrc : undefined} />
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        srcSet={isInView ? srcSet : undefined}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        {...restProps}
      />
    </picture>
  );
};

export default OptimizedImage;