import React from 'react'

const Breadcrumbs = () => {

    const url = window.location.pathname;

    const pathArray = url.split("/").filter(Boolean);



  return (
    <div className='breadcrumbs'>
        <div className="breadcrumbs__item">Main page</div>
        {
            pathArray.map((page, index) => 
                <div className='breadcrumbs__item' key={index}>{page.split("-").join(" ")}</div>
            )
        }
    </div>
  )
}

export default Breadcrumbs