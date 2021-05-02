import Container from 'components/Container'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

const img1 = 'https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
const img2 = 'https://digital-photography-school.com/wp-content/uploads/old/black-and-white.jpg'
export default () => {
  const { picsContainer, picsRow, image } = useStyles()

  return (
    <>
      <Container>
        <div className={picsContainer}>
          <div className={picsRow}>
            <img src={img1} className={image} />
            <img src={img2} className={image} />
            <img src={img1} className={image} />
          </div>
          <div className={picsRow}>
            <img src={img2} className={image} />
            <img src={img1} className={image} />
            <img src={img2} className={image} />
          </div>
          <div className={picsRow}>
            <img src={img1} className={image} />
            <img src={img2} className={image} />
            <img src={img1} className={image} />
          </div>
        </div>
      </Container>
    </>
  )
}
