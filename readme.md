## purpose

基于Vue3.x的瀑布流布局组件

## Usage

```shell
$ npm install uwaterfall
```

```js
import { createApp } from 'vue'
import App from './App.vue'

import UWaterfall from 'uwaterfall'  //import component
import 'uwaterfall/dist/style.css'  //import style

createApp(App).use(UWaterfall).mount('#app')
```

```vue
<template>
  <UWaterfall :columnCount="4" columnGap="10px">
    <img src="xxx">
    <img src="xxx">
    <img src="xxx">
    <img src="xxx">
    <img src="xxx">
  </UWaterfall>
</template>
```

效果预览: [Demo](https://peterroe.github.io/UWaterfall/)

## Props

| props | usage |
| ----- | ----- |
| `columnCount` | 列数 |
| `columnGap` | 间距 |