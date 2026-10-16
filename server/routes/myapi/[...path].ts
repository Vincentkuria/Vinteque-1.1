// server/api/[...path].ts
export default defineEventHandler(async (event) => {
  // Your target backend server
  const targetUrl = 'http://10.62.242.65:8080'

  // event.path contains the full URL string (e.g., "/api/blogs/published")
  // proxyRequest routes the request directly server-to-server
  return proxyRequest(event, `${targetUrl}${event.path.replace('myapi','api')}`)
})
