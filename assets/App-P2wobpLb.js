import{r as l,j as e}from"./vendor-three-BDMj-JYN.js";import{T as u}from"./ThemeSwitcher-D3i-LziO.js";function j({onDone:a}){const[t,n]=l.useState("ink");return l.useEffect(()=>{const i=[setTimeout(()=>n("type"),1200),setTimeout(()=>n("recede"),3e3),setTimeout(()=>n("exit"),3800),setTimeout(()=>a(),4200)];return()=>i.forEach(clearTimeout)},[a]),e.jsxs("div",{className:`ldr ${t==="exit"?"ldr--exit":""}`,children:[e.jsx("div",{className:`ldr__blot ${t!=="ink"?"ldr__blot--spread":""} ${t==="recede"||t==="exit"?"ldr__blot--recede":""}`,children:e.jsx("svg",{viewBox:"0 0 200 200",className:"ldr__blot-svg",children:e.jsx("path",{d:"M100,30 Q130,25 145,50 Q165,55 160,80 Q170,105 150,120 Q155,145 135,155 Q120,170 100,165 Q80,172 65,155 Q45,148 40,125 Q30,105 40,85 Q35,60 55,50 Q68,28 100,30 Z",fill:"var(--ink)"})})}),e.jsxs("div",{className:`ldr__text ${t==="type"||t==="recede"?"ldr__text--show":""}`,children:[e.jsx("p",{className:"ldr__masthead",children:"THE KUMAR CHRONICLE".split("").map((i,s)=>e.jsx("span",{className:"ldr__char",style:{animationDelay:`${1.3+s*.06}s`},children:i===" "?" ":i},s))}),e.jsx("p",{className:`ldr__sub ${t==="type"||t==="recede"?"ldr__sub--show":""}`,children:"PRINTING EDITION..."})]}),e.jsx("style",{children:`
        .ldr {
          position: fixed; inset: 0; z-index: 9999;
          background: var(--paper);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          transition: opacity 0.4s ease;
        }
        .ldr--exit { opacity: 0; pointer-events: none; }

        /* ── Ink blot ── */
        .ldr__blot {
          position: absolute;
          width: 150px; height: 150px;
          transform: scale(0);
          transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .ldr__blot--spread {
          transform: scale(1.4);
        }
        .ldr__blot--recede {
          transform: scale(0) !important;
          transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1) !important;
        }

        .ldr__blot-svg {
          width: 100%; height: 100%;
          filter: blur(2px);
        }

        /* ── Typewriter text ── */
        .ldr__text {
          position: relative; z-index: 2;
          text-align: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .ldr__text--show { opacity: 1; }

        .ldr__masthead {
          font-family: var(--font-headline);
          font-size: clamp(24px, 5vw, 42px);
          font-weight: 900;
          color: var(--ink);
          letter-spacing: 2px;
          display: flex;
          justify-content: center;
        }

        .ldr__char {
          opacity: 0;
          animation: charStamp 0.1s ease forwards;
        }

        @keyframes charStamp {
          0%   { opacity: 0; transform: translateY(-4px) scale(1.2); }
          50%  { opacity: 1; transform: translateY(1px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .ldr__sub {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--gold);
          letter-spacing: 4px;
          margin-top: 12px;
          opacity: 0;
          transition: opacity 0.5s ease 2.4s;
        }
        .ldr__sub--show { opacity: 1; }
      `})]})}const v={bio:["Software developer at <strong>Amdocs</strong> with a focus on building modern web applications using React, Python, and Node.js. I specialize in frontend development and backend modernization.","On the side, I have a passion for game development and pixel art — shipping titles built in Unity and Godot."]},y=[{title:"Frontend Developer",tagline:"Responsive & Interactive"},{title:"Backend Developer",tagline:"APIs & Systems"},{title:"Game Developer",tagline:"Worlds & Mechanics"},{title:"3D & Pixel Artist",tagline:"Pixels & Polygons"}],b=[{label:"Years Experience",value:"2+"},{label:"Projects",value:"27+"},{label:"Technologies",value:"21"}],w={frontend:["JavaScript","TypeScript","React","Next.js","Tailwind"],backend:["Python","FastAPI","Node.js","PostgreSQL","MongoDB"],data:["Elasticsearch","MySQL","Redis","SQL"],cloud:["AWS","Docker","Jenkins","CI/CD"],mlAi:["HuggingFace","LLMs","NLP","Transformers"],tools:["Git","Linux","Jest","pytest"],gameDev:["Unity","Godot","Blender","Krita"]},k=[{title:"Software Developer",company:"Amdocs",date:"Aug 2023 — Present",points:["Led design and development of a large-scale responsive web application using React 18, migrating a legacy Java Swing desktop app to browser-based access for 50+ internal users","Built reusable React component library (React Hook Form, TanStack Table) and implemented React Query for server state management, reducing new feature development time by 60% and API calls by 35%","Built interactive data visualization using React Flow and Recharts, reducing configuration errors by 25%","Designed and implemented scalable backend services using Python FastAPI with JWT authentication and Redis caching, reducing API response time by 40% and database queries by 35%","Migrated 150+ database entities from Java/Hibernate to SQLAlchemy 2.0 with async operations; created OpenAPI/Swagger documentation reducing frontend integration time by 50%","Set up CI/CD pipeline with Jenkins and Docker, reducing deployment time from 4 hours to 20 minutes; wrote unit and integration tests achieving 80%+ code coverage"]}],m=[{title:"Estate Explorer",description:"A full-stack real estate platform with real-time chat, interactive maps, and property listings. Features a dark modern UI with Leaflet maps, Socket.IO messaging, and an async FastAPI backend.",tech:["React","FastAPI","PostgreSQL","Socket.IO"],type:"web",github:"#",live:"#"},{title:"Smart Search Engine",description:"Enterprise search system handling millions of documents with fuzzy matching, faceted search, and real-time indexing. Reduced search latency by 40%.",tech:["Python","Elasticsearch","Redis","PostgreSQL","Docker"],type:"backend",github:"#"},{title:"ML Pipeline Orchestrator",description:"End-to-end machine learning pipeline framework for training, evaluating, and deploying NLP models in production with automated A/B testing.",tech:["Python","AWS","Docker","Jenkins","pytest"],type:"ai",github:"#",live:"#"},{title:"ProTrackr",description:"A client-side task management app with drag-and-drop reordering, project organization, dark mode, and offline persistence. Built with React 19, Zustand, and Tailwind v4 — no backend required.",tech:["React","Zustand","Tailwind"],type:"web",live:"https://xyz.github.io/ProTrackr/"},{title:"Space Brawl",description:"A captivating space-themed platformer that challenges players to navigate an alien ship, gather crucial resources, and outsmart foes in a pixel art universe.",tech:["C#","Unity","WebGL"],type:"game",live:"https://sahil-kumar.itch.io/space-brawl"},{title:"Space Blaster",description:"A fast-paced multi-directional shooting game where players navigate through space, battling enemies and dodging asteroids in a thrilling quest for survival.",tech:["C#","Unity","WebGL"],type:"game",live:"https://sahil-kumar.itch.io/space-blaster"},{title:"TV Show Search",description:"A TV show discovery app built with Vue 3 and Vuetify. Features debounced search suggestions, recent search history, keyboard navigation, and request cancellation — powered by the TVmaze API.",tech:["Vue","Vuetify","Pinia"],type:"web",live:"https://xyz.github.io/TV-Show-Search/"}],x={github:"https://github.com/SahilKumar7",linkedin:"https://linkedin.com/in/sahil-kumar7",email:"sahil.kumar5729@gmail.com"};function N({onOpen:a}){const n=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return e.jsxs("div",{className:"cover paper-bg",children:[e.jsxs("div",{className:"cover__ornaments",children:[e.jsx("div",{className:"corner-ornament corner-ornament--tl"}),e.jsx("div",{className:"corner-ornament corner-ornament--tr"}),e.jsx("div",{className:"corner-ornament corner-ornament--bl"}),e.jsx("div",{className:"corner-ornament corner-ornament--br"})]}),e.jsx("span",{className:"margin-note",style:{top:"18%",left:12,transform:"rotate(-90deg)",transformOrigin:"left top"},children:"see pg. 2 →"}),e.jsx("span",{className:"margin-note",style:{top:"55%",right:14},children:"developing story..."}),e.jsx("span",{className:"margin-note",style:{bottom:"12%",left:16},children:"cont'd inside"}),e.jsxs("div",{className:"cover__weather",children:[e.jsx("span",{className:"cover__weather-loc",children:"India"}),e.jsx("span",{className:"cover__weather-temp",children:"28°C Sunny"})]}),e.jsxs("div",{className:"cover__inner",children:[e.jsxs("header",{className:"cover__masthead",children:[e.jsx("hr",{className:"rule-thick"}),e.jsxs("div",{className:"cover__masthead-row",children:[e.jsx("span",{className:"cover__jp",children:"開発者新聞"}),e.jsxs("div",{className:"cover__masthead-center",children:[e.jsx("h1",{className:"cover__title",children:"The Kumar Chronicle"}),e.jsx("svg",{className:"cover__masthead-line",viewBox:"0 0 400 8",width:"100%",height:"8",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,4 Q50,0 100,4 Q150,8 200,4 Q250,0 300,4 Q350,8 400,4",stroke:"var(--gold)",strokeWidth:"1",fill:"none"})})]}),e.jsx("span",{className:"cover__jp",children:"第一版"})]}),e.jsxs("div",{className:"cover__meta-row",children:[e.jsx("span",{className:"dateline",children:n}),e.jsx("span",{className:"dateline",children:"Vol. IX · No. 1"}),e.jsx("span",{className:"dateline",children:"Est. 2023"})]}),e.jsx("hr",{className:"rule-thick"})]}),e.jsxs("div",{className:"cover__headline-block",children:[e.jsxs("div",{className:"cover__headline-row",children:[e.jsxs("div",{children:[e.jsx("p",{className:"area-label",children:"AREA.001 — BREAKING"}),e.jsx("h2",{className:"headline cover__main-headline",children:"Software Developer Builds The Future, One Commit at a Time"})]}),e.jsx("span",{className:"red-stamp cover__stamp",children:"EXCLUSIVE"})]}),e.jsx("p",{className:"byline",children:"By Staff Reporter — Feature Desk"}),e.jsxs("div",{className:"news-cols-2",children:[e.jsxs("p",{className:"cover__lead",children:[v.bio[0].replace(/<\/?strong>/g,"")," In a world driven by digital transformation, Kumar continues to push boundaries across web, backend, and game development."]}),e.jsxs("p",{className:"cover__lead",children:[v.bio[1]," With ",m.length," projects and counting, the developer shows no signs of slowing down."]})]})]}),e.jsx("hr",{className:"rule-thin"}),e.jsxs("div",{className:"cover__teasers",children:[e.jsxs("div",{className:"cover__teaser",children:[e.jsx("p",{className:"area-label",children:"AREA.002 — CAREER"}),e.jsx("h3",{className:"cover__teaser-title",children:"Amdocs Engineer Modernizes Enterprise Platform"}),e.jsx("p",{className:"cover__teaser-text",children:"Led migration of legacy Java Swing desktop application to React 18 web platform serving 50+ users. Reduced deployment time from 4 hours to 20 minutes."})]}),e.jsxs("div",{className:"cover__teaser",children:[e.jsx("p",{className:"area-label",children:"AREA.003 — PROJECTS"}),e.jsxs("h3",{className:"cover__teaser-title",children:[m[0].title,": AI Meets Real Estate"]}),e.jsxs("p",{className:"cover__teaser-text",children:[m[0].description.slice(0,140),"..."]})]})]}),e.jsx("hr",{className:"rule-thin"}),e.jsxs("div",{className:"cover__classifieds",children:[e.jsx("span",{className:"cover__cl-label",children:"CLASSIFIEDS:"}),e.jsx("span",{children:"React Developer Available"}),e.jsx("span",{children:"·"}),e.jsx("span",{children:"Python Backend Specialist"}),e.jsx("span",{children:"·"}),e.jsx("span",{children:"Game Dev for Hire"}),e.jsx("span",{children:"·"}),e.jsx("span",{children:"Full Stack Expert"})]}),e.jsx("hr",{className:"rule-dashed"}),e.jsxs("button",{className:"cover__open",onClick:a,children:[e.jsx("span",{children:"Read the Full Edition"}),e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:e.jsx("path",{d:"M5,12 L19,12 M13,6 L19,12 L13,18",strokeLinecap:"round",strokeLinejoin:"round"})})]}),e.jsx("p",{className:"cover__hint",children:"or scroll down"})]}),e.jsx("style",{children:`
        .cover {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 48px 24px;
          position: relative;
          overflow: hidden;
        }

        .cover__inner {
          max-width: 740px; width: 100%;
          padding: 48px 44px;
          position: relative; z-index: 1;
        }

        .cover__weather {
          position: absolute; top: 20px; right: 48px;
          display: flex; flex-direction: column; align-items: flex-end;
          font-family: var(--font-mono); font-size: 11px;
          color: var(--ink-faded); letter-spacing: 1px; z-index: 2;
        }
        .cover__weather-temp { font-weight: 700; color: var(--ink-light); }

        /* ── Masthead ── */
        .cover__masthead { text-align: center; margin-bottom: 32px; }
        .cover__masthead-row { display: flex; align-items: center; justify-content: center; gap: 24px; margin: 12px 0; }
        .cover__masthead-center { display: flex; flex-direction: column; align-items: center; }
        .cover__title { font-family: var(--font-headline); font-size: clamp(28px, 6vw, 50px); font-weight: 900; letter-spacing: 1px; }
        .cover__masthead-line { margin-top: 4px; max-width: 300px; }
        .cover__jp { font-family: var(--font-jp); font-size: 12px; color: var(--ink-faded); letter-spacing: 4px; }
        .cover__meta-row { display: flex; justify-content: space-between; padding: 0 20px; }

        /* ── Headline block ── */
        .cover__headline-block { margin-bottom: 20px; }
        .cover__headline-row { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 8px; }
        .cover__main-headline { font-size: clamp(22px, 4vw, 38px); margin: 6px 0 8px; }
        .cover__stamp { flex-shrink: 0; margin-top: 12px; }
        .cover__lead { font-size: 14px; line-height: 1.8; color: var(--ink-light); margin-bottom: 8px; }

        /* ── Teasers ── */
        .cover__teasers { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 12px 0; }
        .cover__teaser-title { font-family: var(--font-headline); font-size: 17px; font-weight: 700; margin: 4px 0 6px; }
        .cover__teaser-text { font-size: 13px; color: var(--ink-faded); line-height: 1.6; }

        /* ── Classifieds strip ── */
        .cover__classifieds {
          display: flex; gap: 8px; align-items: center; flex-wrap: wrap;
          font-family: var(--font-mono); font-size: 11px; color: var(--ink-faded);
          letter-spacing: 1px; padding: 8px 0;
        }
        .cover__cl-label { font-weight: 700; color: var(--gold); }

        /* ── Open button ── */
        .cover__open {
          display: flex; align-items: center; gap: 12px; margin: 28px auto 10px;
          padding: 14px 36px; background: var(--ink); color: var(--paper);
          font-family: var(--font-headline); font-size: 18px; font-weight: 700;
          border: none; cursor: pointer; letter-spacing: 1px; transition: all 0.3s ease;
        }
        .cover__open:hover { background: var(--gold); color: var(--ink); transform: translateY(-2px); }

        .cover__hint { text-align: center; font-family: var(--font-mono); font-size: 12px; color: var(--ink-faded); letter-spacing: 2px; }

        @media(max-width:600px) {
          .cover__inner { padding: 28px 20px; }
          .cover__teasers { grid-template-columns: 1fr; }
          .cover__masthead-row { flex-direction: column; gap: 4px; }
          .cover__meta-row { flex-direction: column; align-items: center; gap: 4px; }
          .cover__headline-row { flex-direction: column; }
          .cover__weather { top: 8px; right: 16px; }
          .cover__classifieds { display: none; }
        }
      `})]})}function L({active:a,onComplete:t,children:n}){const[i,s]=l.useState("idle");return l.useEffect(()=>{if(!a)return;s("flipping");const r=setTimeout(()=>s("done"),2e3),o=setTimeout(()=>t(),2400);return()=>{clearTimeout(r),clearTimeout(o)}},[a,t]),i==="idle"?null:e.jsxs("div",{className:`flip ${i==="done"?"flip--done":""}`,children:[e.jsxs("div",{className:`flip__page ${i==="flipping"?"flip__page--flip":""}`,children:[e.jsx("div",{className:"flip__front paper-bg",children:e.jsxs("div",{className:"flip__front-content",children:[e.jsx("p",{className:"flip__headline",children:"The Kumar Chronicle"}),e.jsxs("div",{className:"flip__lines",children:[e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("div",{})]})]})}),e.jsxs("div",{className:"flip__back paper-bg",children:[e.jsxs("div",{className:"flip__bleed",children:[e.jsx("p",{children:"SOFTWARE DEVELOPER BUILDS THE FUTURE"}),e.jsx("p",{children:"Leading migration of enterprise platforms"}),e.jsx("p",{children:"27+ projects spanning web, AI, and games"}),e.jsx("p",{children:"Full stack engineering at Amdocs"})]}),e.jsx("div",{className:"flip__back-grain"})]}),e.jsx("div",{className:`flip__edge ${i==="flipping"?"flip__edge--show":""}`})]}),e.jsx("div",{className:`flip__shadow ${i==="flipping"?"flip__shadow--show":""}`}),e.jsx("div",{className:`flip__reveal ${i==="done"?"flip__reveal--show":""}`,children:n}),e.jsx("style",{children:`
        .flip {
          position: fixed;
          inset: 0;
          z-index: 50;
          background: var(--bg-dark);
        }
        .flip--done {
          pointer-events: none;
          animation: fadeIn 0.4s ease forwards reverse;
          animation-delay: 0.3s;
        }

        /* ── Page container ── */
        .flip__page {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          transform-origin: left center;
          transition: none;
        }
        .flip__page--flip {
          animation: realisticFlip 1.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        /* ── Front face ── */
        .flip__front {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .flip__front-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .flip__headline {
          font-family: var(--font-headline);
          font-size: clamp(18px, 3vw, 32px);
          font-weight: 900;
          color: var(--ink-faded);
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .flip__lines {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .flip__lines div {
          height: 2px;
          background: var(--ink-faded);
          opacity: 0.15;
          border-radius: 1px;
        }
        .flip__lines div:nth-child(odd) { width: 200px; }
        .flip__lines div:nth-child(even) { width: 160px; }

        /* ── Back face — bleed-through ── */
        .flip__back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          transform: rotateY(180deg);
          overflow: hidden;
        }

        .flip__bleed {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transform: scaleX(-1);
          opacity: 0.06;
          font-family: var(--font-headline);
          font-size: 20px;
          font-weight: 900;
          color: var(--ink);
          text-align: center;
          padding: 40px;
        }

        .flip__back-grain {
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.01) 2px, rgba(0,0,0,0.01) 3px),
            radial-gradient(ellipse at 40% 60%, rgba(160,140,100,0.08) 0%, transparent 60%);
        }

        /* ── Page edge (thickness) ── */
        .flip__edge {
          position: absolute;
          top: 0;
          right: -3px;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to right, var(--paper-dark), rgba(200,190,170,0.5));
          opacity: 0;
          transform-origin: left center;
          pointer-events: none;
          z-index: 10;
        }
        .flip__edge--show {
          animation: pageEdgeGlow 1.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        /* ── Dynamic shadow ── */
        .flip__shadow {
          position: absolute;
          top: 5%;
          bottom: 5%;
          left: 40%;
          width: 200px;
          background: linear-gradient(to right, rgba(0,0,0,0.2), transparent);
          opacity: 0;
          pointer-events: none;
          filter: blur(20px);
          z-index: 5;
        }
        .flip__shadow--show {
          animation: flipShadow 1.8s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        /* ── Reveal ── */
        .flip__reveal {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.6s ease;
          z-index: 1;
        }
        .flip__reveal--show {
          opacity: 1;
        }
      `})]})}const S=[{label:"About",href:"#about"},{label:"Career",href:"#experience"},{label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"}];function z({visible:a}){const[t,n]=l.useState(!1);return l.useEffect(()=>{const i=()=>n(window.scrollY>40);return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),a?e.jsxs("nav",{className:`nav paper-bg ${t?"nav--scrolled":""}`,children:[e.jsxs("div",{className:"nav__inner",children:[e.jsx("a",{href:"#top",className:"nav__logo",children:"KC"}),e.jsx("ul",{className:"nav__links",children:S.map(i=>e.jsx("li",{children:e.jsx("a",{href:i.href,className:"nav__link",children:i.label})},i.href))})]}),e.jsx("style",{children:`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 80;
          padding: 12px 40px;
          border-bottom: 2px solid var(--ink);
          transition: box-shadow 0.3s ease;
          animation: slideUp 0.5s ease both;
        }
        .nav--scrolled { box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .nav__inner { display: flex; justify-content: space-between; align-items: center; max-width: 900px; margin: 0 auto; }
        .nav__logo { font-family: var(--font-headline); font-size: 24px; font-weight: 900; color: var(--ink); }
        .nav__links { display: flex; gap: 28px; }
        .nav__link {
          font-family: var(--font-mono); font-size: 13px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--ink-faded); transition: color 0.2s;
        }
        .nav__link:hover { color: var(--ink); }
        @media(max-width:600px) { .nav { padding: 12px 20px; } .nav__links { gap: 16px; } .nav__link { font-size: 11px; } }
      `})]}):null}function c(a={}){const t=l.useRef(null),[n,i]=l.useState(!1);return l.useEffect(()=>{const s=t.current;if(!s)return;const r=new IntersectionObserver(([o])=>{o.isIntersecting?(i(!0),a.repeat||r.unobserve(s)):a.repeat&&i(!1)},{threshold:a.threshold??.2,rootMargin:a.rootMargin??"0px"});return r.observe(s),()=>r.disconnect()},[a.threshold,a.rootMargin,a.repeat]),[t,n]}function p({className:a=""}){return e.jsx("svg",{className:`ornament ${a}`,width:"60",height:"16",viewBox:"0 0 60 16",children:e.jsx("path",{d:"M0,8 L15,8 M20,4 L25,8 L20,12 M25,8 L35,8 M40,4 L35,8 L40,12 M45,8 L60,8",stroke:"var(--gold)",strokeWidth:"1",fill:"none",strokeLinecap:"round"})})}function E(){const[a,t]=c({threshold:.1}),[n,i]=c();return e.jsxs("section",{className:"np-section",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:a,children:[e.jsx("p",{className:"area-label",style:{opacity:t?1:0,transition:"opacity 0.6s"},children:"AREA.001 — PROFILE"}),e.jsx("h2",{className:`headline np-section__title ink-stamp ${t?"stamped":""}`,style:{fontSize:"clamp(28px, 5vw, 42px)",margin:"4px 0 8px",position:"relative",display:"inline-block"},children:"About the Developer"}),e.jsx(p,{}),e.jsx("hr",{className:"rule-thin"})]}),e.jsxs("div",{className:"news-cols-2",style:{marginBottom:40},children:[v.bio.map((s,r)=>e.jsx("p",{className:r===0?"drop-cap np-body":"np-body",dangerouslySetInnerHTML:{__html:s}},r)),e.jsx("div",{className:"pull-quote",children:"“Building digital products that merge engineering precision with creative expression.”"})]}),e.jsx("div",{className:"np-services",children:y.map(s=>e.jsxs("div",{className:"np-svc",children:[e.jsx("h4",{className:"np-svc__title",children:s.title}),e.jsx("p",{className:"np-svc__tag",children:s.tagline})]},s.title))}),e.jsx("hr",{className:"rule-dashed"}),e.jsx("div",{ref:n,className:"np-stats",children:b.map((s,r)=>e.jsxs("div",{className:"np-stat",style:{opacity:i?1:0,transform:i?"none":"translateY(12px)",transition:`all 0.5s ease ${r*.12}s`},children:[e.jsx("span",{className:"np-stat__value",children:s.value}),e.jsx("span",{className:"np-stat__label",children:s.label})]},s.label))})]}),e.jsx("style",{children:`
        .np-section { padding: var(--section-gap) 0; position: relative; z-index: 1; }
        .np-section__title { margin: 4px 0 8px; }
        .np-body { font-size: 16px; line-height: 1.8; color: var(--ink-light); margin-bottom: 16px; }
        .np-body strong { color: var(--ink); font-weight: 700; }

        .np-services { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px; }
        .np-svc { border: 1px solid var(--ink-faded); padding: 14px 12px; text-align: center; transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .np-svc:hover { transform: translateY(-3px); box-shadow: 3px 3px 0 var(--ink-faded); }
        .np-svc__title { font-family: var(--font-headline); font-size: 15px; font-weight: 700; }
        .np-svc__tag { font-family: var(--font-mono); font-size: 11px; color: var(--ink-faded); letter-spacing: 1px; }

        .np-stats { display: flex; gap: 40px; padding: 20px 0; }
        .np-stat { display: flex; flex-direction: column; align-items: center; }
        .np-stat__value { font-family: var(--font-headline); font-size: 40px; font-weight: 900; line-height: 1; }
        .np-stat__label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 2px; color: var(--ink-faded); margin-top: 4px; text-transform: uppercase; }

        @media(max-width:700px) { .np-services { grid-template-columns: 1fr 1fr; } .np-stats { gap: 24px; flex-wrap: wrap; } }
        @media(max-width:400px) { .np-services { grid-template-columns: 1fr; } }
      `})]})}function A(){const[a,t]=c(),[n,i]=c({threshold:.05}),s=k[0];return e.jsxs("section",{className:"np-section",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:a,children:[e.jsx("p",{className:"area-label",style:{opacity:t?1:0,transition:"opacity 0.6s"},children:"AREA.002 — CAREER"}),e.jsx("h2",{className:`headline ink-stamp ${t?"stamped":""}`,style:{fontSize:"clamp(28px, 5vw, 42px)",margin:"4px 0 8px",position:"relative",display:"inline-block"},children:"Career Section"}),e.jsx(p,{}),e.jsx("hr",{className:"rule-thin"})]}),e.jsxs("article",{ref:n,children:[e.jsx("p",{className:"dateline",children:s.date}),e.jsx("h3",{className:"headline",style:{fontSize:26,margin:"4px 0 4px"},children:s.title}),e.jsxs("p",{className:"byline",children:["at ",s.company," — Full-time"]}),e.jsx("div",{className:"news-cols-2",style:{marginTop:12},children:s.points.map((r,o)=>e.jsxs("p",{className:"exp-point",style:{opacity:i?1:0,transform:i?"none":"translateY(8px)",transition:`all 0.5s ease ${.2+o*.1}s`},children:[e.jsx("span",{className:"exp-bullet",children:"¶"})," ",r]},o))})]})]}),e.jsx("style",{children:`
        .np-section { padding: var(--section-gap) 0; position: relative; z-index: 1; }
        .exp-point { font-size: 14px; line-height: 1.8; color: var(--ink-light); margin-bottom: 12px; display: flex; gap: 6px; }
        .exp-bullet { color: var(--gold); font-weight: 700; flex-shrink: 0; }
      `})]})}const R=[{key:"frontend",label:"FRONTEND"},{key:"backend",label:"BACKEND"},{key:"data",label:"DATA"},{key:"cloud",label:"CLOUD / DEVOPS"},{key:"mlAi",label:"ML / AI"},{key:"tools",label:"TOOLS"},{key:"gameDev",label:"GAME DEV"}];function T(){const[a,t]=c(),[n,i]=c({threshold:.1});return e.jsxs("section",{className:"np-section",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:a,children:[e.jsx("p",{className:"area-label",style:{opacity:t?1:0,transition:"opacity 0.6s"},children:"AREA.003 — CLASSIFIEDS"}),e.jsx("h2",{className:`headline ink-stamp ${t?"stamped":""}`,style:{fontSize:"clamp(28px, 5vw, 42px)",margin:"4px 0 8px",position:"relative",display:"inline-block"},children:"Skills & Services"}),e.jsx(p,{}),e.jsx("hr",{className:"rule-thin"})]}),e.jsx("div",{ref:n,className:"cl-grid",children:R.map((s,r)=>e.jsxs("div",{className:`tearoff ${i?"printed":""}`,style:{transitionDelay:`${.1+r*.08}s`},children:[e.jsx("h4",{className:"cl-ad__title",children:s.label}),e.jsx("hr",{className:"rule-dashed",style:{margin:"6px 0"}}),e.jsx("div",{className:"cl-ad__items",children:w[s.key].map(o=>e.jsx("span",{className:"cl-ad__item",children:o},o))})]},s.key))})]}),e.jsx("style",{children:`
        .np-section { padding: var(--section-gap) 0; position: relative; z-index: 1; }
        .cl-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }

        .cl-ad__title { font-family: var(--font-mono); font-size: 12px; letter-spacing: 2px; font-weight: 400; }
        .cl-ad__items { display: flex; flex-wrap: wrap; gap: 4px; }
        .cl-ad__item { font-family: var(--font-body); font-size: 13px; color: var(--ink-light); }
        .cl-ad__item::after { content: ' \\2022'; color: var(--ink-faded); margin-left: 4px; }
        .cl-ad__item:last-child::after { content: ''; }

        @media(max-width:700px) { .cl-grid { grid-template-columns: repeat(2, 1fr); } }
        @media(max-width:400px) { .cl-grid { grid-template-columns: 1fr; } }
      `})]})}function I({project:a,index:t}){const[n,i]=c({threshold:.15});return e.jsxs("article",{ref:n,className:"pa",style:{opacity:i?1:0,transform:i?"none":"translateY(16px)",transition:`all 0.6s ease ${Math.min(t*.1,.4)}s`},children:[e.jsxs("p",{className:"dateline",children:["FEATURE STORY · No.",String(t+1).padStart(2,"0")]}),e.jsx("h3",{className:"headline pa__title",children:a.title}),e.jsx("p",{className:"pa__body",children:a.description}),e.jsx("div",{className:"pa__tags",children:a.tech.map(s=>e.jsx("span",{className:"pa__tag",children:s},s))}),e.jsxs("div",{className:"pa__links",children:[a.github&&e.jsx("a",{href:a.github,target:"_blank",rel:"noopener noreferrer",children:"Source"}),a.live&&e.jsx("a",{href:a.live,target:"_blank",rel:"noopener noreferrer",children:"Visit"})]}),e.jsx("style",{children:`
        .pa { border: 1px solid var(--ink-faded); padding: 24px 20px; transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .pa:hover { box-shadow: 4px 4px 0 var(--ink-faded); transform: translateY(-2px); }
        .pa__title { font-size: 22px; margin: 4px 0 10px; }
        .pa__body { font-size: 14px; line-height: 1.7; color: var(--ink-light); margin-bottom: 12px; }
        .pa__tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
        .pa__tag { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1px; border: 1px solid var(--ink-faded); padding: 2px 8px; color: var(--ink-faded); }
        .pa__links { display: flex; gap: 16px; }
        .pa__links a { font-family: var(--font-headline); font-size: 14px; font-weight: 700; color: var(--ink); transition: color 0.2s; text-decoration: underline; text-underline-offset: 3px; }
        .pa__links a:hover { color: var(--gold); }
      `})]})}function P(){const[a,t]=c();return e.jsxs("section",{className:"np-section",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:a,children:[e.jsx("p",{className:"area-label",style:{opacity:t?1:0,transition:"opacity 0.6s"},children:"AREA.004 — FEATURE STORIES"}),e.jsx("h2",{className:`headline ink-stamp ${t?"stamped":""}`,style:{fontSize:"clamp(28px, 5vw, 42px)",margin:"4px 0 8px",position:"relative",display:"inline-block"},children:"Selected Projects"}),e.jsx(p,{}),e.jsx("hr",{className:"rule-thin"})]}),e.jsx("div",{className:"proj-grid",children:m.map((n,i)=>e.jsx(I,{project:n,index:i},n.title))})]}),e.jsx("style",{children:`
        .np-section { padding: var(--section-gap) 0; position: relative; z-index: 1; }
        .proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media(max-width:700px) { .proj-grid { grid-template-columns: 1fr; } }
      `})]})}function D(){const[a,t]=c(),[n,i]=c();return e.jsxs("section",{className:"np-section",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:a,children:[e.jsx("p",{className:"area-label",style:{opacity:t?1:0,transition:"opacity 0.6s"},children:"AREA.005 — BACK PAGE"}),e.jsx("h2",{className:`headline ink-stamp ${t?"stamped":""}`,style:{fontSize:"clamp(28px, 5vw, 42px)",margin:"4px 0 8px",position:"relative",display:"inline-block"},children:"Write to the Editor"}),e.jsx(p,{}),e.jsx("hr",{className:"rule-thin"})]}),e.jsxs("div",{ref:n,children:[e.jsx("p",{className:"ct-text",style:{opacity:i?1:0,transition:"opacity 0.8s ease 0.2s"},children:"Have a story tip, project proposal, or just want to say hello? The editor is always open to correspondence from fellow developers, designers, and creative minds."}),e.jsx("a",{href:`mailto:${x.email}`,className:"ct-cta",style:{opacity:i?1:0,transform:i?"none":"translateY(10px)",transition:"all 0.5s ease 0.4s"},children:"Send a Letter"}),e.jsx("hr",{className:"rule-dashed"}),e.jsxs("div",{className:"ct-links",style:{opacity:i?1:0,transition:"opacity 0.5s ease 0.6s"},children:[e.jsx("p",{className:"ct-links__label",children:"SUBSCRIPTIONS & SYNDICATION"}),e.jsxs("div",{className:"ct-links__row",children:[e.jsx("a",{href:x.github,target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),e.jsx("span",{children:"·"}),e.jsx("a",{href:x.linkedin,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),e.jsx("span",{children:"·"}),e.jsx("a",{href:`mailto:${x.email}`,children:"Email"})]})]})]}),e.jsx("hr",{className:"rule-thick",style:{marginTop:48}}),e.jsxs("footer",{className:"ct-footer",children:[e.jsx("p",{children:"© The Kumar Chronicle. All rights reserved."}),e.jsx("p",{className:"ct-footer__note",children:"Designed & Built by Sahil Kumar"})]})]}),e.jsx("style",{children:`
        .np-section { padding: var(--section-gap) 0; position: relative; z-index: 1; }
        .ct-text { font-size: 18px; line-height: 1.8; color: var(--ink-light); max-width: 560px; margin-bottom: 28px; }
        .ct-cta {
          display: inline-block; padding: 14px 36px;
          font-family: var(--font-headline); font-size: 18px; font-weight: 700;
          background: var(--ink); color: var(--paper); border: none;
          letter-spacing: 1px; transition: all 0.3s ease; margin-bottom: 32px;
        }
        .ct-cta:hover { background: var(--gold); color: var(--ink); transform: translateY(-2px); }

        .ct-links { margin-bottom: 24px; }
        .ct-links__label { font-family: var(--font-mono); font-size: 11px; letter-spacing: 3px; color: var(--ink-faded); margin-bottom: 8px; }
        .ct-links__row { display: flex; gap: 12px; align-items: center; }
        .ct-links__row a { font-family: var(--font-headline); font-size: 16px; font-weight: 700; color: var(--ink); text-decoration: underline; text-underline-offset: 3px; transition: color 0.2s; }
        .ct-links__row a:hover { color: var(--gold); }
        .ct-links__row span { color: var(--ink-faded); }

        .ct-footer { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; }
        .ct-footer p { font-size: 13px; color: var(--ink-faded); }
        .ct-footer__note { font-family: var(--font-mono); font-size: 11px; letter-spacing: 1px; }
      `})]})}function h({flip:a=!1}){return e.jsx("svg",{className:"torn-edge",viewBox:"0 0 1200 24",preserveAspectRatio:"none",style:{width:"100%",height:"24px",display:"block",transform:a?"scaleY(-1)":"none"},children:e.jsx("path",{d:"M0,12 L15,8 L28,14 L42,6 L58,15 L72,9 L88,16 L100,7 L118,13 L132,5 L150,14 L165,10 L180,16 L195,6 L212,13 L228,8 L245,15 L260,5 L278,12 L295,7 L310,16 L328,9 L342,14 L358,6 L375,13 L390,8 L408,15 L422,5 L440,12 L455,9 L472,16 L488,7 L505,14 L520,6 L538,13 L552,10 L570,15 L585,5 L602,12 L618,8 L635,16 L650,6 L668,14 L682,9 L700,15 L715,7 L732,13 L748,5 L765,14 L780,8 L798,16 L812,6 L830,12 L845,9 L862,15 L878,7 L895,13 L910,5 L928,14 L942,10 L960,16 L975,6 L992,12 L1008,8 L1025,15 L1040,5 L1058,13 L1072,9 L1090,16 L1105,7 L1122,14 L1138,6 L1155,13 L1170,8 L1185,15 L1200,12 L1200,24 L0,24 Z",fill:"var(--paper)"})})}function d({children:a,id:t}){const[n,i]=c({threshold:.05});return e.jsx("div",{ref:n,id:t,className:`np-unfold ${i?"unfolded":""}`,children:a})}function C(){return e.jsxs("div",{className:"inner paper-bg",id:"top",children:[e.jsxs("div",{className:"inner__spread",children:[e.jsx("div",{className:"fold-crease"}),e.jsx(d,{id:"about",children:e.jsx(E,{})}),e.jsx(h,{}),e.jsx(d,{id:"experience",children:e.jsx(A,{})}),e.jsx(h,{flip:!0}),e.jsx(d,{children:e.jsx(T,{})}),e.jsx(h,{}),e.jsx(d,{id:"projects",children:e.jsx(P,{})}),e.jsx(h,{flip:!0}),e.jsx(d,{id:"contact",children:e.jsx(D,{})})]}),e.jsx("style",{children:`
        .inner {
          min-height: 100vh;
          animation: slideUp 0.6s ease both;
        }
        .inner__spread {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
          padding: 60px 0 0;
        }
      `})]})}function M(){const[a,t]=l.useState(!0),[n,i]=l.useState(!1),[s,r]=l.useState(!1),o=l.useCallback(()=>t(!1),[]),f=l.useCallback(()=>{!n&&!s&&i(!0)},[n,s]),_=l.useCallback(()=>{r(!0),i(!1)},[]);return l.useEffect(()=>{if(a||s||n)return;const g=()=>{window.scrollY>80&&(f(),window.removeEventListener("scroll",g))};return window.addEventListener("scroll",g,{passive:!0}),()=>window.removeEventListener("scroll",g)},[a,s,n,f]),e.jsxs(e.Fragment,{children:[a&&e.jsx(j,{onDone:o}),!a&&!s&&!n&&e.jsx(N,{onOpen:f}),n&&e.jsx(L,{active:n,onComplete:_}),s&&e.jsxs(e.Fragment,{children:[e.jsx(z,{visible:s}),e.jsx(C,{})]}),e.jsx(u,{})]})}export{M as default};
