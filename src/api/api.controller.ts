import { Request, Response, NextFunction } from 'express';
import { projects } from './api.model';

/**
 * Get all documents from a mongo collection.
 *
 * @param collection Mongo collection
 */
const getAllHandler = (collection: any) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await collection.find({});
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Get a specific document from a mongo collection.
 * Using req.params.id as a query.
 *
 * @param collection Mongo collection
 */
const getSpecificHandler = (collection: any) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await collection.findOne({
      _id: req.params.id,
    });

    if (result) {
      res.json(result);
    } else {
      res.status(404);
      next(new Error('Not found'));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Adds a new document to a mongo collection based on
 * the request body.
 *
 * @param collection Mongo collection
 */
const addHandler = (collection: any) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const inserted = await collection.insert(req.body);
    res.json(inserted);
  } catch (error) {
    next(error);
  }
};

/**
 * Updates a document in the collection based on
 * req.params.id
 *
 * @param collection Mongo collection
 */
const updateHandler = (collection: any) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await collection.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Deletes a document from the collection based on
 * req.params.id
 *
 * @param collection Mongo collection
 */
const deleteHandler = (collection: any) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await collection.findOneAndDelete({
      _id: req.params.id,
    });
    if (result) {
      res.json(result);
    } else {
      res.status(404);
      next(new Error('Not found'));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Gets a project page from the database based on
 * req.params.id
 *
 * @param {Request}      req    HTTP request
 * @param {Response}     res    HTTP response
 * @param {NextFunction} next   NEXT function
 */
const getProjectByConnectId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await projects.findOne({
      connectId: req.params.id,
    });
    if (result) {
      res.json(result);
    } else {
      res.status(404);
      next(new Error('Not found'));
    }
  } catch (error) {
    next(error);
  }
};

export default {
  getSpecificHandler,
  getAllHandler,
  addHandler,
  updateHandler,
  deleteHandler,
  getProjectByConnectId,
};
