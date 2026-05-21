<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Shashank Hirwani — Full-Stack Developer</title>
<meta name="description" content="Full-Stack Developer specialising in AI-integrated web applications, REST APIs, and production-grade systems. Django · Next.js · React · TypeScript.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Inter:wght@300..700&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #000;
  --surface: rgba(6,18,10,0.72);
  --surface-2: rgba(4,14,8,0.88);
  --border: rgba(52,255,110,0.14);
  --border-hover: rgba(52,255,110,0.38);
  --text: #e6ffee;
  --muted: #7aad8e;
  --faint: #3b6347;
  --green: #34ff6e;
  --green-mid: #17c94f;
  --green-dim: rgba(52,255,110,0.08);
  --font-mono: 'Space Mono', 'SFMono-Regular', Consolas, monospace;
  --font-body: 'Inter', -apple-system, sans-serif;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --shadow: 0 8px 40px rgba(0,0,0,0.6), 0 1px 0 rgba(52,255,110,0.06);
  --shadow-hover: 0 16px 60px rgba(0,0,0,0.7), 0 1px 0 rgba(52,255,110,0.12);
  --s1:.25rem;--s2:.5rem;--s3:.75rem;--s4:1rem;--s5:1.25rem;
  --s6:1.5rem;--s8:2rem;--s10:2.5rem;--s12:3rem;--s16:4rem;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:var(--s16);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
body{min-height:100dvh;font-family:var(--font-body);font-size:1rem;color:var(--text);background:var(--bg);line-height:1.65;overflow-x:hidden}
img,svg{display:block;max-width:100%}
ul{list-style:none}
a{color:inherit;text-decoration:none}
button{cursor:pointer;background:none;border:none;font:inherit;color:inherit}
::selection{background:rgba(52,255,110,0.22);color:var(--text)}
:focus-visible{outline:2px solid var(--green);outline-offset:3px;border-radius:4px}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}

#matrix-canvas{position:fixed;inset:0;z-index:0;width:100%;height:100%;background:#000;pointer-events:none;}
.veil{
  position:fixed;inset:0;z-index:1;pointer-events:none;
  background:linear-gradient(180deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,.3) 40%,rgba(0,0,0,.5) 100%),
    radial-gradient(ellipse 80% 60% at 50% 0%,rgba(52,255,110,.05),transparent 70%);
}
.shell{position:relative;z-index:2;width:min(1200px,calc(100% - var(--s8)));margin-inline:auto}

nav{position:sticky;top:0;z-index:10;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);background:rgba(0,0,0,.38);border-bottom:1px solid rgba(52,255,110,.1);}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:var(--s4) var(--s6);max-width:1200px;margin-inline:auto;}
.nav-logo{font-family:var(--font-mono);font-size:.8rem;font-weight:700;letter-spacing:.2em;color:var(--green);text-transform:uppercase;}
.nav-logo span{color:var(--muted)}
.nav-links{display:flex;gap:var(--s6);align-items:center}
.nav-links a{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);transition:color .2s var(--ease-out);}
.nav-links a:hover{color:var(--green)}
.nav-resume{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.1em;padding:.45rem .9rem;border-radius:6px;border:1px solid var(--border-hover);color:var(--green);transition:background .2s var(--ease-out),box-shadow .2s var(--ease-out);}
.nav-resume:hover{background:var(--green-dim);box-shadow:0 0 18px rgba(52,255,110,.15)}

.hero{min-height:calc(100dvh - 64px);display:flex;flex-direction:column;justify-content:center;padding:clamp(var(--s12),8vw,var(--s16)) 0;}
.hero-label{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--green);display:inline-flex;align-items:center;gap:.5rem;margin-bottom:var(--s6);}
.hero-label::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--green);box-shadow:0 0 12px var(--green);animation:pulse-dot 2s ease-in-out infinite;}
@keyframes pulse-dot{0%,100%{box-shadow:0 0 6px var(--green)}50%{box-shadow:0 0 20px var(--green),0 0 40px rgba(52,255,110,.4)}}

.hero-title{font-family:var(--font-mono);font-size:clamp(2.6rem,7vw,6rem);line-height:1.05;letter-spacing:-.02em;color:#f0fff4;text-shadow:0 0 60px rgba(52,255,110,.08);margin-bottom:var(--s3);}
.hero-title .gt{color:var(--green)}
.cursor-blink{display:inline-block;width:.55em;height:.9em;background:var(--green);margin-left:.08em;vertical-align:-.05em;border-radius:2px;animation:cursor-pulse 1s step-end infinite;}
@keyframes cursor-pulse{0%,49%{opacity:1}50%,100%{opacity:0}}

.hero-sub{font-size:clamp(.95rem,1.6vw,1.15rem);color:var(--muted);line-height:1.75;max-width:68ch;margin-bottom:var(--s8);}
.hero-sub strong{color:#c8ffda;font-weight:500}
.hero-ctas{display:flex;flex-wrap:wrap;gap:var(--s3);margin-bottom:var(--s10)}
.btn{display:inline-flex;align-items:center;gap:.45rem;font-family:var(--font-mono);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;padding:.65rem 1.3rem;border-radius:8px;transition:transform .2s var(--ease-out),box-shadow .2s var(--ease-out),background .2s var(--ease-out);}
.btn:hover{transform:translateY(-2px)}
.btn-prime{background:rgba(52,255,110,.12);border:1px solid rgba(52,255,110,.45);color:#d6ffdf;}
.btn-prime:hover{box-shadow:0 0 24px rgba(52,255,110,.18),0 4px 20px rgba(0,0,0,.4)}
.btn-ghost{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);color:var(--muted);}
.btn-ghost:hover{border-color:rgba(255,255,255,.25);color:var(--text)}

.hero-meta{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--s3);max-width:560px;}
.meta-item{padding:var(--s4);border-radius:10px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.07);}
.meta-item .label{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.14em;text-transform:uppercase;color:var(--faint);margin-bottom:.25rem;}
.meta-item .val{font-size:.9rem;color:#d8ffdf;font-weight:500}

section{padding:clamp(var(--s12),6vw,var(--s16)) 0}
.section-tag{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:var(--green);margin-bottom:var(--s4);display:flex;align-items:center;gap:.6rem;}
.section-tag::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--border),transparent)}
h2.section-title{font-size:clamp(1.7rem,3vw,2.5rem);letter-spacing:-.03em;color:#edfff2;margin-bottom:var(--s2);line-height:1.15;}
.section-desc{color:var(--muted);max-width:64ch;margin-bottom:var(--s10);line-height:1.75}

.glass{position:relative;background:var(--surface);border:1px solid var(--border);border-radius:20px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:var(--shadow);overflow:hidden;transition:border-color .25s var(--ease-out),box-shadow .25s var(--ease-out),transform .25s var(--ease-out);}
.glass::before{content:'';position:absolute;inset:0;border-radius:inherit;pointer-events:none;background:linear-gradient(135deg,rgba(52,255,110,.07) 0%,transparent 50%);}
.glass:hover{border-color:var(--border-hover);box-shadow:var(--shadow-hover);transform:translateY(-3px)}

.about-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:var(--s5);align-items:start}
.about-card,.signal-card{padding:var(--s8)}
.about-card p{color:var(--muted);line-height:1.8;margin-top:var(--s4)}
.signal-card ul{display:grid;gap:var(--s4);margin-top:var(--s6)}
.signal-card li{display:grid;grid-template-columns:auto 1fr;gap:.75rem;color:var(--muted);line-height:1.7;align-items:baseline}
.signal-card li::before{content:'//';font-family:var(--font-mono);font-size:.7rem;color:var(--green);font-weight:700;white-space:nowrap;margin-top:.18rem}

.project-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--s5)}
.project-card{padding:var(--s8)}
.project-card.span-2{grid-column:1/-1}
.proj-num{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.2em;color:var(--faint);margin-bottom:var(--s4)}
.proj-title{font-size:1.4rem;font-weight:600;letter-spacing:-.02em;color:#e8fff2;margin-bottom:var(--s2)}
.proj-stack{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.08em;color:var(--green);margin-bottom:var(--s5)}
.proj-desc{color:var(--muted);line-height:1.75;margin-bottom:var(--s5)}
.proj-points{display:grid;gap:var(--s2)}
.proj-points li{display:grid;grid-template-columns:auto 1fr;gap:.6rem;font-size:.9rem;color:var(--muted);line-height:1.6}
.proj-points li::before{content:'›';color:var(--green);font-size:1rem;font-weight:700}
.proj-links{display:flex;gap:var(--s3);margin-top:var(--s6)}
.proj-link{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;padding:.38rem .8rem;border-radius:6px;border:1px solid var(--border);color:var(--muted);transition:border-color .2s,color .2s,background .2s;}
.proj-link:hover{border-color:var(--border-hover);color:var(--green);background:var(--green-dim)}

.timeline{display:grid;gap:var(--s5)}
.tl-item{display:grid;grid-template-columns:3px 1fr;gap:var(--s6)}
.tl-line{position:relative;display:flex;flex-direction:column;align-items:center}
.tl-dot{width:12px;height:12px;border-radius:50%;background:var(--green);box-shadow:0 0 16px rgba(52,255,110,.6);flex-shrink:0;margin-left:-4.5px}
.tl-track{flex:1;width:1px;background:linear-gradient(var(--border),transparent);margin-top:var(--s2)}
.tl-body{padding:var(--s6) var(--s8)}
.tl-meta{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.12em;color:var(--green);margin-bottom:var(--s3)}
.tl-org{font-size:1.25rem;font-weight:600;color:#e4fff0;margin-bottom:.25rem}
.tl-role{color:#9ecdb0;font-size:.95rem;margin-bottom:var(--s4)}
.tl-desc{color:var(--muted);line-height:1.8}

.skills-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:var(--s5);align-items:start}
.skills-card,.edu-card{padding:var(--s8)}
.skill-group{margin-bottom:var(--s6)}
.skill-group:last-child{margin-bottom:0}
.skill-group-label{font-family:var(--font-mono);font-size:.65rem;letter-spacing:.16em;text-transform:uppercase;color:var(--faint);margin-bottom:var(--s3)}
.tag-wrap{display:flex;flex-wrap:wrap;gap:var(--s2)}
.tag{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.06em;padding:.35rem .75rem;border-radius:6px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);color:#cce0d5;transition:border-color .18s,color .18s,background .18s;}
.tag:hover{border-color:rgba(52,255,110,.3);color:var(--green);background:var(--green-dim)}
.edu-block{padding:var(--s5);border-radius:12px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.07)}
.edu-block+.edu-block{margin-top:var(--s4)}
.edu-school{font-size:1rem;font-weight:600;color:#dcfff0;margin-bottom:.25rem}
.edu-deg{font-size:.9rem;color:var(--muted)}
.edu-meta{font-family:var(--font-mono);font-size:.67rem;letter-spacing:.08em;color:var(--faint);margin-top:.4rem}

.creds-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--s5)}
.creds-card{padding:var(--s8)}
.cert-list{display:grid;gap:var(--s3);margin-top:var(--s5)}
.cert-list li{display:grid;grid-template-columns:auto 1fr;gap:.65rem;font-size:.92rem;color:var(--muted);align-items:baseline}
.cert-list li::before{content:'✦';color:var(--green);font-size:.7rem}
.score-block{margin-top:var(--s5)}
.score-title{font-size:1.1rem;font-weight:600;color:#dafff2;margin-bottom:.2rem}
.score-id{font-family:var(--font-mono);font-size:.67rem;color:var(--faint);margin-bottom:var(--s4)}
.score-bars{display:grid;gap:var(--s3)}
.score-row{display:grid;gap:.5rem}
.score-label{font-size:.82rem;color:var(--muted);display:flex;justify-content:space-between}
.score-track{height:4px;border-radius:99px;background:rgba(255,255,255,.06);overflow:hidden}
.score-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,var(--green-mid),var(--green));animation:fill-bar 1.2s var(--ease-out) both}
@keyframes fill-bar{from{width:0}to{}}

.contact-card{padding:clamp(var(--s8),5vw,var(--s12));text-align:center}
.contact-headline{font-size:clamp(1.5rem,3.5vw,2.8rem);letter-spacing:-.03em;color:#e8fff3;margin-bottom:var(--s4);line-height:1.15}
.contact-sub{color:var(--muted);margin-bottom:var(--s8);max-width:48ch;margin-inline:auto;line-height:1.75}
.contact-links{display:flex;flex-wrap:wrap;gap:var(--s4);justify-content:center}
.contact-link{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;padding:.65rem 1.3rem;border-radius:8px;border:1px solid var(--border);color:var(--muted);transition:all .22s var(--ease-out);}
.contact-link:hover{border-color:var(--border-hover);color:var(--green);background:var(--green-dim);transform:translateY(-2px)}

footer{padding:var(--s8) var(--s6);border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:var(--s4);max-width:1200px;margin-inline:auto;}
footer p{font-family:var(--font-mono);font-size:.67rem;letter-spacing:.1em;color:var(--faint)}
footer p span{color:var(--green)}

.reveal{opacity:1}
@supports(animation-timeline:scroll()){
  .reveal{opacity:0;animation:fade-in linear both;animation-timeline:view();animation-range:entry 0% entry 60%}
  @keyframes fade-in{to{opacity:1}}
}

@media(max-width:960px){
  .about-grid,.skills-grid{grid-template-columns:1fr}
  .project-grid,.creds-grid{grid-template-columns:1fr}
  .project-card.span-2{grid-column:1}
  .hero-meta{grid-template-columns:1fr 1fr}
}
@media(max-width:640px){
  .nav-links .hide-sm{display:none}
  .hero-meta{grid-template-columns:1fr}
  .tl-item{gap:var(--s4)}
  .tl-body,.project-card,.about-card,.signal-card,.skills-card,.edu-card,.creds-card{padding:var(--s6)}
}
</style>
</head>
<body>

<canvas id="matrix-canvas"></canvas>
<div class="veil"></div>

<nav>
  <div class="nav-inner">
    <div class="nav-logo">SH <span>// DEV</span></div>
    <div class="nav-links">
      <a href="#work">Work</a>
      <a href="#experience" class="hide-sm">Experience</a>
      <a href="#stack">Stack</a>
      <a href="#contact">Contact</a>
      <a href="mailto:shashankh3@gmail.com" class="nav-resume">Hire Me</a>
    </div>
  </div>
</nav>

<div class="shell">
  <section class="hero">
    <div class="hero-label">System Online — Available for opportunities</div>
    <h1 class="hero-title">
      I build <span class="gt">&gt;</span><span id="typed-text"></span><span class="cursor-blink"></span>
    </h1>
    <p class="hero-sub">
      Full-stack developer specialising in <strong>AI-integrated web applications</strong>,
      production-grade REST APIs, and end-to-end systems built with
      <strong>Django &middot; React &middot; Next.js &middot; TypeScript &middot; Vue</strong>.
      From architecture to deployment — I ship things that actually work.
    </p>
    <div class="hero-ctas">
      <a href="#work" class="btn btn-prime">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="5 12 19 12"/><polyline points="12 5 19 12 12 19"/></svg>
        View Projects
      </a>
      <a href="https://github.com/shashankh3" target="_blank" rel="noreferrer" class="btn btn-ghost">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.478-10-10-10z"/></svg>
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/shashankh3" target="_blank" rel="noreferrer" class="btn btn-ghost">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LinkedIn
      </a>
    </div>
    <div class="hero-meta">
      <div class="meta-item"><div class="label">Role</div><div class="val">Full-Stack Dev</div></div>
      <div class="meta-item"><div class="label">Focus</div><div class="val">AI + Systems</div></div>
      <div class="meta-item"><div class="label">Location</div><div class="val">India</div></div>
    </div>
  </section>

  <section id="about">
    <div class="about-grid">
      <div class="glass about-card reveal">
        <div class="section-tag">Profile</div>
        <h2 class="section-title">Building systems that hold up under pressure.</h2>
        <p>Full-stack developer with hands-on experience in AI-integrated web applications, REST API development, prompt engineering, JWT authentication, and cloud deployment across Vercel and PythonAnywhere.</p>
        <p>I build products that feel effortless on the surface and are defensively engineered underneath — reliable APIs, clean data flow, secure auth, and features that actually solve real problems at production scale.</p>
      </div>
      <div class="glass signal-card reveal">
        <div class="section-tag">Signal</div>
        <ul>
          <li>Production-grade LMS with role-based workflows, AI quiz generation, and real enrollment tracking.</li>
          <li>Prompt-driven systems work including model evaluation, error injection, and response-quality improvement.</li>
          <li>Frontend strength across React, Next.js, and Vue — performance-minded and component-first.</li>
          <li>Backend architecture in Django with structured REST APIs, auth, and deployment pipelines.</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="work">
    <div class="section-tag">Selected Work</div>
    <h2 class="section-title">Projects that carry the portfolio.</h2>
    <p class="section-desc">Production-focused builds — not demos. Each one ships with real auth, real data, and real deployment.</p>
    <div class="project-grid">
      <div class="glass project-card span-2 reveal">
        <div class="proj-num">01 // FLAGSHIP BUILD</div>
        <div class="proj-title">LearnFlow LMS</div>
        <div class="proj-stack">Django &middot; Next.js &middot; TypeScript &middot; Tailwind CSS &middot; Gemini API &middot; JWT</div>
        <p class="proj-desc">Production-grade learning management system engineered from the ground up — distinct instructor and student roles, real-time enrollment tracking, and an AI-powered quiz engine that reads YouTube lesson transcripts and generates structured assessments automatically.</p>
        <ul class="proj-points">
          <li>AI-powered quiz generation from YouTube lesson transcripts using Google Gemini API.</li>
          <li>Secure JWT authentication, role-based access, and full REST API with Swagger/Postman docs.</li>
          <li>Deployed across Vercel (frontend) and PythonAnywhere (backend) — production, not a demo.</li>
          <li>Instructor analytics and student progress tracking with real enrollment data flows.</li>
        </ul>
        <div class="proj-links">
          <a href="https://github.com/shashankh3" target="_blank" rel="noreferrer" class="proj-link">GitHub &rarr;</a>
        </div>
      </div>
      <div class="glass project-card reveal">
        <div class="proj-num">02 // SMART EXTENSION</div>
        <div class="proj-title">TopicFeedPro</div>
        <div class="proj-stack">JavaScript &middot; Python &middot; HTML &middot; CSS</div>
        <p class="proj-desc">AI-engineered Chrome extension that overrides YouTube's default feed with a custom, prompt-driven algorithm. Built using intentional prompt engineering to control content sorting, not just filter it.</p>
        <ul class="proj-points">
          <li>Replaced default recommendations with a dual-filtering, intent-aware content system.</li>
          <li>2–3s load times via intelligent caching, global deduplication, and optimised logic.</li>
        </ul>
        <div class="proj-links">
          <a href="https://github.com/shashankh3" target="_blank" rel="noreferrer" class="proj-link">GitHub &rarr;</a>
        </div>
      </div>
      <div class="glass project-card reveal">
        <div class="proj-num">03 // FRONTEND SYSTEM</div>
        <div class="proj-title">Spotify Web Player Clone</div>
        <div class="proj-stack">Vue.js &middot; JavaScript &middot; HTML &middot; JSON Server</div>
        <p class="proj-desc">Dynamic Vue.js music player supporting end-to-end CRUD on a live song database. Built to demonstrate structured component-driven development with reactive state management.</p>
        <ul class="proj-points">
          <li>Full CRUD for song management with a real JSON server backend.</li>
          <li>Component-first Vue architecture with clean separation of state and UI concerns.</li>
        </ul>
        <div class="proj-links">
          <a href="https://github.com/shashankh3" target="_blank" rel="noreferrer" class="proj-link">GitHub &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <section id="experience">
    <div class="section-tag">Experience</div>
    <h2 class="section-title">Where I've contributed.</h2>
    <p class="section-desc">From UN digital initiatives to AI model training at scale.</p>
    <div class="timeline">
      <div class="tl-item reveal">
        <div class="tl-line"><div class="tl-dot"></div><div class="tl-track"></div></div>
        <div class="glass tl-body">
          <div class="tl-meta">March 2026 &mdash; Present &middot; Remote, New Delhi</div>
          <div class="tl-org">United Nations Volunteers (UNV) &mdash; OICT</div>
          <div class="tl-role">Online Volunteer &mdash; Software Development Support</div>
          <p class="tl-desc">Contributing to software development support for the UN India Technology Hub under the Office of Information and Communications Technology. Work spans technical documentation, development tasks, and deployment of digital solutions aligned with UN sustainable development goals.</p>
        </div>
      </div>
      <div class="tl-item reveal">
        <div class="tl-line"><div class="tl-dot"></div><div class="tl-track"></div></div>
        <div class="glass tl-body">
          <div class="tl-meta">October 2024 &mdash; December 2024 &middot; Remote</div>
          <div class="tl-org">OUTLIER.AI</div>
          <div class="tl-role">Individual Contractor &mdash; Prompt Engineering</div>
          <p class="tl-desc">Improved AI and LLM output quality by designing prompts that intentionally generate errors to enhance model learning. Reviewed outputs to identify deviations and implement response enhancement strategies. Trained models to generate more accurate, context-aware outputs.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="stack">
    <div class="skills-grid">
      <div class="glass skills-card reveal">
        <div class="section-tag">Technical Stack</div>
        <div class="skill-group">
          <div class="skill-group-label">Languages</div>
          <div class="tag-wrap">
            <span class="tag">Python</span><span class="tag">JavaScript</span>
            <span class="tag">TypeScript</span><span class="tag">SQL</span>
            <span class="tag">C</span><span class="tag">C++</span>
          </div>
        </div>
        <div class="skill-group">
          <div class="skill-group-label">Frontend</div>
          <div class="tag-wrap">
            <span class="tag">React.js</span><span class="tag">Next.js</span>
            <span class="tag">Vue.js</span><span class="tag">Tailwind CSS</span><span class="tag">HTML/CSS</span>
          </div>
        </div>
        <div class="skill-group">
          <div class="skill-group-label">Backend &amp; Data</div>
          <div class="tag-wrap">
            <span class="tag">Django</span><span class="tag">Django REST Framework</span>
            <span class="tag">Node.js</span><span class="tag">PostgreSQL</span><span class="tag">SQLite</span>
          </div>
        </div>
        <div class="skill-group">
          <div class="skill-group-label">Cloud, APIs &amp; Tools</div>
          <div class="tag-wrap">
            <span class="tag">Git</span><span class="tag">GitHub</span>
            <span class="tag">Vercel</span><span class="tag">PythonAnywhere</span>
            <span class="tag">Gemini API</span><span class="tag">JWT</span>
            <span class="tag">Postman</span><span class="tag">Swagger</span><span class="tag">VS Code</span>
          </div>
        </div>
      </div>
      <div class="glass edu-card reveal">
        <div class="section-tag">Education</div>
        <div class="edu-block">
          <div class="edu-school">CSVTU, Bhilai</div>
          <div class="edu-deg">B.Tech &mdash; Computer Science &amp; Engineering</div>
          <div class="edu-meta">July 2017 &ndash; June 2021 &middot; CPI 7.84</div>
        </div>
        <div class="edu-block">
          <div class="edu-school">Jawahar Navodaya Vidyalaya, Dongargarh</div>
          <div class="edu-deg">CBSE 12th</div>
          <div class="edu-meta">July 2015 &ndash; July 2016 &middot; GPA 7.24</div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="creds-grid">
      <div class="glass creds-card reveal">
        <div class="section-tag">Certifications</div>
        <ul class="cert-list">
          <li>Google AI Essentials</li>
          <li>Google Data Analytics Professional Certificate</li>
        </ul>
      </div>
      <div class="glass creds-card reveal">
        <div class="section-tag">Achievements</div>
        <div class="score-block">
          <div class="score-title">TCS NQT 2022</div>
          <div class="score-id">ID: 22071272587</div>
          <div class="score-bars">
            <div class="score-row">
              <div class="score-label"><span>Cognitive Total</span><span>78.25%</span></div>
              <div class="score-track"><div class="score-fill" style="width:78.25%"></div></div>
            </div>
            <div class="score-row">
              <div class="score-label"><span>Advanced Cognitive</span><span>69.91%</span></div>
              <div class="score-track"><div class="score-fill" style="width:69.91%"></div></div>
            </div>
            <div class="score-row">
              <div class="score-label"><span>Programming</span><span>71.35%</span></div>
              <div class="score-track"><div class="score-fill" style="width:71.35%"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="glass contact-card reveal">
      <div class="section-tag" style="justify-content:center">Contact</div>
      <h2 class="contact-headline">Let's build something sharp,<br>useful, and real.</h2>
      <p class="contact-sub">Open to full-time roles, contracts, and collaborations. I reply fast.</p>
      <div class="contact-links">
        <a href="mailto:shashankh3@gmail.com" class="contact-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          shashankh3@gmail.com
        </a>
        <a href="https://github.com/shashankh3" target="_blank" rel="noreferrer" class="contact-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.478-10-10-10z"/></svg>
          github.com/shashankh3
        </a>
        <a href="https://www.linkedin.com/in/shashankh3" target="_blank" rel="noreferrer" class="contact-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          linkedin.com/in/shashankh3
        </a>
      </div>
    </div>
  </section>
</div>

<footer>
  <p>&copy; 2026 <span>Shashank Hirwani</span> &mdash; All rights reserved.</p>
  <p>Built with <span>&hearts;</span> in India</p>
</footer>

<script>
(function(){
  const canvas=document.getElementById('matrix-canvas');
  const ctx=canvas.getContext('2d');
  const CHARS='アァイィウェオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]/*+-=|\\:;'.split('');
  const SIZE=15;
  let drops=[],W=0,H=0;
  function resize(){
    W=canvas.width=window.innerWidth;
    H=canvas.height=window.innerHeight;
    const cols=Math.floor(W/SIZE);
    drops=Array.from({length:cols},()=>Math.floor(Math.random()*-H/SIZE));
  }
  resize();
  window.addEventListener('resize',resize);
  function draw(){
    ctx.fillStyle='rgba(0,0,0,0.055)';
    ctx.fillRect(0,0,W,H);
    ctx.font=SIZE+'px monospace';
    for(let i=0;i<drops.length;i++){
      const y=drops[i]*SIZE;
      const r=Math.random();
      ctx.fillStyle=r>0.98?'#ffffff':r>0.92?'#b2ffd6':r>0.7?'#34ff6e':'#16a842';
      ctx.fillText(CHARS[Math.floor(Math.random()*CHARS.length)],i*SIZE,y);
      if(y>H&&Math.random()>0.977)drops[i]=0;
      drops[i]++;
    }
  }
  setInterval(draw,40);
})();

(function(){
  const el=document.getElementById('typed-text');
  const phrases=['_',' apps',' APIs',' systems',' the future'];
  let pi=0,ci=0,deleting=false,wait=0;
  function tick(){
    const phrase=phrases[pi];
    if(deleting){
      if(ci>0){ci--;el.textContent=phrase.slice(0,ci);wait=55;}
      else{deleting=false;pi=(pi+1)%phrases.length;wait=400;}
    }else{
      if(ci<phrase.length){ci++;el.textContent=phrase.slice(0,ci);wait=120;}
      else{deleting=true;wait=pi===0?3200:1800;}
    }
    setTimeout(tick,wait);
  }
  setTimeout(tick,1200);
})();
</script>
</body>
</html>
