import theme from "../../../theme/theme"

const style = {
  navbar: {
    alignItems: 'center',
    background: 'transparent',
    position: 'static',
    width: 'fit-content',
    boxShadow: 0,
  },
  navbarList: {
    display: {
      xs: 'none',
      md: 'flex',
    },
    gap: 1.25,
  },
  navbarListItem: {
    width: 'fit-content',
    p: 0,
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  menuIcon: {
    color: theme.palette.primary.main,
  },
  drawer: {
    width: '50%',
  },
  drawerPaperProps: {
    width: 'inherit',
    overflowX: 'hidden',
    backgroundColor: theme.palette.background.main,
  },
  inner: {
    display: 'flex',
    p: '8px 6px 8px 10px',
  },
  iconMenuButtonClose: {
    ml: 'auto',
    color: theme.palette.primary.main,
    p: 0,
  },
}

export default style