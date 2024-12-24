import { FaGrin, FaGrinWink } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { nextTheme } from '../../actions';
import IconRow from './IconRow';
import FadeInAnimationWrapper from '../wrappers/FadeInAnimationWrapper';

function PersonCardMiddle() {
  const dispatch = useDispatch();
  const switchTheme = () => {
    dispatch(nextTheme());
  };

  return (
    <FadeInAnimationWrapper direction={'up'} delay={100}>
      <div className="flex flex-col h-full w-full lg:w-min justify-center items-center p-10 bg-secondary">
        <div
          className="flex relative items-center justify-center text-secondary bg-primary-dark h-48 w-48 text-8xl cursor-pointer rounded-full"
          onClick={switchTheme}
        >
          <FaGrin className="absolute hover:opacity-0" />
          <FaGrinWink className="absolute opacity-0 hover:opacity-100" />
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
