import { ReactNode, ReactElement } from "react";

interface NavLinkProps {
  href: string;
  text: string;
}

interface SoftwareItem {
  url: string;
  title: string;
  types: string[];
  description: string;
}

interface TechStackItem {
  url: string;
  title: string;
  types: string[];
  description: string;
}

interface ToolboxProps {
  software?: SoftwareItem[];
  techStack?: TechStackItem[];
}

interface FooterNavLink {
  name: string;
  href: string;
  icon?: ReactElement;
}

interface FooterNavigation {
  general: FooterNavLink[];
  specifics: FooterNavLink[];
  extra: FooterNavLink[];
  social: FooterNavLink[];
}

interface ChangelogItem {
  title: string;
  date: string;
  description: string;
}

interface ChangelogProps {
  completedItems: ChangelogItem[];
  activeItems: ChangelogItem[];
}

interface MeetupItemProps {
  id?: string;
  name?: string;
  link: string;
  checked: boolean;
}

interface MeetupProps {
  meetupContent: MeetupItemProps[];
}

interface ButtonProps {
  buttonType: ButtonType;
  onButtonClick: Function;
  children: ReactNode;
}

interface PopoverLinkProps {
  children: string;
  href: string;
}

interface ILayoutProps {
  children: ReactNode;
}

type TimelineItemProps = {
  title: string;
  meta: string;
  link?: string | undefined | null;
  meta_small?: string;
  content: any;
  children?: ReactNode;
};