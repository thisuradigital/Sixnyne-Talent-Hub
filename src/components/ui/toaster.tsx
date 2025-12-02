import * as React from "react";

// Temporary no-op Toaster to avoid invalid hook calls from the shadcn toast system.
// The rest of the app uses a custom Toast component in src/components/Toast.tsx.
export function Toaster() {
  return null;
}
