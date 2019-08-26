const { person } = require('../util');
const { API } = require('../consts');
module.exports = function (server) {

  server.get(`${API}/users`, (req, res) => {
    res.json({ a: person() })
  })
}