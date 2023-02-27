import { Outlet } from "react-router-dom"

// UI Components for HomePage
import NotLoggedInNavBar from "../NavBar/NotLoggedInNavBar"
import DummyTextGroup from "../DummyText"



export default function NotLoggedInHomePage() {
    return (
        <>
            <NotLoggedInNavBar />
            <h2 style={{ color: "dodgerblue", backgroundColor: "black" }}
            >YOUR HOME ESSENTIALS, DELIVERED STRAIGHT TO YOUR DOOR!</h2>
            <DummyTextGroup />
            <Outlet />
        </>
    )
}


