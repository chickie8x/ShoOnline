import axios from 'axios'

const fetchRanks = async (url, databinding) => {
  const data = await axios.get(url)
  if(data.data){
    databinding.value = data.data.ranking
  }
}

export default fetchRanks