<template>
  <a :class="classNames"
     class="v-btn press"
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
    <span class="slot-wrapper">
      <slot></slot>
    </span>
    <span v-if="loadingDot" class="loader--dot"></span>
  </a>
</template>

<script>
  import setClassName from "../assets/js/setClassName";
  import setStyle from "../assets/js/setStyle";

  export default {
    name: 'a-press',
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
      disabled: {
        type: Boolean,
        default: false
      },
      loadingDot: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      style () {
        return setStyle(this);
      },
      classNames () {
        return setClassName(this);
      },
    },
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
  }
</script>

<style scoped lang="scss">
  @import '../assets/style/buttonPress';
</style>
