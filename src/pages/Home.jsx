import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import Project from '../pages/sections/ProjectsSections';
import Button from '../components/reusable/Button';
import About from './sections/AboutMeSection';
import Contact from './sections/ContactSection';
import Skills from './sections/Skills';
import { useEffect } from 'react';




const Home = () => {
	useEffect(() => {
		document.title = "_Home";
	    }, []);
	return (
		<div className="container mx-auto">
			<AppBanner/>
			<About/>
			<Skills/>
			<Project/>

			
			<Contact/>
		</div>
	);
};

export default Home;
