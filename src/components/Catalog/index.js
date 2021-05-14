import { Button, Typography } from '@material-ui/core'
import { product } from 'assets'
import Container from 'components/Container'
import Preview from 'components/Preview'
import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

export default () => {
  const [show, setShow] = useState(false)
  const { productContainer, catalog, productimage, button, categorieContainer, name, price, title } = useStyles()
  return (
    <Container className={categorieContainer}>
      <Typography variant='h4' className={title}>
        Gamer Pc
      </Typography>
      <Preview show={show} setShow={setShow} />
      <div className={catalog}>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
        <div className={productContainer}>
          <img onClick={() => setShow(true)} src={product} className={productimage} />
          <Button onClick={() => console.warn(true)} variant='contained' className={button}>add to cart</Button>
          <Typography variant='h4' className={name}>
            alienware
          </Typography>
          <Typography variant='h4' className={price}>
            2000 $
          </Typography>
        </div>
      </div>
    </Container>
  )
}
