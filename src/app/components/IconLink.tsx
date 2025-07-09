import { IconButton, Tooltip } from '@mui/material';

interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
  tooltip: string;
}

export const IconLink = ({ href, icon, tooltip }: IconLinkProps) => {
  return (
    <Tooltip title={tooltip} arrow>
      <IconButton
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};
