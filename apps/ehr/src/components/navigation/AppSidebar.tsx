import AssessmentIcon from '@mui/icons-material/Assessment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { ReactElement, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoleType } from 'utils';
import useEvolveUser from '../../hooks/useEvolveUser';
import { useSidebar } from './SidebarContext';
import { SidebarNavItem } from './SidebarNavItem';

interface NavItem {
  id: string;
  label: string;
  icon: typeof VideocamIcon;
  path: string;
  roles?: RoleType[];
}

const allNavItems: NavItem[] = [
  {
    id: 'appointments',
    label: 'Appointments',
    icon: VideocamIcon,
    path: '/telemed/appointments',
    roles: [RoleType.Administrator, RoleType.Manager, RoleType.Staff, RoleType.Provider, RoleType.CustomerSupport],
  },
  {
    id: 'schedules',
    label: 'Schedules',
    icon: CalendarMonthIcon,
    path: '/schedules',
    roles: [RoleType.Administrator, RoleType.Manager, RoleType.CustomerSupport],
  },
  {
    id: 'patients',
    label: 'Patients',
    icon: PeopleIcon,
    path: '/patients',
    roles: [RoleType.Administrator, RoleType.Manager, RoleType.Staff, RoleType.Provider, RoleType.CustomerSupport],
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: AssessmentIcon,
    path: '/reports',
    roles: [RoleType.Administrator, RoleType.CustomerSupport],
  },
];

export default function AppSidebar(): ReactElement {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useEvolveUser();

  const navItems = useMemo(() => {
    if (!user) return [];
    return allNavItems.filter((item) => {
      if (!item.roles) return true;
      return user.hasRole(item.roles);
    });
  }, [user]);

  const handleLogout = (): void => {
    navigate('/logout');
  };

  return (
    <Box
      sx={{
        width: isCollapsed ? '60px' : '240px',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1200,
        backgroundColor: '#ffffff',
        borderRight: '1px solid #e5e7eb',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          minHeight: '64px',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        {!isCollapsed && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <img
              src="/baba-logo.png"
              alt="Baba Logo"
              style={{
                width: '90px',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        )}
        <IconButton
          onClick={toggleSidebar}
          size="small"
          sx={{
            color: '#6b7280',
            '&:hover': {
              backgroundColor: '#f3f4f6',
              color: '#374151',
            },
          }}
        >
          {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>

      {/* Menu Label */}
      {!isCollapsed && (
        <Box sx={{ px: 2, pt: 3, pb: 1 }}>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Menu
          </Typography>
        </Box>
      )}

      {/* Navigation Items */}
      <Stack spacing={0.5} sx={{ px: 1, py: 1, flex: 1, overflowY: 'auto' }}>
        {navItems.map((item) => (
          <SidebarNavItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            path={item.path}
            isCollapsed={isCollapsed}
            isActive={location.pathname.startsWith(item.path)}
          />
        ))}
      </Stack>

      {/* Footer */}
      <Box sx={{ p: 1, borderTop: '1px solid #e5e7eb' }}>
        <SidebarNavItem
          label="Sign Out"
          icon={LogoutIcon}
          isCollapsed={isCollapsed}
          isActive={false}
          onClick={handleLogout}
        />
      </Box>
    </Box>
  );
}
