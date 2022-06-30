<template>
  <div class="center-text">
    <h2>Experience</h2>
    <div class="contents align-left">
      <a href="https://smartseller.co.id/" target="_blank">
        <h3>PT Ayo Techno Idea</h3>
        <h5>Front End Developer Internship</h5>
        <h5 class="grey">August 2021 - October 2021</h5>
        <p>
          (Front End Developer & Remote Professional placement label generator
          tool project to make doing business easier) <br />
        </p>
      </a>
    </div>
    <div class="contents align-left">
      <a href="https://wa.me/6287754421765" target="blank">
        <h3>Freelance</h3>
        <h5>Wordpress Designer</h5>
        <h5 class="grey">October 2020 - Present</h5>
        <p>
          (My Responsibilities are to Create website wireframes and also create
          visual designs to implement them with WordPress)
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
};
</script>

<style scoped>
h2 {
  font-weight: 500;
  color: white;
  font-size: 1.8rem;
  border-bottom: 10px solid green;
  line-height: 0.4;
  transition: all ease 0.3s;
  content: "";
  width: 150px;
  display: block;
  margin: 20px auto;
}

.center-text {
  text-align: center;
}

.align-left {
  line-height: 7px !important;
}

.contents {
  margin-top: 10px;
  padding: 10px;
}

.contents:hover {
  background-color: #1b405e;
  border-radius: 8px;
}

.content {
  margin-top: 30px;
}

a {
  text-decoration: none;
  color: white;
}

p {
  line-height: normal !important;
}

.link {
  color: green;
}
</style>