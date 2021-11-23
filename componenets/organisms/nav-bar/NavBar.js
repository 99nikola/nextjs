import Link from "next/link";
import classes from "./navbar.module.css";

const NavBar = () => {
    return (
        <nav className={classes.container}>
            <Link href="/">
                <a className={classes.itemLink}>Home</a>
            </Link>
            <Link href="/users">
                <a className={classes.itemLink}>Users</a>
            </Link>
            <Link href="/posts">
                <a className={classes.itemLink}>Posts</a>
            </Link>
        </nav>
    )
}

export default NavBar
