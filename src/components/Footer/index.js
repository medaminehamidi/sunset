import { Typography } from '@material-ui/core'
import Container from 'components/Container'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const { coffee, bigContainer, container, tab, dis, sm, image, smallTitle, tabSm } = useStyles()
  return (
    <div className={bigContainer}>
      <Container className={coffee}>
        <div className={container}>
          <div className={tab}>
            <Typography variant='h4' className={smallTitle}>
              Laurem
            </Typography>
            <Typography variant='h4' className={dis}>
              A nice place to enjoy your cup of coffee for the day
            </Typography>
          </div>
          <div className={tab}>
            <Typography variant='h4' className={smallTitle}>
              Ipsum
            </Typography>
            <Typography variant='h4' className={dis}>
              A nice place to enjoy your cup of coffee for the day
            </Typography>
          </div>
          <div className={tab}>
            <Typography variant='h4' className={smallTitle}>
              Laurem
            </Typography>
            <Typography variant='h4' className={dis}>
              A nice place to enjoy your cup of coffee for the day
            </Typography>
          </div>
          <div className={tabSm}>
            <div className={sm}>
              <img className={image} src='https://cdn.discordapp.com/attachments/705683475390529558/838267772756557865/unknown.png' />
              <Typography variant='h4' className={dis}>
                /sunset
              </Typography>
            </div>
            <div className={sm}>
              <img className={image} src='https://cdn.discordapp.com/attachments/705683475390529558/838267808541966376/unknown.png' />
              <Typography variant='h4' className={dis}>
                /sof
              </Typography>
            </div>
            <div className={sm}>
              <img className={image} src='https://cdn.discordapp.com/attachments/705683475390529558/838267837377413130/unknown.png' />
              <Typography variant='h4' className={dis}>
                /sunset_on_fire
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
