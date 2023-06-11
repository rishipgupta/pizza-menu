import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      return setTime(new Date().toLocaleTimeString())
    }, 1000);
  });

  return (
    <div>
      {time};
    </div>
  )
}

export default Clock
