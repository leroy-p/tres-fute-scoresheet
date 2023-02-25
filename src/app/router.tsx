import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Root from '../pages/root'


function Router() {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route element={<Root />} path="*" />
        </Routes>
      </BrowserRouter>
  </Suspense>
  )
}

export default Router
