import { useMediaQuery } from 'react-responsive';
import FadeInAnimationWrapper from '../wrappers/FadeInAnimationWrapper';

function BulletPoint({ text }) {
  return (
    <div className="w-full flex">
      <div className="h-2 w-2 mt-2 mr-4 bg-secondary flex-shrink-0" />
      {text}
    </div>
  );
}

function PersonCardRight() {
  const isMobile = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <FadeInAnimationWrapper direction="up" delay={isMobile ? 100 : 200}>
      <div className="flex flex-col w-full text-text-dark  bg-primary p-10 gap-4">
        <div className="flex gap-4 items-center text-lg text-secondary font-bold">
          Hi,
        </div>
        <div className="text-text-base text-xl font-bold">I am Tom!</div>
        <div className="w-full flex">
          A passionate software engineer, I love clean code and beautiful
          solutions. Excited to bring my value to your company. Here are a few
          points that encapsulate myself well.
        </div>
        <BulletPoint text="I am a team player." />
        <BulletPoint text="I am a fast learner." />
        <BulletPoint text="I am a hard worker." />
        <BulletPoint text="I am a problem solver." />
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardRight;
