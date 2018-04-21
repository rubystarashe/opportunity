<template>
<section>
  <div id="footer_contents_area">
    <aboutus-v/>
    <otherprojects-v/>
  </div>
</section>
</template>

<script>
import aboutusV from './aboutus'
import otherprojectsV from './otherprojects'

export default {
  components: {
    aboutusV,
    otherprojectsV
  }
}
</script>

<style lang="scss" scoped>
#footer_contents_area {
  background: rgba(255, 70, 70, 0.3);
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>