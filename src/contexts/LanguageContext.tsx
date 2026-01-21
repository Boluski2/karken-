import React, { createContext, useContext, useState, ReactNode } from 'react';

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
      services: 'Paslaugos',
      products: 'Produktai',
      compliance: 'Kokybė ir atitiktis',
      logistics: 'Logistika',
      contact: 'Kontaktai',
    },
    hero: {
      headline: 'Maisto produktų platinimas',
      subheadline: 'Karken Company, UAB" yra naujai įsteigta Lietuvos bendrovė, orientuota į tarptautiniu mastu pripažintų maisto prekių ženklų platinimą Lietuvoje ir kitose Europos rinkose.',
      cta: 'Tapkite partneriu',
      ctaSecondary: 'Susisiekite',
    },
    about: {
      title: 'Apie mus',
      subtitle: 'Įmonės aprašymas',
      intro: '„Karken Company, UAB" yra naujai įsteigta Lietuvos bendrovė, orientuota į tarptautiniu mastu pripažintų maisto prekių ženklų platinimą Lietuvoje ir kitose Europos rinkose. Įmonė buvo įkurta siekiant patenkinti augantį vartotojų poreikį patikimiems, pasaulyje žinomiems maisto produktams.',
      intro2: 'Mūsų veikla apima visą tiekimo grandinę – nuo produktų atrankos ir kokybės kontrolės iki galutinio pristatymo į jūsų sandėlį ar parduotuvę. Suprantame, kad kiekvienas klientas turi unikalius poreikius, todėl siūlome lanksčius sprendimus, pritaikytus jūsų verslo modeliui.',
      intro3: 'Mūsų pradinis produktų fokusas – „Indomie" greitai paruošiami makaronai, turintys stiprią paklausą Europoje, Afrikoje ir tarp daugiakultūrių vartotojų grupių.',
      mission: {
        title: 'Mūsų tikslas',
        text: 'Mūsų tikslas – kurti ilgalaikes, skaidrias ir patikimas partnerystes su didžiaisiais prekybos tinklais, tiekiant patikrintus tarptautinius prekių ženklus, atitinkančius tiek komercinius, tiek atitikties lūkesčius.',
        text2: 'Siekiame būti patikimu partneriu, užtikrinančiu aukščiausios kokybės produktų tiekimą ir profesionalų aptarnavimą.',
      },
      vision: {
        title: 'Mūsų vizija',
        text: 'Tapti pirmaujančia įmone, platinančia tarptautiniu mastu pripažintus maisto produktus Lietuvoje ir kitose Europos rinkose.',
        text2: 'Vizualizuojame ateitį, kurioje mūsų produktai tampa neatsiejama Europos kulinarinio kraštovaizdžio dalimi, o mūsų partnerystės prisideda prie maisto įvairovės ir kultūrinio praturtinimo.',
      },
      values: {
        title: 'Mūsų vertybės',
        quality: 'Kokybė be kompromisų',
        qualityText: 'Kiekvienas produktas atitinka griežčiausius ES maisto saugos standartus. Atliekame nuolatines kokybės patikras ir bendradarbiaujame tik su sertifikuotais tiekėjais.',
        reliability: 'Patikimumas',
        reliabilityText: 'Stabilūs tiekimo terminai ir nuoseklios produktų savybės. Mūsų klientai gali pasikliauti reguliariais pristatymais ir nenutrūkstamu tiekimu.',
        transparency: 'Skaidrumas',
        transparencyText: 'Aiški produktų kilmė ir pilnas atsekamumas. Teikiame išsamią informaciją apie kiekvieną produktą ir jo kelią nuo gamintojo iki lentynos.',
        partnership: 'Partnerystė',
        partnershipText: 'Ilgalaikiai santykiai su tiekėjais ir klientais. Vertiname abipusę pagarbą ir bendradarbiavimą, kuris auga kartu su mūsų verslu.',
        sustainability: 'Tvarumas',
        sustainabilityText: 'Remiame tvarią žemdirbystę ir sąžiningos prekybos principus. Dirbame atsakingai ir užtikriname socialinę atsakomybę.',
        innovation: 'Inovacijos',
        innovationText: 'Nuolat ieškome naujų produktų ir tobuliname tiekimo procesus. Investuojame į modernias technologijas ir efektyvius logistikos sprendimus.',
      },
      story: {
        title: 'Mūsų istorija',
        p1: '„Karken Company, UAB" gimė iš aistringo noro pristatyti pasaulyje pripažintus maisto produktus Lietuvos ir Europos vartotojams. Įmonė buvo įkurta siekiant patenkinti augantį vartotojų poreikį patikimiems, pasaulyje žinomiems maisto produktams.',
        p2: 'Pradėję nuo „Indomie" greitai paruošiamų makaronų – pasaulinio lygio prekės ženklo su stipria paklausa visoje Europoje, Afrikoje ir tarptautinėse vartotojų bendruomenėse – siekiame plėsti savo produktų asortimentą.',
        p3: 'Šiandien esame pasiruošę tapti patikimu partneriu, tiekiančiu ne tik produktus, bet ir visapusišką palaikymą mūsų klientams – nuo mažmeninių parduotuvių iki tarptautinių maisto grandinių.',
        p4: 'Mūsų komanda turi gilias žinias apie tarptautinę maisto kultūrą, importo procedūras ir ES reguliavimo reikalavimus. Tai leidžia mums užtikrinti sklandų produktų kelią nuo gamintojų iki Europos parduotuvių lentynų.',
        p5: 'Žvelgdami į ateitį, siekiame plėsti savo veiklą į naujas Europos rinkas, didinti produktų asortimentą ir toliau stiprinti ryšius su tarptautiniais gamintojais.',
      },
      team: {
        title: 'Mūsų komanda',
        text: 'Mūsų komandą sudaro profesionalai, turintys patirtį maisto pramonėje, tarptautinėje prekyboje ir logistikoje. Jungiame gilų tarptautinės maisto kultūros supratimą su Europos verslo praktikos išmanymu.',
        text2: 'Kiekvienas komandos narys prisideda prie mūsų bendros misijos – užtikrinti, kad pripažinti tarptautiniai produktai pasiektų Europos vartotojus aukščiausia kokybe ir geriausiomis sąlygomis.',
      },
      stats: {
        years: 'Nauja',
        yearsLabel: 'įmonė',
        countries: 'Lietuva',
        countriesLabel: 'ir Europa',
        products: 'Indomie',
        productsLabel: 'pagrindinis produktas',
        partners: 'Augantis',
        partnersLabel: 'partnerių tinklas',
      },
    },
    services: {
      title: 'Veiklos kryptys',
      subtitle: 'Mūsų specializacija',
      intro: '„Karken Company, UAB" specializuojasi prekės ženklų maisto produktų importavime ir platinime, tiekime didiesiems mažmeninės prekybos tinklams bei tarptautinių ir etninių maisto kategorijų vystyme.',
      sourcing: {
        title: 'Prekės ženklų maisto produktų importavimas ir platinimas',
        description: 'Importuojame ir platiname tarptautiniu mastu pripažintus maisto produktų prekės ženklus. Mūsų pradinis fokusas – „Indomie" greitai paruošiami makaronai, turintys stiprią paklausą Europoje, Afrikoje ir tarp daugiakultūrių vartotojų grupių.',
        description2: '„Indomie" yra plačiai vartojamas Afrikos šalyse, kur laikomas kasdienio vartojimo produktu, taip pat turi tvirtą poziciją Jungtinės Karalystės didžiuosiuose prekybos tinkluose, tokiuose kaip „Tesco", „Asda", „Sainsbury\'s" ir „Morrisons".',
        description3: 'Europos rinkose paklausą papildomai skatina augančios Afrikos, Azijos, Karibų ir kitos etninės bendruomenės, taip pat vietiniai vartotojai, ieškantys tarptautinių maisto produktų.',
        features: ['Tarptautinių prekės ženklų importas', 'Kokybės kontrolė', 'Produktų platinimas', 'Rinkos analizė', 'Tiekėjų valdymas', 'Atsargų planavimas'],
      },
      export: {
        title: 'Tiekimas mažmeninės prekybos tinklams',
        description: 'Tiekiame produktus didiesiems mažmeninės prekybos tinklams ir maisto prekių parduotuvėms. Užtikriname patikimą ir nuolatinį produktų prieinamumą.',
        description2: 'Dirbame su patikimais logistikos partneriais, turinčiais ilgametę patirtį maisto produktų transportavime. Užtikriname tinkamą produktų kokybę ir savalaikį pristatymą.',
        description3: 'Mūsų specialistai puikiai išmano mažmeninės prekybos tinklų reikalavimus ir procedūras. Tai leidžia mums užtikrinti sklandų bendradarbiavimą.',
        features: ['Mažmeninės prekybos tinklų aptarnavimas', 'Reguliarūs pristatymai', 'Atsargų valdymas', 'Produktų dokumentacija', 'Kokybės užtikrinimas', 'Lankstūs sprendimai'],
      },
      import: {
        title: 'Tarptautinių ir etninių maisto kategorijų vystymas',
        description: 'Vystome tarptautines ir etnines maisto kategorijas Lietuvos ir Europos rinkose. Padedame mažmenininkams išplėsti savo asortimentą su paklausiais tarptautiniais produktais.',
        description2: 'Europos rinkose paklausą skatina augančios Afrikos, Azijos, Karibų ir kitos etninės bendruomenės, taip pat vietiniai vartotojai, ieškantys tarptautinių maisto produktų.',
        description3: 'Šis pasaulinių prekės ženklų stiprumas ir daugiakultūrė paklausa sukuria stiprų potencialą nuolatiniam mažmeninės prekybos pardavimui.',
        features: ['Etninių kategorijų vystymas', 'Rinkos potencialo analizė', 'Vartotojų poreikių tyrimas', 'Asortimento planavimas', 'Kategorijų valdymas', 'Pardavimų palaikymas'],
      },
      distribution: {
        title: 'Distribucija ir sandėliavimas',
        description: 'Siūlome lanksčias distribucijos paslaugas visoje Lietuvoje ir platesnėje Europos rinkoje. Mūsų logistikos tinklas užtikrina operatyvų pristatymą.',
        description2: 'Galimybė derinti kiekius ir terminus pagal prekybos tinklo poreikius. Tiekimo modelis, pritaikytas augančiai paklausai.',
        description3: 'Siūlome įvairius pristatymo variantus – nuo pilnų krovinių iki mažų siuntų. Galime organizuoti reguliarius pristatymus pagal jūsų poreikius.',
        features: ['Lankstus pristatymo planavimas', 'Kiekių ir terminų derinimas', 'Tiekimo modelio pritaikymas', 'Sandėliavimas', 'Atsargų valdymas', 'Logistikos sprendimai'],
      },
      consulting: {
        title: 'Konsultacijos ir palaikymas',
        description: 'Teikiame konsultacijas tarptautinių maisto produktų klausimais – nuo produktų atrankos iki lentynų planavimo. Mūsų ekspertai padės jums sukurti patrauklų ir pelningą tarptautinių produktų asortimentą.',
        features: ['Produktų asortimento planavimas', 'Lentynų erdvės optimizavimas', 'Marketingo palaikymas', 'Personalo mokymai'],
      },
    },
    products: {
      title: 'Mūsų produktai',
      subtitle: 'Tarptautiniu mastu pripažinti maisto produktai',
      intro: 'Siūlome tarptautiniu mastu pripažintus maisto produktus su stipria paklausa Europos, Afrikos ir tarptautinių vartotojų bendruomenių rinkose.',
      intro2: 'Mūsų pradinis produktų fokusas – „Indomie" greitai paruošiami makaronai, pasaulinio lygio prekės ženklas, plačiai vartojamas Afrikos, Azijos ir Europos rinkose.',
      intro3: 'Dirbame tik su patikimais tarptautiniais gamintojais, kurie laikosi tarptautinių maisto saugos standartų.',
      categories: {
        grains: {
          title: 'Indomie greitai paruošiami makaronai',
          description: '„Indomie" yra pasaulinis lyderis greitai paruošiamų makaronų kategorijoje. Produktas plačiai vartojamas Afrikos šalyse, kur laikomas kasdienio vartojimo produktu.',
          description2: '„Indomie" turi tvirtą poziciją Jungtinės Karalystės didžiuosiuose prekybos tinkluose, tokiuose kaip „Tesco", „Asda", „Sainsbury\'s" ir „Morrisons". Produktas yra labai žinomas ir vertinamas vartotojų visame pasaulyje.',
          items: ['Indomie Mi Goreng', 'Indomie Chicken Curry', 'Indomie Special Chicken', 'Indomie Vegetable', 'Indomie Beef', 'Indomie Onion Chicken', 'Indomie Hot & Spicy', 'Indomie BBQ Chicken'],
        },
        packaged: {
          title: 'Daugiakultūrė paklausa',
          description: 'Europos rinkose paklausą skatina augančios Afrikos, Azijos, Karibų ir kitos etninės bendruomenės, taip pat vietiniai vartotojai, ieškantys tarptautinių maisto produktų.',
          description2: 'Šis pasaulinių prekės ženklų stiprumas ir daugiakultūrė paklausa sukuria stiprų potencialą nuolatiniam mažmeninės prekybos pardavimui.',
          items: ['Afrikos bendruomenė', 'Azijos bendruomenė', 'Karibų bendruomenė', 'Tarptautiniai vartotojai', 'Vietiniai gerbėjai', 'Maisto entuziastai', 'Restoranai ir kavinės', 'Etninės maisto parduotuvės'],
        },
        spices: {
          title: 'Rinkos potencialas',
          description: 'Jungtinėje Karalystėje „Indomie" jau yra tvirtai įsitvirtinęs didžiuosiuose prekybos tinkluose. Lietuvos ir Baltijos šalių rinkos turi panašų potencialą.',
          description2: 'Augančios tarptautinės bendruomenės ir vietinių vartotojų susidomėjimas pasaulio skoniais sukuria puikias galimybes plėtrai.',
          items: ['Tesco (JK)', 'Asda (JK)', 'Sainsbury\'s (JK)', 'Morrisons (JK)', 'Lietuvos tinklai', 'Baltijos tinklai', 'Europos rinkos', 'Nauji partneriai'],
        },
        specialty: {
          title: 'Ateities produktai',
          description: 'Planuojame plėsti produktų asortimentą, įtraukdami daugiau tarptautiniu mastu pripažintų maisto prekės ženklų.',
          description2: 'Sekame rinkos tendencijas ir vartotojų poreikius, kad galėtume pasiūlyti aktualiausius ir paklausiausius produktus.',
          items: ['Nauji prekės ženklai', 'Naujų kategorijų produktai', 'Sezoniniai produktai', 'Limitinės serijos', 'Partnerių produktai', 'Specialūs užsakymai'],
        },
      },
      sourcing: {
        title: 'Produktų kokybė',
        text: 'Visi mūsų produktai yra tiekiami iš patikimų tarptautinių gamintojų. Užtikriname pilną produktų dokumentaciją ir sertifikatus.',
      },
      quality: {
        title: 'Kokybės garantija',
        text: 'Kiekviena produktų partija tikrinama prieš patekdama į platinimo tinklą. Užtikriname, kad visi produktai atitinka ES maisto saugos standartus.',
      },
    },
    compliance: {
      title: 'Atitiktis ir standartai',
      subtitle: 'ES standartų užtikrinimas',
      intro: '„Karken Company, UAB" įsipareigoja laikytis visų galiojančių ES maisto saugos ir importo teisės aktų. Teikiame visą reikalingą produkto dokumentaciją ir sertifikatus.',
      intro2: 'Užtikriname atsekamumą, kokybę ir prekybos tinklų reikalavimų laikymąsi.',
      intro3: 'Mūsų kokybės komanda nuolat stebi reguliavimo pokyčius ir užtikrina, kad mūsų procesai atitiktų naujausius ES ir tarptautinius standartus.',
      euRegulations: {
        title: 'ES maisto saugos reguliavimas',
        p1: 'Visi mūsų importuojami produktai visiškai atitinka Europos Sąjungos maisto saugos reglamentus. Mūsų kokybės valdymo sistema užtikrina nuolatinę atitiktį kintantiems reguliavimo reikalavimams.',
        p2: 'Teikiame pilną produktų dokumentaciją, sertifikatus ir specifikacijas pagal mažmenininkų reikalavimus dėl kokybės, atsekumo ir logistikos.',
        p3: 'Mūsų specialistai nuolat stebi ES reguliavimo pokyčius ir užtikrina, kad visos procedūros būtų atnaujinamos laiku.',
        p4: 'Teikiame išsamią dokumentaciją kiekvienam produktui, įskaitant kilmės sertifikatus, kokybės tyrimų protokolus ir atitikties deklaracijas.',
      },
      certifications: {
        title: 'Dokumentacija ir sertifikatai',
        intro: 'Teikiame visą reikalingą produkto dokumentaciją ir sertifikatus, atitinkančius ES ir mažmenininkų reikalavimus.',
        items: ['Produktų specifikacijos', 'Kokybės sertifikatai', 'Kilmės dokumentai', 'Maistinės vertės informacija', 'Ingredientų sąrašai', 'Galiojimo terminai', 'Sandėliavimo reikalavimai', 'Atsekumo dokumentai'],
      },
      traceability: {
        title: 'Atsekamumas',
        text: 'Užtikriname pilną produktų atsekamumą nuo gamintojo iki galutinio pirkėjo. Ši skaidrumas užtikrina greitą reagavimą į bet kokias kokybės problemas ir sustiprina pasitikėjimą tarp visų tiekimo grandinės dalyvių.',
        text2: 'Kiekvienas produktas turi dokumentaciją, leidžiančią nustatyti jo kilmę, gamybos datą ir visus tarpininkus tiekimo grandinėje.',
        text3: 'Ši sistema leidžia užtikrinti aukščiausią kokybės standartą ir greitą problemų sprendimą.',
      },
      retailCompliance: {
        title: 'Mažmeninės prekybos atitiktis',
        text: 'Atitinkame mažmenininkų reikalavimus dėl kokybės, atsekumo ir logistikos. Mūsų produktai yra paruošti mažmeninei prekybai – su tinkamu ženklinimu ir visais privalomais žymėjimais.',
        text2: 'Galime pritaikyti etiketės informaciją pagal jūsų tinklo reikalavimus ir užtikrinti sklandų bendradarbiavimą.',
      },
      testing: {
        title: 'Kokybės kontrolė',
        text: 'Vykdome nuolatinę kokybės kontrolę, užtikrinant, kad produktai atitinka visus ES maisto saugos reikalavimus ir mažmenininkų standartus.',
        items: ['Produktų patikra', 'Dokumentų tikrinimas', 'Pakuotės kontrolė', 'Galiojimo terminų stebėjimas', 'Sandėliavimo sąlygų kontrolė', 'Transportavimo kokybė'],
      },
    },
    logistics: {
      title: 'Logistika ir tiekimas',
      subtitle: 'Lankstus ir patikimas tiekimas',
      intro: 'Mūsų logistikos pajėgumai užtikrina lankstų ir patikimą produktų tiekimą Lietuvoje. Galimybė derinti apimtis ir pristatymo terminus pagal mažmenininkų poreikius.',
      intro2: 'Tiekimo modelis, pritaikytas augančiai paklausai ir mažmeninės prekybos augimui.',
      intro3: 'Mūsų komanda dirba užtikrinti, kad produktai pasiektų jus laiku ir geriausiomis sąlygomis.',
      shipping: {
        title: 'Pristatymo planavimas',
        p1: 'Lankstus pristatymo planavimas Lietuvoje. Galimybė derinti kiekius ir terminus pagal prekybos tinklo poreikius.',
        p2: 'Tiekimo modelis, pritaikytas augančiai paklausai ir mažmeninės prekybos plėtrai.',
        p3: 'Mūsų logistikos specialistai optimizuoja maršrutus ir užtikrina efektyvų pristatymą.',
        p4: 'Užtikriname tinkamą produktų kokybę viso transportavimo proceso metu.',
      },
      flexibility: {
        title: 'Lankstus tiekimas',
        intro: 'Siūlome įvairius pristatymo variantus, pritaikytus skirtingiems verslo poreikiams.',
        items: ['Lankstus pristatymo planavimas', 'Kiekių derinimas', 'Terminų pritaikymas', 'Reguliarūs pristatymai', 'Skubus pristatymas', 'Tiesioginis pristatymas į sandėlį', 'Pristatymas į parduotuvių tinklus', 'Individualūs sprendimai'],
      },
      scalability: {
        title: 'Apimčių lankstumas',
        text: 'Galime derinti apimtis pagal mažmenininkų poreikius. Mūsų tiekimo modelis pritaikytas augančiai paklausai ir mažmeninės prekybos plėtrai.',
        text2: 'Siūlome lanksčias sąlygas ir galimybę koreguoti užsakymų apimtis pagal sezoninius svyravimus ir rinkos poreikius.',
        text3: 'Galime pasiūlyti individualius sprendimus pagal jūsų verslo poreikius.',
      },
      partnership: {
        title: 'Ilgalaikė partnerystė',
        text: 'Mūsų tikslas – kurti ilgalaikes, skaidrias ir patikimas partnerystes su didžiaisiais prekybos tinklais, tiekiant patikintus tarptautinius prekių ženklus, atitinkančius tiek komercinius, tiek atitikties lūkesčius.',
        text2: 'Vertiname ilgalaikius santykius su klientais ir siūlome specialias sąlygas nuolatiniams partneriams.',
        text3: 'Reguliariai bendraujame su partneriais ir dalinamės rinkos tendencijomis bei naujais produktų pasiūlymais.',
      },
      warehouse: {
        title: 'Sandėliavimas',
        text: 'Užtikriname tinkamas produktų sandėliavimo sąlygas, atitinkančias maisto saugos standartus.',
        text2: 'Sandėlio valdymo sistema užtikrina tikslią atsargų apskaitą ir produktų šviežumą.',
      },
    },
    contact: {
      title: 'Kontaktai',
      subtitle: 'Susisiekite su mumis',
      intro: 'Esame pasiruošę atsakyti į jūsų klausimus ir aptarti bendradarbiavimo galimybes. Susisiekite su mumis – mūsų komanda mielai padės rasti geriausią sprendimą jūsų verslui.',
      intro2: 'Mūsų tikslas – kurti ilgalaikes, skaidrias ir patikimas partnerystes su didžiaisiais prekybos tinklais.',
      form: {
        name: 'Vardas, pavardė',
        company: 'Įmonė',
        email: 'El. paštas',
        phone: 'Telefonas',
        interest: 'Domina',
        interestOptions: ['Mažmeninė prekyba', 'Didmeninė prekyba', 'HoReCa', 'Kita'],
        message: 'Jūsų žinutė',
        submit: 'Siųsti užklausą',
        success: 'Ačiū! Jūsų žinutė išsiųsta. Susisieksime su jumis artimiausiu metu.',
      },
      info: {
        company: 'Karken Company, UAB',
        address: 'Vilnius, Lietuva',
        phone: '+370 609 09398',
        email: ' hello@karkencompany.lt',
        hours: 'Darbo laikas: I-V 9:00 - 18:00',
      },
      reasons: {
        title: 'Kodėl verta bendradarbiauti su mumis?',
        items: [
          'Tarptautiniu mastu pripažinti maisto produktai',
          'Lankstus pristatymo planavimas',
          'Pilna atitiktis ES maisto saugos standartams',
          'Visa reikalinga produktų dokumentacija',
          'Atsekamumas ir kokybės užtikrinimas',
          'Ilgalaikė ir skaidri partnerystė',
        ],
      },
    },
    footer: {
      description: 'Karken Company, UAB – tarptautiniu mastu pripažintų maisto produktų platinimas Lietuvoje ir Europoje.',
      quickLinks: 'Nuorodos',
      contact: 'Kontaktai',
      legal: 'Teisinė informacija',
      privacy: 'Privatumo politika',
      terms: 'Naudojimo sąlygos',
      cookies: 'Slapukų politika',
      copyright: '© 2024 Karken Company, UAB. Visos teisės saugomos.',
    },
    marketDemand: {
      title: 'Rinkos patirtis ir paklausa',
      subtitle: 'Stiprus potencialas mažmeninėje prekyboje',
      p1: '„Indomie" yra plačiai vartojamas Afrikos šalyse, kur laikomas kasdienio vartojimo produktu, taip pat turi tvirtą poziciją Jungtinės Karalystės didžiuosiuose prekybos tinkluose, tokiuose kaip „Tesco", „Asda", „Sainsbury\'s" ir „Morrisons".',
      p2: 'Europos rinkose paklausą papildomai skatina augančios Afrikos, Azijos, Karibų ir kitos etninės bendruomenės, taip pat vietiniai vartotojai, ieškantys tarptautinių maisto produktų.',
      p3: 'Šis pasaulinių prekės ženklų stiprumas ir daugiakultūrė paklausa sukuria stiprų potencialą nuolatiniam mažmeninės prekybos pardavimui.',
      p4: 'Lietuvos ir Baltijos šalių rinkos turi panašų potencialą, ypač augant tarptautinėms bendruomenėms ir vietinių vartotojų susidomėjimui pasaulio skoniais.',
    },
    cta: {
      title: 'Pradėkite bendradarbiavimą šiandien',
      text: 'Susisiekite su mumis ir sužinokime, kaip galime kurti ilgalaikę, skaidrią ir patikimą partnerystę.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      products: 'Products',
      compliance: 'Quality & Compliance',
      logistics: 'Logistics',
      contact: 'Contact',
    },
    hero: {
      headline: 'Food Products Distribution',
      subheadline: 'Karken Company, UAB is a newly established Lithuanian company focused on the distribution of internationally recognised food brands within Lithuania and the wider European market.',
      cta: 'Partner With Us',
      ctaSecondary: 'Contact Us',
    },
    about: {
      title: 'About Us',
      subtitle: 'Company Overview',
      intro: 'Karken Company, UAB is a newly established Lithuanian company focused on the distribution of internationally recognised food brands within Lithuania and the wider European market. The company was created to meet growing consumer demand for trusted global products, with a particular focus on high-turnover packaged foods.',
      intro2: 'Our operations cover the entire supply chain – from product selection and quality control to final delivery to your warehouse or store. We understand that each customer has unique needs, so we offer flexible solutions tailored to your business model.',
      intro3: 'Our initial product focus includes Indomie instant noodles, a globally recognised brand with strong demand across Europe, Africa, and international consumer communities.',
      mission: {
        title: 'Our Objective',
        text: 'Our goal is to build long-term, transparent, and reliable partnerships with major retailers by supplying trusted international brands that meet both commercial and compliance expectations.',
        text2: 'We aim to be a reliable partner ensuring the highest quality product supply and professional service.',
      },
      vision: {
        title: 'Our Vision',
        text: 'To become a leading company distributing internationally recognised food products in Lithuania and other European markets.',
        text2: 'We envision a future where our products become an integral part of the European culinary landscape, and our partnerships contribute to food diversity and cultural enrichment.',
      },
      values: {
        title: 'Our Values',
        quality: 'Uncompromising Quality',
        qualityText: 'Every product meets the strictest EU food safety standards. We conduct continuous quality checks and work only with certified suppliers.',
        reliability: 'Reliability',
        reliabilityText: 'Consistent delivery schedules and product characteristics. Our customers can rely on regular deliveries and uninterrupted supply.',
        transparency: 'Transparency',
        transparencyText: 'Clear product origin and full traceability. We provide detailed information about each product and its journey from manufacturer to shelf.',
        partnership: 'Partnership',
        partnershipText: 'Long-term relationships with suppliers and customers. We value mutual respect and collaboration that grows with our business.',
        sustainability: 'Sustainability',
        sustainabilityText: 'We support sustainable practices and fair trade principles. We work responsibly and ensure social responsibility.',
        innovation: 'Innovation',
        innovationText: 'We constantly seek new products and improve supply processes. We invest in modern technologies and efficient logistics solutions.',
      },
      story: {
        title: 'Our Story',
        p1: 'Karken Company, UAB was born from a passionate desire to bring globally recognised food products to Lithuanian and European consumers. The company was created to meet growing consumer demand for trusted global products.',
        p2: 'Starting with Indomie instant noodles – a world-class brand with strong demand across Europe, Africa, and international consumer communities – we aim to expand our product range.',
        p3: 'Today, we are ready to become a trusted partner providing not only products but also comprehensive support to our customers – from small retail stores to international food chains.',
        p4: 'Our team has deep knowledge of international food culture, import procedures, and EU regulatory requirements. This allows us to ensure a smooth product journey from manufacturers to European store shelves.',
        p5: 'Looking to the future, we aim to expand our operations into new European markets, increase our product range, and continue strengthening ties with international manufacturers.',
      },
      team: {
        title: 'Our Team',
        text: 'Our team consists of professionals with experience in the food industry, international trade, and logistics. We combine deep understanding of international food culture with knowledge of European business practices.',
        text2: 'Each team member contributes to our common mission – ensuring that recognised international products reach European consumers in the highest quality and best conditions.',
      },
      stats: {
        years: 'New',
        yearsLabel: 'company',
        countries: 'Lithuania',
        countriesLabel: 'and Europe',
        products: 'Indomie',
        productsLabel: 'main product',
        partners: 'Growing',
        partnersLabel: 'partner network',
      },
    },
    services: {
      title: 'Business Focus',
      subtitle: 'Our Specialisation',
      intro: 'Karken Company, UAB specialises in import and distribution of branded food products, supplying mainstream retail chains and grocery outlets, and supporting multicultural and international food categories.',
      sourcing: {
        title: 'Import and Distribution of Branded Food Products',
        description: 'We import and distribute internationally recognised food product brands. Our initial focus is Indomie instant noodles, a globally recognised brand with strong demand across Europe, Africa, and international consumer communities.',
        description2: 'Indomie is widely consumed in African markets where it is considered a household staple, and it has a well-established presence in major UK supermarket chains such as Tesco, Asda, Sainsbury\'s, and Morrisons.',
        description3: 'In Europe, demand is further supported by growing African, Asian, Caribbean, and other ethnic communities, as well as local consumers seeking international food options.',
        features: ['International brand import', 'Quality control', 'Product distribution', 'Market analysis', 'Supplier management', 'Inventory planning'],
      },
      export: {
        title: 'Supplying Mainstream Retail Chains',
        description: 'We supply products to major retail chains and grocery outlets. We ensure reliable and consistent product availability.',
        description2: 'We work with trusted logistics partners with extensive experience in food product transportation. We ensure proper product quality and timely delivery.',
        description3: 'Our specialists are well versed in retail chain requirements and procedures. This allows us to ensure smooth collaboration.',
        features: ['Retail chain service', 'Regular deliveries', 'Inventory management', 'Product documentation', 'Quality assurance', 'Flexible solutions'],
      },
      import: {
        title: 'Supporting Multicultural and International Food Categories',
        description: 'We develop international and ethnic food categories in the Lithuanian and European markets. We help retailers expand their assortment with popular international products.',
        description2: 'In Europe, demand is supported by growing African, Asian, Caribbean, and other ethnic communities, as well as local consumers seeking international food options.',
        description3: 'This combination of global brand strength and multicultural demand creates strong potential for consistent retail sales.',
        features: ['Ethnic category development', 'Market potential analysis', 'Consumer needs research', 'Assortment planning', 'Category management', 'Sales support'],
      },
      distribution: {
        title: 'Distribution and Warehousing',
        description: 'We offer flexible distribution services throughout Lithuania and the broader European market. Our logistics network ensures prompt delivery.',
        description2: 'Ability to coordinate volumes and lead times based on retailer needs. Scalable supply approach aligned with retail growth and demand.',
        description3: 'We offer various delivery options – from full loads to small shipments. We can organise regular deliveries according to your needs.',
        features: ['Flexible delivery planning', 'Volume coordination', 'Lead time adjustment', 'Warehousing', 'Inventory management', 'Logistics solutions'],
      },
      consulting: {
        title: 'Consultation and Support',
        description: 'We provide consultation on international food products – from product selection to shelf planning. Our experts will help you create an attractive and profitable international product assortment.',
        features: ['Product assortment planning', 'Shelf space optimisation', 'Marketing support', 'Staff training'],
      },
    },
    products: {
      title: 'Our Products',
      subtitle: 'Internationally Recognised Food Products',
      intro: 'We offer internationally recognised food products with strong demand across European, African, and international consumer community markets.',
      intro2: 'Our initial product focus is Indomie instant noodles, a world-class brand widely consumed across African, Asian, and European markets.',
      intro3: 'We work only with trusted international manufacturers who adhere to international food safety standards.',
      categories: {
        grains: {
          title: 'Indomie Instant Noodles',
          description: 'Indomie is a global leader in the instant noodles category. The product is widely consumed in African countries where it is considered a household staple.',
          description2: 'Indomie has a well-established presence in major UK supermarket chains such as Tesco, Asda, Sainsbury\'s, and Morrisons. The product is well known and valued by consumers worldwide.',
          items: ['Indomie Mi Goreng', 'Indomie Chicken Curry', 'Indomie Special Chicken', 'Indomie Vegetable', 'Indomie Beef', 'Indomie Onion Chicken', 'Indomie Hot & Spicy', 'Indomie BBQ Chicken'],
        },
        packaged: {
          title: 'Multicultural Demand',
          description: 'In Europe, demand is supported by growing African, Asian, Caribbean, and other ethnic communities, as well as local consumers seeking international food options.',
          description2: 'This combination of global brand strength and multicultural demand creates strong potential for consistent retail sales.',
          items: ['African community', 'Asian community', 'Caribbean community', 'International consumers', 'Local enthusiasts', 'Food enthusiasts', 'Restaurants and cafes', 'Ethnic food stores'],
        },
        spices: {
          title: 'Market Potential',
          description: 'In the UK, Indomie is already firmly established in major retail chains. The Lithuanian and Baltic markets have similar potential.',
          description2: 'Growing international communities and local consumers\' interest in world flavours create excellent expansion opportunities.',
          items: ['Tesco (UK)', 'Asda (UK)', 'Sainsbury\'s (UK)', 'Morrisons (UK)', 'Lithuanian chains', 'Baltic chains', 'European markets', 'New partners'],
        },
        specialty: {
          title: 'Future Products',
          description: 'We plan to expand our product range by including more internationally recognised food brands.',
          description2: 'We follow market trends and consumer needs to offer the most relevant and in-demand products.',
          items: ['New brands', 'New category products', 'Seasonal products', 'Limited editions', 'Partner products', 'Special orders'],
        },
      },
      sourcing: {
        title: 'Product Quality',
        text: 'All our products are sourced from trusted international manufacturers. We ensure complete product documentation and certifications.',
      },
      quality: {
        title: 'Quality Guarantee',
        text: 'Each product batch is inspected before entering the distribution network. We ensure that all products meet EU food safety standards.',
      },
    },
    compliance: {
      title: 'Compliance & Standards',
      subtitle: 'Ensuring EU Standards',
      intro: 'Karken Company, UAB is committed to compliance with all applicable EU food safety and import regulations. We provide full product documentation, certifications, and specifications.',
      intro2: 'We meet retailer requirements related to quality, traceability, and logistics.',
      intro3: 'Our quality team continuously monitors regulatory changes and ensures that our processes comply with the latest EU and international standards.',
      euRegulations: {
        title: 'EU Food Safety Regulations',
        p1: 'All our imported products fully comply with European Union food safety regulations. Our quality management system ensures continuous compliance with changing regulatory requirements.',
        p2: 'We provide full product documentation, certifications, and specifications to meet retailer requirements related to quality, traceability, and logistics.',
        p3: 'Our specialists continuously monitor EU regulatory changes and ensure that all procedures are updated in a timely manner.',
        p4: 'We provide comprehensive documentation for each product, including certificates of origin, quality test protocols, and compliance declarations.',
      },
      certifications: {
        title: 'Documentation and Certifications',
        intro: 'We provide full product documentation and certifications meeting EU and retailer requirements.',
        items: ['Product specifications', 'Quality certificates', 'Origin documents', 'Nutritional information', 'Ingredient lists', 'Expiry dates', 'Storage requirements', 'Traceability documents'],
      },
      traceability: {
        title: 'Traceability',
        text: 'We ensure full product traceability from manufacturer to end buyer. This transparency ensures rapid response to any quality issues and strengthens trust among all supply chain participants.',
        text2: 'Each product has documentation allowing identification of its origin, production date, and all intermediaries in the supply chain.',
        text3: 'This system allows us to ensure the highest quality standard and rapid problem resolution.',
      },
      retailCompliance: {
        title: 'Retail Compliance',
        text: 'We meet retailer requirements related to quality, traceability, and logistics. Our products are prepared for retail – with proper labelling and all mandatory markings.',
        text2: 'We can adapt label information according to your chain requirements and ensure smooth collaboration.',
      },
      testing: {
        title: 'Quality Control',
        text: 'We conduct continuous quality control, ensuring that products meet all EU food safety requirements and retailer standards.',
        items: ['Product inspection', 'Document verification', 'Packaging control', 'Expiry date monitoring', 'Storage condition control', 'Transportation quality'],
      },
    },
    logistics: {
      title: 'Logistics & Supply Capability',
      subtitle: 'Flexible and Reliable Supply',
      intro: 'Our logistics capabilities ensure flexible and reliable product supply in Lithuania. Ability to coordinate volumes and lead times based on retailer needs.',
      intro2: 'Scalable supply approach aligned with retail growth and demand.',
      intro3: 'Our team works to ensure that products reach you on time and in the best conditions.',
      shipping: {
        title: 'Delivery Planning',
        p1: 'Flexible delivery planning within Lithuania. Ability to coordinate volumes and lead times based on retailer needs.',
        p2: 'Scalable supply approach aligned with retail growth and demand.',
        p3: 'Our logistics specialists optimise routes and ensure efficient delivery.',
        p4: 'We ensure proper product quality throughout the transportation process.',
      },
      flexibility: {
        title: 'Flexible Supply',
        intro: 'We offer various delivery options tailored to different business needs.',
        items: ['Flexible delivery planning', 'Volume coordination', 'Lead time adjustment', 'Regular deliveries', 'Urgent delivery', 'Direct warehouse delivery', 'Retail network delivery', 'Individual solutions'],
      },
      scalability: {
        title: 'Volume Flexibility',
        text: 'We can coordinate volumes based on retailer needs. Our supply model is tailored to growing demand and retail expansion.',
        text2: 'We offer flexible terms and the ability to adjust order volumes according to seasonal fluctuations and market needs.',
        text3: 'We can offer individual solutions according to your business needs.',
      },
      partnership: {
        title: 'Long-term Partnership',
        text: 'Our goal is to build long-term, transparent, and reliable partnerships with major retailers by supplying trusted international brands that meet both commercial and compliance expectations.',
        text2: 'We value long-term relationships with customers and offer special terms to regular partners.',
        text3: 'We regularly communicate with partners and share market trends and new product offerings.',
      },
      warehouse: {
        title: 'Warehousing',
        text: 'We ensure proper product storage conditions that meet food safety standards.',
        text2: 'Our warehouse management system ensures accurate inventory accounting and product freshness.',
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in Touch',
      intro: 'We are ready to answer your questions and discuss partnership opportunities. Contact us – our team will be happy to help find the best solution for your business.',
      intro2: 'Our goal is to build long-term, transparent, and reliable partnerships with major retailers.',
      form: {
        name: 'Full Name',
        company: 'Company',
        email: 'Email',
        phone: 'Phone',
        interest: 'Interest',
        interestOptions: ['Retail', 'Wholesale', 'HoReCa', 'Other'],
        message: 'Your Message',
        submit: 'Send Inquiry',
        success: 'Thank you! Your message has been sent. We will contact you soon.',
      },
      info: {
        company: 'Karken Company, UAB',
        address: 'Vilnius, Lithuania',
        phone: '+370 609 09398',
        email: ' hello@karkencompany.lt',
        hours: 'Business Hours: Mon-Fri 9:00 - 18:00',
      },
      reasons: {
        title: 'Why Partner With Us?',
        items: [
          'Internationally recognised food products',
          'Flexible delivery planning',
          'Full compliance with EU food safety standards',
          'Complete product documentation',
          'Traceability and quality assurance',
          'Long-term and transparent partnership',
        ],
      },
    },
    footer: {
      description: 'Karken Company, UAB – distribution of internationally recognised food products in Lithuania and Europe.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
      copyright: '© 2026 Karken Company, UAB. All rights reserved.',
    },
    marketDemand: {
      title: 'Market Experience & Demand Insight',
      subtitle: 'Strong Retail Sales Potential',
      p1: 'Indomie is widely consumed in African markets where it is considered a household staple, and it has a well-established presence in major UK supermarket chains such as Tesco, Asda, Sainsbury\'s, and Morrisons.',
      p2: 'In Europe, demand is further supported by growing African, Asian, Caribbean, and other ethnic communities, as well as local consumers seeking international food options.',
      p3: 'This combination of global brand strength and multicultural demand creates strong potential for consistent retail sales.',
      p4: 'The Lithuanian and Baltic markets have similar potential, especially with growing international communities and local consumers\' interest in world flavours.',
    },
    cta: {
      title: 'Start Your Partnership Today',
      text: 'Contact us and let\'s discuss how we can build a long-term, transparent, and reliable partnership.',
    },
  },
};
