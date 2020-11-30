'use strict';

const axios = require('axios').default;

// Add a valid subscription key and endpoint to your environment variables.
let subscriptionKey = process.env['c86efaeda28a40ea968def2f59b33dc5']
let endpoint = process.env['https://faceapikey.cognitiveservices.azure.com/'] + '/face/v1.0/detect'

// Optionally, replace with your own image URL (for example a .jpg or .png URL).
let imageUrl = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/faces.jpg'

// Send a POST request
axios({
    method: 'post',
    url: endpoint,
    params : {
        detectionModel: 'detection_02',
        returnFaceId: true
    },
    data: {
        url: imageUrl,
    },
    headers: { 'Ocp-Apim-Subscription-Key': subscriptionKey }
}).then(function (response) {
    console.log('Status text: ' + response.status)
    console.log('Status text: ' + response.statusText)
    console.log()
    console.log(response.data)
}).catch(function (error) {
    console.log(error)
});

params : {
    detectionModel: 'detection_01',
    returnFaceAttributes: 'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise',
    returnFaceId: true
}