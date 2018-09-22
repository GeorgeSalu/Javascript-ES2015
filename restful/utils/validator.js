module.exports = {

    user: (app, req, res) => {

        req.assert('_name', 'o nome é obrigatorio').notEmpty();
        req.assert('_email', 'o e-mail é obrigatorio').notEmpty().isEmail();

        let errors = req.validationErrors();

        if(errors) {
            app.utils.error.send(err, req, res);
            return false;
        } else {
            return true;
        }

    }

}