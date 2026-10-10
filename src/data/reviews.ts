
export interface Review {
  author: string;
  rating: number;
  text: string;
}

export const googleReviewsUrl =
  'https://www.google.com/search?hl=nl-NL&sxsrf=APpeQns6fOz57AVOPDqkImka2Sq7lNMTVw:1791601573719&uds=AJ5uw1_a2D0D09lxm8gpKKOTUn4rCQ1AuVuOblaHljDY20zbnr6oc5vMOaJw0l1UjG2mfTe9PY1ehzT412tMOLJZB8oSEJbH2D48vDEQGquQBdJ-ZvQy92dMf4y1BUk-GYuN5c_l9EesS0SoaD-8oRBKWZZAtLlndg&q=Pol+Klusbedrijf+Reviews&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_4peANiYLxJlJ8JAGiVZ1bp4egpDXCtx3H6XDHj7HKn_AYVUHwGJwl4WeAH0pVsAiQWrs6zmzCLlwqzmtUW3jOvSvB-R';

export const reviews: Review[] = [
  {
    author: 'M. Doomen',
    rating: 5,
    text: 'Riccardo heeft een poort in onze schutting vakkundig vervangen, we hebben er veel plezier van. Een echte vakman!'
  },
  {
    author: 'Maikel Simons',
    rating: 5,
    text: 'Goede service en verstand van zaken'
  },
  {
    author: 'Peter van Kroonenburgh',
    rating: 5,
    text: 'Vakkundig en vlot de vloer geëgaliseerd en laminaat gelegd. Dik tevreden 👍'
  }
];
