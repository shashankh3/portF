<template>
  <div class="home">
    <h1>Shashank Hirwani</h1>
    <h2>vue.js developer</h2>
    <div class="content">
      <!-- <p>
        Highly skilled front-end developer and software engineer with a strong foundation in computer science. Proficient in
        programming languages including C, C++, Python, and JavaScript. Extensive experience in web development using Vue.js,
        HTML, and CSS, with a focus on creating visually appealing and responsive user interfaces. Hands-on experience in
        Android app development using Android Studio and Java. Known for problem-solving abilities, adaptability to new
        technologies, and strong teamwork skills.
      </p> -->
      <img src="@/assets/images/pp.jpg" alt="Shashank Hirwani" class="profile-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  background-image: url( @/assets/images/bg66.jpg) ;
  background-size: cover;
  background-position: 250%;
  background-repeat: no-repeat;
  min-height: 100vh;
  text-align: center;
  margin-top: 0%;
}
/* p{
  text-align:  auto;
  font-size: 1.15rem;
  margin-left: 25%;
  margin-right: auto;
  margin-top: auto;
  font-weight: 600;
  font-style: italic;
} */
h1{
  margin: 0%;
  font-size: 5rem;
  font-style: oblique;
}
h2{
  color: #42b983;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.profile-image {
  width: 500px;
  height: 500px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 60%;
  margin-bottom: auto;
  margin-right:9%;
}
img, video {
  max-width: 100%;
  height: auto;
}

</style>
