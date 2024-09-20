document.addEventListener("DOMContentLoaded", function() {
    // API adresi
    const apiUrl = "https://freetestapi.com/api/v1/cars?make=renault";
    
    // Kartların yer aldığı div (wrapper)
    const catalogContent = document.querySelector('.wrapper');
    
    // API'den veriyi çekme
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // API'den dönen her araç için bir kart oluşturma
            data.forEach(car => {
                // Yeni bir div oluştur ve kart sınıfını ekle
                const carCard = document.createElement('div');
                carCard.classList.add('catalog-item');
                
                // Kartın içeriğini doldurma
                carCard.innerHTML = `
                    <img src="${car.image}" alt="${car.model}">
                    <h2>${car.model}</h2>
                    <p>Başlangıç Fiyatı ₺${car.price}</p>
                    <p>₺${(car.price / 60).toFixed(2)} / Ay</p> <!-- Aylık ödeme örneği -->
                    <div class="btn-group">
                        <a href="" target="_blank" class="btn">Detaylı İnceleyin</a>
                    </div>
                `;
                
                // Kartı DOM'a (wrapper div'ine) ekle
                catalogContent.appendChild(carCard);
            });
        })
        .catch(error => console.error('API verisi çekilirken hata oluştu:', error));
});
