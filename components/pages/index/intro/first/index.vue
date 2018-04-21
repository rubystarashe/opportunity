<template>
<section>
  <div id="intro_first_area">
    <logo-v/>
    <description-v/>
    <apply-v/>
  </div>
</section>
</template>

<script>
import logoV from './logo'
import descriptionV from './description'
import applyV from './apply'

export default {
  components: {
    logoV,
    descriptionV,
    applyV
  }
}
</script>

<style lang="scss" scoped>
#intro_first_area {
  position: absolute;
  height: 60vh;
  left: 0;
  right: 0;
  bottom: 0;
  top: 10vh;
  margin: auto;
}
</style>