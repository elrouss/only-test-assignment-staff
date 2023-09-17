import styles from './counter.module.scss';

interface ICounterProps {
  start: number;
  end: number;
}

export const Counter = ({ start, end }: ICounterProps) => {
  const counter: { start: number | string; end: number | string } = {
    start,
    end,
  };

  const checkNumber = (num: number, key: 'start' | 'end') => {
    switch (!!num) {
      case num > 9:
        break;
      default:
        counter[key] = `0${num}`;
    }
  };

  checkNumber(start, 'start');
  checkNumber(end, 'end');

  return (
    <span className={styles.counter}>{`${counter.start}/${counter.end}`}</span>
  );
};
