<template>
  <div class="page about">
    <section class="content-card">
      <div class="section-header">
        <span class="eyebrow">About me</span>
        <h1>Full-Stack Developer with hands-on AI integration and REST API expertise.</h1>
      </div>
      <p>
        I build production-grade web applications featuring AI integration, secure authentication, and cloud deployment. Experienced in architecting full-stack platforms with Django backends, modern React/Next.js frontends, and prompt engineering for AI model optimization.
      </p>
      <p style="margin-top: 1.5rem; color: rgba(244, 249, 255, 0.78); font-size: 1rem;">
        Currently contributing to UN volunteering initiatives, combining technical expertise with a commitment to sustainable development.
      </p>
      <div class="skill-sections">
        <div>
          <h2>Languages</h2>
          <p>C, C++, Python, JavaScript, TypeScript, SQL</p>
        </div>
        <div>
          <h2>Frontend</h2>
          <p>React.js, Next.js, Vue.js, Tailwind CSS, HTML/CSS</p>
        </div>
        <div>
          <h2>Backend & Databases</h2>
          <p>Django, Django REST Framework, Node.js, PostgreSQL, SQLite</p>
        </div>
        <div>
          <h2>Cloud & APIs</h2>
          <p>Git, GitHub, Vercel, PythonAnywhere, Gemini API, JWT, Swagger</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page.about {
  min-height: 100vh;
  padding: 4rem 2rem;
  background-image: linear-gradient(180deg, rgba(3, 12, 21, 0.92), rgba(8, 18, 28, 0.95)), url(@/assets/images/bg66.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.content-card {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(16px);
  animation: slideUp 0.8s ease-out;
  transition: all 0.3s ease;
}

.content-card:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(66, 185, 131, 0.2);
  box-shadow: 0 40px 100px rgba(66, 185, 131, 0.15);
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  margin-bottom: 2rem;
}

.eyebrow {
  color: #7ce7b1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  animation: fadeInDown 0.6s ease-out;
}

h1 {
  margin: 0;
  font-size: clamp(2.5rem, 4vw, 4.5rem);
  line-height: 1.05;
  animation: fadeInDown 0.6s ease-out 0.1s both;
}

p {
  font-size: 1.1rem;
  line-height: 1.9;
  color: rgba(244, 249, 255, 0.85);
  margin: 0 auto;
  max-width: 55rem;
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.skill-sections {
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-sections > div {
  animation: slideUp 0.6s ease-out both;
  transition: all 0.3s ease;
}

.skill-sections > div:nth-child(1) { animation-delay: 0.3s; }
.skill-sections > div:nth-child(2) { animation-delay: 0.35s; }
.skill-sections > div:nth-child(3) { animation-delay: 0.4s; }
.skill-sections > div:nth-child(4) { animation-delay: 0.45s; }

.skill-sections > div:hover {
  transform: translateY(-5px);
}

.skill-sections h2 {
  margin: 0 0 0.75rem;
  font-size: 1.2rem;
  color: #d9f7e5;
  transition: color 0.3s ease;
}

.skill-sections > div:hover h2 {
  color: #42b983;
}

.skill-sections p {
  margin: 0;
  color: rgba(244, 249, 255, 0.78);
  font-size: 1rem;
  line-height: 1.6;
}

@media (max-width: 780px) {
  .page.about {
    padding: 3rem 1.25rem;
  }

  .skill-sections {
    grid-template-columns: 1fr;
  }
}
</style>
