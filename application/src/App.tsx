import { ThemeProvider } from 'styled-components'
import { Router } from './router/router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  )
}
