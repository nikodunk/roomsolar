

module.exports = async (req, res) => {
  try {
    let { code } = req.query
    let response = false
    code = code.toLowerCase()
    const validCodes = [ 'resource', 'latch', 'maxedoutsolar', 'katiepatrick']
    const response = validCodes.includes(code); // returns true or false
    res.status(200).send(response)
  } catch(error){
    console.log(error);
    res.end()
  }
}