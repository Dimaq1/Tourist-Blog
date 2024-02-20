import theme from '../../../theme/theme'

const style = {
  contentHome: {
    display: { xs: 'grid', md: 'flex' },
    justifyContent: { md: 'space-between' },
    alignItems: { md: 'center' },
    gridTemplateColumns: { xs: '1fr' },
    gridTemplateRows: { xs: 'auto auto' },
    gap: { md: 7.5 },
    pt: { xs: 10, md: 18, lg: 20 }
  },
  contentHomeWrapp: {
    display: 'flex',
    gap: 3.75,
    flexDirection: 'column',
    maxWidth: 920,
    gridColumn: { xs: '1 / span 2', md: 'auto' },
    gridRow: { xs: '1 / 2' },
    mb: { xs: 5 }
  },
  contentHometext: {
    color: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    gap: 3.75,
    fontWeight: 800,
    letterSpacing: 6,
    textTransform: 'uppercase',
    fontSize: { xs: 16, sm: 18 },
  },
  contentHomeTitle: {
    fontSize: { xs: 50, sm: 60, md: 70, lg: 80 },
  }
}

export default style