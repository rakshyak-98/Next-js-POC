type ErrorData = {
    [key: string]: any;
}
export class AppError extends Error {
    constructor(message: string, data: ErrorData ){
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);

        const caller = this.stack?.split("\n")[1].trim();
        this.message = `${this.message} (${caller}) info: ${JSON.stringify(data)}`;
    }
}
