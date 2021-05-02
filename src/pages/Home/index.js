import About from 'components/About'
import Chill from 'components/Chill'
import Footer from 'components/Footer'
import GalerieCoffee from 'components/GalerieCoffee'
import GameDescription from 'components/GameDescription'
import GameGallerie from 'components/GameGallerie'
import Games from 'components/Games'
import Header from 'components/Header'

export default () => {
  return (
    <div>
      <Header />
      <GalerieCoffee />
      <About />
      <Chill />
      <Games />
      <GameDescription />
      <GameGallerie />
      <Footer />
    </div>
  )
}
