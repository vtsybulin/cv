import { HTMLAttributes, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

import IBaseComponentProps from '^/types/IBaseComponentProps';

export interface IContainerProps extends IBaseComponentProps, HTMLAttributes<HTMLDivElement> {
  contentClassName?: string;
}

const Container = ({ className, contentClassName, children, ...rest }: IContainerProps): ReactElement => (
  <div
    className={twMerge('mx-auto w-full max-w-screen-xl px-4', className)}
    {...rest}
  >
    <div className={contentClassName}>
      {children}
    </div>
  </div>
);

export default Container;
