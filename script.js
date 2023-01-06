//Get the input form and the post section from HTML
const form = document.querySelector("form");
const sect = document.querySelector("section");

//Event listener for the submit button. When clicked execute function below
form.addEventListener("submit", (e) => {
  //Prevents the page from reloading when submitting
  e.preventDefault();
  //Get the data from the input form and assign to variables
  const formData = new FormData(form);
  const text = formData.get("post-text");
  const name = formData.get("post-name");
  const check = formData.get("checkbox");
  //Get the current date, parse and store to a variable
  const getDate = new Date();
  const postDay = getDate.getDay() + 1;
  const postMonth = getDate.getMonth() + 1;
  const postYear = getDate.getFullYear();
  const postHours = getDate.getHours();
  const postMinutes =
    (getDate.getMinutes() < 10 ? "0" : "") + getDate.getMinutes();
  const fullDate = `${postDay}.${postMonth}.${postYear} ${postHours}:${postMinutes}`;

  //Create a new div for the post
  const post = document.createElement("div");
  //Assign a class to the div
  post.className = "poststyle";
  //Check for the checkbox. If checked change the class to include a red border
  if (check === "on") {
    post.classList.remove("poststyle");
    post.classList.add("redborder");
    //Append the div
    sect.appendChild(post);

    //Get the new div. Last child selector is used to create a new div with every button press.
    const postdiv = document.querySelector(".redborder:last-child");
    //Create a paragraph element inside the div with the current date and the username
    const postDateAndName = document.createElement("p");
    //Assign class to the element
    postDateAndName.className = "postdateandnamestyle";
    //Assign the textcontent
    postDateAndName.textContent = `${fullDate} (${name})`;
    //Append the element to the new div
    postdiv.appendChild(postDateAndName);
    //Create a paragraph element for the text of the post
    const postContent = document.createElement("p");
    //Assign a class to the element
    postContent.className = "postcontentstyle";
    //Assign the textcontent
    postContent.textContent = `${text}`;
    //Append the element to the new div
    postdiv.appendChild(postContent);

    //If checkbox is not checked
  } else {
    //Append the new div with the default class
    sect.appendChild(post);

    //Get the new div. Last child selector is used to create a new div with every button press.
    const postdiv = document.querySelector(".poststyle:last-child");
    //Create a paragraph element inside the div with the current date and the username
    const postDateAndName = document.createElement("p");
    //Assign class to the element
    postDateAndName.className = "postdateandnamestyle";
    //Assign the textcontent
    postDateAndName.textContent = `${fullDate} (${name})`;
    //Append the element to the new div
    postdiv.appendChild(postDateAndName);

    //Create a paragraph element for the text of the post
    const postContent = document.createElement("p");
    //Assign a class to the element
    postContent.className = "postcontentstyle";
    //Assign the textcontent
    postContent.textContent = `${text}`;
    //Append the element to the new div
    postdiv.appendChild(postContent);
  }
});
