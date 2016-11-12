import express from 'express'
import isomorphic from 'isomorphic-fetch'
import Promise from 'bluebird'
import _ from 'lodash'
import cors from 'cors';

import canonize from './canonize'

const app = express()
app.use(cors());
const __DEV__ = true;

app.get('/', function (req, res) {
    if(!req.query.username) return res.send("Invalid url");
    const username = canonize(req.query.username);
    return res.send(username.toString());
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
