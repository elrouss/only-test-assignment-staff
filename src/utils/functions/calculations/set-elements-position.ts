import { CIRCLE_DEGREES } from 'utils/constants';
import { TElementsPosition } from 'utils/types/TTimeline';

export const setElementsPosition = (
  itemsNum: number,
  circleDiameter: number
) => {
  const res: TElementsPosition = [];
  const angle = CIRCLE_DEGREES / itemsNum;
  let rot = 0;

  for (let i = 0; i < itemsNum; i += 1) {
    res.push({
      itemRotation: rot - 60, // number to set first tab on it's correct place in template
      textRotation: -rot + 60,
      translation: circleDiameter / 2,
    });

    rot += angle;
  }

  return res;
};
