export const htmlToText = (html: string): string => {
  if (!html) return "";

  // Check if we're in the browser
  if (typeof document === "undefined") {
    // Fallback to regex on server-side
    return html.replace(/<[^>]*>/g, "");
  }

  // Create a temporary DOM element
  const temp = document.createElement("div");
  temp.innerHTML = html;

  // Get text content (automatically handles HTML entities)
  return temp.textContent || temp.innerText || "";
};
