// function errorHandler(err, req, res, next) {
//     switch (err) {
//         case "SequelizeValidationError":
//         case "SequelizeConstraintError":
//             return res.status(400).json({ message: err.errors[0].message })
//         default:
//             return res.status(500).json({ message: `internal server error` })
//     }
// }
// module.exports = { errorHandler }