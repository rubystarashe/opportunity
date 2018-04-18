<template>
	<section>
		<div>hello world</div>
    {{interm}}{{transcript}}
	</section>
</template>

<script>
export default {
	data() {
		return {
			recognition: null,
      interm: '',
			transcript: []
		}
	}
}
</script>
