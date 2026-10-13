import React, { Suspense } from 'react'
import Home from '../components/Products'

export default function page() {
  return (
    <>
    <Suspense fallback={"loading..."}>
      <Home/>
    </Suspense>
    </>
  )
}
