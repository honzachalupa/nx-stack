export interface IResponse<IResponseType> {
    data: IResponseType;
    error: string;
    isSuccess: boolean;
}
