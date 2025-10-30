import { createContext, ReactNode, useContext, useState } from 'react';
import { ReactElement } from 'react';

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  sidebarWidth: number;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }): ReactElement {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  const sidebarWidth = isCollapsed ? 60 : 240;

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar, sidebarWidth }}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar(): SidebarContextType {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}
