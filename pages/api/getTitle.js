const Database = require("@replit/database")

export default (req, res) => {
  const db = new Database()
  let route = req.body.route

  db.get(route).then(value => {
    res.json({
      "title": value
    })
  }).catch(err => {
    res.json(
      { "title": "404 not found" }
    )
  })
}
