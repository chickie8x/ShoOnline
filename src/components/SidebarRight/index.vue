<template>
  <div class="h-full flex flex-col items-center p-4 space-y-2">
    <ServerState />
    <TopRank />
  </div>
</template>

<script>
import ServerState from '@/components/ServerState/index.vue'
import TopRank from '@/components/TopRank/index.vue'

export default {
  name: 'SidebarRight',
  components: {
    ServerState,
    TopRank
  }
}
</script>
