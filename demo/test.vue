<script setup lang="ts">
import { ref } from 'vue'
const imgArr = ref(new Array(20).fill(0).map((_,i) => `./demo/assets/${i + 1}.jpg`))
</script>


<template>
  <div>
    <h3>Demo:</h3>
    <UWaterfall :columnCount="4" columnGap="10px">
      <img 
        v-for="(item, index) in imgArr" 
        :key="item" 
        :src="'/img/'+ (index + 1) + '.jpg'"
      />
    </UWaterfall>
  </div>
</template>