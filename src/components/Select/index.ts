import { SelectDefault } from "./SelectDefault";
import { SelectOption } from "./SelectOption";

const index = Object.assign(SelectDefault, {
  Option: SelectOption
});

export { index as Select }