const ilan_btn = document.getElementById("ilan-btn");
const ilanlar_listesi = document.getElementById("ilanlar-listesi");

ilan_btn.addEventListener("click", function(e){
    e.preventDefault();

    const ilanBaslik = document.getElementById('ilanBaslik').value;
        const ilanIcerik = document.getElementById('ilanIcerik').value;
        const sehir = document.getElementById('sehir').value;
        const ilce = document.getElementById('ilce').value;
        const foto = document.getElementById('foto').files[0];

        const currentDate = new Date().toLocaleDateString('tr-TR');

        const yeniEleman = document.createElement("div");
        yeniEleman.classList.add("list-group-item", "list-group-item-action");
        yeniEleman.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-3 font-weight-bold">${ilanBaslik}</h5>
            <small class="text-muted">${currentDate}</small>
        </div>
        <div class="row">
            <div class="col-md-4">
                <img src="${foto ? URL.createObjectURL(foto) : 'https://via.placeholder.com/150'}" class="img-fluid rounded" alt="${ilanBaslik}">
            </div>
            <div class="col-md-8">
                <p class="mb-1">${ilanIcerik}</p>
                <p class="mb-1"><small class="text-muted">${sehir}, ${ilce}</small></p>
                <button type="button" class="btn btn-primary mt-5" onclick="showAlert()">İletişime Geç</button>
            </div>
        </div>
    `;

        ilanlar_listesi.appendChild(yeniEleman);
        document.getElementById("ilanForm").reset();  
});
 
        localStorage.setItem("yeniEleman", JSON.stringify("yeniEleman"));
function showAlert(){
    alert("İlan sahibine iletildi.");
}