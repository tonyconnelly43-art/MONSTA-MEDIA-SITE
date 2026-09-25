export type WorkType = 'Website' | 'Van Wrap' | 'Uniform' | 'Print';

export type WorkItem = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  type: WorkType;
  image: string;
};

// Preferred left-to-right order for the type tabs on /work. A type only
// shows up as a tab once at least one item of that type exists below.
export const workTypeOrder: WorkType[] = ['Website', 'Van Wrap', 'Uniform', 'Print'];

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
];
