import { Box } from '@mui/material';
import { ReactElement, ReactNode } from 'react';
import { useSidebar } from './SidebarContext';

interface MainContentProps {
  children: ReactNode;
}

export function MainContent({ children }: MainContentProps): ReactElement {
  const { sidebarWidth } = useSidebar();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        marginLeft: `${sidebarWidth}px`,
        transition: 'margin-left 0.3s ease',
        backgroundColor: '#fafafa',
        minHeight: '100vh',
        width: `calc(100% - ${sidebarWidth}px)`,
      }}
    >
      {children}
    </Box>
  );
}
