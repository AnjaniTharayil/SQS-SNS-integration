exports.handler = async (event) => {
  console.log("Received SQS event:", JSON.stringify(event, null, 2));

  event.Records.forEach((record) => {
    const { body } = record;
    console.log("Message Body:", body);
  });

  return {
    statusCode: 200,
    body: JSON.stringify("Messages processed successfully"),
  };
};
