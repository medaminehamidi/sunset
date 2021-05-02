import { createUseStyles } from 'react-jss'
import style from './style'
import classNames from 'classNames'

const useStyles = createUseStyles(style)

export default ({ children, className }) => {
  const { container } = useStyles()
  return (
    <div className={classNames(container, className)}>
      {children}
    </div>
  )
}
