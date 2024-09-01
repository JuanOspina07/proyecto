import React, { useState } from "react";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";

const DropListProducts = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="list-css">
      <FormControl variant="outlined" style={{ minWidth: 150 }}>
        <InputLabel id="dropdown-label">Seleccione...</InputLabel>
        <Select
          labelId="dropdown-label"
          value={selectedOption}
          onChange={handleChange}
          label="Opciones"
        >
          <MenuItem value={2}>Maculina</MenuItem>
          <MenuItem value={3}>Femenina</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DropListProducts;
