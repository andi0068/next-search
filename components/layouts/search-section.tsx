interface BaseProps {
  children?: React.ReactNode;
}

export function Root({ children }: BaseProps) {
  return <section className="rounded-xl bg-background">{children}</section>;
}

export function Header({ children }: BaseProps) {
  return <header className="p-6">{children}</header>;
}

export function Title({ children }: BaseProps) {
  return <h2 className="sr-only">{children}</h2>;
}

export function Body({ children }: BaseProps) {
  return <div className="flex flex-col p-2 border-t border-separator">{children}</div>;
}

export function Footer({ children }: BaseProps) {
  return (
    <footer className="flex items-center justify-between p-6 border-t border-separator">
      {children}
    </footer>
  );
}
