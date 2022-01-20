import React, { useState } from 'react';

type ClickCountProps = {

}

const [count, setCount] = useState(0);

const ClickCount: React.FC<ClickCountProps> = () => {
  return (
    <div>
       <button onClick={() => setCount(count + 1)}>
        Click count
      </button>
    </div>
  )
}

export default ClickCount
