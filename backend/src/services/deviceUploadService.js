import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "./awsService.js";

export const uploadDevicesToAWS = async (devices) => {

  for (const device of devices) {

    const command = new PutCommand({
      TableName: "devices",
      Item: device
    });

    await docClient.send(command);
  }

  console.log("Devices uploaded to AWS");
};