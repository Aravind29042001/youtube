import React from 'react'

function Pagenotfound() {
  return (
    <div className='mx-8 my-9'>
      <div>
        <h1 className='text-4xl font-medium font-serif'>Bad Request-Invalid URl</h1>
      </div>
      <div className=' h-[2px] w-full bg-slate-950 my-4'>
      </div>
      <div>
        <h1>HTTP Error 400.The request URL is invalid.</h1>
      </div>
    </div>
  )
}

export default Pagenotfound