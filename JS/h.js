document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;
  let x = 1;
  let regex = /^h/;
  let text;
  if(regex.test(input)){
      text = "hello";
  }

  regex = /tell me about university/i;

  if(regex.test(input)){
    text = "Tell me about Campus";
  }

  regex = /tell me about campus/i;
  if(regex.test(input)){
    text = "Tell me about Campus";
  }

  regex = /(admisssion|admisson|admission|Admission|Admison|Admisson|Admison)/;
  if(regex.test(input)){
    text = "Admission";
  }

  regex = /(courses|available courses|Available Courses|AVailble COURSes|Courses Available|courses available)/
  if(regex.test(input)){
    text = "Courses Available"
  }

  regex = /(Fees|Structure of fees|Fees Structure|fees structure|fees|Courses Fee)/
  if(regex.test(input)){
    text = "Fees Structure";
  }

  regex = /(Hostel|Hostel System|hostel system|hostel fees|fees for hostel|Hoste rent|hostel Info|Hostel Info|hostel info)/
  if(regex.test(input)){
    text = "Hostel enquiry";
  }

  regex = /(Placement|placement|Placement Details|Details for placement)/
  if(regex.test(input)){
    text = "Placement drives";
  }

  regex = /(Travelling|Bus|Bus fees|Fees for Bus|fees of bus|fees structure for bus|bus fees)/
  if(regex.test(input)){
    text = "Bus fees";
  }

  regex = /(Exams|exams|examination|Results|results)/
  if(regex.test(input)){
    text = "Student Information related to exams and result";
  }



  if(input == "courses" || input == "all courses"){
    product = "courses.html"
  }
  else if (compare(prompts, replies, text)) {
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);
  } else {
    // If all else fails: random alternative
    let idx = Math.floor(Math.random() * 2);
    if(idx == 0){
        product = "try again";
    }else{
        product = "I don't understand";
    }
  }

  // Update DOM

  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="G.png" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "G.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Getting answers for your query";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  let x = 1;
  if(product == "courses.html"){
    botText.innerHTML = `Please scroll down to programs and courses section using this <a href="https://apply.geu.ac.in/?utm_source=google&utm_medium=cpc&utm_campaign=IDP_S_India_Brand_Exact&utm_term=graphic%20era&utm_content=99843806375&gclid=Cj0KCQjwtvqVBhCVARIsAFUxcRtfSTzq5VJacJpi_-o_9q5QZbGWjZN7L35cmI33FFPo3hUxDY3N9QgaAkRQEALw_wcB" target = "_blank">link</a>`
    textToSpeech("Please scroll down to programs and courses section using this link")
    x = 0;
  }

  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  if(x == 1){
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )}
}
