'use client';

import { ReactElement, useEffect, useRef } from 'react';
import throttle from 'lodash-es/throttle';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

import useToggle from '^/hooks/useToggle';

const Spotlight = (): ReactElement | null=> {
  const ref = useRef<HTMLDivElement>(null);
  const [isSpotlightVisible, showSpotlight] = useToggle(false);

  useEffect(
    (): () => void => {
      const injectCursorPosition = throttle(({ x, y }: PointerEvent): void => {
        if (!ref.current) {
          return;
        }

        showSpotlight();

        ref.current.style.setProperty('--cursor-x', `${Math.round(x)}px`);
        ref.current.style.setProperty('--cursor-y', `${Math.round(y)}px`);
      }, 100);

      document.documentElement.addEventListener('pointermove', injectCursorPosition);

      return (): void => document.documentElement.removeEventListener('pointermove', injectCursorPosition);
    },
    [showSpotlight],
  );

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 size-full [--cursor-x:0px] [--cursor-y:0px]"
    >
      <div
        className={twMerge('size-[40rem] translate-x-[--spotlight-x] translate-y-[--spotlight-y] rounded-full bg-primary/10 opacity-0 blur-3xl transition-all ease-in [--spotlight-x:calc(var(--cursor-x)_-_50%)] [--spotlight-y:calc(var(--cursor-y)_-_50%)]', classNames({
          'opacity-1': isSpotlightVisible,
        }))}
      />
    </div>
  );
};

export default Spotlight;
