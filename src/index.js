import express from 'express'
import operator from './operator'

const app = express()

app.get('/', function (req, res) {
  res.status(200).send('Hello World!')
})

app.get('/sum', function (req, res) {
  const result = operator.sum(req.query.a, req.query.b)
  res.status(200).send({
    operator: 'sum',
    a: req.query.a,
    b: req.query.b,
    result
  })
})

app.get('/substract', function (req, res) {
  const result = operator.substract(req.query.a, req.query.b)
  res.status(200).send({
    operator: 'substract',
    a: req.query.a,
    b: req.query.b,
    result
  })
})

app.get('/multiple', function (req, res) {
  const result = operator.multiple(req.query.a, req.query.b)
  res.status(200).send({
    operator: 'multiple',
    a: req.query.a,
    b: req.query.b,
    result
  })
})

app.get('/divide', function (req, res) {
  const result = operator.divide(req.query.a, req.query.b)
  res.status(200).send({
    operator: 'divide',
    a: req.query.a,
    b: req.query.b,
    result
  })
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
