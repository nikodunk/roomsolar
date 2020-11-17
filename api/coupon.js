

module.exports = async (req, res) => {
  try {
    let { code } = req.query
    code = code.toLowerCase()
    const validCodes = [
      'resource',
      'katiepatrick',
      'latch', 
      'maxedoutsolar',
      'quench',
      'sunboxlabs10',
      'sunboxlabs20'
    ]
    let response = validCodes.includes(code); // returns true or false
    res.status(200).send(response)
  } catch(error){
    console.log(error);
    res.end()
  }
}