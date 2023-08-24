const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const path = require('path');

exports.handler = async (event) => {
    console.log("event: ", JSON.stringify(event))
    const bucketName = 'protomaps-tile-service'; // Replace with your S3 bucket name
    const decodedObjectKey = decodeURIComponent(event.rawPath); // Assuming 'objectKey' is passed as an event parameter
    const noSlashDecodedObjectKey = decodedObjectKey.startsWith('/') ? decodedObjectKey.slice(1) : decodedObjectKey; // Remove leading slash
    try {
        // Use the getObject method to download the object from S3
        console.log("Getting from S3: ", bucketName, " this objecT: ", noSlashDecodedObjectKey);
        const data = await s3.getObject({ Bucket: bucketName, Key: noSlashDecodedObjectKey }).promise();
        console.log("Got data from S3: ", data);
        console.log("Data type: ", typeof (data));

        // Return the object content as a response
        return {
            statusCode: 200,
            body: (data.Body).toString('base64'),
            headers: {
                'Content-Type': "binary/octet-stream",
            },
            isBase64Encoded: true
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error', event: event }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    }
};
