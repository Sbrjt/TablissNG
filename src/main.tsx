import React from "react";
import { createRoot } from "react-dom/client";
import { register as registerServiceWorker } from "./serviceWorker";
import Root from "./views/Root";
import { preloadBaseIcons } from "./utils";

// Pre-cache common icons
preloadBaseIcons().catch(console.error);

// Render app into root element
createRoot(document.getElementById("root")!).render(<Root />);

registerServiceWorker();

