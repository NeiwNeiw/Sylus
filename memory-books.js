const BOOKS = {

  daily: [
    {
      image: "image/menu/daily69fug8w4d.png",
      type: "video",
      code: "daily69fug8w4d"
    },
    {
      image: "image/menu/dailyrX3c3zRX.png",
      type: "audio",
      code: "dailyrX3c3zRX"
    },
    {
      image: "image/menu/dailyi6lqoap3c.png",
      type: "audio",
      code: "dailyi6lqoap3c"
    },
    {
      image: "image/menu/dailyekqx9tokk.png",
      type: "audio",
      code: "dailyekqx9tokk"
    }
  ],

  seasons: [
    {
      image: "image/menu/seasonsq49payqh.png",
      type: "video",
      code: "seasonsq49payqh"
    },
    {
      image: "image/menu/seasonsv77wtufd.png",
      type: "video",
      code: "seasonsv77wtufd"
    },
    {
      image: "image/menu/seasons8kte9vo5s.png",
      type: "video",
      code: "seasons8kte9vo5s"
    },
    {
      image: "image/menu/seasonsjantxwh7y.png",
      type: "video",
      code: "seasonsjantxwh7y"
    }
  ],

  sex: [
    {
      image: "image/menu/sexr47ekwrt1w6i.jpg",
      type: "video",
      code: "sexr47ekwrt1w6i"
    },
    {
      image: "image/menu/sexkc7psg7ifwtk.jpg",
      type: "video",
      code: "sexkc7psg7ifwtk"
    },
    {
      image: "image/menu/sexpxeo23h8bnee.jpeg",
      type: "video",
      code: "sexpxeo23h8bnee"
    },
    {
      image: "image/menu/sexmitdi5ys31gx.png",
      type: "audio",
      code: "sexmitdi5ys31gx"
    },
    {
      image: "image/menu/sexykdpo8nuvinb.png",
      type: "audio",
      code: "sexykdpo8nuvinb"
    }
  ],

  sun: [
    {
      image: "image/menu/sun5vatyqbddro0.png",
      type: "audio",
      code: "sun5vatyqbddro0"
    },
    {
      image: "image/menu/sun3n4p9kx2yap6.png",
      type: "audio",
      code: "sun3n4p9kx2yap6"
    },
    {
      image: "image/menu/sunxdqcteglzi2o.png",
      type: "audio",
      code: "sunxdqcteglzi2o"
    },
    {
      image: "image/menu/sunc892p8reyk8q.png",
      type: "audio",
      code: "sunc892p8reyk8q"
    }
  ]

};

let currentBook = [];
let currentPage = 0;

function openBook(bookName){

  currentBook = BOOKS[bookName];

  currentPage = 0;

  renderBook();

  document
    .getElementById("bookViewer")
    .classList
    .add("show");
}

function renderBook(){

  const page = currentBook[currentPage];

  const img =
    document.getElementById("bookPage");

  const link =
    document.getElementById("bookLink");

  img.src = page.image;

  let url = "";

  if(page.type === "video"){

    url =
      `https://neiwneiw.github.io/SylusNFCVideo/?v=${page.code}`;

  }else{

    url =
      `https://neiwneiw.github.io/SylusNFCAudio/?v=${page.code}`;
  }

  link.href = url;

  document
    .getElementById("bookPageNum")
    .textContent =
      `${currentPage + 1} / ${currentBook.length}`;
}

function nextPage(){

  if(currentPage < currentBook.length - 1){

    currentPage++;

    renderBook();
  }
}

function prevPage(){

  if(currentPage > 0){

    currentPage--;

    renderBook();
  }
}

function closeBook(){

  document
    .getElementById("bookViewer")
    .classList
    .remove("show");
}