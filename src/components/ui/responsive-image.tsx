import * as React from "react";
import { cn, buildSrcSet, buildTransformUrl, splitImageProps } from "@/utils";
import { useResponsiveImage } from "@/hooks/use-responsive-image";
import type { ResponsiveImageProps } from "@/types";

export const ResponsiveImage = React.forwardRef<
  HTMLImageElement,
  ResponsiveImageProps
>(
  (
    {
      src,
      parsed,
      fittingType,
      focalPoint,
      quality,
      className,
      style,
      aspectRatio,
      onLoad,
      ...props
    },
    ref,
  ) => {
    const { wrapperRef, imgRef, loaded, options, handleLoad } =
      useResponsiveImage(
        {
          parsed,
          fittingType,
          focalPoint,
          quality,
          onLoad,
        },
        ref,
      );
    const { wrapperProps, imageProps } = splitImageProps(props);

    return (
      <span
        ref={wrapperRef}
        className={cn("inline-block relative", className)}
        style={{ aspectRatio, ...style }}
        {...wrapperProps}
      >
        <span
          data-source-location={undefined}
          className="block relative w-full h-full overflow-hidden"
        >
          {options && !loaded && (
            <img
              data-source-location={undefined}
              src={buildTransformUrl(parsed, {
                ...options,
                width: 20,
                height: options.height
                  ? Math.max(
                      1,
                      Math.round((20 * options.height) / options.width),
                    )
                  : undefined,
                quality: 20,
              })}
              alt=""
              aria-hidden="true"
              className="w-full h-full inset-0 absolute"
              style={{
                objectFit: fittingType === "fit" ? "contain" : "cover",
                filter: "blur(10px)",
                transform: "scale(1.1)",
              }}
            />
          )}
          {options && (
            <img
              data-source-location={undefined}
              ref={imgRef}
              src={buildTransformUrl(parsed, options)}
              srcSet={buildSrcSet(parsed, options)}
              loading="lazy"
              className={cn(
                "w-full h-full inset-0 absolute",
                fittingType === "fit" ? "object-contain" : "object-cover",
              )}
              onLoad={handleLoad}
              {...imageProps}
            />
          )}
        </span>
      </span>
    );
  },
);
ResponsiveImage.displayName = "ResponsiveImage";
