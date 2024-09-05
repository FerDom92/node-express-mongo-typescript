import { NextFunction, Request, Response } from 'express'
import { check } from 'express-validator'
import { validateResult } from '../utils/validate.result'

const validateProduct = [
  check('name')
    .exists()
    .isString()
    .notEmpty(),
  check('price')
    .exists()
    .isNumeric()
    .withMessage('Must be a valid price'),
  check('description')
    .exists()
    .isString()
    .notEmpty(),
  check('isAvailable')
    .exists()
    .isBoolean()
    .notEmpty(),
  check('description')
    .exists()
    .isString()
  ,
  (req: Request, res: Response, next: NextFunction) => { validateResult(req, res, next) }
]

export { validateProduct }
