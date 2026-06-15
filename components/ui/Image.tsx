import NextImage, { ImageProps } from "next/image";

// A lógica global fica isolada aqui, num único lugar
const prefix = process.env.NODE_ENV === "development" ? "/absproxy/3000" : "";

export function Image({ src, ...props }: ImageProps) {
  // Verifica se o src é uma string e se é um caminho local (começando com /)
  const imageSrc =
    typeof src === "string" && src.startsWith("/") ? `${prefix}${src}` : src;

  return <NextImage src={imageSrc} {...props} />;
}