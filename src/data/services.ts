export interface Service {
  no: string;
  icon: string;
  title: string;
  desc: string;
  tag: string;
}

export const services: Service[] = [
  { no: '01', icon: '⌁', title: 'Timmerwerk & maatwerk', desc: 'Van een maatwerkkast tot een overkapping. Slim ontworpen, zorgvuldig gemaakt.', tag: 'HOUT & MAATWERK' },
  { no: '02', icon: '▱', title: 'Traprenovatie', desc: 'Geef uw trap een tweede leven met een afwerking die bij uw interieur past.', tag: 'RENOVATIE' },
  { no: '03', icon: '◩', title: 'Schilderwerk', desc: 'Een frisse uitstraling voor wanden, deuren, kozijnen en meer.', tag: 'BINNEN & BUITEN' },
  { no: '04', icon: '▣', title: 'Deuren & kozijnen', desc: 'Repareren, vervangen of netjes afwerken. Tot in de details.', tag: 'MONTAGE' },
  { no: '05', icon: '⌗', title: 'Sleuf- & betonwerk', desc: 'Praktisch voorbereidende werkzaamheden voor verbouwing en renovatie.', tag: 'VERBOUWING' },
  { no: '06', icon: '◈', title: 'Onderhoud & klussen', desc: 'Kleine klussen en grotere verbeteringen aan uw woning.', tag: 'ONDERHOUD' },
];
