import { APIGatewayRequestAuthorizerEvent, APIGatewaySimpleAuthorizerResult } from 'aws-lambda';

export const authorizer = async (event: APIGatewayRequestAuthorizerEvent): Promise<APIGatewaySimpleAuthorizerResult> => {
    let response = {
        isAuthorized: false
    }

    // Check if key is passed as a query parameter
    const keyFromQueryParam = event.queryStringParameters?.key;

    console.log("Received key:", keyFromQueryParam);

    const key = keyFromQueryParam;

    if (key === "monkey") {
        response.isAuthorized = true;
    }

    // Construct the IAM policy
    // const effect = isAuthorized ? 'Allow' : 'Deny';
    // const policyDocument = {
    //     Version: '2012-10-17',
    //     Statement: [
    //         {
    //             Action: 'execute-api:Invoke',
    //             Effect: effect,
    //             Resource: event.methodArn
    //         }
    //     ]
    // };

    return response;
    
};