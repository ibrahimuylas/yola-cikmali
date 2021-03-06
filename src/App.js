import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

function redirect() {
  const getNewUrl = path => `https://www.ibrahimuylas.com/${path}`;
  let pathname = window.location.pathname;
  if (pathname[pathname.length - 1] === "/")
    pathname = pathname.slice(0, pathname.length - 1);

  const page = pathname.substring(pathname.lastIndexOf('/') + 1);
  let newPath = page;
  if (page === "trekkingde-dikkat-edilmesi-gerekenler")
    newPath = "doga-yuruyuslerinde-dikkat-edilmesi-gerekenler";

  if (page === "karagol")
    newPath = "borcka-karagol";

  if (page === "alkislar-interrail-turkiyeye")
    newPath = "8-bin-kisiyle-kamp-alkislar-interrail-turkiyeye";

  if (page === "son-nefes")
    newPath = "azrail-bu-kez-beni-teget-gecti";

  if (page === "kampta-ormandan-gelen-ciglik")
    newPath = "ormandan-gelen-ciglik";

  if (page === "kamp-hamagi-2")
    newPath = "kamp-hamagi";

  if (page === "asiklar-selalesi")
    newPath = "asiklar-nebiler-selalesi";

  if (page === "cinden-su-gecirmez-yuruyus-tozlugu")
    newPath = "su-gecirmez-yuruyus-tozlugu";

  if (page === "jack-wolfskin-solid-trail-texapore-erkek-trekking-bot")
    newPath = "jack-wolfskin-erkek-trekking-botu";

  if (page === "trekking-malzemeleri")
    newPath = "doga-yuruyusleri-icin-gerekli-ekipmanlar";

  if (page === "trekking-kiyafetleri")
    newPath = "doga-yuruyuslerinde-nasil-giyinilmelidir";

  if (page === "trekking-batonu-nedir-nasil-olmalidir")
    newPath = "yuruyus-batonu-ne-ise-yarar";

  if (page === "trekking-faydalari")
    newPath = "doga-yuruyusunun-faydalari-nelerdir";

  if (page === "bekle-geliyorum")
    newPath = "dag-basinda-bekle-geliyorum";

  if (page === "her-seyi-birakip-gezgin-olmak")
    newPath = "gezgin-olmak";

  if (page === "2-seconds-easy-3-kamp-cadiri-inceleme")
    newPath = "2-seconds-easy-3-kamp-cadiri";

  if (page === "uyku-tulumu-yetersiz-kalirsa")
    newPath = "uyku-tulumu-yetersiz-kalirsa-ne-yapilmalidir";

  if (page === "uyku-tulumu-secimi-nasil-yapilmalidir")
    newPath = "uyku-tulumu-alirken-nelere-dikkat-edilmelidir";

  if (page === "sakarya-karagol-yaylasi")
    newPath = "tarakli-karagol-yaylasi";

  if (page === "dunya-kucuk")
    newPath = "dagin-basinda-da-dunya-kucukmus";

  if (page === "abant-golu")
    newPath = "bolu-abant-golu";

  if (page === "likya-yolu-oludeniz-ucagiz")
    newPath = "likya-yolu-oludenizden-ucagiza-11-gun-230km";

  if (page === "likya-yolu-trekking-rotasi")
    newPath = "likya-yolu-yuruyus-rotasi";

  if (page === "likya-yolu-gittigim-parkur")
    newPath = "likya-yolu-11-gunde-yurudugum-parkur";

  if (page === "kormen-adasi-kaleucagiz")
    newPath = "likya-yolu-rotasi-kormen-adasindan-kaleucagiza";

  if (page === "kas-kormen-adasi")
    newPath = "likya-yolu-rotasi-kasdan-kormen-adasina";

  if (page === "gokceoren-kas")
    newPath = "likya-yolu-rotasi-gokceorenden-kasa";

  if (page === "saribelen-gokceoren")
    newPath = "likya-yolu-rotasi-saribelenden-gokceorene";

  if (page === "bezirgan-saribelen")
    newPath = "likya-yolu-rotasi-bezirgandan-saribelene";

  if (page === "uzumlu-bezirgan")
    newPath = "likya-yolu-rotasi-uzumluden-bezirgan-koyune";

  if (page === "kinik-uzumlu")
    newPath = "likya-yolu-rotasi-kinikdan-uzumluye";

  if (page === "karadere-kinik")
    newPath = "likya-yolu-rotasi-karadereden-kinika";

  if (page === "sidyma-karadere")
    newPath = "likya-yolu-rotasi-sidymadan-karadereye";

  if (page === "kabak-koyu-sidyma-antik-kenti")
    newPath = "likya-yolu-rotasi-kabak-koyundan-sidyma-antik-kentine";

  if (page === "oludeniz-kabak-koyu")
    newPath = "likya-yolu-rotasi-oludenizden-kabak-koyuna";

  if (page === "likya-yolu-11-gun")
    newPath = "likya-yolu-11.-gun";

  if (page === "likya-yolu-10-gun")
    newPath = "likya-yolu-10.-gun";

  if (page === "likya-yolu-9-gun")
    newPath = "likya-yolu-9.-gun";

  if (page === "likya-yolu-8-gun")
    newPath = "likya-yolu-8.-gun";

  if (page === "likya-yolu-7-gun")
    newPath = "likya-yolu-7.-gun";

  if (page === "likya-yolu-6-gun")
    newPath = "likya-yolu-6.-gun";

  if (page === "likya-yolu-5-gun")
    newPath = "likya-yolu-5.-gun";

  if (page === "likya-yolu-4-gun")
    newPath = "likya-yolu-4.-gun";

  if (page === "likya-yolu-3-gun")
    newPath = "likya-yolu-3.-gun";

  if (page === "likya-yolu-2-gun")
    newPath = "likya-yolu-2.-gun";

  if (page === "likya-yolu-1-gun")
    newPath = "likya-yolu-1.-gun";

  if (page === "ferrino-lightent-2-cadir")
    newPath = "ferrino-lightent-2-kamp-cadiri";

  if (page === "kampcilik")
    newPath = "cliff-jacobson-ile-kampcilik";

  if (page === "kiymet-bilmeli")
    newPath = "botlarin-kiymeti-bilinmeli";

  if (page === "anlik-bilinc-kaybi")
    newPath = "kackar-daglari-anlik-bilinc-kaybi";

  if (page === "azrail-teget-gecti")
    newPath = "suluklu-gol-azrail-teget-gecti";

  if (page === "bunun-adi-ask")
    newPath = "bunun-adi-ask-likya-yolu";

  if (page === "neden-tek-gidiyorsun")
    newPath = "likya-yoluna-neden-tek-gidiyorsun";

  if (page === "arabayla-kaya-ustu-yaylasi-mi-sakin")
    newPath = "kaya-ustu-yaylasi-kampi";

  if (page === "sicak-dere-kanyonu")
    newPath = "sicakdere-kanyonu";

  if (page === "msr-pocket-rocket-ocak")
    newPath = "msr-pocket-rocket-kamp-ocagi";

  if (page === "ferrino-cadir-kazigi-5mm-20cm")
    newPath = "ferrino-cadir-kazigi";

  if (page === "kaz-daglari")
    newPath = "kaz-daglari-trekking";

  if (page === "trangia-tencere-seti-406287-kilifli")
    newPath = "trangia-kamp-tencere-seti";

  if (page === "yedigoller-trekking")
    newPath = "yedigoller-trekking-tek-basima-ilk-yolculuk";

  if (page === "sansarak-kanyonu-2")
    newPath = "sansarak-kanyonu";

  if (page === "sansarak-kanyonu")
    newPath = "iznik-sansarak-kanyonu";

  if (page === "olgunlar-yaylasimeretet")
    newPath = "olgunlar-meretet-yaylasi";

  if (page === "kackarlar-naletleme-gecidi")
    newPath = "kackar-daglari-naletleme-gecidi";

  if (page === "serindere-kanyonu-2")
    newPath = "serindere-kanyonu-kamp-alani";

  if (page === "inonu-yaylasi-aytepe-trekking")
    newPath = "inonu-yaylasindan-aytepeye-trekking";

  if (page === "aytepe")
    newPath = "aytepe-kamp-yerleri";

  if (page === "kerpe")
    newPath = "kerpe-kamp-yerleri";

  if (page === "yukari-kavrun-yaylas")
    newPath = "yukari-kavrun-yaylasi";

  window.location.replace(getNewUrl(newPath));
}

function App() {
  return (
    <Router>
      {redirect()}
    </Router>
  );
}

export default App;
