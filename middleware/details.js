'use strict';

module.exports = (req,res,next) =>{
  req.details = 'added to request'
}