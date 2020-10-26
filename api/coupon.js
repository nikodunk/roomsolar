

module.exports = async (req, res) => {
  try {
    let { code } = req.query
    let response = false
    code = code.toLowerCase()
    if(code === 'resource'){
      response = true
    }
    if(code === 'latch'){
      response = true
    }
    if(code === 'maxedoutsolar'){
      response = true
    }
    res.status(200).send(response)
  } catch(error){
    console.log(error);
    res.end()
  }
}