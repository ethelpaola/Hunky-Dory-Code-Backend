'use strict';

const { response } = require("express");
const createJsonError = require("../../errors/create-json-error");
const throwJsonError = require("../../errors/throw-json-error");
const { findUserRating } = require("../../repositories/users.repository");

const getUserRating = async(req, res = response) => {

    try {
        const { id } = req.params;
        const rating = await findUserRating(id);
        if( !rating ) throwJsonError( 500, 'Internal Server Error' );

        res.status( 200 ).json({
            rating
        });
    } catch (error) {
        createJsonError( res, error );
    }
};

module.exports = {
    getUserRating,
};
