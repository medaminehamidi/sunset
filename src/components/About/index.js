import { Typography } from '@material-ui/core'
import Container from 'components/Container'
import { createUseStyles } from 'react-jss'
import { coffeeImg } from 'assets'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const { coffee, title, para, container, image, tab, dis, smallTitle } = useStyles()
  return (
    <Container className={coffee}>
      <Typography variant='h4' className={title}>
        About us
      </Typography>
      <Typography variant='h4' className={para}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
      </Typography>
      <div className={container}>
        <div className={tab}>
          <img src={coffeeImg} className={image} />
          <Typography variant='h4' className={smallTitle}>
            Coffee
          </Typography>
          <Typography variant='h4' className={dis}>
            A nice place to enjoy your cup of coffee for the day
          </Typography>
        </div>
        <div className={tab}>
          <img src='https://cdn.discordapp.com/attachments/705683475390529558/838254053171134485/unknown.png' />
          <Typography variant='h4' className={smallTitle}>
            Gaming
          </Typography>
          <Typography variant='h4' className={dis}>
            A nice place to enjoy your cup of coffee for the day
          </Typography>
        </div>
        <div className={tab}>
          <img src='https://cdn.discordapp.com/attachments/705683475390529558/838254072686837850/unknown.png' />
          <Typography variant='h4' className={smallTitle}>
            Shop
          </Typography>
          <Typography variant='h4' className={dis}>
            A nice place to enjoy your cup of coffee for the day
          </Typography>
        </div>
      </div>
    </Container>
  )
}
