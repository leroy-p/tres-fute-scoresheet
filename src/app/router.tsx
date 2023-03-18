import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Root from '../pages/root'
import Dices from '../pages/dices'

function Router() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route element={<Root />} path="/" />
          <Route element={<Dices />} path="/dices" />
        </Routes>
      </BrowserRouter>
  </Suspense>
  )
}

export default Router
