export default function handler(req, res) {
  res.setPreviewData({ user: 'TJ' })
  res.redirect(req.query.redirect)
}

// http://localhost:3000/api/preview?redirect=/news
