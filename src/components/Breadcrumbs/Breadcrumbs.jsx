import React, { useEffect, useState } from 'react'

const Breadcrumbs = () => {

    const url = window.location.pathname;

    const pathArray = url.split("/").filter(Boolean);

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);

      window.addEventListener("resize", () => handleResize);

      return() => window.removeEventListener("resize", () => handleResize)

    }, [])



  return (
    <>
    {
      width > 480 ? 
      <div className='breadcrumbs'>
      <div className="breadcrumbs__item">Main page</div>
      {
          pathArray.map((page, index) => 
              <div className='breadcrumbs__item' key={index}>{decodeURIComponent(page.split("-").join(" "))}</div>
          )
      }
      </div>
      : null
    };
    </>
  )
}

export default Breadcrumbs