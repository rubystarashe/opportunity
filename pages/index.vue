<template>
	<section>
		<div>hello world</div>
    {{interm}}{{transcript}}
	</section>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			recognition: null,
      interm: '',
			transcript: [],
			translated: []
		}
	},
	mounted() {
		if (
      !('webkitSpeechRecognition' in window) &&
      !('SpeechRecognition' in window)
    ) {
      console.log('이 브라우저는 speech to text를 지원하지 않음')
    }
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
		const recognition = new SpeechRecognition()
		recognition.continuous = true
		recognition.interimResults = true
		recognition.lang = 'ko-KR'
		recognition.start()
    const self = this
		recognition.onresult = function(event) {
			let interm = ''
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          self.transcript.push(event.results[i][0].transcript)
					axios.post('https://openapi.naver.com/v1/papago/n2mt', {
						form: {'source':'ko', 'target':'en', 'text':event.results[i][0].transcript},
       			headers: {'X-Naver-Client-Id':'x0Od2v52U4vdLZDevuKq', 'X-Naver-Client-Secret': 'ZI28UTCJY3'}
					}).then(r => console.log(r))
        } else {
          interm += event.results[i][0].transcript
        }
      }
			self.interm = interm
		}
	}
}
</script>
