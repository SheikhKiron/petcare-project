import axios from "axios"
import { useEffect, useState } from "react"

const usePets = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pet, setPet] = useState([])
  useEffect(() => {
    setLoading(true)
    axios('/pet.json')
      .then(data => setPet(data.data))
      .catch(err => setError(err))
    .finally(()=>setLoading(false))
  },[])
  return {pet,loading,error}
}
export default usePets;