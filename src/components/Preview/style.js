export default {
  buttonClass: {
    cursor: 'pointer',
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
    width: '100%'
  },
  cartContainer: {
    display: 'flex',
    marginBottom: 16
  },
  image: {
    width: '70%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 20
  },
  description: {
    fontSize: 16,
    color: '#707070',
    margin: 0,
    fontFamily: '\'Roboto\', sans-serif',
    fontWeight: 'bold',
    marginBottom: 16
  },
  cartContainerBig: {
    width: '100%',
    paddingLeft: ({ desktop }) => desktop ? 16 : 0,
    marginBottom: ({ desktop }) => desktop ? 0 : 16
  },
  mainText: {
    fontSize: 42,
    color: '#000',
    margin: 0,
    fontFamily: '\'Roboto\', sans-serif',
    marginBottom: 16
  },
  price: {
    fontSize: 24,
    color: '#707070',
    fontWeight: 300,
    margin: 0,
    fontFamily: '\'Roboto\', sans-serif',
    marginBottom: 16
  },
  products: {
    overflow: 'auto'
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'end'
  }
}
