import { sendResponse } from "../../../responses/index";
import { docClient } from "../../../services/db";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

export async function handler() {
  try {
    const command = new ScanCommand({
      TableName: "orderdb",
    });
    const response = await docClient.send(command);
    return sendResponse(200, { success: true, orders: response.Items });
  } catch (err) {
    return sendResponse(err.statusCode, {
      success: false,
      message: err.message,
    });
  }
}
