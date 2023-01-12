import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import Button from 'react-bootstrap/Button';
import Stack from "react-bootstrap/Stack"

const Navbar = () => {
    return (
  
        <Stack className="p-3" direction="horizontal" gap={4}>
            <div className="p-2 bg-info border">
            <NavLink to="random">Random</NavLink>
                <Button as ="random" type="button" value="Submit"/> {''}
                
            </div>
            <div className="p-2  bg-info border">
                <NavLink to="search">Search</NavLink>
                <Button as ="search" type="button" value="Submit"/> {''}
             
            </div>
            <div className="p-2  bg-info border">
                <NavLink to="trending">Trending</NavLink>
                <Button as ="trending" type="button" value="Submit"/> {''}
              
            </div>
        </Stack>
       

    );
}

export default Navbar;