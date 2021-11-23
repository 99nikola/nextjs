import NavBar from "../organisms/nav-bar/NavBar";

const Header = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Header
