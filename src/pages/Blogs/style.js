import theme from "../../theme/theme"


const style = {
  container: {
    background: theme.palette.background.main,
  },
  listItem: {
    gap: 6.25,
    py: 3.75,
    px: 0,
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    py: { xs: 1.875, sm: 2.5, md: 0, },
    px: { xs: 2.5, sm: 3.75, md: 0, },
    border: {
      xs: `1px solid ${theme.palette.secondary.main}`, md: 'none',
    },
    borderRadius: 7.5,
    gap: { xs: 2.5, sm: 3.75 },
    maxWidth: { xs: 500, md: 630 },
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
  innerDescription: {
    fontSize: { xs: 16, md: 18 },
    fontFamily: 'Gilroy-Medium,sans-serif',
    lineHeight: 1.7, letterSpacing: 0
  },
  innerButton: {
    gap: 1.25,
    textTransform: 'lowercase',
    color: theme.palette.secondary.main,
  },
  innerImage: {
    maxHeight: { md: 500, lg: 720, },
    display: { xs: 'none', md: 'block' }
  }
}

export default style