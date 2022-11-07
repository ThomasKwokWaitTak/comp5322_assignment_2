import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

type Props = {
  value: string;
  options: Array<any>;
  helpText: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
};

const SelectField: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-select-currency"
        select
        label="Currency"
        value={props.value}
        onChange={(e) => props.handleChange(e.target.value)}
        helperText={props.helpText}
      >
        {props.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default SelectField;
