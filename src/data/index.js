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

// Emerald Lounge — real project photography (bundled by Vite).
import emHero     from '@/assets/emerald-lounge/IMG_9913.jpg'; // full lounge, neon feature
import emWide     from '@/assets/emerald-lounge/IMG_9912.jpg'; // clean wide, pendant + media wall
import emRoomA    from '@/assets/emerald-lounge/IMG_9919.jpg'; // full sofa set, angle
import emRoomB    from '@/assets/emerald-lounge/IMG_9915.jpg'; // full sofa set, angle
import emTv       from '@/assets/emerald-lounge/IMG_9917.jpg'; // media wall, pendant cluster
import emLiving   from '@/assets/emerald-lounge/IMG_9906.jpg'; // living room, rug
import emRoomC    from '@/assets/emerald-lounge/IMG_9916.jpg'; // full sofa set, angle
import emRoomD    from '@/assets/emerald-lounge/IMG_9914.jpg'; // full sofa set, angle
import emTvAngle  from '@/assets/emerald-lounge/IMG_9907.jpg'; // media wall, side angle
import emPendant  from '@/assets/emerald-lounge/IMG_9909.jpg'; // sculptural pendant detail
import emNeon     from '@/assets/emerald-lounge/IMG_9920.jpg'; // neon script + lights detail
import emGreen    from '@/assets/emerald-lounge/IMG_9901.jpg'; // emerald suite, furnishing

// The Sanctuary — bathroom suite renovation photography.
import sanHero    from '@/assets/the-sanctuary/IMG_9993.jpg'; // full room overview — hero
import sanWide    from '@/assets/the-sanctuary/IMG_9991.jpg'; // shower + toilet, wide
import sanAerial  from '@/assets/the-sanctuary/IMG_9995.jpg'; // aerial, full layout
import sanVanity  from '@/assets/the-sanctuary/IMG_9992.jpg'; // LED mirror vanity close-up
import sanShower  from '@/assets/the-sanctuary/IMG_9988.jpg'; // black steel shower enclosure
import sanNiche   from '@/assets/the-sanctuary/IMG_9994.jpg'; // gold niche feature wall
import sanDetail  from '@/assets/the-sanctuary/IMG_9996.jpg'; // gold niche + glass cubicle
import sanToilet  from '@/assets/the-sanctuary/IMG_9987.jpg'; // vanity/toilet area
import sanToilet2 from '@/assets/the-sanctuary/IMG_9990.jpg'; // vanity/toilet, second angle
import sanBasin   from '@/assets/the-sanctuary/IMG_9989.jpg'; // marble corner basin detail

// Homepage hero + banner (provided assets).
import heroImg    from '@/assets/hero.jpg';
import bannerImg  from '@/assets/banner.jpeg';

export const PROJECTS = [
  { id:'emerald-lounge', no:'I',   title:'Emerald Lounge', place:'Kumasi', year:'2024', cat:'Residential', type:'Private residence', img:emHero  },
  { id:'the-bar',        no:'II',  title:'The Bar',        place:'Kumasi', year:'2024', cat:'Hospitality', type:'Bar & lounge',      img:barNeon },
  { id:'the-sanctuary',  no:'III', title:'The Sanctuary',  place:'Kumasi', year:'2025', cat:'Residential', type:'Bathroom suite',    img:sanHero },
];

export const TESTIMONIALS = [
  { name:'Kwame Asante',   place:'Kumasi, Ghana' },
  { name:'Abena Mensah',   place:'Accra, Ghana'  },
  { name:'Kofi Agyemang',  place:'Kumasi, Ghana' },
  { name:'Ama Boateng',    place:'Accra, Ghana'  },
];

// Site-wide decorative imagery — drawn from the studio's real Accra projects so
// every section reflects the company's Ghanaian/West-African work.
export const IMGS = {
  hero:    emWide,    // Emerald Lounge — clean wide living room
  arch:    barNight,  // The Bar — long backlit counter (reads well as a wide band)
  kitchen: emLiving,  // Emerald Lounge — sofas, rug, emerald walls
  luxe:    emRoomA,   // Emerald Lounge — full seating, neon feature
  min:     barPanels, // The Bar — counter & diamond panels
  dust:    barTerrace,// The Bar — string-lit terrace
};

// Homepage decorative imagery — African architecture & styling (Unsplash stock).
// Kept separate from IMGS so other pages are unaffected.
export const HOME_IMGS = {
  hero:    heroImg,   // provided hero image
  banner:  bannerImg, // provided banner strip (architectural model)
  kitchen: 'https://images.unsplash.com/photo-1672865362670-b22b90b1fb95?w=1600&q=85&auto=format&fit=crop', // earthen interior with fireplace
};

export const OFFICES = [
  { city:'Ghana',   tz:'GMT', principal:'Brown Gyasi Sydney',  addr:['Lakeside Estate','Kumasi'],          tel:'+233 50 599 8696', email:'accra@gyacity.com' },
  { city:'Nigeria', tz:'WAT', principal:'Ifeoma Okafor',  addr:['Plot 7B, Bourdillon Road','Ikoyi'],       tel:'+234 1 271 4090',  email:'lagos@gyacity.com' },
  { city:'Germany', tz:'CET', principal:'Lukas Brandt',   addr:['Linienstraße 154','10115 Berlin-Mitte'],  tel:'+49 30 235 928 12',email:'berlin@gyacity.com' },
];

// ── Project detail ───────────────────────────────────────────────────────────
// Per-project copy + the full image gallery shown on the detail page.
const PROJECT_DETAILS = {
  'emerald-lounge': {
    area: 'Living & lounge',
    services: 'Interiors · Lighting · FF&E',
    summary: 'A family lounge in deep emerald and cream — sculptural light, soft velvet and marble underfoot.',
    gallery: [emWide, emRoomA, emRoomB, emTv, emLiving, emRoomC, emRoomD, emTvAngle, emPendant, emNeon, emGreen],
  },
  'the-sanctuary': {
    area: 'Bathroom suite',
    services: 'Interiors · Tiling · Lighting · FF&E',
    summary: 'Dark marble, teak and gold — a private bathroom transformed into a personal sanctuary.',
    gallery: [sanWide, sanAerial, sanVanity, sanShower, sanNiche, sanDetail, sanToilet, sanToilet2, sanBasin],
  },
  'the-bar': {
    area: 'Bar & terrace',
    services: 'Architecture · Interiors · Lighting',
    summary: 'A roadside bar wrapped in red light — warm timber, brass and backlit panels, built for nights that run long.',
    gallery: [barNight, barPanels, barBlue, barFacade, barFacade2, barTerrace, barTerrace2, barBuild],
  },
};

// Returns the project merged with its detail copy + gallery, or null.
export function getProjectDetail(id) {
  const index = PROJECTS.findIndex(p => p.id === id);
  if (index === -1) return null;
  const base = PROJECTS[index];
  const detail = PROJECT_DETAILS[id] || {};
  // Hero is shown separately, so the gallery excludes base.img to avoid a repeat.
  const gallery = (detail.gallery || []).filter(src => src !== base.img);
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
