<template>
<section>
  <div id="curriculum_area">
    <top-v/>
    <bottom-v/>
  </div>
</section>
</template>

<script>
import topV from './top'
import bottomV from './bottom'

export default {
  components: {
    topV,
    bottomV
  }
}
</script>

<style lang="scss" scoped>
#curriculum_area {
  height: 160vh;
}
</style>