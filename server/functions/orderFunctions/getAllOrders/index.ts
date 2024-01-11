import { sendResponse } from "../../../responses/index";
import { docClient } from "../../../services/db";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { APIGatewayProxyResult } from 'aws-lambda';

export async function handler() : Promise<APIGatewayProxyResult> {
  console.log("Before try");
  
  try {
    const command = new ScanCommand({
      TableName: "orderdb",
    });
    const response = await docClient.send(command);
    console.log("Accessed try");
    return sendResponse(200, { success: true, orders: response.Items });
  } catch (err) {
    console.log("Error message received");
    
    return sendResponse(err.statusCode, {
      success: false,
      message: err.message,
    });
  }
}
