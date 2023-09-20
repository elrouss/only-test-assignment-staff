import { nanoid } from 'nanoid';

import React from 'react';

import { ButtonDefault } from 'components/buttons/button-default';
import { HeadingDefault } from 'components/headings/heading-default/heading-default';

import { TTimelineData } from 'utils/types/TTimeline';

interface ITabsProps {
  data: TTimelineData[];
  activeTabNumber: number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Tabs = ({ data, activeTabNumber, onChange }: ITabsProps) => (
  <>
    {data.map(({ heading }, i) => (
      <div key={nanoid()}>
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
);
