/* global window */

const PROJECTS = [
  { id:'maison-onyx',       no:'I',   title:'Maison Onyx',        place:'East Legon, Accra',       year:'2025', cat:'Residential', type:'Private residence · 720 m²',    img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85' },
  { id:'hotel-saharienne',  no:'II',  title:'Hôtel Saharienne',   place:'Victoria Island, Lagos',  year:'2024', cat:'Hospitality', type:'Boutique hotel · 42 keys',       img:'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1400&q=85' },
  { id:'ardor-hq',          no:'III', title:'Ardor Capital HQ',   place:'Charlottenburg, Berlin',  year:'2025', cat:'Corporate',   type:'Headquarters · 3,200 m²',       img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85' },
  { id:'villa-cisse',       no:'IV',  title:'Villa Cissé',        place:'Cantonments, Accra',      year:'2024', cat:'Residential', type:'Private residence · 540 m²',    img:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=85' },
  { id:'courtyard-ikoyi',   no:'V',   title:'Courtyard Ikoyi',    place:'Ikoyi, Lagos',            year:'2023', cat:'Exterior',    type:'Garden & facade · 1,100 m²',   img:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=85' },
  { id:'taverne-noire',     no:'VI',  title:'Taverne Noire',      place:'Mitte, Berlin',           year:'2025', cat:'Hospitality', type:'Restaurant · 110 covers',       img:'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1400&q=85' },
  { id:'luxe-living',       no:'VII', title:'Luxe Living',        place:'Lisbon, Portugal',        year:'2023', cat:'Residential', type:'Private residence · 480 m²',    img:'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=85' },
  { id:'soft-minimal',      no:'VIII',title:'Soft Minimalism',    place:'Milan, Italy',            year:'2023', cat:'Residential', type:'Apartment · 210 m²',            img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85' },
  { id:'dust-light',        no:'IX',  title:'Dust & Light',       place:'Palm, Indonesia',         year:'2024', cat:'Residential', type:'Private villa · 380 m²',        img:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=85' },
];

const TESTIMONIALS = [
  { quote:'Working with Gyacity has been a real pleasure. Their designers demonstrated creativity, attention to detail, and the ability to bring our wishes to life. Our home has become a truly wonderful place.', name:'Ksenia Marchenko', place:'Kyiv, Ukraine' },
  { quote:'Gyacity is truly professional in interior design. They transformed our old kitchen into a space where we now love to spend time. Thank you for your work and dedication.', name:'Chiara Moretti', place:'Milan, Italy' },
  { quote:'Gyacity did what we believed only the great European houses could. Restrained, quiet, deeply considered — and unmistakably of this place.', name:'Nana Adjoa Owusu', place:'Accra, Ghana' },
  { quote:'Twelve months in and the hotel still photographs better than the day we opened. Guests ask who designed it. We never tire of answering.', name:'Adetola Bankole', place:'Lagos, Nigeria' },
];

const IMGS = {
  hero:    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&q=88',
  arch:    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=85',
  kitchen: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=88',
  luxe:    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85',
  min:     'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85',
  dust:    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=85',
};

const OFFICES = [
  { city:'Accra',  tz:'GMT', principal:'Akwasi Mensah',  addr:['No. 14 Volta Street','Cantonments, Accra'],    tel:'+233 24 905 1184', email:'accra@gyacity.com' },
  { city:'Lagos',  tz:'WAT', principal:'Ifeoma Okafor',  addr:['Plot 7B, Bourdillon Road','Ikoyi, Lagos'],     tel:'+234 1 271 4090',   email:'lagos@gyacity.com' },
  { city:'Berlin', tz:'CET', principal:'Lukas Brandt',   addr:['Linienstraße 154','10115 Berlin-Mitte'],       tel:'+49 30 235 928 12', email:'berlin@gyacity.com' },
];

Object.assign(window, { PROJECTS, TESTIMONIALS, IMGS, OFFICES });
