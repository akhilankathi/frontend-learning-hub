import { Code, Palette, Sparkles, BookOpen, Search, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';


export const TABS = {
  HTML: 'html',
  CSS: 'css',
  JAVASCRIPT: 'javascript',
  REACT: 'react',
  ANGULAR: 'angular',
  VUE: 'vue',
  OTHERS: 'others'
};

export const TAB_TEXT_COLORS = {
  html: 'text-orange-500',
  css: 'text-blue-500',
  javascript: 'text-yellow-500',
  react: 'text-cyan-500',
  angular: 'text-red-500',
  vue: 'text-green-500',
  others: 'text-purple-500'
};


export const TAB_COLORS = {
  html: 'bg-orange-500',
  css: 'bg-blue-500',
  javascript: 'bg-yellow-500',
  react: 'bg-cyan-500',
  angular: 'bg-red-500',
  vue: 'bg-green-500',
  others: 'bg-purple-500'
};

export const LEARNING_DATA = {
  html: {
    title: "HTML & HTML5",
    icon: Code,
    description: "HyperText Markup Language - the foundation of web development",
    detailedInfo: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. HTML5 is the latest version, introducing semantic elements, multimedia support, and powerful APIs. It structures content on the web and works alongside CSS for styling and JavaScript for interactivity.",
    sections: [
      {
        id: 'html-basics',
        title: "HTML5 Features & Uses",
        content: [
          "Semantic elements (header, nav, article, section, footer)",
          "Audio and Video support without plugins",
          "Canvas for 2D graphics and animations",
          "Local Storage and Session Storage",
          "Geolocation API",
          "Drag and Drop functionality",
          "Web Workers for background processing",
          "Form enhancements (email, date, color inputs)"
        ]
      },
      {
        id: 'wcag',
        title: "WCAG (Web Content Accessibility Guidelines)",
        content: [
          "WCAG 2.1 & 2.2 standards for accessible web content",
          "Four main principles: Perceivable, Operable, Understandable, Robust (POUR)",
          "Three conformance levels: A (minimum), AA (mid-range), AAA (highest)",
          "Key requirements: Alt text for images, keyboard navigation, color contrast ratios",
          "ARIA labels and roles for screen readers",
          "Semantic HTML for better accessibility"
        ]
      },
      {
        id: 'html-resources',
        title: "Learning Resources",
        resources: [
          { name: "MDN Web Docs", url: "developer.mozilla.org", desc: "Comprehensive HTML documentation" },
          { name: "W3Schools", url: "w3schools.com/html", desc: "Interactive tutorials and examples" },
          { name: "HTML5 Doctor", url: "html5doctor.com", desc: "HTML5 element reference" },
          { name: "WebAIM", url: "webaim.org", desc: "Web accessibility resources" },
          { name: "A11y Project", url: "a11yproject.com", desc: "Accessibility checklist and guides" },
          { name: "freeCodeCamp", url: "freecodecamp.org", desc: "Free HTML courses with projects" }
        ]
      }
    ]
  },
  css: {
    title: "CSS & Ecosystem",
    icon: Palette,
    description: "Cascading Style Sheets - styling and layout for the web",
    detailedInfo: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. Modern CSS includes powerful features like Flexbox, Grid, animations, and custom properties. CSS preprocessors and frameworks enhance development speed and maintainability.",
    sections: [
      {
        id: 'css-features',
        title: "Modern CSS Features",
        content: [
          "Flexbox for one-dimensional layouts",
          "CSS Grid for two-dimensional layouts",
          "Custom Properties (CSS Variables)",
          "CSS Animations and Transitions",
          "Media Queries for responsive design",
          "Pseudo-classes and Pseudo-elements",
          "CSS Functions (calc, clamp, min, max)",
          "Container Queries for component-based responsiveness"
        ]
      },
      {
        id: 'css-preprocessors',
        title: "CSS Preprocessors",
        content: [
          "Sass/SCSS - most popular, with variables, nesting, mixins",
          "Less - dynamic stylesheet language",
          "Stylus - expressive, dynamic, robust CSS",
          "PostCSS - tool for transforming CSS with JavaScript plugins"
        ]
      },
      {
        id: 'css-frameworks',
        title: "CSS Frameworks & Libraries",
        content: [
          "Tailwind CSS - utility-first framework",
          "Bootstrap - comprehensive component library",
          "Material UI - Google's Material Design",
          "Bulma - modern CSS framework based on Flexbox",
          "Foundation - responsive front-end framework",
          "Chakra UI - modular component library",
          "Ant Design - enterprise-level design system",
          "Styled Components - CSS-in-JS library"
        ]
      },
      {
        id: 'css-resources',
        title: "Learning Resources",
        resources: [
          { name: "CSS-Tricks", url: "css-tricks.com", desc: "Tips, tricks, and techniques" },
          { name: "MDN CSS Guide", url: "developer.mozilla.org/CSS", desc: "Complete CSS reference" },
          { name: "Flexbox Froggy", url: "flexboxfroggy.com", desc: "Learn Flexbox through games" },
          { name: "Grid Garden", url: "cssgridgarden.com", desc: "Learn CSS Grid through games" },
          { name: "Can I Use", url: "caniuse.com", desc: "Browser support tables" },
          { name: "Sass Documentation", url: "sass-lang.com", desc: "Official Sass guide" }
        ]
      }
    ]
  },
  javascript: {
    title: "JavaScript & Ecosystem",
    icon: Sparkles,
    description: "The programming language of the web",
    detailedInfo: "JavaScript is a versatile, high-level programming language that enables interactive web pages. Modern JavaScript (ES6+) includes features like arrow functions, promises, async/await, and modules. It powers both frontend and backend development through Node.js and various frameworks.",
    sections: [
      {
        id: 'js-features',
        title: "Modern JavaScript (ES6+)",
        content: [
          "Arrow Functions and Template Literals",
          "Destructuring and Spread Operator",
          "Promises and Async/Await",
          "Modules (import/export)",
          "Classes and Inheritance",
          "Map, Set, WeakMap, WeakSet",
          "Optional Chaining and Nullish Coalescing",
          "Array methods (map, filter, reduce, find)"
        ]
      },
      {
        id: 'js-libraries',
        title: "JavaScript Libraries",
        content: [
          "jQuery - DOM manipulation and AJAX (legacy but still used)",
          "Lodash - utility functions for common tasks",
          "Moment.js / Day.js - date manipulation",
          "Axios - HTTP client for API requests",
          "RxJS - reactive programming library",
          "Three.js - 3D graphics library",
          "D3.js - data visualization",
          "GSAP - animation library"
        ]
      },
      {
        id: 'js-frameworks',
        title: "JavaScript Frameworks",
        content: [
          "React - component-based UI library by Meta",
          "Angular - full-featured framework by Google",
          "Vue.js - progressive framework",
          "Svelte - compile-time framework",
          "Next.js - React framework with SSR",
          "Nuxt.js - Vue framework with SSR",
          "Remix - full-stack React framework",
          "Solid.js - reactive UI library"
        ]
      },
      {
        id: 'js-resources',
        title: "Learning Resources",
        resources: [
          { name: "JavaScript.info", url: "javascript.info", desc: "Modern JavaScript tutorial" },
          { name: "MDN JavaScript", url: "developer.mozilla.org/JavaScript", desc: "Complete JS reference" },
          { name: "Eloquent JavaScript", url: "eloquentjavascript.net", desc: "Free online book" },
          { name: "You Don't Know JS", url: "github.com/getify/You-Dont-Know-JS", desc: "Deep dive into JS" },
          { name: "ES6 Features", url: "es6-features.org", desc: "ES6 feature overview" },
          { name: "JavaScript30", url: "javascript30.com", desc: "30 day vanilla JS challenge" }
        ]
      }
    ]
  },
  react: {
    title: "React Ecosystem",
    icon: BookOpen,
    description: "Component libraries, tools, and resources for React",
    detailedInfo: "React is a declarative, component-based JavaScript library for building user interfaces, developed by Meta (Facebook). It uses a virtual DOM for efficient rendering and follows a unidirectional data flow. React's ecosystem includes powerful tools for state management, routing, styling, and server-side rendering.",
    sections: [
      {
        id: 'react-ui',
        title: "React UI Component Libraries",
        content: [
          "Material-UI (MUI) - comprehensive component library",
          "Ant Design - enterprise-level design system",
          "Chakra UI - accessible component library",
          "React Bootstrap - Bootstrap components for React",
          "Mantine - full-featured components and hooks",
          "Headless UI - unstyled accessible components",
          "Radix UI - low-level UI primitives",
          "shadcn/ui - customizable component collection",
          "NextUI - beautiful, modern UI library",
          "PrimeReact - rich set of components"
        ]
      },
      {
        id: 'react-3d',
        title: "3D Graphics & Visualization",
        content: [
          "React Three Fiber - Three.js renderer for React",
          "React Three Drei - useful helpers for R3F",
          "React Force Graph - force-directed graph",
          "React Globe - interactive globe visualization",
          "Visx - low-level visualization primitives",
          "React Unity WebGL - Unity integration"
        ]
      },
      {
        id: 'react-charts',
        title: "Chart & Data Visualization Libraries",
        content: [
          "Recharts - composable charting library",
          "Victory - modular charting components",
          "Nivo - rich data visualization components",
          "Chart.js with react-chartjs-2",
          "Apache ECharts with echarts-for-react",
          "Tremor - dashboard component library",
          "React Plotly.js - interactive charts",
          "Visx by Airbnb - low-level viz primitives"
        ]
      },
      {
        id: 'react-realtime',
        title: "Real-time & Live Data",
        content: [
          "Socket.io-client - WebSocket library",
          "React Query (TanStack Query) - data fetching & caching",
          "SWR - data fetching with cache",
          "Firebase Realtime Database - live data sync",
          "Supabase - real-time PostgreSQL",
          "Pusher - real-time communication",
          "Ably - realtime data platform"
        ]
      },
      {
        id: 'react-animation',
        title: "Animation Libraries",
        content: [
          "Framer Motion - animation library",
          "React Spring - spring-physics animations",
          "React Transition Group - transitions",
          "GSAP (with React) - professional animations",
          "Auto Animate - automatic animations",
          "React Move - data-driven animations"
        ]
      },
      {
        id: 'react-forms',
        title: "Form Libraries",
        content: [
          "React Hook Form - performant forms",
          "Formik - form management",
          "React Final Form - subscription-based forms",
          "Yup / Zod - schema validation",
          "React Select - select input component",
          "React Datepicker - date picker component"
        ]
      },
      {
        id: 'react-state',
        title: "State Management",
        content: [
          "Redux Toolkit - predictable state container",
          "Zustand - lightweight state management",
          "Jotai - primitive and flexible state",
          "Recoil - experimental state library by Meta",
          "MobX - simple, scalable state",
          "XState - state machines library"
        ]
      },
      {
        id: 'react-routing',
        title: "Routing & Navigation",
        content: [
          "React Router - declarative routing",
          "TanStack Router - type-safe routing",
          "Wouter - minimalist router",
          "Next.js Router - file-based routing"
        ]
      },
      {
        id: 'react-resources',
        title: "Learning Resources",
        resources: [
          { name: "React Official Docs", url: "react.dev", desc: "New official documentation" },
          { name: "React TypeScript Cheatsheet", url: "react-typescript-cheatsheet.netlify.app", desc: "TS with React" },
          { name: "Awesome React", url: "github.com/enaqx/awesome-react", desc: "Curated React resources" },
          { name: "React Patterns", url: "reactpatterns.com", desc: "Common React patterns" },
          { name: "Epic React", url: "epicreact.dev", desc: "Kent C. Dodds course" },
          { name: "UI.dev", url: "ui.dev", desc: "React courses and tutorials" }
        ]
      }
    ]
  },
  angular: {
    title: "Angular Ecosystem",
    icon: BookOpen,
    description: "Full-featured TypeScript framework by Google",
    detailedInfo: "Angular is a comprehensive, opinionated framework for building scalable web applications, developed by Google. Built with TypeScript, it provides a complete solution with dependency injection, two-way data binding, RxJS for reactive programming, and a powerful CLI for development.",
    sections: [
      {
        id: 'angular-features',
        title: "Angular Core Features",
        content: [
          "Component-based architecture with TypeScript",
          "Two-way data binding with [(ngModel)]",
          "Dependency Injection system",
          "RxJS for reactive programming",
          "Angular CLI for scaffolding and development",
          "Directives (*ngIf, *ngFor, custom directives)",
          "Services and Interceptors",
          "Built-in form validation (Template & Reactive Forms)",
          "Angular Router for navigation",
          "HttpClient for API calls"
        ]
      },
      {
        id: 'angular-ui',
        title: "Angular UI Component Libraries",
        content: [
          "Angular Material - official Material Design components",
          "PrimeNG - rich set of UI components",
          "NG-ZORRO - Ant Design for Angular",
          "Clarity Design - VMware's design system",
          "Nebular - customizable UI library",
          "NGX-Bootstrap - Bootstrap components",
          "Kendo UI for Angular - comprehensive components",
          "Ionic - mobile-first components",
          "Taiga UI - open-source kit",
          "NG-Lightning - Salesforce Lightning components"
        ]
      },
      {
        id: 'angular-state',
        title: "State Management",
        content: [
          "NgRx - Redux pattern for Angular",
          "Akita - state management pattern",
          "NGXS - state management library",
          "Elf - reactive store",
          "Angular Services - simple state management",
          "RxJS BehaviorSubject - for shared state"
        ]
      },
      {
        id: 'angular-tools',
        title: "Essential Angular Tools & Libraries",
        content: [
          "Angular DevTools - browser extension for debugging",
          "NGX-Translate - internationalization (i18n)",
          "AngularFire - Firebase integration",
          "NGX-Charts - declarative charting",
          "NGX-Datatable - feature-rich tables",
          "Apollo Angular - GraphQL client",
          "Socket.io-client - WebSocket integration",
          "Compodoc - documentation tool"
        ]
      },
      {
        id: 'angular-resources',
        title: "Learning Resources",
        resources: [
          { name: "Angular Official Docs", url: "angular.io/docs", desc: "Comprehensive Angular guide" },
          { name: "Angular University", url: "angular-university.io", desc: "In-depth Angular courses" },
          { name: "NgRx Documentation", url: "ngrx.io", desc: "State management guide" },
          { name: "Angular In Depth", url: "angularindepth.com", desc: "Advanced Angular articles" },
          { name: "Awesome Angular", url: "github.com/PatrickJS/awesome-angular", desc: "Curated resources" },
          { name: "Tour of Heroes", url: "angular.io/tutorial", desc: "Official Angular tutorial" }
        ]
      }
    ]
  },
  vue: {
    title: "Vue.js Ecosystem",
    icon: BookOpen,
    description: "The Progressive JavaScript Framework",
    detailedInfo: "Vue.js is a progressive, incrementally adoptable JavaScript framework for building user interfaces. Created by Evan You, it combines the best features of React and Angular with an approachable learning curve. Vue 3 introduces the Composition API, improved performance, and better TypeScript support.",
    sections: [
      {
        id: 'vue-features',
        title: "Vue.js Core Features",
        content: [
          "Reactive data binding with Composition API & Options API",
          "Single File Components (.vue files)",
          "Virtual DOM for efficient rendering",
          "Directives (v-if, v-for, v-model, v-bind, v-on)",
          "Computed properties and watchers",
          "Slots for component composition",
          "Transitions and animations built-in",
          "Vue Router for routing",
          "Pinia for state management (official)",
          "Vue 3 performance improvements"
        ]
      },
      {
        id: 'vue-ui',
        title: "Vue UI Component Libraries",
        content: [
          "Vuetify - Material Design component framework",
          "Element Plus - desktop UI library",
          "Quasar - high-performance framework",
          "PrimeVue - rich UI component suite",
          "Ant Design Vue - enterprise-level components",
          "Naive UI - Vue 3 component library",
          "Vuesax - beautiful, customizable components",
          "BootstrapVue - Bootstrap components",
          "Buefy - lightweight UI based on Bulma",
          "Headless UI - unstyled components"
        ]
      },
      {
        id: 'vue-state',
        title: "State Management",
        content: [
          "Pinia - official Vue store (recommended)",
          "Vuex - centralized state management (legacy)",
          "VueUse - collection of composition utilities",
          "Harlem - simple, unopinionated state",
          "Provide/Inject - built-in Vue feature"
        ]
      },
      {
        id: 'vue-tools',
        title: "Vue Tools & Libraries",
        content: [
          "Vite - next-gen build tool (official)",
          "Vue DevTools - browser extension",
          "Nuxt.js - server-side rendering framework",
          "VueUse - essential composition utilities",
          "Vue Apollo - GraphQL integration",
          "Vue Chart.js - chart integration",
          "Vue i18n - internationalization",
          "VeeValidate - form validation",
          "Vue Test Utils - official testing library",
          "Vitest - fast unit testing framework"
        ]
      },
      {
        id: 'vue-resources',
        title: "Learning Resources",
        resources: [
          { name: "Vue.js Official Docs", url: "vuejs.org", desc: "Comprehensive Vue guide" },
          { name: "Vue Mastery", url: "vuemastery.com", desc: "Premium Vue courses" },
          { name: "Vue School", url: "vueschool.io", desc: "Video courses for Vue" },
          { name: "Awesome Vue", url: "github.com/vuejs/awesome-vue", desc: "Curated Vue resources" },
          { name: "VueUse Docs", url: "vueuse.org", desc: "Composition utilities" },
          { name: "Nuxt Documentation", url: "nuxt.com", desc: "Nuxt framework guide" }
        ]
      }
    ]
  },
  others: {
    title: "Other Frameworks",
    icon: Sparkles,
    description: "Modern alternatives and emerging frameworks",
    detailedInfo: "The frontend ecosystem continues to evolve with innovative frameworks offering unique approaches to web development. From compile-time frameworks like Svelte to meta-frameworks like Next.js and Remix, these tools provide specialized solutions for performance, developer experience, and specific use cases.",
    sections: [
      {
        id: 'svelte',
        title: "Svelte & SvelteKit",
        content: [
          "Compile-time framework - no virtual DOM",
          "Truly reactive without dependencies",
          "Smaller bundle sizes",
          "Built-in animations and transitions",
          "SvelteKit - full-stack framework",
          "Scoped styling by default",
          "Simple state management with stores",
          "Excellent performance"
        ]
      },
      {
        id: 'solid',
        title: "Solid.js",
        content: [
          "Fine-grained reactivity system",
          "No virtual DOM - direct DOM updates",
          "JSX syntax like React",
          "Extremely fast performance",
          "Small bundle size",
          "SolidStart - meta-framework",
          "Simple and predictable",
          "Growing ecosystem"
        ]
      },
      {
        id: 'nextjs',
        title: "Next.js (React Framework)",
        content: [
          "Server-side rendering (SSR)",
          "Static site generation (SSG)",
          "API routes built-in",
          "File-based routing",
          "Image optimization",
          "App Router with Server Components",
          "Middleware support",
          "Vercel deployment optimization"
        ]
      },
      {
        id: 'remix',
        title: "Remix (React Framework)",
        content: [
          "Full-stack React framework",
          "Nested routing",
          "Progressive enhancement focus",
          "Built on Web Fetch API",
          "Excellent form handling",
          "Error boundaries",
          "Optimistic UI updates",
          "Server-side rendering"
        ]
      },
      {
        id: 'astro',
        title: "Astro",
        content: [
          "Content-focused static site builder",
          "Islands architecture - partial hydration",
          "Bring your own framework (React, Vue, Svelte)",
          "Zero JavaScript by default",
          "Markdown and MDX support",
          "Fast build times",
          "Excellent for blogs and documentation",
          "SEO-friendly"
        ]
      },
      {
        id: 'qwik',
        title: "Qwik",
        content: [
          "Resumability instead of hydration",
          "Instant-on applications",
          "Lazy loading by default",
          "O(1) loading time",
          "QwikCity - meta-framework",
          "Optimized for performance",
          "Progressive JavaScript execution",
          "Similar syntax to React"
        ]
      },
      {
        id: 'preact',
        title: "Preact",
        content: [
          "3KB React alternative",
          "Same modern API as React",
          "Fast rendering performance",
          "Compatible with React ecosystem",
          "Preact CLI for quick setup",
          "Preact X - latest version",
          "Perfect for lightweight apps",
          "Easy migration from React"
        ]
      },
      {
        id: 'alpine',
        title: "Alpine.js",
        content: [
          "Lightweight JavaScript framework (15KB)",
          "Declarative syntax in HTML",
          "No build step required",
          "Vue-like directives (x-data, x-show, x-if)",
          "Perfect for sprinkling interactivity",
          "Great for WordPress/Laravel projects",
          "Minimal learning curve",
          "Progressive enhancement"
        ]
      },
      {
        id: 'lit',
        title: "Lit (Web Components)",
        content: [
          "Simple, modern web components",
          "Reactive properties",
          "Scoped styles",
          "Fast and lightweight",
          "Framework agnostic",
          "By Google",
          "Works with any framework",
          "Standards-based"
        ]
      },
      {
        id: 'htmx',
        title: "HTMX",
        content: [
          "Access AJAX, CSS Transitions, WebSockets via HTML",
          "No JavaScript required",
          "Progressive enhancement",
          "Tiny size (14KB)",
          "Server-side rendering friendly",
          "Great for traditional backend devs",
          "RESTful approach",
          "Simple but powerful"
        ]
      },
      {
        id: 'other-resources',
        title: "Learning Resources",
        resources: [
          { name: "Svelte Tutorial", url: "svelte.dev/tutorial", desc: "Interactive Svelte guide" },
          { name: "SolidJS Docs", url: "solidjs.com", desc: "Official Solid documentation" },
          { name: "Next.js Learn", url: "nextjs.org/learn", desc: "Next.js interactive course" },
          { name: "Remix Docs", url: "remix.run/docs", desc: "Remix documentation" },
          { name: "Astro Docs", url: "docs.astro.build", desc: "Astro documentation" },
          { name: "Qwik Docs", url: "qwik.builder.io", desc: "Qwik framework guide" },
          { name: "Alpine.js Docs", url: "alpinejs.dev", desc: "Alpine.js documentation" },
          { name: "HTMX Essays", url: "htmx.org/essays", desc: "HTMX philosophy & guides" }
        ]
      }
    ]
  }
};

const LEARNING_DATA_V2 = {
  html: {
    title: "HTML & HTML5",
    icon: Code,
    description: "HyperText Markup Language - the foundation of web development",
    detailedInfo:
      "HTML (HyperText Markup Language) is the standard markup language for creating web pages. HTML5 is the latest version, introducing semantic elements, multimedia support, and powerful APIs.",
    sections: [
      {
        id: "html-basics",
        title: "HTML5 Features & Uses",
        content: [
          "Semantic elements (header, nav, article, section, footer)",
          "Audio and Video support without plugins",
          "Canvas for graphics",
          "Local & Session Storage",
          "Geolocation API",
          "Drag and Drop",
          "Web Workers",
          "Form enhancements"
        ]
      },
      {
        id: "html-resources",
        title: "Learning Resources",
        resources: {
          youtube: [
            {
              name: "Traversy Media – HTML Crash Course",
              url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
              desc: "Beginner-friendly HTML fundamentals"
            },
            {
              name: "freeCodeCamp – HTML Full Course",
              url: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
              desc: "Complete HTML course with projects"
            },
            {
              name: "Kevin Powell – Semantic HTML",
              url: "https://www.youtube.com/watch?v=bOUhq46fd5g",
              desc: "Semantic & accessible HTML"
            }
          ],
          links: [
            {
              name: "MDN Web Docs",
              url: "https://developer.mozilla.org",
              desc: "Comprehensive HTML documentation"
            },
            {
              name: "W3Schools",
              url: "https://www.w3schools.com/html",
              desc: "Interactive tutorials"
            },
            {
              name: "HTML5 Doctor",
              url: "https://html5doctor.com",
              desc: "HTML5 element reference"
            },
            {
              name: "WebAIM",
              url: "https://webaim.org",
              desc: "Accessibility resources"
            },
            {
              name: "freeCodeCamp",
              url: "https://www.freecodecamp.org",
              desc: "Free HTML projects"
            }
          ]
        }
      }
    ]
  },

  css: {
    title: "CSS & Ecosystem",
    icon: Palette,
    description: "Cascading Style Sheets - styling and layout for the web",
    detailedInfo:
      "CSS controls layout, visuals, animations, and responsiveness using Flexbox, Grid, and modern features.",
    sections: [
      {
        id: "css-resources",
        title: "Learning Resources",
        resources: {
          youtube: [
            {
              name: "Kevin Powell",
              url: "https://www.youtube.com/@KevinPowell",
              desc: "Modern CSS layouts & best practices"
            },
            {
              name: "freeCodeCamp – CSS Full Course",
              url: "https://www.youtube.com/watch?v=OXGznpKZ_sA",
              desc: "CSS from basics to advanced"
            },
            {
              name: "Flexbox in 20 Minutes",
              url: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
              desc: "Visual Flexbox mastery"
            }
          ],
          links: [
            {
              name: "CSS-Tricks",
              url: "https://css-tricks.com",
              desc: "CSS tips & guides"
            },
            {
              name: "MDN CSS",
              url: "https://developer.mozilla.org/CSS",
              desc: "Complete CSS reference"
            },
            {
              name: "Flexbox Froggy",
              url: "https://flexboxfroggy.com",
              desc: "Learn Flexbox via game"
            },
            {
              name: "Can I Use",
              url: "https://caniuse.com",
              desc: "Browser support tables"
            }
          ]
        }
      }
    ]
  },

  javascript: {
    title: "JavaScript & Ecosystem",
    icon: Sparkles,
    description: "The programming language of the web",
    detailedInfo:
      "JavaScript powers interactivity, async behavior, and full-stack development.",
    sections: [
      {
        id: "js-resources",
        title: "Learning Resources",
        resources: {
          youtube: [
            {
              name: "Namaste JavaScript – Akshay Saini",
              url: "https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP",
              desc: "Deep JavaScript internals"
            },
            {
              name: "Traversy Media – JS Crash Course",
              url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
              desc: "Practical JavaScript overview"
            }
          ],
          links: [
            {
              name: "JavaScript.info",
              url: "https://javascript.info",
              desc: "Modern JS tutorial"
            },
            {
              name: "MDN JavaScript",
              url: "https://developer.mozilla.org/JavaScript",
              desc: "JS reference"
            },
            {
              name: "You Don't Know JS",
              url: "https://github.com/getify/You-Dont-Know-JS",
              desc: "Deep JS concepts"
            },
            {
              name: "JavaScript30",
              url: "https://javascript30.com",
              desc: "30-day JS challenge"
            }
          ]
        }
      }
    ]
  },

  react: {
    title: "React Ecosystem",
    icon: BookOpen,
    description: "Libraries, tools, and best practices for React",
    detailedInfo:
      "React is a component-based UI library with a massive ecosystem.",
    sections: [
      {
        id: "react-resources",
        title: "Learning Resources",
        resources: {
          youtube: [
            {
              name: "React Official Channel",
              url: "https://www.youtube.com/@reactjs",
              desc: "Official React talks"
            },
            {
              name: "Codevolution – React Playlist",
              url: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwi7f5dxlXAh2uii2G0fZ3Qp",
              desc: "Structured React learning"
            },
            {
              name: "Web Dev Simplified",
              url: "https://www.youtube.com/@WebDevSimplified",
              desc: "Hooks & React patterns"
            }
          ],
          links: [
            {
              name: "React Docs",
              url: "https://react.dev",
              desc: "Official documentation"
            },
            {
              name: "Awesome React",
              url: "https://github.com/enaqx/awesome-react",
              desc: "Curated resources"
            },
            {
              name: "React Patterns",
              url: "https://reactpatterns.com",
              desc: "Design patterns"
            }
          ]
        }
      }
    ]
  },

  angular: {
    title: "Angular Ecosystem",
    icon: BookOpen,
    description: "Full-featured framework by Google",
    detailedInfo:
      "Angular is an opinionated, TypeScript-based framework for scalable apps.",
    sections: [
      {
        id: "angular-resources",
        title: "Learning Resources",
        resources: {
          youtube: [
            {
              name: "Angular Official Channel",
              url: "https://www.youtube.com/@Angular",
              desc: "Official Angular updates"
            },
            {
              name: "Codevolution – Angular",
              url: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ",
              desc: "Angular from basics to advanced"
            }
          ],
          links: [
            {
              name: "Angular Docs",
              url: "https://angular.io/docs",
              desc: "Official Angular guide"
            },
            {
              name: "NgRx",
              url: "https://ngrx.io",
              desc: "State management"
            }
          ]
        }
      }
    ]
  },

  vue: {
    title: "Vue.js Ecosystem",
    icon: BookOpen,
    description: "The Progressive JavaScript Framework",
    detailedInfo:
      "Vue is an approachable framework with powerful reactivity.",
    sections: [
      {
        id: "vue-resources",
        title: "Learning Resources",
        resources: {
          youtube: [
            {
              name: "Vue Mastery",
              url: "https://www.youtube.com/@VueMastery",
              desc: "High-quality Vue tutorials"
            },
            {
              name: "Learn Vue",
              url: "https://www.youtube.com/@LearnVue",
              desc: "Beginner to advanced Vue"
            }
          ],
          links: [
            {
              name: "Vue Docs",
              url: "https://vuejs.org",
              desc: "Official Vue documentation"
            },
            {
              name: "Awesome Vue",
              url: "https://github.com/vuejs/awesome-vue",
              desc: "Curated Vue resources"
            }
          ]
        }
      }
    ]
  },

  others: {
    title: "Other Frameworks",
    icon: Sparkles,
    description: "Modern alternatives and emerging frameworks",
    detailedInfo:
      "Frameworks like Svelte, Next.js, Astro, and others pushing performance.",
    sections: [
      {
        id: "other-resources",
        title: "Learning Resources",
        resources: {
          youtube: [
            {
              name: "Fireship",
              url: "https://www.youtube.com/@Fireship",
              desc: "Modern frameworks explained fast"
            },
            {
              name: "Svelte Society",
              url: "https://www.youtube.com/@SvelteSociety",
              desc: "Svelte ecosystem"
            },
            {
              name: "Vercel",
              url: "https://www.youtube.com/@vercel",
              desc: "Next.js & React at scale"
            }
          ],
          links: [
            {
              name: "Svelte Tutorial",
              url: "https://svelte.dev/tutorial",
              desc: "Interactive Svelte guide"
            },
            {
              name: "Next.js Learn",
              url: "https://nextjs.org/learn",
              desc: "Next.js course"
            },
            {
              name: "Astro Docs",
              url: "https://docs.astro.build",
              desc: "Astro documentation"
            },
            {
              name: "HTMX",
              url: "https://htmx.org",
              desc: "HTML-driven interactivity"
            }
          ]
        }
      }
    ]
  }
};