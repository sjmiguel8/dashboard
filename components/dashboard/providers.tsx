import { TooltipProvider } from '../ui/tooltip.tsx';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
