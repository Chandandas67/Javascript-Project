function submitQuiz(){
    let score = 0;


    if(document.querySelector("input[name='q1']:checked").value==="c"){
        score++;
    }

    if(document.querySelector("input[name='q2']:checked").value==="d"){
        score++;
    }

    let resultDiv = document.querySelector("#res_print");
    resultDiv.innerHTML = score;
}