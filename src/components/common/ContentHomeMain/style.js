import theme from '../../../theme/theme'

const style = {
  contentHome: {
    display: { xs: 'grid', md: 'flex' },
    justifyContent: { md: 'space-between' },
    alignItems: { xs: 'start', md: 'center' },
    gridTemplateColumns: { xs: '1fr' },
    gridTemplateRows: { xs: 'min-content auto' },
    gap: { md: 7.5 },
    height: 'calc(100vh - 100px)',
    pt: { xs: 5, md: 0, },
    pb: 12.5,
  },
  contentHomeWrapp: {
    display: 'flex',
    gap: { xs: 2.5, sm: 3, md: 3.75 },
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
    fontSize: { xs: 14, sm: 18 },
  },
  contentHomeTitle: {
    fontSize: { xs: 40, sm: 60, md: 70, lg: 80 },
  }
}

export default style