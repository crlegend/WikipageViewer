

$(document).ready(function(){   
   
  $("#inputField").keypress(function(e) {
    if(e.keyCode===13)
      {
        ajaxGet($("#inputField").val());
      }
          
        });
        $('#btn').on("click",function() {
          
          ajaxGet($("#inputField").val());
         
        });
       
  
  function ajaxGet(inputVal)
  {
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ inputVal  +"&format=json&callback=?"; 
            $.ajax({
                url: url,
                type: 'GET',
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: processResult
            });
  }
   
   function processResult(data){
     
     //console.log(data);
     $("#output").empty();
      for(var i= data[1].length -1;i>=0;i--){
      
     $("#output").prepend('<div class="card my-2" style="width:100%;"><div class="card-body"><h5 class="card-title"><a target = "_blank" href=' + data[3][i]+ '>'+ data[1][i]+ '</a></h5><p class="card-text">' +data[2][i] +'</p></div></div>');}     
     
     }
    }); 

 
