import styles from './arrows.module.scss';

interface IArrowLeftProps {
  color: 'gray' | 'blue';
  size?: {
    width: string;
    height: string;
  };
}

export const ArrowLeft = ({
  color,
  size = { width: '10', height: '14' },
}: IArrowLeftProps) => (
  <svg
    className={styles[color]}
    width={size.width}
    height={size.height}
    viewBox="0 0 10 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" strokeWidth="2" />
  </svg>
);
