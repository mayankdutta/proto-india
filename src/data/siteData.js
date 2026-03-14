// ============================================================
// All site content centralized here — like a single source of truth.
// Think of this as your "database" for the static site.
// ============================================================

export const COMPANY = {
  name: "ProtoFab India",
  tagline: "Digital Manufacturing for India",
  phone: "+91 11 4567 8900",
  email: "info@protofab.in",
  address: {
    line1: "Plot 42, Sector 57",
    line2: "NOIDA, Uttar Pradesh",
    pin: "201301",
    country: "India",
  },
  certifications: ["ISO 9001:2015", "ISO 13485:2016", "AS9100D"],
};

export const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        group: "Injection Moulding",
        href: "/services/injection-moulding",
        items: [
          { label: "Plastic Injection Moulding", href: "/services/injection-moulding/plastic" },
          { label: "Liquid Silicone Rubber", href: "/services/injection-moulding/lsr" },
          { label: "Insert Moulding", href: "/services/injection-moulding/insert" },
          { label: "Overmoulding", href: "/services/injection-moulding/over" },
        ],
      },
      {
        group: "CNC Machining",
        href: "/services/cnc-machining",
        items: [
          { label: "CNC Milling", href: "/services/cnc-machining/milling" },
          { label: "CNC Turning", href: "/services/cnc-machining/turning" },
          { label: "Threading", href: "/services/cnc-machining/threading" },
        ],
      },
      {
        group: "3D Printing",
        href: "/services/3d-printing",
        items: [
          { label: "SLA (Stereolithography)", href: "/services/3d-printing/sla" },
          { label: "Metal 3D Printing (DMLS)", href: "/services/3d-printing/dmls" },
          { label: "Multi Jet Fusion", href: "/services/3d-printing/mjf" },
          { label: "SLS", href: "/services/3d-printing/sls" },
        ],
      },
    ],
  },
  { label: "Materials", href: "/materials" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
];

export const SERVICES = [
  {
    id: "injection-moulding",
    title: "Injection Moulding",
    shortDesc:
      "Get affordable, high-quality moulded parts and bridge tooling within days. Free mouldability consultation accelerates design and saves time and money.",
    features: [
      "Low-volume moulding up to 1,00,000+ parts — no MOQ required",
      "100+ plastic, elastomeric, and silicone rubber materials",
      "Automated CMM for fast, in-house quality documentation",
      "Moulds starting from ₹85,000",
    ],
    href: "/services/injection-moulding",
    icon: "Layers",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "cnc-machining",
    title: "CNC Machining",
    shortDesc:
      "Leverage speed, precision, and reliability in machining with advanced capabilities like tighter tolerances and volume pricing through our manufacturing network.",
    features: [
      "Machined parts in as fast as 1 day with plating & anodising in 6 days",
      "Cost-efficient machined parts at higher volumes",
      "Tolerances down to ±0.025 mm, tighter available on request",
    ],
    href: "/services/cnc-machining",
    icon: "Cog",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "3d-printing",
    title: "3D Printing",
    shortDesc:
      "Quality parts and additive expertise from a single source. Choose from seven additive manufacturing technologies for cost-effective prototyping and production parts.",
    features: [
      "Technologies include DMLS, SLA, SLS, MJF and more",
      "30+ plastic and metal materials in a range of finishes",
      "20+ years of additive manufacturing expertise in India",
    ],
    href: "/services/3d-printing",
    icon: "Printer",
    color: "from-orange-500 to-red-500",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Upload a CAD File",
    description: "Select a manufacturing process and upload your 3D CAD file to get started.",
    icon: "Upload",
  },
  {
    step: 2,
    title: "Receive Quote with Free DFM",
    description:
      "Within hours, get design-for-manufacturability analysis and real-time pricing in INR.",
    icon: "FileCheck",
  },
  {
    step: 3,
    title: "Manufacturing Begins",
    description:
      "Review your quote and place your order. We start manufacturing with optional finishing.",
    icon: "Factory",
  },
  {
    step: 4,
    title: "Parts Shipped Pan-India",
    description:
      "Our digital manufacturing process delivers parts in as fast as 1 day across India.",
    icon: "Truck",
  },
];

export const INDUSTRIES = [
  {
    id: "aerospace",
    title: "Aerospace & Defence",
    description: "High-quality components from prototyping to production for ISRO, HAL, and private space companies",
    href: "/industries/aerospace",
    icon: "Rocket",
  },
  {
    id: "automotive",
    title: "Automotive",
    description: "Rapid prototyping for traditional, EV, and autonomous vehicle manufacturers across India",
    href: "/industries/automotive",
    icon: "Car",
  },
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    description: "Functional prototyping and on-demand production for electronics and IoT devices",
    href: "/industries/consumer-electronics",
    icon: "Smartphone",
  },
  {
    id: "medical",
    title: "Medical Devices",
    description: "Accelerated development of medical devices with ISO 13485 certified manufacturing",
    href: "/industries/medical",
    icon: "Heart",
  },
  {
    id: "robotics",
    title: "Robotics & Automation",
    description: "Complex end-use production parts for India's growing robotics ecosystem",
    href: "/industries/robotics",
    icon: "Bot",
  },
  {
    id: "industrial",
    title: "Industrial Equipment",
    description: "Durable jigs, fixtures, and components to streamline assembly and reduce costs",
    href: "/industries/industrial",
    icon: "Wrench",
  },
];

export const WHATS_NEW = [
  {
    title: "AS9100D Certified",
    description:
      "Our NOIDA CNC facility has achieved AS9100D certification — the internationally recognised quality standard for aerospace and defence manufacturing.",
    tag: "Certification",
    href: "/certifications",
  },
  {
    title: "Meet ProDesk by ProtoFab",
    description:
      "Our enhanced digital platform for quoting, ordering, and managing custom parts. Get real-time pricing in INR with AI-enabled DFM feedback.",
    tag: "Platform",
    href: "/prodesk",
  },
  {
    title: "Trusted Partner for Production",
    description:
      "Our team is ready to help you scale production projects with expert guidance at every step — from prototype to 1,00,000+ parts.",
    tag: "Production",
    href: "/services/production",
  },
  {
    title: "DLS by Carbon Now Available",
    description:
      "Digital Light Synthesis by Carbon with 4 new materials for flexible and rigid parts. Rapidly produce genuine end-use parts at scale.",
    tag: "3D Printing",
    href: "/services/3d-printing/carbon-dls",
  },
  {
    title: "Quality Inspections for Moulding",
    description:
      "Critical-to-quality inspections are now configurable within your injection moulding quote, along with additional quality documentation.",
    tag: "Quality",
    href: "/services/injection-moulding/quality",
  },
  {
    title: "inspirON Academy India",
    description:
      "Free CPD-accredited training by engineers, for engineers. Learn at your own pace with upfront training materials.",
    tag: "Learning",
    href: "/resources/inspiron-academy",
  },
];

export const LIFECYCLE_STAGES = [
  {
    title: "Full Product Life Cycle",
    description:
      "From prototype parts in one day to full-service production — partner with us across your entire product life cycle for speed, quality, and cost-efficiency.",
  },
  {
    title: "Rapid Prototyping",
    description:
      "Take advantage of DFM feedback in instant quotes to refine designs before manufacturing begins. Navigate quickly through prototyping iterations.",
  },
  {
    title: "On-Going Production",
    description:
      "Complete program management with manufacturing experts who optimise your project around cost, quantity, and quality.",
  },
  {
    title: "Short-Term Production",
    description:
      "Tap into production capabilities for short-term needs like jigs, fixtures, and industrial components, or managing end-of-lifecycle inventory.",
  },
];

// ============================================================
// Product Life Cycle Page — detailed content for the dedicated page
// ============================================================

export const PRODUCT_LIFECYCLE_PAGE = {
  hero: {
    title: "Digital Manufacturing Across Your Product Life Cycle",
    subtitle:
      "We are your single resource from rapid prototyping to end-use production — and everything in between.",
  },

  fullSupport: {
    title: "Get Full Product Life Cycle Support from Start to Finish",
    description:
      "Whether you need prototype parts in one day or full-service production, you can partner with us across your entire product life cycle for speed, quality, and cost-efficiency in every project. It's one resource to support you throughout your manufacturing journey.",
    subsections: [
      {
        title: "End-to-End Product Development",
        description:
          "Optimise part design and move quickly through iterative development with our rapid prototyping and low-volume production services. When you're ready, work with our team of applications engineers to meet all of your production needs for end-use parts.",
        icon: "Workflow",
      },
      {
        title: "Supply Chain Diversification",
        description:
          "Build a manufacturing safety net into your supply chain that you can turn to during line-down situations or unplanned disruptions.",
        icon: "ShieldCheck",
      },
    ],
  },

  prototyping: {
    title: "Accelerate Product Development with Rapid Prototyping",
    description:
      "Take advantage of design for manufacturability (DFM) feedback in our instant quotes to make adjustments to part design before any actual manufacturing begins, then navigate quickly through early- and late-stage prototyping with ease.",
    subsections: [
      {
        title: "Early Prototyping",
        description:
          "Get quality parts in hand within days for iterative prototype testing of form, fit, and function.",
        icon: "FlaskConical",
      },
      {
        title: "Late Prototyping",
        description:
          "Validate part designs with pilot runs and market testing to reduce design risk before production.",
        icon: "ClipboardCheck",
      },
    ],
  },

  production: {
    title: "Shift Seamlessly to End-Use Production",
    description:
      "You'll find complete program management at ProtoFab with a team of manufacturing experts who will help optimise your project around cost, quantity, and quality.",
    subsections: [
      {
        title: "Low-Volume Production",
        description:
          "Ramp up production to get quality end-use parts to market fast and use batch production to reduce financial risk with no order minimums and low total cost of ownership.",
        icon: "PackageCheck",
      },
      {
        title: "Mass Production",
        description:
          "Order quantities up to 1,00,000+ parts with volume pricing built to fit your budget.",
        icon: "Factory",
      },
      {
        title: "On-Demand Production",
        description:
          "Build agility into your supply chain by ordering quick-turn parts when needed.",
        icon: "Zap",
      },
    ],
  },

  shortTerm: {
    title: "Leverage Short-Term Production",
    subsections: [
      {
        title: "Jigs & Fixtures",
        description:
          "Streamline part assembly and help reduce production costs with durable jigs and fixtures.",
        icon: "Wrench",
      },
      {
        title: "End-of-Life Production",
        description:
          "Reduce your financial risk and warehousing costs during end of product life by ordering low volumes of product parts just in time.",
        icon: "Clock",
      },
      {
        title: "Maintenance, Repair & Operations (MRO)",
        description:
          "Order custom production parts on demand for MRO applications to keep equipment running without delay.",
        icon: "Settings",
      },
    ],
  },

  resourceCards: [
    {
      title: "Digital Manufacturing from Prototyping to Production",
      href: "/resources/prototyping-to-production",
    },
    {
      title: "Production Manufacturing",
      href: "/services/production",
    },
    {
      title: "Manufacturing Materials",
      href: "/materials",
    },
  ],

  bottomCta: {
    text: "Ready to move from prototyping to production with one digital manufacturing resource?",
  },
};

export const RESOURCES = [
  {
    title: "Selecting a Material",
    description:
      "Choose from hundreds of commercial-grade plastic, metal, elastomer, and LSR materials for prototyping and production.",
    tag: "Guide",
    href: "/materials",
  },
  {
    title: "Plastic Manufacturing Processes",
    description:
      "Learn how to select the best manufacturing process and material for your custom plastic parts.",
    tag: "Guide",
    href: "/resources/plastic-manufacturing",
  },
  {
    title: "Design for Machining Toolkit",
    description:
      "In-depth design advice to optimise your plastic and metal parts for CNC machining. Reduce costs and accelerate production.",
    tag: "Toolkit",
    href: "/resources/machining-toolkit",
  },
  {
    title: "3D Printing Cost Factors",
    description:
      "Explore the factors that affect 3D printing costs and how to optimise your parts for cost-effective additive manufacturing.",
    tag: "Design Tip",
    href: "/resources/3d-printing-cost",
  },
];

export const FOOTER_LINKS = {
  services: [
    { label: "Injection Moulding", href: "/services/injection-moulding" },
    { label: "CNC Machining", href: "/services/cnc-machining" },
    { label: "3D Printing", href: "/services/3d-printing" },
    { label: "Production Services", href: "/services/production" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Why ProtoFab", href: "/about/why-protofab" },
    { label: "Careers", href: "/careers" },
    { label: "Locations", href: "/locations" },
    { label: "Press", href: "/press" },
  ],
  resources: [
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Design Tips", href: "/resources/design-tips" },
    { label: "Blog", href: "/resources/blog" },
    { label: "Design Aids", href: "/resources/design-aids" },
    { label: "FAQs", href: "/resources/faqs" },
  ],
  legal: [
    { label: "ISO & Certifications", href: "/certifications" },
    { label: "Legal Notices", href: "/legal" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export const TRUSTED_COMPANIES = [
  "Tata Motors",
  "Mahindra",
  "ISRO",
  "Wipro",
  "L&T",
  "Bharat Electronics",
];
