// Utility to extract YouTube video ID from any YouTube URL
export function extractYouTubeId(url: string): string {
  if (!url) return "";
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([\w-]{11})/,
  );
  return match ? match[1] : url;
}
