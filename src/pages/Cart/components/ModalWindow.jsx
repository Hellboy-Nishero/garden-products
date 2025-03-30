import { X } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWindow } from '../../../store/slices/modalSlice';

const ModalWindow = () => {

    const isActive = useSelector(state => state.window.isActive);

    const dispatch = useDispatch();

    const closeWindow = () => {
        dispatch(toggleWindow());
    }

    useEffect(() => {
        if(isActive){
            window.scrollTo(0, 0)
            document.body.classList.add("modal-open")
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [isActive])


  return (
    <div className={`modalWindow ${isActive ? "shown" : ""}`}>
        <div className="message__container">
            <div className="message-header">
                <h2 className="message-title">Congratulations!</h2>
                <X className="icon" onClick={closeWindow} />
            </div>
            <p className='message'>
                Your order has been successfully placed on the website. <br /> <br /> A manager will contact you shortly to confirm your order.
            </p>
        </div>
    </div>
  )
}

export default ModalWindow