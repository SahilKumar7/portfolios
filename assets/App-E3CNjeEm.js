import{r as c,j as e}from"./vendor-three-BDMj-JYN.js";import{T as b}from"./ThemeSwitcher-D3i-LziO.js";function u({onDone:t}){const[a,s]=c.useState("flood");return c.useEffect(()=>{const r=[setTimeout(()=>s("hold"),1200),setTimeout(()=>s("wipe"),2e3),setTimeout(()=>s("exit"),2600),setTimeout(()=>t(),3200)];return()=>r.forEach(clearTimeout)},[t]),e.jsxs("div",{className:`ldr ${a==="exit"?"ldr--exit":""}`,children:[e.jsx("div",{className:`ldr__flood ldr__flood--1 ${a!=="flood"?"ldr__flood--full":""}`}),e.jsx("div",{className:`ldr__flood ldr__flood--2 ${a!=="flood"?"ldr__flood--full":""}`}),e.jsxs("svg",{className:`ldr__bucket ${a!=="flood"?"ldr__bucket--tipped":""}`,viewBox:"0 0 100 120",width:"100",height:"120",children:[e.jsx("rect",{x:"20",y:"30",width:"60",height:"70",rx:"4",fill:"var(--blue)",stroke:"var(--white)",strokeWidth:"2"}),e.jsx("path",{d:"M18,30 Q50,25 82,30",fill:"none",stroke:"var(--white)",strokeWidth:"3",strokeLinecap:"round"}),e.jsx("ellipse",{cx:"50",cy:"32",rx:"30",ry:"6",fill:"var(--blue-light)"}),e.jsx("rect",{x:"35",y:"50",width:"30",height:"20",rx:"2",fill:"var(--yellow)",opacity:"0.9"})]}),e.jsxs("p",{className:`ldr__text ${a==="hold"||a==="wipe"?"ldr__text--show":""}`,children:["LOADING",e.jsx("span",{className:"ldr__dots",children:"..."})]}),e.jsx("style",{children:`
        .ldr {
          position: fixed; inset: 0; z-index: 9999;
          background: var(--bg-dark);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 24px;
          transition: opacity 0.6s ease;
        }
        .ldr--exit { opacity: 0; pointer-events: none; }

        .ldr__flood {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 0;
          transition: height 1.2s var(--paint-ease);
        }
        .ldr__flood--1 { background: var(--blue); z-index: 1; }
        .ldr__flood--2 { background: var(--yellow); z-index: 0; transition-delay: 0.15s; }
        .ldr__flood--full { height: 100%; }

        .ldr__bucket {
          position: relative; z-index: 3;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .ldr__bucket--tipped { transform: rotate(-45deg) translateY(-20px); }

        .ldr__text {
          font-family: var(--font-title); font-size: 28px;
          letter-spacing: 8px; color: var(--white);
          position: relative; z-index: 3;
          opacity: 0; transform: translateY(10px);
          transition: all 0.5s ease;
        }
        .ldr__text--show { opacity: 1; transform: none; }
        .ldr__dots { animation: blink 1s steps(3) infinite; }
        @keyframes blink { to { opacity: 0; } }
      `})]})}const y=[{label:"About",href:"#about"},{label:"Experience",href:"#experience"},{label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"}];function j(){const[t,a]=c.useState(!1),[s,r]=c.useState(!1);return c.useEffect(()=>{const o=()=>a(window.scrollY>60);return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]),e.jsxs("nav",{className:`nav ${t?"nav--scrolled":""}`,children:[e.jsxs("div",{className:"nav__inner container",children:[e.jsxs("a",{href:"#hero",className:"nav__logo",children:[e.jsx("span",{className:"nav__logo-s",children:"S"}),e.jsx("span",{className:"nav__logo-dot",children:"."}),e.jsx("span",{className:"nav__logo-k",children:"K"})]}),e.jsxs("button",{className:`nav__burger ${s?"nav__burger--open":""}`,onClick:()=>r(o=>!o),"aria-label":"Menu",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx("ul",{className:`nav__links ${s?"nav__links--open":""}`,children:y.map(o=>e.jsx("li",{children:e.jsx("a",{href:o.href,className:"nav__link",onClick:()=>r(!1),children:o.label})},o.href))})]}),e.jsx("style",{children:`
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 20px 0; transition: all 0.4s ease; }
        .nav--scrolled { background: rgba(13,17,23,0.95); backdrop-filter: blur(10px); padding: 12px 0; border-bottom: 2px solid var(--yellow); }
        .nav__inner { display: flex; justify-content: space-between; align-items: center; }
        .nav__logo { font-family: var(--font-title); font-size: 36px; letter-spacing: 2px; display: flex; }
        .nav__logo-s { color: var(--yellow); }
        .nav__logo-dot { color: var(--blue-light); }
        .nav__logo-k { color: var(--white); }
        .nav__links { display: flex; gap: 32px; }
        .nav__link {
          font-family: var(--font-title); font-size: 18px; letter-spacing: 2px; color: var(--white-dim);
          text-transform: uppercase; transition: color 0.2s; position: relative;
        }
        .nav__link:hover { color: var(--yellow); }
        .nav__link::after {
          content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 2px;
          background: var(--yellow); transform: scaleX(0); transition: transform 0.3s var(--paint-ease);
        }
        .nav__link:hover::after { transform: scaleX(1); }
        .nav__burger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .nav__burger span { display: block; width: 26px; height: 2px; background: var(--white); transition: all 0.3s ease; }
        .nav__burger--open span:nth-child(1) { transform: rotate(45deg) translate(4px,5px); }
        .nav__burger--open span:nth-child(2) { opacity: 0; }
        .nav__burger--open span:nth-child(3) { transform: rotate(-45deg) translate(4px,-5px); }
        @media(max-width:768px) {
          .nav__burger { display: flex; }
          .nav__links { position: fixed; top: 0; right: 0; width: 260px; height: 100vh; background: var(--bg-navy); flex-direction: column; justify-content: center; gap: 24px; align-items: center; transform: translateX(100%); transition: transform 0.4s ease; }
          .nav__links--open { transform: translateX(0); }
        }
      `})]})}const _={tagline:"building web apps, backends, games, & pixel art.",bio:["Software developer at <strong>Amdocs</strong> with a focus on building modern web applications using React, Python, and Node.js. I specialize in frontend development and backend modernization.","On the side, I have a passion for game development and pixel art — shipping titles built in Unity and Godot."],location:"India",focus:"Full Stack & Game Dev"},w=[{title:"Frontend Developer",tagline:"Responsive & Interactive"},{title:"Backend Developer",tagline:"APIs & Systems"},{title:"Game Developer",tagline:"Worlds & Mechanics"},{title:"3D & Pixel Artist",tagline:"Pixels & Polygons"}],k=[{label:"Years Experience",value:"2+"},{label:"Projects",value:"27+"},{label:"Technologies",value:"21"}],N={frontend:["JavaScript","TypeScript","React","Next.js","Tailwind"],backend:["Python","FastAPI","Node.js","PostgreSQL","MongoDB"],data:["Elasticsearch","MySQL","Redis","SQL"],cloud:["AWS","Docker","Jenkins","CI/CD"],mlAi:["HuggingFace","LLMs","NLP","Transformers"],tools:["Git","Linux","Jest","pytest"],gameDev:["Unity","Godot","Blender","Krita"]},S=[{title:"Software Developer",company:"Amdocs",date:"Aug 2023 — Present",points:["Led design and development of a large-scale responsive web application using React 18, migrating a legacy Java Swing desktop app to browser-based access for 50+ internal users","Built reusable React component library (React Hook Form, TanStack Table) and implemented React Query for server state management, reducing new feature development time by 60% and API calls by 35%","Built interactive data visualization using React Flow and Recharts, reducing configuration errors by 25%","Designed and implemented scalable backend services using Python FastAPI with JWT authentication and Redis caching, reducing API response time by 40% and database queries by 35%","Migrated 150+ database entities from Java/Hibernate to SQLAlchemy 2.0 with async operations; created OpenAPI/Swagger documentation reducing frontend integration time by 50%","Set up CI/CD pipeline with Jenkins and Docker, reducing deployment time from 4 hours to 20 minutes; wrote unit and integration tests achieving 80%+ code coverage"]}],m=[{title:"Estate Explorer",description:"A full-stack real estate platform with real-time chat, interactive maps, and property listings. Features a dark modern UI with Leaflet maps, Socket.IO messaging, and an async FastAPI backend.",tech:["React","FastAPI","PostgreSQL","Socket.IO"],type:"web",github:"#",live:"#"},{title:"Smart Search Engine",description:"Enterprise search system handling millions of documents with fuzzy matching, faceted search, and real-time indexing. Reduced search latency by 40%.",tech:["Python","Elasticsearch","Redis","PostgreSQL","Docker"],type:"backend",github:"#"},{title:"ML Pipeline Orchestrator",description:"End-to-end machine learning pipeline framework for training, evaluating, and deploying NLP models in production with automated A/B testing.",tech:["Python","AWS","Docker","Jenkins","pytest"],type:"ai",github:"#",live:"#"},{title:"ProTrackr",description:"A client-side task management app with drag-and-drop reordering, project organization, dark mode, and offline persistence. Built with React 19, Zustand, and Tailwind v4 — no backend required.",tech:["React","Zustand","Tailwind"],type:"web",live:"https://xyz.github.io/ProTrackr/"},{title:"Space Brawl",description:"A captivating space-themed platformer that challenges players to navigate an alien ship, gather crucial resources, and outsmart foes in a pixel art universe.",tech:["C#","Unity","WebGL"],type:"game",live:"https://sahil-kumar.itch.io/space-brawl"},{title:"Space Blaster",description:"A fast-paced multi-directional shooting game where players navigate through space, battling enemies and dodging asteroids in a thrilling quest for survival.",tech:["C#","Unity","WebGL"],type:"game",live:"https://sahil-kumar.itch.io/space-blaster"},{title:"TV Show Search",description:"A TV show discovery app built with Vue 3 and Vuetify. Features debounced search suggestions, recent search history, keyboard navigation, and request cancellation — powered by the TVmaze API.",tech:["Vue","Vuetify","Pinia"],type:"web",live:"https://xyz.github.io/TV-Show-Search/"}],x={github:"https://github.com/SahilKumar7",linkedin:"https://linkedin.com/in/sahil-kumar7",email:"sahil.kumar5729@gmail.com"};function d(t={}){const a=c.useRef(null),[s,r]=c.useState(!1);return c.useEffect(()=>{const o=a.current;if(!o)return;const i=new IntersectionObserver(([n])=>{n.isIntersecting?(r(!0),t.repeat||i.unobserve(o)):t.repeat&&r(!1)},{threshold:t.threshold??.2,rootMargin:t.rootMargin??"0px"});return i.observe(o),()=>i.disconnect()},[t.threshold,t.rootMargin,t.repeat]),[a,s]}const g=["M50,25 Q30,5 15,20 Q0,35 10,50 Q5,70 25,75 Q40,85 55,70 Q75,80 85,60 Q95,45 80,30 Q70,15 50,25 Z","M45,15 Q20,10 10,30 Q0,50 15,65 Q25,80 45,80 Q60,85 75,70 Q90,55 85,35 Q80,15 60,10 Q50,5 45,15 Z","M55,10 Q35,5 20,20 Q5,35 10,55 Q15,75 35,80 Q50,90 70,75 Q85,60 90,40 Q90,20 70,10 Q60,5 55,10 Z"];function p({color:t="var(--blue)",size:a=120,delay:s=0,variant:r=0,className:o="",style:i={}}){const[n,l]=d({threshold:.1});return e.jsx("svg",{ref:n,className:`paint-splatter ${o}`,width:a,height:a,viewBox:"0 0 100 100",style:{...i,opacity:l?1:0,transform:l?"scale(1) rotate(0deg)":"scale(0) rotate(-20deg)",transition:`all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${s}s`,pointerEvents:"none"},children:e.jsx("path",{d:g[r%g.length],fill:t})})}function z(){const[t,a]=c.useState(!1);return c.useEffect(()=>{setTimeout(()=>a(!0),300)},[]),e.jsxs("section",{className:"hero",id:"hero",children:[e.jsxs("div",{className:"hero__inner container",children:[e.jsxs("div",{className:"hero__text",children:[e.jsxs("p",{className:`hero__label ${t?"hero__label--show":""}`,children:[e.jsx("span",{className:"hero__lv",children:"LV. 63"})," SOFTWARE DEVELOPER"]}),e.jsxs("h1",{className:"hero__title",children:[e.jsxs("span",{className:`hero__name-line hero__name-line--1 ${t?"show":""}`,children:[e.jsx("span",{className:"hero__brush-mask"}),"SAHIL"]}),e.jsxs("span",{className:`hero__name-line hero__name-line--2 ${t?"show":""}`,children:[e.jsx("span",{className:"hero__brush-mask hero__brush-mask--yellow"}),"KUMAR"]})]}),e.jsx("p",{className:`hero__tagline ${t?"hero__tagline--show":""}`,children:_.tagline}),e.jsxs("div",{className:`hero__cta ${t?"hero__cta--show":""}`,children:[e.jsx("a",{href:"#projects",className:"hero__btn",children:"VIEW WORKS"}),e.jsx("a",{href:"#contact",className:"hero__btn hero__btn--outline",children:"CONTACT"})]})]}),e.jsxs("div",{className:`hero__art ${t?"hero__art--show":""}`,children:[e.jsx(p,{color:"var(--blue)",size:300,delay:.8,variant:0,style:{position:"absolute",top:"-10%",right:"-5%",opacity:.3}}),e.jsx(p,{color:"var(--yellow)",size:200,delay:1,variant:1,style:{position:"absolute",bottom:"5%",left:"-5%",opacity:.25}}),e.jsxs("div",{className:"hero__bucket-scene",children:[e.jsx("div",{className:"hero__bucket hero__bucket--blue",children:e.jsx("div",{className:"hero__bucket-label",children:"REACT"})}),e.jsx("div",{className:"hero__bucket hero__bucket--yellow",children:e.jsx("div",{className:"hero__bucket-label",children:"PYTHON"})}),e.jsx("div",{className:"hero__bucket hero__bucket--red",children:e.jsx("div",{className:"hero__bucket-label",children:"UNITY"})}),e.jsx("div",{className:"hero__paint-spill"})]})]})]}),e.jsx("style",{children:`
        .hero { min-height: 100vh; display: flex; align-items: center; padding-top: 80px; position: relative; overflow: hidden; }
        .hero__inner { display: grid; grid-template-columns: 1.2fr 1fr; align-items: center; gap: 40px; }
        .hero__label { font-family: var(--font-accent); font-size: 14px; color: var(--yellow); letter-spacing: 3px; margin-bottom: 12px; opacity: 0; transform: translateX(-20px); transition: all 0.6s ease 0.5s; }
        .hero__label--show { opacity: 1; transform: none; }
        .hero__lv { background: var(--yellow); color: var(--bg-dark); padding: 2px 8px; font-family: var(--font-title); font-size: 16px; margin-right: 8px; }

        .hero__title { line-height: 0.95; margin-bottom: 20px; }
        .hero__name-line { display: block; font-family: var(--font-title); font-size: clamp(64px, 12vw, 130px); letter-spacing: 4px; position: relative; overflow: hidden; }
        .hero__brush-mask { position: absolute; inset: 0; background: var(--blue); z-index: 2; transition: clip-path 0.9s var(--paint-ease); clip-path: inset(0 0 0 0); }
        .hero__brush-mask--yellow { background: var(--yellow); }
        .hero__name-line.show .hero__brush-mask { clip-path: inset(0 0 0 100%); }
        .hero__name-line--1 { color: var(--white); }
        .hero__name-line--1.show { animation: fadeSlideUp 0.6s ease 0.6s both; }
        .hero__name-line--2 { color: var(--yellow); }
        .hero__name-line--2.show { animation: fadeSlideUp 0.6s ease 0.9s both; }

        .hero__tagline { font-size: 18px; color: var(--white-dim); max-width: 400px; margin-bottom: 32px; opacity: 0; transition: opacity 0.8s ease 1.4s; }
        .hero__tagline--show { opacity: 1; }

        .hero__cta { display: flex; gap: 16px; opacity: 0; transform: translateY(20px); transition: all 0.6s ease 1.8s; }
        .hero__cta--show { opacity: 1; transform: none; }
        .hero__btn { font-family: var(--font-title); font-size: 18px; letter-spacing: 3px; padding: 14px 32px; background: var(--yellow); color: var(--bg-dark); border: 2px solid var(--yellow); transition: all 0.3s ease; }
        .hero__btn:hover { background: transparent; color: var(--yellow); }
        .hero__btn--outline { background: transparent; color: var(--white); border-color: var(--white); }
        .hero__btn--outline:hover { background: var(--white); color: var(--bg-dark); }

        .hero__art { position: relative; opacity: 0; transform: translateX(40px); transition: all 1s ease 0.6s; }
        .hero__art--show { opacity: 1; transform: none; }

        .hero__bucket-scene { position: relative; display: flex; align-items: flex-end; justify-content: center; gap: 16px; height: 350px; padding-bottom: 40px; }
        .hero__bucket { width: 80px; height: 100px; border-radius: 4px 4px 8px 8px; border: 3px solid var(--white); position: relative; display: flex; align-items: center; justify-content: center; }
        .hero__bucket--blue { background: var(--blue); transform: rotate(-5deg); }
        .hero__bucket--yellow { background: var(--yellow); height: 110px; }
        .hero__bucket--red { background: var(--red); transform: rotate(3deg); height: 95px; }
        .hero__bucket-label { font-family: var(--font-title); font-size: 14px; letter-spacing: 2px; color: var(--white); writing-mode: vertical-lr; text-orientation: mixed; }
        .hero__bucket--yellow .hero__bucket-label { color: var(--bg-dark); }
        .hero__paint-spill { position: absolute; bottom: 0; left: 10%; right: 10%; height: 30px; background: var(--yellow); border-radius: 50% 50% 0 0 / 100% 100% 0 0; opacity: 0.5; }

        @media(max-width:900px) {
          .hero__inner { grid-template-columns: 1fr; text-align: center; }
          .hero__tagline { margin: 0 auto 32px; }
          .hero__cta { justify-content: center; }
          .hero__art { max-width: 320px; margin: 0 auto; }
        }
      `})]})}const v=["brushSwipeRight","brushSwipeDown","brushDiagonal"];function h({children:t,color:a="var(--yellow)",variant:s=0,delay:r=0,className:o="",tag:i="div"}){const[n,l]=d({threshold:.15}),f=v[s%v.length];return e.jsxs(i,{ref:n,className:`brush-reveal ${o}`,style:{position:"relative",overflow:"hidden"},children:[e.jsx("span",{className:"brush-reveal__mask",style:{position:"absolute",inset:0,background:a,zIndex:2,animation:l?`${f} var(--paint-speed) var(--paint-ease) ${r}s forwards reverse`:"none",clipPath:"inset(0 0 0 0)"}}),e.jsx("span",{style:{display:"block",opacity:l?1:0,transition:`opacity 0.3s ease ${r+.3}s`},children:t})]})}function A(){const[t,a]=d({threshold:.1}),[s,r]=d({threshold:.2}),[o,i]=d({threshold:.1});return e.jsxs("section",{id:"about",className:"about",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:t,children:[e.jsx("p",{className:"section-label",style:{opacity:a?1:0,transition:"opacity 0.6s ease"},children:"// ABOUT"}),e.jsx(h,{color:"var(--blue)",delay:.1,children:e.jsx("h2",{className:"section-title",children:"WHO AM I"})})]}),e.jsxs("div",{className:"about__grid",children:[e.jsx("div",{className:"about__bio",children:_.bio.map((n,l)=>e.jsx(h,{variant:1,delay:.3+l*.2,color:"var(--yellow)",children:e.jsx("p",{className:"about__text",dangerouslySetInnerHTML:{__html:n}})},l))}),e.jsxs("div",{className:"about__info",children:[e.jsxs("div",{className:"about__info-card",children:[e.jsx("span",{className:"about__info-label",children:"LOCATION"}),e.jsx("span",{className:"about__info-value",children:_.location})]}),e.jsxs("div",{className:"about__info-card",children:[e.jsx("span",{className:"about__info-label",children:"FOCUS"}),e.jsx("span",{className:"about__info-value",children:_.focus})]})]})]}),e.jsxs("div",{ref:s,className:"about__stats",children:[k.map((n,l)=>e.jsxs("div",{className:"stat",children:[e.jsxs("div",{className:"stat__header",children:[e.jsx("span",{className:"stat__label",children:n.label}),e.jsx("span",{className:"stat__value",children:n.value})]}),e.jsx("div",{className:"stat__track",children:e.jsx("div",{className:"stat__fill",style:{"--bar-w":`${[85,95,75][l]}%`,width:r?`${[85,95,75][l]}%`:"0%",transition:`width 1s var(--paint-ease) ${.2+l*.15}s`,background:l===1?"var(--yellow)":l===2?"var(--red)":"var(--blue-light)"}})})]},n.label)),e.jsx(p,{color:"var(--blue)",size:80,delay:.8,variant:2,style:{position:"absolute",top:-20,right:-30}})]}),e.jsx("div",{ref:o,className:"about__services",children:w.map((n,l)=>e.jsxs("div",{className:"svc",style:{opacity:i?1:0,transform:i?"none":"translateY(20px) rotate(-2deg)",transition:`all 0.6s ease ${.1+l*.12}s`},children:[e.jsx("h3",{className:"svc__title",children:n.title}),e.jsx("p",{className:"svc__tag",children:n.tagline})]},n.title))})]}),e.jsx("style",{children:`
        .about__grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 48px; margin-bottom: 56px; }
        .about__text { font-size: 17px; line-height: 1.8; color: var(--white-dim); margin-bottom: 12px; }
        .about__text strong { color: var(--yellow); font-weight: 600; }
        .about__info { display: flex; flex-direction: column; gap: 16px; }
        .about__info-card { display: flex; justify-content: space-between; padding: 16px; border: 1px solid var(--gray); }
        .about__info-label { font-family: var(--font-accent); font-size: 13px; color: var(--yellow); }
        .about__info-value { font-weight: 600; font-size: 15px; }

        .about__stats { position: relative; display: flex; flex-direction: column; gap: 20px; margin-bottom: 56px; max-width: 500px; }
        .stat__header { display: flex; justify-content: space-between; margin-bottom: 6px; }
        .stat__label { font-family: var(--font-title); font-size: 16px; letter-spacing: 2px; color: var(--white-dim); }
        .stat__value { font-family: var(--font-accent); font-size: 18px; color: var(--yellow); }
        .stat__track { height: 10px; background: var(--bg-card); border-radius: 2px; overflow: hidden; }
        .stat__fill { height: 100%; border-radius: 2px; }

        .about__services { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .svc { padding: 24px 16px; border: 2px solid var(--gray); text-align: center; transition: all 0.3s ease; }
        .svc:hover { border-color: var(--yellow); transform: translateY(-4px); }
        .svc__title { font-family: var(--font-title); font-size: 20px; letter-spacing: 2px; margin-bottom: 4px; }
        .svc__tag { font-size: 13px; color: var(--white-dim); }

        @media(max-width:900px) { .about__grid { grid-template-columns: 1fr; } .about__services { grid-template-columns: 1fr 1fr; } }
        @media(max-width:480px) { .about__services { grid-template-columns: 1fr; } }
      `})]})}const E=[{key:"frontend",label:"FRONTEND",color:"var(--blue-light)",rot:-2},{key:"backend",label:"BACKEND",color:"var(--yellow)",rot:1.5},{key:"data",label:"DATA",color:"var(--blue)",rot:-1},{key:"cloud",label:"CLOUD / DEVOPS",color:"var(--red)",rot:2.5},{key:"mlAi",label:"ML / AI",color:"var(--blue-glow)",rot:-1.5},{key:"tools",label:"TOOLS",color:"var(--yellow-light)",rot:1},{key:"gameDev",label:"GAME DEV",color:"var(--red)",rot:-2.5}];function L({cat:t,index:a}){const[s,r]=d({threshold:.15}),o=a*.1;return e.jsxs("div",{ref:s,className:"sticker",style:{"--sticker-color":t.color,transform:r?`rotate(${t.rot}deg)`:`rotate(${t.rot-8}deg) scale(0.8)`,opacity:r?1:0,transition:`all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${o}s`},children:[e.jsx("div",{className:"sticker__tape"}),e.jsx("h4",{className:"sticker__label",children:t.label}),e.jsx("div",{className:"sticker__edge"}),e.jsx("div",{className:"sticker__tags",children:N[t.key].map(i=>e.jsx("span",{className:"sticker__tag",children:i},i))})]})}function T(){const[t,a]=d();return e.jsxs("section",{id:"skills",className:"skills-sec",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:t,children:[e.jsx("p",{className:"section-label",style:{opacity:a?1:0,transition:"opacity 0.6s"},children:"// SKILLS"}),e.jsx("h2",{className:"section-title",style:{opacity:a?1:0,transition:"opacity 0.6s 0.2s"},children:"TOOL RACK"})]}),e.jsxs("div",{className:"sticker-board",children:[E.map((s,r)=>e.jsx(L,{cat:s,index:r},s.key)),e.jsx(p,{color:"var(--blue)",size:100,delay:.5,variant:0,style:{position:"absolute",top:-30,right:10,opacity:.2}}),e.jsx(p,{color:"var(--yellow)",size:70,delay:.7,variant:2,style:{position:"absolute",bottom:-20,left:30,opacity:.15}})]})]}),e.jsx("style",{children:`
        .skills-sec { position: relative; }
        .sticker-board { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; position: relative; }

        .sticker {
          background: var(--bg-card); border: 2px solid var(--sticker-color);
          padding: 24px 18px 18px; position: relative; cursor: default;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .sticker:hover { transform: rotate(0deg) translateY(-6px) !important; box-shadow: 0 12px 40px rgba(0,0,0,0.4); }

        .sticker__tape {
          position: absolute; top: -10px; left: 50%; transform: translateX(-50%) rotate(-3deg);
          width: 50px; height: 18px; background: rgba(245,212,41,0.3); border: 1px solid rgba(245,212,41,0.15);
        }

        .sticker__edge {
          position: absolute; top: 0; right: 0; width: 20px; height: 20px;
          background: linear-gradient(135deg, transparent 50%, var(--bg-navy) 50%);
        }

        .sticker__label {
          font-family: var(--font-accent); font-size: 15px; color: var(--sticker-color);
          letter-spacing: 2px; margin-bottom: 14px;
        }

        .sticker__tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .sticker__tag {
          font-size: 12px; padding: 3px 10px; border: 1px solid var(--gray); color: var(--white-dim);
          transition: all 0.2s ease;
        }
        .sticker__tag:hover { border-color: var(--sticker-color); color: var(--white); }

        @media(max-width:900px) { .sticker-board { grid-template-columns: repeat(3, 1fr); } }
        @media(max-width:600px) { .sticker-board { grid-template-columns: repeat(2, 1fr); } }
        @media(max-width:400px) { .sticker-board { grid-template-columns: 1fr; } }
      `})]})}function P(){const[t,a]=d(),[s,r]=d({threshold:.05}),o=S[0];return e.jsxs("section",{id:"experience",className:"exp",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:t,children:[e.jsx("p",{className:"section-label",style:{opacity:a?1:0,transition:"opacity 0.6s"},children:"// EXPERIENCE"}),e.jsx(h,{color:"var(--yellow)",delay:.1,children:e.jsx("h2",{className:"section-title",children:"CAREER LOG"})})]}),e.jsxs("div",{ref:s,className:"exp__card",children:[e.jsxs("div",{className:"exp__timeline",children:[e.jsx("div",{className:"exp__drip",style:{height:r?"100%":"0%",transition:"height 2s var(--paint-ease) 0.3s"}}),e.jsx("div",{className:"exp__dot",style:{opacity:r?1:0,transition:"opacity 0.4s ease 0.3s"}})]}),e.jsxs("div",{className:"exp__content",children:[e.jsxs("div",{style:{opacity:r?1:0,transform:r?"none":"translateY(16px)",transition:"all 0.6s ease 0.3s"},children:[e.jsx("h3",{className:"exp__title",children:o.title}),e.jsx("span",{className:"exp__company",children:o.company}),e.jsx("span",{className:"exp__date",children:o.date})]}),e.jsx("ul",{className:"exp__points",children:o.points.map((i,n)=>e.jsx("li",{children:e.jsx(h,{variant:0,delay:.5+n*.15,color:"var(--blue)",children:e.jsxs("div",{className:"exp__point",children:[e.jsx("span",{className:"exp__bullet",children:">"}),i]})})},n))})]})]})]}),e.jsx("style",{children:`
        .exp__card { display: grid; grid-template-columns: 30px 1fr; gap: 28px; }
        .exp__timeline { position: relative; display: flex; justify-content: center; }
        .exp__drip { width: 3px; background: linear-gradient(to bottom, var(--yellow), var(--blue), var(--yellow)); border-radius: 2px; }
        .exp__dot { position: absolute; top: 4px; width: 14px; height: 14px; background: var(--yellow); border-radius: 50%; box-shadow: 0 0 12px var(--yellow); }
        .exp__title { font-family: var(--font-title); font-size: 32px; letter-spacing: 2px; }
        .exp__company { font-family: var(--font-accent); font-size: 20px; color: var(--yellow); display: block; margin: 2px 0; }
        .exp__date { font-size: 14px; color: var(--white-dim); letter-spacing: 1px; display: block; margin-bottom: 24px; }
        .exp__points { display: flex; flex-direction: column; gap: 12px; }
        .exp__point { font-size: 15px; line-height: 1.7; color: var(--white-dim); display: flex; gap: 10px; }
        .exp__bullet { color: var(--yellow); font-family: var(--font-accent); flex-shrink: 0; }
      `})]})}function R({project:t,index:a}){const[s,r]=d({threshold:.15}),o=Math.min(a*.1,.5);return e.jsxs("article",{ref:s,className:"pcard",style:{opacity:r?1:0,transform:r?"none":"translateY(24px) rotate(-1deg)",transition:`all 0.7s ease ${o}s`},children:[e.jsx("div",{className:"pcard__stroke"}),e.jsxs("div",{className:"pcard__inner",children:[e.jsx("span",{className:"pcard__num",children:String(a+1).padStart(2,"0")}),e.jsx("h3",{className:"pcard__title",children:t.title}),e.jsx("p",{className:"pcard__desc",children:t.description}),e.jsx("div",{className:"pcard__tech",children:t.tech.map(i=>e.jsx("span",{className:"pcard__tag",children:i},i))}),e.jsxs("div",{className:"pcard__links",children:[t.github&&e.jsx("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"pcard__link",children:"GitHub"}),t.live&&e.jsx("a",{href:t.live,target:"_blank",rel:"noopener noreferrer",className:"pcard__link",children:"Live"})]})]}),e.jsx("style",{children:`
        .pcard {
          position: relative; background: var(--bg-card); overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pcard:hover { transform: translateY(-6px) rotate(0deg) !important; box-shadow: 0 16px 50px rgba(0,0,0,0.4); }

        .pcard__stroke { height: 4px; background: linear-gradient(90deg, var(--yellow), var(--blue), var(--yellow)); }

        .pcard__inner { padding: 28px 24px; }
        .pcard__num { font-family: var(--font-accent); font-size: 36px; color: var(--gray); position: absolute; top: 16px; right: 20px; }
        .pcard__title { font-family: var(--font-title); font-size: 26px; letter-spacing: 2px; margin-bottom: 10px; }
        .pcard__desc { font-size: 14px; line-height: 1.7; color: var(--white-dim); margin-bottom: 16px; }
        .pcard__tech { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
        .pcard__tag { font-size: 11px; padding: 3px 10px; border: 1px solid var(--gray); color: var(--white-dim); letter-spacing: 0.5px; }
        .pcard__links { display: flex; gap: 16px; }
        .pcard__link { font-family: var(--font-title); font-size: 16px; letter-spacing: 2px; color: var(--yellow); transition: color 0.2s; }
        .pcard__link:hover { color: var(--white); }
      `})]})}const I=["all","ai","backend","web","game"];function O(){const[t,a]=d(),[s,r]=c.useState("all"),o=s==="all"?m:m.filter(i=>i.type===s);return e.jsxs("section",{id:"projects",className:"proj",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:t,children:[e.jsx("p",{className:"section-label",style:{opacity:a?1:0,transition:"opacity 0.6s"},children:"// PROJECTS"}),e.jsx("h2",{className:"section-title",style:{opacity:a?1:0,transform:a?"none":"translateY(20px)",transition:"all 0.7s ease 0.2s"},children:"FEATURED WORKS"})]}),e.jsx("div",{className:"proj__filters",style:{opacity:a?1:0,transition:"opacity 0.6s 0.3s"},children:I.map(i=>e.jsx("button",{className:`proj__filter ${s===i?"proj__filter--active":""}`,onClick:()=>r(i),children:i==="ai"?"AI / ML":i.charAt(0).toUpperCase()+i.slice(1)},i))}),e.jsx("div",{className:"proj__grid",children:o.map((i,n)=>e.jsx(R,{project:i,index:n},i.title))})]}),e.jsx("style",{children:`
        .proj__filters { display: flex; gap: 8px; margin-bottom: 40px; flex-wrap: wrap; }
        .proj__filter {
          font-family: var(--font-title); font-size: 16px; letter-spacing: 2px;
          padding: 8px 20px; background: none; border: 2px solid var(--gray); color: var(--white-dim);
          cursor: pointer; transition: all 0.3s ease; text-transform: uppercase;
        }
        .proj__filter:hover { border-color: var(--yellow); color: var(--yellow); }
        .proj__filter--active { background: var(--yellow); color: var(--bg-dark); border-color: var(--yellow); }
        .proj__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        @media(max-width:700px) { .proj__grid { grid-template-columns: 1fr; } }
      `})]})}function $(){const[t,a]=d(),[s,r]=d();return e.jsxs("section",{id:"contact",className:"contact",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{ref:t,children:[e.jsx("p",{className:"section-label",style:{opacity:a?1:0,transition:"opacity 0.6s"},children:"// CONTACT"}),e.jsx(h,{color:"var(--blue)",children:e.jsx("h2",{className:"section-title",children:"LET'S TALK"})})]}),e.jsxs("div",{ref:s,className:"contact__body",style:{position:"relative"},children:[e.jsx("p",{className:"contact__text",style:{opacity:r?1:0,transition:"opacity 0.8s ease 0.3s"},children:"Open to new opportunities, side projects, game jams, or just a good chat about code, games, and creative tech."}),e.jsx("a",{href:`mailto:${x.email}`,className:"contact__cta",style:{opacity:r?1:0,transform:r?"none":"translateY(16px)",transition:"all 0.6s ease 0.5s"},children:"SAY HELLO"}),e.jsxs("div",{className:"contact__links",style:{opacity:r?1:0,transition:"opacity 0.6s ease 0.7s"},children:[e.jsx("a",{href:x.github,target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),e.jsx("span",{children:"/"}),e.jsx("a",{href:x.linkedin,target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),e.jsx("span",{children:"/"}),e.jsx("a",{href:`mailto:${x.email}`,children:"Email"})]}),e.jsx(p,{color:"var(--yellow)",size:100,delay:.6,variant:1,style:{position:"absolute",top:-30,right:0,opacity:.15}})]}),e.jsx("footer",{className:"contact__footer",children:e.jsx("p",{children:"Designed & Built by Sahil Kumar"})})]}),e.jsx("style",{children:`
        .contact__body { margin-bottom: 64px; }
        .contact__text { font-size: 20px; line-height: 1.8; color: var(--white-dim); max-width: 520px; margin-bottom: 32px; }
        .contact__cta {
          display: inline-block; font-family: var(--font-title); font-size: 22px; letter-spacing: 4px;
          padding: 16px 40px; border: 3px solid var(--yellow); color: var(--yellow);
          position: relative; overflow: hidden; transition: color 0.4s ease; margin-bottom: 40px;
        }
        .contact__cta::before {
          content: ''; position: absolute; inset: 0; background: var(--yellow);
          transform: translateX(-100%); transition: transform 0.4s var(--paint-ease);
          z-index: -1;
        }
        .contact__cta:hover { color: var(--bg-dark); }
        .contact__cta:hover::before { transform: translateX(0); }

        .contact__links { display: flex; gap: 12px; font-family: var(--font-title); font-size: 18px; letter-spacing: 2px; }
        .contact__links a { color: var(--white); transition: color 0.2s; }
        .contact__links a:hover { color: var(--yellow); }
        .contact__links span { color: var(--gray); }

        .contact__footer { padding: 40px 0 24px; border-top: 1px solid var(--gray); }
        .contact__footer p { font-size: 14px; color: var(--white-dim); }
      `})]})}function C(){const[t,a]=c.useState(!0),s=c.useCallback(()=>a(!1),[]);return e.jsxs(e.Fragment,{children:[t&&e.jsx(u,{onDone:s}),e.jsx(j,{}),e.jsx(z,{}),e.jsx(A,{}),e.jsx(T,{}),e.jsx(P,{}),e.jsx(O,{}),e.jsx($,{}),e.jsx(b,{})]})}export{C as default};
