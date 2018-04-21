<template>
<section>
  <div id="intro_area">
    <background-v/>
    <first-v/>
  </div>
</section>
</template>

<script>
import backgroundV from './background'
import firstV from './first'

export default {
  components: {
    backgroundV,
    firstV
  }
}
</script>

<style lang="scss" scoped>
#intro_area {
  position: relative;
  height: 90vh;
}
</style>