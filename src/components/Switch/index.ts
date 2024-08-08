import { SwitchDefault } from "./SwitchDefault";
import { SwitchOption } from "./SwitchOption";

const index = Object.assign(SwitchDefault, {
  Option: SwitchOption
});

export { index as Switch }