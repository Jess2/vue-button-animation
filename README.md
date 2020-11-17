# vue-button-animation
Animated Buttons for Vue.js

<br>

## Installation
Using NPM:
```bash
$ npm i vue-button-animation
```

<br>

## Usage
In your components template:
```vue
<button-basic>Button</button-basic>
<button-basic @click="onClick">Button</button-basic>
<button-basic color="primary" size="ss">Button</button-basic>
<button-basic color="secondary" size="s">Button</button-basic>
<button-basic color="success" size="m">Button</button-basic>
<button-basic color="danger" size="l">Button</button-basic>
<button-basic color="info" size="30">Button</button-basic>
<button-basic color="dark" size="256">Button</button-basic>
<button-basic color="dark" size="20em">Button</button-basic>
```

In your main.js file:
```js
import VueButtonAnimation from 'vue-button-animation'

Vue.use(VueButtonAnimation);
```

<br>

## Available Props
| Prop     | Type (Range) | Default value |
|----------|--------------|---------------|
| color    | **String** ('primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link', 'blue', 'green', 'orange', 'yellow', 'red', 'white', 'black', 'white-blue', 'file', 'cyan', 'navy', 'lightblue', 'white-border-{number(1\~5)}', 'white-border-blue-{number(1\~5)}', 'gray-border-{number(1\~5)}', 'blue-border-{number(1\~5)}', 'green-border-{number(1\~5)}', 'orange-border-{number(1\~5)}', 'yellow-border-{number(1\~5)}') | 'primary' |
| size     | **String** ('ss', 's', 'm', 'l') or **Number** | 'm' |
| weight   | **String** or **Number** (100 ~ 800) | 800 |
| width    | **String** or **Number** | N/A |
| height   | **String** or **Number** | N/A |

* **color**
    * It means the button's color theme.
    * You can set button's color to a predetermined color.
    * If you want to set button's color to another color, you can customize the class or change the style.
    * If you do not enter a color prop, the color defaults to `primary`.
* **size**
    * It means the font size.
    * If you do not enter a unit or do enter a number, the unit defaults to `px`.
        * For Example, if you enter `size="20"` or `:size="20"`, the size is set to `20px`.
    * If you enter a specific unit, the size is set to that unit.
        * For Example, If you enter `size="10em"`, `size="10rem"`, `size="10px"` or `size="10pt"`, the each size is set to `size="10em"`, `size="10rem"`, `size="10px"` or `size="10pt"`.
    * If you enter a `ss`, `s`, `m` or `l`, the size is set to a predetermined size.
        * `ss` : 0.75rem
        * `s` : 0.875rem
        * `m` : 1rem
        * `l` : 1.5rem
    * If you do not enter a size prop, the size defaults to `m`.
* **weight**
    * It means the font weight.
    * You can set the font weight between 100 and 800, regardless of whether the type of value is string or number.
        * For example, you can enter `weight="400"` or `:weight="400"`
    * If you do not enter a weight prop, the size defaults to `800`.
* **width**
    * It means the button's min width.
    * If you do not enter a unit or do enter a number, the unit defaults to `px`.
    * If you enter a specific unit, the width is set to that unit.
* **height**
    * It means the button's min height.
    * If you do not enter a unit or do enter a number, the unit defaults to `px`.
    * If you enter a specific unit, the height is set to that unit.

<br><br>

## Available Events
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
