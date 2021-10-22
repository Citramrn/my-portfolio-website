<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">
                  APR 2020 -
                </div>
                <div class="caption font-weight-bold green--text">JUL 2021</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Front End Developer</strong>
                <div class="caption mb-2">Dicoding Indonesia</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">
                  JUL 2015 -
                </div>
                <div class="caption font-weight-bold green--text">MAR 2018</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Audio and Video Engineering</strong>
                <div class="caption mb-2">
                  Vocational High School State 1 Blitar
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">
                  APR 2018 -
                </div>
                <div class="caption font-weight-bold green--text">2023</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Bachelor of Computer Science</strong>
                <div class="caption mb-2">
                  Nahdlatul Ulama University Of Blitar
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">Experience</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">
                  JAN 2020 -
                </div>
                <div class="caption font-weight-bold green--text">
                  UNTIL NOW
                </div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Wordpress Designer</strong>
                <div class="caption mb-2">Remote</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">
                  AUG 2021 -
                </div>
                <div class="caption font-weight-bold green--text">OCT 2021</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Front end Developer</strong>
                <div class="caption mb-2">
                  PT Ayo Techno Idea <br />
                  Remote Professional placement
                </div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Design</span>

          <span class="green--text">Skills</span>
        </h2>
        <br />
        <strong>Photoshop</strong>
        <v-progress-linear
          v-model="buffer1"
          :buffer-value="bufferValue"
          color="green"
          height="16"
        ></v-progress-linear>
        <strong>Adobe XD</strong>
        <v-progress-linear
          v-model="buffer2"
          :buffer-value="bufferValue"
          color="green"
          height="16"
        ></v-progress-linear>
        <strong>figma</strong>
        <v-progress-linear
          v-model="buffer3"
          :buffer-value="bufferValue"
          color="green"
          height="16"
        ></v-progress-linear>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Coding</span>
          <span class="green--text">Skills</span>
        </h2>
        <br />
        <strong>VUE</strong>
        <v-progress-linear
          v-model="buffer4"
          :buffer-value="bufferValue"
          color="green"
          height="16"
        ></v-progress-linear>
        <strong>HTML/CSS</strong>
        <v-progress-linear
          v-model="buffer5"
          :buffer-value="bufferValue"
          color="green"
          height="16"
        ></v-progress-linear>
        <strong>JavaScript</strong>
        <v-progress-linear
          v-model="buffer6"
          :buffer-value="bufferValue"
          color="green"
          height="16"
        ></v-progress-linear>
      </v-flex>
      <div class="mt-4 pt-2">
        <v-btn
          href="https://cvrest.com/cv/citramirna"
          target="_blank"
          color="green"
          dark
          large
        >
          Download Resume
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s | Citra Mirna",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Citra Mirna Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Citra Mirna" },
      { property: "og:site_name", content: "Citra Mirna" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://citramrn.github.io" },
    ],
  },
  data() {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      bufferValue: 100,
      interval: 0,
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer1 = 85;
        this.buffer2 = 60;
        this.buffer3 = 80;
        this.buffer4 = 80;
        this.buffer5 = 90;
        this.buffer6 = 70;
      }, 800);
    },
  },
};
</script>
<style >
</style>
