import { ReactNode } from 'react';
import { FooterNavLink } from './interfaces';

type CustomMeta = {
  title?: string;
};

type LinkGroupProps = {
  title: string; 
  array: FooterNavLink[];
};