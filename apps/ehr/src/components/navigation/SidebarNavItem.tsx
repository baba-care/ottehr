import { Box, Button, SvgIconTypeMap, Tooltip, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface SidebarNavItemProps {
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & { muiName: string };
  path?: string;
  isCollapsed: boolean;
  isActive: boolean;
  onClick?: () => void;
}

export function SidebarNavItem({
  label,
  icon: Icon,
  path,
  isCollapsed,
  isActive,
  onClick,
}: SidebarNavItemProps): ReactElement {
  const buttonContent = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
        width: '100%',
        gap: 2,
      }}
    >
      <Icon sx={{ fontSize: 20 }} />
      {!isCollapsed && (
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 'inherit',
          }}
        >
          {label}
        </Typography>
      )}
    </Box>
  );

  const button = (
    <Button
      component={path && !onClick ? Link : 'button'}
      to={path}
      onClick={onClick}
      sx={{
        width: '100%',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
        backgroundColor: isActive ? '#f3f4f6' : 'transparent',
        color: isActive ? '#1a1a1a' : '#4b5563',
        fontWeight: isActive ? 600 : 500,
        borderRadius: '10px',
        px: isCollapsed ? 1 : 2,
        py: 1.5,
        minHeight: '48px',
        textTransform: 'none',
        transition: 'all 0.2s',
        '&:hover': {
          backgroundColor: '#f3f4f6',
          color: '#1a1a1a',
        },
        '&:active': {
          backgroundColor: '#e5e7eb',
        },
      }}
    >
      {buttonContent}
    </Button>
  );

  if (isCollapsed) {
    return (
      <Tooltip title={label} placement="right" arrow>
        {button}
      </Tooltip>
    );
  }

  return button;
}
