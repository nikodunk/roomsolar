

module.exports = async (req, res) => {
  try {
    const { code } = req.query
    let response = false
    if(code === 'joe20'){
      response = true
    }
    if(code === 'latchcollective20'){
      response = true
    }
    res.status(200).send(response)
  } catch(error){
    console.log(error);
    res.end()
  }
}