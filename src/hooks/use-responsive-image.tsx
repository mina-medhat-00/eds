import * as React from "react";
import { useSize } from "@/hooks/use-size";
import { DEFAULT_TRANSFORM_WIDTH } from "@/utils";
import type { UseResponsiveImageArgs } from "@/types";

export function useResponsiveImage(
  { parsed, fittingType, focalPoint, quality, onLoad }: UseResponsiveImageArgs,
  parentRef: React.ForwardedRef<HTMLImageElement>,
) {
  const wrapperRef = React.useRef<HTMLSpanElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const size = useSize(wrapperRef);
  const [loaded, setLoaded] = React.useState(false);

  React.useImperativeHandle(
    parentRef,
    () => imgRef.current as HTMLImageElement,
  );
  React.useEffect(() => setLoaded(false), [parsed.baseUrl]);

  const crop = fittingType !== "fit";
  const options = size && {
    width: size.width || DEFAULT_TRANSFORM_WIDTH,
    height: size.height || undefined,
    crop,
    focalPoint: crop ? focalPoint : undefined,
    quality,
  };

  return {
    wrapperRef,
    imgRef,
    loaded,
    options,
    handleLoad: (event: React.SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      onLoad?.(event);
    },
  };
}
