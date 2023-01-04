/**
 * 
 * Features:
 * Create new rice base on parameters
 *  :r_rice_name
 *  :r_per_kilo
 *  :r_market_price
 *  :r_ten_kaban
 *  :r_whole_sale_price
 *  :r_special_price
 *  :r_divert_price
 *  :r_good_as_cash
 *  :r_divert_salin_truck
 *  :r_additional_less_id
 *  
 * Get rice by id
 * 
 * Get all rice
 * 
 * --- system logic ----
 * delete rice by id
 * 
 * edit rice by id
 */

const Inventory = require("../model/w_inventory");
const joi = require('joi');

exports.insertRice = async (req, res) => {

    const InventorySchema = joi.object({
        r_rice_name: joi.string().required(), 
        r_per_kilo: joi.number().required(), 
        r_market_price: joi.number().required(), 
        r_ten_kaban: joi.number().required(), 
        r_whole_sale_market: joi.number().required(),
        r_whole_sale_price: joi.number().required(), 
        r_special_price: joi.number().required(), 
        r_divert_price: joi.number().required(), 
        r_good_as_cash: joi.number().required(), 
        r_divert_salin_truck: joi.number().required(), 
        r_additional_less_id: joi.string().required()
    })

    const { errors, value } = InventorySchema.validate(req.body);
    if (errors) {
        res.status(400).json(errors);
    }

    const {
        r_rice_name, 
        r_per_kilo, 
        r_market_price, 
        r_ten_kaban, 
        r_whole_sale_market,
        r_whole_sale_price, 
        r_special_price, 
        r_divert_price, 
        r_good_as_cash, 
        r_divert_salin_truck, 
        r_additional_less_id
    } = value;

    console.log(value.r_rice_name);

    const Inventory = new Inventory({
        r_rice_name, 
        r_per_kilo, 
        r_market_price, 
        r_ten_kaban, 
        r_whole_sale_market, 
        r_whole_sale_price, 
        r_special_price, 
        r_divert_price, 
        r_good_as_cash, 
        r_divert_salin_truck, 
        r_additional_less_id
    });

    try {
        const response = await Inventory.save();

        res.status(200).json({
            message: "Record successfully inserted",
            record: response
        });

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

exports.getRiceById = async (req, res) => {
    const riceIdSchema = joi.object({
        id: joi.string().required()
    })

    const { errors, value } = riceIdSchema.validate(req.params);
    if (errors) {
        res.status(400).send(errors);
    }

    try {
        const response = await Inventory.findById(value.id);
        
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
}

exports.getRices = async (req, res) => {
    try {
        const data = await Inventory.find();

        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
}

exports.deleteRiceById = async (req, res) => {
    const riceIdSchema = joi.object({
        id: joi.string().required()
    })

    const { errors, value } = riceIdSchema.validate(req.params);
    if (errors) {
        res.status(400).json(errors);
    }

    try {
        await Inventory.findByIdAndDelete(value.id);
        
        res.status(200).json("Item deleted with id of " + value.id);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

exports.updateRiceById = async (req, res) => {
    const InventorySchema = joi.object({
        r_rice_name: joi.string().required(), 
        r_per_kilo: joi.number().required(), 
        r_market_price: joi.number().required(), 
        r_ten_kaban: joi.number().required(), 
        r_whole_sale_market: joi.number().required(),
        r_whole_sale_price: joi.number().required(), 
        r_special_price: joi.number().required(), 
        r_divert_price: joi.number().required(), 
        r_good_as_cash: joi.number().required(), 
        r_divert_salin_truck: joi.number().required(), 
        r_additional_less_id: joi.string().required()
    })

    const { errors, value } = InventorySchema.validate(req.body);
    if (errors) {
        res.status(400).json(errors);
    }

    const {
        r_rice_name, 
        r_per_kilo, 
        r_market_price, 
        r_ten_kaban, 
        r_whole_sale_market,
        r_whole_sale_price, 
        r_special_price, 
        r_divert_price, 
        r_good_as_cash, 
        r_divert_salin_truck, 
        r_additional_less_id
    } = value;

    console.log(value.r_rice_name);

    const Inventory = new Inventory({
        r_rice_name, 
        r_per_kilo, 
        r_market_price, 
        r_ten_kaban, 
        r_whole_sale_market, 
        r_whole_sale_price, 
        r_special_price, 
        r_divert_price, 
        r_good_as_cash, 
        r_divert_salin_truck, 
        r_additional_less_id
    });

    try {
        // to be updated
        const response = await Inventory.findByIdAndUpdate();

        res.status(200).json({
            message: "Record successfully inserted",
            record: response
        });

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

