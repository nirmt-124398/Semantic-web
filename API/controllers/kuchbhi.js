const func1 = async (req, res) =>{
    res.status(200).get({
        "name":"Nirmit Rampal"
    })
}

module.exports={func1};