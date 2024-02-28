import theme from '../../../theme/theme'

const style = {
  email: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: { xs: 'flex-start', md: 'center' },
    alignItems: 'flex-end',
    gap: 2.5,
    order: { xs: 2, md: 0 },
    gridRow: { xs: '2 / 3' },
  },
  emailLink: {
    textTransform: 'none',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    writingMode: 'vertical-lr',
    transform: 'rotate(180deg)',
  },
  emailLinkIcon: {
    fontSize: 24,
    display: 'block',
    transform: 'rotate(-90deg)'
  }

}

export default style