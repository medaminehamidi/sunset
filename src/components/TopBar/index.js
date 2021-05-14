import { Typography } from '@material-ui/core'
import { logo } from 'assets'
import Container from 'components/Container'
import { push } from 'connected-react-router'
import { createUseStyles } from 'react-jss'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const { topbar, logoStyle, nav, topbarLeftSide, navSelected } = useStyles()
  const dispatch = useDispatch()
  const location = useLocation()
  console.warn(location)
  return (
    <Container className={topbar}>
      <img src={logo} className={logoStyle} />
      <div className={topbarLeftSide}>
        <Typography onClick={() => dispatch(push('/'))} variant='h4' className={location.pathname === '/' ? navSelected : nav}>
          Home
        </Typography>
        <Typography onClick={() => dispatch(push('/shop'))} variant='h4' className={location.pathname === '/shop' ? navSelected : nav}>
          Shop
        </Typography>
        <Typography variant='h4' className={nav}>
          About
        </Typography>
        <Typography variant='h4' className={nav}>
          Contact
        </Typography>
      </div>
    </Container>
  )
}
