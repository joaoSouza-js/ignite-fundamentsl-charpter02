import { Router } from './router/router'
import { GlobalStyle } from './styles/themes/global'
import { defaultTheme } from './styles/themes/default'
import { CycleContextProvider } from './context/CycleContext'

import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CycleContextProvider>
        <Router />
      </CycleContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
