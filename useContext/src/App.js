import { useEffect, useState, useContext, useCallback } from 'react';
// import BookCreate from './components/BookCreate';
// import BookList from './components/BookList';
// import BooksContext from './context/books';

// function App() {
//   const { fetchBooks } = useContext(BooksContext);

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   return (
//     <div className="app">
//       <h1>Reading List</h1>
//       <BookList />
//       <BookCreate />
//     </div>
//   );
// }

// export default App;

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const listener = () => { 
      console.log('listener', counter);
    }

    document.body.addEventListener('click', listener)

    const cleanUp = () => {
      console.log('call clean up');
      document.body.removeEventListener('click', listener)
    };

    return cleanUp;
  }, [counter]);


  return <div className="app">
    <button onClick={() => setCounter(counter + 1)}>+ Increment</button>
    <div>{counter}</div>
  </div>
}

export default App;
