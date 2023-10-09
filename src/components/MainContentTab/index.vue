<template>
  <div class="h-full overflow-auto">
    <div
      class="border-b border-orange-800 flex items-center text-sm font-YoungSerif text-orange-800 divide-x divide-orange-600"
    >
      <div v-for="(item, idx) in tabs" :key="idx" @click="changeTab(item)">
        <button
          class="bg-white bg-opacity-40 hover:bg-opacity-60 duration-300 px-4 py-2"
          :class="[item === currTab ? 'bg-orange-800 bg-opacity-80 text-white' : '', idx === 0 ? 'rounded-tl-md' : '', idx===tabs.length-1?'rounded-tr-md':'']"
        >
          {{ item.text }}
        </button>
      </div>
    </div>

    <div class="bg-white bg-opacity-40 px-4 py-2">
      <component :is="currTab.component"></component>
    </div>
  </div>
</template>

<script>
import tabs from './tabs.js'
import { shallowRef } from 'vue'

export default {
  name: 'MainContentTab',
  setup() {
    const currTab = shallowRef(tabs[0])
    const changeTab = (tab) => {
      currTab.value = tab
    }

    return {
      tabs,
      currTab,
      changeTab
    }
  }
}
</script>
