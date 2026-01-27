import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { memberSchema, type MemberForm } from './validation/validation-schema.ts';
import { Button, ListItem, Stack, TextField } from '@mui/material';
import type { Member } from '../tip-calculator/model/entities.ts';

type AddMemberFormProps = {
  onAdd: (member: Member) => void;
}

export function AddMemberForm({ onAdd }: AddMemberFormProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isSubmitted },
  } = useForm<MemberForm>({
    resolver: zodResolver(memberSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (data: MemberForm) => {
    onAdd({
      id: crypto.randomUUID(),
      name: data.name,
      description: data.description ?? "",
    });
    reset();
  };

  return (
    <ListItem component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            const hasError = (touchedFields.name || isSubmitted) && !!errors.name;

            return (
              <TextField
                {...field}
                label="New member name"
                size="small"
                fullWidth
                error={hasError}
                helperText={hasError ? errors.name?.message : ""}
              />
            );
          }}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="New member description"
              size="small"
              fullWidth
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          )}
        />

        <Button type="submit" variant="text">
          Add
        </Button>
      </Stack>
    </ListItem>
  );
}
