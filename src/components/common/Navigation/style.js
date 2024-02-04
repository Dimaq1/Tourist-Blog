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
    padding: 0,
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
    backgroundImage: "url('./images/mobile-menu.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  inner: {
    display: 'flex',
    padding: '8px 6px 8px 10px',
  },
  iconMenuButtonClose: {
    marginLeft: 'auto',
    color: theme.palette.primary.main,
    padding: 0,
  },
}

export default style