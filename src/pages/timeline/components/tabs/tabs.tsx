import { nanoid } from 'nanoid';

import React, { memo } from 'react';

import { ButtonDefault } from 'components/buttons/button-default';
import { HeadingDefault } from 'components/headings/heading-default/heading-default';

import { TTimelineData, TElementsPosition } from 'utils/types/TTimeline';

interface ITabsProps {
  data: TTimelineData[];
  activeTabNumber: number;
  position: TElementsPosition;
  additionalRotationDegree: number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Tabs = memo(
  ({
    data,
    activeTabNumber,
    position,
    additionalRotationDegree,
    onChange,
  }: ITabsProps) => (
    <>
      {data.map(({ heading }, i) => (
        <div
          key={nanoid()}
          style={{
            transform: `rotate(${position[i].itemRotation}deg) translate(${
              position[i].translation
            }px) rotate(${
              position[i].textRotation + additionalRotationDegree
            }deg)`,
          }}
        >
          <ButtonDefault
            type="radio"
            name="history"
            heading={
              <HeadingDefault
                level={3}
                type="section"
                text={heading}
                color="darkBlue"
              />
            }
            number={i + 1}
            activeTab={activeTabNumber}
            onChange={onChange}
          />
        </div>
      ))}
    </>
  )
);
