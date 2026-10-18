import type { ImgHTMLAttributes, ReactEventHandler } from "react";

export type ImageLoadMode = "optimized" | "original" | "fallback";

export type ParsedWixMedia = { baseUrl: string; filename: string };

export type FocalPoint = { x: number; y: number };

export type TransformOptions = {
  width: number;
  height?: number;
  crop?: boolean;
  focalPoint?: FocalPoint;
  quality: number;
};

export type Size = { width: number; height: number };

export type ContactForm = {
  full_name: string;
  email: string;
  phone: string;
  timezone: string;
  target_market: string;
  monthly_goal: string;
  bottleneck: string;
  message: string;
};

export type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src?: string;
  fittingType?: "fill" | "fit";
  originWidth?: number;
  originHeight?: number;
  focalPointX?: number;
  focalPointY?: number;
  quality?: number;
};

export type UseResponsiveImageArgs = {
  parsed: ParsedWixMedia;
  fittingType?: "fill" | "fit";
  focalPoint?: FocalPoint;
  quality: number;
  onLoad?: ReactEventHandler<HTMLImageElement>;
};

export type ResponsiveImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src"
> & {
  src: string;
  parsed: ParsedWixMedia;
  fittingType?: "fill" | "fit";
  focalPoint?: FocalPoint;
  quality: number;
  aspectRatio?: string;
};
