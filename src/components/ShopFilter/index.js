import { Typography } from '@material-ui/core'
import Container from 'components/Container'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const { container, categorie, categorieSelected, amountSelected, titleSelected, categorieContainer, amount, title } = useStyles()
  return (
    <div className={container}>
      <Container className={categorieContainer}>
        <div className={categorie}>
          <Typography variant='h4' className={amount}>
            27
          </Typography>
          <Typography variant='h4' className={title}>
            Gamer Pc
          </Typography>
        </div>
        <div className={categorie}>
          <Typography variant='h4' className={amount}>
            27
          </Typography>
          <Typography variant='h4' className={title}>
            Gamer Pc
          </Typography>
        </div>
        <div className={categorie}>
          <Typography variant='h4' className={amount}>
            27
          </Typography>
          <Typography variant='h4' className={title}>
            Gamer Pc
          </Typography>
        </div>
        <div className={categorie}>
          <Typography variant='h4' className={amount}>
            27
          </Typography>
          <Typography variant='h4' className={title}>
            Gamer Pc
          </Typography>
        </div>
        <div className={categorieSelected}>
          <Typography variant='h4' className={amountSelected}>
            27
          </Typography>
          <Typography variant='h4' className={titleSelected}>
            graphique card
          </Typography>
        </div>
        <div className={categorie}>
          <Typography variant='h4' className={amount}>
            27
          </Typography>
          <Typography variant='h4' className={title}>
            Gamer Pc
          </Typography>
        </div>
        <div className={categorie}>
          <Typography variant='h4' className={amount}>
            27
          </Typography>
          <Typography variant='h4' className={title}>
            Gamer Pc
          </Typography>
        </div>
      </Container>
    </div>
  )
}
