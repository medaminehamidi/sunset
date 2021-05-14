export default {
  inputClass: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    '&::placeholder': {
      color: '#707070',
      fontFamily: '\'Roboto\', sans-serif',
      fontSize: 19
    },
    '&:focus': {
      boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.12)'
    },
    width: '80%',
    height: 29,
    fontSize: 24,
    padding: 10,
    borderRadius: 6,
    fontFamily: '\'Roboto\', sans-serif',
    backgroundColor: '#00000008'
  },
  titleClass: {
    fontSize: 32,
    color: '#000',
    margin: 0,
    fontFamily: '\'Roboto\', sans-serif',
    fontWeight: 'bold'
  },
  smallTitleClass: {
    fontSize: 19,
    fontFamily: '\'Roboto\', sans-serif',
    color: '#707070',
    margin: 10
  },
  buttonClass: {
    cursor: 'pointer',
    marginTop: 52,
    width: 260,
    height: 52,
    background: '#f65c41 0% 0% no-repeat padding-box',
    border: '1px solid #f65c41',
    borderRadius: 10,
    color: 'white',
    fontSize: 20,
    marginBottom: 64
  },
  productImage: {
    width: 70
  },
  cartContainer: {
    display: 'flex',
    marginBottom: 16
  },
  image: {
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000010',
    borderRadius: 8,
    marginRight: 20
  },
  mycart: {
    fontSize: 21,
    color: '#000',
    margin: 0,
    fontFamily: '\'Roboto\', sans-serif',
    fontWeight: 'bold',
    marginBottom: 16
  },
  cartContainerBig: {
    width: 400,
    paddingLeft: ({ desktop }) => desktop ? 16 : 0,
    marginBottom: ({ desktop }) => desktop ? 0 : 16,
    borderLeft: ({ desktop }) => desktop ? '.3px solid #00000010' : 'unset',
    borderBottom: ({ desktop }) => desktop ? 'unset' : '.3px solid #00000010'
  },
  mainText: {
    fontSize: 16,
    color: '#000',
    margin: 0,
    fontFamily: '\'Roboto\', sans-serif',
    marginBottom: 16
  },
  price: {
    fontSize: 16,
    color: '#707070',
    fontWeight: 300,
    margin: 0,
    fontFamily: '\'Roboto\', sans-serif',
    marginBottom: 16
  },
  products: {
    height: ({ desktop }) => desktop ? 500 : 120,
    overflow: 'auto'
  }
}
