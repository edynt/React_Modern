import { useEffect, useRef, useState } from 'react';
// import Dropdown from './components/Dropdown';

// function App() {
//   const [selection, setSelection] = useState(null);

//   const handleSelect = (option) => {
//     setSelection(option);
//   };

//   const options = [
//     { label: 'Red', value: 'red' },
//     { label: 'Green', value: 'green' },
//     { label: 'Blue', value: 'blue' },
//   ];

//   return (
//     <div className="flex">
//       <Dropdown options={options} value={selection} onChange={handleSelect} />
//       <Dropdown options={options} value={selection} onChange={handleSelect} />
//     </div>
//   );
// }

// export default App;

function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0); // Lưu giá trị trước đó

  useEffect(() => {
    console.log('call effect', count)
    prevCount.current = count; // Cập nhật giá trị trước đó
  }, [count]);

  return (
    <div>
      <p>Giá trị hiện tại: {count}</p>
      {
        console.log('call render DOM')
      }
      <p>Giá trị trước đó: {prevCount.current}</p>
      <button onClick={() => {
        console.log('call set count')

        return setCount(count + 1)
      }}>Tăng count</button>
    </div>
  );
}

export default App;