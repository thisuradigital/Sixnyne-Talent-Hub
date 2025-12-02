import * as React from "react";

// Temporary stub implementation to avoid issues with next-themes/sonner hooks.
// This keeps the API surface compatible without rendering any UI toasts.

type ToasterProps = React.HTMLAttributes<HTMLDivElement>;

const Toaster = (_props: ToasterProps) => {
  return null;
};

const toast = (...args: unknown[]) => {
  // Fallback: log toast calls to the console so they are still observable during debugging.
  if (args.length) {
    // eslint-disable-next-line no-console
    console.log("Toast:", ...args);
  }
};

export { Toaster, toast };
