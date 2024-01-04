import { sendResponse } from "../../../responses/index";
import { docClient } from "../../../services/db";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

export async function handler(event) {
    const { id, products, totalPrice, orderStatus } = JSON.parse(event.body);

    const timeStamp = new Date();
  try {
    const command = new PutCommand({
      TableName: "orderdb",
      Item: {
        id: id,
        products: products,
        totalPrice: totalPrice,
        orderStatus: orderStatus,
        timeStamp: timeStamp.toISOString()
      }
    });

    await docClient.send(command);
    return sendResponse(201, { success: true });

  } catch (err) {
    return sendResponse(err.statusCode, {
      success: false,
      message: err.message,
    });
  }
}
