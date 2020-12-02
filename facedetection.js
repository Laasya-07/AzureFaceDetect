'use strict';

const request=require('request');
const subscriptionKey='92c231de55fc4da386173681266a7d01';

const uriBase='https://faceapikey.cognitiveservices.azure.com/face/v1.0/detect';

const imageUrl='http://i.huffpost.com/gen/2500992/images/o-CRICKET-TEAM-INDIA-facebook.jpg';

const params={
    'returnFaceId':'true',
    'returnFaceLandmarks':'false',
    'returnFaceAttributes':'age,gender,emotion,hair,smile'
};

const options={
    uri:uriBase,
    qs:params,
    body:'{"url":'+'"'+imageUrl+'"}',
    headers:{
        'Content-Type':'application/json',
        'Ocp-Apim-Subscription-Key':subscriptionKey
    }
};

request.post(options,(error,response,body)=>{
    if(error){
        console.log('Error:',error);
        return;
    }
    let jsonResponse=JSON.stringify(JSON.parse(body),null,' ');
    console.log('JSON Response\n');
    console.log(jsonResponse);
});
