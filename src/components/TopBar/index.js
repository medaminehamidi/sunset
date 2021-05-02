import { Typography } from '@material-ui/core'
import { logo } from 'assets'
import Container from 'components/Container'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const { topbar, logoStyle, nav, topbarLeftSide, navSelected } = useStyles()
  return (
    <Container className={topbar}>
      <img src={logo} className={logoStyle} />
      <div className={topbarLeftSide}>
        <Typography variant='h4' className={navSelected}>
          Home
        </Typography>
        <Typography variant='h4' className={nav}>
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
