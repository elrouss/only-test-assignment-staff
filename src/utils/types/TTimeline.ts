export type TTimelineData = {
  heading: string;
  dates: { [key: string]: string | string[] };
};

export type TTimeline = {
  title: string;
  data: TTimelineData[];
}[];

export type TYearsCounter = {
  currStart: number;
  currEnd: number;

  nextStart: number;
  nextEnd: number;
};

export type TElementsPosition = {
  itemRotation: number;
  textRotation: number;
  translation: number;
}[];
