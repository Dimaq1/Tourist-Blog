import theme from '../../theme/theme'

const style = {
  container: {
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
  wrapp: {
    display: 'flex',
    gap: { xs: 2.5, sm: 3, md: 3.75 },
    flexDirection: 'column',
    maxWidth: 920,
    gridColumn: { xs: '1 / span 2', md: 'auto' },
    gridRow: { xs: '1 / 2' },
    mb: { xs: 5 }
  },
  text: {
    color: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    gap: 3.75,
    fontWeight: 800,
    letterSpacing: 6,
    textTransform: 'uppercase',
    fontSize: { xs: 14, sm: 18 },
  },
  title: {
    fontSize: { xs: 40, sm: 60, md: 70, lg: 80 },
  },
  subTitle: {
    fontSize: { xs: 20, sm: 25 },
  }
}

export default style