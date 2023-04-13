import "./PlaceholderImage.css";

export interface PlaceholderImageProps {
  text?: string;
}

export function PlaceholderImage({ text = "[placeholder image]"}: PlaceholderImageProps) {
  return <div className="placeholder-image">
    <span>{text}</span>
  </div>
}