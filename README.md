# Vue Button Animation Components
> This library is collection of Vue single-file components to render animated buttons.

[![Software License](https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square)](https://github.com/JESS2/vue-button-animation/blob/main/LICENSE.md) [![Latest Version on NPM](https://img.shields.io/npm/v/vue-button-animation.svg?style=flat-square)](https://npmjs.com/package/vue-button-animation) [![npm](https://img.shields.io/npm/dt/vue-button-animation.svg?style=flat-square)](https://www.npmjs.com/package/vue-button-animation)

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
* **button**
    ```vue
    <button-basic>Button</button-basic>
    ```
* **a**
    ```vue
    <a-basic>Button</a-basic>
    ```
* **radio**
    ```html
    <radio-basic value="dog" v-model="selectedAnimal">
      Dog
    </radio-basic>
    <radio-basic value="cat" v-model="selectedAnimal">
      Cat
    </radio-basic>
    <radio-basic value="rabbit" v-model="selectedAnimal">
      Rabbit
    </radio-basic>
    ```
* **checkbox**
    ```html
    <checkbox-basic value="1" v-model="selectedIds">
      Id-1
    </checkbox-basic>
    <checkbox-basic value="2" v-model="selectedIds">
      Id-2
    </checkbox-basic>
    <br>
    <checkbox-basic value="3" v-model="selectedIds">
      Id-3
    </checkbox-basic>
    ```
* **file**
    ```html
    <file-basic @change="onChangeFile">Select File</file-basic>
    ```
<br>

## Components
* **button**  
    It acts as the `button` element. So it performs the basic attributes of `button` element like `disabled`.

    | Name           | Available Props                                                          |
    |----------------|--------------------------------------------------------------------------|
    | button-basic   | color, size, weight, width, height, loadingDot, circle, square           |
    | button-press   | color, size, weight, width, height, loadingDot                           |
    | button-neon    | size, weight, width, height, loadingDot, hueRotate                       |

* **a**  
    It acts as the `a` element. So it performs the basic attributes of `a` element like `href`.

    | Name           | Available Props                                                          |
    |----------------|--------------------------------------------------------------------------|
    | a-basic        | color, size, weight, width, height, disabled, loadingDot, circle, square |
    | a-press        | color, size, weight, width, height, disabled, loadingDot                 |
    | a-neon         | size, weight, width, height, disabled, loadingDot, hueRotate             |

* **radio**  
    It acts as the `input type="radio"`.

    | Name           | Available Props                                                          |
    |----------------|--------------------------------------------------------------------------|
    | radio-basic    | color, size, id, name, value, checked, required, disabled                |
    
* **checkbox**  
    It acts as the `input type="checkbox"`.

    | Name           | Available Props                                                          |
    |----------------|--------------------------------------------------------------------------|
    | checkbox-basic | color, size, id, name, value, checked, required, disabled                |
    
* **file**  
    It acts as the `input type="file"`.

    | Name           | Available Props                                                          |
    |----------------|--------------------------------------------------------------------------|
    | checkbox-basic | color, size, id, name, accept, multiple, weight, width, height, disabled, loadingDot, circle, square |

<br><br>

## Props
| Prop          | Type (Range)                                                              | Default value |
|---------------|---------------------------------------------------------------------------|---------------|
| color         | **String** ([Predefined Colors](#predefined-colors))                      | primary       |
| size          | **String** (`ss`, `s`, `m`, `l`) or **Number**                            | m             |
| weight        | **String** (normal, bold, bolder, lighter, ...) or **Number** (100 ~ 900) | 800           |
| width         | **String** or **Number**                                                  | N/A           |
| height        | **String** or **Number**                                                  | N/A           |
| disabled      | **Boolean**                                                               | false         |
| loadingDot    | **Boolean**                                                               | false         |
| hueRotate     | **String** or **Number**                                                  | 0             |
| circle        | **String** or **Number**                                                  | N/A           |
| square        | **String** or **Number**                                                  | N/A           |
| id            | **String**                                                                | v-{component type}--{uuid}|
| name          | **String**                                                                | N/A           |
| value         | **String** or **Boolean**                                                 | N/A           |
| checked       | **Boolean**                                                               | false         |
| required      | **Boolean**                                                               | false         |
| accept        | **String**                                                                | *             |
| multiple      | **Boolean**                                                               | false         |


* **`color`** - You can set button's color to a [Predefined color](#predefined-colors)
    And if you want to set button's color to another color, you can customize the class or change the style. By default, this is `primary`.

    Example:
    ```html
    <button-basic>Button</button-basic>  <!-- By default, this is `primary`. -->
    <button-basic color="secondary">Button</button-basic>
    <button-basic color="white-border-3">Button</button-basic>
    ```
<br>

* **`size`** - It means the font size or the size of button. If you enter a number or a string excluding unit, the unit is set to `px`.
    For Example, if you enter `size="20"` or `:size="20"`, the size is set to `20px`.  
    If you enter a specific unit, the font size is set to that unit.
    For Example, If you enter `size="10em"`, `size="10rem"`, `size="10px"` or `size="10pt"`, the each size is set to `10em`, `10rem`, `10px` or `10pt`.  
    If you enter a `ss`, `s`, `m`, `l` or `basic`, the size is set to a Predefined size. By default, this is `m`.
    * `ss` : 0.75rem
    * `s` : 0.875rem
    * `m` : 1rem
    * `l` : 1.5rem
    * `basic` : `font-size` is 1rem, `min-width` is 120px and `height` is 40px.
        
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
    For example, you can enter `weight="400"` or `:weight="400"`. Also you can enter a basic property like 'bold'. By default, this is `800`.
    
    Example:
    ```html
    <button-basic>Button</button-basic>  <!-- By default, this is `800`. -->
    <button-basic weight="400">Button</button-basic>
    <button-basic :weight="400">Button</button-basic>
    <button-basic weight="bold">Button</button-basic>
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
  
<br>
  
* **`hueRotate`** - You can use this prop to filter the color of the button. By default, this is `0`.
    You can set the hueRotate between 0 and 359, regardless of whether the type of value is string or number.
    If you want to know about this feature, please visit [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate()).

    Example:
    ```html
    <button-neon :hueRotate="180">BUTTON</button-neon>
    <button-neon hueRotate="180">BUTTON</button-neon>
    <button-neon hueRotate="270">BUTTON</button-neon>
    <a-neon :hueRotate="180">LINK</a-neon>
    <a-neon hueRotate="180">LINK</a-neon>
    <a-neon hueRotate="270">LINK</a-neon>
    ```
  
<br>

* **`circle` / `square`** - You can create circle or square buttons by using this prop.
    If you enter a number or a string excluding unit, the unit is set to `px`.
    If you enter a specific unit, the size of button is set to that unit.
    If the length of button's text data is longer than the button size, it is hidden.
    
    Example:
    ```html
    <button-basic circle="10em">Button</button-basic>
    <button-basic :circle="100">Button</button-basic>
    <button-basic circle="100">Button</button-basic>
    <button-basic sqaure="10em">Button</button-basic>
    <button-basic :square="100">Button</button-basic>
    <button-basic square="100">Button</button-basic>
    ```

<br><br>

## Predefined Colors

* **`button-basic`**, **`a-basic`**
    * primary, secondary, success, danger, warning, info, light, dark,
    blue, green, orange, yellow, red, white, black, white-blue, file, cyan, navy, lightblue, lightsalmon, lightgray
    * white-border-\[1\~5\], white-border-blue-\[1\~5\], gray-border-\[1\~5\], blue-border-\[1\~5\], green-border-\[1\~5\], orange-border-\[1\~5\], yellow-border-\[1\~5\]

<br>

* **`button-press`**, **`a-press`**
    * primary, secondary, success, danger, warning, info, light, dark,
    blue, green, orange, yellow, red, white, black, white-blue, file, cyan, navy, lightblue, lightsalmon, lightgray
    * ~~white-border-\[1\~5\], white-border-blue-\[1\~5\], gray-border-\[1\~5\], blue-border-\[1\~5\], green-border-\[1\~5\], orange-border-\[1\~5\], yellow-border-\[1\~5\]~~

<br>

* **`radio-basic`**, **`checkbox-basic`**
    * primary, secondary, success, danger, warning, info, light, dark,
    blue, green, orange, yellow, red, white, black, ~~white-blue, file,~~ cyan, navy, lightblue, lightsalmon, lightgray
    * ~~white-border-\[1\~5\], white-border-blue-\[1\~5\], gray-border-\[1\~5\], blue-border-\[1\~5\], green-border-\[1\~5\], orange-border-\[1\~5\], yellow-border-\[1\~5\]~~

<br>

## Events
* **`<button>`**, **`<a>`**

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

## Tips
* **Containing Icon** - If you want to render a button containing some icons, I recommend you to use the [vue-material-design-icon](https://www.npmjs.com/package/vue-material-design-icons) library.
    the color of icon inside a button inherit the button's color even when button's status is `hover`.
     
    Example:
    ```html
    <button-basic color="yellow-border-1">
    <menu-icon />
       Button
    </button-basic>
    
    <a-basic>
      Button
    <arrow-icon />
    </a-basic>
    ```

<br><br>

## License
[MIT](https://github.com/JESS2/vue-button-animation/blob/main/LICENSE.md)

<br>
