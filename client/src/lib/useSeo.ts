import { useEffect } from "react";

interface SeoOptions {
  title: string;
  description: string;
}

/**
 * Sets the document title and meta description for the current route.
 * Tiny hand-rolled replacement for react-helmet — sufficient for a static
 * marketing site. Cleanup is intentionally a no-op; the next page will
 * overwrite the values when it mounts.
 */
export function useSeo({ title, description }: SeoOptions) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;

    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = description;
  }, [title, description]);
}
