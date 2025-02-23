export type Success<T> = {
    readonly type: "success";
    readonly value: T;
}

export type Failure = {
    readonly type: "failure";
    readonly error: Error;
}

export type Result<T> = Success<T> | Failure;

export class UseCaseResult {
    static success<T>(value: T): Success<T> {
        return {
            type: "success",
            value
        };
    }

    static failure(error: Error): Failure {
        return {
            type: "failure",
            error
        };
    }

    static isSuccess<T>(result: Result<T>): result is Success<T> {
        return result.type === "success";
    }

    static isFailure<T>(result: Result<T>): result is Failure {
        return result.type === "failure";
    }

    static getValue<T>(result: Result<T>): T {
        if (this.isSuccess(result)) {
            return result.value;
        }
        throw result.error;
    }

    static getError<T>(result: Result<T>): Error {
        if (this.isFailure(result)) {
            return result.error;
        }
        throw new Error("Cannot get error");
    }
}