import { Outlet } from "react-router-dom"
import AppHeader from "./components/layout/app.header"
import AppFooter from "./components/layout/app.footer"

function Layout() {

  return (
    <div>
      <AppHeader />
      <div style={{ paddingTop: "70px" }}>
        <Outlet />
      </div>
      <AppFooter />
    </div>
  )
}

export default Layout