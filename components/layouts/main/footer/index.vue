<template>
<section>
  <div id="footer_area">
    <contents-v/>
    <copyright-v/>
  </div>
</section>
</template>

<script>
import contentsV from './contents'
import copyrightV from './copyright'

export default {
  components: {
    contentsV,
    copyrightV
  }
}
</script>

<style lang="scss" scoped>
#footer_area {
  background: rgba(255, 70, 70, 0.3);
  height: 20vh;
}
</style>