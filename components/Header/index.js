// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component



function Header() {
    const head = document.createElement("div")
    const headerDate = document.createElement("span")
    const mainTitle = document.createElement("h1")
    const temp = document.createElement("span")


    head.classList.add("header");
    headerDate.classList.add("date");
    temp.classList.add("temp");


    const headerContainer = document.querySelector(".header-container")
    headerContainer.appendChild(head)
    head.appendChild(headerDate)
    head.appendChild(mainTitle)
    head.appendChild(temp)


    headerDate.textContent = "SMARCH 28, 2019"
    mainTitle.textContent = "Lambda Times"
    temp.textContent = "98°"
    return head;
}
Header();
