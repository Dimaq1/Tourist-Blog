import theme from '../../../theme/theme'

const style = {
  slider: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: `2px solid ${theme.palette.primary.dark}`,
  },
  sliderButton: {
    textTransform: 'none',
    color: theme.palette.primary.main,
  }
}

export default style