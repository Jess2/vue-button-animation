<template>
  <button :class="[`v-btn--color-${color}`, `v-btn--size-${size}`]"
          class="v-btn v-btn--basic"
          :style="style"
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
    name: 'button-basic',
    props: {
      color: {
        type: String,
        default: 'primary',
      },
      size: {
        type: [Number, String],
        default: 'm',
      },
      weight: {
        type: [Number, String],
        default: 800,
      },
      width: {
        type: [Number, String],
        default: null,
      },
      height: {
        type: [Number, String],
        default: null,
      },
    },
    data () {
      return {}
    },
    computed: {
      style () {
        let style = {
          'fontSize': this.changeUnit(this.size),
          'fontWeight': this.weight,
        };

        if (this.width) {
          style.minWidth = this.changeUnit(this.width);
        }

        if (this.height) {
          style.minHeight = this.changeUnit(this.height);
        }

        return style;
      }
    },
    mounted () {
    },
    watch: {},
    methods: {
      changeUnit (value) {
        if (typeof value === 'number' || !isNaN(Number(value))) {
          return `${value}px`;
        } else if (typeof value === 'string') {
          return value;
        }
      },
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
  @import '../assets/style/basic';
</style>
