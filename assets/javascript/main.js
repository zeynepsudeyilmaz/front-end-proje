//sk-proj-Etkkac0fH54kyQulVjsVT3BlbkFJaxLtkldt7bMMBYkF6gB7

//randevu al butonunu online randevu sayfasına yönlendirme
var randevu_btn = document.getElementById("randevu-btn");

randevu_btn.addEventListener("click", function(e){
    e.preventDefault();

    var url = "online-randevu.html";

    window.location.href = url;
});


