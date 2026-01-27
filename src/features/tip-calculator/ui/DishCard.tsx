import {
  Alert,
  Autocomplete,
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { type ReactNode } from 'react';

export function DishCard(props: {
  icon: ReactNode;
  title: string;
  price: string;
  status: string;
  statusColor: 'default' | 'warning' | 'success' | 'error' | 'info';
  participants: string[];
}) {
  return (
    <Card variant="outlined">
      <CardContent sx={{ pb: 1.5 }}>
        <Stack spacing={1.25}>
          {/* Top row */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar variant="rounded">{props.icon}</Avatar>

            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                <Typography fontWeight={600} noWrap>
                  {props.title}
                </Typography>
                <Chip size="small" label={props.status} color={props.statusColor}/>
              </Stack>
            </Box>

            <Typography fontWeight={700}>{props.price}</Typography>

            <IconButton aria-label="more">
              <MoreVertIcon fontSize="small"/>
            </IconButton>
          </Stack>

          {/* Participants chips */}
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Eaters
            </Typography>

            {props.participants.length === 0 ? (
              <Alert severity="warning" sx={{ py: 0.5 }}>
                Select at least one eater
              </Alert>
            ) : (
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {props.participants.map((p) => (
                  <Chip key={p} label={p} onDelete={() => {}}/>
                ))}
              </Stack>
            )}
          </Box>

          {/* Add eater control (hardcoded) */}
          <Autocomplete
            options={['Polina', 'Doston', 'Oleg', 'Sanjar', 'Anna']}
            renderInput={(params) => (
              <TextField {...params} size="small" label="Add eater" placeholder="Start typing a name..."/>
            )}
            value={null}
            onChange={() => {}}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}