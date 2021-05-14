import Catalog from 'components/Catalog'
import Footer from 'components/Footer'
import ShopFilter from 'components/ShopFilter'
import TopBar from 'components/TopBar'
import { cart } from 'assets'
import { createUseStyles } from 'react-jss'
import style from './style'
import { useState } from 'react'
import Checkout from 'components/Checkout'

const useStyles = createUseStyles(style)

export default () => {
  const [show, setShow] = useState(false)
  const { topbar, cartButton, dot, cartIcon } = useStyles()
  return (
    <div>
      <div className={topbar}>
        <TopBar />
      </div>
      <div onClick={() => setShow(true)} className={cartButton}>
        <div className={dot}>
          2
        </div>
        <img src={cart} className={cartIcon} />
      </div>
      <Checkout show={show} setShow={setShow} />
      <ShopFilter />
      <Catalog />
      <Footer />
    </div>

  )
}
