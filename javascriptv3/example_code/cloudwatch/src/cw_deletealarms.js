/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/cloudwatch-examples-creating-alarms.html.

Purpose:
cw_deletealarm.js demonstrates how to delete Amazon CloudWatch alarms.

Inputs (replace in code):
- REGION
- ALARM_NAMES (e.g., Web_Server_CPU_Utilization)

Running the code:
node cw_deletealarm.js
*/
// snippet-start:[cw.JavaScript.alarms.deleteAlarmsV3]

// Import required AWS SDK clients and commands for Node.js
import { DeleteAlarmsCommand } from "@aws-sdk/client-cloudwatch";
import { cwClient } from "./libs/cwClient";

// Set the parameters
const params = { AlarmNames: "sdfs" }; // e.g., "Web_Server_CPU_Utilization"

const run = async () => {
  try {
    const data = await cwClient.send(new DeleteAlarmsCommand(params));
    console.log("Success, alarm deleted; requestID:", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();
// snippet-end:[cw.JavaScript.alarms.deleteAlarmsV3]
// For unit tests only.
// module.exports ={run, params};
