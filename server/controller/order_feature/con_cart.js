const CartItem = require('../../model/order_feature/w_cartItems');
const joi = require('joi');

exports.createCartItem = (req, res) => {
    const CartItemObject = joi.object({
        ci_cart_item_name: joi.string().required(),
        ci_qty: joi.number().required(),
        ci_rice_category: joi.string().required(),
        ci_unit: joi.string().required(),
        ci_user_id: joi.string().required(),
        ci_image_path: joi.string().required()
    });

    const { error, value } = CartItemObject.validate(req.body);
    if (error) {
        res.status(400).json(error.details);
    }

    const model = new CartItem({

    })
}

exports.deleteCartItemById = async (req, res) => {
    const idObject = joi.object({
        _id: joi.string().required()
    })

    const {error, value} = idObject.validate(req.body);

    if (error) {
        return res.status(400).send(error);
    }

    try {
        const response = await CartItem.findByIdAndDelete(value._id);
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send({
            message: error.name + ": " + error.message
        });
    }
}

exports.fetchCartItems = async (req, res) => {
    try {
        const response = await CartItem.findAll();
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).send({
            message: error.name + ": " + error.message
        });
    }
}