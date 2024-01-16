import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';
import { addTask } from './features/task/taskSlice';


function App() {

  const count = useSelector((state) => state.counter.value)
  const task = useSelector((state) => state.task.tasks)
  const dispatch = useDispatch();

  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
      </div>
      <div>
        {task.length > 0 ? task.map((task) => (<div key={task.id}>{task.title}</div>)) : <div>Aucune tâche</div>}
        <button onClick={() => dispatch(addTask({title: "Test", id: task.length}))}>Ajouter</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
