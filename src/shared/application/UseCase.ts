export interface UseCase<any, any> {
    execute(request: any): Promise<any>;
}