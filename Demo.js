//it will contain all the basic things of javascript.
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScriptBaics</title>
  </head>
  <body>
    <h1 class="head1">This page contains Basics Of JavaScript</h1>
    <p class="para">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
      incidunt, sunt dicta quasi alias adipisci error nisi sit repellat laborum.
    </p>
    <h1 class="head1">Lorem ipsum dolor sit amet.</h1>
    <p class="para">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
      obcaecati porro iure id consequuntur deleniti iste omnis adipisci odio
      magnam.
    </p>
    <input type="text" name="username">
    <button id="mybutton" onclick="alert('Button Clicked')">click</button>
    <button onclick="hello() ">click me</button>
    <script>
      //there are three ways we can access the element-
      //i)by getElementById
      //ii)by getElementByName
      //iii)by getElementsByClassName

        document.title="New Title";//if we want to change the title of the web page then we use this.
        var x=document.getElementsByTagName('h1');
        console.log(x);
        console.log(x[0]);//to acces the particular element we mention the index.
        x[0].innerText="Updated Heading";//it will update the heading.
        x[0].style.textAlign="center";
        x[0].style.color="red";
        //x[1].style.display="none";
        var y=document.getElementsByName("username");
        console.log(y);
        y[0].style.backgroundColor="pink";
        var z=document.getElementById("mybutton");
        console.log(z);
        z.textContent="updated with getElementById";
        z.style.display="block";
        var p=document.getElementsByClassName("para")[1];//class name is also used to access the collection/multiple values.
        console.log(p);
        p.style.color="blue";
        //query selector-
         var p1=document.querySelector('.para');//it changes only  the topmost paragraph.
         console.log(p1);
        // p1.style.borderColor="red";
         var p2=document.querySelectorAll('.para');
         console.log(p2);
        // p2.style.borderColor="green";//it changes all elements
         document.querySelector(".head1").style.textAlign="right";
         //Event Handling-
         //i)Inline event handling
         //ii)event handling through binding
         //iii)event handling using listener.
         function hello(){
          alert("click me button is clicked");
         }//event handling through binding
         var x=document.querySelectorAll('button')[1];
         x.onclick=hello;
         //x.onclick=()=>(document.getElementsByTagName('h1').style.textAlign="center");
         x.onmouseover=()=>{x.style.backgroundColor="red";x.style.color="white";};//event handling using listener.
         x.onmouseleave=()=>{x.style.width="200px";x.style.height="80px"};
         x.addEventListener("mouseleave",function(){});//it will add the desired listener in the web page.
         x.removeEventListener("click",abc);//it will remove the listeners added in the web page.




        
    </script>
  </body>
</html>
