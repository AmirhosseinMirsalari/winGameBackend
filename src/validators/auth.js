const validator = require("./validator");
const { check } = require("express-validator");

module.exports = new (class extends validator {
  signupValidator() {
    return [
      check("userName").not().isEmpty().withMessage("یوزرنیم الزامی می باشد"),
      check("email")
        .normalizeEmail()
        .isEmail()
        .withMessage("ایمیل نامعتبر می باشد"),
      check("password")
        .isLength({ min: 6 })
        .withMessage("حداقل از 6 کارکتر برای پسورد استفاده کنید"),
    ];
  }

  loginValidator() {
    return [
      check("email")
        .normalizeEmail()
        .isEmail()
        .withMessage("ایمیل نامعتبر می باشد"),
      check("password")
        .isLength({ min: 6 })
        .withMessage("حداقل از 6 کارکتر برای پسورد استفاده کنید"),
    ];
  }
})();
