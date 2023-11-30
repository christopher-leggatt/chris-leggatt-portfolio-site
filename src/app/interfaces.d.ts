import { ReactNode, ReactElement } from "react";
import { ButtonType } from "./enums";
import { ExperienceProps } from "./types";

interface NavLinkProps {
  href: string;
  text: string;
  isExternal?: boolean;
  className?: boolean;
}

interface RenderNavLinkProps {
  item: NavLinkProps;
  isMobile: boolean;
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

interface Experience {
  title: string;
  company: string;
  company_url: string;
  duration: string;
  description: string;
}

interface AboutProps {
  experience: Experience[];
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

interface LayoutProps {
  children: ReactNode;
}

interface TemplateProps {
  children: ReactNode;
}

interface TimelineItemProps {
  title: string;
  meta: string;
  link?: string | undefined | null;
  meta_small?: string;
  content: any;
  children?: ReactNode;
}

export interface ExtendedDocument extends Document {
  startViewTransition?: any;
}

interface ButtonLinkProps {
  buttonType: ButtonType;
  href: string;
  children?: ReactNode;
}
