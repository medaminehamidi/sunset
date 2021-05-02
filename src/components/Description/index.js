import { Typography } from '@material-ui/core'
import { raze } from 'assets'
import Container from 'components/Container'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const { header, description, nav, text, fire, image, sunset, bigWhite, smallOrange, smallWhite, bigOrange } = useStyles()
  return (
    <>
      <Typography variant='h4' className={sunset}>
        SUNSET
      </Typography>
      <Typography variant='h4' className={fire}>
        ON FIRE
      </Typography>
      <Container className={header}>

        <div className={description}>
          <div className={text}>
            <Typography variant='h4' className={smallOrange}>
              Get your favorite
            </Typography>
            <Typography variant='h4' className={bigWhite}>
              DRINK
            </Typography>
          </div>
          <div className={text}>
            <Typography variant='h4' className={smallWhite}>
              Play your favorite
            </Typography>
            <Typography variant='h4' className={bigOrange}>
              GAME
            </Typography>
          </div>
          <Typography variant='h4' className={nav}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
          </Typography>
        </div>
        <img src={raze} className={image} />
      </Container>
    </>
  )
}
