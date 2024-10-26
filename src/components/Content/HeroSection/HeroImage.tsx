import mobileImage from '../../../assets/portfolio_avatar.jpg?url';
import tabletImage from '../../../assets/portfolio_avatar.jpg?url';
import desktopImage from '../../../assets/portfolio_avatar.jpg?url';

export default function HeroImage() {
  return (
    <picture className='relative z-[-15] block w-auto '>
      <source srcSet={desktopImage} media='(min-width: 1280px)' />
      <source srcSet={tabletImage} media='(min-width: 768px)' />
      <img
        className='h-[383px] md:h-[600px] xl:h-[720px]'
        src={mobileImage}
        alt='Danny Wen'
      />
    </picture>
  );
}
