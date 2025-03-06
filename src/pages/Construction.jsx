import React, { useEffect } from 'react'

function Construction() {
  useEffect(() => {
		document.title = "_Waiting_for";
	    }, []);
  return (
    <div className='flex justify-center items-center h-[100vh]'>Web site in progress (Construction)</div>
  )
}

export default Construction