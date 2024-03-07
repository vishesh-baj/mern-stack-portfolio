import {
  BooksPage,
  ColorPalettePage,
  HomePage,
  NotesPage,
  QuotesPage,
  TodosPage,
} from "../pages";
import { PATHS } from "../routes/paths";
import { nanoid } from "nanoid";
export const GOOGLE_BOOKS_API_KEY = "AIzaSyAJdR8sRchyQjOKgRD0AG_WRODXezzeGy0";
export const GOOGLE_BOOKS_API_ENDPOINT =
  "https://www.googleapis.com/books/v1/volumes?";
export const QUOTES_API_ENDPOINT =
  "https://api.quotable.io/quotes/random?limit=25";

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
    path: PATHS.books,
    Element: BooksPage,
  },
  {
    key: nanoid(),
    path: PATHS.quotes,
    Element: QuotesPage,
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
  {
    name: "Books",
    path: PATHS.books,
  },
  {
    name: "Quotes",
    path: PATHS.quotes,
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
  {
    title: "Books",
    color: "bg-warning",
  },
  {
    title: "Quotes",
    color: "bg-error",
  },
];
