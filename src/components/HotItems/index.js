import { Typography } from '@material-ui/core'
import { product } from 'assets'
import Container from 'components/Container'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const { categorie, shop, titleSelected, productimage, categorieContainer, amount } = useStyles()
  return (
    <Container className={categorieContainer}>
      <div className={categorie}>
        <img src={product} className={productimage} />
        <div className={shop}>
          <Typography variant='h4' className={titleSelected}>
            Get Your Gaming Computer On Sale
          </Typography>
          <Typography variant='h4' className={amount}>
            Shop Now
          </Typography>
        </div>
      </div>
      <div className={categorie}>
        <img src='https://assets.stickpng.com/images/580b585b2edbce24c47b27bb.png' className={productimage} />
        <div className={shop}>
          <Typography variant='h4' className={titleSelected}>
            Best Smartwatch In The Market
          </Typography>
          <Typography variant='h4' className={amount}>
            Shop Now
          </Typography>
        </div>
      </div>
    </Container>
  )
}
