import { NavLink } from "react-router-dom";
import Stack from "react-bootstrap/Stack"
const TabBar = () => {
    return (
        <header>
            <nav>
                <Stack direction="horizontal" gap={4}>
                    <NavLink to="random">Random</NavLink>
                    <NavLink to="search">Search</NavLink>
                    <NavLink to="trending">Trending</NavLink>
                </Stack>
            </nav>
        </header>
    );
}

export default TabBar;