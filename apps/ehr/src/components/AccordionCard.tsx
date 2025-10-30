import { otherColors } from '@ehrTheme/colors';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { FC, PropsWithChildren, ReactNode } from 'react';

type AccordionCardProps = PropsWithChildren<{
  collapsed?: boolean;
  onSwitch?: () => void;
  label?: string | ReactNode;
  headerItem?: ReactNode;
  withBorder?: boolean;
  dataTestId?: string;
}>;

export const AccordionCard: FC<AccordionCardProps> = (props) => {
  const { collapsed, onSwitch, label, children, headerItem, dataTestId, withBorder = true } = props;

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1px',
        backgroundColor: otherColors.solidLine,
        border: withBorder ? `1px solid ${otherColors.solidLine}` : 'none',
        borderRadius: '12px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }}
      data-testid={dataTestId}
    >
      {label && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            backgroundColor: otherColors.apptHover,
            py: 1,
            px: 3,
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexGrow: 1,
              cursor: collapsed !== undefined ? 'pointer' : 'inherit',
            }}
            onClick={onSwitch}
          >
            {collapsed !== undefined && onSwitch && (
              <IconButton sx={{ p: 0 }}>
                <ArrowDropDownCircleOutlinedIcon
                  fontSize="small"
                  sx={{
                    color: theme.palette.primary.main,
                    rotate: collapsed ? '' : '180deg',
                  }}
                ></ArrowDropDownCircleOutlinedIcon>
              </IconButton>
            )}
            {typeof label === 'string' ? (
              <Typography variant="h6" color={theme.palette.primary.dark} fontWeight={700}>
                {label}
              </Typography>
            ) : (
              label
            )}
          </Box>

          {headerItem}
        </Box>
      )}
      {!collapsed && (
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            borderRadius: label ? undefined : '12px',
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};
