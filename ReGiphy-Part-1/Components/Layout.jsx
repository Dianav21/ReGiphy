import TabBar from "./TabBar"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import Stack from "react-bootstrap/Stack"

function Layout() {
    return (
        <div>
            <TabBar />
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout