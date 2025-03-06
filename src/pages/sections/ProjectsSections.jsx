import ProjectsGrid from '../../components/projects/sections/ProjectsGridSec';
import ButtonLink from '../../components/reusable/ButtonLink';


const Projects = () => {
	return (
		
			<div className="flex flex-col items-center justify-center mb-12">
				<ProjectsGrid />
				<ButtonLink title="_Plus" link="/Projects"/>
				
			</div>
		
	);
};

export default Projects;
