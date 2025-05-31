import { BrowserRouter, Routes, Route } from "react-router-dom"
import { routes } from './Router';
import { Navbar } from './Navbar';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />} >
          {
            routes.map((route) => (
              <Route element={route.element} path={route.path} />
            ))
          }
        </Route>
      </Routes>
    </BrowserRouter>
  )
}