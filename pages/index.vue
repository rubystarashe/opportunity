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
	},
	mounted() {
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
		const recognition = new SpeechRecognition()
		recognition.continuous = true
		recognition.interimResults = true
		recognition.lang = 'ko-KR'
		recognition.start()
    const self = this
		recognition.onresult = function(event) {
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          self.transcript.push(event.results[i][0].transcript)
        } else {
          self.interm = event.results[i][0].transcript
        }
      }
		}
	}
}
</script>
