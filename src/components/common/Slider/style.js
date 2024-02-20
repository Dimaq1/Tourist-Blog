import theme from '../../../theme/theme'

const style = {
  slider: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: `2px solid ${theme.palette.primary.dark}`,
    gridRow: { xs: '2 / 3' },
    order: { xs: 2, md: 0 }
  },
  sliderButton: {
    textTransform: 'none',
    color: theme.palette.primary.main,
  }
}

export default style