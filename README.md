# vue-button-animation
> Animated Buttons for Vue.js

## Installation
Using NPM:
```bash
$ npm i vue-button-animation
```

## Usage
In your components template:
```vue
<button-basic color="primary" size="ss">Button</button-basic>
<button-basic color="secondary" size="s">Button</button-basic>
<button-basic color="success" size="m">Button</button-basic>
<button-basic color="danger" size="l">Button</button-basic>
```

In your main.js file:
```js
import VueButtonAnimation from 'vue-button-animation'

Vue.use(VueDragDrop);
Vue.use(VueI18n);
Vue.use(VueButtonAnimation);
```

## Available Props
| Prop     | type (range) | default value |
|----------|--------------|---------------|
| color    | String ('primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link') | 'primary' |
| size     | String ('ss', 's', 'm', 'l') | 's' |

## License
[MIT](https://opensource.org/licenses/MIT)
