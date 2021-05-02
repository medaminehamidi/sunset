import { Typography } from '@material-ui/core'
import { games } from 'assets'
import Container from 'components/Container'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const { coffee, title, para, section, image } = useStyles()
  return (
    <div className={section}>
      <Container className={coffee}>
        <div>
          <Typography variant='h4' className={title}>
            Need A rush
          </Typography>
          <Typography variant='h4' className={para}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          </Typography>
        </div>
        <img src={games} className={image} />
      </Container>
    </div>
  )
}
