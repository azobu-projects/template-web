import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, ColorModeProvider } from '@xstyled/emotion'
import GoogleFontLoader from 'react-google-font-loader'

import { GlobalStyleContainer } from '../containers'

import theme from '../data/theme.json'

const ThemeContainer = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GoogleFontLoader
        fonts={[
          { font: 'Inter', weights: [400, 500, 700, 900] },
          { font: 'Inconsolata', weights: [400] }
        ]}
      />
      <GlobalStyleContainer />
      <ColorModeProvider>{children}</ColorModeProvider>
    </ThemeProvider>
  )
}

ThemeContainer.propTypes = {
  children: PropTypes.any.isRequired
}

export default ThemeContainer
