import { useContext, useEffect, useState } from 'react';
import { NavbarContext } from '../../App';

function FadeInAnimationWrapper(props) {
  const isNavbarLoaded = useContext(NavbarContext);
  const [animate, setAnimate] = useState(isNavbarLoaded);

  useEffect(() => {
    if (isNavbarLoaded || props.noDelay) {
      setAnimate(true);
    }
  }, [isNavbarLoaded, props.noDelay]);

  const direction = {
    left: '-translate-x-5',
    right: 'translate-x-5',
    up: 'translate-y-5',
    down: '-translate-y-5',
  }[props.direction];

  const delay = {
    100: 'delay-100',
    200: 'delay-200',
    300: 'delay-300',
    400: 'delay-400',
    500: 'delay-500',
    600: 'delay-600',
    700: 'delay-700',
    800: 'delay-800',
    900: 'delay-900',
    1000: 'delay-1000',
  }[props.delay];

  return (
    <div
      className={
        `flex w-full h-full transition duration duration-300 ease-in ${delay} ` +
        (animate ? `opacity-1` : 'opacity-0 ' + direction)
      }
    >
      {props.children}
    </div>
  );
}

export default FadeInAnimationWrapper;
