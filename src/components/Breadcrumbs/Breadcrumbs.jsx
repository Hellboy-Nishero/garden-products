import React, { useEffect, useState } from 'react'

const Breadcrumbs = () => {

    const url = window.location.pathname; //get url like "/categories/nursery";

    const pathArray = url.split("/").filter(Boolean); //separate paths into links

    const [width, setWidth] = useState(window.outerWidth);


    useEffect(() => {
      const resizeHandler = () => {setWidth(window.outerWidth)};
      window.addEventListener("resize", resizeHandler);
      return () => {window.removeEventListener("resize", resizeHandler)}

    }, []);



  return (
    <>
    {
      width > 767 && 
      <div className='breadcrumbs'>
      <div className="breadcrumbs__item">Main page</div>
      {
          pathArray.map((page, index) => 
              <div className='breadcrumbs__item' key={index}>{decodeURIComponent(page.split("-").join(" "))}</div>
          )
      }
      </div>
    }
    </>
  )
}

export default Breadcrumbs