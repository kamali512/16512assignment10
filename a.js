var state =false;
var submit_form=document.getElementById("form");
		submit_form.onsubmit=function(e)
		{
            e.preventDefault();
         if(checkmandory('uid')&&checkmandory('pass')&&checkmandory('name')
            &&checkmandory('co')&&checkmandory('zip')&&check('gender')&&check('lan'))
         {
         if(state){
            alert('your response has been recorded');
            submit_form.reset();
         }
         else{
            alert('Check Form fill the fields according to their rules');
         }
         
            
         }
           else{
               alert('Please enter required Fields')
           }
        }
     
        function checkmandory(id){
            let celement=document.getElementById(id).value.length>0;
            if(celement){
               
                return true;
              
            }
            else{
                document.getElementById('e'+id).innerHTML="This field is requried ";
                return false;
            }
        }
        

function valid(id){
    let ele=document.getElementById(id);
    let err=document.getElementById('e'+id);
    if(id==="uid"){
        let min=5;
        let max=12;
        let msg="User id should be between "+min+" and"+ max +" characters";
    limitchars(ele,err,min,max,msg);
               
    }
    else if(id==="pass"){
        let min=7;
        let max=12;
        let msg="Password should be between "+min+" and"+ max +" characters";
    limitchars(ele,err,min,max,msg);
               
    }
    else if(id==="name"){
        alphabets(ele,err);
    }
    else if(id==='co'){
        if(ele.value.length>0){
            err.innerHTML=""
        }
    }
    
    else if(id==="zip"){
        
        numbers(ele,err);

    }
    else if(id==='gender'){
        check(id);

    }
    else if(id=='lan'){
        check(id);
    }
}


function limitchars(ele,err,min,max,msg){
      
    if(ele.value.length >max||ele.value.length<min) {
        ele.value="";
        err.innerHTML = msg;
      
          state=false;
    }
    else{
        err.innerHTML="";
        state=true;
    }

}


function alphabets(ele,err)
{ 
var letters = /^[A-Za-z]+$/;
if(ele.value.match(letters))
{
    err.innerHTML="";
    state=true;

}
else
{
    
err.innerHTML='Please input alphabet characters only';
state=false;
}
}
function numbers(ele,err)
{ 
var numbers = /^[0-9]+$/;
if(ele.value.match(numbers))
{
    err.innerHTML="";
    state=true;

}

else
{

err.innerHTML='Please input numbers only';
state=false;
}
}

function check(id){
    if(document.getElementById(id).checked||document.getElementById(id+'2').checked){
 
        document.getElementById('e'+id).innerHTML="";
        return true;
    }
    else{
   
        document.getElementById('e'+id).innerHTML="Select the option ";
        return false;
    }
}