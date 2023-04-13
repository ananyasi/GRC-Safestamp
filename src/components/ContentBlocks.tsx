// File containing building blocks for content.
import { CSSProperties, PropsWithChildren } from 'react'
import './ContentBlocks.css'

export type ContentSectionProps = PropsWithChildren<{
  className?: string,
  style?: CSSProperties,
  centered?: boolean,
  textSize?: "small" | "medium" | "large",
  wide?: boolean
}>

export function ContentSection({
  children,
  className: customClass,
  style,
  centered = false,
  textSize = "small",
  wide = false
}: ContentSectionProps) {
  let className = "section";

  if (centered) {
    className += " section-centered";
  }

  if (textSize !== "small") {
    className += ` section-text-${textSize}`;
  }

  if (wide) {
    className += " section-wide";
  }

  if (customClass) {
    className += ` ${customClass}`;
  }

  return <section className={className} style={style}>
    {children}
  </section>
}

export type ContentColumnsProps = PropsWithChildren<{
  alignment: "top" | "center" | "bottom"
}>

export function ContentColumns({ children, alignment }: ContentColumnsProps) {
  return <ContentSection wide className={`columns columns-alignment-${alignment}`}>
    {children}
  </ContentSection>
}

export type ContentColumnProps = PropsWithChildren<{
  size: number
}>

export function ContentColumn({ children, size }: ContentColumnProps) {
  return <div className="column" style={{ flexGrow: size }}>
    {children}
  </div>
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