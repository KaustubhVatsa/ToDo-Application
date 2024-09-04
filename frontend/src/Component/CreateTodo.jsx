import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return <div style={{display:"flex"}}>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Enter Title of Activity" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value)
        }}/>
        <br />
        <input style={{
            padding:10,
            margin:10
        }}type="text" placeholder="Enter Description of Activity" onChange={function(e){
            const value = e.target.value
            setDescription(e.target.value)
        }}/>
        <button onClick={()=>{
            fetch("http://localhost:4000/todos",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(async function (res) {
                const json = await res.json();
                alert("Todo Activity Created")
            })
        }}>Create Todo Activity</button>
    </div>
} 