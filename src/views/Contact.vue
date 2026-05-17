<template>
  <div class="page contact">
    <section class="contact-card">
      <div class="section-header">
        <span class="eyebrow">Get in touch</span>
        <h1>Let’s build something together.</h1>
      </div>
      <p>
        Want to collaborate on a full-stack project, AI-integrated platform, or open-source initiative? Reach out through GitHub, LinkedIn, or email.
      </p>
      <div class="contact-links">
        <a href="https://github.com/shashankh3" target="_blank" class="icon-link">
          <font-awesome-icon :icon="['fab', 'github']" />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/shashankh3/" target="_blank" class="icon-link">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:shashankh3@gmail.com" class="icon-link">
          <font-awesome-icon :icon="['fas', 'envelope']" />
          <span>Email</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
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

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(66, 185, 131, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(66, 185, 131, 0);
  }
}

.page.contact {
  min-height: 100vh;
  padding: 4rem 2rem;
  background-image: linear-gradient(180deg, rgba(3, 12, 21, 0.92), rgba(8, 18, 28, 0.95)), url(@/assets/images/bg66.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.contact-card {
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(16px);
  text-align: center;
  animation: slideUp 0.8s ease-out;
  transition: all 0.3s ease;
}

.contact-card:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(66, 185, 131, 0.2);
  box-shadow: 0 40px 100px rgba(66, 185, 131, 0.15);
}

.section-header {
  margin-bottom: 2rem;
  animation: fadeInDown 0.6s ease-out;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 1rem;
  color: #7ce7b1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
}

h1 {
  margin: 0;
  font-size: clamp(2.8rem, 4vw, 4.25rem);
}

p {
  margin: 1.5rem auto 2.5rem;
  max-width: 42rem;
  color: rgba(244, 249, 255, 0.82);
  line-height: 1.9;
  animation: slideUp 0.6s ease-out 0.1s both;
}

.contact-links {
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 1rem;
}

.icon-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.3rem;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #d8f7e6;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideUp 0.6s ease-out both;
  position: relative;
  overflow: hidden;
}

.icon-link:nth-child(1) { animation-delay: 0.2s; }
.icon-link:nth-child(2) { animation-delay: 0.25s; }
.icon-link:nth-child(3) { animation-delay: 0.3s; }

.icon-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(66, 185, 131, 0.1);
  transition: left 0.4s ease;
  z-index: -1;
}

.icon-link:hover::before {
  left: 100%;
}

.icon-link span {
  font-size: 0.95rem;
  color: rgba(244, 249, 255, 0.88);
  transition: color 0.3s ease;
}

.icon-link:hover span {
  color: #42b983;
}

.icon-link:hover {
  transform: translateY(-5px) scale(1.05);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(66, 185, 131, 0.3);
  box-shadow: 0 20px 40px rgba(66, 185, 131, 0.2);
}

.icon-link svg {
  font-size: 2.4rem;
  transition: all 0.3s ease;
}

.icon-link:hover svg {
  color: #42b983;
  transform: scale(1.2);
}

@media (max-width: 860px) {
  .contact-links {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .page.contact {
    padding: 3rem 1.25rem;
  }
}
</style>
