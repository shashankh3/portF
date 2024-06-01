<template>
  <div class="about">
    <h1>About Me</h1>
    <p> Highly skilled front-end developer and software engineer with a strong foundation in computer science. Proficient in
programming languages including C, C++, Python, and JavaScript. Extensive experience in web development using Vue.js,
HTML, and CSS, with a focus on creating visually appealing and responsive user interfaces. Hands-on experience in
Android app development using Android Studio and Java. Known for problem-solving abilities, adaptability to new
technologies, and strong teamwork skills.</p>
<h2>Technical skills</h2>
<p>Languages: C/C++, Python, SQL<br>
Web Development: JavaScript, HTML/CSS<br>
Frameworks/API: Vue.js, VueCLI, Node.js<br>
Developer Tools: Android SDK, Git, VS Code, Visual Studio, PyCharm<br>
</p>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about {
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
  font-size: 5rem;
  margin: 0%;
  font-style: oblique;
  text-align: center;
}
p{
  text-align:  auto;
  font-size: 1.35rem;
  margin-left: 9%;
  margin-right: 9%;
  font-weight: 600;
  font-style: italic;
  text-align: center;
}

</style>
