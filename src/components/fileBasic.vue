<template>
  <form method="post"
        enctype="multipart/form-data">
    <label :for='id'
           :class="classNames"
           class="v-file basic"
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
    </label>
    <input type="file"
           :accept="accept"
           :multiple="multiple"
           :name="name"
           :id="id"
           @change="onChangeFile" />
  </form>
</template>

<script>
  import setClassName from "../assets/js/setClassName";
  import setStyle from "../assets/js/setStyle";
  import createUuid from "@/assets/js/createUuid";

  export default {
    name: 'file-basic',
    props: {
      id: {
        type: String,
        default: function () {
          return 'v-file--' + createUuid();
        },
      },
      name: {
        type: String,
        default: null,
      },
      accept: {
        type: String,
        default: '*',
      },
      multiple: {
        type: Boolean,
        default: false,
      },
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
      circle: {
        type: [Number, String],
        default: null,
      },
      square: {
        type: [Number, String],
        default: null,
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
      onChangeFile (e) {
        this.$emit('change', e);
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
  }
</script>

<style scoped lang="scss">
  @import '../assets/style/buttonBasic.scss';
</style>
