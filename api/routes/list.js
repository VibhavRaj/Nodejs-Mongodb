const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling get requests to /list",
  });
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling post requests to /list",
  });
});
router.get("/:listid", (req, res, next) => {
  const id = req.params.listid;
  if (id == "special")
    res.status(200).json({
      message: "U discovered the special id",
      id: id,
    });
  else {
    res.status(404).json({
      message: "You passed an id",
    });
  }
});

module.exports = router;
