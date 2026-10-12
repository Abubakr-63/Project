"use client"
import { useGetTodoQuery } from "../store/dataApi"

export default function Home() {
  const {data: user} = useGetTodoQuery("");
  console.log(user)
  return (
    <>
      
    </>
  )
}
