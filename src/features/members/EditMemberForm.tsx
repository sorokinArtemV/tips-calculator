import { Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import type { MemberDraft } from '../tip-calculator/model/entities.ts';
import React, { type Dispatch, type SetStateAction } from 'react';


export function EditMemberForm(
  {
    draft,
    setDraft,
    onSave,
    onCancel,
  }: {
    draft: MemberDraft;
    setDraft: Dispatch<SetStateAction<MemberDraft | null>>;
    onSave: () => void;
    onCancel: () => void;
  }) {
  return (
    <>
      <DialogTitle>Edit member</DialogTitle>

      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Name"
          value={draft.name}
          onChange={e =>
            setDraft(d =>
              d ? { ...d, name: e.target.value } : d
            )
          }
        />

        <TextField
          label="Description"
          value={draft.description}
          onChange={e =>
            setDraft(d =>
              d ? { ...d, description: e.target.value } : d
            )
          }
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button variant="contained" onClick={onSave}>
          Save
        </Button>
      </DialogActions>
    </>
  );
}

