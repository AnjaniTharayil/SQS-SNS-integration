exports.handler = async (event) => {
  // Log the entire SNS event
  console.log("Received SNS event:", JSON.stringify(event, null, 2));

  // Extract message from the first record
  const snsMessage = event.Records[0].Sns.Message;
  console.log("Message received from SNS:", snsMessage);

  return {
    statusCode: 200,
    body: JSON.stringify("Message processed successfully"),
  };
};
