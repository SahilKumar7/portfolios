import{r as n,j as e}from"./vendor-three-BDMj-JYN.js";import{T as v}from"./ThemeSwitcher-D3i-LziO.js";function b({onDone:s}){const[i,t]=n.useState("draw");n.useEffect(()=>{const r=[setTimeout(()=>t("fill"),2400),setTimeout(()=>t("done"),3400),setTimeout(()=>t("exit"),3800),setTimeout(()=>s(),4500)];return()=>r.forEach(clearTimeout)},[s]);const a=i==="done"||i==="exit";return e.jsxs("div",{className:`loader ${i==="exit"?"loader--exit":""}`,children:[e.jsx("div",{className:"loader__grid"}),e.jsxs("div",{className:"loader__stage",children:[e.jsxs("svg",{className:"loader__scene",viewBox:"0 0 400 280",fill:"none",children:[e.jsx("path",{className:"loader__stroke s1",d:"M120,100 L280,100 L280,190 L120,190 Z",strokeWidth:"2.5"}),e.jsx("path",{className:"loader__stroke s2",d:"M140,125 L200,125",strokeWidth:"1.5"}),e.jsx("path",{className:"loader__stroke s2",d:"M140,140 L260,140",strokeWidth:"1.5"}),e.jsx("path",{className:"loader__stroke s2",d:"M140,155 L230,155",strokeWidth:"1.5"}),e.jsx("path",{className:"loader__stroke s2",d:"M140,170 L250,170",strokeWidth:"1.5"}),e.jsx("path",{className:"loader__stroke s3",d:"M185,190 L185,210 L215,210 L215,190",strokeWidth:"2"}),e.jsx("path",{className:"loader__stroke s3",d:"M165,210 L235,210",strokeWidth:"2.5"}),e.jsx("path",{className:"loader__stroke s4",d:"M70,180 L70,210 Q70,220 80,220 L95,220 Q105,220 105,210 L105,180",strokeWidth:"2"}),e.jsx("path",{className:"loader__stroke s4",d:"M105,190 Q120,190 120,200 Q120,210 105,210",strokeWidth:"1.5"}),e.jsx("path",{className:"loader__stroke s5",d:"M80,175 Q82,165 78,158",strokeWidth:"1.2",opacity:"0.5"}),e.jsx("path",{className:"loader__stroke s5",d:"M90,172 Q92,162 88,155",strokeWidth:"1.2",opacity:"0.5"}),e.jsx("path",{className:"loader__stroke s4",d:"M310,220 L340,145",strokeWidth:"2.5"}),e.jsx("path",{className:"loader__stroke s4",d:"M340,145 L345,135",strokeWidth:"2"}),e.jsx("circle",{className:"loader__stroke s4",cx:"346",cy:"133",r:"1.5"}),e.jsx("path",{className:"loader__stroke s5",d:"M60,80 L50,95 L60,110",strokeWidth:"2"}),e.jsx("path",{className:"loader__stroke s5",d:"M340,80 L350,95 L340,110",strokeWidth:"2"}),e.jsx("path",{className:"loader__stroke s5",d:"M200,55 Q185,55 185,70 Q185,82 195,86 L195,94 L205,94 L205,86 Q215,82 215,70 Q215,55 200,55",strokeWidth:"1.8"}),e.jsx("path",{className:"loader__stroke s5",d:"M195,94 L205,94",strokeWidth:"1.5"}),e.jsx("path",{className:"loader__stroke s5",d:"M196,98 L204,98",strokeWidth:"1.5"}),e.jsx("path",{className:"loader__stroke s6",d:"M200,42 L200,48",strokeWidth:"1.2"}),e.jsx("path",{className:"loader__stroke s6",d:"M175,50 L179,54",strokeWidth:"1.2"}),e.jsx("path",{className:"loader__stroke s6",d:"M225,50 L221,54",strokeWidth:"1.2"}),e.jsx("path",{className:"loader__stroke s6",d:"M170,70 L176,70",strokeWidth:"1.2"}),e.jsx("path",{className:"loader__stroke s6",d:"M230,70 L224,70",strokeWidth:"1.2"}),e.jsxs("g",{className:`loader__hatch ${i!=="draw"?"loader__hatch--show":""}`,children:[e.jsx("path",{d:"M135,115 L265,115 L265,180 L135,180 Z",fill:"var(--ink)",opacity:"0.04"}),e.jsx("line",{x1:"140",y1:"120",x2:"155",y2:"135",strokeWidth:"0.5"}),e.jsx("line",{x1:"150",y1:"120",x2:"165",y2:"135",strokeWidth:"0.5"}),e.jsx("line",{x1:"160",y1:"120",x2:"175",y2:"135",strokeWidth:"0.5"}),e.jsx("line",{x1:"250",y1:"160",x2:"265",y2:"175",strokeWidth:"0.5"}),e.jsx("line",{x1:"240",y1:"160",x2:"255",y2:"175",strokeWidth:"0.5"}),e.jsx("line",{x1:"230",y1:"160",x2:"245",y2:"175",strokeWidth:"0.5"})]}),e.jsxs("g",{className:`loader__sparkles ${a?"loader__sparkles--show":""}`,children:[e.jsx("path",{d:"M55,60 L57,55 L59,60 L64,62 L59,64 L57,69 L55,64 L50,62 Z",strokeWidth:"1"}),e.jsx("path",{d:"M330,55 L332,50 L334,55 L339,57 L334,59 L332,64 L330,59 L325,57 Z",strokeWidth:"1"}),e.jsx("path",{d:"M90,130 L91,127 L92,130 L95,131 L92,132 L91,135 L90,132 L87,131 Z",strokeWidth:"0.8"})]})]}),e.jsxs("svg",{className:"loader__monogram",viewBox:"0 0 120 60",fill:"none",children:[e.jsx("text",{x:"60",y:"48",textAnchor:"middle",fontFamily:"'Caveat', cursive",fontSize:"52",fontWeight:"700",stroke:"var(--ink)",strokeWidth:"1.8",fill:"none",strokeLinecap:"round",className:"loader__initials",children:"S.K."}),e.jsx("text",{x:"60",y:"48",textAnchor:"middle",fontFamily:"'Caveat', cursive",fontSize:"52",fontWeight:"700",fill:"var(--ink)",className:`loader__initials-fill ${a?"show":""}`,children:"S.K."})]}),e.jsxs("svg",{className:"loader__progress",viewBox:"0 0 240 16",fill:"none",children:[e.jsx("path",{d:"M4,8 Q12,4 24,8 Q36,12 48,8 Q60,4 72,8 Q84,12 96,8 Q108,4 120,8 Q132,12 144,8 Q156,4 168,8 Q180,12 192,8 Q204,4 216,8 Q228,12 236,8",stroke:"var(--pencil-light)",strokeWidth:"2",strokeLinecap:"round",className:"loader__bar-bg"}),e.jsx("path",{d:"M4,8 Q12,4 24,8 Q36,12 48,8 Q60,4 72,8 Q84,12 96,8 Q108,4 120,8 Q132,12 144,8 Q156,4 168,8 Q180,12 192,8 Q204,4 216,8 Q228,12 236,8",stroke:"var(--ink)",strokeWidth:"2",strokeLinecap:"round",className:"loader__bar-fill"})]})]}),e.jsx("style",{children:`
        .loader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: var(--paper);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.4, 0, 0, 1);
        }

        .loader--exit {
          opacity: 0;
          transform: scale(1.05);
          pointer-events: none;
        }

        /* ── Notebook grid ── */
        .loader__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--pencil-light) 1px, transparent 1px),
            linear-gradient(90deg, var(--pencil-light) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.12;
        }

        .loader__stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          position: relative;
          z-index: 2;
        }

        /* ── Scene SVG ── */
        .loader__scene {
          width: min(400px, 85vw);
          height: auto;
        }

        /* ── Stroke draw animation ── */
        .loader__stroke {
          stroke: var(--ink);
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
        }

        .loader__stroke.s1 {
          stroke-dasharray: 520;
          stroke-dashoffset: 520;
          animation: drawStroke 1s var(--sketch-ease) forwards;
        }
        .loader__stroke.s2 {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawStroke 0.6s var(--sketch-ease) forwards;
          animation-delay: 0.6s;
        }
        .loader__stroke.s3 {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawStroke 0.5s var(--sketch-ease) forwards;
          animation-delay: 1s;
        }
        .loader__stroke.s4 {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawStroke 0.7s var(--sketch-ease) forwards;
          animation-delay: 1.3s;
        }
        .loader__stroke.s5 {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawStroke 0.7s var(--sketch-ease) forwards;
          animation-delay: 1.7s;
        }
        .loader__stroke.s6 {
          stroke-dasharray: 50;
          stroke-dashoffset: 50;
          animation: drawStroke 0.3s var(--sketch-ease) forwards;
          animation-delay: 2.1s;
        }

        @keyframes drawStroke {
          to { stroke-dashoffset: 0; }
        }

        /* ── Cross-hatching ── */
        .loader__hatch line {
          stroke: var(--ink);
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .loader__hatch--show line {
          opacity: 0.12;
        }

        /* ── Sparkles ── */
        .loader__sparkles path {
          stroke: var(--ink);
          opacity: 0;
          transform-origin: center;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .loader__sparkles--show path {
          opacity: 0.6;
          animation: twinkle 1.5s ease infinite alternate;
        }
        .loader__sparkles--show path:nth-child(2) { animation-delay: 0.3s; }
        .loader__sparkles--show path:nth-child(3) { animation-delay: 0.6s; }

        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(0.9); }
          100% { opacity: 0.7; transform: scale(1.1); }
        }

        /* ── Monogram ── */
        .loader__monogram {
          width: 120px;
          height: 60px;
        }

        .loader__initials {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawStroke 1.2s var(--sketch-ease) forwards;
          animation-delay: 2s;
        }

        .loader__initials-fill {
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .loader__initials-fill.show {
          opacity: 1;
        }

        /* ── Progress bar ── */
        .loader__progress {
          width: 240px;
          height: 16px;
          margin-top: 8px;
        }

        .loader__bar-bg {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawStroke 0.4s ease forwards;
          animation-delay: 0.3s;
          opacity: 0.3;
        }

        .loader__bar-fill {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: fillBar 3.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          animation-delay: 0.5s;
        }

        @keyframes fillBar {
          0% { stroke-dashoffset: 300; }
          30% { stroke-dashoffset: 200; }
          60% { stroke-dashoffset: 100; }
          85% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }

        @media (max-width: 480px) {
          .loader__scene { width: 300px; }
          .loader__progress { width: 180px; }
        }
      `})]})}const u=[{label:"About",href:"#about"},{label:"Experience",href:"#experience"},{label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"}];function j(){const[s,i]=n.useState(!1),[t,a]=n.useState(!1);return n.useEffect(()=>{const r=()=>i(window.scrollY>60);return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),e.jsxs("nav",{className:`nav ${s?"nav--scrolled":""}`,children:[e.jsxs("div",{className:"nav__inner container",children:[e.jsx("a",{href:"#hero",className:"nav__logo",children:"S."}),e.jsxs("button",{className:`nav__burger ${t?"nav__burger--open":""}`,onClick:()=>a(r=>!r),"aria-label":"Toggle menu",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx("ul",{className:`nav__links ${t?"nav__links--open":""}`,children:u.map((r,o)=>e.jsx("li",{children:e.jsxs("a",{href:r.href,className:"nav__link",onClick:()=>a(!1),children:[e.jsx("span",{className:"nav__link-num",children:String(o+1).padStart(2,"0")}),r.label]})},r.href))})]}),e.jsx("style",{children:`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 18px 0;
          transition: all 0.4s ease;
        }

        .nav--scrolled {
          background: rgba(245, 240, 232, 0.92);
          backdrop-filter: blur(8px);
          padding: 12px 0;
          box-shadow: 0 1px 0 var(--pencil-light);
        }

        .nav__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav__logo {
          font-family: var(--font-sketch);
          font-size: 32px;
          font-weight: 700;
          color: var(--ink);
          transition: transform 0.3s ease;
        }

        .nav__logo:hover {
          transform: rotate(-5deg);
        }

        .nav__links {
          display: flex;
          gap: 36px;
          align-items: center;
        }

        .nav__link {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: var(--ink);
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav__link-num {
          font-family: var(--font-sketch);
          font-size: 12px;
          color: var(--pencil-light);
        }

        .nav__link:hover {
          color: var(--ink-light);
        }

        .nav__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .nav__burger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--ink);
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .nav__burger--open span:nth-child(1) { transform: rotate(45deg) translate(4px, 5px); }
        .nav__burger--open span:nth-child(2) { opacity: 0; }
        .nav__burger--open span:nth-child(3) { transform: rotate(-45deg) translate(4px, -5px); }

        @media (max-width: 768px) {
          .nav__burger { display: flex; }

          .nav__links {
            position: fixed;
            top: 0;
            right: 0;
            width: 260px;
            height: 100vh;
            background: var(--paper);
            flex-direction: column;
            justify-content: center;
            gap: 28px;
            transform: translateX(100%);
            transition: transform 0.4s var(--sketch-ease);
            box-shadow: -8px 0 30px rgba(0,0,0,0.05);
          }

          .nav__links--open {
            transform: translateX(0);
          }

          .nav__link { font-size: 18px; }
        }
      `})]})}const h={role:"Software Developer",tagline:"building web apps, backends, games, & pixel art.",bio:["Software developer at <strong>Amdocs</strong> with a focus on building modern web applications using React, Python, and Node.js. I specialize in frontend development and backend modernization.","On the side, I have a passion for game development and pixel art — shipping titles built in Unity and Godot."],location:"India",focus:"Full Stack & Game Dev"},y=[{title:"Frontend Developer",tagline:"Responsive & Interactive"},{title:"Backend Developer",tagline:"APIs & Systems"},{title:"Game Developer",tagline:"Worlds & Mechanics"},{title:"3D & Pixel Artist",tagline:"Pixels & Polygons"}],N=[{label:"Years Experience",value:"2+"},{label:"Projects",value:"27+"},{label:"Technologies",value:"21"}],w={frontend:["JavaScript","TypeScript","React","Next.js","Tailwind"],backend:["Python","FastAPI","Node.js","PostgreSQL","MongoDB"],data:["Elasticsearch","MySQL","Redis","SQL"],cloud:["AWS","Docker","Jenkins","CI/CD"],mlAi:["HuggingFace","LLMs","NLP","Transformers"],tools:["Git","Linux","Jest","pytest"],gameDev:["Unity","Godot","Blender","Krita"]},L=[{title:"Software Developer",company:"Amdocs",date:"Aug 2023 — Present",points:["Led design and development of a large-scale responsive web application using React 18, migrating a legacy Java Swing desktop app to browser-based access for 50+ internal users","Built reusable React component library (React Hook Form, TanStack Table) and implemented React Query for server state management, reducing new feature development time by 60% and API calls by 35%","Built interactive data visualization using React Flow and Recharts, reducing configuration errors by 25%","Designed and implemented scalable backend services using Python FastAPI with JWT authentication and Redis caching, reducing API response time by 40% and database queries by 35%","Migrated 150+ database entities from Java/Hibernate to SQLAlchemy 2.0 with async operations; created OpenAPI/Swagger documentation reducing frontend integration time by 50%","Set up CI/CD pipeline with Jenkins and Docker, reducing deployment time from 4 hours to 20 minutes; wrote unit and integration tests achieving 80%+ code coverage"]}],k=[{title:"Estate Explorer",description:"A full-stack real estate platform with real-time chat, interactive maps, and property listings. Features a dark modern UI with Leaflet maps, Socket.IO messaging, and an async FastAPI backend.",tech:["React","FastAPI","PostgreSQL","Socket.IO"],type:"web",github:"#",live:"#"},{title:"Smart Search Engine",description:"Enterprise search system handling millions of documents with fuzzy matching, faceted search, and real-time indexing. Reduced search latency by 40%.",tech:["Python","Elasticsearch","Redis","PostgreSQL","Docker"],type:"backend",github:"#"},{title:"ML Pipeline Orchestrator",description:"End-to-end machine learning pipeline framework for training, evaluating, and deploying NLP models in production with automated A/B testing.",tech:["Python","AWS","Docker","Jenkins","pytest"],type:"ai",github:"#",live:"#"},{title:"ProTrackr",description:"A client-side task management app with drag-and-drop reordering, project organization, dark mode, and offline persistence. Built with React 19, Zustand, and Tailwind v4 — no backend required.",tech:["React","Zustand","Tailwind"],type:"web",live:"https://xyz.github.io/ProTrackr/"},{title:"Space Brawl",description:"A captivating space-themed platformer that challenges players to navigate an alien ship, gather crucial resources, and outsmart foes in a pixel art universe.",tech:["C#","Unity","WebGL"],type:"game",live:"https://sahil-kumar.itch.io/space-brawl"},{title:"Space Blaster",description:"A fast-paced multi-directional shooting game where players navigate through space, battling enemies and dodging asteroids in a thrilling quest for survival.",tech:["C#","Unity","WebGL"],type:"game",live:"https://sahil-kumar.itch.io/space-blaster"},{title:"TV Show Search",description:"A TV show discovery app built with Vue 3 and Vuetify. Features debounced search suggestions, recent search history, keyboard navigation, and request cancellation — powered by the TVmaze API.",tech:["Vue","Vuetify","Pinia"],type:"web",live:"https://xyz.github.io/TV-Show-Search/"}],_={github:"https://github.com/SahilKumar7",linkedin:"https://linkedin.com/in/sahil-kumar7",email:"sahil.kumar5729@gmail.com"};function Q({animate:s=!1}){const[i,t]=n.useState(!1);n.useEffect(()=>{if(s){const r=setTimeout(()=>t(!0),400);return()=>clearTimeout(r)}},[s]);const a=i?"boy-scene boy-scene--show":"boy-scene";return e.jsxs("div",{className:a,children:[e.jsx("div",{className:"scene__board",children:e.jsxs("div",{className:"board__frame",children:[e.jsx("div",{className:"board__note n1"}),e.jsx("div",{className:"board__note n2"}),e.jsx("div",{className:"board__note n3"}),e.jsx("div",{className:"board__note n4"}),e.jsx("div",{className:"board__note n5"})]})}),e.jsxs("div",{className:"scene__lamp",children:[e.jsx("div",{className:"lamp__arm"}),e.jsx("div",{className:"lamp__shade"}),e.jsx("div",{className:"lamp__light"}),e.jsx("div",{className:"lamp__base"})]}),e.jsxs("div",{className:"scene__boy",children:[e.jsx("div",{className:"boy__hair"}),e.jsxs("div",{className:"boy__head",children:[e.jsxs("div",{className:"boy__glasses",children:[e.jsx("div",{className:"glass glass--l"}),e.jsx("div",{className:"glass glass--r"}),e.jsx("div",{className:"glass__bridge"})]}),e.jsx("div",{className:"boy__eye boy__eye--l"}),e.jsx("div",{className:"boy__eye boy__eye--r"}),e.jsx("div",{className:"boy__mouth"})]}),e.jsx("div",{className:"boy__ear"}),e.jsx("div",{className:"boy__neck"}),e.jsx("div",{className:"boy__body"}),e.jsx("div",{className:"boy__arm boy__arm--l"}),e.jsx("div",{className:"boy__arm boy__arm--r"}),e.jsx("div",{className:"boy__hand boy__hand--l"}),e.jsx("div",{className:"boy__hand boy__hand--r"})]}),e.jsxs("div",{className:"scene__desk",children:[e.jsx("div",{className:"desk__top"}),e.jsx("div",{className:"desk__leg desk__leg--l"}),e.jsx("div",{className:"desk__leg desk__leg--r"}),e.jsx("div",{className:"desk__shelf"})]}),e.jsxs("div",{className:"scene__items",children:[e.jsx("div",{className:"item__cup"}),e.jsx("div",{className:"item__paper item__paper--1"}),e.jsx("div",{className:"item__paper item__paper--2"}),e.jsx("div",{className:"item__pen"}),e.jsx("div",{className:"item__pen item__pen--2"}),e.jsx("div",{className:"item__book item__book--1"}),e.jsx("div",{className:"item__book item__book--2"}),e.jsx("div",{className:"item__book item__book--3"})]})]})}function S(){const[s,i]=n.useState(!1);n.useEffect(()=>{const a=setTimeout(()=>i(!0),300);return()=>clearTimeout(a)},[]);const t=a=>`${a} ${s?"show":""}`;return e.jsxs("section",{className:"hero",id:"hero",children:[e.jsxs("div",{className:"hero__inner container",children:[e.jsxs("div",{className:"hero__text",children:[e.jsx("p",{className:t("hero__greeting"),children:"Hi, I'm"}),e.jsxs("h1",{className:"hero__title",children:[e.jsx("span",{className:t("hero__name hero__name--first"),children:"Sahil"}),e.jsx("span",{className:t("hero__name hero__name--last"),children:"Kumar."})]}),e.jsx("p",{className:t("hero__role"),children:h.role}),e.jsxs("p",{className:t("hero__tagline"),children:[e.jsx("span",{className:"hero__tagline-jp",children:"ソフトウェア開発者"}),h.tagline]})]}),e.jsx("div",{className:t("hero__illustration"),children:e.jsx(Q,{animate:s})})]}),e.jsx("div",{className:t("hero__scroll"),children:e.jsx("svg",{width:"24",height:"40",viewBox:"0 0 24 40",children:e.jsx("path",{d:"M12,4 L12,28 M6,22 L12,28 L18,22",stroke:"var(--ink-faded)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",style:{animation:"scrollArrow 2s ease infinite"}})})}),e.jsx("style",{children:`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 80px;
          position: relative;
        }

        .hero__inner {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          align-items: center;
          gap: 40px;
        }

        .hero__text { position: relative; z-index: 2; }

        .hero__greeting {
          font-family: var(--font-sketch);
          font-size: 22px;
          color: var(--ink-faded);
          margin-bottom: 4px;
          opacity: 0; transform: translateY(20px);
          transition: all 0.8s ease 0.2s;
        }
        .hero__greeting.show { opacity: 1; transform: none; }

        .hero__title {
          line-height: 0.95;
          margin-bottom: 16px;
        }

        .hero__name {
          display: block;
          font-size: clamp(60px, 10vw, 110px);
          letter-spacing: -3px;
          opacity: 0; transform: translateY(40px);
          transition: all 0.9s var(--sketch-ease);
        }

        .hero__name--first {
          font-weight: 800;
          transition-delay: 0.35s;
        }

        .hero__name--last {
          font-weight: 300;
          font-style: italic;
          transition-delay: 0.55s;
        }

        .hero__name.show { opacity: 1; transform: none; }

        .hero__role {
          font-size: clamp(18px, 3vw, 26px);
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--ink-light);
          margin-bottom: 16px;
          opacity: 0; transform: translateY(20px);
          transition: all 0.8s ease 0.75s;
        }
        .hero__role.show { opacity: 1; transform: none; }

        .hero__tagline {
          font-size: 15px;
          line-height: 1.8;
          color: var(--ink-faded);
          max-width: 380px;
          opacity: 0; transform: translateY(20px);
          transition: all 0.8s ease 1.2s;
        }
        .hero__tagline.show { opacity: 1; transform: none; }

        .hero__tagline-jp {
          font-family: var(--font-jp);
          font-size: 12px;
          letter-spacing: 4px;
          color: var(--pencil-light);
          display: block;
          margin-bottom: 4px;
        }

        .hero__illustration {
          position: relative;
          opacity: 0; transform: translateX(30px);
          transition: all 1s ease 0.5s;
        }
        .hero__illustration.show { opacity: 1; transform: none; }

        .hero__scroll {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: opacity 1s ease 2.5s;
        }
        .hero__scroll.show { opacity: 1; }

        @media (max-width: 900px) {
          .hero__inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero__illustration { max-width: 380px; margin: 0 auto; }
          .hero__tagline { margin: 0 auto; }
        }
      `})]})}function c(s={}){const i=n.useRef(null),[t,a]=n.useState(!1);return n.useEffect(()=>{const r=i.current;if(!r)return;const o=new IntersectionObserver(([l])=>{l.isIntersecting?(a(!0),s.repeat||o.unobserve(r)):s.repeat&&a(!1)},{threshold:s.threshold??.2,rootMargin:s.rootMargin??"0px"});return o.observe(r),()=>o.disconnect()},[s.threshold,s.rootMargin,s.repeat]),[i,t]}function g({width:s="100%",delay:i=0,className:t=""}){const[a,r]=c({threshold:.5});return e.jsx("svg",{ref:a,className:`sketch-line ${t}`,width:s,height:"6",viewBox:"0 0 300 6",preserveAspectRatio:"none",style:{overflow:"visible"},children:e.jsx("path",{d:"M0,3 Q15,0.5 30,3 Q45,5.5 60,3 Q75,0.5 90,3 Q105,5.5 120,3 Q135,0.5 150,3 Q165,5.5 180,3 Q195,0.5 210,3 Q225,5.5 240,3 Q255,0.5 270,3 Q285,5.5 300,3",stroke:"var(--ink)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",style:{strokeDasharray:320,strokeDashoffset:r?0:320,transition:`stroke-dashoffset 1.2s var(--sketch-ease) ${i}s`}})})}const M=[{key:"frontend",label:"Frontend",rot:-1.5,icon:e.jsxs("svg",{viewBox:"0 0 32 32",className:"sk__icon-svg",children:[e.jsx("rect",{x:"3",y:"5",width:"26",height:"18",rx:"2"}),e.jsx("line",{x1:"3",y1:"10",x2:"29",y2:"10"}),e.jsx("circle",{cx:"6",cy:"7.5",r:"1",fill:"var(--ink)"}),e.jsx("circle",{cx:"10",cy:"7.5",r:"1",fill:"var(--ink)"}),e.jsx("path",{d:"M10,17 L14,14 L18,17 L22,13"}),e.jsx("line",{x1:"11",y1:"27",x2:"21",y2:"27"}),e.jsx("line",{x1:"16",y1:"23",x2:"16",y2:"27"})]})},{key:"backend",label:"Backend",rot:1.2,icon:e.jsxs("svg",{viewBox:"0 0 32 32",className:"sk__icon-svg",children:[e.jsx("path",{d:"M6,6 L16,2 L26,6 L26,26 L16,30 L6,26 Z"}),e.jsx("path",{d:"M6,6 L16,10 L26,6"}),e.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"30"}),e.jsx("path",{d:"M10,16 L13,18 L10,20",strokeWidth:"1.5"}),e.jsx("line",{x1:"15",y1:"20",x2:"20",y2:"20",strokeWidth:"1.5"})]})},{key:"data",label:"Data",rot:-.8,icon:e.jsxs("svg",{viewBox:"0 0 32 32",className:"sk__icon-svg",children:[e.jsx("ellipse",{cx:"16",cy:"8",rx:"11",ry:"4"}),e.jsx("path",{d:"M5,8 L5,24 Q5,28 16,28 Q27,28 27,24 L27,8"}),e.jsx("path",{d:"M5,14 Q5,18 16,18 Q27,18 27,14"}),e.jsx("path",{d:"M5,20 Q5,24 16,24 Q27,24 27,20"})]})},{key:"cloud",label:"Cloud & DevOps",rot:2,icon:e.jsxs("svg",{viewBox:"0 0 32 32",className:"sk__icon-svg",children:[e.jsx("path",{d:"M8,22 Q2,22 2,17 Q2,12 7,12 Q8,7 14,7 Q20,7 22,11 Q28,10 29,15 Q30,22 24,22 Z"}),e.jsx("path",{d:"M12,18 L16,14 L20,18",strokeWidth:"1.5"}),e.jsx("line",{x1:"16",y1:"14",x2:"16",y2:"25",strokeWidth:"1.5"})]})},{key:"mlAi",label:"ML / AI",rot:-1.8,icon:e.jsxs("svg",{viewBox:"0 0 32 32",className:"sk__icon-svg",children:[e.jsx("circle",{cx:"16",cy:"16",r:"10"}),e.jsx("path",{d:"M10,13 Q13,8 16,13 Q19,8 22,13"}),e.jsx("path",{d:"M10,18 Q13,23 16,18 Q19,23 22,18"}),e.jsx("line",{x1:"10",y1:"16",x2:"22",y2:"16"}),e.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:"var(--ink)"}),e.jsx("circle",{cx:"20",cy:"12",r:"1.5",fill:"var(--ink)"}),e.jsx("circle",{cx:"16",cy:"20",r:"1.5",fill:"var(--ink)"})]})},{key:"tools",label:"Tools",rot:.6,icon:e.jsxs("svg",{viewBox:"0 0 32 32",className:"sk__icon-svg",children:[e.jsx("path",{d:"M20,6 Q24,2 28,6 Q32,10 28,14 L16,26 L8,18 Z"}),e.jsx("path",{d:"M4,28 L12,20",strokeWidth:"2.5"}),e.jsx("line",{x1:"22",y1:"10",x2:"24",y2:"12"})]})},{key:"gameDev",label:"Game Dev",rot:-1,icon:e.jsxs("svg",{viewBox:"0 0 32 32",className:"sk__icon-svg",children:[e.jsx("path",{d:"M4,14 Q4,8 10,8 L22,8 Q28,8 28,14 L28,18 Q28,26 22,26 L20,20 L12,20 L10,26 Q4,26 4,18 Z"}),e.jsx("line",{x1:"9",y1:"14",x2:"13",y2:"14",strokeWidth:"1.5"}),e.jsx("line",{x1:"11",y1:"12",x2:"11",y2:"16",strokeWidth:"1.5"}),e.jsx("circle",{cx:"21",cy:"13",r:"1.5",fill:"var(--ink)"}),e.jsx("circle",{cx:"24",cy:"16",r:"1.5",fill:"var(--ink)"})]})}];function W({cat:s,index:i,active:t,onActivate:a}){const[r,o]=c({threshold:.15}),l=i*.1,x=t===s.key,d=t!==null&&!x;return e.jsxs("div",{ref:r,className:`sk__card ${o?"sk__card--vis":""} ${x?"sk__card--active":""} ${d?"sk__card--dim":""}`,style:{transform:`rotate(${s.rot}deg)`,transitionDelay:`${l}s`},onMouseEnter:()=>a(s.key),onMouseLeave:()=>a(null),children:[e.jsx("svg",{className:"sk__border",viewBox:"0 0 300 200",preserveAspectRatio:"none",children:e.jsx("path",{d:"M8,4 Q150,0 292,4 Q296,100 292,196 Q150,200 8,196 Q4,100 8,4",fill:"none",stroke:"var(--ink)",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"820",strokeDashoffset:o?0:820,style:{transition:`stroke-dashoffset 1.2s var(--sketch-ease) ${l}s`}})}),e.jsx("div",{className:"sk__tape"}),e.jsxs("div",{className:"sk__content",children:[e.jsxs("div",{className:"sk__header",children:[e.jsx("div",{className:"sk__icon",children:s.icon}),e.jsx("h4",{className:"sk__cat-name",children:s.label})]}),e.jsx("ul",{className:"sk__items",children:w[s.key].map((p,f)=>e.jsxs("li",{className:"sk__item",style:{transitionDelay:`${l+.3+f*.06}s`},children:[e.jsxs("svg",{className:"sk__bullet",viewBox:"0 0 12 12",width:"12",height:"12",children:[e.jsx("circle",{cx:"6",cy:"6",r:"4",fill:"none",stroke:"var(--ink)",strokeWidth:"1.5",strokeDasharray:"26",strokeDashoffset:o?0:26,style:{transition:`stroke-dashoffset 0.5s ease ${l+.4+f*.06}s`}}),e.jsx("circle",{cx:"6",cy:"6",r:"2",fill:"var(--ink)",style:{opacity:o?1:0,transition:`opacity 0.3s ease ${l+.6+f*.06}s`}})]}),e.jsx("span",{children:p})]},p))})]})]})}function z(){const[s,i]=n.useState(null),[t,a]=c();return e.jsxs("div",{className:"sk",children:[e.jsxs("div",{ref:t,children:[e.jsx("h3",{className:`sk__title sketch-reveal ${a?"visible":""}`,children:"Skills & Tools"}),e.jsx("p",{className:`sk__subtitle sketch-reveal stagger-1 ${a?"visible":""}`,children:"hover a card to focus"})]}),e.jsx("div",{className:"sk__board",children:M.map((r,o)=>e.jsx(W,{cat:r,index:o,active:s,onActivate:i},r.key))}),e.jsx("style",{children:`
        .sk {
          margin-top: 48px;
        }

        .sk__title {
          font-family: var(--font-sketch);
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .sk__subtitle {
          font-family: var(--font-sketch);
          font-size: 14px;
          color: var(--pencil-light);
          margin-bottom: 32px;
          letter-spacing: 1px;
        }

        /* ── Board layout ── */
        .sk__board {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px 20px;
        }

        /* ── Card ── */
        .sk__card {
          position: relative;
          padding: 4px;
          opacity: 0;
          filter: blur(3px);
          transition:
            opacity 0.7s ease,
            filter 0.7s ease,
            transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
        }

        .sk__card--vis {
          opacity: 1;
          filter: blur(0);
        }

        .sk__card--active {
          transform: translateY(-6px) rotate(0deg) scale(1.03) !important;
          z-index: 3;
        }

        .sk__card--dim {
          opacity: 0.35;
          filter: blur(0.5px);
        }

        .sk__card:hover .sk__border path {
          stroke-width: 2.5;
        }

        /* ── Drawn border ── */
        .sk__border {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        /* ── Tape strip ── */
        .sk__tape {
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%) rotate(-2deg);
          width: 48px;
          height: 16px;
          background: rgba(200, 195, 180, 0.5);
          border: 1px solid rgba(180, 175, 160, 0.4);
          z-index: 4;
        }

        /* ── Content ── */
        .sk__content {
          padding: 28px 20px 20px;
          position: relative;
          z-index: 2;
        }

        .sk__header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .sk__icon {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
        }

        .sk__icon-svg {
          width: 100%;
          height: 100%;
          fill: none;
          stroke: var(--ink);
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .sk__cat-name {
          font-family: var(--font-sketch);
          font-size: 19px;
          font-weight: 600;
          white-space: nowrap;
        }

        /* ── Skill items ── */
        .sk__items {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sk__item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--ink-light);
          letter-spacing: 0.3px;
        }

        .sk__bullet {
          flex-shrink: 0;
        }

        .sk__item:hover {
          color: var(--ink);
        }

        .sk__item:hover span {
          transform: translateX(2px);
          transition: transform 0.2s ease;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .sk__board {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 700px) {
          .sk__board {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px 16px;
          }
          .sk__card { transform: rotate(0deg) !important; }
        }

        @media (max-width: 440px) {
          .sk__board {
            grid-template-columns: 1fr;
            max-width: 280px;
          }
        }
      `})]})}function $(){const[s,i]=c(),[t,a]=c(),[r,o]=c({threshold:.1}),[l,x]=c();return e.jsxs("section",{id:"about",className:"about",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:s,children:[e.jsx("p",{className:`section-label sketch-reveal ${i?"visible":""}`,children:"01"}),e.jsx("h2",{className:`section-title sketch-underline sketch-reveal ${i?"visible":""}`,children:"About"})]}),e.jsxs("div",{ref:t,className:"about__bio-grid",children:[e.jsx("div",{className:`about__bio write-on ${a?"visible":""}`,children:h.bio.map((d,p)=>e.jsx("p",{className:"about__text",dangerouslySetInnerHTML:{__html:d}},p))}),e.jsxs("div",{className:"about__meta",children:[e.jsxs("div",{className:`about__meta-item sketch-reveal stagger-1 ${a?"visible":""}`,children:[e.jsx("span",{className:"about__meta-label",children:"Location"}),e.jsx("span",{className:"about__meta-value",children:h.location})]}),e.jsxs("div",{className:`about__meta-item sketch-reveal stagger-2 ${a?"visible":""}`,children:[e.jsx("span",{className:"about__meta-label",children:"Focus"}),e.jsx("span",{className:"about__meta-value",children:h.focus})]})]})]}),e.jsx("div",{ref:r,className:"about__services",children:y.map((d,p)=>e.jsxs("div",{className:`about__service scribble-in stagger-${p+1} ${o?"visible":""}`,children:[e.jsx("h3",{className:"about__service-title",children:d.title}),e.jsx("p",{className:"about__service-tag",children:d.tagline})]},d.title))}),e.jsx("div",{ref:l,className:"about__stats",children:N.map((d,p)=>e.jsxs("div",{className:`about__stat scribble-in stagger-${p+1} ${x?"visible":""}`,children:[e.jsx("span",{className:"about__stat-value",children:d.value}),e.jsx("span",{className:"about__stat-label",children:d.label})]},d.label))}),e.jsx(g,{width:"100%",delay:.2}),e.jsx(z,{})]}),e.jsx("style",{children:`
        .about__bio-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 60px;
          margin-bottom: 64px;
          align-items: start;
        }

        .about__text {
          font-size: 17px;
          line-height: 1.8;
          color: var(--ink-light);
          margin-bottom: 16px;
        }

        .about__text strong {
          color: var(--ink);
          font-weight: 600;
        }

        .about__meta {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-top: 8px;
        }

        .about__meta-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--pencil-light);
        }

        .about__meta-label {
          font-family: var(--font-sketch);
          font-size: 17px;
          color: var(--ink-faded);
        }

        .about__meta-value {
          font-weight: 600;
          font-size: 15px;
        }

        /* ── Services ── */
        .about__services {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }

        .about__service {
          padding: 24px 20px;
          border: 1.5px solid var(--pencil-light);
          border-radius: 4px;
          text-align: center;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .about__service:hover {
          border-color: var(--ink);
          transform: translateY(-2px) rotate(-0.5deg);
        }

        .about__service-title {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .about__service-tag {
          font-family: var(--font-sketch);
          font-size: 14px;
          color: var(--ink-faded);
        }

        /* ── Stats ── */
        .about__stats {
          display: flex;
          gap: 48px;
          margin-bottom: 56px;
        }

        .about__stat {
          display: flex;
          flex-direction: column;
        }

        .about__stat-value {
          font-family: var(--font-sketch);
          font-size: 42px;
          font-weight: 700;
          line-height: 1;
          color: var(--ink);
        }

        .about__stat-label {
          font-size: 13px;
          color: var(--ink-faded);
          letter-spacing: 0.5px;
          margin-top: 4px;
        }


        @media (max-width: 900px) {
          .about__bio-grid { grid-template-columns: 1fr; gap: 32px; }
          .about__services { grid-template-columns: 1fr 1fr; }
          .about__stats { gap: 32px; }
        }

        @media (max-width: 480px) {
          .about__services { grid-template-columns: 1fr; }
          .about__stats { flex-direction: column; gap: 20px; }
        }
      `})]})}function A(){const[s,i]=c(),[t,a]=c({threshold:.05}),r=L[0];return e.jsxs("section",{id:"experience",className:"experience",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:s,children:[e.jsx("p",{className:`section-label sketch-reveal ${i?"visible":""}`,children:"02"}),e.jsx("h2",{className:`section-title sketch-underline sketch-reveal ${i?"visible":""}`,children:"Experience"})]}),e.jsxs("div",{ref:t,className:"exp__card",children:[e.jsxs("div",{className:"exp__timeline",children:[e.jsx("svg",{className:"exp__line",width:"3",height:"100%",viewBox:"0 0 3 400",preserveAspectRatio:"none",children:e.jsx("line",{x1:"1.5",y1:"0",x2:"1.5",y2:"400",stroke:"var(--ink)",strokeWidth:"2",strokeDasharray:"400",strokeDashoffset:a?0:400,style:{transition:"stroke-dashoffset 1.8s var(--sketch-ease) 0.3s"}})}),e.jsx("div",{className:`exp__dot scribble-in ${a?"visible":""}`})]}),e.jsxs("div",{className:"exp__content",children:[e.jsxs("div",{className:`exp__header sketch-reveal ${a?"visible":""}`,children:[e.jsx("h3",{className:"exp__title",children:r.title}),e.jsx("span",{className:"exp__company",children:r.company}),e.jsx("span",{className:"exp__date",children:r.date})]}),e.jsx("ul",{className:"exp__points",children:r.points.map((o,l)=>e.jsxs("li",{className:`exp__point write-on stagger-${l+1} ${a?"visible":""}`,children:[e.jsx("span",{className:"exp__bullet",children:"—"}),o]},l))})]})]})]}),e.jsx("style",{children:`
        .exp__card {
          display: grid;
          grid-template-columns: 24px 1fr;
          gap: 28px;
        }

        .exp__timeline {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .exp__line {
          width: 3px;
          height: 100%;
        }

        .exp__dot {
          position: absolute;
          top: 6px;
          width: 12px;
          height: 12px;
          background: var(--paper);
          border: 2.5px solid var(--ink);
          border-radius: 50%;
          z-index: 2;
        }

        .exp__header {
          margin-bottom: 24px;
        }

        .exp__title {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .exp__company {
          font-family: var(--font-sketch);
          font-size: 20px;
          color: var(--ink-light);
          display: block;
          margin-top: 2px;
        }

        .exp__date {
          font-size: 14px;
          color: var(--ink-faded);
          letter-spacing: 1px;
          display: block;
          margin-top: 4px;
        }

        .exp__points {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .exp__point {
          font-size: 15px;
          line-height: 1.7;
          color: var(--ink-light);
          display: flex;
          gap: 12px;
        }

        .exp__bullet {
          color: var(--pencil-light);
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }

        @media (max-width: 768px) {
          .exp__card {
            grid-template-columns: 16px 1fr;
            gap: 16px;
          }
        }
      `})]})}function D({project:s,index:i}){const[t,a]=c({threshold:.15}),r=Math.min(i*.12,.6);return e.jsxs("article",{ref:t,className:`pcard ${a?"pcard--vis":""}`,style:{transitionDelay:`${r}s`},children:[e.jsx("svg",{className:"pcard__border",viewBox:"0 0 600 300",preserveAspectRatio:"none",children:e.jsx("rect",{x:"2",y:"2",width:"596",height:"296",rx:"4",fill:"none",stroke:"var(--ink)",strokeWidth:"2",strokeDasharray:"1800",strokeDashoffset:a?0:1800,style:{transition:"stroke-dashoffset 1.6s var(--sketch-ease)"}})}),e.jsxs("div",{className:"pcard__inner",children:[e.jsx("div",{className:"pcard__number",children:String(i+1).padStart(2,"0")}),e.jsx("h3",{className:"pcard__title",children:s.title}),e.jsx("p",{className:"pcard__desc",children:s.description}),e.jsx("div",{className:"pcard__tech",children:s.tech.map(o=>e.jsx("span",{className:"pcard__tag",children:o},o))}),e.jsxs("div",{className:"pcard__links",children:[s.github&&e.jsx("a",{href:s.github,target:"_blank",rel:"noopener noreferrer",className:"pcard__link",children:"GitHub"}),s.live&&e.jsx("a",{href:s.live,target:"_blank",rel:"noopener noreferrer",className:"pcard__link",children:"Live"})]})]}),e.jsx("style",{children:`
        .pcard {
          position: relative;
          margin-bottom: 28px;
          opacity: 0;
          filter: blur(3px);
          transform: translateY(16px) rotate(-0.3deg);
          transition:
            opacity 0.8s ease,
            filter 0.9s ease,
            transform 0.8s var(--sketch-ease);
        }

        .pcard--vis {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0) rotate(0deg);
        }

        .pcard__border {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .pcard__inner {
          padding: 32px 36px;
          position: relative;
        }

        .pcard__number {
          font-family: var(--font-sketch);
          font-size: 36px;
          font-weight: 700;
          color: var(--pencil-light);
          position: absolute;
          top: 16px;
          right: 24px;
        }

        .pcard__title {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.5px;
          margin-bottom: 10px;
        }

        .pcard__desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--ink-light);
          max-width: 600px;
          margin-bottom: 16px;
        }

        .pcard__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }

        .pcard__tag {
          font-size: 11px;
          padding: 3px 10px;
          border: 1px solid var(--pencil-light);
          border-radius: 2px;
          color: var(--ink-faded);
          letter-spacing: 0.5px;
        }

        .pcard__links {
          display: flex;
          gap: 16px;
        }

        .pcard__link {
          font-family: var(--font-sketch);
          font-size: 16px;
          color: var(--ink);
          position: relative;
        }

        .pcard__link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 1.5px;
          background: var(--ink);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .pcard__link:hover::after {
          transform: scaleX(1);
        }

        .pcard:hover {
          transform: translateY(-3px) rotate(0deg);
        }

        @media (max-width: 600px) {
          .pcard__inner { padding: 24px 20px; }
          .pcard__number { font-size: 28px; }
        }
      `})]})}const B=["all","ai","backend","web","game"];function P(){const[s,i]=c(),[t,a]=n.useState("all"),r=t==="all"?k:k.filter(o=>o.type===t);return e.jsxs("section",{id:"projects",className:"projects",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:s,children:[e.jsx("p",{className:`section-label sketch-reveal ${i?"visible":""}`,children:"03"}),e.jsx("h2",{className:`section-title sketch-underline sketch-reveal ${i?"visible":""}`,children:"Projects"})]}),e.jsx("div",{className:`projects__filters sketch-reveal stagger-2 ${i?"visible":""}`,children:B.map(o=>e.jsx("button",{className:`projects__filter ${t===o?"projects__filter--active":""}`,onClick:()=>a(o),children:o==="ai"?"AI / ML":o==="backend"?"Backend":o.charAt(0).toUpperCase()+o.slice(1)},o))}),e.jsx("div",{className:"projects__list",children:r.map((o,l)=>e.jsx(D,{project:o,index:l},o.title))})]}),e.jsx("style",{children:`
        .projects__filters {
          display: flex;
          gap: 8px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .projects__filter {
          font-family: var(--font-sketch);
          font-size: 16px;
          padding: 6px 18px;
          background: none;
          border: 1.5px solid var(--pencil-light);
          border-radius: 3px;
          color: var(--ink-faded);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .projects__filter:hover {
          border-color: var(--ink);
          color: var(--ink);
        }

        .projects__filter--active {
          background: var(--ink);
          color: var(--paper);
          border-color: var(--ink);
        }
      `})]})}function R(){const[s,i]=c(),[t,a]=c();return e.jsxs("section",{id:"contact",className:"contact",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:s,children:[e.jsx("p",{className:`section-label sketch-reveal ${i?"visible":""}`,children:"04"}),e.jsx("h2",{className:`section-title sketch-underline sketch-reveal ${i?"visible":""}`,children:"Get in Touch"})]}),e.jsxs("div",{ref:t,className:"contact__body",children:[e.jsx("p",{className:`contact__text write-on ${a?"visible":""}`,children:"I'm always open to discussing new opportunities, interesting projects, or just having a good conversation about tech, games, and creative coding."}),e.jsxs("a",{href:`mailto:${_.email}`,className:`contact__cta scribble-in stagger-2 ${a?"visible":""}`,children:[e.jsx("span",{className:"contact__cta-text",children:"Say hello"}),e.jsx("svg",{className:"contact__cta-arrow",width:"32",height:"14",viewBox:"0 0 32 14",children:e.jsx("path",{d:"M0,7 L28,7 M22,1 L28,7 L22,13",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"})})]}),e.jsxs("div",{className:`contact__links sketch-reveal stagger-3 ${a?"visible":""}`,children:[e.jsx("a",{href:_.github,target:"_blank",rel:"noopener noreferrer",className:"contact__social",children:"GitHub"}),e.jsx("span",{className:"contact__sep",children:"/"}),e.jsx("a",{href:_.linkedin,target:"_blank",rel:"noopener noreferrer",className:"contact__social",children:"LinkedIn"}),e.jsx("span",{className:"contact__sep",children:"/"}),e.jsx("a",{href:`mailto:${_.email}`,className:"contact__social",children:"Email"})]})]}),e.jsx(g,{width:"100%",delay:.3}),e.jsx("footer",{className:"contact__footer",children:e.jsxs("p",{className:"contact__copyright",children:[e.jsx("span",{className:"contact__copyright-sketch",children:"✎"})," Designed & Built by Sahil Kumar"]})})]}),e.jsx("style",{children:`
        .contact__body {
          margin-bottom: 64px;
        }

        .contact__text {
          font-size: 20px;
          line-height: 1.8;
          color: var(--ink-light);
          max-width: 560px;
          margin-bottom: 32px;
        }

        .contact__cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 32px;
          border: 2px solid var(--ink);
          border-radius: 4px;
          font-family: var(--font-sketch);
          font-size: 22px;
          transition: all 0.3s ease;
          margin-bottom: 40px;
        }

        .contact__cta:hover {
          background: var(--ink);
          color: var(--paper);
          transform: translateY(-2px) rotate(-1deg);
        }

        .contact__cta-arrow {
          transition: transform 0.3s ease;
        }

        .contact__cta:hover .contact__cta-arrow {
          transform: translateX(4px);
        }

        .contact__links {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
        }

        .contact__social {
          color: var(--ink);
          font-weight: 500;
          position: relative;
          transition: color 0.2s;
        }

        .contact__social::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 1.5px;
          background: var(--ink);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .contact__social:hover::after {
          transform: scaleX(1);
        }

        .contact__sep {
          color: var(--pencil-light);
        }

        .contact__footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 32px 0;
        }

        .contact__copyright {
          font-size: 14px;
          color: var(--ink-faded);
        }

        .contact__copyright-sketch {
          margin-right: 4px;
        }

        .contact__year {
          font-family: var(--font-sketch);
          font-size: 18px;
          color: var(--pencil-light);
        }
      `})]})}const T={brackets:e.jsxs("g",{children:[e.jsx("path",{d:"M4,4 L0,12 L4,20",stroke:"var(--pencil-light)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),e.jsx("path",{d:"M16,4 L20,12 L16,20",stroke:"var(--pencil-light)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round"}),e.jsx("path",{d:"M7,12 L13,12",stroke:"var(--pencil-light)",strokeWidth:"1",fill:"none"})]}),star:e.jsx("path",{d:"M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z",stroke:"var(--pencil-light)",strokeWidth:"1.2",fill:"none",strokeLinejoin:"round"}),arrow:e.jsx("path",{d:"M2,10 Q10,2 18,10 M14,6 L18,10 L14,14",stroke:"var(--pencil-light)",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"})};function m({type:s="line",doodle:i}){const[t,a]=c({threshold:.5});return e.jsxs("div",{ref:t,className:"sketch-divider",style:{padding:"20px 0",position:"relative"},children:[e.jsx("svg",{width:"100%",height:"20",viewBox:"0 0 800 20",preserveAspectRatio:"none",children:e.jsx("path",{d:"M0,10 Q20,4 40,10 Q60,16 80,10 Q100,4 120,10 Q140,16 160,10 Q180,4 200,10 Q220,16 240,10 Q260,4 280,10 Q300,16 320,10 Q340,4 360,10 Q380,16 400,10 Q420,4 440,10 Q460,16 480,10 Q500,4 520,10 Q540,16 560,10 Q580,4 600,10 Q620,16 640,10 Q660,4 680,10 Q700,16 720,10 Q740,4 760,10 Q780,16 800,10",stroke:"var(--pencil-light)",strokeWidth:"1",fill:"none",strokeLinecap:"round",style:{strokeDasharray:900,strokeDashoffset:a?0:900,transition:"stroke-dashoffset 1.8s var(--sketch-ease)"}})}),i&&e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",style:{position:"absolute",right:"10%",top:"50%",transform:"translateY(-50%)",opacity:a?1:0,transition:"opacity 0.8s ease 1s"},children:T[i]})]})}function C(){const[s,i]=n.useState(!0),t=n.useCallback(()=>i(!1),[]);return e.jsxs(e.Fragment,{children:[s&&e.jsx(b,{onDone:t}),e.jsx(j,{}),e.jsx(S,{}),e.jsx(m,{doodle:"brackets"}),e.jsx($,{}),e.jsx(m,{doodle:"star"}),e.jsx(A,{}),e.jsx(m,{doodle:"arrow"}),e.jsx(P,{}),e.jsx(m,{}),e.jsx(R,{}),e.jsx(v,{})]})}export{C as default};
