interface BackgroundImageProps {
  imageUrl: string;
}

export function BackgroundImage({ imageUrl }: BackgroundImageProps) {
  return (
    <div 
      className="fixed inset-0 z-0"
      style={{
        backgroundImage: `url("${imageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.6)'
      }}
    />
  );
}