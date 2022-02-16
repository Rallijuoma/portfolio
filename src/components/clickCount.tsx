import React, { useEffect, useState } from 'react';

type ClickCountProps = {

}



const ClickCount: React.FC<ClickCountProps> = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count)
  }, [count])
  return (
    <div>
      <p>you clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>
        Click count
      </button>
    </div>
  )
}

export default ClickCount
