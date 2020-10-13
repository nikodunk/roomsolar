

module.exports = async (req, res) => {
  try {
    const { name } = req.query
  	res.status(200).send(`Hello ${name}!`)
  } catch(error){
    console.log(error);
    res.end()
  }
}