import { sendResponse } from "../../../responses/index";
import { docClient } from "../../../services/db";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

export async function handler() {
  try {
    const command = new ScanCommand({
      TableName: "menudb",
    });
    const response = await docClient.send(command);
    return sendResponse(200, { success: true, menu: response.Items });
  } catch (err) {
    return sendResponse(err.statusCode, {
      success: false,
      message: err.message,
    });
  }
}
