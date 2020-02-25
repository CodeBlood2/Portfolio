



function cf(){
    document.getElementById("Web-Dev").style.display="none";
    document.getElementById("button2").style.border="solid";
    document.getElementById("Others").style.display="none";
    document.getElementById("button3").style.border="solid";
    document.getElementById("button1").style.border="dashed";
    document.getElementById("Languages").style.display="block";

}

function wd(){
    document.getElementById("Web-Dev").style.display="block";
     document.getElementById("button2").style.border="dashed";
     document.getElementById("button1").style.border="solid";
     document.getElementById("button3").style.border="solid";
     document.getElementById("Others").style.display="none";
    document.getElementById("Languages").style.display="none";
}

function of(){
    document.getElementById("Web-Dev").style.display="none";
    document.getElementById("Others").style.display="block";
    document.getElementById("Languages").style.display="none";
    document.getElementById("button2").style.border="solid";
    document.getElementById("button1").style.border="solid";
    document.getElementById("button3").style.border="dashed";
}

function write (obj, sentence, i, cb) {
    if (i != sentence.length) {
      setTimeout(function () {
        i++
        console.log('in timeout', i)
        obj.innerHTML = sentence.substr(0, i+1) +' <em aria-hidden="true"></em>';
        write(obj, sentence, i, cb)
      }, 50)
    } else {
      console.log(i)
      cb()
    }
  }
   function erase (obj, cb,i) {
   var sentence = obj.innerText
      if (sentence.length != 0) {
       setTimeout(function () {
       sentence = sentence.substr(0,sentence.length-1)
       console.log('in timeout', i)
       obj.innerText = sentence
       erase(obj, cb)
        }, 18/(i*(i/10000000)))
        } else {
        obj.innerText = " "
        cb()
     }
    }
    var typeline = document.querySelector("#typeline")

     function writeerase(obj, sentence, time, cb) {
      write(obj, sentence, 0, function () {
       setTimeout(function () {
       erase(obj, cb) }, time) })
       }

  var sentences = [
    "an Engineer. ",
    "a Developer. ",
    "a Web Designer. "
  ]
    
  var counter = 0
  function loop () {
    var sentence = sentences[counter % sentences.length]
    writeerase(typeline, sentence, 1500, loop)
    counter++
  }

  loop()

  function bar1(){
    document.getElementById("abt").style.borderBottom="1px solid cyan";
    document.getElementById("edc").style.borderBottom="none";
    document.getElementById("sc").style.borderBottom="none";
    document.getElementById("prj").style.borderBottom="none";
    document.getElementById("int").style.borderBottom="none";
    document.getElementById("ctc").style.borderBottom="none";
  }
  
  function bar1(){
    document.getElementById("abt").style.borderBottom="1px solid cyan";
    document.getElementById("edc").style.borderBottom="none";
    document.getElementById("sc").style.borderBottom="none";
    document.getElementById("prj").style.borderBottom="none";
    document.getElementById("int").style.borderBottom="none";
    document.getElementById("ctc").style.borderBottom="none";
  }
   function bar2(){
    document.getElementById("edc").style.borderBottom="1px solid cyan";
    document.getElementById("abt").style.borderBottom="none";
    document.getElementById("sc").style.borderBottom="none";
    document.getElementById("prj").style.borderBottom="none";
    document.getElementById("int").style.borderBottom="none";
    document.getElementById("ctc").style.borderBottom="none";
  }
   function bar3(){
    document.getElementById("sc").style.borderBottom="1px solid cyan";
    document.getElementById("edc").style.borderBottom="none";
    document.getElementById("abt").style.borderBottom="none";
    document.getElementById("prj").style.borderBottom="none";
    document.getElementById("int").style.borderBottom="none";
    document.getElementById("ctc").style.borderBottom="none";
  } 
  function bar4(){
    document.getElementById("prj").style.borderBottom="1px solid cyan";
    document.getElementById("edc").style.borderBottom="none";
    document.getElementById("sc").style.borderBottom="none";
    document.getElementById("abt").style.borderBottom="none";
    document.getElementById("int").style.borderBottom="none";
    document.getElementById("ctc").style.borderBottom="none";
  } 
  function bar5(){
    document.getElementById("int").style.borderBottom="1px solid cyan";
    document.getElementById("edc").style.borderBottom="none";
    document.getElementById("sc").style.borderBottom="none";
    document.getElementById("prj").style.borderBottom="none";
    document.getElementById("abt").style.borderBottom="none";
    document.getElementById("ctc").style.borderBottom="none";
  }
  
  function bar6(){
    document.getElementById("ctc").style.borderBottom="1px solid cyan";
    document.getElementById("edc").style.borderBottom="none";
    document.getElementById("sc").style.borderBottom="none";
    document.getElementById("prj").style.borderBottom="none";
    document.getElementById("int").style.borderBottom="none";
    document.getElementById("abt").style.borderBottom="none";
  }
 
 