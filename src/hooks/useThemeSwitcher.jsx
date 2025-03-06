import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState(localStorage.theme || "dark");
	const activeTheme = theme === 'dark' ? 'light' : 'dark';
	useEffect(() => {
		const root = window.document.documentElement;
		
		root.classList.add(theme);
		root.classList.remove(activeTheme);
		localStorage.setItem('theme', theme);
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};

export default useThemeSwitcher;
