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
  const App = () => {
    useEffect(() => {
        console.log("This effect is called on every render");
    });

    // return..
}
}

export default ClickCount
