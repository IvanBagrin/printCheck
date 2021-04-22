var express = require('express');
var fs = require('fs');
var router = express.Router();
const filePath = "routes/test.json";
const fileCompany = "routes/company.json"
const jsonParser = express.json();


/* GET ID COMPANY users listing. */
router.get('/usersId:id', function(req, res, next) {
	let id =req.params.id;
  


  const content = fs.readFileSync(filePath,"utf8");
  let company;
  JSON.parse(content).map((item, index) => {
    if(item.id == id) {
      company = item;
    }
  })


  res.send(JSON.stringify(company));
  
  });



/* GET COMPANY listing. */
router.get('/users', function(req, res, next) {
	
console.log('vhodGET')
const content = fs.readFileSync(filePath,"utf8");

res.send(content);

});


/* GET COMPANY listing. */
router.get('/companyGet', function(req, res, next) {
	
  console.log('vhodGET')
  const content = fs.readFileSync(fileCompany,"utf8");
  console.log(content)
  
  res.send(content);
  
  });

/* DELETE ID COMPANY users listing. */
router.delete('/deleteCompany:id', function(req, res, next) {
	let id =req.params.id;
  
  console.log(id)

  const content = fs.readFileSync(filePath,"utf8");

  let company = JSON.parse(content);
  company.map((item, index, array) => {
    if(item.id == id) {
      array.splice(index, 1);
    }
  })

  fs.writeFileSync(filePath, JSON.stringify(company));
  res.send(JSON.stringify(company));
  
  });


/* PUT ID COMPANY users listing. */
router.put('/putCompany:id', function(req, res, next) {
	let id =req.params.id;
  
  console.log(id)
  let data = req.body;
  //let contentData = JSON.parse(data);
  console.log(data)

  const content = fs.readFileSync(filePath,"utf8");

  let company = JSON.parse(content);
  company.map((item, index, array) => {
    if(item.id == id) {
      array.splice(index, 1, data);
    }
  })

  fs.writeFileSync(filePath, JSON.stringify(company));
  res.send(JSON.stringify(data));
  
  });

/* POST ID COMPANY users listing. */
router.post('/create', jsonParser, function(req, res, next) {
  console.log('vhodPOST')
  const content = fs.readFileSync(filePath,"utf8");

 let data = req.body;
 let contentData = JSON.parse(content);
 //console.log("1: "+ data)
  //console.log( data)

// for(let key of data){
//   contentData.push(key);
// }

contentData.push(data);
 // console.log(contentData,content)

 fs.writeFileSync(filePath, JSON.stringify(contentData));

 res.send(contentData);
})


/* POST ID COMPANY users listing. */
router.post('/company', jsonParser, function(req, res, next) {
  console.log('vhodcompanyId')
  

 let data = req.body;
 console.log('vhodcompanyId2')
 fs.writeFileSync(fileCompany, JSON.stringify(data));

 res.send(data);
})

module.exports = router;