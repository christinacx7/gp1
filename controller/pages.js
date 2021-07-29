
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const ct1products = require('../models/ct1products');
const ct2products = require('../models/ct2products');
const ct3products = require('../models/ct3products');

const router = express.Router();

router.get('/', (req, res) => {
    ct1products.find()
    .then(results => {
        res.render('index', {products: results, pageTitle: 'Best Movies in 2021'});
    })
    .catch(err => console.log(err));  
}); 

router.get('/best/:prodId', (req, res) => {
    ct1products.findById(req.params.prodId)
        .then(result => {
            res.render('best-details', {prod: result, pageTitle: 'One of the Best Movies in 2021'});
        })
        .catch(err => console.log(err));  
});

router.get('/family', (req, res) => {
    //res.render('family');
    ct2products.find()
    .then(results => {
        res.render('family', {products: results, pageTitle: 'Family Movies'});
    })
    .catch(err => console.log(err));  
});

router.get('/family/:prodId', (req, res) => {
    ct2products.findById(req.params.prodId)
        .then(result => {
            res.render('family-details', {prod: result, pageTitle: 'One of the Family Movies'});
        })
        .catch(err => console.log(err));  
});

router.get('/coffee', (req, res) => {
    //res.render('coffee');
    ct3products.find()
    .then(results => {
        res.render('coffee', {products: results, pageTitle: 'Coffee'});
    })
    .catch(err => console.log(err));  
});

router.get('/coffee/:prodId', (req, res) => {
    ct3products.findById(req.params.prodId)
        .then(result => {
            res.render('coffee-details', {prod: result, pageTitle: 'One of the Coffees'});
        })
        .catch(err => console.log(err));  
});

router.get('/contactUs', (req, res) => {
    res.render('contactUs');
});

module.exports = router;