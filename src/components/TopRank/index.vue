<template>
  <div class="text-white text-opacity-80 bg-white bg-opacity-20 backdrop-blur-md rounded-md w-full">
    <div class="flex justify-between mb-2 p-4">
      <span class="font-YoungSerif text-xl">Top Rank</span>
      <select
        name="rankType"
        id="rankType"
        class="outline-none bg-orange-400 bg-opacity-20 px-2 rounded-sm text-sm h-8"
        v-model="currType"
      >
        <option value="level" class="bg-orange-950 !text-sm">Level</option>
        <option value="fameYin" class="bg-orange-950 !text-sm">War Fame Yin</option>
        <option value="fameZhou" class="bg-orange-950 !text-sm">War Fame Zhou</option>
      </select>
    </div>
    <div>
      <ul>
        <li v-for="(item, idx) in showRank" :key="idx">
          <div
            class="flex items-center px-4 py-2 bg-white"
            :class="[idx % 2 === 0 ? 'bg-opacity-10' : 'bg-opacity-20']"
          >
            <div class="mr-3 ">
              {{ idx + 1 }}
            </div>
            <div class="w-8 h-5">
              <img src="@/assets/icons/crown1st.svg" alt="" v-if="idx === 0" class="w-4 h-4" />
              <img src="@/assets/icons/crown2nd.svg" alt="" v-if="idx === 1" class="w-4 h-4" />
              <img src="@/assets/icons/crown3rd.svg" alt="" v-if="idx === 2" class="w-4 h-4" />
            </div>
            <div v-if="item.faction" class="w-16 text-start">
              {{ item.faction }}
            </div>
            <span class="text-sm">{{ item.name }}</span>
            <span class="ml-auto text-sm" v-if="currType === 'level'">{{ item.level }}</span>
            <span class="ml-auto text-sm" v-else>{{ item.fame }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import fetchRanks from './ranks.js'
export default {
  name: 'TopRank',
  setup() {

    const levelRank = ref([])
    const fameRankYin = ref([])
    const fameRankZhou = ref([])
    const levelUrl = 'https://sho.onl:8080/rank/level'
    const fameYinUrl ='https://sho.onl:8080/rank/fame/yin'
    const fameZhouUrl = 'https://sho.onl:8080/rank/fame/zhou'
    const currType = ref('level')
   
    onMounted(() => {
      fetchRanks(levelUrl, levelRank)
      fetchRanks(fameYinUrl, fameRankYin)
      fetchRanks(fameZhouUrl, fameRankZhou)
    })

    const showRank = computed(() => {
      if (currType.value === 'level') {
        return levelRank.value
      }
      else if(currType.value === 'fameYin'){
        return fameRankYin.value
      }
      else{
        return fameRankZhou.value
      }
    })


    return {
      currType,
      showRank,
      
    }
  }
}
</script>
