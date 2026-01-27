import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import type { MemberRowProps } from '../model/entities.ts';

export function MemberRow({ member }: MemberRowProps) {
  const { id, name, description } = member;

  return (
    <ListItem
      secondaryAction={
        <Stack direction="row" spacing={0.5}>
          <IconButton edge="end" aria-label="edit">
            <EditOutlinedIcon fontSize="small"/>
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteOutlineIcon fontSize="small"/>
          </IconButton>
        </Stack>
      }
    >
      <ListItemAvatar>
        <Avatar>{name.slice(0, 1).toUpperCase()}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={description}/>
    </ListItem>
  );
}