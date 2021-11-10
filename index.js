const AWS = require('aws-sdk');
let s3 = new AWS.S3()

exports.handler = async (event) => {

  let objects = event["Records"][0]["s3"]["object"];
  
  let tempArray = [];
  let imageArray = [];

  tempArray.push(objects)
  
  
  for (objects.key in tempArray) {
    imageArray.push(objects);
  }
  
  const response = {

    statusCode: 200,
    body: imageArray,

  };

  return response;
}
    
    
    
    // // TODO implement
    
    // console.log(s3)
    // let imageArray = [];
    // let name = event["Records"][0]["s3"]["bucket"];
    // let size = event["Records"][0]["s3"]["object"];
    
    // console.log(bucket, object);
    
    // imageArray.push(name, size);
    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify('Hello from Lambda!'),
    //     // name: name,
    //     // size: size,
    //     // type: type
    // };
    // return response;

