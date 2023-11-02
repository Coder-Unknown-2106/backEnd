const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

router.route('/')
    .post((req, res) => {
        // Set up a storage engine for multer
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'uploads/'); // Files will be stored in the 'uploads' directory
            },
            filename: (req, file, cb) => {
                const imgName = file.fieldname + '_' + Date.now() + path.extname(file.originalname)
                cb(null, imgName);
            },
        });

        const upload = multer({
            storage: storage,
            fileFilter: (req, file, cb) => {
                let fileTypes = /jpg|jpeg|png/
                let mimiType = fileTypes.test(file.mimetype)
                let extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
                if (mimiType && extname) {
                    return cb(null, true)
                }
                cb('this file not upload')
            }

        }).single('file')

        // Serve your React app (replace with the path to your React build)
        // Route to handle file uploads
        upload(req, res, (err) => {
            if (err) {
                console.log(err.message);
            }
            res.status(201).json({ message: "image upload" })
        })

    })
module.exports = router