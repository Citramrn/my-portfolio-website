<template>
  <div class="center-text">
    <h2>Education</h2>
    <div class="contents align-left">
      <a href="https://www.smkn1blitar.sch.id/" target="_blank">
        <h3>SMK Negeri 1 Blitar</h3>
        <h5 class="grey">2016 To 2018</h5>
        <p>
          (Industrial electronics, degree: Audio video technique Interns at
          Sanken Service Center Kediri .)
        </p>
      </a>
    </div>
    <div class="contents align-left">
      <a href="https://unublitar.ac.id/" target="blank">
        <h3 class="height-line">Nahdlatul Ulama University Of Blitar</h3>
        <h5 class="grey">2018 To 2023</h5>
        <p>
          (Faculty of Exact Sciences, degree: Bachelor of computer science
          Managed to get a GPA of 3.67)
        </p>
      </a>
    </div>
    <div class="contents align-left">
      <a
        href="https://www.dicoding.com/users/ahlinyaahli/academies"
        target="_blank"
      >
        <h3>Dicoding Academy</h3>
        <h5 class="grey">2020 To 2023</h5>
        <p>(Graduated from coding academy front end developer)</p>
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

h3 {
  line-height: 10px;
}

.contents {
  margin-top: 50px;
}

.content {
  margin-top: 30px;
}

a {
  text-decoration: none;
  color: white;
}

.height-line {
  line-height: normal !important;
}

p {
  line-height: normal !important;
}

.link {
  color: green;
}

.contents {
  margin-top: 1px;
  padding: 10px;
}

.contents:hover {
  background-color: #1b405e;
  border-radius: 8px;
}
</style>