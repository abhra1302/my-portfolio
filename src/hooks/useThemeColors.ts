import { useTheme } from "../context/ThemeContext";
import { LIGHT_COLORS, DARK_COLORS } from "../constants/colors";

export function useThemeColors() {
  const { mode } = useTheme();
  return mode === "light" ? LIGHT_COLORS : DARK_COLORS;
}
