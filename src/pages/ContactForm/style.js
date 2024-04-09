import theme from "../../theme/theme"

const style = {
  containerBg: {
    bgcolor: theme.palette.background.main,
    pt: { xs: 0, sm: 3.75 },
    pb: 3.75
  },
  form: {
    border: '1px solid rgba(251, 215, 132, 1)',
    p: { xs: 2.5, sm: 3.75 },
    textAlign: 'center',
  },
  wrapp: {
    display: { sm: 'flex' },
    gap: 4,
  },
  textField: {
    mb: 4,
    input: {
      fontSize: { xs: 16, sm: 18 },
      color: theme.palette.primary.main
    }
  },
  title: {
    textAlign: 'center',
    fontSize: { xs: 25, sm: 30 },
    mb: { xs: 2.5, sm: 3.75 }
  },
  button: {
    width: { xs: '100%', sm: '30%' },
  },
  text: {
    color: 'green',
    mb: 2,
  }
}

export default style