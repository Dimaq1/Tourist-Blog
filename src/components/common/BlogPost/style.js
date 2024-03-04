import theme from "../../../theme/theme"


const style = {
  container: {
    background: theme.palette.background.main,
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    py: 6.25,
    gap: { xs: 3, sm: 5 }
  },
  innerName: {
    color: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    gap: 3.75,
    fontWeight: 800,
    letterSpacing: 6,
    textTransform: 'uppercase',
    fontSize: { xs: 12, sm: 18 },
  },
  innerTitle: {
    fontSize: { xs: 30, sm: 40, md: 50, lg: 60 },
    lineHeight: 1.2,
    letterSpacing: 0
  },
  innerText: {
    fontSize: { xs: 16, md: 18 },
    fontFamily: 'Gilroy-Medium,sans-serif',
    lineHeight: 1.7, letterSpacing: 0
  },
  innerImage: {
    maxWidth: '100%'
  }
}

export default style