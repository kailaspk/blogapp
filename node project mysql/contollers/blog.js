
class BlogController {
    constructor() {

    }
    //add blog
    async addblog(req, res) {
        let user = req.body
        var sql = "SET @_id = ?;SET @title = ?;SET @description = ?;SET @author = ?;"
        db.query(sql, function (err, rows) {
            if (err) {
                return res.render({ message: "Blog Failed To Create" })
            } else {
                return res.render({ data: rows, message: "Blog Created" })
            }
        })
    }

    //getall blog
    async getAllBlog(req, res) {
        db.query('SELECT * FROM Blog', function (err, rows) {
            if (err) {
                return res.render({  message: "No Blogs Found" })
            } else {
                return res.render({data: rows, message: "Blogs Fetcched Successfully" })
            }
        })
    }

    //getall blog by autherid
    async getAllBlogByid(req, res) {
        db.query('SELECT * FROM Blog WHERE user_id = ' + req.params.id, function (err, rows) {
            if (err) {
                return res.render( 'success',  "No Blog Found" )
            } else {
                return res.render({ data: rows, message: "Blog Fetcched Successfully " })
            }
        })
    }

    //update blogs
    async updateBlog(req, res) {
        connection.query(
            'UPDATE Blog SET description = ? ,title = ?, author = ? Where ID = ?',
            [req, 1],
            (err, result) => {
                if (err) {
                    return res.status(400).send({ message: "Blog Not Found !" })
                } else {
                    return res.status(200).send({ data: result, message: "Successfully Updated Details" })
                }
            }
        );
    }

    //delete blog by id
    async deleteBlog(req, res) {
        db.query('DELETE FROM Blog WHERE _id = ?', [req.params.id], function (err, rows) {
            if (err) {
                return res.render(err)
            } else {
                return res.render({ data: rows, message: "Blog Deleted" })
            }
        })

        await Blog.deleteOne({ _id: req.params.id })
        res.status(200).send({ success: true, message: "Blog Deleted" })
    }

}

module.exports = BlogController
