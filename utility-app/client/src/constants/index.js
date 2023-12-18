import {
  ColorPalettePage,
  HomePage,
  NotesPage,
  PomodorosPage,
  TodosPage,
} from "../pages";
import { PATHS } from "../routes/paths";
import { nanoid } from "nanoid";
// routes array
export const RoutesArray = [
  {
    key: nanoid(),
    path: PATHS.home,
    Element: HomePage,
  },
  {
    key: nanoid(),
    path: PATHS.toods,
    Element: TodosPage,
  },
  {
    key: nanoid(),
    path: PATHS.notes,
    Element: NotesPage,
  },
  {
    key: nanoid(),
    path: PATHS.colorPicker,
    Element: ColorPalettePage,
  },
  {
    key: nanoid(),
    path: PATHS.pomodoros,
    Element: PomodorosPage,
  },
];
