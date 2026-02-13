import React, { createContext, useContext, useState, ReactNode } from 'react';


const currentYear = new Date().getFullYear();

type Language = 'lt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('lt');

  const t = (key: string): string | string[] => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  lt: {
    nav: {
      home: 'Pradžia',
      about: 'Apie mus',
      services: 'Mažmenininkams',
      products: 'Produktai',
      compliance: 'Kokybė ir atitiktis',
      logistics: 'Logistika',
      contact: 'Kontaktai',
    },
    hero: {
      headline: 'Kur Afrikos paveldas susitinka su Baltijos galimybėmis',
      subheadline: 'Mes atvežame autentiškus Afrikos skonius į Lietuvą – ne tik kaip prekes, bet kaip tiltus tarp kultūrų. Veikdami iš savo sandėlio Vilniuje, Karken Company rašome naują Lietuvos kulinarinės istorijos skyrių: tokį, kuris garbina tradicijas, priima įvairovę ir atsako į kintančios visuomenės poreikius.',
      cta: 'Tapkite partneriu',
      ctaSecondary: 'Susisiekite',
    },
    about: {
      title: 'Apie mus',
      subtitle: 'Šaknys dviejose pasaulio dalyse',
      intro: 'Lietuvos kulinarinė tapatybė yra giliai įsipynusi į kraštovaizdį ir istoriją – kaimo krosnyse kepta ruginė duona, kartų kartų formuoti cepelinai, vasaros staliukais dalijamas šaltibarščius. Šie patiekalai yra daugiau nei maistas – jie yra atminties, priklausymo ir bendruomenės nešėjai.',
      intro2: 'Afrikos žemyne šalys taip pat turi ne mažiau gilias maisto tradicijas: Nigerijos aromatingas džolof ryžiai, Ganos guvus vakė, Kenijos pagrindinis ugali ir Pietų Afrikos spalvingas čakalaka. Namuose nuo Lagoso iki Nairobio šie patiekalai yra kasdienio gyvenimo, švenčių ir dvasinių apeigų pamatas.',
      intro3: 'Šiandien Lietuva priima vis daugiau gyventojų iš Afrikos ir Pietų Azijos – žmonių, kurie prisideda prie šalies ekonomikos, kultūros ir socialinio audinio. Tačiau daugelis susiduria su tylia problema: pažįstamų, patikimų maisto produktų trūkumu vietinėse rinkose.',
      intro4: 'Būtent šiam tarpui užpildyti buvo įkurta Karken Company – su pagarba, atsakomybe ir tikslumu.',
      companyInfo: 'Užregistruota pagal Lietuvos teisę (įmonės kodas: 307213203) ir veikianti adresu Smolensko g. 10-95, Vilnius, mes esame tikslą turinti įmonė, siekianti daugiau nei pelno. Tikime, kad prieiga prie kultūriškai reikšmingo maisto yra orumo, įtraukimo ir gerovės klausimas.',
      nameExplanation: 'Mūsų vardas – Karken – atspindi mūsų esmę: jungti. Tarp žemynų. Tarp bendruomenių. Tarp gimtosios virtuvės ir naujos šalies lentynos.',
      enrichment: 'Mes nesiekime pakeisti Lietuvos turtingos maisto kultūros – mes norime ją praturtinti drąsiais, įvairiais Afrikos skoniais, pristatytomis su visišku atitikimu, skaidrumu ir rūpestingu požiūriu.',
      mission: {
        title: 'Mūsų misija',
        text: 'Tapti patikimiausiu ir atsakingiausiu autentiškų afrikietiškų maisto produktų platintoju Baltijos šalyse – tiekiant atitinkančius reglamentams, aukštos kokybės ir kultūriškai reikšmingus produktus, kurie stiprina bendruomenes, remia mažmenininkus ir praturtina Lietuvos maisto ekosistemą.',
      },
      aims: {
        title: 'Mūsų pagrindiniai tikslai',
        cultural: {
          title: 'Kultūrinis įtraukimas per maistą',
          text: 'Užtikrinti, kad afrikiečių ir diasporos bendruomenės galėtų gauti produktus, esminius jų kasdieniam gyvenimui, religinėms praktikoms ir kultūrinei tapatybei – neaukojant kokybės, saugos ar teisėtumo.',
        },
        regulatory: {
          title: 'Reglamentų laikymasis',
          text: 'Veikti griežtai laikantis ES ir Lietuvos maisto teisės aktų, įskaitant visišką dvikalbį ženklinimą (lietuvių/anglų), Halal sertifikavimą (kur taikoma) ir pilną dokumentaciją.',
        },
        retailer: {
          title: 'Partnerystė su mažmenininkais',
          text: 'Suteikti prekybos partneriams patikimą tiekimą, kategorijų įžvalgas ir lankščią logistiką – kad jie galėtų pasitikėjimu aptarnauti įvairialypes klientijas.',
        },
        market: {
          title: 'Rinkos plėtra',
          text: 'Padėti augti „Pasaulio maisto" segmentui naudojant duomenimis grindžiamą asortimento planavimą, švietimą ir mažos rizikos bandomųjų užsakymų galimybes.',
        },
        ethical: {
          title: 'Etinis tiekimas',
          text: 'Bendradarbiauti tik su licencijuotais gamintojais ir įgaliotais platintojais, kad užtikrintume autentiškumą, sekamumą ir sąžiningos prekybos praktikas.',
        },
        community: {
          title: 'Atsakas į bendruomenės poreikius',
          text: 'Aktyviai klausyti vartotojų ir partnerių atsiliepimų – ir koreguoti savo asortimentą pagal realų paklausą, o ne prielaidas.',
        },
      },
      story: {
        title: 'Mūsų istorija',
        p1: 'Karken Company gimė iš paprastos, bet galingos įžvalgos: kai žmonės migruoja, jų maisto kultūra keliauja kartu su jais. Tačiau dažnai jų mėgstami produktai – atsitiktiniai pagrindiniai produktai, kurie primena namus – lieka nerandami naujose parduotuvėse.',
        p2: 'Mūsų įkūrėjai, turintys ryšių tiek su Lietuvos, tiek su Afrikos kultūromis, pamatė galimybę kurti verslą, kuris būtų daugiau nei tik pelno siekiantis: verslą, pagrįstą tikslumu, pasitikėjimu ir kultūriniu jautrumu.',
        p3: 'Šiandien mes kuriame partnerystes su mažmenininkais, kurie supranta besikeičiančią Lietuvos demografiją ir nori būti priekyje aptarnaujant įvairias bendruomenes.',
      },
      businessModel: {
        title: 'Mūsų verslo modelis',
        subtitle: 'Profesionalus B2B platinimas per tris kanalus',
        intro: 'Karken Company veikia išskirtinai kaip didmeninės prekybos platintojas, aptarnaudamas:',
        channels: [
          {
            title: 'Tautinių ir afrikietiškų maisto prekių parduotuvės',
            text: 'Teikiame nuoseklų, konkurencingai kainuojantį tiekimą kultūriškai esminių prekių – užtikrindami, kad diasporos bendruomenės galėtų gauti produktus, būtinus jų kasdieniam gyvenimui, šventėms ir religinėms praktikoms.',
          },
          {
            title: 'Pagrindiniai mažmeninės prekybos partneriai',
            text: 'Padedame bendrosioms parduotuvėms plėsti „Pasaulio maisto" ar „Tarptautinių specialybių" kategorijas su sparčiai parduodamais afrikietiškais produktais, kurie didina lankytojų srautus, krepšelio vertę ir klientų lojalumą.',
          },
          {
            title: 'Institucinės ir HORECA įstaigos',
            text: 'Leidžiame universitetams, korporacinėms stovykloms, kateringų paslaugoms ir viešbučiams atitikti įvairialypės klientijos maisto lūkesčius.',
          },
        ],
      },
      values: {
        title: 'Mūsų vertybės',
        quality: 'Kokybė',
        qualityText: 'Tiekiame tik aukščiausios kokybės produktus, kurie atitinka ES standartus ir vartotojų lūkesčius.',
        reliability: 'Patikimumas',
        reliabilityText: 'Mūsų partneriai gali pasikliauti stabiliu tiekimu, tiksliais terminais ir nuosekliu bendravimu.',
        transparency: 'Skaidrumas',
        transparencyText: 'Aiški komunikacija, dokumentacija ir kainodara – be paslėptų siurprizų.',
        partnership: 'Partnerystė',
        partnershipText: 'Kuriame ilgalaikius, abipusiai naudingus santykius su mūsų partneriais.',
      },
      stats: {
        years: 'Nauja',
        yearsLabel: 'įmonė',
        countries: 'Vilnius',
        countriesLabel: 'sandėlis',
        products: 'Afrika',
        productsLabel: 'autentiški produktai',
        partners: 'Augantis',
        partnersLabel: 'partnerių tinklas',
      },
    },
    faq: {
      title: 'Dažnai užduodami klausimai',
      items: [
        {
          question: 'Kaip užsakyti produktus?',
          answer: 'Susisiekite su mumis per kontaktų formą arba telefonu +370 604 87253, ir mūsų komanda jums padės pasirinkti tinkamus produktus ir sutvarkys užsakymą.'
        },
        {
          question: 'Ar produktai atitinka ES standartus?',
          answer: 'Taip, visi mūsų produktai visiškai atitinka ES maisto saugos reglamentus (Reglamentas (ES) Nr. 1169/2011) ir turi reikalingą dokumentaciją.'
        },
        {
          question: 'Kiek laiko trunka pristatymas?',
          answer: 'Pristatymas iš mūsų Vilniaus sandėlio į Jūsų vietą vyks per 3-5 darbo dienas, priklausomai nuo lokacijos Lietuvoje.'
        },
        {
          question: 'Ar turite minimalų užsakymo dydį?',
          answer: 'Mūsų preliminarūs užsakymai lankstūs – nuo bandomųjų užsakymų iki didelių apimčių. Susisiekite su mumis, kad sužinotumėte konkrečias sąlygas.'
        },
        {
          question: 'Ar produktai turi Halal sertifikatą?',
          answer: 'Kur taikoma, mūsų produktai yra sertifikuoti kaip Halal. Išsamesnę informaciją apie konkretūs produktus rasite mūsų kataloge.'
        },
        {
          question: 'Kokios yra jūsų šaltinės?',
          answer: 'Bendradarbiaujame tik su licencijuotais gamintojais ir įgaliotais platintojais, užtikrindami autentiškumą, sekamumą ir sąžiningą prekybą.'
        }
      ]
    },
    marketDemand: {
      title: 'Rinkos paklausa',
      subtitle: 'Auganti rinka',
      p1: 'Lietuvoje gyvena vis daugiau įvairių kultūrų atstovų – žmonių iš Afrikos, Azijos ir kitų regionų, kurie prisideda prie šalies ekonomikos ir kultūrinio gyvenimo.',
      p2: 'Afrikietiški maisto produktai tampa vis populiaresni tiek diasporos bendruomenėse, tiek tarp vietinių gyventojų, ieškančių naujų skonių.',
      p3: 'Karken Company užpildo tarpą tarp paklausos ir pasiūlos, tiekdama autentiškus, kokybiškus ir ES standartus atitinkančius produktus.',
    },
    services: {
      title: 'Mažmenininkams ir verslo partneriams',
      subtitle: 'Kodėl verta bendradarbiauti su Karken?',
      intro: 'Kai Lietuvos gyventojų sudėtis įvairėja, turi keistis ir prekybos lentynos. Pažangūs mažmenininkai supranta, kad aptarnauti naujas bendruomenes yra ne tik etiška, bet ir komerciškai protinga.',
      easyStart: 'Mes padarome pradžią lengva:',
      sourcing: {
        title: 'Produktų tiekimas',
        description: 'Bendradarbiaujame tik su licencijuotais gamintojais ir įgaliotais platintojais, kad užtikrintume autentiškumą, sekamumą ir sąžiningos prekybos praktikas.',
      },
      export: {
        title: 'Eksportas',
        description: 'Visiškai atitinkame ES ir Lietuvos maisto teisės aktus, įskaitant pilną dvikalbį ženklinimą ir Halal sertifikavimą.',
      },
      import: {
        title: 'Importas',
        description: 'Mūsų Vilniaus sandėlyje užtikriname pilną produktų atsekamumą ir kokybės kontrolę prieš pristatymą.',
      },
      distribution: {
        title: 'Platinimas',
        description: 'Efektyvus pristatymas iš mūsų sandėlio į mažmenininkus, HORECA sektorių ir e-komercijos platformas visoje Lietuvoje.',
      },
      compliant: {
        title: 'Atitinka reglamentams nuo pirmos dienos',
        text: 'Jokių muitinės delsimų ar ženklinimo problemų. Kiekvienas SKU pristatomas su visa dokumentacija.',
      },
      flexible: {
        title: 'Lankščios užsakymų galimybės',
        text: 'Pradėkite nuo bandomojo užsakymo. Didinkite apimtis, kai matysite rezultatus.',
      },
      transparent: {
        title: 'Skaidri kainodara',
        text: 'Aiškios didmeninės kainos su apimties nuolaidomis. Visos kainos nurodytos be PVM (PVM registracija vykdoma).',
      },
      logistics: {
        title: 'Patikima logistika',
        text: 'Efektyvus pristatymas iš mūsų Vilniaus sandėlio (Smolensko g. 10-95) į Jūsų vietą visoje Lietuvoje.',
      },
      support: {
        title: 'Nuolatinė parama',
        text: 'Prieiga prie demografinių duomenų, kategorijų rodiklių ir prekybos patarimų.',
      },
      idealFor: {
        title: 'Idealu tiems, kurie:',
        items: [
          'Valdo mažmeninės prekybos tinklus ar nepriklausomas parduotuves',
          'Specializuojasi tautiniame maiste',
          'Tiekia HORECA sektoriui ar institucijoms',
          'Aptarnauja universitetų ar darbo vietų maisto paslaugas',
          'Veikia kaip e-komercijos platformos',
        ],
      },
      cta: 'Susisiekite su mumis, kad gautumėte produktų katalogą, atitikimo dokumentus ar konsultaciją.',
    },
    products: {
      title: 'Produktai ir asortimentas',
      subtitle: 'Autentiški. Atitinkantys reglamentams. Paruošti mažmeninei prekybai.',
      intro: 'Specializuojamės sparčiai parduodamuose afrikietiškuose maisto esminiuose produktuose, kurie jau įrodė savo vertę tiek Afrikos namų ūkiuose, tiek Europos diasporos rinkose. Mūsų pasirinkimą lemia kultūrinė reikšmė, prekės ženklo atpažįstamumas ir komercinė perspektyva – o ne laikinos tendencijos.',
      categories: {
        grains: {
          title: 'Greitai paruošiami makaronai ir patiekalai',
          description: 'Mėgstami dėl patogumo ir skonio. Greitas ir skanus pasirinkimas užsiėmusiems namų ūkiams.',
          items: ['Indomie makaronai', 'Greitai paruošiami ryžiai', 'Momentinės sriubos', 'Paruošti padažai'],
        },
        packaged: {
          title: 'Tradiciniai grūdai ir miltai',
          description: 'Įskaitant manioką (garri), kukurūzų miltus ir specialius ryžių mišinius – pagrindai tradiciniam afrikietiškam maistui.',
          items: ['Garri (maniokų miltai)', 'Kukurūzų miltai', 'Ryžių mišiniai', 'Tradiciniai grūdai'],
        },
        spices: {
          title: 'Prieskoniai, seasonings ir padažai',
          description: 'Paruošti pastos ir sausi mišiniai kasdieniam virimui – autentiškų skonių pagrindas.',
          items: ['Afrikietiški prieskoniai', 'Paruoštos pastos', 'Tradiciniai padažai', 'Sausi mišiniai'],
        },
        specialty: {
          title: 'Gėrimai ir užkandžiai',
          description: 'Bealkoholiniai gėrimai: mišiniai, alaus tipo gėrimai ir žolelių infuzijos. Regione populiarūs užkandžiai su stipria namų ūkių lojalumu.',
          items: ['Salyklo gėrimai', 'Žolelių infuzijos', 'Gėrimų mišiniai', 'Tradiciniai užkandžiai'],
        },
      },
      quality: {
        title: 'Kiekvienas produktas atidžiai tikrinamas pagal:',
        items: [
          'Autentiškumą (tas pats, kuris parduodamas kilmės šalyje)',
          'ES atitiktį (Reglamentas (ES) Nr. 1169/2011)',
          'Dvikalbį ženklinimą (lietuvių/anglų)',
          'Mažiausiai 9 mėnesių galiojimo laiką',
          'Halal sertifikavimą (kur taikoma)',
        ],
      },
      note: 'Pastaba: Karken Company, UAB veikia kaip nepriklausomas importuotojas. Mes neturime išimtinių teisių jokiai prekės ženklui ir tiekiame produktus tik per legalius, įgaliotus kanalus.',
    },
    compliance: {
      title: 'Kokybė ir atitiktis',
      subtitle: 'ES standartų užtikrinimas',
      intro: 'Karken Company, UAB įsipareigoja laikytis visų galiojančių ES maisto saugos ir importo teisės aktų.',
      intro2: 'Teikiame visą reikalingą produkto dokumentaciją ir sertifikatus.',
      euRegulations: {
        title: 'ES maisto saugos reguliavimas',
        p1: 'Visi mūsų importuojami produktai visiškai atitinka Europos Sąjungos maisto saugos reglamentus (Reglamentas (ES) Nr. 1169/2011).',
        p2: 'Užtikriname dvikalbį ženklinimą (lietuvių/anglų) ir Halal sertifikavimą, kur taikoma.',
      },
      certifications: {
        title: 'Dokumentacija ir sertifikatai',
        intro: 'Teikiame visą reikalingą produkto dokumentaciją ir sertifikatus:',
        items: [
          'Autentiškumo patvirtinimas',
          'ES atitikties dokumentai',
          'Dvikalbės etiketės',
          'Galiojimo terminų garantija (min. 9 mėn.)',
          'Halal sertifikatai (kur taikoma)',
        ],
      },
      traceability: {
        title: 'Atsekamumas',
        text: 'Užtikriname pilną produktų atsekamumą nuo gamintojo iki galutinio pirkėjo per legalius, įgaliotus kanalus.',
      },
      retailCompliance: {
        title: 'Atitiktis mažmenininkams',
        text: 'Visi produktai pristatomi su pilna dokumentacija, paruošti mažmeninei prekybai be jokių papildomų veiksmų iš jūsų pusės.',
      },
    },
    logistics: {
      title: 'Logistika',
      subtitle: 'Patikima logistika',
      intro: 'Efektyvus pristatymas iš mūsų Vilniaus sandėlio į Jūsų vietą visoje Lietuvoje.',
      warehouse: {
        title: 'Sandėlis',
        address: 'Smolensko g. 10-95, Vilnius, LT-04312',
        text: 'Mūsų operacinis sandėlis Vilniuje užtikrina greitą ir patikimą produktų pristatymą visoje Lietuvoje.',
      },
      shipping: {
        title: 'Tarptautinis gabenimas',
        p1: 'Lankstūs pristatymo variantai – nuo pilnų krovinių iki mažų siuntų.',
        p2: 'Reguliarūs pristatymai pagal jūsų poreikius.',
      },
      flexibility: {
        title: 'Lankstus pristatymas',
        items: [
          'Bandomieji užsakymai',
          'Apimčių didinimas pagal rezultatus',
          'Reguliarūs pristatymai',
          'Tiesioginis pristatymas į sandėlį ar parduotuvę',
        ],
      },
      scalability: {
        title: 'Pritaikomas mastelis',
        text: 'Nesvarbu, ar esate maža parduotuvė, ar didelis prekybos tinklas – galime prisitaikyti prie jūsų poreikių ir augti kartu.',
      },
      partnership: {
        title: 'Partnerystė',
        text: 'Mes kuriame ilgalaikius, pasitikėjimu pagrįstus santykius su mūsų partneriais. Jūsų sėkmė yra mūsų sėkmė.',
      },
    },
    contact: {
      title: 'Kontaktai',
      subtitle: 'Kurkime įtraukiamą maisto ateitį kartu',
      intro: 'Laukiame užklausų iš mažmenininkų, bendruomenių lyderių ir partnerių, kurie dalijasi mūsų vizija.',
      form: {
        name: 'Vardas, pavardė',
        company: 'Įmonė',
        email: 'El. paštas',
        phone: 'Telefonas',
        interest: 'Domina',
        interestOptions: ['Produktų katalogas', 'Konsultacija', 'Partnerystė', 'Kita'],
        message: 'Jūsų žinutė',
        submit: 'Siųsti užklausą',
        success: 'Ačiū! Jūsų žinutė išsiųsta. Susisieksime su jumis artimiausiu metu.',
        catalog: 'Užklauskite produktų katalogo',
        consultation: 'Sutvarkykite konsultaciją',
      },
      //  +37060487253
      info: {
        company: 'Karken Company, UAB',
        address: 'Smolensko g. 10-95, Vilnius, LT-04312',
        phone: '+370 604 87253',
        email: 'hello@karkencompany.lt',
        regNumber: 'Įmonės kodas: 307213203',
        vatNote: 'PVM registracija vykdoma',
      },
      legal: 'Karken Company, UAB (reg. nr. 307213203) yra naujai įsikūrusi Lietuvos įmonė. Šiuo metu vykdoma mūsų PVM registracija Valstybinėje mokesčių inspekcijoje. Visas komercinis bendravimas vykdomas per oficialius kanalus, o mes veikiame visiškai laikydamiesi Lietuvos ir ES maisto importo reglamentų.',
    },
    footer: {
      description: 'Karken Company, UAB – autentiškų afrikietiškų maisto produktų platinimas Lietuvoje ir Baltijos šalyse.',
      quickLinks: 'Nuorodos',
      contact: 'Kontaktai',
      legal: 'Teisinė informacija',
      privacy: 'Privatumo politika',
      terms: 'Naudojimo sąlygos',
      cookies: 'Slapukų politika',
      copyright: `© ${currentYear} Karken Company, UAB. Visos teisės saugomos.`,
    },
    cta: {
      title: 'Kurkime įtraukiamą maisto ateitį kartu',
      text: 'Susisiekite su mumis ir sužinokime, kaip galime kurti ilgalaikę, skaidrią ir patikimą partnerystę.',
    },
    legal: {
      lastUpdatedDate: '2026-01-22',
      contact: {
        title: 'Susisiekite su mumis',
      },
      privacy: {
        title: 'Privatumo politika',
        subtitle: 'Kaip saugome jūsų duomenis',
        lastUpdated: 'Atnaujinta',
        sections: [
          {
            title: '1. Įvadas',
            content: 'Karken Company, UAB (toliau – „Bendrovė", „mes", „mūsų") gerbia jūsų privatumą ir įsipareigoja saugoti jūsų asmens duomenis. Ši privatumo politika paaiškina, kaip renkame, naudojame ir saugome informaciją, kai naudojatės mūsų svetaine.',
          },
          {
            title: '2. Duomenų valdytojas',
            content: 'Duomenų valdytojas yra Karken Company, UAB, įmonės kodas 307213203, adresas Smolensko g. 10-95, Vilnius, LT-04312, Lietuva. Elektroninis paštas: hello@karkencompany.lt.',
          },
          {
            title: '3. Kokius duomenis renkame',
            content: 'Mes galime rinkti šiuos duomenis:\n• Kontaktinę informaciją (vardas, el. paštas, telefono numeris)\n• Įmonės informaciją (įmonės pavadinimas)\n• Užklausos turinį ir korespondenciją\n• Techninę informaciją (IP adresas, naršyklės tipas)',
          },
          {
            title: '4. Kaip naudojame duomenis',
            content: 'Jūsų duomenis naudojame:\n• Atsakyti į jūsų užklausas\n• Teikti paslaugas ir produktų informaciją\n• Gerinti mūsų svetainę ir paslaugas\n• Vykdyti teisinius įsipareigojimus',
          },
          {
            title: '5. Duomenų saugojimas',
            content: 'Jūsų asmens duomenis saugome tik tiek, kiek būtina tikslams, dėl kurių jie buvo surinkti, pasiekti arba kiek reikalauja teisės aktai.',
          },
          {
            title: '6. Jūsų teisės',
            content: 'Pagal BDAR jūs turite teisę:\n• Gauti prieigą prie savo duomenų\n• Reikalauti ištaisyti netikslius duomenis\n• Reikalauti ištrinti duomenis\n• Apriboti duomenų tvarkymą\n• Perkelti duomenis\n• Nesutikti su duomenų tvarkymu',
          },
          {
            title: '7. Slapukai',
            content: 'Mūsų svetainė naudoja slapukus. Išsamesnę informaciją rasite mūsų Slapukų politikoje.',
          },
          {
            title: '8. Kontaktai',
            content: 'Jei turite klausimų apie šią privatumo politiką ar savo duomenų tvarkymą, susisiekite su mumis el. paštu hello@karkencompany.lt.',
          },
        ],
      },
      terms: {
        title: 'Naudojimo sąlygos',
        subtitle: 'Svetainės naudojimo taisyklės',
        lastUpdated: 'Atnaujinta',
        sections: [
          {
            title: '1. Bendrosios nuostatos',
            content: 'Šios naudojimo sąlygos (toliau – „Sąlygos") reglamentuoja jūsų prieigą prie Karken Company, UAB svetainės ir jos naudojimą. Naudodamiesi svetaine, sutinkate su šiomis Sąlygomis.',
          },
          {
            title: '2. Intelektinė nuosavybė',
            content: 'Visa svetainėje esanti medžiaga, įskaitant tekstus, grafiką, logotipus, paveikslėlius ir programinę įrangą, yra Karken Company, UAB arba jos turinio tiekėjų nuosavybė ir yra saugoma autorių teisių bei kitų intelektinės nuosavybės teisių.',
          },
          {
            title: '3. Naudojimo apribojimai',
            content: 'Draudžiama:\n• Kopijuoti, platinti ar keisti svetainės turinį be raštiško sutikimo\n• Naudoti svetainę neteisėtais tikslais\n• Bandyti gauti neautorizuotą prieigą prie svetainės sistemų\n• Naudoti automatizuotas priemones duomenims rinkti',
          },
          {
            title: '4. Atsakomybės apribojimas',
            content: 'Svetainė ir jos turinys teikiami „tokia, kokia yra" pagrindu. Karken Company, UAB negarantuoja, kad svetainė veiks be klaidų ar pertraukų. Mes neprisiimame atsakomybės už jokius nuostolius, kilusius dėl svetainės naudojimo.',
          },
          {
            title: '5. Nuorodos į trečiųjų šalių svetaines',
            content: 'Mūsų svetainėje gali būti nuorodų į trečiųjų šalių svetaines. Mes nekontroliuojame šių svetainių turinio ir neprisiimame atsakomybės už jas.',
          },
          {
            title: '6. Sąlygų pakeitimai',
            content: 'Pasiliekame teisę bet kuriuo metu keisti šias Sąlygas. Pakeitimai įsigalioja nuo jų paskelbimo svetainėje momento.',
          },
          {
            title: '7. Taikytina teisė',
            content: 'Šioms Sąlygoms taikoma Lietuvos Respublikos teisė. Visi ginčai sprendžiami Lietuvos Respublikos teismuose.',
          },
          {
            title: '8. Kontaktai',
            content: 'Jei turite klausimų apie šias Sąlygas, susisiekite su mumis el. paštu hello@karkencompany.lt.',
          },
        ],
      },
      cookies: {
        title: 'Slapukų politika',
        subtitle: 'Kaip naudojame slapukus',
        lastUpdated: 'Atnaujinta',
        sections: [
          {
            title: '1. Kas yra slapukai',
            content: 'Slapukai yra maži tekstiniai failai, kuriuos svetainė saugo jūsų kompiuteryje ar mobiliajame įrenginyje, kai apsilankote svetainėje. Jie padeda svetainei atpažinti jūsų įrenginį ir prisiminti informaciją apie jūsų apsilankymą.',
          },
          {
            title: '2. Kokius slapukus naudojame',
            content: 'Mes naudojame šiuos slapukų tipus:\n\n• Būtini slapukai: Reikalingi svetainės veikimui. Be jų svetainė neveiktų tinkamai.\n\n• Analitiniai slapukai: Padeda suprasti, kaip lankytojai naudojasi svetaine, rinkdami ir pateikdami informaciją anonimiškai.\n\n• Funkciniai slapukai: Leidžia svetainei prisiminti jūsų pasirinkimus (pvz., kalbos nustatymus).',
          },
          {
            title: '3. Slapukų valdymas',
            content: 'Galite valdyti ir (arba) ištrinti slapukus pagal savo pageidavimus. Dauguma naršyklių leidžia atsisakyti slapukų arba juos ištrinti. Tačiau tai gali paveikti svetainės funkcionalumą.',
          },
          {
            title: '4. Naršyklės nustatymai',
            content: 'Norėdami valdyti slapukus, galite pakeisti savo naršyklės nustatymus:\n• Google Chrome: Nustatymai > Privatumas ir sauga > Slapukai\n• Mozilla Firefox: Nustatymai > Privatumas ir sauga\n• Safari: Nuostatos > Privatumas\n• Microsoft Edge: Nustatymai > Slapukai ir svetainės leidimai',
          },
          {
            title: '5. Trečiųjų šalių slapukai',
            content: 'Kai kurie slapukai gali būti nustatyti trečiųjų šalių (pvz., analitikos paslaugų teikėjų). Mes nekontroliuojame šių slapukų. Rekomenduojame peržiūrėti atitinkamų trečiųjų šalių privatumo politikas.',
          },
          {
            title: '6. Politikos atnaujinimai',
            content: 'Galime retkarčiais atnaujinti šią slapukų politiką. Visi pakeitimai bus skelbiami šiame puslapyje su atnaujinimo data.',
          },
          {
            title: '7. Kontaktai',
            content: 'Jei turite klausimų apie mūsų slapukų politiką, susisiekite su mumis el. paštu hello@karkencompany.lt.',
          },
        ],
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'For Retailers',
      products: 'Products',
      compliance: 'Quality & Compliance',
      logistics: 'Logistics',
      contact: 'Contact',
    },
    hero: {
      headline: 'Where African Heritage Meets Baltic Opportunity',
      subheadline: 'We bring the authentic tastes of Africa to Lithuania—not just as products, but as bridges between cultures. Operating from our warehouse in Vilnius, Karken Company is building a new chapter in Lithuania\'s culinary story: one that honours tradition, embraces diversity, and meets the real needs of a changing society.',
      cta: 'Partner With Us',
      ctaSecondary: 'Contact Us',
    },
    about: {
      title: 'About Us',
      subtitle: 'Rooted in Two Worlds',
      intro: 'Lithuania\'s culinary identity is deeply woven into its landscape and history—rye bread baked in village ovens, cepelinai shaped by generations, šaltibarščiai shared at summer tables. These foods are more than sustenance; they are vessels of memory, belonging, and community.',
      intro2: 'Across the continent, African nations hold equally profound food traditions: Nigeria\'s aromatic jollof rice, Ghana\'s comforting waakye, Kenya\'s staple ugali, and South Africa\'s vibrant chakalaka. In homes from Lagos to Nairobi, these dishes anchor daily life, celebrations, and spiritual observances.',
      intro3: 'Today, Lithuania is welcoming a growing number of residents from Africa and South Asia—people who contribute to the nation\'s economy, culture, and social fabric. Yet many face a quiet challenge: the absence of familiar, trusted food staples in local markets.',
      intro4: 'Karken Company was founded to address this gap—with respect, responsibility, and rigour.',
      companyInfo: 'Registered under Lithuanian law (Company Code: 307213203) and operating from Smolensko g. 10-95, Vilnius, we are a purpose-driven enterprise committed to more than commerce. We believe that access to culturally significant food is a matter of dignity, inclusion, and well-being.',
      nameExplanation: 'Our name, Karken, reflects our core purpose: to connect. Between continents. Between communities. Between the kitchen of home and the shelf of a new country.',
      enrichment: 'We do not seek to replace Lithuania\'s rich food culture—but to enrich it with the bold, diverse flavours of Africa, delivered with full compliance, transparency, and care.',
      mission: {
        title: 'Our Mission',
        text: 'To become the most trusted and responsive distributor of authentic African food products in the Baltics—delivering compliant, high-quality, and culturally significant goods that empower communities, support retailers, and enrich Lithuania\'s food ecosystem.',
      },
      aims: {
        title: 'Our Core Aims',
        cultural: {
          title: 'Cultural Inclusion Through Food',
          text: 'Ensure African and diaspora communities can access the foods central to their daily lives, religious practices, and cultural identity—without compromising on quality, safety, or legality.',
        },
        regulatory: {
          title: 'Regulatory Excellence',
          text: 'Operate strictly within EU and Lithuanian food law, including full bilingual labelling (Lithuanian/English), Halal certification where applicable, and complete documentation.',
        },
        retailer: {
          title: 'Retailer Partnership',
          text: 'Provide grocery partners with reliable supply, category insights, and flexible logistics—so they can serve diverse customers with confidence.',
        },
        market: {
          title: 'Market Development',
          text: 'Help grow the "World Foods" segment through data-driven assortment planning, education, and low-risk trial opportunities.',
        },
        ethical: {
          title: 'Ethical Sourcing',
          text: 'Work only with licensed manufacturers and authorised distributors to ensure authenticity, traceability, and fair trade practices.',
        },
        community: {
          title: 'Community Responsiveness',
          text: 'Listen actively to consumer and partner feedback—and adapt our portfolio to reflect real demand, not assumptions.',
        },
      },
      story: {
        title: 'Our Story',
        p1: 'Karken Company was born from a simple but powerful insight: when people migrate, their food culture travels with them. Yet often, their beloved products—the casual staples that taste like home—remain missing from new shelves.',
        p2: 'Our founders, with ties to both Lithuanian and African cultures, saw an opportunity to build a business that is more than profit-seeking: one based on precision, trust, and cultural sensitivity.',
        p3: 'Today, we are building partnerships with retailers who understand Lithuania\'s changing demographics and want to be at the forefront of serving diverse communities.',
      },
      businessModel: {
        title: 'Our Business Model',
        subtitle: 'Professional B2B Distribution Across Three Channels',
        intro: 'Karken Company operates exclusively as a wholesale distributor, serving:',
        channels: [
          {
            title: 'Ethnic & African Grocery Retailers',
            text: 'We provide consistent, competitively priced supply of culturally essential goods—ensuring diaspora communities can access the foods central to their daily life, celebrations, and religious practices.',
          },
          {
            title: 'Mainstream Retail Partners',
            text: 'We support general grocery operators in expanding their "World Foods" or "International Specialties" categories with high-turnover African products that drive foot traffic, basket size, and customer loyalty.',
          },
          {
            title: 'Institutional & HORECA Clients',
            text: 'We enable universities, corporate campuses, catering services, and hospitality venues to meet the dietary expectations of an increasingly diverse clientele.',
          },
        ],
      },
      values: {
        title: 'Our Values',
        quality: 'Quality',
        qualityText: 'We supply only the highest quality products that meet EU standards and consumer expectations.',
        reliability: 'Reliability',
        reliabilityText: 'Our partners can count on stable supply, accurate timelines, and consistent communication.',
        transparency: 'Transparency',
        transparencyText: 'Clear communication, documentation, and pricing—no hidden surprises.',
        partnership: 'Partnership',
        partnershipText: 'We build long-term, mutually beneficial relationships with our partners.',
      },
      stats: {
        years: 'New',
        yearsLabel: 'company',
        countries: 'Vilnius',
        countriesLabel: 'warehouse',
        products: 'Africa',
        productsLabel: 'authentic products',
        partners: 'Growing',
        partnersLabel: 'partner network',
      },
    },
    marketDemand: {
      title: 'Market Demand',
      subtitle: 'A Growing Market',
      p1: 'Lithuania is home to an increasingly diverse population—people from Africa, Asia, and other regions who contribute to the country\'s economy and cultural life.',
      p2: 'African food products are becoming increasingly popular both in diaspora communities and among local residents seeking new flavours.',
      p3: 'Karken Company bridges the gap between demand and supply, delivering authentic, high-quality products that meet EU standards.',
    },
     faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'How do I place an order?',
          answer: 'Contact us through the contact form or call +370 604 87253, and our team will help you select the right products and process your order.'
        },
        {
          question: 'Do your products meet EU standards?',
          answer: 'Yes, all our products fully comply with EU food safety regulations (Regulation (EU) No 1169/2011) and include necessary documentation.'
        },
        {
          question: 'How long does delivery take?',
          answer: 'Delivery from our Vilnius warehouse to your location will take 3-5 working days, depending on your location in Lithuania.'
        },
        {
          question: 'Do you have a minimum order size?',
          answer: 'Our orders are flexible—from pilot batches to large volumes. Contact us to learn about specific terms.'
        },
        {
          question: 'Are your products Halal certified?',
          answer: 'Where applicable, our products are Halal certified. For detailed information about specific products, consult our catalog.'
        },
        {
          question: 'What are your sources?',
          answer: 'We work only with licensed manufacturers and authorised distributors, ensuring authenticity, traceability, and fair trade practices.'
        }
      ]
    },
    services: {
      title: 'For Retailers & Business Partners',
      subtitle: 'Why Partner With Karken?',
      intro: 'As Lithuania\'s population diversifies, so must its shelves. Forward-looking retailers recognise that serving new communities isn\'t just ethical—it\'s commercially smart.',
      easyStart: 'We make it easy to get started:',
      sourcing: {
        title: 'Product Sourcing',
        description: 'We work only with licensed manufacturers and authorised distributors to ensure authenticity, traceability, and fair trade practices.',
      },
      export: {
        title: 'Export',
        description: 'Full compliance with EU and Lithuanian food law, including complete bilingual labelling and Halal certification.',
      },
      import: {
        title: 'Import',
        description: 'Our Vilnius warehouse ensures full product traceability and quality control before delivery.',
      },
      distribution: {
        title: 'Distribution',
        description: 'Efficient delivery from our warehouse to retailers, HORECA sector, and e-commerce platforms across Lithuania.',
      },
      compliant: {
        title: 'Compliant from Day One',
        text: 'No customs delays or labelling issues. Every SKU arrives with full documentation.',
      },
      flexible: {
        title: 'Flexible Order Options',
        text: 'Start with a pilot batch. Scale when you see results.',
      },
      transparent: {
        title: 'Transparent Pricing',
        text: 'Clear wholesale terms with volume incentives. All pricing quoted exclusive of VAT (VAT registration pending).',
      },
      logistics: {
        title: 'Reliable Logistics',
        text: 'Efficient delivery from our Vilnius warehouse (Smolensko g. 10-95) to your location nationwide.',
      },
      support: {
        title: 'Ongoing Support',
        text: 'Access to demographic insights, category benchmarks, and merchandising guidance.',
      },
      idealFor: {
        title: 'Ideal For:',
        items: [
          'Grocery chains and independent stores',
          'Ethnic food retailers',
          'Wholesalers serving HORECA or institutions',
          'Campus and workplace food services',
          'E-commerce platforms',
        ],
      },
      cta: 'Contact us to request our product catalog, compliance dossier, or a consultation.',
    },
    products: {
      title: 'Products & Portfolio',
      subtitle: 'Authentic. Compliant. Retail-Ready.',
      intro: 'We specialise in fast-moving African grocery essentials that have already proven their value in households across the continent and in European diaspora markets. Our selection is driven by cultural significance, brand recognition, and commercial viability—not passing trends.',
      categories: {
        grains: {
          title: 'Instant noodles & quick-prep meals',
          description: 'Beloved for convenience and flavour. A quick and delicious choice for busy households.',
          items: ['Indomie noodles', 'Quick-prep rice', 'Instant soups', 'Ready sauces'],
        },
        packaged: {
          title: 'Traditional grains & flours',
          description: 'Including cassava (garri), maize meal, and specialty rice blends—foundations for traditional African cuisine.',
          items: ['Garri (cassava flour)', 'Maize meal', 'Rice blends', 'Traditional grains'],
        },
        spices: {
          title: 'Spices, seasonings & sauces',
          description: 'Ready-to-use pastes and dry blends for everyday cooking—the foundation of authentic flavours.',
          items: ['African spices', 'Ready pastes', 'Traditional sauces', 'Dry blends'],
        },
        specialty: {
          title: 'Beverages & snacks',
          description: 'Non-alcoholic beverages: drink mixes, malt drinks, and herbal infusions. Regionally popular treats with strong household loyalty.',
          items: ['Malt drinks', 'Herbal infusions', 'Drink mixes', 'Traditional snacks'],
        },
      },
      quality: {
        title: 'Every product undergoes rigorous vetting for:',
        items: [
          'Authenticity (same as sold in origin market)',
          'EU compliance (Regulation (EU) No 1169/2011)',
          'Bilingual labelling (Lithuanian/English)',
          'Minimum 9-month shelf life',
          'Halal certification (where applicable)',
        ],
      },
      note: 'Note: Karken Company, UAB operates as an independent importer. We do not hold exclusive rights to any brand and source exclusively through legitimate, authorised channels.',
    },
    compliance: {
      title: 'Quality & Compliance',
      subtitle: 'Ensuring EU Standards',
      intro: 'Karken Company, UAB is committed to compliance with all applicable EU food safety and import regulations.',
      intro2: 'We provide full product documentation and certifications.',
      euRegulations: {
        title: 'EU Food Safety Regulations',
        p1: 'All our imported products fully comply with European Union food safety regulations (Regulation (EU) No 1169/2011).',
        p2: 'We ensure bilingual labelling (Lithuanian/English) and Halal certification where applicable.',
      },
      certifications: {
        title: 'Documentation and Certifications',
        intro: 'We provide full product documentation and certifications:',
        items: [
          'Authenticity verification',
          'EU compliance documents',
          'Bilingual labels',
          'Shelf life guarantee (min. 9 months)',
          'Halal certificates (where applicable)',
        ],
      },
      traceability: {
        title: 'Traceability',
        text: 'We ensure full product traceability from manufacturer to end buyer through legitimate, authorised channels.',
      },
      retailCompliance: {
        title: 'Retail-Ready Compliance',
        text: 'All products arrive with complete documentation, ready for retail shelves without any additional steps on your part.',
      },
    },
    logistics: {
      title: 'Logistics',
      subtitle: 'Reliable Logistics',
      intro: 'Efficient delivery from our Vilnius warehouse to your location nationwide.',
      warehouse: {
        title: 'Warehouse',
        address: 'Smolensko g. 10-95, Vilnius, LT-04312',
        text: 'Our operational warehouse in Vilnius ensures fast and reliable product delivery throughout Lithuania.',
      },
      shipping: {
        title: 'International Shipping',
        p1: 'Flexible delivery options—from full loads to small shipments.',
        p2: 'Regular deliveries according to your needs.',
      },
      flexibility: {
        title: 'Flexible Delivery',
        items: [
          'Pilot batches',
          'Scale with results',
          'Regular deliveries',
          'Direct delivery to warehouse or store',
        ],
      },
      scalability: {
        title: 'Scalable Operations',
        text: 'Whether you\'re a small store or a large retail chain—we can adapt to your needs and grow with you.',
      },
      partnership: {
        title: 'Partnership',
        text: 'We build long-term, trust-based relationships with our partners. Your success is our success.',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Let\'s Build an Inclusive Food Future Together',
      intro: 'We welcome inquiries from retailers, community leaders, and partners who share our vision.',
      form: {
        name: 'Full Name',
        company: 'Company',
        email: 'Email',
        phone: 'Phone',
        interest: 'Interest',
        interestOptions: ['Product Catalog', 'Consultation', 'Partnership', 'Other'],
        message: 'Your Message',
        submit: 'Send Inquiry',
        success: 'Thank you! Your message has been sent. We will contact you soon.',
        catalog: 'Request Product Catalog',
        consultation: 'Schedule a Consultation',
      },
      info: {
        company: 'Karken Company, UAB',
        address: 'Smolensko g. 10-95, Vilnius, LT-04312',
        phone: '+370 604 87253',
        email: 'hello@karkencompany.lt',
        regNumber: 'Company Code: 307213203',
        vatNote: 'VAT registration pending',
      },
      legal: 'Karken Company, UAB (Reg. No. 307213203) is a newly established Lithuanian enterprise. Our VAT registration is currently in process with the State Tax Inspectorate. All commercial communications are conducted through official channels, and we operate in full compliance with Lithuanian and EU food import regulations.',
    },
    footer: {
      description: 'Karken Company, UAB – distribution of authentic African food products in Lithuania and the Baltic States.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      copyright: `© ${currentYear} Karken Company, UAB. All rights reserved.`,
    },
    cta: {
      title: 'Let\'s Build an Inclusive Food Future Together',
      text: 'Contact us and let\'s discuss how we can build a long-term, transparent, and reliable partnership.',
    },
    legal: {
      lastUpdatedDate: '2026-01-22',
      contact: {
        title: 'Contact Us',
      },
      privacy: {
        title: 'Privacy Policy',
        subtitle: 'How we protect your data',
        lastUpdated: 'Last updated',
        sections: [
          {
            title: '1. Introduction',
            content: 'Karken Company, UAB (hereinafter "Company", "we", "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect information when you use our website.',
          },
          {
            title: '2. Data Controller',
            content: 'The data controller is Karken Company, UAB, Company Code 307213203, address Smolensko g. 10-95, Vilnius, LT-04312, Lithuania. Email: hello@karkencompany.lt.',
          },
          {
            title: '3. Data We Collect',
            content: 'We may collect the following data:\n• Contact information (name, email, phone number)\n• Company information (company name)\n• Inquiry content and correspondence\n• Technical information (IP address, browser type)',
          },
          {
            title: '4. How We Use Your Data',
            content: 'We use your data to:\n• Respond to your inquiries\n• Provide services and product information\n• Improve our website and services\n• Comply with legal obligations',
          },
          {
            title: '5. Data Retention',
            content: 'We retain your personal data only for as long as necessary for the purposes for which it was collected or as required by law.',
          },
          {
            title: '6. Your Rights',
            content: 'Under GDPR, you have the right to:\n• Access your data\n• Request correction of inaccurate data\n• Request deletion of data\n• Restrict data processing\n• Data portability\n• Object to data processing',
          },
          {
            title: '7. Cookies',
            content: 'Our website uses cookies. For more information, please see our Cookie Policy.',
          },
          {
            title: '8. Contact',
            content: 'If you have questions about this privacy policy or your data processing, contact us at hello@karkencompany.lt.',
          },
        ],
      },
      terms: {
        title: 'Terms of Service',
        subtitle: 'Website usage rules',
        lastUpdated: 'Last updated',
        sections: [
          {
            title: '1. General Provisions',
            content: 'These terms of service (hereinafter "Terms") govern your access to and use of the Karken Company, UAB website. By using the website, you agree to these Terms.',
          },
          {
            title: '2. Intellectual Property',
            content: 'All material on the website, including text, graphics, logos, images, and software, is the property of Karken Company, UAB or its content providers and is protected by copyright and other intellectual property rights.',
          },
          {
            title: '3. Usage Restrictions',
            content: 'You may not:\n• Copy, distribute, or modify website content without written consent\n• Use the website for illegal purposes\n• Attempt to gain unauthorized access to website systems\n• Use automated means to collect data',
          },
          {
            title: '4. Limitation of Liability',
            content: 'The website and its content are provided on an "as is" basis. Karken Company, UAB does not guarantee that the website will operate without errors or interruptions. We are not liable for any damages arising from the use of the website.',
          },
          {
            title: '5. Third-Party Links',
            content: 'Our website may contain links to third-party websites. We do not control the content of these websites and are not responsible for them.',
          },
          {
            title: '6. Changes to Terms',
            content: 'We reserve the right to change these Terms at any time. Changes take effect upon publication on the website.',
          },
          {
            title: '7. Applicable Law',
            content: 'These Terms are governed by the laws of the Republic of Lithuania. All disputes shall be resolved in the courts of the Republic of Lithuania.',
          },
          {
            title: '8. Contact',
            content: 'If you have questions about these Terms, contact us at hello@karkencompany.lt.',
          },
        ],
      },
      cookies: {
        title: 'Cookie Policy',
        subtitle: 'How we use cookies',
        lastUpdated: 'Last updated',
        sections: [
          {
            title: '1. What Are Cookies',
            content: 'Cookies are small text files that a website stores on your computer or mobile device when you visit the site. They help the website recognize your device and remember information about your visit.',
          },
          {
            title: '2. Types of Cookies We Use',
            content: 'We use the following types of cookies:\n\n• Essential cookies: Required for website operation. Without them, the website would not function properly.\n\n• Analytical cookies: Help understand how visitors use the website by collecting and reporting information anonymously.\n\n• Functional cookies: Allow the website to remember your choices (e.g., language settings).',
          },
          {
            title: '3. Managing Cookies',
            content: 'You can control and/or delete cookies according to your preferences. Most browsers allow you to refuse cookies or delete them. However, this may affect website functionality.',
          },
          {
            title: '4. Browser Settings',
            content: 'To manage cookies, you can change your browser settings:\n• Google Chrome: Settings > Privacy and security > Cookies\n• Mozilla Firefox: Settings > Privacy & Security\n• Safari: Preferences > Privacy\n• Microsoft Edge: Settings > Cookies and site permissions',
          },
          {
            title: '5. Third-Party Cookies',
            content: 'Some cookies may be set by third parties (e.g., analytics service providers). We do not control these cookies. We recommend reviewing the privacy policies of the respective third parties.',
          },
          {
            title: '6. Policy Updates',
            content: 'We may occasionally update this cookie policy. Any changes will be posted on this page with an updated date.',
          },
          {
            title: '7. Contact',
            content: 'If you have questions about our cookie policy, contact us at hello@karkencompany.lt.',
          },
        ],
      },
    },
  },
};
