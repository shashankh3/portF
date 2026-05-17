<template>
  <div id="app">
    <header class="site-header">
      <div class="brand">Shashank Hirwani</div>
      <nav>
        <router-link to="/" exact>Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
    <main class="page-shell">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
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
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

:root {
  --bg: #081218;
  --surface: rgba(11, 27, 40, 0.88);
  --accent: #42b983;
  --text: #f4f9ff;
  --muted: #a9bacd;
}

* {
  box-sizing: border-box;
}

html,
body,
#app {
  margin: 0;
  min-height: 100%;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #081218 0%, #0b1a2c 100%);
  color: var(--text);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: rgba(5, 14, 24, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  animation: fadeInDown 0.6s ease-out;
}

.brand {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--accent);
  animation: slideInLeft 0.6s ease-out 0.1s both;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

nav a {
  color: var(--muted);
  text-decoration: none;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  position: relative;
  animation: fadeInDown 0.6s ease-out 0.2s both;
}

nav a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--accent);
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

nav a.router-link-exact-active,
nav a:hover {
  color: var(--text);
  background: rgba(66, 185, 131, 0.16);
  transform: translateY(-2px);
}

nav a.router-link-exact-active::before,
nav a:hover::before {
  width: 80%;
}

.page-shell {
  min-height: calc(100vh - 84px);
  animation: fadeInUp 0.8s ease-out 0.2s both;
}
</style>
