let micBtn = document.querySelector('.micBtn')
let mic_cammand = document.querySelector('.mic_cammand')
let voice = document.querySelector('.voice')
// modal javascript code start

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
function speak(text){
  let text_speak = new SpeechSynthesisUtterance(text)
  text_speak.rate = 1
  text_speak.pitch = 1
  text_speak.volume = 1
  text_speak.lang = "hi-GB"
  window.speechSynthesis.speak(text_speak)

}
function wishme(){
  let date = new Date()
  let hours = date.getHours()
  console.log(hours)
  if(hours >= 0 && hours < 12){
    speak(`Good Morning ${username}`)
  }
  else if(hours >=12 && hours < 16){
    speak(`Good Afternoon ${username}`)
  }
  else{
    console.log("good evening")
    speak(`Good Evening ${username}`)
  }
}



window.addEventListener('load',function(){
  wishme()

})


// code 

// Check if the user has already registered
window.addEventListener("load", function() {
  let username = localStorage.getItem("username");

  if (!username) {  
    modal.style.display = "block";
  } else {
    modal.style.display = "none";  
  }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Form control code
function saveName() {
  let name = document.querySelector('#name').value;
  let address = document.querySelector('#address').value;
  let age = document.querySelector('#age').value;

  // Save user data to localStorage
  localStorage.setItem("username", name);
  localStorage.setItem("useraddress", address);
  localStorage.setItem("userage", age);

  alert("Thank You! Enjoy Your Virtual Assistant");

  // Close the modal after saving data
  modal.style.display = "none";
}

// Logging username for debugging
let username = localStorage.getItem("username");
let address = localStorage.getItem("useraddress");
let age = localStorage.getItem("userage");
console.log(age)

// form control code end 

// code end 







let speechrecoginition = window.SpeechRecognition || window.webkitSpeechRecognition
let recoginition = new speechrecoginition()
recoginition.onresult = (e)=>{
  let currentIndex = e.resultIndex
  
 
  let transcript = e.results[currentIndex][0].transcript
  mic_cammand.innerText = transcript
  takeCammand(transcript.toLowerCase())
}
micBtn.addEventListener("click",function(){
  recoginition.start()
  voice.style.display="block"
  
  

})

// function takeCammand(message){
//   if(message.includes("hello")){
//     speak("Hello Sir How can i Help You")
//   }


// }
function takeCammand(message){
  switch(true){
    case message.includes("hello"):
      speak(`hello ${username} Sir How can i Help You`);
      break;
    case message.includes("who are you"):
      speak("I m shifra Your Virtual Assistant created by Manish sir")
      break;
    case message.includes("what is your age shipra"):
      speak("i m born recently i don't know what my extactly age is ? ")
      break;
    case message.includes("how old you are "):
      speak("i m born recently i don't know what my extactly age is ? ")
      break;
    case message.includes("what is my location"):
      speak(`your location is ${address} India`)
      break;
    case message.includes("what's my location"):
      speak(`your location is ${address} India`)
      break;
    case message.includes("what's my age"):
      speak(`you are  ${age} year old ${username} sir`)
      break;
    case message.includes("what is my age"):
      speak(`you are  ${age} year old  ${username} sir`)
      break;


    case message.includes("open google"):
      speak("Opening google...");
      window.open("https://www.google.com/");
      break;
    case message.includes("open youtube"):
      speak("Opening youtube...");
      window.open("https://www.youtube.com/");
      break;
    
    case message.includes("how are you"):
      speak(`i m good thanks for asking  what about you ${username} sir`);
      break;
    case message.includes("open instagram"):
      speak("opening instagram");
      window.open("https://www.instagram.com/");
      break;
    case message.includes("open facebook"):
      speak("opening facebook");
      window.open("https://www.facebook.com/");
      break;
    case message.includes("where are you from"):
      speak("I m from Bangalore staying with my manish sir");
      
      break;
    
    default:
      let finalmsg = "this is what i found in internet rgarding " +message.replace("shifra","") || message.replace("shipra","")
        speak(finalmsg)
        window.open(`https://www.google.com/search?q=${message}`)
        break;

    
  }
 

}







