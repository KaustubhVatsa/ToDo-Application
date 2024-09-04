
import { useState } from 'react'
import './App.css'
import { CreateTodo } from './Component/CreateTodo'
import { Todos } from './Component/Todos'

function App() {
  const [todos,setTodos] = useState([]);
  fetch("http://localhost:4000/todos")
  .then(async function(res){
    const json= await res.json();
      setTodos(json.todos);
  })

  return (
    <div>
      <CreateTodo/>
      {/* <Todos todos={[
        {
          title:"go to gym",
          description:"gym going",
          isCompleted: true 
        }
      ]}/>  */}
      <Todos todos={todos}/>
    </div>
  )
}

export default App
