document.getElementById("change-text").addEventListener("click",()=> {
    document.getElementById("dom1-text").innerText = "текст озгортулдуу"
})

const Input = document.getElementById("search-input");
const list = document.getElementById("search-list").getElementsByTagName("li");
Input.addEventListener("input",() => {
    const filter = Input.value.toLowerCase();
    Array.from(list).forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(filter)? '': 'none';
    })
})


document.addEventListener("DOMContentLoaded", function () {

  
  const saveBtn = document.getElementById("saveBtn");
  const textInput = document.getElementById("textInput");
  const resultText = document.getElementById("resultText");

  saveBtn.addEventListener("click", function () {
    resultText.innerText = textInput.value;
  });



  const changeImgBtn = document.getElementById("changeImgBtn");
  const myImage = document.getElementById("myImage");

  changeImgBtn.addEventListener("click", function () {
    const currentSrc = myImage.getAttribute("src");

    if (currentSrc.includes("placeholder")) {
      myImage.setAttribute("src", "https://picsum.photos/100");
    } else {
      myImage.setAttribute("src", "https://via.placeholder.com/100");
    }
  });


  
  const addBtn = document.getElementById("addBtn");
  const newItemInput = document.getElementById("newItem");
  const list = document.getElementById("list");

  addBtn.addEventListener("click", function () {
    const value = newItemInput.value.trim();

    if (value === "") return;

    const li = document.createElement("li");
    li.innerText = value;

    list.prepend(li);

    newItemInput.value = "";
  });

});