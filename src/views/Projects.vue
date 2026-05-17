<template>
  <div class="page projects">
    <section class="projects-grid">
      <div class="section-header">
        <span class="eyebrow">Projects</span>
        <h1>Selected work</h1>
      </div>
      <div class="cards">
        <article class="project-card">
          <div class="card-header">
            <h2>LearnFlow LMS</h2>
            <span>Django · Next.js · TypeScript · Tailwind · Gemini API</span>
          </div>
          <ul class="project-list">
            <li>Production-grade Learning Management System with Instructor/Student roles and real-time enrollment tracking</li>
            <li>Integrated Google Gemini API with YouTube transcript extraction for automated AI-powered quiz generation</li>
            <li>Secure JWT authentication and documented REST API deployed on Vercel and PythonAnywhere</li>
          </ul>
          <a href="https://github.com/shashankh3/LearnFlow-LMS" target="_blank">View on GitHub</a>
        </article>
        <article class="project-card">
          <div class="card-header">
            <h2>Topic Feed Pro (Chrome Extension)</h2>
            <span>JavaScript · Python · HTML · CSS</span>
          </div>
          <ul class="project-list">
            <li>AI-engineered Chrome extension using prompt-driven development to override YouTube feeds with custom algorithms</li>
            <li>Optimized load times to 2-3s through intelligent caching and global deduplication</li>
            <li>Dual-filtering logic system for intelligent content sorting and personalization</li>
          </ul>
          <a href="https://github.com/shashankh3/TopicFeedGenerator" target="_blank">View on GitHub</a>
        </article>
        <article class="project-card">
          <div class="card-header">
            <h2>Spotify Web Player Clone</h2>
            <span>Vue.js · JavaScript · HTML · JSON Server</span>
          </div>
          <ul class="project-list">
            <li>Dynamic Vue.js web application supporting end-to-end CRUD operations for song database management</li>
            <li>Full playlist creation, editing, and deletion functionality with persistent JSON server backend</li>
            <li>Responsive design with a clean, intuitive user interface</li>
          </ul>
          <a href="https://github.com/shashankh3/spotify-vue" target="_blank">View on GitHub</a>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Projects',
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

.page.projects {
  min-height: 100vh;
  padding: 4rem 2rem;
  background-image: linear-gradient(180deg, rgba(3, 12, 21, 0.92), rgba(8, 18, 28, 0.95)), url(@/assets/images/bg66.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.projects-grid {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 2rem;
  text-align: center;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 1rem;
  color: #7ce7b1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  animation: fadeInDown 0.6s ease-out;
}

h1 {
  margin: 0;
  font-size: clamp(2.8rem, 4vw, 4.5rem);
  animation: fadeInDown 0.6s ease-out 0.1s both;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
}

.project-card {
  padding: 2rem;
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 32px 70px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(16px);
  animation: slideUp 0.6s ease-out both;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.project-card:nth-child(1) { animation-delay: 0.2s; }
.project-card:nth-child(2) { animation-delay: 0.3s; }
.project-card:nth-child(3) { animation-delay: 0.4s; }

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(66, 185, 131, 0.2), transparent);
  transition: left 0.5s ease;
}

.project-card:hover::before {
  left: 100%;
}

.project-card:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(66, 185, 131, 0.3);
  transform: translateY(-8px);
  box-shadow: 0 50px 100px rgba(66, 185, 131, 0.2);
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.project-card h2 {
  margin: 0;
  font-size: 1.85rem;
  transition: color 0.3s ease;
}

.project-card:hover h2 {
  color: #7ce7b1;
}

.card-header span {
  color: #a9bacd;
  font-size: 0.95rem;
}

.project-list {
  color: rgba(244, 249, 255, 0.84);
  line-height: 1.8;
  margin: 0 0 1.5rem 1.25rem;
  padding: 0;
}

.project-list li {
  margin-bottom: 0.8rem;
  transition: transform 0.2s ease;
}

.project-card:hover .project-list li {
  transform: translateX(5px);
}

.project-card a {
  color: #42b983;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.project-card a::after {
  content: ' →';
  transition: transform 0.3s ease;
  opacity: 0;
}

.project-card a:hover {
  color: #7ce7b1;
  text-decoration: underline;
}

.project-card a:hover::after {
  opacity: 1;
  transform: translateX(5px);
}

@media (max-width: 860px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .page.projects {
    padding: 3rem 1.25rem;
  }
}
</style>

