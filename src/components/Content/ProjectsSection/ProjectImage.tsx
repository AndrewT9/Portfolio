import BaseButton from '../../UI/BaseButton';

interface Props {
  src: string;
  prjName: string;
  prjLink: string;
  codeLink: string;
  link: string;
  androidLink: string;
  iosLink: string;
  figmaLink: string;
}

export default function ProjectImage({
  src,
  prjName,
  prjLink,
  codeLink,
  link,
  androidLink,
  iosLink,
  figmaLink
}: Props) {
  return (
    <div
      className='prj-image relative grid  min-h-[253px] rounded-xl overflow-clip pointer-events-none xl:pointer-events-auto hover:after:opacity-75 after:opacity-0 after:inset-0 after:absolute after:bg-deep-black after:transition-opacity
    ease-out after:duration-500'
    >
      <img className='rounded-xl ' src={src} alt={prjName} loading='lazy' />
      <div className='hidden absolute opacity-0 translate-y-4  place-self-center flex-col gap-y-12 items-center gap-x-8 z-10 transition duration-500 xl:flex'>
        {/* <BaseButton text='view project' link={prjLink} />
        <BaseButton text='view code' link={codeLink} /> */}

        {!!prjLink && <BaseButton text='view project' link={prjLink} />}
        {!!codeLink && <BaseButton text='view code' link={codeLink} />}
        {!!androidLink && <BaseButton text='view on android' link={androidLink} />}
        {!!iosLink && <BaseButton text='view on ios' link={iosLink} />}
        {!!figmaLink && <BaseButton text='Figma Link' link={figmaLink} />}
        {!!link && <BaseButton text='Web view' link={link} />}

      </div>
    </div>
  );
}
