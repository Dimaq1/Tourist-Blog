import theme from '../../../theme/theme'

const style = {
  contentHome: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '10%'
  },
  contentHomeWrapp: {
    display: 'flex',
    gap: '30px',
    flexDirection: 'column',
    maxWidth: '920px'
  },
  contentHometext: {
    color: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    fontWeight: '800',
    lineHeight: '22px',
    letterSpacing: '6px',
    textTransform: 'uppercase',
  },
  line: {
    display: 'block',
    width: '10%',
    height: '2px',
    backgroundColor: '#fbd784',
  },
}

export default style