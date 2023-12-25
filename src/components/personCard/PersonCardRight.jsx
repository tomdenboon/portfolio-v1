import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { formatTime } from '../../utils/formatTime';
import { useDispatch, useSelector } from 'react-redux';
import FadeInAnimationWrapper from '../wrappers/FadeInAnimationWrapper';
import Cv from '../../assets/resume.pdf';
import { setTime } from '../../actions';
import { useEffect, useMemo, useState } from 'react';
import Button from '../CustomButton';

function PersonCardRight() {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.timer.time);
  const normalizedtime = useMemo(() => time ?? Date.now(), [time]);
  const [timer, setTimer] = useState(Date.now() - normalizedtime);

  useEffect(() => {
    if (!time) {
      dispatch(setTime(normalizedtime));
    }

    const interval = setInterval(
      () => setTimer(Date.now() - normalizedtime),
      100,
    );

    return () => clearInterval(interval);
  }, [time, normalizedtime, dispatch]);

  const isMobile = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <FadeInAnimationWrapper
      direction={isMobile ? 'right' : 'up'}
      delay={isMobile ? 100 : 300}
    >
      <div className="flex flex-col h-full w-full bg-primary p-10 gap-4 text-text-dark text-center sm:text-left">
        <h3 className="font-bold text-secondary">Curious?</h3>
        <p className=" text-text-base text-xl font-bold">
          Check out my portfolio!
        </p>
        <p>
          In my portfolio are the projects I am most proud off. Some of them are
          still being updated regularly.
        </p>
        <div className="flex gap-2">
          <Link to="/projects">
            <Button title="Projects" />
          </Link>
          <a href={Cv} target="_blank" rel="noreferrer">
            <Button title="Resume" />
          </a>
        </div>
        <div className="mt-auto">
          Time on portfolio:{' '}
          <span className=" text-secondary">{formatTime(timer)}</span>
        </div>
      </div>
    </FadeInAnimationWrapper>
  );
}

export default PersonCardRight;
