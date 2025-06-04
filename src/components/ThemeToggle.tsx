import {useContext} from 'react';
import {ThemeContext} from "./../contexts/ThemeContext.tsx";

export default function ThemeToggle() {
    const {toggleTheme} = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    )
}