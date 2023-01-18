const Product = require("../../model/order_feature/w_product");
const joi = require("joi");

// add
// delete
// edit
// view all
// view details
// get by sales
// get by newly arrived by today upto next week (2 weeks)
// increment sales by 1

// name
// price
// unit - 25 kg
// category
// sales
// img_path

exports.createProduct = async (req, res) => {
    const productObject = joi.object({
        p_product_name: joi.string().required(),
        p_price: joi.number().required(),
        p_unit: joi.string().required(),
        p_category: joi.string().required(),
        p_image_path: joi.string().required()
    });

    const { error, value } = productObject.validate(req.body);

    if (error) {
        return res.status(400).send(error);
    } else {
        const model = new Product({
            p_product_name: value.p_product_name,
            p_price: value.p_price,
            p_unit: value.p_unit,
            p_category: value.p_category,
            p_image_path: value.p_image_path
        });
    
        try {
            const response = await model.save();
            return res.status(200).send({
                message: response
            });
        } catch (error) {
            console.log(error.name + ": " + error.message);
            return res.status(400).send({
                message: error.message
            })
        }
    }
}

exports.deleteProductById = async (req, res) => {
    const idObject = joi.object({
        _id: joi.string().required()
    });

    const {error,value} = idObject.validate(req.query);

    if (error) {
        return res.status(400).send(error);
    } else {
        try {
            const response = await Product.findOneAndDelete({
                _id: value._id
            });
            return res.status(200).send({
                message: response
            });
        } catch (error) {
            console.log(error.name + ": " + error.message);
            return res.status(400).send({
                message: error.message
            })
        }
    }
}

exports.updateProductById = async (req, res) => {
    const updatedProductObject = joi.object({
        _id: joi.string().required(),
        p_product_name: joi.string().required(),
        p_price: joi.number().required(),
        p_unit: joi.string().required(),
        p_category: joi.string().required(),
        p_image_path: joi.string().required()
    });

    const {error, value} = updatedProductObject.validate(req.body);

    if (error) {
        return res.status(400).send(error);
    } else {
        try {
            const response = Product.findByIdAndUpdate(value._id, {
                p_product_name: value.p_product_name,
                p_price: value.p_price,
                p_unit: value.p_unit,
                p_category: value.p_category,
                p_image_path: value.p_image_path
            });

            return res.status(200).send({
                message: response
            });
        } catch (error) {
            return res.status(400).send({
                message: error.message
            });
        }
    }
}

exports.fetchAllProducts = async (req, res) => {
    try {
        const response = await Product.find();
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send(error.message);
    }
}

exports.fetchProductById = async (req, res) => {
    const idObject = joi.object({
        _id: joi.string().required()
    });

    const {error,value} = idObject.validate(req.query);

    if (error) {
        return res.status(400).send(error);
    } else {
        try {
            const response = await Product.findById(value._id);
            return res.status(200).send(response);
        } catch (error) {
            console.log(error.name + ": " + error.message);
            return res.status(400).send({
                message: error.message
            })
        }
    }
}

exports.fetchProductsHighestSales = async (req, res) => {
    try {
        const response = Product.find().sort({p_sales: "asc"}).limit(8);
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send({
            message: error.message
        });
    }
}

exports.fetchProductsNewlyArrived = async (req, res) => {
    const nDate = new Date();
    nDate.toLocaleString("en-US", {
        timeZone: "Asia/Manila"
    });

    const twoWeeks = (nDate.getDate() + 7/* This is the number of weeks */) + 7 // adding again the same number of weeks equalizing to two weeks

    try {
        const response = Product.find({
            created_on: {
                $gte: nDate.getDate(),
                $lte: twoWeeks
            }
        }).sort({p_sales: "asc"}).limit(8);
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send({
            message: error.message
        });
    }
}

//helper function increment sales by id
exports.incrementSalesById = async (_id) => {
    try {
        const result = await Product.findOneAndUpdate({ _id:_id }, { $inc: { "products.p_sales": 1 } }, {new: true });
        return result;
    } catch (error) {
        return error.message;
    }
}

exports.findProductBySearch = async (req, res) => {
    const SearchObject = joi.object({
        query: joi.string().required()
    });

    const { error, value } = SearchObject.validate(req.body);

    if (error) {
        return res.status(400).send(error);
    }

    try {
        const response = await Product.find({ $or: [
            { 
                p_product_name: {
                    $regex: `.*${value.query}*.` 
                }
            },
            { 
                p_rice_category: {
                    $regex: `.*${value.query}*.` 
                }
            },
            {
                p_unit: {
                    $regex: `.*${value.query}*.`
                }
            }
        ]});
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send(error.message);
    }
}