export type BrandingPage = {
  slug: string;
  keyword: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

export const brandingPages: BrandingPage[] = [
  {
    slug: 'hvac-companies',
    keyword: 'branding for HVAC companies',
    h1: 'Branding for HVAC Companies in Cleveland & Northfield, OH',
    metaTitle: 'Branding for HVAC Companies | Cleveland & Northfield, OH',
    metaDescription:
      'Monsta Media & Design builds logos, van wraps, and uniform branding for HVAC companies in Cleveland, Northfield, and Northeast Ohio. Get a brand that matches your service quality.',
    intro:
      'HVAC companies live and die by trust. Homeowners in Cleveland and Northfield are letting your crew into their house — your branding has to say "professional" before your technician ever knocks on the door. We build logo, van wrap, and uniform systems specifically for HVAC contractors.',
    sections: [
      {
        heading: 'Why HVAC Companies Need Distinct Branding',
        body: 'HVAC is a crowded, high-competition trade. A generic logo and unbranded van make it harder to stand out on a crowded street or in a saturated Google search. A bold, consistent brand builds the instant trust that turns a first-time caller into a repeat customer.',
      },
      {
        heading: 'What We Build for HVAC Brands',
        body: 'Logo and color system, van and fleet wrap design, technician uniform artwork, yard signs, and a website built to rank for "HVAC company near me" searches across Cleveland and Northeast Ohio.',
      },
    ],
    faqs: [
      {
        question: 'Do you work with HVAC companies outside Cleveland and Northfield?',
        answer: 'Yes — we serve HVAC contractors throughout Northeast Ohio, with most clients based in and around Cleveland, Northfield, and Akron.',
      },
      {
        question: 'How long does an HVAC branding project take?',
        answer: 'A logo and brand identity package typically takes 2-3 weeks. Adding van wrap and uniform design extends the timeline based on your fleet size.',
      },
    ],
  },
  {
    slug: 'van-wrap-design-for-contractors',
    keyword: 'van wrap design for contractors',
    h1: 'Van Wrap Design for Contractors in Cleveland & Northfield, OH',
    metaTitle: 'Van Wrap Design for Contractors | Cleveland & Northfield, OH',
    metaDescription:
      'Custom van wrap design for contractors in Cleveland, Northfield, and Northeast Ohio. Turn your work van into a lead-generating billboard with Monsta Media & Design.',
    intro:
      'Your van parks in front of more potential customers than any billboard you could rent. We design full and partial van wraps for contractors across Cleveland and Northfield, Ohio built to be read at a glance and to match the rest of your brand.',
    sections: [
      {
        heading: 'Wraps Built to Generate Calls',
        body: 'Every wrap we design leads with a legible logo, a phone number readable from across the street, and a layout that works on box trucks, cargo vans, and pickups alike.',
      },
      {
        heading: 'Fleet-Wide Consistency',
        body: 'Adding trucks to your fleet? We design wrap templates that scale, so every new vehicle matches without starting from scratch.',
      },
    ],
    faqs: [
      {
        question: 'Do you handle the physical wrap installation?',
        answer: 'We design the wrap artwork and coordinate print-ready files for your installer. We can also recommend trusted installers in the Cleveland/Northeast Ohio area.',
      },
      {
        question: 'Can you match my existing logo and colors?',
        answer: 'Yes, or we can build a new brand identity from scratch if you\'re rebranding — either way, your wrap will match your website, uniforms, and signage.',
      },
    ],
  },
  {
    slug: 'logo-design-for-home-service-businesses',
    keyword: 'logo design for home service businesses',
    h1: 'Logo Design for Home Service Businesses in Cleveland & Northfield, OH',
    metaTitle: 'Logo Design for Home Service Businesses | Cleveland & Northfield, OH',
    metaDescription:
      'Custom logo design for plumbers, electricians, roofers, and other home service businesses in Cleveland, Northfield, and Northeast Ohio.',
    intro:
      'Your logo has to work everywhere: a business card, a work van, a uniform patch, and a Google search result. We design logos specifically for home service businesses in Cleveland and Northfield, Ohio that hold up at every size.',
    sections: [
      {
        heading: 'Built for the Trades, Not Generic Templates',
        body: 'We design logos that reflect your specific trade — plumbing, electrical, roofing, landscaping — and hold up in the real conditions your brand lives in: truck wraps, embroidered patches, and weathered yard signs.',
      },
      {
        heading: 'A Full Brand Kit, Not Just a Logo File',
        body: 'Every logo project includes a color palette, font pairing, and usage guide so your brand looks consistent across print, apparel, and digital.',
      },
    ],
    faqs: [
      {
        question: 'What\'s included in a logo design package?',
        answer: 'Primary and secondary logo files, a color palette, font selections, and a simple brand guide — plus source files for your printer or sign shop.',
      },
      {
        question: 'Can you redesign an existing logo instead of starting over?',
        answer: 'Yes — we can refresh and modernize an existing logo while keeping the recognition you\'ve already built.',
      },
    ],
  },
  {
    slug: 'branding-agency-for-trades-businesses',
    keyword: 'branding agency for trades businesses',
    h1: 'Branding Agency for Trades Businesses in Cleveland & Northfield, OH',
    metaTitle: 'Branding Agency for Trades Businesses | Cleveland & Northfield, OH',
    metaDescription:
      'Monsta Media & Design is a branding agency for trades businesses — plumbing, electrical, HVAC, roofing — serving Cleveland, Northfield, and Northeast Ohio.',
    intro:
      'Monsta Media & Design is a branding agency built specifically for trades businesses. We understand the difference between designing for a coffee shop and designing for a plumbing company that needs a brand tough enough for a work truck.',
    sections: [
      {
        heading: 'One Agency, Every Brand Touchpoint',
        body: 'Logo, van wraps, uniforms, signage, and website — we design your full brand system as one agency, so nothing is inconsistent or out of sync.',
      },
      {
        heading: 'Trades-Focused Experience',
        body: 'We\'ve built brands for HVAC, plumbing, electrical, roofing, and general contracting businesses across Cleveland, Northfield, Akron, and the surrounding area.',
      },
    ],
    faqs: [
      {
        question: 'What trades do you work with?',
        answer: 'HVAC, plumbing, electrical, roofing, landscaping, and general contracting businesses across Northeast Ohio.',
      },
      {
        question: 'Do you only do one-off logo projects, or ongoing brand support?',
        answer: 'Both — we offer one-time brand identity packages and ongoing design support as your business adds trucks, crew, and locations.',
      },
    ],
  },
  {
    slug: 'uniform-design-for-service-companies',
    keyword: 'uniform design for service companies',
    h1: 'Uniform Design for Service Companies in Cleveland & Northfield, OH',
    metaTitle: 'Uniform Design for Service Companies | Cleveland & Northfield, OH',
    metaDescription:
      'Custom uniform and apparel design for HVAC, plumbing, electrical, and other service companies in Cleveland, Northfield, and Northeast Ohio.',
    intro:
      'Your crew is your brand in motion. We design shirt, jacket, and hat artwork for service companies in Cleveland and Northfield, Ohio that keeps every technician looking sharp and on-brand.',
    sections: [
      {
        heading: 'Consistent From the Van to the Doorstep',
        body: 'Uniform artwork designed to match your logo, van wrap, and signage so your brand looks the same the moment a customer opens the door.',
      },
      {
        heading: 'Print-Ready for Any Vendor',
        body: 'We deliver embroidery-ready and print-ready files so you can order from any uniform supplier or promotional products vendor in the Cleveland area.',
      },
    ],
    faqs: [
      {
        question: 'Do you supply the actual uniforms?',
        answer: 'We design the artwork and prepare print/embroidery-ready files. We can recommend uniform suppliers in Northeast Ohio, or work with your existing vendor.',
      },
      {
        question: 'Can you design for multiple roles (technicians vs. office staff)?',
        answer: 'Yes — we can design a full uniform system covering field technicians, office staff, and branded outerwear.',
      },
    ],
  },
  {
    slug: 'branding-for-plumbing-companies',
    keyword: 'branding for plumbing companies',
    h1: 'Branding for Plumbing Companies in Cleveland & Northfield, OH',
    metaTitle: 'Branding for Plumbing Companies | Cleveland & Northfield, OH',
    metaDescription:
      'Monsta Media & Design builds brands, van wraps, and uniform systems for plumbing companies in Cleveland, Northfield, and Northeast Ohio. Look as reliable as the work you do.',
    intro:
      'A plumbing call is almost always urgent, and the homeowner is judging trustworthiness in seconds. We build brand identities, van wraps, and uniform systems for plumbing companies in Cleveland and Northfield, Ohio that read as established and reliable the moment your truck pulls up.',
    sections: [
      {
        heading: 'Plumbing Is a Trust Business First',
        body: 'Homeowners are letting a stranger into their house to deal with a real problem. A brand that looks consistent and professional — not a mismatched van and a generic business card — closes that trust gap before a word is spoken.',
      },
      {
        heading: 'What We Build for Plumbing Brands',
        body: 'A full brand identity, van and fleet wrap design, technician uniforms, yard signs and door hangers, and a website built to rank for "plumber near me" and emergency plumbing searches across Northeast Ohio.',
      },
    ],
    faqs: [
      {
        question: 'Do you work with plumbing companies outside Cleveland and Northfield?',
        answer: 'Yes — we serve plumbing contractors throughout Northeast Ohio, including Cleveland, Northfield, and Akron.',
      },
      {
        question: 'Can you design around an existing plumbing brand instead of starting over?',
        answer: 'Yes — we can refresh your current colors and identity, or build a full brand system from scratch if you\'re rebranding.',
      },
    ],
  },
  {
    slug: 'branding-for-electrical-companies',
    keyword: 'branding for electrical companies',
    h1: 'Branding for Electrical Companies in Cleveland & Northfield, OH',
    metaTitle: 'Branding for Electrical Companies | Cleveland & Northfield, OH',
    metaDescription:
      'Custom branding, van wraps, and uniform design for electrical contractors in Cleveland, Northfield, and Northeast Ohio. Built by Monsta Media & Design.',
    intro:
      'Electrical work is technical and safety-sensitive — your brand needs to signal that you know what you\'re doing before a customer ever asks a question. We build brand identities, van wraps, and uniforms for electrical contractors in Cleveland and Northfield, Ohio built to earn that confidence fast.',
    sections: [
      {
        heading: 'Standing Out in a Safety-Driven Trade',
        body: 'Customers hiring an electrician are thinking about safety and licensing as much as price. A sharp, consistent brand across your van, uniforms, and website signals the same professionalism you bring to the actual electrical work.',
      },
      {
        heading: 'What We Build for Electrical Brands',
        body: 'Brand identity and color system, van and fleet wrap design, technician uniform artwork, yard signs, and a website built to rank for electrical service searches across Cleveland and Northeast Ohio.',
      },
    ],
    faqs: [
      {
        question: 'Do you work with electrical contractors outside Cleveland and Northfield?',
        answer: 'Yes — we serve electrical contractors throughout Northeast Ohio, including Cleveland, Northfield, and Akron.',
      },
      {
        question: 'How long does an electrical branding project take?',
        answer: 'A full brand identity typically takes 2-3 weeks. Adding van wrap and uniform design extends the timeline based on your fleet size.',
      },
    ],
  },
];

export function getBrandingPage(slug: string) {
  return brandingPages.find((page) => page.slug === slug);
}
