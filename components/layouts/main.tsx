interface MainProps {
  children?: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return <main className="grow py-6 bg-background-secondary">{children}</main>;
}
