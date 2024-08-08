import { DefaultNote } from "./DefaultNote"
import { WarningNote } from "./WarningNote"

const index = Object.assign(DefaultNote, {
  Warning: WarningNote
});

export { index as Note }