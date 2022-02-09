const express = require('express')
// const auth = require('../middleware/auth')

const BlogController = require('../contollers/blog')
const blogController = new BlogController();

const router = express.Router()

router.post('/addBlog', blogController.addblog)
router.get('/getAllBlog', blogController.getAllBlog)
router.get('/getAllBlogByid/:user_id', blogController.getAllBlogByid)
router.patch('/updateBlog/:id', blogController.updateBlog)
router.delete('/deleteBlog/:id', blogController.deleteBlog)

module.exports = router