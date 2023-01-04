const CustomerEmailService = require("../services/frontend.email.service");
const joi = require("joi");

exports.sendEmail = async (req, res) => {

    const CustomerEmailObject = joi.object({
        ce_name: joi.string().required(), 
        ce_from: joi.number().required(), 
        ce_subject: joi.number().required(), 
        ce_text: joi.number().required()
    })

    const { errors, value } = CustomerEmailObject.validate(req.body);
    if (errors) {
        res.status(400).json(errors);
        return;
    }

    const { ce_name, ce_from, ce_subject, ce_text } = value; 

    const response = await CustomerEmailService.sendEmail(ce_name, ce_from, ce_subject, ce_text);

    console.log(response);

    res.status(200).redirect("/contact");
}