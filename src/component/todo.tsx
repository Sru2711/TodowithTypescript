import React, { useState, useEffect, useRef, FC } from 'react'
import { Button, Input, Table } from 'reactstrap'
import "../style/todo.scss"




interface todoProps {

    data: { id: number, task: string }[]
    handleEdit: (id: number) => void
    edit: boolean
    setEdit:(edit:boolean)=>void
    currentId:number
    handleDelete: (id: number) => void
    handleSave: (id: number, task:string) => void
}

const Todo: FC<todoProps> = ({ data, handleEdit, handleDelete,handleSave,setEdit, edit,currentId}) => {

    const [inputChangedValue, setInputChangedValue] = useState<string>(" ")
    

    const deleteFunction = (id: number) => {
        handleDelete(id)
    }

    const onEdit = (id: number) => {
        handleEdit(id)
    };

    const handleChange = (e: string) => {
        setInputChangedValue(e)
    }

    const onSave = (id:number) => {
        handleSave(id, inputChangedValue)
        setInputChangedValue("")
        setEdit(false)
    }
    return (
        <div className="table-div">
            <Table size="sm" className="w-50  m-4 table">
                <thead className="thead-div ">
                    <tr className="tr-div">
                        <th className="th-div1 ">
                            <span className="mx-4">
                                Id
                            </span>

                        </th>
                        <th className="th-div2">
                            <span className="mx-2">
                                Task
                            </span>
                        </th>

                        <th className="th-div3">
                            <span className="mx-2">
                                Operations
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {data.map((data) => {

                        return (
                            <>
                                <tr>
                                    <th className="th " scope="row">
                                        <span className="mx-4 span">
                                            {data.id}
                                        </span>

                                    </th>
                                    <td className="td1">
                                        {
                                            edit && currentId === data.id ?
                                                <span className="mx-2"  key={data.id}>

                                                    <input type="text" value={ inputChangedValue} onChange={(e)=>{handleChange(e.target.value)}}/>

                                                </span>
                                                :
                                                <span className="mx-2" key={data.id}>


                                                    <span>{data.task}</span>

                                                </span>
                                        }


                                    </td>
                                    <td className="td2">
                                        <div className="button" key={data.id}>
                                            {
                                                edit ? <Button className='edit-button m-1' onClick={() => { onSave(data.id)  }}>Save</Button>
                                                    :
                                                    <Button className='edit-button m-1' onClick={() => { onEdit(data.id) }}>Edit</Button>
                                            }

                                            <Button className='delete-button m-2' onClick={() => { deleteFunction(data.id) }}>Delete</Button>

                                        </div>
                                    </td>

                                </tr>
                            </>
                        )
                    })}


                </tbody>
            </Table>
        </div>
    )
}

export default Todo