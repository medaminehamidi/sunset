export default {
  modal: {
    display: ({ show }) => show ? 'block' : 'none',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  modalContent: {
    height: ({ desktop }) => desktop ? 'unset' : 400,
    overflow: ({ desktop }) => desktop ? 'unset' : 'auto',
    backgroundColor: '#fefefe',
    margin: '100px auto',
    padding: 45,
    border: '1px solid #888',
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: ({ desktop }) => desktop ? 'row-reverse' : 'column',
    borderRadius: 6
  }
}
