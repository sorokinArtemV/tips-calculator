import {
  Button,
  Card,
  CardContent,
  CardHeader, Dialog,
  Divider,
  List,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import type { Member, MemberDraft } from '../tip-calculator/model/entities.ts';
import RemoveIcon from '@mui/icons-material/Remove';
import { MemberRow } from '../tip-calculator/ui/MemberRow.tsx';
import { AddMemberForm } from './AddMemberForm.tsx';
import { EditMemberForm } from './EditMemberForm.tsx';


export function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isAddMemberFormOpen, setIsAddMemberFormOpen] = useState(false);
  const [draft, setDraft] = useState<MemberDraft | null>(null);

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

  const handleOpenEdit = (m: Member) => setDraft({ id: m.id, name: m.name, description: m.description });

  const handleSaveEdit = () => {
    if (!draft) return;

    setMembers(prev => prev.map(m => (m.id === draft.id ? {
      ...m,
      name: draft.name,
      description: draft.description
    } : m)));
    setDraft(null);
  };

  const handleDeleteMember = (member: Member) => {
    setMembers(prev => prev.filter(m => m.id !== member.id));
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
            <MemberRow
              key={m.id}
              member={m}
              onEditClick={() => handleOpenEdit(m)}
              onDeleteClick={() => handleDeleteMember(m)}
            />
          ))}
        </List>
        {!isAddMemberFormOpen &&
          <>
            {members.length > 0 && <Divider sx={{ my: 1, pt: 1 }}/>}

            <AddMemberForm onAdd={handleAddMember}/>
          </>
        }
      </CardContent>
      <Dialog
        open={Boolean(draft)}
        onClose={() => setDraft(null)}
        fullWidth
        maxWidth="sm"
      >
        {draft && (
          <EditMemberForm
            draft={draft}
            setDraft={setDraft}
            onSave={handleSaveEdit}
            onCancel={() => setDraft(null)}
          />
        )}
      </Dialog>
    </Card>
  );
}


