<template>
  <div class="h-full flex flex-col">
    <div
      class="border-b border-orange-800 flex items-center text-sm font-YoungSerif text-orange-800 divide-x divide-orange-600"
    >
      <div v-for="(item, idx) in tabs" :key="idx" @click="changeTab(item)">
        <button
          class="bg-white bg-opacity-40 hover:bg-opacity-60 duration-300 px-4 py-2"
          :class="[
            item === currTab ? '!bg-orange-800 bg-opacity-80 text-white' : '',
            idx === 0 ? 'rounded-tl-md' : '',
            idx === tabs.length - 1 ? 'rounded-tr-md' : ''
          ]"
        >
          {{ item.text }}
        </button>
      </div>
    </div>

    <div
      class="bg-white bg-opacity-40 backdrop-blur-md px-4 py-2 rounded-tr-md rounded-bl-md rounded-br-md h-full overflow-auto"
    >
      <TabUnit :data="data" />
    </div>
  </div>
</template>

<script>
import tabs from './tabs.js'
// import { readList } from '@/firebase'
import { shallowRef, ref, onMounted, computed } from 'vue'
import TabUnit from '@/components/MainContentTab/TabUnit/index.vue'
import axios from 'axios'

export default {
  name: 'MainContentTab',
  components: {
    TabUnit
  },
  setup() {
    const currTab = shallowRef(tabs[0])
    const data = ref({})
    const newsUrl = 'https://sho.onl:8080/news'
    const fetchNews = async () => {
      const news = await axios.get(newsUrl)
      if(news.data){
        console.log(news.data.news)
        data.value = news.data.news
      }
    }

    // const path = computed(() => {
    //   return `ShoOnline/${currTab.value.cat}/`
    // })
    const changeTab = (tab) => {
      currTab.value = tab
      // data.value = {}
      // readList(data, path.value)
    }

    onMounted(() => {
      // readList(data, path.value)
      fetchNews()
    })

    return {
      tabs,
      currTab,
      changeTab,
      data
    }
  }
}
</script>
