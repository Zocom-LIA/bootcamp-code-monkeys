import { sendResponse } from "../../../responses/index";
import { docClient } from "../../../services/db";
import { GetCommand } from "@aws-sdk/lib-dynamodb";

export async function handler(event) {
    const {id} = event.pathParameters;

  try {
    const command = new GetCommand({
      TableName: "orderdb",
      Key: {
        id: id
      }
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
