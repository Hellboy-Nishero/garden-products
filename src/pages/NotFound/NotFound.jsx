import React, {useEffect, useState} from 'react'
import "./NotFound.scss";
import Button from '../../components/Navbar/Button/Button';
import { useNavigate } from 'react-router';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const NotFound = () => {

  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/");
  }

  return (
    <>
      <div className="not-found">
        <img src="/404.png" alt="" className='notFound__img' />
        <h2 className='notFound__title'>Page Not Found</h2>
        <p className="notFound__text">We’re sorry, the page you requested could not be found.
        Please go back to the homepage.</p>
        <Button type={"primary"} onClick={goHomeHandler}>Go Home</Button>
      </div>
    </>
  )
}

export default NotFound