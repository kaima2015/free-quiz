const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        const target = document.getElementById(btn.dataset.target);
        const isCorrect = btn.dataset.correct === "true";

        // show message
        target.innerText = isCorrect ? "Correct" : "Incorrect";

        // color button
        btn.style.backgroundColor = isCorrect ? "green" : "red";

        // clear message after 2 seconds
        setTimeout(() => {
            target.innerText = "";
        }, 2000);
    });
});