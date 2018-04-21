<template>
	<section>
		<intro-v/>
		<study-v/>
		<curriculum-v/>
		<profile-v/>
		<contact-v/>
		<menu-v/>
	</section>
</template>

<script>
import introV from '~/components/pages/index/intro'
import studyV from '~/components/pages/index/study'
import curriculumV from '~/components/pages/index/curriculum'
import profileV from '~/components/pages/index/profile'
import contactV from '~/components/pages/index/contact'
import menuV from '~/components/pages/index/menu'

export default {
	layout: 'main',
	components: {
		introV,
		studyV,
		curriculumV,
		profileV,
		contactV,
		menuV
	}
}
</script>
