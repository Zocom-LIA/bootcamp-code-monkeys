import { InfinitySpin } from "react-loader-spinner";
import { FC } from "react";
import './style.scss'

type LoaderProps = {
  className: string;
  spinnerProps: {
    visible: boolean;
    width: string;
    color: string;
    ariaLabel: string;
  };
};

export const Loader: FC<LoaderProps> = ({ className, spinnerProps }) => {
  return (
    <article className={className}>
      <InfinitySpin {...spinnerProps} />
    </article>
  );
};
