// File containing building blocks for content.
import { CSSProperties, PropsWithChildren } from 'react'
import './ContentBlocks.css'

export type ContentSectionProps = PropsWithChildren<{
  className?: string,
  style?: CSSProperties,
  centered?: boolean,
  textSize?: "small" | "medium" | "large"
}>

export function ContentSection({ children, className: customClass, style, centered = false, textSize = "small" }: ContentSectionProps) {
  let className = "section";

  if (centered) {
    className += " section-centered";
  }

  if (textSize !== "small") {
    className += ` section-text-${textSize}`;
  }

  if (customClass) {
    className += ` ${customClass}`;
  }

  return <section className={className} style={style}>
    {children}
  </section>
}

export type ImageBackgroundProps = PropsWithChildren<{
  backgroundImage: string
}>

export function ImageBackground({ children, backgroundImage }: ImageBackgroundProps) {
  return <div className="image-background" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${backgroundImage})`
  }}>
    {children}
  </div>
}

export function PageContainer({ children }: PropsWithChildren<{}>) {
  return <main className="page-container">
    {children}
  </main>
}