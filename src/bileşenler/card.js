import axios, { Axios } from "axios";

const Card = (makale) => {
  const myArticle = document.createElement("div");
  myArticle.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = makale["anabaslik"];
  myArticle.append(headline);

  const author = document.createElement("div");
  author.classList.add("author");
  myArticle.append(author);

  const img_container = document.createElement("div");
  img_container.classList.add("img-container");
  author.append(img_container);

  const image = document.createElement("img");
  image.setAttribute("src", `${makale["yazarFoto"]}`);
  img_container.append(image);

  const name = document.createElement("span");
  name.textContent = `${makale["yazarAdi"]} tarafından`
  author.append(name)

  myArticle.addEventListener("click", (event) => {
    console.log(makale["anabaslik"]);
  });

  return myArticle;

  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
}

const cardEkleyici = (secici) => {
  axios
  .get(`http://localhost:5001/api/makaleler`)
  .then(function(response) {
    console.log(response.data.makaleler)
    for ( let i in response.data.makaleler) {
      response.data.makaleler[i].map((element) => {
        document.querySelector(secici).appendChild(Card(element))
      })
    }
  })

  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
}

export { Card, cardEkleyici }
