'use client'
import React , {useState} from 'react'


const Loading = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div>{loading ? "Loading..." : "Loaded!"}</div>
  )
}

export default Loading