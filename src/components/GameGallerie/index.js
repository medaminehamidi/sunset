import Container from 'components/Container'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

const img1 = 'https://cdn.discordapp.com/attachments/705683475390529558/838254333878599730/unknown.png'
const img2 = 'https://cdn.discordapp.com/attachments/705683475390529558/838254384617619496/unknown.png'
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
