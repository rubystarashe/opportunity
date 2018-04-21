<template>
<section>
  <div id="contact_area">
    <icons-v/>
    <map-v/>
  </div>
</section>
</template>

<script>
import iconsV from './icons'
import mapV from './map'

export default {
  components: {
    iconsV,
    mapV
  }
}
</script>

<style lang="scss" scoped>
#contact_area {
  height: 70vh;
}
</style>