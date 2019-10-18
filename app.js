var dataName = [];
      
      
        

var dataAge = [];
      
      
        
var svalue; //1 for falsy 2 for name already 3 for age less than 15
      
      
        


      
      
        
console.log(dataName);
      
      
        
console.log(dataAge);
      
      
        


      
      
        


      
      
        
var searchNameField = document.querySelector("#name");
      
      
        
var searchAgeField = document.querySelector("#age");
      
      
        


      
      
        
var searchForName;
      
      
        
var searchForAge;
      
      
        
var match = false;
      
      
        
var lastIndex;
      
      
        


      
      
        


      
      
        
$("#submit-btn").on("click", function(){
      
      
        
    searchForName= searchNameField.value;
      
      
        
    searchForAge= searchAgeField.value;
      
      
        
    $("p").html("");
      
      
        
    checkFalsy();
      
      
        
    
      
      
        
})
      
      
        


      
      
        


      
      
        


      
      
        


      
      
        
function checkFalsy(){             //checking if the value is not falsy
      
      
        
 if((searchForName != "false") && (searchForName != 0) && (searchForName != "null") && (searchForName != "NaN") && (searchForName != "") && (searchForName != "undefined")){
      
      
        
  
      
      
        
stringSearch();
      
      
        


      
      
        


      
      
        
 }else{
      
      
        
  svalue = 1;
      
      
        
  $("p").html("Falsy value--> submit again");
      
      
        
  return;
      
      
        
 }
      
      
        


      
      
        
}
      
      
        


      
      
        


      
      
        


      
      
        


      
      
        


      
      
        
    function stringSearch() {                       //function to search string
      
      
        
      $("#response-container ul").html("");
      
      
        
      for (var i =0; i < dataName.length; i++){
      
      
        
        if(dataName[i].toLowerCase() == searchForName.toLowerCase()){
      
      
        
          $("p").html("string matched--> submit again");
      
      
        
          console.log("matched");
      
      
        
            match = true;
      
      
        
      
      
      
        
            }
      
      
        
                                              }
      
      
        


      
      
        
  if(!match){                              // if not matched then push
      
      
        
    console.log("notmatch")
      
      
        
    checkAge();
      
      
        
    
      
      
        
    
      
      
        
}
      
      
        
match = false;
      
      
        
}
      
      
        


      
      
        


      
      
        
function checkAge(){
      
      
        
if(searchForAge>=15){
      
      
        
  dataName.push(searchForName);
      
      
        
    dataAge.push(searchForAge);
      
      
        
    console.log(dataName);
      
      
        
    console.log(dataAge);
      
      
        
    lastIndex = dataName.length;
      
      
        
    console.log(lastIndex);
      
      
        
    for(var i=0; i<lastIndex; i++){
      
      
        
      $("p").html("success");
      
      
        
    $("#response-container ul").append('<li class="list-group-item font-weight-bold"> Name :' + " "+dataName[i]+"</li>"+'<li class="list-group-item font-italic list-group-item-dark">Age :'+dataAge[i] +'</li>');
      
      
        
   
      
      
        
}
      
      
        


      
      
        
}else{
      
      
        
  svalue=3;
      
      
        
  $("p").html("Age should be more than 14--> submit again");
      
      
        
  
      
      
        
}
      
      
        
}
