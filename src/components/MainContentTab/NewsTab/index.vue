<template>
  <div class="space-y-4">
    <div v-for="(item, idx) in newsData" :key="idx" class="flex">
      <img :src="item.img" alt="" />
      <div class="ml-4 flex flex-col justify-between">
        <span class="font-YoungSerif text-xl text-orange-950 block max-w-[600px]"
          ><a href="">{{ item.title }}</a></span
        >
        <div class="flex flex-col">
          <span class="text-sm text-orange-950">{{ item.author }}</span>
          <span class="text-sm text-orange-950">{{ item.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newsData from './newsdata.js'
export default {
  name: 'NewsTab',

  setup() {
    return {
      newsData
    }
  }
}
</script>
