const express = reuire("express")
const router = express.Router()

router.get("/",(req,res)=>{
console.log("this is post")
})

module.exports = router