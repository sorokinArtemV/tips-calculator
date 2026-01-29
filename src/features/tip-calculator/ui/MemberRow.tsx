import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import type { Member } from '../model/entities.ts';

type MemberRowProps = {
  member: Member;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

export function MemberRow({ member, onEditClick, onDeleteClick }: MemberRowProps) {
  const { name, description } = member;

  return (
    <ListItem
      secondaryAction={
        <Stack direction="row" spacing={0.5}>
          <IconButton edge="end" aria-label="edit" onClick={onEditClick}>
            <EditOutlinedIcon fontSize="small"/>
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={onDeleteClick}>
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