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
