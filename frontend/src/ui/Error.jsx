import React from 'react'
import { Link, useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="bg-indie-500 text-indie-200 flex flex-col gap-4 items-center justify-center h-screen text-5xl">
    <h1>Something Went Wrong!</h1>
    <p>{error.data || error.message}</p>
    <Link onClick={()=>(navigate(-1))} className="cursor-pointer"> ⬅ </Link>
    </div>
  )
}

export default Error