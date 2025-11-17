import { useState } from "react";

function SwitchModeBtn() {
    const html = document.documentElement;

    const [mode, setMode] = useState<string>(() => {
        const saved = localStorage.getItem('mode');
        html.setAttribute('data-theme', saved || 'light');
        return saved || 'light';
    })

    const toggleMode = () => {
        if (mode === 'light') {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('mode', 'dark');
            setMode('dark');
        } else {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('mode', 'light');
            setMode('light');
        }
    }

    return (
    <button className={`bg-primary w-10 h-10 flex justify-center items-center rounded-md outline-none`} onClick={toggleMode}>
        <i className={`${mode === 'light' ? 'ri-moon-line' : 'ri-sun-line'} text-2xl text-white`} /> {}
    </button>
    )
}

export default SwitchModeBtn