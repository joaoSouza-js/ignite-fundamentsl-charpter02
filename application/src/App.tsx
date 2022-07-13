import { Router } from './router/router'
import { GlobalStyle } from './styles/themes/global'
import { defaultTheme } from './styles/themes/default'

import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}
