const express = require("express")
const router = express.Router()
const postModel = require("../models/posts")


router.get("/", async (req, res) => {
    try {
        const post = await postModel.find()
        res.json(post)
    }
    catch {
        res.json({ message: err })
    }
})

router.post("/", (req, res) => {
    // console.log(res.body)
    const post = new postModel({
        title: req.body.title,
        description: req.body.description,
        date: Date.now()
    })
    post.save()
        .then((savedData) => {
            res.json(savedData)
        })
        .catch((err) => {
            res.json({ message: err })
        })
})

module.exports = router