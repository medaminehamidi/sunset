export default {
  productContainer: {
    width: '25%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      '&>button': {
        display: 'flex !important',
        marginTop: '-40px !important',
        transition: '.5s ease',
        opacity: 1,
        '&:after': {
          opacity: 1
        }
      }
    }
  },
  productimage: {
    height: '100%',
    width: '100%'
  },
  catalog: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24
  },
  button: {
    color: '#fff !important',
    backgroundColor: '#f65c41 !important',
    marginTop: '-40px !important',
    marginBottom: '16px !important',
    opacity: 0,
    height: 40,
    width: '100%',
    transition: '2s ease'
  },
  title: {
    fontSize: '36px !important',
    fontFamily: '\'Open Sans\', sans-serif !important',
    fontWeight: '300 !important',
    color: '#000 !important',
    cursor: 'none',
    lineHeight: '45px !important',
    textTransform: 'uppercase  !important'
  },
  name: {
    fontSize: '26px !important',
    fontFamily: '\'Open Sans\', sans-serif !important',
    fontWeight: '600 !important',
    color: '#000 !important',
    cursor: 'none',
    justifyContent: 'center',
    display: 'flex',
    lineHeight: '25px !important'
  },
  price: {
    fontSize: '16px !important',
    fontFamily: '\'Open Sans\', sans-serif !important',
    fontWeight: '300 !important',
    color: '#000 !important',
    cursor: 'none',
    justifyContent: 'center',
    display: 'flex',
    lineHeight: '25px !important',
    textTransform: 'uppercase  !important'
  },
  categorieContainer: {
    marginTop: 30
  }
}
