import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material';

export function MemberPreview(props: {
  name: string;
  total: string;
  items: Array<{ label: string; value: string }>;
}) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar>{props.name.slice(0, 1).toUpperCase()}</Avatar>
              <Typography fontWeight={600}>{props.name}</Typography>
            </Stack>
            <Typography fontWeight={700}>{props.total}</Typography>
          </Stack>

          <Divider />

          <Stack spacing={0.75}>
            {props.items.map((it) => (
              <Stack key={it.label} direction="row" justifyContent="space-between">
                <Typography color="text.secondary">{it.label}</Typography>
                <Typography>{it.value}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}