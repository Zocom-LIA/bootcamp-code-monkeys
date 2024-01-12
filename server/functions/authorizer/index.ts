import { APIGatewayRequestAuthorizerEvent, APIGatewaySimpleAuthorizerResult } from 'aws-lambda';

export const authorizer = async (event: APIGatewayRequestAuthorizerEvent): Promise<APIGatewaySimpleAuthorizerResult> => {
    let response = {
        isAuthorized: false
    }
    const keyFromQueryParam = event.queryStringParameters?.key;
    const key = keyFromQueryParam;
    if (key === "monkey") {
        response.isAuthorized = true;
    }
    return response
};