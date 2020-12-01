<template>
  <span :class="classNames"
        class="v-radio basic"
        :style="style">
    <label :for="id">
      <input type="radio"
             :id="id"
             :name="name"
             :value="value"
             :required="required"
             :disabled="disabled"
             :checked="isChecked"
             @change="onChange"
      />
      <span class="radio-btn">
      </span>
      <span class="slot-wrapper">
        <slot></slot>
      </span>
    </label>
  </span>
</template>

<script>
  import setStyle from "@/assets/js/setStyle";
  import setClassName from "@/assets/js/setClassName";
  import createUuid from "@/assets/js/createUuid";

  export default {
    name: 'radio-basic',
    model: {
      prop: 'modelValue',
      event: 'input'
    },
    props: {
      color: {
        type: String,
        default: 'primary',
      },
      size: {
        type: [Number, String],
        default: 'm',
      },
      id: {
        type: String,
        default: function () {
          return 'v-radio--' + createUuid();
        },
      },
      name: {
        type: String,
        default: null,
      },
      value: {
        type: [String, Boolean],
        default: null,
      },
      modelValue: {
        type: String,
        default: null,
      },
      checked: {
        type: Boolean,
        default: false,
      },
      required: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      isChecked () {
        if (this.modelValue === null) {
          return this.checked;
        }
        return this.modelValue === this.value;
      },
      style () {
        return setStyle(this);
      },
      classNames () {
        return setClassName(this);
      },
    },
    methods: {
      onChange() {
        this.toggle();
      },
      toggle() {
        this.$emit('input', this.isChecked ? '' : this.value);
      }
    },
    watch: {
      checked (newVal) {
        if (newVal !== this.isChecked) {
          this.toggle();
        }
      }
    },
    mounted() {
      if (this.checked && !this.isChecked) {
        this.toggle();
      }
    },
  }
</script>

<style scoped lang="scss">
  @import '../assets/style/radioBasic.scss';
</style>
