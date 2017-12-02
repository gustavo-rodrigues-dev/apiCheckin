import express from "express";
import consign from 'consign'

const app = express();

consign({
    verbose: false
})
    .include('config/config.js')
    .then('utils')
    .then('datasource.js')
    .then('repositories')
    .then('middlewares')
    .then('controllers')
    .then('routes')
    .then('boot.js')
    .into(app);