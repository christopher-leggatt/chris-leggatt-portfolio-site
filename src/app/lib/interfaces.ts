export interface NavLinkProps {
  href: string;
  text: string;
}

export interface SoftwareItem {
  url: string;
  title: string;
  types: string[];
  description: string;
}

export interface TechStackItem {
  url: string;
  title: string;
  types: string[];
  description: string;
}

export interface ToolboxProps {
  software?: SoftwareItem[];
  techStack?: TechStackItem[];
}
