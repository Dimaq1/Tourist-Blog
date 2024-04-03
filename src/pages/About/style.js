import theme from "../../theme/theme"


const style = {
  container: {
    backgroundColor: theme.palette.background.main,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: { xs: 16, sm: 20, md: 30 },
    p: { xs: '15px 0 25px', sm: '30px 0 50px' }
  },
  text: {
    fontSize: { xs: 14, sm: 16, md: 18 },
  },
  wrapp: {
    p: { xs: '20px 0', sm: '40px 0', },
    textAlign: 'center'
  },
  wrappTitle: {
    fontSize: { xs: 21, sm: 25, },
    mb: 2.5
  },
  image: {
    mb: 3.125,
    maxWidth: '100%',
  },
  listItem: {
    gap: 1.25,
    alignItems: 'flex-start',
  },
  listItemIcon: {
    minWidth: 0
  },
  icon: {
    maxWidth: 15,
    color: 'white'
  }
}

export default style