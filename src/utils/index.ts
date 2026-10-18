import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import type { ImageLoadMode, ParsedWixMedia, TransformOptions } from "@/types";

const WIX_MEDIA_HOSTS: Record<string, string> = {
  "static.wixstatic.com": "/media/",
};

export const DEFAULT_TRANSFORM_WIDTH = 1024;
export const IMAGE_LOAD_MODE = {
  OPTIMIZED: "optimized",
  ORIGINAL: "original",
  FALLBACK: "fallback",
} as const satisfies Record<string, ImageLoadMode>;

const DEVICE_PIXEL_RATIOS = [1, 2, 3];
const MAX_DIMENSION = 6000;

export function splitImageProps(props: Record<string, unknown>): {
  wrapperProps: HTMLAttributes<HTMLElement>;
  imageProps: ImgHTMLAttributes<HTMLImageElement>;
} {
  const wrapperProps: Record<string, unknown> = {};
  const imageProps: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith("data-")) wrapperProps[key] = value;
    else imageProps[key] = value;
  }
  return {
    wrapperProps: wrapperProps as HTMLAttributes<HTMLElement>,
    imageProps: imageProps as ImgHTMLAttributes<HTMLImageElement>,
  };
}

/** Returns transform metadata only for canonical public Wix image URLs. */
export function parseWixMediaUrl(src: string): ParsedWixMedia | null {
  try {
    const url = new URL(src);
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      (url.port && url.port !== "443")
    ) {
      return null;
    }

    const pathPrefix = WIX_MEDIA_HOSTS[url.hostname];
    if (!pathPrefix) return null;

    const transformed = url.pathname.match(
      /^(.*)\/v1\/(?:fill|fit)\/[^/]+\/[^/]+$/i,
    );
    const basePath = transformed ? transformed[1] : url.pathname;
    const filename = basePath.split("/").pop();
    if (
      !basePath.startsWith(pathPrefix) ||
      !filename ||
      !/\.[a-z0-9]+$/i.test(filename) ||
      /\.svg$/i.test(filename)
    ) {
      return null;
    }

    return { baseUrl: `${url.origin}${basePath}`, filename };
  } catch {
    return null;
  }
}

const clampDim = (n: number) =>
  Math.min(Math.max(Math.round(n), 1), MAX_DIMENSION);
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

export function buildTransformUrl(
  { baseUrl, filename }: ParsedWixMedia,
  { width, height, crop, focalPoint, quality }: TransformOptions,
) {
  const params = [`w_${clampDim(width)}`, `h_${clampDim(height || width)}`];
  if (crop) {
    params.push(
      focalPoint
        ? `fp_${clamp01(focalPoint.x).toFixed(2)}_${clamp01(focalPoint.y).toFixed(2)}`
        : "al_c",
    );
  }
  params.push(`q_${quality}`, "usm_0.66_1.00_0.01", "enc_webp", "quality_auto");
  const outputName = /\.gif$/i.test(filename)
    ? filename
    : filename.replace(/\.[a-z0-9]+$/i, "") + ".webp";
  return `${baseUrl}/v1/${crop ? "fill" : "fit"}/${params.join(",")}/${outputName}`;
}

export function buildSrcSet(parsed: ParsedWixMedia, options: TransformOptions) {
  return DEVICE_PIXEL_RATIOS.map(
    (dpr) =>
      `${buildTransformUrl(parsed, {
        ...options,
        width: options.width * dpr,
        height: options.height ? options.height * dpr : undefined,
      })} ${dpr}x`,
  ).join(", ");
}

export function getOriginalImageUrl(
  src: string,
  parsed: ParsedWixMedia | null,
) {
  return parsed?.baseUrl || src;
}

export function nextImageLoadMode(mode: ImageLoadMode): ImageLoadMode {
  return mode === IMAGE_LOAD_MODE.OPTIMIZED
    ? IMAGE_LOAD_MODE.ORIGINAL
    : IMAGE_LOAD_MODE.FALLBACK;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isIframe = window.self !== window.top;
