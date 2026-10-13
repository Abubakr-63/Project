"use client"
import { Suspense, useState } from "react";
import { useAddTodoMutation, useDeleteTodoMutation, useEditTodoMutation, useGetTodoQuery } from "../store/dataApi"
import { useForm } from "react-hook-form";

export default function Home() {
  const {data} = useGetTodoQuery();
  const [addUser] = useAddTodoMutation();
  const [deleteUser] = useDeleteTodoMutation();
  const {handleSubmit, register, reset} = useForm();
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [edit] = useEditTodoMutation();
  const onSubmit = (data) => {
    if(user == null){
        addUser(data);
        reset()
    }
    else{
        edit({id : user?.id, ...data})
        reset();
        setUser(null)
    }
  }
  return (
    <>
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", {required : true})}  defaultValue={user?.name} className="border" type="text" />
        <input {...register("price", {required : true})} defaultValue={user?.price} className="border" type="text" />
        <button type="submit">add new User</button>
        </form>
    </div>
      {data?.map((elem) => (
        <div key={elem.id}>
          <h1>{elem.name}</h1>
          <p>{elem.price}</p>
          <button className="border" onClick={() => deleteUser(elem.id)}>delete</button>
          <button className="border" onClick={() => setUser(elem)}>Edit</button>
        </div>
      ))}
    </>
  )
}
