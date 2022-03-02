import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

export interface RegularField {
  label: string;
  type: "text" | "number" | "date";
}

export interface SelectionField {
  label: string;
  type: "selection";
  items: string[];
}

export type Field = RegularField | SelectionField;

export interface InputDialogProps<T extends { [key: string]: any }> {
  open: boolean;
  title: string;
  defaultValue: T;
  fields: Record<keyof T, Field>;
  onClose: (state: T | null) => Promise<void>;
}

export function InputDialog<T extends { [key: string]: any }>(props: InputDialogProps<T>) {
  const [state, setState] = useState<T>(props.defaultValue);

  function fieldsToInput([fieldName, field]: [string, Field], index: number): JSX.Element {
    if (field.type === "selection") {
      return (
        <FormControl key={index} fullWidth sx={{ my: 1.5 }}>
          <InputLabel required sx={{ ml: -1.6 }}>
            {field.label}
          </InputLabel>
          <Select
            value={state[fieldName]}
            defaultValue={""}
            variant="standard"
            onChange={(e) => setState({ ...state, [fieldName]: e.target.value })}
          >
            {field.items.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    } else {
      return (
        <TextField
          sx={{ my: 1.5 }}
          required
          autoFocus
          fullWidth
          variant="standard"
          key={index}
          label={field.label}
          type={field.type}
          onChange={(e) => setState({ ...state, [fieldName]: e.target.value })}
          InputLabelProps={{
            shrink: true,
            required: true,
          }}
          placeholder={field.type === "date" ? "YYYY-MM-DD" : ""}
        />
      );
    }
  }
  const fieldsAsArray: [string, Field][] = Object.entries(props.fields);

  return (
    <Dialog open={props.open} onClose={() => props.onClose(null)} maxWidth="sm" fullWidth >
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{fieldsAsArray.map((value, index) => fieldsToInput(value, index))}</DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose(null)} color="primary">
          Cancel
        </Button>
        <Button onClick={() => props.onClose(state)} color="primary">
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
}
