<template>
<section>
  <div id="study_area">
    <icons-v/>
    <title-v/>
    <graph-v/>
  </div>
</section>
</template>

<script>
import iconsV from './icons'
import titleV from './title'
import graphV from './graph'

export default {
  components: {
    iconsV,
    titleV,
    graphV
  }
}
</script>

<style lang="scss" scoped>
#study_area {
  background: rgba(250, 187, 70, 0.3);
  height: 80vh;
}
</style>