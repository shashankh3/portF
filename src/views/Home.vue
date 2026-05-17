<template>
  <div class="page home">
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">Portfolio</span>
        <h1>Hi, I’m Shashank.</h1>
        <p class="hero-subtitle">Full-Stack Developer | AI Integration | REST APIs</p>
        <p class="hero-text">
          I engineer production-grade web applications with AI integration, robust backends, and modern frontends. Experienced in building full-stack platforms with Django, React/Next.js, and AI-powered features.
        </p>
        <router-link to="/projects" class="primary-button">View my work</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.page.home {
  min-height: 100vh;
  padding: 4rem 2rem;
  background-image: linear-gradient(180deg, rgba(3, 12, 21, 0.95), rgba(8, 18, 28, 0.95)), url(@/assets/images/bg66.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 1rem;
  color: #7ce7b1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  animation: fadeInDown 0.8s ease-out;
}

h1 {
  margin: 0;
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 0.95;
  animation: fadeInDown 0.8s ease-out 0.15s both;
}

.hero-subtitle {
  margin: 1rem 0 1.25rem;
  font-size: 1.4rem;
  color: #7ce7b1;
  font-weight: 600;
  animation: slideInLeft 0.8s ease-out 0.25s both;
}

.hero-text {
  max-width: 42rem;
  margin: 1rem 0 2.5rem;
  font-size: 1.15rem;
  line-height: 1.85;
  color: rgba(244, 249, 255, 0.82);
  animation: slideInLeft 0.8s ease-out 0.35s both;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #42b983;
  color: #06110b;
  padding: 1rem 1.8rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.8s ease-out 0.45s both;
}

.primary-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
  z-index: -1;
}

.primary-button:hover::before {
  width: 300px;
  height: 300px;
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(66, 185, 131, 0.3);
}

@media (max-width: 640px) {
  .page.home {
    padding: 3rem 1.25rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>
