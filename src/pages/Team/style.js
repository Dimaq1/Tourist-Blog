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
  title: {
    textAlign: 'center',
    fontSize: { xs: 25, sm: 30 },
    mb: { xs: 2.5, sm: 3.75 }
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    fontSize: { xs: 16, sm: 18 },
    color: theme.palette.secondary.main,
  }
}

export default style