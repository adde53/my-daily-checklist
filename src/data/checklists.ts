export type Category = 'flytt' | 'ekonomi' | 'jobb' | 'halsa' | 'resor' | 'admin';

export interface ChecklistItem {
  id: string;
  text: string;
  description?: string;
}

export interface Checklist {
  id: string;
  title: string;
  description: string;
  category: Category;
  items: ChecklistItem[];
  estimatedTime?: string;
  isPremium?: boolean;
}

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  icon: string;
  count: number;
}

export const categories: CategoryInfo[] = [
  {
    id: 'flytt',
    name: 'Flytt & Boende',
    description: 'Allt du behöver för en smidig flytt',
    icon: 'Home',
    count: 3,
  },
  {
    id: 'ekonomi',
    name: 'Ekonomi',
    description: 'Håll koll på din budget och betalningar',
    icon: 'Wallet',
    count: 3,
  },
  {
    id: 'jobb',
    name: 'Jobb & Utbildning',
    description: 'Förbered dig för karriären',
    icon: 'Briefcase',
    count: 3,
  },
  {
    id: 'halsa',
    name: 'Hälsa & Vardag',
    description: 'Ta hand om dig själv',
    icon: 'Heart',
    count: 3,
  },
  {
    id: 'resor',
    name: 'Resor & Semester',
    description: 'Res utan stress',
    icon: 'Plane',
    count: 3,
  },
  {
    id: 'admin',
    name: 'Administration',
    description: 'Ordning på pappren',
    icon: 'FileText',
    count: 3,
  },
];

export const checklists: Checklist[] = [
  // Flytt
  {
    id: 'flytt-lagenhet',
    title: 'Flytta till lägenhet',
    description: 'Komplett checklista för att flytta till en ny lägenhet',
    category: 'flytt',
    estimatedTime: '4-8 veckor',
    items: [
      { id: '1', text: 'Säg upp nuvarande bostad', description: 'Kontrollera uppsägningstid i kontraktet' },
      { id: '2', text: 'Boka flyttfirma eller hyr släp', description: 'Jämför priser hos flera företag' },
      { id: '3', text: 'Anmäl adressändring hos Skatteverket' },
      { id: '4', text: 'Flytta el- och bredbandsavtal' },
      { id: '5', text: 'Uppdatera hemförsäkring' },
      { id: '6', text: 'Meddela bank, arbetsgivare och försäkringsbolag' },
      { id: '7', text: 'Boka städning av gamla bostaden' },
      { id: '8', text: 'Ordna nycklar till nya bostaden' },
      { id: '9', text: 'Planera möbelplacering i nya hemmet' },
      { id: '10', text: 'Packa rum för rum med tydlig märkning' },
    ],
  },
  {
    id: 'flytt-packning',
    title: 'Flyttpackning',
    description: 'Strukturerad guide för att packa effektivt',
    category: 'flytt',
    estimatedTime: '1-2 veckor',
    items: [
      { id: '1', text: 'Skaffa flyttkartonger i olika storlekar' },
      { id: '2', text: 'Köp bubbelplast och packpapper' },
      { id: '3', text: 'Packa säsongsgrejer först' },
      { id: '4', text: 'Märk alla kartonger med rum och innehåll' },
      { id: '5', text: 'Packa tunga saker i små kartonger' },
      { id: '6', text: 'Skydda ömtåliga saker extra noga' },
      { id: '7', text: 'Ta foton av elektronikinstallationer' },
      { id: '8', text: 'Packa en "första natten"-väska' },
    ],
  },
  {
    id: 'flytt-uppsagningar',
    title: 'Uppsägningar vid flytt',
    description: 'Alla abonnemang och avtal att säga upp eller flytta',
    category: 'flytt',
    estimatedTime: '2-4 veckor',
    items: [
      { id: '1', text: 'Elavtal' },
      { id: '2', text: 'Bredband och TV' },
      { id: '3', text: 'Hemförsäkring' },
      { id: '4', text: 'Gym/träningskort' },
      { id: '5', text: 'Tidningsprenumerationer' },
      { id: '6', text: 'Streaming-tjänster (uppdatera adress)' },
      { id: '7', text: 'Parkeringstillstånd' },
    ],
  },
  // Ekonomi
  {
    id: 'ekonomi-budget',
    title: 'Månadsbudget',
    description: 'Skapa och följ upp din månadsbudget',
    category: 'ekonomi',
    estimatedTime: '1-2 timmar',
    items: [
      { id: '1', text: 'Lista alla inkomster efter skatt' },
      { id: '2', text: 'Räkna ihop fasta kostnader (hyra, el, försäkringar)' },
      { id: '3', text: 'Budgetera för mat och hushåll' },
      { id: '4', text: 'Sätt av pengar till sparande' },
      { id: '5', text: 'Planera för transport/bil' },
      { id: '6', text: 'Avsätt pengar för nöjen och fritid' },
      { id: '7', text: 'Granska och jämför föregående månad' },
      { id: '8', text: 'Justera budgeten vid behov' },
    ],
  },
  {
    id: 'ekonomi-rakningar',
    title: 'Månatliga räkningar',
    description: 'Håll koll på alla räkningar som ska betalas',
    category: 'ekonomi',
    estimatedTime: 'Löpande',
    items: [
      { id: '1', text: 'Hyra/boendekostnad' },
      { id: '2', text: 'El och värme' },
      { id: '3', text: 'Hemförsäkring' },
      { id: '4', text: 'Mobilabonnemang' },
      { id: '5', text: 'Bredband' },
      { id: '6', text: 'Streaming-tjänster' },
      { id: '7', text: 'Eventuella lån och krediter' },
      { id: '8', text: 'Bilförsäkring och skatt' },
    ],
  },
  {
    id: 'ekonomi-lan',
    title: 'Granska lån & räntor',
    description: 'Årlig genomgång av dina lån',
    category: 'ekonomi',
    estimatedTime: '2-3 timmar',
    items: [
      { id: '1', text: 'Lista alla lån med aktuella räntor' },
      { id: '2', text: 'Jämför med konkurrenternas erbjudanden' },
      { id: '3', text: 'Kontakta din bank om bättre villkor' },
      { id: '4', text: 'Överväg att samla lån' },
      { id: '5', text: 'Kontrollera amorteringsplan' },
      { id: '6', text: 'Granska eventuella avgifter' },
    ],
  },
  // Jobb
  {
    id: 'jobb-cv',
    title: 'CV & Personligt brev',
    description: 'Skapa ett professionellt CV och personligt brev',
    category: 'jobb',
    estimatedTime: '3-5 timmar',
    items: [
      { id: '1', text: 'Uppdatera kontaktuppgifter' },
      { id: '2', text: 'Skriv en kort sammanfattning/profil' },
      { id: '3', text: 'Lista arbetslivserfarenhet kronologiskt' },
      { id: '4', text: 'Inkludera relevanta utbildningar' },
      { id: '5', text: 'Lägg till certifikat och kurser' },
      { id: '6', text: 'Lista relevanta färdigheter' },
      { id: '7', text: 'Anpassa personligt brev till tjänsten' },
      { id: '8', text: 'Korrekturläs noggrant' },
      { id: '9', text: 'Be någon granska dokumenten' },
    ],
  },
  {
    id: 'jobb-intervju',
    title: 'Förbered jobbintervju',
    description: 'Gör dig redo för att lyckas på intervjun',
    category: 'jobb',
    estimatedTime: '2-4 timmar',
    items: [
      { id: '1', text: 'Researcha företaget grundligt' },
      { id: '2', text: 'Läs igenom jobbannonsen igen' },
      { id: '3', text: 'Förbered svar på vanliga frågor' },
      { id: '4', text: 'Förbered egna frågor till arbetsgivaren' },
      { id: '5', text: 'Välj lämplig klädsel' },
      { id: '6', text: 'Planera resan till intervjuplatsen' },
      { id: '7', text: 'Ta med extra CV-kopior' },
      { id: '8', text: 'Öva på att presentera dig själv' },
    ],
  },
  {
    id: 'jobb-sommar',
    title: 'Sommarjobbsansökan',
    description: 'Hitta och sök sommarjobb',
    category: 'jobb',
    estimatedTime: '1-2 veckor',
    items: [
      { id: '1', text: 'Börja söka i god tid (jan-feb)' },
      { id: '2', text: 'Uppdatera ditt CV' },
      { id: '3', text: 'Skriv ett generellt personligt brev' },
      { id: '4', text: 'Sök via Arbetsförmedlingen' },
      { id: '5', text: 'Kolla kommunens sommarjobb' },
      { id: '6', text: 'Kontakta lokala företag direkt' },
      { id: '7', text: 'Följ upp ansökningar efter 1-2 veckor' },
    ],
  },
  // Hälsa
  {
    id: 'halsa-traning',
    title: 'Veckovis träningsschema',
    description: 'Planera veckans träning',
    category: 'halsa',
    estimatedTime: 'Veckovis',
    items: [
      { id: '1', text: 'Bestäm träningsmål för veckan' },
      { id: '2', text: 'Schemalägg träningspass' },
      { id: '3', text: 'Planera vilodag(ar)' },
      { id: '4', text: 'Förbered träningskläder' },
      { id: '5', text: 'Fyll på vattenflaska' },
      { id: '6', text: 'Boka eventuella gruppträningar' },
      { id: '7', text: 'Utvärdera förra veckans träning' },
    ],
  },
  {
    id: 'halsa-maltider',
    title: 'Veckoplanering måltider',
    description: 'Planera veckans måltider för bättre hälsa och ekonomi',
    category: 'halsa',
    estimatedTime: '30-60 min',
    items: [
      { id: '1', text: 'Inventera kyl och skafferi' },
      { id: '2', text: 'Planera veckans middagar' },
      { id: '3', text: 'Planera luncher (matlåda?)' },
      { id: '4', text: 'Skriv inköpslista' },
      { id: '5', text: 'Handla enligt listan' },
      { id: '6', text: 'Gör matlådepreppning på söndagen' },
    ],
  },
  {
    id: 'halsa-vaccination',
    title: 'Vaccinationschecklista',
    description: 'Håll koll på viktiga vaccinationer',
    category: 'halsa',
    estimatedTime: 'Årlig översyn',
    items: [
      { id: '1', text: 'Kontrollera TBE-vaccination (skogsområden)' },
      { id: '2', text: 'Influensavaccin (riskgrupper)' },
      { id: '3', text: 'Stelkrampsvaccin (vart 20:e år)' },
      { id: '4', text: 'Kontrollera vaccinationer inför resa' },
      { id: '5', text: 'Boka tid på vårdcentral vid behov' },
    ],
  },
  // Resor
  {
    id: 'resor-packlista',
    title: 'Packlista semester',
    description: 'Glöm ingenting viktigt på semesterresan',
    category: 'resor',
    estimatedTime: '1-2 timmar',
    items: [
      { id: '1', text: 'Pass och ID-handlingar' },
      { id: '2', text: 'Kreditkort och kontanter' },
      { id: '3', text: 'Resedokument och bokningsbekräftelser' },
      { id: '4', text: 'Reseförsäkring' },
      { id: '5', text: 'Mediciner och receptkopior' },
      { id: '6', text: 'Laddare och powerbank' },
      { id: '7', text: 'Kläder efter väder och aktiviteter' },
      { id: '8', text: 'Toalettartiklar' },
      { id: '9', text: 'Solskydd och solglasögon' },
      { id: '10', text: 'Underhållning för resan' },
    ],
  },
  {
    id: 'resor-dokument',
    title: 'Viktiga resedokument',
    description: 'Dokumentchecklista för utlandsresa',
    category: 'resor',
    estimatedTime: '30 min',
    items: [
      { id: '1', text: 'Giltigt pass (minst 6 mån)' },
      { id: '2', text: 'Eventuellt visum' },
      { id: '3', text: 'EU-kort för sjukvård' },
      { id: '4', text: 'Reseförsäkringsbevis' },
      { id: '5', text: 'Internationellt körkort (vid behov)' },
      { id: '6', text: 'Kopior av alla dokument (digitalt)' },
      { id: '7', text: 'Kontaktinfo till ambassad' },
    ],
  },
  {
    id: 'resor-forberedelser',
    title: 'Innan avresa',
    description: 'Saker att ordna innan du åker',
    category: 'resor',
    estimatedTime: '1-2 dagar',
    items: [
      { id: '1', text: 'Meddela bank om utlandsresa' },
      { id: '2', text: 'Ordna skötsel av husdjur' },
      { id: '3', text: 'Be någon vattna blommor' },
      { id: '4', text: 'Töm kylskåpet på färskvaror' },
      { id: '5', text: 'Stäng av onödiga elapparater' },
      { id: '6', text: 'Lås alla fönster och dörrar' },
      { id: '7', text: 'Sätt på lampor med timer' },
      { id: '8', text: 'Stoppa post/tidningar' },
    ],
  },
  // Admin
  {
    id: 'admin-deklaration',
    title: 'Deklaration',
    description: 'Förbered och lämna in deklarationen',
    category: 'admin',
    estimatedTime: '1-3 timmar',
    items: [
      { id: '1', text: 'Logga in på Skatteverket' },
      { id: '2', text: 'Kontrollera förtryckta uppgifter' },
      { id: '3', text: 'Samla kvitton för avdrag' },
      { id: '4', text: 'Deklarera eventuell bostadsförsäljning' },
      { id: '5', text: 'Deklarera kapitalvinster/förluster' },
      { id: '6', text: 'Kontrollera ROT/RUT-avdrag' },
      { id: '7', text: 'Granska och godkänn' },
      { id: '8', text: 'Spara kvitto på inskickad deklaration' },
    ],
  },
  {
    id: 'admin-pass',
    title: 'Passansökan',
    description: 'Så ansöker du om nytt pass',
    category: 'admin',
    estimatedTime: '1-2 veckor',
    items: [
      { id: '1', text: 'Kontrollera giltigheten på nuvarande pass' },
      { id: '2', text: 'Boka tid hos polisen' },
      { id: '3', text: 'Ta med giltig ID-handling' },
      { id: '4', text: 'Förbered betalning (ca 400-700 kr)' },
      { id: '5', text: 'Ta passfoto (görs på plats)' },
      { id: '6', text: 'Hämta passet när det är klart' },
    ],
  },
  {
    id: 'admin-bygglov',
    title: 'Bygglovsansökan',
    description: 'Förbered och skicka in bygglovsansökan',
    category: 'admin',
    estimatedTime: '2-4 veckor',
    items: [
      { id: '1', text: 'Kontakta kommunen för rådgivning' },
      { id: '2', text: 'Beställ nybyggnadskarta' },
      { id: '3', text: 'Ta fram ritningar (plan, fasad, sektion)' },
      { id: '4', text: 'Skriv teknisk beskrivning' },
      { id: '5', text: 'Fyll i ansökningsblanketten' },
      { id: '6', text: 'Skicka in ansökan' },
      { id: '7', text: 'Invänta beslut (ca 10 veckor)' },
      { id: '8', text: 'Boka startbesked innan byggstart' },
    ],
  },
];

export const getChecklistsByCategory = (category: Category): Checklist[] => {
  return checklists.filter((c) => c.category === category);
};

export const getChecklistById = (id: string): Checklist | undefined => {
  return checklists.find((c) => c.id === id);
};

export const getCategoryInfo = (id: Category): CategoryInfo | undefined => {
  return categories.find((c) => c.id === id);
};

export const searchChecklists = (query: string): Checklist[] => {
  const lowerQuery = query.toLowerCase();
  return checklists.filter(
    (c) =>
      c.title.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery) ||
      c.items.some((item) => item.text.toLowerCase().includes(lowerQuery))
  );
};
