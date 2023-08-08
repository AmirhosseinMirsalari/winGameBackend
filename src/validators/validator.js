const autoBind = require("auto-bind");
const { validationResult } = require("express-validator");

module.exports = class {
  constructor() {
    autoBind(this);
  }

  validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "اطلاعات وارد شده صحیح نمی باشد",
        data: [...errors.array().map((error) => error.msg)],
      });
    }
    next();
  }
};
