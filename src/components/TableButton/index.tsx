// types
import { CSSProperties } from 'react';

// styles
import styles from 'components/TableButton/tableButton.module.scss';

type Argument = number | string;

interface TableButtonProps {
  onClick: (arg?: Argument) => void;
  arg?: Argument;
  title: string;
  src: string;
  alt: string;
  style?: CSSProperties;
}

function TableButton({
  onClick,
  arg,
  title,
  src,
  alt,
  style,
}: TableButtonProps) {
  return (
    <img
      onClick={() => onClick(arg)}
      className={`${styles.button} btn`}
      src={src}
      alt={alt}
      title={title}
      style={style}
    />
  );
}

export default TableButton;
