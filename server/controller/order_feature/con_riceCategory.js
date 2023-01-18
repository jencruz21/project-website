// add
// delete
// show all
const RiceCategory = require("../../model/order_feature/w_rice_category");
const joi = require("joi");
require("dotenv").config();

exports.createCategory = async (req, res) => {
    const CategoryNameObject = joi.object({
        r_category_name: joi.string().required()
    });

    const { error, value } = CategoryNameObject.validate(req.body);

    if (error) {
        return res.status(400).send({
            message: process.env.STATUS_400 
        })
    }

    const model = new RiceCategory({
        r_category_name: value.r_category_name
    });

    try {
        const response = await model.save();
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send({
            message: error.name + ": " + error.message
        });
    }
}

exports.deleteCategoryById = async (req, res) => {
    const idObject = joi.object({
        _id: joi.string().required()
    });

    const { error, value } = idObject.validate(req.query);

    if (error) {
        return res.status(400).send({
            message: process.env.STATUS_400
        })
    }

    try {
        const response = await RiceCategory.findByIdAndDelete(value._id);
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send({
            message: error.message
        });
    }
}

exports.fetchRiceCategories = async (req, res) => {
    try {
        const response = await RiceCategory.findAll();
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send({
            message: error.name + ": " + error.message
        });
    }
}