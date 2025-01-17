/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/cloudwatch-examples-subscriptions.html.

Purpose:
cwl_putsubscriptionfilter.js demonstrates how to create or update a subscription filter for an Amazon CloudWatch Logs group.

Inputs (replace in code): (all into command line below)
- REGION
- LAMBDA_FUNCTION_ARN
- FILTER_NAME
- LOG_GROUP

Running the code:
node cwl_putsubscriptionfilter.js
*/
// snippet-start:[cwLogs.JavaScript.cwl.putSubscriptionFilterV3]

// Import required AWS SDK clients and commands for Node.js
const {
  PutSubscriptionFilterCommand,
} = require("@aws-sdk/client-cloudwatch-logs");
const { cwlClient } = require("./libs/cwlClient");

// Set the parameters
const params = {
  destinationArn: "LAMBDA_FUNCTION_ARN", //LAMBDA_FUNCTION_ARN
  filterName: "FILTER_NAME", //FILTER_NAME
  filterPattern: "ERROR",
  logGroupName: "LOG_GROUP", //LOG_GROUP
};

const run = async () => {
  try {
    const data = await cwlClient.send(new PutSubscriptionFilterCommand(params));
    console.log("Success", data.subscriptionFilters);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
// snippet-end:[cwLogs.JavaScript.cwl.putSubscriptionFilterV3]
// For unit tests only.
// module.exports ={run, params};
