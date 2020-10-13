

module.exports = async (req, res) => {
  try {
    res.send('this is the coupon: ', req.body.coupon)
  } catch(error){
    console.log(error);
    res.end()
  }
}
