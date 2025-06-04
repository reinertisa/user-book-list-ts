import {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext.tsx";
import {AuthContext} from "../contexts/AuthContext.tsx";

export default function Navbar() {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>{isAuthenticated ? 'Logged in' : 'Logged out'}</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}