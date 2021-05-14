import useMediaQuery from '@material-ui/core/useMediaQuery'
import { product } from 'assets'
import Modal from 'components/Modal'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default ({ show, setShow }) => {
  const desktop = useMediaQuery('(min-width:1224px)')
  const { buttonClass, productImage, image, buttonContainer, cartContainer, products, textContainer, mainText, price, description, cartContainerBig } = useStyles({ desktop })
  return (
    <Modal show={show} setShow={setShow}>
      <div className={cartContainerBig}>
        <div className={products}>
          <div className={cartContainer}>
            <div className={image}>
              <img src={product} className={productImage} />
            </div>
            <div className={textContainer}>
              <p className={mainText}>AlienWare</p>
              <p className={price}>200 $</p>
              <p className={description}>this is the desctiption of the product this product is a total waste of money dont buy it or else u'll reegret it for the rest of your life</p>
            </div>
          </div>
        </div>
        <div className={buttonContainer}>
          <button className={buttonClass}>Add to cart</button>
        </div>
      </div>
    </Modal>
  )
}
