import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

interface AnchorProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export default function Anchor({ children, className, href, asChild }: AnchorProps) {
  const Comp = asChild ? Slot : 'a';
  return (
    <Comp href={href} className={cn('underline font-medium', className)}>
      {children}
    </Comp>
  );
}
