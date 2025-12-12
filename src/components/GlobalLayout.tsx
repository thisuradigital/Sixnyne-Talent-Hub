import { GlobalHeader } from "./GlobalHeader";

interface GlobalLayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

export const GlobalLayout = ({ children, hideNav }: GlobalLayoutProps) => {
  return (
    <div className="pt-16">
      {!hideNav && <GlobalHeader />}
      {children}
    </div>
  );
};
