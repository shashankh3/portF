<template>
    <div class="projects">
      <h1>My Projects</h1>
      <h2>SPOTIFY — Spotify Clone Web App </h2>
      <h3>| Vue, JavaScript, HTML |</h3>
      <h5><a href="https://github.com/shashankh3/spotify-vue" target="_blank">github/shashankh3/spotify-vue</a></h5>
      <p>• Made a spotify clone web app using vue.js<br>
        • CRUD Operations can be performed.<br>
• Contains functionality of adding and deleting new songs, hosted on json server<br>
</p>
<h2>CALC1 — Android Calculator App</h2>
      <h3>| Android SDK, Java |</h3>
      <h5><a href=" https://github.com/shashankh3/Calc1" target="_blank">github/shashankh3/Calc-1</a></h5>
      <p>• Made a simple android calculator using android studio.<br>
• Learned basics of android studio while making this app.<br>
• Learned how to use buttons, assigning values, and perform basic mathematical tasks.<br>
</p>
      <h2></h2>
      <p></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Projects',
  };
  </script>
  
  <style scoped>
  .projects {
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
h2{
  margin-top: 1rem;
}
h5 a {
  text-decoration: none; /* Remove underline from link */
  color: #288058;
  font-weight: bold; /* Bold font */
}

h5 a:hover {
  color: #041d11;
  text-decoration: underline; /* Underline on hover */
}
  </style>
  