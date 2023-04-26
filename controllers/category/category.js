import Category from "../../models/Category.js"

const controllerCategory = {
    
    show: async(req,res,next)=> {
        try {
            let all = await Category.find()
            if (all) {
                return res.status(200).json({
                    success: true,
                    message: "All categories",
                    categories: all
                })
            } else {
                return res.status(200).json({
                    success: true,
                    message: "No categories yet",
                    categories: all
                })
            }    
        } catch(error) {
            next(error)
        }
    }
}

export default controllerCategory