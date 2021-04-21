# vue-cut
`vue-cut` is a plugin for Vue component.<br>
This plugin support for adjust the text length of some element.<br>

## How to use
### 1. Install
#### npm
```
> npm install vue-cut
```

#### yarn
```
> yarn add vue-cut
```

### 2. Import and use
```
import Vue from 'vue';
import VueCut from 'vue-cut';

Vue.use(VueCut);
```

### 3. Attach v-cut directive
Attach `v-cut` directive to any tag which has text contents.
Pass the number value which adjust length to `len`.
And pass the string value to `trail` if you add some text at trail of contents.

```
<template>
  <div v-cut="{ len: 50, trail: '...' }">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
</template>
```

## License
Code released under [MIT license](LICENSE).
