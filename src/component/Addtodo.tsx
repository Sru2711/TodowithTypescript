import React, { FC, useEffect, useState } from 'react';
import { Button, Label, Input } from 'reactstrap';
import Todo from './todo';

type dataList =
    {id:number, task:string}[]

const Addtodo: FC = () => {
    const [task, setTask] = useState<string>('');
    const [data, setData] = useState<dataList>([]);

    const handleChange = (e:string) => {
     console.log("e",e)
     setTask(e)
    }

    const handleAddTask = () => {
        setData([...data, {id:data.length+1,task:task}])
        setTask("")
    }
  
    const handleEdit= () => {
       console.log("Edit function Called")
    }
  
    const handleDelete =(id:number) => {
        console.log("id",id)
        const expectForTheDeleted:dataList= data.filter((data)=> {
            if(data.id !== id) {
                return data
            }
            return expectForTheDeleted
        })
        setData(expectForTheDeleted)
    }
    useEffect(()=>{
        console.log("task",task);
     console.log("data",data);
    },[])

    return (
        <div>
            <form className="d-flex flex-column justify-content-center align-items-center">

                <Input
                    className="w-50 mt-4"
                    type="text"
                    id="task"
                    onChange={(e)=> handleChange(e.target.value)}
                    placeholder="Task"
                    value={task}
                />
                <Button className="mt-3 mb-3 btn btn-none" 
                    type="button" style={{color:"#FFDA76", background:"#FF8C9E"}} onClick={()=> {handleAddTask()}}>Add Task</Button>
            </form>
            <Todo 
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            data={data}
            />
        </div>
    );
}

export default Addtodo;
