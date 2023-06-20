
/* start toggler */
var toggler_btn =document.querySelector(".toggler-btn");
var side_nav = document.querySelector(".side-nav");
toggler_btn.onclick=function(){
     side_nav.classList.toggle("active");
}

// side_nav active button toggler
function active_toggle(x){
    active_btn = document.querySelector(".active");
    active_btn.classList.toggle("active");
    x.classList.toggle("active");
    }

/* start typewriter */
var title = document.querySelector("#title");
var array =["Designer","Web Developer","Software developer"];
var arrIndex =0;
var charIndex =0;
function updatetitle(){
     charIndex++;
    title.innerHTML ="I'm <span>"+array[arrIndex].slice(0,charIndex)+"<span/>";
    if(charIndex==array[arrIndex].length){
        arrIndex++;
        charIndex=0;
    }
    if(arrIndex==array.length){
        arrIndex=0;
    }
    setTimeout(updatetitle ,150);
}
updatetitle();


/* start skills animation section */


$(document).ready(function(){
       var html = $(".html").html();
    var css = $(".css").html();
    var javascript = $(".javascript").html();
    var dsa  = $(".dsa").html();
    var ccpp = $(".ccpp").html();
    var python = $(".python").html();
    var java= $(".java").html();
    var sql = $(".sql").html();
    $(".progress-html").animate({'width':html},100,function(){
        $(".progress-css").animate({'width':css},50,function(){
            $(".progress-javascript").animate({'width':javascript},50,function(){
                $(".progress-dsa").animate({'width':dsa},50,function(){
                    $(".progress-ccpp").animate({'width':ccpp},50,function(){
                        $(".progress-python").animate({'width':python},50,function(){
                            $(".progress-java").animate({'width':java},50,function(){
                                $(".progress-sql").animate({'width':sql},50,function(){
        
                                });
                            });
                        });
                    });
                });
            });
        });
    });
})



//start filter for portfolio button

$(document).ready(function(){
     $(".nav-box li").each(function(){
       $(this).click(function(){
         $(".all").hide();
         $(".nav-box li").removeClass("active");
         $(this).addClass("active");
         var filter = $(this).attr("filter");
          $("."+filter).each(function(){
             $("."+filter).show(500);
          })
       })
     });
})


// email function

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_so4qekm";
    const templateID = "template_gitjghd";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }