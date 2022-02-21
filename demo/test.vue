<script setup lang="ts">
import { ref } from 'vue'
const imgArr = ref(new Array(20).fill(0).map((_,i) => `./demo/assets/${i + 1}.jpg`))

</script>


<template>
  <div>
    <h3>Demo:</h3>
    <UWaterfall>
      <img 
        v-for="item in imgArr" 
        :key="item" 
        :src="item"
      />
    </UWaterfall>
  </div>
</template>