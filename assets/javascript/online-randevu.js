const radioEvet = document.querySelector('input[name="yakin"][value="evet"]');
const radioHayir = document.querySelector('input[name="yakin"][value="hayir"]');
const yakinForm = document.getElementById('yakinForm');

radioEvet.addEventListener("change", function(){
    if(this.checked){
        yakinForm.style.display = "block";
    } else {
        yakinForm.style.display = "none";
    }
});
    radioHayir.addEventListener("change", function(){
        if(this.checked){
            yakinForm.style.display = "none";
        }
});

const randevuAlBtn = document.getElementById("randevualmabtn");

randevuAlBtn.addEventListener("click", function(e){
    e.preventDefault();

    alert("Randevunuz başarıyla oluşturulmuştur.");
})