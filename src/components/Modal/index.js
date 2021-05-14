import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default ({ children, show, setShow }) => {
  const desktop = useMediaQuery('(min-width:1224px)')
  const {
    modal,
    modalContent
  } = useStyles({ show, desktop })
  return (
    <div onClick={(e) => e.target !== e.currentTarget ? null : setShow(false)} className={modal}>
      <div className={modalContent}>
        {children}
      </div>
    </div>
  )
}
