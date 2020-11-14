<template>
		<span style="display: inline-block;">
			<button :class="[`v-btn--color-${color}`, `v-btn--size-${size}`]" class="v-btn v-button-basic">
				<span><slot></slot></span>
			</button>
		</span>
</template>

<script>
  export default {
    name: 'button-basic',
    props: {
      color: {
        type: String,
				default: 'primary',
      },
      size: {
        type: String,
        default: 's',
      }
    },
    data () {
      return {}
    },
    computed: {},
    mounted () {
    },
    watch: {},
    methods: {},
    components: {}
  }
</script>

<style scoped lang="scss">
</style>
