export type WorkType = 'Website' | 'Van Wrap' | 'Uniform' | 'Print';

export type WorkItem = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  type: WorkType;
  image: string;
  // Optional back-of-garment shot. When set, the card flips on click.
  backImage?: string;
};

// Preferred left-to-right order for the category nav on /work. A category
// only shows up once at least one item of that type exists below.
export const workTypeOrder: WorkType[] = ['Website', 'Van Wrap', 'Uniform', 'Print'];

export const workTypeSlugs: Record<WorkType, string> = {
  Website: 'websites',
  'Van Wrap': 'van-wraps',
  Uniform: 'uniforms',
  Print: 'print',
};

export const workTypeContent: Record<WorkType, { navLabel: string; title: string; blurb: string; metaTitle: string; metaDescription: string }> = {
  Website: {
    navLabel: 'Websites',
    title: 'Website Design',
    blurb:
      'Fast, mobile-first websites built to rank for the home service searches your customers are already typing into Google.',
    metaTitle: 'Website Design Portfolio',
    metaDescription:
      'Websites Monsta Media & Design has built for HVAC, plumbing, and other home service and trades businesses.',
  },
  'Van Wrap': {
    navLabel: 'Van Wraps',
    title: 'Van Wrap Design',
    blurb:
      'Full and partial van wrap designs built for HVAC, plumbing, electrical, and contractor fleets that need to turn heads on every job.',
    metaTitle: 'Van Wrap Design Portfolio',
    metaDescription:
      'Van wrap designs Monsta Media & Design has built for HVAC, plumbing, electrical, and other trades businesses.',
  },
  Uniform: {
    navLabel: 'Uniforms',
    title: 'Uniform Design',
    blurb: 'Uniform designs that keep a crew looking like one brand from the truck to the front door.',
    metaTitle: 'Uniform Design Portfolio',
    metaDescription: 'Uniform designs Monsta Media & Design has built for home service and trades businesses.',
  },
  Print: {
    navLabel: 'Print & Signage',
    title: 'Print & Signage',
    blurb: 'Business cards, yard signs, door hangers, and brochures designed to match everything else in the brand.',
    metaTitle: 'Print & Signage Portfolio',
    metaDescription:
      'Print and signage pieces Monsta Media & Design has designed for home service and trades businesses.',
  },
};

export const workItems: WorkItem[] = [
  {
    slug: 'true-north-gallery',
    name: 'True North Heating & Cooling',
    tagline: 'Follow the Path to Better Comfort',
    category: 'HVAC',
    type: 'Van Wrap',
    image: '/work/true-north-gallery.jpg',
  },
  {
    slug: 'air-command',
    name: 'Air Command HVAC',
    tagline: 'Heating, Cooling & Air Quality',
    category: 'HVAC',
    type: 'Van Wrap',
    image: '/work/air-command.jpg',
  },
  {
    slug: 'apex-climate',
    name: 'Apex Climate Solutions',
    tagline: 'Reaching the Peak of Comfort',
    category: 'HVAC',
    type: 'Van Wrap',
    image: '/work/apex-climate.jpg',
  },
  {
    slug: 'beacon-heating',
    name: 'Beacon Heating & Air Condition',
    tagline: 'HVAC',
    category: 'HVAC',
    type: 'Van Wrap',
    image: '/work/beacon-heating.jpg',
  },
  {
    slug: 'mammoth-air',
    name: 'Mammoth Heating & Air',
    tagline: 'Cold Outside. Controlled Inside.',
    category: 'HVAC',
    type: 'Van Wrap',
    image: '/work/mammoth-air.jpg',
  },
  {
    slug: 'grizzly-comfort',
    name: 'Grizzly Comfort',
    tagline: 'Heat & Air',
    category: 'HVAC',
    type: 'Van Wrap',
    image: '/work/grizzly-comfort.jpg',
  },
  {
    slug: 'svac-services',
    name: 'SVAC Services',
    tagline: 'HVAC Services',
    category: 'HVAC',
    type: 'Van Wrap',
    image: '/work/svac-services.jpg',
  },
  {
    slug: 'kraken-plumbing',
    name: 'Kraken Plumbing Co.',
    tagline: 'Hard Work. Honest Flow.',
    category: 'Plumbing',
    type: 'Van Wrap',
    image: '/work/kraken-plumbing.jpg',
  },
  {
    slug: 'captain-gutter',
    name: 'Captain Gutter',
    tagline: 'Protecting Homes. Controlling the Flow.',
    category: 'Gutters',
    type: 'Van Wrap',
    image: '/work/captain-gutter.jpg',
  },
  {
    slug: 'amp-theory',
    name: 'Amp Theory Electric',
    tagline: 'The Future of Electrical Starts Here',
    category: 'Electrical',
    type: 'Van Wrap',
    image: '/work/amp-theory.jpg',
  },
  {
    slug: 'yard-heros',
    name: 'Yard Heros Lawn Service',
    tagline: "Your Lawn's Superhero",
    category: 'Landscaping',
    type: 'Van Wrap',
    image: '/work/yard-heros.jpg',
  },
  {
    slug: 'on-par',
    name: 'On Par Pressure Washing',
    tagline: 'Pressure Washing',
    category: 'Pressure Washing',
    type: 'Van Wrap',
    image: '/work/on-par.jpg',
  },
  {
    slug: 'clear-point',
    name: 'Clear Point Window Solutions',
    tagline: 'Window Cleaning',
    category: 'Windows',
    type: 'Van Wrap',
    image: '/work/clear-point.jpg',
  },
  {
    slug: 'knock-dust',
    name: 'Knock Dust Auto Detailing',
    tagline: 'Auto Detailing',
    category: 'Auto Detailing',
    type: 'Van Wrap',
    image: '/work/knock-dust.jpg',
  },
  {
    slug: 'bug-bounty',
    name: 'Bug Bounty Pest Control',
    tagline: 'Pest Control',
    category: 'Pest Control',
    type: 'Van Wrap',
    image: '/work/bug-bounty.jpg',
  },
  {
    slug: 'good-hope-website',
    name: 'Good Hope Air Conditioning & Heating',
    tagline: 'Comfort With A Higher Purpose',
    category: 'HVAC',
    type: 'Website',
    image: '/work-good-hope-hvac.png',
  },
  {
    slug: 'comfort-chemist-website',
    name: 'Comfort Chemist',
    tagline: 'Trusted Heating And Cooling Experts',
    category: 'HVAC',
    type: 'Website',
    image: '/work-comfort-chemist.png',
  },
  {
    slug: 'grizzly-comfort-uniform',
    name: 'Grizzly Comfort',
    tagline: 'Heat & Air',
    category: 'HVAC',
    type: 'Uniform',
    image: '/uniforms/grizzly-comfort.png',
    backImage: '/uniforms/grizzly-comfort-back.png',
  },
  {
    slug: 'apex-climate-uniform',
    name: 'Apex Climate Solutions',
    tagline: 'Reaching the Peak of Comfort',
    category: 'HVAC',
    type: 'Uniform',
    image: '/uniforms/apex-climate.png',
    backImage: '/uniforms/apex-climate-back.png',
  },
  {
    slug: 'mammoth-air-uniform',
    name: 'Mammoth Heating & Air',
    tagline: 'Cold Outside. Controlled Inside.',
    category: 'HVAC',
    type: 'Uniform',
    image: '/uniforms/mammoth-air.png',
    backImage: '/uniforms/mammoth-air-back.png',
  },
  {
    slug: 'yard-heros-uniform',
    name: 'Yard Heros Lawn Service',
    tagline: "Your Lawn's Superhero",
    category: 'Landscaping',
    type: 'Uniform',
    image: '/uniforms/yard-heros.png',
    backImage: '/uniforms/yard-heros-back.png',
  },
  {
    slug: 'svac-services-uniform',
    name: 'SVAC Services',
    tagline: 'HVAC Services',
    category: 'HVAC',
    type: 'Uniform',
    image: '/uniforms/svac-services.png',
    backImage: '/uniforms/svac-services-back.png',
  },
  {
    slug: 'amp-theory-uniform',
    name: 'Amp Theory Electric',
    tagline: 'The Future of Electrical Starts Here',
    category: 'Electrical',
    type: 'Uniform',
    image: '/uniforms/amp-theory.png',
    backImage: '/uniforms/amp-theory-back.png',
  },
  {
    slug: 'level-up-lawn-uniform',
    name: 'Level Up Lawn & Landscaping',
    tagline: 'Lawn & Landscaping',
    category: 'Landscaping',
    type: 'Uniform',
    image: '/uniforms/level-up-lawn.png',
    backImage: '/uniforms/level-up-lawn-back.png',
  },
];

export function getAvailableWorkTypes(): WorkType[] {
  return workTypeOrder.filter((type) => workItems.some((item) => item.type === type));
}

export function getWorkTypeBySlug(slug: string): WorkType | undefined {
  return getAvailableWorkTypes().find((type) => workTypeSlugs[type] === slug);
}
