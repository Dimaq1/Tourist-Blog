import theme from "../../../theme/theme"

const style = {
  bgWrapp: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  bgMain: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'bottom left',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  bgFogging: {
    background: theme.palette.background.fogging,
    position: 'absolute',
    backgroundPosition: 'center center',
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
  },
  bgFogginDown: {
    background: 'linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: '-39%'
  }
}

export default style