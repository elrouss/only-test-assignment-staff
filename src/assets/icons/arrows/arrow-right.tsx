import styles from './arrows.module.scss';

interface IArrowLeftProps {
  color: 'gray' | 'blue';
  size?: {
    width: string;
    height: string;
  };
}

export const ArrowRight = ({
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
    <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" strokeWidth="2" />
  </svg>
);
