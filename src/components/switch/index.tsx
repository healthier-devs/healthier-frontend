import { styled } from "@mui/material/styles";
import MUISwitch, { SwitchProps } from "@mui/material/Switch";
import theme from "src/lib/theme";

export interface ISwitch extends React.HTMLAttributes<HTMLInputElement> {
  checked: boolean;
}

const Switch = styled((props: SwitchProps) => <MUISwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(() => ({
  width: 40,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "200ms",
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.color.blue,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.color.grey_100,
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.color.grey_600,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
  },
  "& .MuiSwitch-track": {
    borderRadius: 10,
    backgroundColor: theme.color.grey_600,
    opacity: 1,
    transition: "background-color 0.1s",
  },
}));

export default Switch;
