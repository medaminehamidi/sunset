export default {
  logoStyle: {
    width: 40,
    height: 40,
    borderRadius: 6
  },
  lofStyle: {
    width: 100
  },
  topbarRightSide: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40
  },
  topbarLeftSide: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: '19px !important',
    paddingLeft: 12,
    width: '80px !important',
    justifyContent: 'center',
    display: 'flex',
    color: '#fff !important',
    '&:hover': {
      color: '#05a081 !important'
    },
    cursor: 'pointer'
  },
  title2: {
    fontSize: '19px !important',
    paddingLeft: 12,
    width: '80px !important',
    fontWeight: 'bold !important',
    justifyContent: 'center',
    display: 'flex',
    color: '#fff !important',
    cursor: 'pointer'
  },
  button: {
    color: '#fff !important',
    fontSize: '16px !important',
    fontWeight: 'bold !important',
    width: '80%',
    height: 50,
    backgroundColor: '#f65c41 !important',
    marginTop: '24px !important'
  },
  topSection: {
    backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://a-static.besthdwallpaper.com/league-of-legends-lol-projet-fiora-fond-d-ecran-2880x960-52350_104.jpg")',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundSize: 'cover',
    height: 380,
    padding: 16
  },
  searchContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItem: 'center'
  },
  searchSubContainer: {
    height: 300,
    width: 650,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  bigTitleNew: {
    fontSize: '36px !important',
    lineHeight: '48px !important',
    paddingLeft: 12,
    fontWeight: 'bolder !important',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    color: '#f65c41 !important',
    marginBottom: '12px !important'
  },
  bigTitle: {
    fontSize: '36px !important',
    lineHeight: '48px !important',
    paddingLeft: 12,
    fontWeight: 'bold !important',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    color: '#fff !important',
    marginBottom: '12px !important'
  },
  textinput: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: '4px',
    width: '100%',
    '& > div': {
      '& > input': {
        color: '#1a1a1a'
      }
    }
  }
}
