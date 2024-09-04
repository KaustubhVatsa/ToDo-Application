export function Todos({todos}){
    return (
        <div>
            {todos.map(function(todo){
                return <div>
                <h1>{todo.title}</h1>
                <h3>{todo.description}</h3>
                <button onClick={()=>{
                    fetch("http://localhost/todos",{
                        method:"PUT",
                        body:JSON.stringify({
                            id:_id
                        })
                    })
                }}>{todo.isCompleted == true? "Completed" : "Mark as Completed"}</button>
                </div>
            })}
        </div>
    )
}