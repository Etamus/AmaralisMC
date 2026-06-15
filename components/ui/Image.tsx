import NextImage, { ImageProps } from "next/image";

const prefix = process.env.NODE_ENV === "development" ? "" : "";

export function Image({ src, ...props }: ImageProps) {
  const imageSrc =
    typeof src === "string" && src.startsWith("/") ? `${prefix}${src}` : src;

  return <NextImage src={imageSrc} {...props} />;
}