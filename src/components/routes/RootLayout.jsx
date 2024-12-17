import { Outlet } from 'react-router-dom'
import MainHeader from "../MainHeader";

function RootLayout() {
    return <>
        <>
          <MainHeader />
          <main>
            <Outlet />
          </main>
        </>
    </>
}

export default RootLayout;