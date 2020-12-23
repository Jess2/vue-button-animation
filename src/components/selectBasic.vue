<template>
  <div class="custom-select">
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
  </div>
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
      },
      closeAllSelect(elmnt) {
        let x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
          if (elmnt == y[i]) {
            arrNo.push(i)
          } else {
            y[i].classList.remove("select-arrow-active");
          }
        }
        for (i = 0; i < xl; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
          }
        }
      }
    },
    mounted() {
      if (this.selected) {
        this.$emit('select', this.selected);
      } else {
        this.$emit('select', this.options[0]);
      }

      let x, i, j, l, ll, selElmnt, a, b, c;
      x = document.getElementsByClassName("custom-select");
      l = x.length;

      for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;

        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);

        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");

        for (j = 1; j < ll; j++) {
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;

          c.addEventListener("click", () => {
            let y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;

            for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;

                for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                }

                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
          });
          b.appendChild(c);
        }
        x[i].appendChild(b);

        a.addEventListener("click", (e) => {
          e.stopPropagation();
          this.closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });
      }
    },
  }
</script>

<style scoped lang="scss">
  @import '../assets/style/selectBasic.scss';
</style>
