import { useState } from 'react';
import { FaGrin, FaGrinWink } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { nextTheme } from '../../actions';
import { useMediaQuery } from 'react-responsive';
import IconRow from './IconRow';
import FadeInAnimationWrapper from '../wrappers/FadeInAnimationWrapper';

function PersonCardMiddle() {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const [isHoveredSmiley, setIsHoveredSmiley] = useState(false);

  const toggleHover = () => {
    setIsHoveredSmiley(!isHoveredSmiley);
  };

  const switchTheme = () => {
    dispatch(nextTheme());
  };

  return (
    <FadeInAnimationWrapper direction={isMobile ? 'left' : 'up'} delay={100}>
      <div className="flex flex-col h-full w-full lg:w-min justify-center items-center p-10 bg-secondary">
        <div
          className="flex items-center justify-center text-secondary bg-primary-dark h-48 w-48 text-8xl cursor-pointer rounded-full"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          onClick={switchTheme}
        >
          <div className="flex w-full h-full items-center justify-center bg-primary-dark rounded-full">
            {isHoveredSmiley ? <FaGrinWink /> : <FaGrin />}
          </div>
        </div>
        <div className="flex flex-col mt-5 font-serif text-2xl font-black text-center">
          Tom den Boon
        </div>
        <div className="flex mt-5 font-mono text-lg font-black text-center text-text-dark">
          Software Developer
        </div>
        <IconRow />
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardMiddle;
