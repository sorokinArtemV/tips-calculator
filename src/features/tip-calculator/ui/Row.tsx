import { Stack, Typography } from '@mui/material';

export function Row(props: { label: string; value: string; strong?: boolean }) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="baseline">
      <Typography color="text.secondary">{props.label}</Typography>
      <Typography fontWeight={props.strong ? 700 : 500}>{props.value}</Typography>
    </Stack>
  );
}