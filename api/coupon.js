

module.exports = async (req, res) => {
  try {
    const { code } = req.query
    let response = false
    code = code.toLowerCase()
    if(code === 'resource'){
      response = true
    }
    if(code === 'latch'){
      response = true
    }
    res.status(200).send(response)
  } catch(error){
    console.log(error);
    res.end()
  }
}