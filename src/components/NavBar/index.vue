<template>
  <div class="h-full">
    <ul
      class="flex m-auto h-full justify-center space-x-8 bg-orange-900 bg-opacity-40 backdrop-blur-md items-center"
    >
      <li
        v-for="(item, idx) in items"
        :key="idx"
        class="text-red-950 font-EvilEmpire text-2xl duration-300 h-full flex items-center border-b-2 border-white border-opacity-0"
        :class="[
          currPath === item.path ? 'text-white text-opacity-90 duration-300 border-opacity-100' : ''
        ]"
      >
        <router-link :to="item.path">{{ item.pageName }}</router-link>
      </li>
    </ul>
    <span>{{ userInfo.value?userInfo.value.email:'not login' }}</span>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import navItems from './nav'
import { useRoute } from 'vue-router'
import { user } from '@/firebase'


export default {
  name: 'NavBar',

  setup() {
    const items = ref(navItems)
    const route = useRoute()
    const currPath = computed(() => {
      return route.path
    })
    const userInfo = computed(() => {
      return user
    })
    return {
      items,
      currPath,
      userInfo
    }
  }
}
</script>
