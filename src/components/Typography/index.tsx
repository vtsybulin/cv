import { ComponentType, HTMLAttributes, ReactElement } from 'react';
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

type TComponentProps = HTMLAttributes<HTMLElement>;

type TAs = 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
export type TTypographyVariant = 'title1' | 'title2' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'body3' | 'caption1' | 'caption2';

interface ITypographyProps extends TComponentProps {
  as?: TAs;
  variant?: TTypographyVariant;
}

const Typography = ({
  as = 'p',
  variant = 'body1',
  className,
  ...rest
}: ITypographyProps): ReactElement => {
  const Component = as as unknown as ComponentType<TComponentProps>;

  return (
    <Component
      className={twMerge('inline-block', classnames({
        'text-4xl font-extrabold uppercase': variant === 'title1',
        'text-2xl font-extrabold uppercase': variant === 'title2',
        'text-lg font-bold': variant === 'subtitle1',
        'text-sm font-semibold uppercase': variant === 'subtitle2',
        'text-base leading-normal': variant === 'body1',
        'text-sm leading-normal': variant === 'body2',
        'text-xs leading-normal': variant === 'body3',
        'text-xs font-semibold uppercase ': variant === 'caption1',
        'text-xs ': variant === 'caption2',
      }), className)}
      {...rest}
    />
  );
};

export default Typography;

