var express = require("express");
const router=express.Router();

var author_arr = [
    { 
        title:"J K Rowling",
        image:"https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/04/17/11/jkrowling-inpictures-4-17-19-057.jpg",
        about:"https://en.wikipedia.org/wiki/Arundhati_Roy"
    },

    { 
        title:"Chetan Bhagat",
        image:"https://img.theweek.in/content/dam/week/news/entertainment/images/2018/9/4/chetanbhagat.jpg",
        about:"https://en.wikipedia.org/wiki/Chetan_Bhagat"
    },

    { 
        title:"Paulo Coelho",
        image:"https://cdn2.penguin.com.au/authors/original/87518au.jpg",
        about:"https://en.wikipedia.org/wiki/Paulo_Coelho"
    },
    {
        title:"APJ Abdul Kalam",
        image:"https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2019/07/27/APJ%20ABDUL%20KALAM-1564209285.jpg?itok=ElMyF8zR",
        about:"https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam"
    }
]

router.get("/",function(req,res)
{
    res.render("authors",{pagetitle:"Library",nav:[{link:"/book", title:"BOOKS"},{link:"/authors", title:"AUTHORS"},{link:"/book/addbook", title:"ADD BOOK"},{link:"/book/editbook", title:"EDIT/DELETE BOOK"}],
    authordetails: author_arr });
})

module.exports=router;



