import { Home } from '../pages/Home'
import { History } from '../pages/History'
import { DefaultLayout } from '../layouts/defaultLayout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
