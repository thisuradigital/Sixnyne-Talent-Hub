import { GlobalNav } from "./GlobalNav";

interface GlobalLayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

export const GlobalLayout = ({ children, hideNav }: GlobalLayoutProps) => {
  return (
    <div className="pb-20 md:pb-20">
      {children}
      {!hideNav && <GlobalNav />}
    </div>
  );
};
