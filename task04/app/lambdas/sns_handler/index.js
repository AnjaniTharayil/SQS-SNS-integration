const AWS = require("aws-sdk");
const sns = new AWS.SNS();

exports.handler = async (event) => {
  // Iterate through each record in the event
  event.Records.forEach((record) => {
    // Extract the SNS message
    const snsMessage = record.Sns.Message;
    console.log("SNS Message:", snsMessage);
  });

  return `Successfully processed ${event.Records.length} records.`;
};
