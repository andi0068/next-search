import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap select-none font-medium outline-none rounded-md transition-shadow hover:scale-105 focus-visible:ring focus-visible:ring-offset-[3px] focus-visible:ring-accent/20 active:scale-100 active:opacity-60',
          'py-2 px-4 h-9 text-sm',
          'text-white bg-accent',
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

export default Button;
