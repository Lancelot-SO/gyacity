// The Bar — real project photography (bundled by Vite).
import barNeon       from '@/assets/the-bar/IMG_9938.jpg'; // red-neon night exterior
import barNight      from '@/assets/the-bar/IMG_9945.jpg'; // moody finished interior
import barPanels     from '@/assets/the-bar/IMG_9941.jpg'; // bar counter, diamond panels
import barBlue       from '@/assets/the-bar/IMG_9933.jpg'; // bar under blue ceiling
import barFacade     from '@/assets/the-bar/IMG_9936.jpg'; // glass facade, day
import barFacade2    from '@/assets/the-bar/IMG_9937.jpg'; // facade, second angle
import barTerrace    from '@/assets/the-bar/IMG_9939.jpg'; // string-lit terrace, dusk
import barTerrace2   from '@/assets/the-bar/IMG_9940.jpg'; // terrace, second angle
import barBuild      from '@/assets/the-bar/IMG_9934.jpg'; // build in progress

export const PROJECTS = [
  { id:'maison-onyx',       no:'I',    title:'Maison Onyx',        place:'East Legon, Accra',       year:'2025', cat:'Residential', type:'Private residence · 720 m²',  img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85' },
  { id:'hotel-saharienne',  no:'II',   title:'Hôtel Saharienne',   place:'Victoria Island, Lagos',  year:'2024', cat:'Hospitality', type:'Boutique hotel · 42 keys',     img:'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1400&q=85' },
  { id:'ardor-hq',          no:'III',  title:'Ardor Capital HQ',   place:'Charlottenburg, Berlin',  year:'2025', cat:'Corporate',   type:'Headquarters · 3,200 m²',     img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85' },
  { id:'villa-cisse',       no:'IV',   title:'Villa Cissé',        place:'Cantonments, Accra',      year:'2024', cat:'Residential', type:'Private residence · 540 m²',  img:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=85' },
  { id:'courtyard-ikoyi',   no:'V',    title:'Courtyard Ikoyi',    place:'Ikoyi, Lagos',            year:'2023', cat:'Exterior',    type:'Garden & facade · 1,100 m²', img:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=85' },
  { id:'taverne-noire',     no:'VI',   title:'Taverne Noire',      place:'Mitte, Berlin',           year:'2025', cat:'Hospitality', type:'Restaurant · 110 covers',     img:'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1400&q=85' },
  { id:'luxe-living',       no:'VII',  title:'Luxe Living',        place:'Lisbon, Portugal',        year:'2023', cat:'Residential', type:'Private residence · 480 m²',  img:'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=85' },
  { id:'soft-minimal',      no:'VIII', title:'Soft Minimalism',    place:'Milan, Italy',            year:'2023', cat:'Residential', type:'Apartment · 210 m²',          img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85' },
  { id:'dust-light',        no:'IX',   title:'Dust & Light',       place:'Palm, Indonesia',         year:'2024', cat:'Residential', type:'Private villa · 380 m²',      img:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=85' },
  { id:'the-bar',           no:'X',    title:'The Bar',            place:'Spintex, Accra',          year:'2024', cat:'Hospitality', type:'Bar & lounge',                img:barNeon },
];

export const TESTIMONIALS = [
  { quote:'Working with Gyacity has been a real pleasure. Their designers demonstrated creativity, attention to detail, and the ability to bring our wishes to life. Our home has become a truly wonderful place.', name:'Ksenia Marchenko', place:'Kyiv, Ukraine' },
  { quote:'Gyacity is truly professional in interior design. They transformed our old kitchen into a space where we now love to spend time. Thank you for your work and dedication.', name:'Chiara Moretti', place:'Milan, Italy' },
  { quote:'Gyacity did what we believed only the great European houses could. Restrained, quiet, deeply considered — and unmistakably of this place.', name:'Nana Adjoa Owusu', place:'Accra, Ghana' },
  { quote:'Twelve months in and the hotel still photographs better than the day we opened. Guests ask who designed it. We never tire of answering.', name:'Adetola Bankole', place:'Lagos, Nigeria' },
];

export const IMGS = {
  hero:    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&q=88',
  arch:    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=85',
  kitchen: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=88',
  luxe:    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85',
  min:     'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85',
  dust:    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=85',
};

export const OFFICES = [
  { city:'Accra',  tz:'GMT', principal:'Akwasi Mensah',  addr:['No. 14 Volta Street','Cantonments, Accra'],  tel:'+233 24 905 1184', email:'accra@gyacity.com' },
  { city:'Lagos',  tz:'WAT', principal:'Ifeoma Okafor',  addr:['Plot 7B, Bourdillon Road','Ikoyi, Lagos'],   tel:'+234 1 271 4090',  email:'lagos@gyacity.com' },
  { city:'Berlin', tz:'CET', principal:'Lukas Brandt',   addr:['Linienstraße 154','10115 Berlin-Mitte'],     tel:'+49 30 235 928 12',email:'berlin@gyacity.com' },
];

// ── Project detail ───────────────────────────────────────────────────────────
// Shared editorial imagery; each detail page draws a deterministic slice so the
// galleries feel curated rather than random.
const GALLERY_POOL = [
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=88',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=88',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1800&q=88',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&q=88',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1800&q=88',
  'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1800&q=88',
  'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1800&q=88',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1800&q=88',
];

// Per-project copy + extras. Keep summaries to a single evocative line.
// `video.src` points at stable placeholder footage — swap for real project films.
const PLACEHOLDER_FILM = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';

const PROJECT_DETAILS = {
  'the-bar':          { area:'Bar & terrace', services:'Architecture · Interiors · Lighting', summary:'A roadside bar wrapped in red light — warm timber, brass and backlit panels, built for nights that run long.', gallery:[barNight, barPanels, barBlue, barFacade, barFacade2, barTerrace, barTerrace2, barBuild] },
  'maison-onyx':      { area:'720 m²',   services:'Architecture · Interiors · Joinery', summary:'A private residence carved in onyx, oak and quiet light — where mass dissolves into calm.', video:{ src:PLACEHOLDER_FILM, poster:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=88' } },
  'hotel-saharienne': { area:'42 keys',  services:'Interiors · Lighting · FF&E',         summary:'Forty-two keys of desert restraint — warm shadow, hand-troweled plaster and the slow luxury of less.', video:{ src:PLACEHOLDER_FILM, poster:'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1800&q=88' } },
  'ardor-hq':         { area:'3,200 m²', services:'Architecture · Workplace · Identity',  summary:'A headquarters that whispers — brushed brass, deep timber and daylight engineered to the hour.' },
  'villa-cisse':      { area:'540 m²',   services:'Architecture · Interiors · Joinery',  summary:'Family life, distilled. Open volumes, tactile stone and a courtyard that breathes with the seasons.' },
  'courtyard-ikoyi':  { area:'1,100 m²', services:'Landscape · Façade · Lighting',       summary:'Garden and façade as one gesture — a green threshold between the city and the still interior.' },
  'taverne-noire':    { area:'110 covers', services:'Interiors · Lighting · FF&E',       summary:'A hundred and ten covers in low candlelight — oxblood, char and the intimacy of the long table.' },
  'luxe-living':      { area:'480 m²',   services:'Interiors · Styling · Art',           summary:'Coastal calm rendered in linen, lime and pale oak — a residence tuned to the Atlantic light.' },
  'soft-minimal':     { area:'210 m²',   services:'Interiors · Joinery · Lighting',      summary:'An apartment reduced to its essentials — soft edges, honest materials, nothing left to spare.' },
  'dust-light':       { area:'380 m²',   services:'Architecture · Interiors · Landscape', summary:'A villa between dust and light — raw concrete softened by tropical green and open air.' },
};

// Returns the project merged with its detail copy + a 6-image gallery, or null.
export function getProjectDetail(id) {
  const index = PROJECTS.findIndex(p => p.id === id);
  if (index === -1) return null;
  const base = PROJECTS[index];
  const detail = PROJECT_DETAILS[id] || {};
  const offset = index % GALLERY_POOL.length;
  const rotated = [...GALLERY_POOL.slice(offset), ...GALLERY_POOL.slice(0, offset)];
  // Hero is shown separately, so the gallery excludes base.img to avoid a repeat.
  const gallery = (detail.gallery || rotated).filter(src => src !== base.img).slice(0, 8);
  return {
    area: base.type.split('·').pop().trim(),
    services: 'Architecture · Interiors',
    summary: base.type,
    ...detail,
    ...base,
    index,
    gallery,
  };
}

// The next project in the archive (wraps around) — used for the "next" link.
export function getAdjacentProject(id) {
  const index = PROJECTS.findIndex(p => p.id === id);
  if (index === -1) return null;
  return PROJECTS[(index + 1) % PROJECTS.length];
}
