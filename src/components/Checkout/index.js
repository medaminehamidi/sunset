import useMediaQuery from '@material-ui/core/useMediaQuery'
import Modal from 'components/Modal'
import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default ({ show, setShow, kart = [] }) => {
  const desktop = useMediaQuery('(min-width:1224px)')
  const [name, setName] = useState('')
  const [adress, setAdress] = useState('')
  const [phone, setPhone] = useState('')
  const { inputClass, titleClass, smallTitleClass, buttonClass, form, productImage, image, cartContainer, products, textContainer, mainText, price, mycart, cartContainerBig } = useStyles({ desktop })
  return (
    <Modal show={show} setShow={setShow}>
      <div className={cartContainerBig}>
        <p className={mycart}>My Cart</p>
        {!kart.length && <p className={mainText}>Your kart is empty budy</p>}
        <div className={products}>
          {
            kart.map((el, key) => {
              return (
                <div key={key} className={cartContainer}>
                  <div className={image}>
                    <img src={el.image} className={productImage} />
                  </div>
                  <div className={textContainer}>
                    <p className={mainText}>{el.title}</p>
                    <p className={price}>{`${el.price} $`}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={form}>
        <p className={titleClass}>Check Out</p>
        <p className={smallTitleClass}>Name</p>
        <input
          className={inputClass}
          placeholder='Fill with your name'
          value={name}
          type='text'
          onChange={e => setName(e.target.value)}
        />
        <p className={smallTitleClass}>Adress</p>
        <input
          className={inputClass}
          placeholder='Fill with your home adress'
          value={adress}
          type='text'
          onChange={e => setAdress(e.target.value)}
        /><p className={smallTitleClass}>Phone number</p>
        <input
          className={inputClass}
          placeholder='Fill with your phone number'
          value={phone}
          type='text'
          onChange={e => setPhone(e.target.value)}
        />
        <button onClick={() => console.warn({ kart, name, adress, phone })} className={buttonClass}>Validate Purchase</button>
      </div>
    </Modal>
  )
}
