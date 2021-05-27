var database,position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);




  var testdata = database.ref('details'); 

 
  testdata.on("value", readData);
 
}

function draw(){
  background("white");
  
    if(keyDown(DOWN_ARROW)){
     
        writeData();
      }
    
   
  
}


function writeData(){
  
  database.ref('details').set({
    Name : 'Salini',
    Code :2

   
   
  

  })
}

function readData(data){
  position = data.val();
  console.log(position);
  
}
