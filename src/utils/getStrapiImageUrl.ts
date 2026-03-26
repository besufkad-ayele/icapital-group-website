export function getStrapiImageUrl(url: string): string {
  if (!url) return "";
  const baseUrl = process.env.NEXT_PUBLIC_DATA || "https://icms.frontiertech.org";
  return url.startsWith("http") ? url : `${baseUrl}${url}`;
}
