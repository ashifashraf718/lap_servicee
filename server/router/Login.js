const router = require("express").Router();
const user = require("../model/userSchema");
const Crypto_js = require("crypto-js");
const jwt = require("jsonwebtoken");
router.post("/login", async (req, res) => {
  try {
    const findData = await user.findOne({ Email: req.body.email });
    console.log("find data:", findData);
    !findData && res.status(401).json("invalid email");

    var bytes = Crypto_js.AES.decrypt(
      findData.Password,
      process.env.passwordSec
    );
    console.log(bytes);
    var originalText = bytes.toString(Crypto_js.enc.Utf8);
    originalText!=req.body.password && res.status(401).json("invalid password")
  
    console.log("orginal password :",originalText);
    console.log(typeof(originalText),typeof(req.body.password));
    const accessToken = jwt.sign(
      {
        id: findData._id,
      },
      process.env.jwtSecKey,
      { expiresIn: "1d" }
    );

    console.log("Acces token :", accessToken);
    const { _id, ...others } = findData._doc;

    res.status(200).json({ _id, accessToken });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
