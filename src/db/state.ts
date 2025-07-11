import { DB, Storage } from "../lib";
import { defaultLocale } from "../locales";

/**
 * Database state
 */
export interface State {
  /** Background state */
  background: BackgroundState;
  /** Widget state */
  [key: `widget/${string}`]: WidgetState | null;
  /** Plugin data */
  [key: `data/${string}`]: unknown;
  /** Whether focus has been activated */
  focus: boolean;
  /** Locale selected */
  locale: string;
  /** Time zone selected, if any */
  timeZone: string | null;
  /** Whether highlighting is enabled */
  highlightingEnabled: boolean;
  /** Whether the settings icon is hidden */
  hideSettingsIcon: boolean;
  /** Position of the settings icon */
  settingsIconPosition: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
  /** Theme preference (light/dark/system) */
  themePreference: "light" | "dark" | "system";
  /** Whether to auto-hide settings menu when not hovering */
  autoHideSettings: boolean;
}

export interface BackgroundState {
  id: string;
  key: string;
  display: BackgroundDisplay;
}

export interface BackgroundDisplay {
  luminosity?: number;
  blur?: number;
  nightDim?: boolean;
  scale?: boolean;
  nightStart?: string; // format "HH:mm" e.g. "21:00"
  nightEnd?: string; // format "HH:mm" e.g. "05:00"
}

export interface WidgetState {
  id: string;
  key: string;
  order: number;
  display: WidgetDisplay;
}

export interface WidgetDisplay {
  x?: number;
  y?: number;
  colour?: string;
  fontFamily?: string;
  fontSize?: number;
  scale?: number;
  rotation?: number;
  isEditingPosition?: boolean;
  textOutline?: boolean;
  textOutlineStyle?: "basic" | "advanced";
  textOutlineSize?: number;
  textOutlineColor?: string;
  fontWeight?: number;
  position: WidgetPosition;
  customClass?: string;
}

export type WidgetPosition =
  | "topLeft"
  | "topCentre"
  | "topRight"
  | "middleLeft"
  | "middleCentre"
  | "middleRight"
  | "bottomLeft"
  | "bottomCentre"
  | "bottomRight"
  | "free";

// Init data for the store
const initData: State = {
  background: {
    id: "default-unsplash",
    key: "background/unsplash",
    display: {
      luminosity: -0.2,
      blur: 0,
      nightDim: false,
      scale: true,
      nightStart: "21:00", // 9 PM
      nightEnd: "05:00", // 5 AM
    },
  },
  "widget/default-time": {
    id: "default-time",
    key: "widget/time",
    order: 0,
    display: {
      position: "middleCentre",
    },
  },
  "widget/default-greeting": {
    id: "default-greeting",
    key: "widget/greeting",
    order: 1,
    display: {
      position: "middleCentre",
    },
  },
  focus: false,
  locale: defaultLocale,
  timeZone: null,
  highlightingEnabled: true,
  hideSettingsIcon: false,
  settingsIconPosition: "topLeft",
  themePreference: "system",
  autoHideSettings: false,
};

// Database storage
export const db = DB.init<State>(initData);

// Cache storage
export const cache = DB.init<Record<string, unknown | undefined>>();

// Persist data
export const dbStorage =
  BUILD_TARGET === "web"
    ? Storage.indexeddb(db, "tabliss/config")
    : Storage.extension(db, "tabliss/config", "sync");

export const cacheStorage =
  BUILD_TARGET === "firefox"
    ? Storage.extension(cache, "tabliss/cache", "local")
    : Storage.indexeddb(cache, "tabliss/cache");
