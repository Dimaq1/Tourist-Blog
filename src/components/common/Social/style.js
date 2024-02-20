const style = {
  socialContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: { xs: 'flex-start', md: 'center' },
    alignItems: 'flex-start',
    gap: '20px',
    order: { xs: 1, md: 0 },
    gridRow: { xs: '2 / 3' },
  },
  socialLink: {
    display: 'inline-block'
  },
  socialText: {
    writingMode: 'vertical-rl',
    m: 0,
    lineHeight: 1,
  },
  socialLinkIcon: {
    fontSize: 24,
    display: 'block',
  }
}

export default style