<template>
		<span style="display: inline-block;">
			<button :class="[color, size]" class="btn">
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
