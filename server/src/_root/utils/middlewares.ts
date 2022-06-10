import {NextFunction, Request, Response} from "express";

export type DatabaseMiddlewareParams<INPUT, PARAMS, QUERY> = {
    input: INPUT
    token?: string
    params: PARAMS
    query: QUERY
    request: Request
    response: Response
}

export type DatabaseMiddleware<INPUT, PARAMS, QUERY> = (params: DatabaseMiddlewareParams<INPUT, PARAMS, QUERY>) => Promise<any>

export const dbPromise = <INPUT extends unknown = any, PARAMS extends unknown = any, QUERY extends unknown = any>(middleware: DatabaseMiddleware<INPUT, PARAMS, QUERY>) => (
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const params: DatabaseMiddlewareParams<any, any, any> = {
                input: request.body,
                token: request.header("authorization"),
                params: request.params,
                query: request.query,
                request,
                response
            }
            const result = await middleware(params)
            if (result) {
                response.json(result)
            } else {
                next()
            }
        } catch (error) {
            next(error)
        }
    }
)

