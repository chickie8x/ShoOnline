<template>
  <div class="flex h-full">
    <div class="w-1/4 h-full flex flex-col items-center px-4 pt-4 space-y-2">
      <SidebarLeft />
    </div>

    <div class="w-2/4 px-4 pt-4 h-full">
      <MainContentTab />
    </div>

    <div class="w-1/4 h-full">
      <SidebarRight />
    </div>

  </div>
</template>

<script>
import SidebarRight from '@/components/SidebarRight/index.vue'
import SidebarLeft from '@/components/SidebarLeft/index.vue'
import MainContentTab from '@/components/MainContentTab/index.vue'

export default {
  name: 'HomeView',
  components: {
    SidebarRight,
    SidebarLeft,
    MainContentTab
  }
}
</script>
