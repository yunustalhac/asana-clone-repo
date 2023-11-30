const create = (req, res) => {
    res.status(200).send("Projects Create")
}

const index = (req,res)=>{
    res.status(200).send("Projects Index")
}

module.exports = {
    create,
    index
}