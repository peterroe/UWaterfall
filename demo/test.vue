<script setup lang="ts">
import { ref } from 'vue'
const imgArr = ref(new Array(20).fill(0).map((_,i) => `./UWaterfall/img/${i + 1}.jpg`))
import {UWaterfall} from '../dist/uwaterfall.es'

</script>


<template>
  <div>
    <h3>Demo:</h3>
    <UWaterfall :columnCount="4" columnGap="10px">
      <img 
        v-for="item in imgArr" 
        :key="item" 
        :src="item"
      />
    </UWaterfall>
  </div>
</template>