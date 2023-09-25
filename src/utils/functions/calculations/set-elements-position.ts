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
      itemRotation: rot - 60, // additional degree to set first tab on it's correct place as in template
      textRotation: 60 - rot, // additional degree to set first tab on it's correct place as in template
      translation: circleDiameter / 2,
    });

    rot += angle;
  }

  return res;
};
