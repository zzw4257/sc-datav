import { useRef, useEffect, type RefObject } from "react";
import gsap from "gsap";

type Direction = "toBottom" | "toTop" | "toLeft" | "toRight";

const useMoveTo = function (
  eleRef: RefObject<HTMLDivElement | null>,
  direction: Direction,
  duration: number = 1,
  delay: number = 0,
  fixedTransform: string = ""
) {
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const restart = () => {
    if (tweenRef.current) {
      tweenRef.current.invalidate();
      tweenRef.current.restart(true);
    }
  };

  const reverse = () => {
    tweenRef.current?.reverse();
  };

  useEffect(() => {
    if (eleRef && eleRef.current) {
      const transformFrom = {
        toTop: `translate(0px, 100%)`,
        toBottom: `translate(0px, -100%)`,
        toLeft: `translate(100%, 0px)`,
        toRight: `translate(-100%, 0px)`,
      }[direction];

      tweenRef.current = gsap.fromTo(
        eleRef.current,
        {
          opacity: 0,
          transform: `${transformFrom} ${fixedTransform}`,
        },
        {
          opacity: 1,
          transform: `translate(0px, 0px) ${fixedTransform}`,
          duration,
          delay,
        }
      );
    }

    return () => {
      tweenRef.current?.kill();
    };
  }, [delay, direction, duration, eleRef, fixedTransform]);

  return { tweenRef, restart, reverse };
};

export default useMoveTo;
