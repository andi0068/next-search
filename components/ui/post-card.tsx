import { Slot } from '@radix-ui/react-slot';

type WithAsProp<T extends object> = T & { asChild?: boolean };

interface BaseProps {
  children?: React.ReactNode;
}

export function Root({ children }: BaseProps) {
  return (
    <section className="flex items-center p-4 rounded-md space-x-3 hover:bg-background-secondary">
      {children}
    </section>
  );
}

export function Image({ children, asChild }: WithAsProp<BaseProps>) {
  const Comp = asChild ? Slot : 'div';
  return <Comp className="object-cover w-10 h-w-10 rounded-md">{children}</Comp>;
}

export function Content({ children }: BaseProps) {
  return <div>{children}</div>;
}

export function Title({ children }: BaseProps) {
  return <h3 className="text-sm font-medium">{children}</h3>;
}

export function Footer({ children }: BaseProps) {
  return <footer>{children}</footer>;
}

export function FootCopy({ children }: BaseProps) {
  return (
    <p className="inline px-2 text-sm border-l border-separator text-foreground-tertiary first-of-type:pl-0 first-of-type:border-l-0">
      {children}
    </p>
  );
}
