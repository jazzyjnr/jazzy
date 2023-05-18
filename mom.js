let myHeading = document.querySelector("h1");

let myButton = document.querySelector("button");
myButton.onclick = () => {
    setUserName();
  };


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `WELCOME TO FRONT-END DEVELOPMENT SESSONS', ${myName}`;
    }
    let myButton2 = document.querySelector("button");
    myButton2.textContent = `Thank you, ${myName}`;

  }

  
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = "";
    myHeading.textContent = `WELCOME TO FRONT-END DEVELOPMENT SESSONS', ${storedName}`;
  }