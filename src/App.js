import React,{useEffect, useState} from 'react'
function App() {
  const [algo, setAlgo] = useState('')
  const [data, setData] = useState([])
  const [curMethod, setCurMethod] = useState()
  const [curSelectedIndexL, setCurSelectedIndexL] = useState(2)
  const [curSelectedIndexR, setCurSelectedIndexR] = useState(4)
  const [arraySize, setArraySize] = useState(50)
  const [delay, setDelay] = useState(1)

  const bitonicSort = (arr, direction)=> {
    const bitonicMerge = (arr, direction)=> {
      const n = arr.length;
      if (n <= 1) {
        return arr;
      } else {
        const m = n / 2;
        for (let i = 0; i < m; i++) {
          if ((arr[i] > arr[i + m]) === direction) {
            [arr[i], arr[i + m]] = [arr[i + m], arr[i]];
          }
        }
        return bitonicMerge(arr.slice(0, m), direction)
        .concat(bitonicMerge(arr.slice(m, n), direction));
      }
    }
    const n = arr.length;
    if (n <= 1) {
      return arr;
    } else {
      const m = n / 2;
      const left = arr.slice(0, m);
      const right = arr.slice(m, n);
      bitonicSort(left, true);
      bitonicSort(right, false);
      return bitonicMerge(left.concat(right), direction);
    }
  }
    
  const bogoSort = ()=>{console.log('bogoSort Called')}
  const bubbleSort = async(array)=>{
    const timer = ms => new Promise(res => setTimeout(res, ms))
    for(var i = 0; i <= array.length-1; i++){
      // Last i elements are already in place
      for(var j = 0; j < ( array.length - i -1); j++){
        
        // Comparing two adjacent numbers 
        // and see if first is greater than second
        setCurSelectedIndexL(j)
        setCurSelectedIndexR(j+1)
        if(array[j] > array[j+1]){
          // Swap them if the condition is true 
          var temp = array[j]
          array[j] = array[j + 1]
          array[j+1] = temp
          setData(array)
        }
        await timer(delay); 
            console.log(data);
          }
        }
}

  const bucketSort = ()=>{console.log('bucketSort Called')}
  const cocktailSort = ()=>{console.log('cocktailSort Called')}
  const combSort = ()=>{console.log('combSort Called')}
  const countingSort = ()=>{console.log('countingSort Called')}
  const cubeSort = ()=>{console.log('cubeSort Called')}
  const cycleSort = ()=>{console.log('cycleSort Called')}
  const flashSort = ()=>{console.log('flashSort Called')}
  const gnomeSort = ()=>{console.log('gnomeSort Called')}
  const heapSort = ()=>{console.log('heapSort Called')}
  const insertionSort = ()=>{console.log('insertionSort Called')}
  const mergeSort = ()=>{console.log('mergeSort Called')}
  const pancakeSort = ()=>{console.log('pancakeSort Called')}
  const pigeonholeSort = ()=>{console.log('pigeonholeSort Called')}
  const quickSort = ()=>{console.log('quickSort Called')}
  const radixSort = ()=>{console.log('radixSort Called')}
  const selectionSort = ()=>{console.log('selectionSort Called')}
  const shellSort = ()=>{console.log('shellSort Called')}
  const smoothSort = ()=>{console.log('smoothSort Called')}
  const spiralSort = ()=>{console.log('spiralSort Called')}
  const stoogeSort = ()=>{console.log('stoogeSort Called')}
  const strandSort = ()=>{console.log('strandSort Called')}
  const timSort = ()=>{console.log('timSort Called')}
  const treeSort = ()=>{console.log('treeSort Called')}

  useEffect(()=>{
    setData(shuffleNumbers(arraySize))
  },[])

  const handleSort = (funString)=>{
    switch(funString){
      case 'bitonicSort': bitonicSort(data, true); break;
      case 'bogoSort': bogoSort(data); break;
      case 'bubbleSort': bubbleSort(data); break;
      case 'bucketSort': bucketSort(data); break;
      case 'cocktailSort': cocktailSort(data); break;
      case 'combSort': combSort(data); break;
      case 'countingSort': countingSort(data); break;
      case 'cubeSort': cubeSort(data); break;
      case 'cycleSort': cycleSort(data); break;
      case 'flashSort': flashSort(data); break;
      case 'gnomeSort': gnomeSort(data); break;
      case 'heapSort': heapSort(data); break;
      case 'insertionSort': insertionSort(data); break;
      case 'mergeSort': mergeSort(data); break;
      case 'pancakeSort': pancakeSort(data); break;
      case 'pigeonholeSort': pigeonholeSort(data); break;
      case 'quickSort': quickSort(data); break;
      case 'radixSort': radixSort(data); break;
      case 'selectionSort': selectionSort(data); break;
      case 'shellSort': shellSort(data); break;
      case 'smoothSort': smoothSort(data); break;
      case 'spiralSort': spiralSort(data); break;
      case 'stoogeSort': stoogeSort(data); break;
      case 'strandSort': strandSort(data); break;
      case 'timSort': timSort(data); break;
      case 'treeSort': treeSort(data); break;
  }
}

  const shuffleNumbers = (N)=> {
    const numbers = [];
    for (let i = 1; i <= N; i++) {
      numbers.push(i);
    }
  
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
  
    return numbers;
  }
  
const BarChart = ({ data }) => {
  const svgHeight = 600;
  const svgWidth = 1600;
  const padding = 20;
  const barWidth = (svgWidth - padding * 2) / data.length;
  
  const maxDataValue = Math.max(...data);
  const yScale = (svgHeight - padding * 2) / maxDataValue;
  
  return (
    <svg height={svgHeight} width={svgWidth} >
      {data.map((value, index) => (
        <rect
          key={index}
          x={index * barWidth + padding}
          y={svgHeight - value * yScale - padding}
          width={barWidth - 5}
          height={value * yScale}
          fill={
            index === curSelectedIndexR ? "red" :
            index === curSelectedIndexL ? "yellow" :
            "#4e79a7"} 
          // fill={curSelectedIndexR === index ? "red" : "#4e79a7"}
          />
      ))}
    </svg>
  );
};


  return (
    <div className='flex bg-gradient-to-br from-purple-900 via-purple-900 to-slate-400 flex-col h-screen' >
      <div className='flex flex-row mb-6 mt-6'>
        <h1 className='text-4xl text-white font-bold p-2  '>Select an Algorithm :</h1>
        <select name="selectList" id="selectList" className='text-4xl ml-4 font-semibold text-center' >
        <option value="bitonicSort" onClick={()=>setCurMethod('bitonicSort')} >Bitonic Sort</option>
        <option value="bogoSort" onClick={()=>setCurMethod('bogoSort')} >Bogo Sort</option>
        <option value="bubbleSort" onClick={()=>setCurMethod('bubbleSort')} >Bubble Sort</option>
        <option value="bucketSort" onClick={()=>setCurMethod('bucketSort')} >Bucket Sort</option>
        <option value="cocktailSort" onClick={()=>setCurMethod('cocktailSort')} >Cocktail Sort</option>
        <option value="combSort" onClick={()=>setCurMethod('combSort')} >Comb Sort</option>
        <option value="countingSort" onClick={()=>setCurMethod('countingSort')} >Counting Sort</option>
        <option value="cubeSort" onClick={()=>setCurMethod('cubeSort')} >Cube Sort</option>
        <option value="cycleSort" onClick={()=>setCurMethod('cycleSort')} >Cycle Sort</option>
        <option value="flashSort" onClick={()=>setCurMethod('flashSort')} >Flash Sort</option>
        <option value="gnomeSort" onClick={()=>setCurMethod('gnomeSort')} >Gnome Sort</option>
        <option value="heapSort" onClick={()=>setCurMethod('heapSort')} >Heap Sort</option>
        <option value="insertionSort" onClick={()=>setCurMethod('insertionSort')} >Insertion Sort</option>
        <option value="mergeSort" onClick={()=>setCurMethod('mergeSort')} >Merge Sort</option>
        <option value="pancakeSort" onClick={()=>setCurMethod('pancakeSort')} >Pancake Sort</option>
        <option value="pigeonholeSort" onClick={()=>setCurMethod('pigeonholeSort')} >Pigeonhole Sort</option>
        <option value="quickSort" onClick={()=>setCurMethod('quickSort')} >Quick Sort</option>
        <option value="radixSort" onClick={()=>setCurMethod('radixSort')} >Radix Sort</option>
        <option value="selectionSort" onClick={()=>setCurMethod('selectionSort')} >Selection Sort</option>
        <option value="shellSort" onClick={()=>setCurMethod('shellSort')} >Shell Sort</option>
        <option value="smoothSort" onClick={()=>setCurMethod('smoothSort')} >Smooth Sort</option>
        <option value="spiralSort" onClick={()=>setCurMethod('spiralSort')} >Spiral Sort</option>
        <option value="stoogeSort" onClick={()=>setCurMethod('stoogeSort')} >Stooge Sort</option>
        <option value="strandSort" onClick={()=>setCurMethod('strandSort')} >Strand Sort</option>
        <option value="timSort" onClick={()=>setCurMethod('timSort')} >Tim Sort</option>
        <option value="treeSort" onClick={()=>setCurMethod('treeSort')} >Tree Sort</option>

        </select>
        <button className='bg-amber-300 text-black font-bold p-2 ml-20 text-4xl ' onClick={()=>handleSort(curMethod)} >Sort</button>
      </div>
      <div className=' bg-black h-max w-10/12 align-bottom justify-self-center ' >
      <BarChart data={data} />

      </div>
    </div>
  )
}

export default App