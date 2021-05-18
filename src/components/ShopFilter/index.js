import { Typography } from '@material-ui/core'
import Container from 'components/Container'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const { categorie, titleSelected, categorielast, categorieContainer, categorieSelected, title } = useStyles()
  return (
    <Container className={categorieContainer}>
      <div className={categorielast}>
        <Typography variant='h4' className={title}>
          Games
        </Typography>
      </div>
      <div className={categorie}>
        <Typography variant='h4' className={title}>
          Shirts
        </Typography>
      </div>
      <div className={categorie}>
        <Typography variant='h4' className={title}>
          fan figs
        </Typography>
      </div>
      <div className={categorie}>
        <Typography variant='h4' className={title}>
          Gamer Pc
        </Typography>
      </div>
      <div className={categorieSelected}>
        <Typography variant='h4' className={titleSelected}>
          graphique card
        </Typography>
      </div>
    </Container>
  )
}
