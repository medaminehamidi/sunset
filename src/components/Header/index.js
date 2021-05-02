import Coffee from 'components/Coffee'
import Description from 'components/Description'
import TopBar from 'components/TopBar'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const { header } = useStyles()
  return (
    <div className={header}>
      <TopBar />
      <Description />
      <Coffee />
    </div>
  )
}
