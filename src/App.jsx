import { useState } from 'react';

function App() {
  const [inputArray, setInputArray] = useState('');
  const [sorted, setSorted] = useState('');
  
  // const array = [12, 2, 5, 23, 9, 3, 14];
  const array = inputArray.split(',').map(Number);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputArray(inputValue);
  }

  // Bubble sort
  function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for(let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          const bubbleValue = array[j];
          array[j] = array[j + 1];
          array[j + 1] = bubbleValue;
        }
      }
    }

    setSorted(array.join(', '));
  }
  
  // Selection sort
  function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let selectionMinIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[selectionMinIndex]) {
          selectionMinIndex = j;
        }
      }
      const selectionValue = array[i];
      array[i] = array[selectionMinIndex];
      array[selectionMinIndex] = selectionValue;
    }
    
    setSorted(array.join(', '));
  }

  // Reset fields
  const reset = () => {
    setInputArray('');
    setSorted('');
  }

  return (
    <>
      <h1>Sorting App</h1>
      
      <p>To use any of the sorting methods, please enter numbers to sort separated by comma:</p>
      
      <input type="text" value={inputArray} onChange={handleChange} placeholder="Enter numbers" />
      
      <p>Unsorted array: {inputArray ? inputArray : 'None'}</p>

      <button onClick={() => bubbleSort(array)}>Bubble sort</button>
      <button onClick={() => selectionSort(array)}>Selection sort</button>
      <button onClick={reset}>Reset</button>

      <p>Sorted array: {sorted ? sorted : 'N/A'}</p>
    </>
  )
}

export default App
