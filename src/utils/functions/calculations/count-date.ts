import React from 'react';

import { COUNTER_TIMER } from 'utils/constants';
import { TYearsCounter } from 'utils/types/TTimeline';

export const countDate = (
  action: 'increment' | 'decrement' | 'stop',
  position: 'currStart' | 'currEnd',
  onState: React.Dispatch<React.SetStateAction<TYearsCounter>>
) =>
  setInterval(() => {
    switch (action) {
      case 'increment':
        onState((prevState) => ({
          ...prevState,
          [position]: prevState[position] + 1,
        }));
        break;

      default:
        onState((prevState) => ({
          ...prevState,
          [position]: prevState[position] - 1,
        }));
    }
  }, COUNTER_TIMER);
