import * as React from "react";

// Temporary stub implementation to avoid issues with next-themes/sonner hooks.
// This keeps the API surface compatible without rendering any UI toasts.

type ToasterProps = React.HTMLAttributes<HTMLDivElement>;

const Toaster = (_props: ToasterProps) => {
  return null;
};

const toast = (..._args: unknown[]) => {
  // Stub implementation - no-op for toast calls
};

export { Toaster, toast };
