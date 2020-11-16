<template>
  <button :class="[`v-btn--color-${color}`, `v-btn--size-${size}`]"
          class="v-btn v-btn--maxst"
          @click="onClick"
          @dblclick="onDblclick"
          @mousedown="onMousedown"
          @mouseup="onMouseup"
          @mouseenter="onMouseenter"
          @mouseleave="onMouseleave"
          @mousemove="onMousemove"
          @mouseout="onMouseout"
          @mouseover="onMouseover">
      <span>
        <slot></slot>
      </span>
  </button>
</template>

<script>
  export default {
    name: 'button-maxst',
    props: {
      color: {
        type: String,
        default: 'maxwork',
      },
      size: {
        type: [Number, String],
        default: 'm',
      }
    },
    data () {
      return {}
    },
    computed: {},
    mounted () {
    },
    watch: {},
    methods: {
      onClick (e) {
        this.$emit('click', e);
      },
      onDblclick (e) {
        this.$emit('dblclick', e);
      },
      onMousedown (e) {
        this.$emit('mousedown', e);
      },
      onMouseup (e) {
        this.$emit('mouseup', e);
      },
      onMouseenter (e) {
        this.$emit('mouseenter', e);
      },
      onMouseleave (e) {
        this.$emit('mouseleave', e);
      },
      onMousemove (e) {
        this.$emit('mousemove', e);
      },
      onMouseout (e) {
        this.$emit('mouseout', e);
      },
      onMouseover (e) {
        this.$emit('mouseover', e);
      },
    },
    components: {}
  }
</script>

<style scoped lang="scss">
  @import '../assets/style/buttonBasic';
</style>
