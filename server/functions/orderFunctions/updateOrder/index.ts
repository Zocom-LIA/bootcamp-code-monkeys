import { sendResponse } from "../../../responses/index";
import { docClient } from "../../../services/db";
import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export async function handler( event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  if (event.body === null || event.pathParameters === null) {
    return sendResponse(400, {
      success: false,
      message: "Request body is null",
    });
  }
  const { orderStatus, timeStamp } = JSON.parse(event.body);
  const { id } = event.pathParameters;
  console.log("Orderstatus: ", orderStatus, "timestamp: ", timeStamp, "id: ", id)
  try {
    const command = new UpdateCommand({
        TableName: "orderdb",
        Key: { id: id },
        UpdateExpression: "set orderStatus = :orderStatus, #timeStamp = :orderTimeStamp",
        ExpressionAttributeNames: {
            "#timeStamp": "timeStamp",
        },
        ExpressionAttributeValues: {
            ":orderStatus": orderStatus,
            ":orderTimeStamp": timeStamp
        },
        ReturnValues: "ALL_NEW",
    })
    await docClient.send(command)
    return sendResponse(200, { success: true })
  }
  catch (error) {
    return sendResponse(error.statusCode, { success: false, message: error.message })
  }
}
