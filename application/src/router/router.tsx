import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/defaultLayout'
import { History } from '../pages/History'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
