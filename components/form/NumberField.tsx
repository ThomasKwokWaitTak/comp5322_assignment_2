import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Props = {
  num: number;
  helperText?: string;
  editable?: boolean;
  onChange?: React.Dispatch<React.SetStateAction<number>>;
};

const NumberField: React.FC<Props> = ({
  num,
  helperText,
  editable = true,
  onChange = () => {},
}: Props): JSX.Element => {
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <TextField
        helperText={helperText}
        label="Amount"
        value={num || ""}
        onChange={(e) => {
          try {
            const inner = e.target.value;
            editable && onChange(parseFloat(inner));
          } catch {}
        }} 
      />
    </Box>
  );
};

export default NumberField;