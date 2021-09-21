
/*contact form*/
let nameNode=document.getElementById("name");
let errNode1=document.getElementById("err1");


function validate1(){
  errNode1.innerHTML="";
  nameNode.style.border="2px solid green";
  nameNode.style.backgroundColor="white";
  let name=nameNode.value;
  if(name===""){
      errNode1.innerHTML="<b>this field is required</b>";
      nameNode.style.border="2px solid red";
      nameNode.style.backgroundColor="pink";
      return false;
  }
  else{    
      return true;}

}


let mailNode=document.getElementById("mailid");
let errNode2=document.getElementById("err2");

function validate2(){
  errNode2.innerHTML="";
    mailNode.style.border="2px solid green";
    mailNode.style.backgroundColor="white";
    let email=mailNode.value;
    let ss=email.substring(email.indexOf('@')+1);
    console.log(ss);
    if(email===""){
        errNode2.innerHTML="<b>this field is required</b>"
        mailNode.style.border="2px solid red";
        mailNode.style.backgroundColor="pink";
        return false;
    }
    else if(!email.includes("@") || ss===""){
        errNode2.innerHTML="<b>Invalid email Id</b>"
        mailNode.style.border="2px solid red";
        mailNode.style.backgroundColor="pink";
        return false;
    }
    else{
        return true;
    }
}


/*let telNode =getElementById('Tel');
let errNode3=getElementById('err3');

function validate3(){
    errNode3.innerHTML="";
    telNode.style.border="2px solid green";
    telNode.style.backgroundColor="white";
    let number=telNode.value;
    if(number==="")
    {
        errNode3.innerHTML="<b>this field is required</b>"
        telNode.style.border="2px solid red";
        telNode.style.backgroundColor="pink";
        return false; 
    }
    else
        return true;

}*/

function validateForm(){
  let st1=validate1();
  let st2=validate2();
  return(st1 && st2);
}



/*reset form*/
$(document).ready(function(){
  $('#Resetform').click(function(){
    $("#form").trigger('reset');
  });
});





/*btn mouseover/out property*/

$(document).ready(function(){
    $(".btn").mouseover(function(){
        $(this).css("background-color","brown");
    });
    $(".btn").mouseout(function(){
        $(this).css({"background-color":"lightpink","color":"black"});
      });
   
});


/*About page: read more button*/
$(document).ready(function(){
    $(".Read").click(function(){//event fun
      let label=$(".Read").html();//DOM method
      if(label=="Read More"){
        $("#read").show(5000);//effect method
        $(".Read").html("Less");
         
      }
      else{
        $("#read").hide(5000);//effect method
        $(".Read").html("Read More");
      }
    });
  });


  /*teachers page: read more*/
  
$(document).ready(function(){
    $(".techbtn").click(function(){
      $("#block1").slideToggle("slow");
    });
  });
