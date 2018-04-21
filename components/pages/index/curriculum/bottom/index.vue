<template>
<section>
  <div id="curriculum_bottom_area">
    Curriculum Bottom Area
    <footer-v/>
  </div>
</section>
</template>

<script>
import footerV from './footer'

export default {
  components: {
    footerV
  }
}
</script>

<style lang="scss" scoped>
#curriculum_bottom_area {
  background: rgba(208, 70, 250, 0.3);
  height: 80vh;
}
</style>