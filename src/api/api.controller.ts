import { Request, Response, NextFunction } from 'express';

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

export default {
    getSpecificHandler,
    getAllHandler,
    addHandler,
    updateHandler,
    deleteHandler,
};
