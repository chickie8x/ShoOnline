<template>
  <div class="w-[1024px] rounded-md p-4 m-auto mt-4 bg-white bg-opacity-40 backdrop-blur-md flex flex-col h-full">
    <span class="block mb-4 text-xl font-YoungSerif">Create an article</span>
    <div class="text-sm flex flex-col">
      <div class="flex items-center py-2 space-x-2">
        <label for="article-title" class="min-w-[100px]">Article Title</label>
        <input v-model="articleTitle" type="text" placeholder="Article title" id="article-title"
          class="w-1/2 outline-none px-4 py-1 rounded-md" />
      </div>
      <div class="flex items-center space-x-2 py-2">
        <span class="min-w-[100px]">Article category</span>
        <select name="category" id="category" class="px-4 py-1 rounded-md outline-none" v-model="articleCat">
          <option value="news">News</option>
          <option value="events">Events</option>
          <option value="updates">Updates</option>
        </select>
      </div>
    </div>
    <div>
      <QuillEditor toolbar="full" :options="editorOptions" theme="snow" class="!h-[300px] overflow-auto text-white"
        v-model:content="articleContent" contentType="html" :modules="modules" />
    </div>
    <div class="h-12 flex items-center mt-auto">
      <button class="rounded-md border-none text-sm bg-orange-800 text-white px-4 py-1 shadow-sm mt-2"
        @click="postArticle">
        Post Article
      </button>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { projectStorage, writeDb } from '@/firebase'
import ImageUploader from 'quill-image-uploader'
import BlotFormatter from 'quill-blot-formatter'
import { getDownloadURL, uploadBytes, ref as firebaseRef } from 'firebase/storage'


export default {
  name: 'PostView',
  components: {
    QuillEditor
  },

  setup() {
    const articleTitle = ref('')
    const articleCat = ref('news')
    const articleCoverImg = ref('')
    const editorOptions = {
      syntax: true,
      placeholder: 'enter content here'
    }
    const articleContent = ref('')

    const postData = computed(() => {
      return {
        articleTitle: articleTitle.value,
        articleCat: articleCat.value,
        articleContent: articleContent.value,
        articleCoverImg: articleCoverImg.value,
        timestamp: Date.now()
      }
    })

    const postArticle = () => {
      writeDb(postData.value, `ShoOnline/${articleCat.value}/`)
    }

    const modules = [
    
      {
        name: 'blotFormatter',
        module: BlotFormatter,
        options: {}
      },
      {
        name: 'imageUploader',
        module: ImageUploader,
        options: {
          upload: (file) => {
            return new Promise((resolve, reject) => {
              const storeRef = firebaseRef(projectStorage, `images/${file.name}`)
              uploadBytes(storeRef, file)
                .then((snapshot) => {
                  return getDownloadURL(snapshot.ref)
                })
                .then((downloadUrl) => {
                  console.log(downloadUrl)
                  if(!articleCoverImg.value){
                    articleCoverImg.value = downloadUrl
                  }
                  resolve(downloadUrl)

                })
                .catch((err) => {
                  reject('upload failed')
                  console.log(err)
                })
            })
          }
        }
      }
    ]


    return {
      articleCat,
      articleTitle,
      postData,
      postArticle,
      editorOptions,
      articleContent,
      modules
    }
  }
}
</script>
