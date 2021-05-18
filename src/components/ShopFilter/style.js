export default {
  container: {
    width: '100%',
    backgroundColor: '#f7f7f7'
  },
  categorie: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    height: 50,
    padding: 24,
    borderLeft: '.1px solid #bebebe6D',
    '&:hover': {
      backgroundColor: '#f65c4120'
    }
  },
  categorieSelected: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    backgroundColor: '#f65c414D',
    height: 50,
    padding: 24,
    borderLeft: '.1px solid #bebebe6D'
  },
  categorielast: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    height: 50,
    padding: 24,
    '&:hover': {
      backgroundColor: '#f65c4120'
    }
  },
  amount: {
    fontSize: '16px !important',
    fontFamily: '\'Open Sans\', sans-serif !important',
    fontWeight: '600 !important',
    color: '#0000008F !important',
    justifyContent: 'center',
    display: 'flex',
    cursor: 'pointer',
    opacity: '0',
    lineHeight: '45px !important',
    marginLeft: '90% !important'
  },
  title: {
    fontSize: '16px !important',
    fontFamily: '\'Open Sans\', sans-serif !important',
    fontWeight: '600 !important',
    color: '#0000008F !important',
    justifyContent: 'center',
    display: 'flex',
    cursor: 'pointer',
    lineHeight: '45px !important',
    textTransform: 'uppercase  !important'
  },
  amountSelected: {
    fontSize: '16px !important',
    fontFamily: '\'Open Sans\', sans-serif !important',
    fontWeight: '600 !important',
    color: '#000 !important',
    justifyContent: 'center',
    display: 'flex',
    cursor: 'pointer',
    lineHeight: '45px !important',
    marginLeft: '90% !important'
  },
  titleSelected: {
    fontSize: '16px !important',
    fontFamily: '\'Open Sans\', sans-serif !important',
    fontWeight: '600 !important',
    color: '#000 !important',
    justifyContent: 'center',
    display: 'flex',
    cursor: 'pointer',
    lineHeight: '45px !important',
    textTransform: 'uppercase  !important'
  },
  categorieContainer: {
    marginTop: 24,
    padding: 0,
    width: 'auto',
    border: '.1px solid #bebebe6D',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
