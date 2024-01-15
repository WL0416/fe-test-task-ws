import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { useAppSelector, useAppDispatch } from "../../store";
import { limitChange } from "../../store/settingsSlice";
import { LIMIT_MAX, LIMIT_START, LIMIT_STEP } from "../../config";

const Settings = () => {
  const limit = useAppSelector((state) => state.settings.limit);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(limit);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      dispatch(limitChange(newValue));
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography id="non-linear-slider" gutterBottom>
        Limit: {value}
      </Typography>
      <Slider
        value={value}
        min={LIMIT_START}
        step={LIMIT_STEP}
        max={LIMIT_MAX}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
};

export default Settings;
