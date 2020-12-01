<template>
  <select :class="classNames"
          class="v-select basic"
          :style="style"
          @change="onChange">
    <option v-for="option in options"
            :value="option"
            :key="option"
            :selected="isSelected(option)">
      {{ option }}
    </option>
  </select>
</template>

<script>
  import setClassName from "../assets/js/setClassName";
  import setStyle from "../assets/js/setStyle";

  export default {
    name: 'select-basic',
    model: {
      prop: 'modelValue',
      event: 'select'
    },
    props: {
      options: {
        type: Array,
        default: null,
      },
      modelValue: {
        type: String,
        default: null,
      },
      selected: {
        type: String,
        default: null,
      },
      color: {
        type: String,
        default: 'primary',
      },
      size: {
        type: [Number, String],
        default: 'm',
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
      onChange (e) {
        this.$emit('select', e.target.value);
      },
      isSelected (option) {
        if (this.selected) {
          return option === this.selected;
        } else {
          return option === this.options[0];
        }
      }
    },
    mounted() {
      if (this.selected) {
        this.$emit('select', this.selected);
      } else {
        this.$emit('select', this.options[0]);
      }
    },
  }
</script>

<style scoped lang="scss">
  @import '../assets/style/buttonBasic.scss';
</style>
