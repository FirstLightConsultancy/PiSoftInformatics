import React from 'react'

export default function TakeTest() {
  return (
    <div>
        <div className="relative h-[300px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
          src="/assets/images/breadcrumb.jpg"
          alt="Background Image"
            className="object-cover object-center w-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Take Test
          </h1>
        </div>
      </div>
    </div>
  )
}
