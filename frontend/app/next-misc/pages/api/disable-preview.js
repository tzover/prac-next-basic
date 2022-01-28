export default function handler(req, res) {
  res.clearPreviewData()
  res.end('Preview mode disabled')
}

// http://localhost:3000/api/disable-preview
