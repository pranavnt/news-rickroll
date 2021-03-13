const Database = require("@replit/database")

export default (req, res) => {
  const db = new Database()
  let route = req.body.route
  let title = req.body.title

  db.get(route).then(value=>{console.log(value)})

  db.set(route, title).then(value => {
    res.statusCode = 200
    res.json({ success: true })
  }).catch(err=>{
    res.json({success: false})
  })


}
