import theme from "../../theme/theme"

const style = {
  containerBg: {
    bgcolor: theme.palette.background.main,
    pt: { xs: 0, sm: 3.75 },
    pb: 3.75
  },
  wrapp: {
    mb: { xs: 3.75, sm: 7.5 },
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: { xs: 25, sm: 30 },
    mb: { xs: 1.5, sm: 2.5 }
  },
  title: {
    fontSize: { xs: 20, sm: 25 },
    mb: { xs: 1.5, sm: 2.5 }
  },
  text: {
    fontSize: { xs: 16, sm: 18 },
    color: theme.palette.secondary.main,
  }
}

export default style