const fs = require('fs')
const data = require('./data.json')

exports.post = function(req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == ""){
            return res.send('Please, fill all fields!')
        }
    }

    req.body.birth = Date.parse(req.body.birth)

    req.body.created_at = Date.now()

    data.teachers.push(req.body)

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send('Write file error!')
        }

        return res.redirect('/teachers')
    })
    
    // return res.send(req.body)
}