<template>
  <div class="container">
    <div class="styleInTag" v-html="currentStyleInTag"></div>
    <div class="styleReader" ref="styleReader">
      <pre v-html="currentStyle"></pre>
    </div>
    <div class="graph"></div>
  </div>
</template>

<script>
  import Prism from 'prismjs'
  import {StyleCode} from '@/constant'
  import Reader from "@/utils/Reader";

  export default {
    name: "StyleReader",
    data() {
      return {
        currentStyle: '',
        currentStyleInTag: '',
        reader: new Reader(StyleCode, 50)
      }
    },
    created() {
      console.log('StyleReader created')
      this.makeResume()
    },
    methods: {
      async makeResume() {
        await this.progressivelyShowStyle()
      },
      progressivelyShowStyle() {
        return this.reader.read((readData) => {
          this.currentStyle = Prism.highlight(readData, Prism.languages.css)
          this.currentStyleInTag = `<style>${readData}</style>`
          this.goBottom()
        })
      },
      goBottom() {
        this.$refs.styleReader && (this.$refs.styleReader.scrollTop = 100000)
      }
    }
  }
</script>

<style scoped>
  .container {
    position: relative;
    display: flex;
    align-items: center;
  }

  @media (max-width: 700px) {
    .container {
      flex-direction: column;
    }
  }

  .styleReader {
    position: relative;
  }

  .graph {
    position: relative;
  }

  .styleInTag {
    display: none;
  }
</style>
