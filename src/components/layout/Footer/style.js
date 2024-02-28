import theme from "../../../theme/theme"

const style = {
  footer: {
    background: theme.palette.background.main,
    position: 'relative',
    py: { xs: 5, md: 10, },
  },
  divider: {
    top: 0,
    bgcolor: theme.palette.secondary.main,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: { xs: 'column', md: 'row', },
    gap: 3.5,
  },
  navbar: {
    background: 'transparent',
    position: 'static',
    width: '100%',
    maxWidth: { md: 380, lg: 480, },
    boxShadow: 0,
    color: theme.palette.primary.main,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: { xs: 'space-around', md: 'space-between', },
    gap: { xs: 3, md: 0, },
    order: { xs: -1, md: 0 },
  },
  navbarTitle: {
    fontSize: { xs: 18, sm: 24 },
    color: theme.palette.secondary.main,
  },
  wrappText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textNotes: {
    pt: 2,
    maxWidth: { xs: 'fit-content', md: 300 },
    fontSize: { xs: 15, sm: 18 },
    mb: { xs: 3, md: 0, }
  },
  textCopyright: {
    color: theme.palette.primary.dark,
    fontSize: { xs: 15, sm: 18 }
  },
  listItem: {
    px: 0,
    fontSize: { xs: 15, sm: 18 }
  },
}

export default style