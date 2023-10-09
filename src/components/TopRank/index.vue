<template>
  <div class="text-white text-opacity-80 bg-white bg-opacity-20 backdrop-blur-md rounded-md w-full">
    <div class="flex justify-between mb-2 p-4">
      <span class="font-YoungSerif text-xl">Top Rank</span>
      <select
        name="rankType"
        id="rankType"
        class="outline-none bg-orange-400 bg-opacity-20 px-2 rounded-sm text-sm"
        v-model="currType"
      >
        <option value="level" class="bg-orange-950 !text-sm">Level</option>
        <option value="war" class="bg-orange-950 !text-sm">War Rank</option>
      </select>
    </div>
    <div>
      <ul>
        <li v-for="(item, idx) in showRank" :key="idx">
          <div
            class="flex items-center px-4 py-2 bg-white"
            :class="[idx % 2 === 0 ? 'bg-opacity-10' : 'bg-opacity-20']"
          >
            <div class="w-6 h-5">
              <img src="@/assets/icons/crown1st.svg" alt="" v-if="idx === 0" class="w-4 h-4" />
              <img src="@/assets/icons/crown2nd.svg" alt="" v-if="idx === 1" class="w-4 h-4" />
              <img src="@/assets/icons/crown3rd.svg" alt="" v-if="idx === 2" class="w-4 h-4" />
            </div>
            <span class="text-sm">{{ item.playerName }}</span>
            <span class="ml-auto text-sm" v-if="currType === 'level'">{{ item.level }}</span>
            <span class="ml-auto text-sm" v-else>{{ item.warScore }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { levelRank, warRank } from './ranks.js'

export default {
  name: 'TopRank',
  setup() {
    const rankL = levelRank.sort((a, b) => b.level - a.level)
    const rankW = warRank.sort((a, b) => b.warScore - a.warScore)
    const currType = ref('level')

    const showRank = computed(() => {
      if (currType.value === 'level') {
        return rankL
      }
      return rankW
    })

    return {
      currType,
      showRank
    }
  }
}
</script>
