import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

const Input = forwardRef<HTMLInputElement, React.ComponentPropsWithRef<'input'>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex w-full outline-none border border-transparent rounded-md transition-[border-color,box-shadow] placeholder:text-foreground-secondary hover:border-accent focus:border-accent focus:ring focus:ring-accent/20',
        'bg-background',
        'py-1 px-3 h-9 text-sm',
        className,
      )}
      {...props}
    />
  ),
);

export default Input;
