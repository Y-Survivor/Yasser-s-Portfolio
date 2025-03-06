import { useEffect } from 'react';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	useEffect(() => {
		document.title = "_All_projects";
	    }, []);
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
