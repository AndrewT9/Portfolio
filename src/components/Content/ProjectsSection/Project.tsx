import BaseButton from '../../UI/BaseButton';
import ProjectSkill from './ProjectSkill';
import ProjectName from './ProjectName';
import ProjectCard from './ProjectCard';
import ProjectImage from './ProjectImage';
import ProjectBtns from './ProjectBtns';

interface Props {
  projectName: string;
  skills: string[];
  image: string;
  projectLink: string;
  codeLink: string;
  link: string;
  androidLink: string;
  iosLink: string;
  figmaLink: string;
}

export default function Project({
  projectName,
  image,
  skills,
  projectLink,
  codeLink,
  link,
  androidLink,
  iosLink,
  figmaLink
}: Props) {

console.log(!!codeLink)

  return (
    <ProjectCard>
      <ProjectImage
        src={image}
        prjName={projectName}
        prjLink={projectLink}
        codeLink={codeLink}
        link={link}
        androidLink={androidLink}
        iosLink={iosLink}
        figmaLink={figmaLink}
      />
      <div>
        <ProjectName prjName={projectName} />
        <div className='flex flex-wrap'>
          {skills.map((skill) => (
            <ProjectSkill key={skill} skill={skill} />
          ))}
        </div>
      </div>
      <ProjectBtns>
        {!!projectLink && <BaseButton text='view project' link={projectLink} />}
        {!!codeLink && <BaseButton text='view code' link={codeLink} />}
      </ProjectBtns>
    </ProjectCard>
  );
}
