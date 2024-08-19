import { HeadersFunction } from "@vercel/remix";

export const mergeCacheHeaders: HeadersFunction = ({ loaderHeaders }) => {
  const loaderCache = loaderHeaders.get("Cache-Control");

  if (loaderCache) {
    return {
      "Cache-Control": loaderCache,
    };
  }

  return {} as Record<string, never>;
};
