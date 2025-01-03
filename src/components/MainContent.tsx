interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 text-white">
      {children}
    </div>
  );
}