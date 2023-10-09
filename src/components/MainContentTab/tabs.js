import NewsTab from '@/components/MainContentTab/NewsTab/index.vue'
import EventsTab from '@/components/MainContentTab/EventsTab/index.vue'
import UpdatesTab from '@/components/MainContentTab/UpdatesTab/index.vue'
import CommunityTab from '@/components/MainContentTab/CommunityTab/index.vue'

const tabs = [
  {
    id: 1,
    text: 'News',
    component: NewsTab
  },

  {
    id: 1,
    text: 'Events',
    component: EventsTab
  },

  {
    id: 1,
    text: 'Update',
    component: UpdatesTab
  },

  {
    id: 1,
    text: 'Community',
    component: CommunityTab
  }
]

export default tabs
