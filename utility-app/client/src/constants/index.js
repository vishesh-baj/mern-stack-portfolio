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
  // {
  //   key: nanoid(),
  //   path: PATHS.pomodoros,
  //   Element: PomodorosPage,
  // },
];

// sidebar mapping
export const SIDEBAR_MAPPING = [
  {
    name: "Home",
    path: PATHS.home,
  },
  {
    name: "Todos",
    path: PATHS.toods,
  },
  {
    name: "Notes",
    path: PATHS.notes,
  },
  {
    name: "Color Palettes",
    path: PATHS.colorPicker,
  },
  // {
  //   name: "Pomodoros",
  //   path: PATHS.pomodoros,
  // },
];

export const colorPaletteModalMapping = [
  {
    name: "title",
    label: "Enter Title",
    type: "text",
    placeholder: "Title for the palette",
  },
];

export const HOMEPAGE_CARD_MAPPING = [
  {
    title: "Todos",
    color: "bg-primary",
  },
  {
    title: "Notes",
    color: "bg-accent",
  },
  {
    title: "Color Pallette",
    color: "bg-secondary",
  },
];
