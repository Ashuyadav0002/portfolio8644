const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Number(Date.now()) + "_" + file.originalname)
    }
})

const Uploader = multer({ storage: storage })

module.exports = Uploader