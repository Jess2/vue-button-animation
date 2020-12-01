<template>
  <span :class="classNames"
        class="v-checkbox basic"
        :style="style">
    <label :for="id">
      <input type="checkbox"
             :id="id"
             :name="name"
             :value="value"
             :required="required"
             :disabled="disabled"
             :checked="isChecked"
             @change="onChange"
      />
      <span class="checkbox-btn">
        <svg viewBox="0 0 16 16">
            <path fill="none" d="M1.7,7.8l3.8,3.4l9-8.8"></path>
        </svg>
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
  name: 'checkbox-basic',
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
        return 'v-checkbox--' + createUuid();
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
      type: Array,
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
    isChecked() {
      if (this.modelValue === null) {
        return this.checked;
      }
      return Array.isArray(this.modelValue) ? this.modelValue.indexOf(this.value) !== -1 : false;
    },
    style() {
      return setStyle(this);
    },
    classNames() {
      return setClassName(this);
    },
  },
  methods: {
    onChange() {
      this.toggle();
    },
    toggle() {
      let checkedValues =  Array.isArray(this.modelValue) ? [...this.modelValue] : [];

      if (this.isChecked) {
        checkedValues.splice(checkedValues.indexOf(this.value), 1);
      } else {
        checkedValues.push(this.value);
      }

      this.$emit('input', checkedValues);
    }
  },
  watch: {
    checked(newVal) {
      if (newVal !== this.isChecked) {
        this.toggle();
      }
    },
  },
  mounted() {
    if (this.checked && !this.isChecked) {
      this.toggle();
    }
  },
}
</script>

<style scoped lang="scss">
@import '../assets/style/checkboxBasic.scss';
</style>
