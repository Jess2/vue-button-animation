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
| color    | String ('primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link') | 'primary' |
| size     | String ('ss', 's', 'm', 'l') or Number (1 ~ 256(px)) | 'm' |

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
