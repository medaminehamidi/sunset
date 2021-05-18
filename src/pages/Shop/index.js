import Catalog from 'components/Catalog'
import Footer from 'components/Footer'
import ShopFilter from 'components/ShopFilter'
import TopBar from 'components/TopBar'
import { createUseStyles } from 'react-jss'
import style from './style'
import { useState } from 'react'
import Checkout from 'components/Checkout'
import HotItems from 'components/HotItems'
import HeaderShop from 'components/HeaderShop'

const useStyles = createUseStyles(style)

export default () => {
  const [show, setShow] = useState(false)
  const { topbar } = useStyles()
  return (
    <div>
      <div className={topbar}>
        <TopBar />
      </div>
      <HeaderShop setShow={setShow} />
      <HotItems />
      <Checkout show={show} setShow={setShow} />
      <ShopFilter />
      <Catalog />
      <Footer />
    </div>

  )
}
