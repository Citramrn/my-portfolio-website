<template>
  <div class="hero">
    <div class="image-holder">
      <img src="../assets/me.jpg" alt="Image of Citra Mirna" />
    </div>
    <div class="text">
      <div class="top-text">
        <h2>Citra Mirna Wati</h2>
        <h3>
          I'm a
          <span
            ><vue-typer
              :text="[
                'UI Designer',
                'Wordpress Designer',
                'Front End Enthusiast',
                'Freelancer',
              ]"
              :repeat="Infinity"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="70"
              :pre-erase-delay="2000"
              :erase-delay="250"
              erase-style="select-all"
              :erase-on-complete="false"
              caret-animation="blink"
            ></vue-typer
          ></span>
        </h3>
      </div>
      <div class="bottom-text">
        <p class="b-margin">
          I'm a pre-final year CS student at
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="green"
            href="https://vit.ac.in"
            >Nahdlatul Ulama University Of Blitar</a
          >, and an alumni of
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="green"
            href="https://dpsgurgaon.org"
            >Vocational High School, Blitar</a
          >. I'm a Front End Enthusiast, Freelance WordPress Designer, and I
          also have experience with Frontend Development.
        </p>
        <p class="b-margin">
          I also like UI Design. I have previous experience in designing UI
          Designer
          <span class="green-text">UI Designer</span> using Figma. Another tool
          I use is Adobe Photoshop.
        </p>
        <p>My favourite colour is <span class="color">#1a73e8</span>.</p>
      </div>
      <div class="contact">
        <a href="#contact">
          <div class="contact-me">Contact Me</div>
        </a>
      </div>
      <br />
      <p class="center">
        View some of my projects
        <a
          rel="noopener noreferrer"
          class="green"
          href="#projects"
          style="margin-left: 1px; margin-right: 1px"
          >here</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Hero",
  components: {
    VueTyper,
  },
};
</script>

<style scoped>
.color {
  /* border-bottom: 4px solid #1da7ea; */
  color: lawngreen;
}

ul {
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
}

li {
  margin-left: 2rem;
  padding: 10px;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #1b405e;
  transition: all ease 0.2s;
}

li:hover {
  background-color: #18d26e;
  transform: translateY(-5px);
  transition: all ease 0.2s;
}

::v-deep .typed {
  color: lawngreen !important;
}

::v-deep .custom.caret {
  background-color: green !important;
}

.fa-twitter {
  color: #fff;
}

.fa-instagram {
  color: #fff;
}

.fa-facebook {
  color: #fff;
}

.green {
  color: #18d26e;
  text-decoration: none;
  font-weight: bolder;
  margin: 5px;
  transition: siz;
}

.green-text {
  color: lawngreen;
}

.green:hover {
  color: lawngreen;
  text-decoration: none;
  font-weight: bolder;
  margin: 5px;
  transition: siz;
}

.center {
  text-align: center;
}

img {
  height: 400px;
  border-radius: 8px;
}

.b-margin {
  margin-bottom: 1rem;
}

.image-holder {
  height: 125px;
}

.hero {
  display: flex;
  margin-bottom: 2rem;
}

.text {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  margin-left: 2rem;
  margin-bottom: 4rem;
}

a {
  text-decoration: none;
}

.contact {
  margin-top: 2rem;
}

.contact-me {
  font-size: 1.1rem;
  font-weight: 500;
  background-color: #18d26e;
  color: white;
  border-radius: 8px;
  text-align: center;
  padding: 10px;
  vertical-align: center;
  transition: all ease 0.3s;
}

.contact-me:hover {
  background-color: green;
}

h2,
p {
  margin: 0;
}

h2 {
  font-weight: 500;
  font-size: 1.8rem;
}

h3 {
  font-weight: 480;
  font-size: 1.4rem;
}

p {
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.3;
  /* text-align: justify; */
}

.fa-linkedin {
  color: white;
}

@media screen and (max-width: 1258px) {
  .hero {
    flex-direction: column;
    margin-bottom: 0rem;
  }

  img {
    height: 150px;
    width: auto;
    clip-path: circle(60px at center);
    position: relative;
    top: -20px;
    margin: 0;
  }

  .text {
    margin-left: 0;
    height: auto;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  li {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  .contact {
    margin-top: 16px;
  }
}
</style>
