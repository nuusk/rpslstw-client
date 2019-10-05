const size = {
  mobile: 425,
  tablet: 1024,
  desktop: 2560,
};

const theme = {
  color: {
    accent: {
      primary: '#80A1D4',
      secondary: '#75C9C8',
      error: '#AA1B2E',
    },
    text: '#2D2C2D',
    background: '#C0B9DD',
    palette: { // for reference
      platinum: '#E9EAE8',
      isabelline: '#F7F4EA',
      lavenderGray: '#C0B9DD',
      vistaBlue: '#80A1D4',
      moonstoneBlue: '#75C9C8',
      charlestonGreen: '#2D2C2D'
    },
  },
  font: {
    family: {
      base: 'Rubik, sans-serif',
      special: 'Megrim, sans-serif',
    },
    size: {
      base: '16px',
      heading: {
        primary: '3rem',
        secondary: '2rem',
      },
      label: {
        primary: '1.25rem',
        secondary: '0.875rem',
      },
    },
    weight: {
      base: '300',
      bold: '500',
    },
    lineHeight: {
      label: '1.2',
      heading: '1.3',
      text: '1.8',
    },
  },
  screen: {
    wide: '100vw',
    narrow: '1200px',
  },
  transition: {
    quick: '0.2s cubic-bezier(.57,.17,.32,.92)',
    base: '0.4s cubic-bezier(.49,.98,.87,.99)',
    slow: '1s cubic-bezier(.49,.98,.87,.99)',
  },
  zindex: {
    front: 3000,
    middle: 2000,
    back: 1000,
  },
  devices: {
    mobile: `(max-width: ${size.mobile}px)`,
    tablet: `(min-width: ${size.mobile + 1}px) and (max-width: ${size.tablet}px)`,
    desktop: `(min-width: ${size.tablet + 1}px) and (max-width: ${size.desktop}px)`,
  },
};

export default theme;
