const express = require("express");
const router = express.Router();
const Blog=require("../models//Blog")
const { Protect, isAdmin } = require("../middlewares/authMiddlewares");
const User = require("../models/User");


// create a blog admin 
router.post('/create', Protect, isAdmin, async (req, res) => {
    
    const { title, content, image } = req.body;

    try {
        const blog = await Blog.create(
            {
                title,
                content,
                image,
                author: req.user._id
            }
        )

        res.status(201).json({ message: "Blog created " }, blog)
        console.log(blog)

    } catch (error) {
        res.status(500).json({ message: "somethig error " });
        console.log("error->", error)
    }
});


// Get all blog

router.get("/", async (req, res) => {
    console.log("Get all blog executed !!");
    try {
        const getBlog = await Blog.find().populate("author", "name email").sort({ createdAt: -1 });
        res.status(200).json({ message: "Get all blog" }, getBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something wrong to find blog !!" })
    }
});


// update blog for Admin Only

router.put("/:id", Protect, isAdmin, async (req, res) => {
    const { title, content, image } = req.body;
    
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
           return res.status(400).json({ message: "Blog is empity " });


        }
        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.image = image || blog.image;

        await blog.save();
        res.status(201).json({ message: "Blog is updated " ,blog});
        

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something wrong" }, error)
    }
});

// delete the blog

router.delete("/:id", Protect, isAdmin, async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(400).json({ message: "blog is not found" });
        }
        res.status(201).json({ message: "Blog delete sucessfully " }, blog);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "something wrong" }, error)
    }
});

module.exports = router;
