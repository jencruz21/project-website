const CartItem = require('../../model/order_feature/w_cartItems');
const joi = require('joi');

exports.createCartItem = (req, res) => {
    const CartItemObject = joi.object({
        ci_cart_item_name: joi.string().required(),
        ci_qty: joi.number().required(),
        ci_rice_category: joi.string().required(),
        ci_unit: joi.string().required(),
        ci_user_id: joi.string().required(),
        ci_image_path: joi.string().required(),
        ci_transaction_id: joi.string().required()
    });

    const { error, value } = CartItemObject.validate(req.body);
    if (error) {
        res.status(400).json(error.details);
    }

    
}

exports.deleteCartItemById = (req, res) => {

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