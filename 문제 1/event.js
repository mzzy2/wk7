const colorSelect = document.getElementById("color");
const text = document.getElementById("text");

function changeColor(c) {
    const target = c.target.value;

    if (target === "black") {
        text.style.color = "black";
    } else if (target === "red") {
        text.style.color = "red";
    } else if (target === "orange") {
        text.style.color = "orange";
    } else if (target === "yellow") {
        text.style.color = "yellow";
    } else if (target === "green") {
        text.style.color = "green";
    } else if (target === "blue") {
        text.style.color = "blue";
    } else if (target === "navy") {
        text.style.color = "navy";
    } else if (target === "purple") {
        text.style.color = "purple";
    }
}

colorSelect.addEventListener("change", changeColor);