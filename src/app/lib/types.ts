import { ReactNode } from 'react';

export enum PageType {
  WEBSITE = "website",
}

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export type CustomMeta = {
  title?: string;
};

export type MainLayoutProps = {
  children: ReactNode;
  customMeta?: CustomMeta;
};