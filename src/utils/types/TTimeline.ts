export type TTimelineData = {
  heading: string;
  dates: { [key: string]: string | string[] };
};

export type TTimeline = {
  title: string;
  data: TTimelineData[];
}[];
