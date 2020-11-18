# Vue Button Animation Components
This library is collection of Vue single-file components to render animated buttons.

<br>

## Installation
Using NPM:
```bash
$ npm i vue-button-animation
```

<br>

## Demo
[https://codesandbox.io/s/vue-button-animation-yb9tq](https://codesandbox.io/s/vue-button-animation-yb9tq?file=/src/App.vue)

<br>

## Usage
In your main.js file:
```js
import VueButtonAnimation from 'vue-button-animation'

Vue.use(VueButtonAnimation);
```
<br>

In your components template:
```vue
<button-basic>Button</button-basic>
<a-basic>Button</a-basic>
```

<br>

## Buttons
| Name         | Available Props | Description   |
|--------------|-----------------|---------------|
| button-basic | color, size, weight, width, height, loadingDot | It acts as the `button` element. So it performs the basic attributes of `button` element like `disabled`. |
| a-basic      | color, size, weight, width, height, disabled, loadingDot | It acts as the `a` element. So it performs the basic attributes of `a` element like `href`. |

<br><br>

## Props
| Prop     | Type (Range) | Default value |
|----------|--------------|---------------|
| color    | **String** (`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `link`, `blue`, `green`, `orange`, `yellow`, `red`, `white`, `black`, `white-blue`, `file`, `cyan`, `navy`, `lightblue`, `white-border-[1~5]`, `white-border-blue-[1~5]`, `gray-border-[1~5]}`, `blue-border-[1~5]}`, `green-border-[1~5]}`, `orange-border-[1~5]}`, `yellow-border-[1~5]}`) | primary |
| size     | **String** (`ss`, `s`, `m`, `l`) or **Number** | m |
| weight   | **String** or **Number** (100 ~ 900) | 800 |
| width    | **String** or **Number** | N/A |
| height   | **String** or **Number** | N/A |
| disabled | **Boolean** | false |
| loadingDot | **Boolean** | false |

* **`color`** - You can set button's color to a predetermined color. 
    And if you want to set button's color to another color, you can customize the class or change the style. By default, this is `primary`.

    Example:
    ```html
      <button-basic>Button</button-basic>  <!-- By default, this is `primary`. -->
      <button-basic color="secondary">Button</button-basic>
      <button-basic color="white-border-3">Button</button-basic>
    ```
<br>

* **`size`** - It means the font size. If you enter a number or a string excluding unit, the unit is set to `px`.
    For Example, if you enter `size="20"` or `:size="20"`, the size is set to `20px`.  
    If you enter a specific unit, the font size is set to that unit.
    For Example, If you enter `size="10em"`, `size="10rem"`, `size="10px"` or `size="10pt"`, the each size is set to `10em`, `10rem`, `10px` or `10pt`.  
    If you enter a `ss`, `s`, `m` or `l`, the size is set to a predetermined size. By default, this is `m`.
    * `ss` : 0.75rem
    * `s` : 0.875rem
    * `m` : 1rem
    * `l` : 1.5rem
        
    Example:
    ```html
      <button-basic>Button</button-basic> <!-- By default, this is `m` -->
      <button-basic size="20">Button</button-basic> <!-- 20px -->
      <button-basic :size="20">Button</button-basic> <!-- 20px -->
      <button-basic size="20px">Button</button-basic> <!-- 20px -->
      <button-basic size="2em">Button</button-basic> <!-- 2em -->
      <button-basic size="1rem">Button</button-basic> <!-- 1rem -->
      <button-basic size="s">Button</button-basic> <!-- 0.875rem -->
    ```
<br>

* **`weight`** - You can set the font weight between 100 and 900, regardless of whether the type of value is string or number.
    For example, you can enter `weight="400"` or `:weight="400"`. By default, this is `800`.
    
    Example:
    ```html
      <button-basic>Button</button-basic>  <!-- By default, this is `800`. -->
      <button-basic weight="400">Button</button-basic>
      <button-basic :weight="400">Button</button-basic>
    ```
<br>

* **`width`** - It means the button's min width.
    If you enter a number or a string excluding unit, the unit is set to `px`.
    If you enter a specific unit, the width is set to that unit.
    If you do not enter any width prop, the width is automatically calculated based on the length of button's text data and predefined padding value.
    
    Example:
    ```html
      <button-basic>Button</button-basic> <!-- The width is automatically calculated -->
      <button-basic width="150">Button</button-basic> <!-- 150px -->
      <button-basic :width="150">Button</button-basic> <!-- 150px -->
      <button-basic width="150px">Button</button-basic> <!-- 150px -->
      <button-basic width="20em">Button</button-basic> <!-- 20em -->
      <button-basic width="30rem">Button</button-basic> <!-- 30rem -->
    ```
<br>

* **`height`** - It means the button's height.
    If you enter a number or a string excluding unit, the unit is set to `px`.
    If you enter a specific unit, the height is set to that unit.
    If you do not enter any height prop, the height is automatically calculated based on the length of button's text data and predefined padding value.
    
    Example:
    ```html
      <button-basic>Button</button-basic> <!-- The height is automatically calculated -->
      <button-basic height="40">Button</button-basic> <!-- 40px -->
      <button-basic :height="40">Button</button-basic> <!-- 40px -->
      <button-basic height="40px">Button</button-basic> <!-- 40px -->
      <button-basic height="3em">Button</button-basic> <!-- 3em -->
      <button-basic height="4rem">Button</button-basic> <!-- 4rem -->
    ```
<br>

* **`disabled`** - If you want to set status of button to `disabled`, you can use `disabled` attribute in `button` element and `disabled` prop in `a` element.
                  
    Example:
    ```html
      <button-basic disabled>Button</button-basic>
      <button-basic :disabled="true">Button</button-basic>
      <button-basic :disabled="false">Button</button-basic>
      <a-basic disabled>Link</a-basic>
      <a-basic :disabled="true">Link</a-basic>
      <a-basic :disabled="false">Link</a-basic>
    ```
<br>

* **`loadingDot`** - If you want to set status of button to loading, you can use `loadingDot` prop.
                  
    Example:
    ```html
      <button-basic loadingDot>Button</button-basic>
      <button-basic :loadingDot="true">Button</button-basic>
      <button-basic :loadingDot="false">Button</button-basic>
      <a-basic loadingDot>Link</a-basic>
      <a-basic :loadingDot="true">Link</a-basic>
      <a-basic :loadingDot="false">Link</a-basic>
    ```

<br><br>

## Events
| Event      | Description |
|------------|-------------|
| click      | The event occurs when the user clicks on an element |
| dblclick   | The event occurs when the user double-clicks on an element |
| mousedown  | The event occurs when the user presses a mouse button over an element |
| mouseenter | The event occurs when the pointer is moved onto an element |
| mouseleave | The event occurs when the pointer is moved out of an element |
| mousemove  | The event occurs when the pointer is moving while it is over an element |
| mouseout   | The event occurs when a user moves the mouse pointer out of an element, or out of one of its children |
| mouseover  | The event occurs when the pointer is moved onto an element, or onto one of its children |
| mouseup    | The event occurs when a user releases a mouse button over an element |

<br><br>

## License
[MIT](https://opensource.org/licenses/MIT)

<br>
