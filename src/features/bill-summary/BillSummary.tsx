import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField, ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { Row } from '../tip-calculator/ui/Row.tsx';
import { useState } from 'react';

type BillSummaryProps = {
  tipsAmountInput: number;
  subtotalBillAmount: number;

}

export function BillSummary() {
  const [tipsAmountInput, setTipsAmountInput] = useState<string>('10');
  const [subtotalBillAmount, setSubtotalBillAmount] = useState<number>(0);

  const tipsPercent: "" | number = tipsAmountInput === "" ? 0 : Number(tipsAmountInput);
  const calculatedTipsAmount: number = Math.round(subtotalBillAmount * tipsPercent / 100);
  const totalBill = calculatedTipsAmount + subtotalBillAmount;

  const handleChangeTipsAmount = (value: string) => {
    if (value === "") {
      setTipsAmountInput("");
      return;
    }
    if (Number(value) < 0) return;
    if (!Number.isFinite(Number(value))) return;

    setTipsAmountInput(value);
  };

  {
    return (
      <Card variant="outlined">
        <CardHeader
          title="Bill summary"
          subheader="Tip and overall totals"
        />
        <CardContent>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1.5} alignItems="start">
              <TextField
                label="Tip"
                size="small"
                fullWidth
                value={tipsAmountInput}
                helperText="Tips amount in percent"
                onChange={event => handleChangeTipsAmount(event.target.value)}
              />
              <ToggleButtonGroup
                size="small"
                exclusive
                value="percent"
                aria-label="tip mode"
              >
                <ToggleButton value="percent" disabled>%</ToggleButton>
              </ToggleButtonGroup>
            </Stack>

            <Divider/>

            <Stack spacing={0.75}>
              <Row label="Subtotal" value={`${subtotalBillAmount} UZS`}/>
              <Row label="Tip" value={`${calculatedTipsAmount} UZS`}/>
              <Row label="Total" value={`${totalBill} UZS`} strong/>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    );
  }
}