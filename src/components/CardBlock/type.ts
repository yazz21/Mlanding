import { TFunction } from "react-i18next";
export interface CardBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: sec[],
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
}

type sec = {
  title: string;
  content: string;
  icon: string;
}