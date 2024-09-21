import React, { useState, useEffect, useRef, FC } from 'react'
import { Button, Table } from 'reactstrap'
import "../style/todo.scss"

interface todoProps  {
    data: { id: number, task: string }[]
    handleEdit:()=> void
    handleDelete:(id:number)=>void
}
const Todo: FC<todoProps> = ({ data,handleEdit,handleDelete }) => {

    const deleteFunction =(id:number) => {
        handleDelete(id)
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
                                        <span className="mx-2">
                                            {data.task}
                                        </span>

                                    </td>
                                    <td className="td2">
                                        <div className="button">
                                            <Button className='edit-button m-1' onClick={()=>{handleEdit()}}>Edit</Button>
                                            <Button className='delete-button m-2' onClick={()=>{deleteFunction(data.id)}}>Delete</Button>

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