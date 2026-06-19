import express, {RequestHandler} from "express";
import {z,ZodSchema} from "zod";

export function validateBody(schema: ZodSchema) {
    return (req:any, res:any, next:any) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json({
                errors: result.error.issues.map((issue) => ({
                    field: issue.path.join("."),
                    message: issue.message,
                })),
            });
            return;
        }
        req.body = result.data; // replace body with validated, typed data
        next();

    }
}
export function validateParam(schema: ZodSchema) {
    return (req:any, res:any, next:any) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json({
                errors: result.error.issues.map((issue) => ({
                    field: issue.path.join("."),
                    message: issue.message,
                })),
            });
            return;
        }
        req.params = result.data; // replace body with validated, typed data
        next();

    }
}