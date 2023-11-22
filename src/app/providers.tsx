import './styles/globals.css';
import './styles/codeblocks.css';
import PlausibleProvider from 'next-plausible';
import { ThemeProvider } from 'next-themes';

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <PlausibleProvider domain="chrisleggatt.dev" trackOutboundLinks={true}>
      <ThemeProvider attribute='class'>
      {children}
      </ThemeProvider>
    </PlausibleProvider>
  )
}