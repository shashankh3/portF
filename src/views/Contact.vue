<template>
    <div class="contact">
      <h1>Contact Me</h1>
      <p>reach me here.</p>
      <div class="contact-links">
        <a href="https://github.com/shashankh3" target="_blank" class="icon-link">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="https://www.linkedin.com/in/shashankh3/" target="_blank" class="icon-link">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="https://www.instagram.com/valhalla8898/" target="_blank" class="icon-link">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a href="mailto:shashankh3@gmail.com" target="_blank" class="icon-link">
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </a>
    </div>
    </div>
   
  </template>
  
  <script>
  export default {
    name: 'Contact',
  };
  </script>
  
  <style scoped>
  .contact {
  text-align: center;
  margin-top: 0%;
  background-image: url( @/assets/images/bg66.jpg) ;
  background-size: cover;
  background-position: 250%;
  background-repeat: no-repeat;
  min-height: 100vh;
  }
  h1{
  font-size: 5rem;
  margin: 0%;
  font-style: oblique;
}
.contact-links {

  margin-bottom: auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  align-items: center;
}

.icon-link {
  margin: 0 10px;
  font-size: 6rem;
  color: #288058;
  text-decoration: none;
}

.icon-link:hover {
  color: #041d11;
}
  </style>
  