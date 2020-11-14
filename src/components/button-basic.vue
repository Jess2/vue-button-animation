<template>
    <button :class="[`v-btn--color-${color}`, `v-btn--size-${size}`]" class="v-btn v-btn--basic">
      <span>
        <slot></slot>
      </span>
    </button>
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
        type: [Number, String],
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
  @import '../assets/style/button-basic.scss';
</style>
