import theme from "../../../theme/theme"

const style = {
  bgWrapp: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  bgHome: {
    backgroundImage: "url('./images/bg-home.jpg')",
    width: '100%',
    height: '100%',
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
  },
  bgFogging: {
    background: theme.palette.background.fogging,
    position: 'absolute',
    backgroundPosition: 'center center',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
  },
}

export default style