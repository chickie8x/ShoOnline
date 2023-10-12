<template>
  <div class="h-full flex justify-center items-end">
    <div
      class="w-[1024px] h-[96%] overflow-auto bg-white rounded-md bg-opacity-40 backdrop-blur-md text-sm p-4"
    >
      <span class="block text-2xl font-EvilEmpire text-orange-800">Download Sho Online client</span>

      <span class="font-YoungSerif text-orange-800 flex items-center mt-8"
        ><span class="block w-3 h-3 bg-orange-800 rounded-full mr-2"></span> Need minimum 4GB
        storage to download and install game client</span
      >

      <span class="font-YoungSerif text-orange-800 mt-8 block text-xl">Full Version</span>

      <div class="mt-2 text-orange-800 font-YoungSerif flex justify-between space-x-10">
        <div class="flex flex-col">
          <span>Game client size: 1.25GB</span>
          <span>Version: 1.0.0.0</span>
          <span>Updated: 2023/10/20</span>
        </div>
        <div>
          <div class="flex items-center justify-center bg-white px-4 py-3 rounded-md shadow-md w-fit">
            <a href="" class="flex items-center font-EvilEmpire text-xl"><img src="@/assets/icons/download-icon.svg" alt="" class="w-8 h-8 mr-2">Download full client</a>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <span class="font-YoungSerif text-orange-800 mt-4 block text-xl">PC specs requirements</span>
        <div>
          <table class="w-full text-orange-800 mt-2 border border-orange-800">
            <thead class="w-full text-center font-bold text-md bg-white bg-opacity-60 py-2">
              <tr>
                <th class="text-center font-bold text-md bg-white bg-opacity-60 py-3 border-b border-r border-orange-500 w-[98px]">Category</th>
                <th class="text-center font-bold text-md bg-white bg-opacity-60 py-3 border-b border-r border-orange-500">Minimum requirements</th>
                <th class="text-center font-bold text-md bg-white bg-opacity-60 py-3 border-b border-r border-orange-500">Recommended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="bg-white bg-opacity-20 py-2 text-center w-[98px] border-r border-b border-orange-500 font-semibold">CPU</td>
                <td class="bg-white bg-opacity-20 py-2 text-center border-r border-b border-orange-500">Intel Pentium G2130 3.0Ghz</td>
                <td class="bg-white bg-opacity-20 py-2 text-center border-r border-b border-orange-500">Intel Core i5 10400 4.0Ghz</td>
              </tr>
              <tr>
                <td class="bg-white bg-opacity-30 py-2 text-center w-[98px] border-r border-b border-orange-500 font-semibold">RAM</td>
                <td class="bg-white bg-opacity-30 py-2 text-center border-r border-b border-orange-500">4GB</td>
                <td class="bg-white bg-opacity-30 py-2 text-center border-r border-b border-orange-500">16GB</td>
              </tr>
              <tr>
                <td class="bg-white bg-opacity-20 py-2 text-center w-[98px] border-r border-b border-orange-500 font-semibold">VGA</td>
                <td class="bg-white bg-opacity-20 py-2 text-center border-r border-b border-orange-500">NVIDIA GeForce GT420</td>
                <td class="bg-white bg-opacity-20 py-2 text-center border-r border-b border-orange-500">NVIDIA RTX2060</td>
              </tr>
              <tr>
                <td class="bg-white bg-opacity-30 py-2 text-center w-[98px] border-r border-b border-orange-500 font-semibold">STORAGE</td>
                <td class="bg-white bg-opacity-30 py-2 text-center border-r border-b border-orange-500">120GB</td>
                <td class="bg-white bg-opacity-30 py-2 text-center border-r border-b border-orange-500">512GB</td>
              </tr>
              <tr>
                <td class="bg-white bg-opacity-20 py-2 text-center w-[98px] border-r border-b border-orange-500 font-semibold">OS</td>
                <td class="bg-white bg-opacity-20 py-2 text-center border-r border-b border-orange-500">Windows 7</td>
                <td class="bg-white bg-opacity-20 py-2 text-center border-r border-b border-orange-500">Windows 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadView'
}
</script>
