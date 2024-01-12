import { sendResponse } from "../../../responses/index";
import { docClient } from "../../../services/db";
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  if (event.pathParameters === null) {
    return sendResponse(400, {
        success: false,
        message: "Request body is null",
    });
}
  const { id } = event.pathParameters;

  try {
    const command = new GetCommand({
      TableName: "orderdb",
      Key: {
        id: id,
      },
    });
    const response = await docClient.send(command);
    return sendResponse(200, { success: true, order: response.Item });
  } catch (err) {
    return sendResponse(err.statusCode, {
      success: false,
      message: err.message,
    });
  }
}
