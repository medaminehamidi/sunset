import { Button, IconButton, InputAdornment, TextField, Typography } from '@material-ui/core'
import { createUseStyles } from 'react-jss'
import style from './style'
import SearchIcon from '@material-ui/icons/Search'
import { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = createUseStyles(style)

export default ({ setShow }) => {
  const [search2, setSearch] = useState('')
  const { textinput, topSection, button, searchContainer, bigTitleNew, searchSubContainer, bigTitle } = useStyles()
  return (
    <>
      <div className={topSection}>
        <div className={searchContainer}>
          <div className={searchSubContainer}>
            <Typography variant='h4' className={bigTitle}>
              Find The SetUp Of Your
              <Typography variant='h4' className={bigTitleNew}>
                Dreams
              </Typography>
            </Typography>
            <TextField
              className={textinput}
              InputLabelProps={{ style: { color: '#1a1a1a' } }}
              placeholder='Search In Our Shop'
              variant='outlined'
              onChange={(e) => {
                setSearch(e.target.value)
              }}
              value={search2}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='Add'
                      style={{ width: 55, color: '#f65c41' }}
                      onClick={() => setSearch('')}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button
              variant='contained'
              className={button}
              onClick={() => setShow(true)}
              startIcon={<ShoppingCartIcon />}
            >
              6 Items ( 200 $ )
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
