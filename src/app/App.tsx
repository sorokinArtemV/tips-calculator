import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControl,
  InputLabel,
  List, ListItem,
  MenuItem,
  Select,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import { DishCard } from "../features/tip-calculator/ui/DishCard";
import { MemberPreview } from '../features/tip-calculator/ui/MemberPreview.tsx';
import { BillSummary } from '../features/bill-summary/BillSummary.tsx';
import { Members } from '../features/members/Members.tsx';

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", py: 4, bgcolor: "background.default" }}>
      <Container maxWidth="sm">
        <Stack spacing={2.5}>
          <BillSummary/>
          <Members/>
          {/* ===== Dishes ===== */}
          <Card variant="outlined">
            <CardHeader
              title="Dishes"
              subheader="Add dishes from receipt, then select who ate each dish"
              action={
                <Button startIcon={<AddIcon/>} variant="contained">
                  Add dish
                </Button>
              }
            />
            <CardContent sx={{ pt: 0 }}>
              {/* Filter + Sort панели */}
              <Stack spacing={1.5} sx={{ mb: 2 }}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <ToggleButtonGroup size="small" exclusive value="all">
                    <ToggleButton value="all">All</ToggleButton>
                    <ToggleButton value="unassigned">Unassigned</ToggleButton>
                    <ToggleButton value="personal">Personal</ToggleButton>
                    <ToggleButton value="shared">Shared</ToggleButton>
                  </ToggleButtonGroup>

                  <Box sx={{ flex: 1 }}/>

                  <FormControl size="small" sx={{ minWidth: 190 }}>
                    <InputLabel id="sort-label">Sort</InputLabel>
                    <Select
                      labelId="sort-label"
                      label="Sort"
                      value="unassignedFirst"
                    >
                      <MenuItem value="unassignedFirst">
                        Unassigned first
                      </MenuItem>
                      <MenuItem value="priceDesc">Price: high → low</MenuItem>
                      <MenuItem value="priceAsc">Price: low → high</MenuItem>
                      <MenuItem value="nameAsc">Name: A → Z</MenuItem>
                      <MenuItem value="participantsDesc">
                        Participants count
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Stack>

              <Stack spacing={1.5}>
                {/* Dish 1: Unassigned */}
                <DishCard
                  icon={<RestaurantMenuIcon/>}
                  title="Burger"
                  price="$ 18.00"
                  status="Unassigned"
                  statusColor="warning"
                  participants={[]}
                />

                {/* Dish 2: Personal */}
                <DishCard
                  icon={<LocalCafeIcon/>}
                  title="Tea"
                  price="$ 10.00"
                  status="Personal"
                  statusColor="default"
                  participants={["Polina"]}
                />

                {/* Dish 3: Shared */}
                <DishCard
                  icon={<RestaurantMenuIcon/>}
                  title="Pizza"
                  price="$ 30.00"
                  status="Shared · 3"
                  statusColor="success"
                  participants={["Doston", "Oleg", "Anna"]}
                />

                {/* Dish 4: Shared */}
                <DishCard
                  icon={<RestaurantMenuIcon/>}
                  title="Salad"
                  price="$ 20.00"
                  status="Shared · 2"
                  statusColor="success"
                  participants={["Sanjar", "Polina"]}
                />
              </Stack>

              <Box sx={{ mt: 2 }}>
                <Alert severity="info">
                  UI is hardcoded (no state). Later you will wire up
                  add/edit/delete and participant selection.
                </Alert>
              </Box>
            </CardContent>
          </Card>

          {/* ===== Members detail preview (optional UI block) ===== */}
          <Card variant="outlined">
            <CardHeader
              title="Preview: what each member ate"
              subheader="Read-only UI stub"
            />
            <CardContent sx={{ pt: 0 }}>
              <Stack spacing={1.5}>
                <MemberPreview
                  name="Polina"
                  total="$ 22.33"
                  items={[
                    { label: "Tea", value: "$10.00 (1/1)" },
                    { label: "Salad", value: "$20.00 (1/2)" },
                  ]}
                />
                <MemberPreview
                  name="Doston"
                  total="$ 10.00"
                  items={[{ label: "Pizza", value: "$30.00 (1/3)" }]}
                />
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
