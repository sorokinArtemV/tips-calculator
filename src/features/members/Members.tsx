import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider, List,
  ListItem, Stack,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import type { Member } from '../tip-calculator/model/entities.ts';
import RemoveIcon from '@mui/icons-material/Remove';
import { MemberRow } from '../tip-calculator/ui/MemberRow.tsx';
import { AddMemberForm } from './AddMemberForm.tsx';

export function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isAddMemberFormOpen, setIsAddMemberFormOpen] = useState(false);


  const handleToggleAddMemberForm = () => setIsAddMemberFormOpen(isActive => !isActive);

  const handleAddMember = (member: Member) => {
    if (member.name === "") return;
    const newMember: Member = {
      id: crypto.randomUUID(),
      name: member.name,
      description: member.description,
    };
    setMembers((members: Member[]) => [...members, newMember]);
    return;
  };

  return (
    <Card variant="outlined">
      <CardHeader
        title="Members"
        action={
          <Button
            variant="outlined"
            startIcon={isAddMemberFormOpen ? <AddIcon/> : <RemoveIcon/>}
            onClick={handleToggleAddMemberForm}
            sx={{ width: 150, justifyContent: "flex-start" }}
          >
            {isAddMemberFormOpen ? "Add member" : "Close form"}
          </Button>
        }
      />
      <CardContent>
        <List disablePadding>
          {members.map(m => (
            <MemberRow key={m.id} member={{ id: m.id, name: m.name, description: m.description }}/>
          ))}
        </List>
        {!isAddMemberFormOpen &&
          <>
            {members.length > 0 && <Divider sx={{ my: 1, pt: 1 }}/>}

            <AddMemberForm onAdd={handleAddMember}/>
          </>
        }
      </CardContent>
    </Card>

  );
}