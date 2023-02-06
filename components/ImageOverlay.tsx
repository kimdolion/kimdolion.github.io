import Image, { StaticImageData } from "next/image"
import styles from '@/styles/Home.module.css'

import korAmFlag from '/public/kor_am_flag.jpg'
import { CSSProperties, ReactNode } from "react";

export interface ImageProps {
  src: StaticImageData | string;
  alt: string;
  height?: number;
  width?: number;
}

export interface ImageOverlayProps {
  children: ReactNode;
  displayRow?: boolean;
  image: ImageProps,
  style?: CSSProperties
}

/**
 *
 * @param image expects an object with {src: string, alt: string}, @param imageText expects a string
 * @returns An image component that show the text as an opaque overlay on top of the image.
 */

export const ImageOverlay = ( { children, displayRow = false, image, style }: ImageOverlayProps) => {
  const { height, width } = image;
  const imageSrc = image.src === '' ? korAmFlag : image.src;
  const altText = image.alt === '' ? "Image." : image.alt;

  const imageWithDefault = {
    alt: altText,
    src: imageSrc,
  }

  return (
    <div className={styles.imageOverlayContainer}>
      <Image {...imageWithDefault} className={styles.imageOverlay} height={height} width={width} style={style} />
      <div className={`${displayRow && styles.imageOverlayTextRow} ${styles.imageOverlayText}`}>
        {children}
      </div>
    </div>
  )
}