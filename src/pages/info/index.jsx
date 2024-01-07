import Item1 from "../../assets/images/mine.jpg";

export default function Info() {
  const HandleClickHome = (e) => {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div id="info" className="min-h-screen w-full mb-4">
        <div className="flex flex-col md:flex-row">
          {/* box1 */}
          <section className="min-h-screen w-full bg-blue-100">
            <div className="px-4">
              <h1 className=" text-white-100 text-6xl text-center mt-4 rounded-xl transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110  hover:bg-blue-800 duration-300">
                Prof. Dr. Zahide Mine Yazıcı
              </h1>
              <p className="text-black-100 mt-4 text-2xl font-mono ">
                Prof. Dr. Zahide Mine Yazıcı, İstanbul Üniversitesi Tıp
                Fakültesi’nden mezun olduktan sonra, Marmara Hastanesi’nde Kulak
                Burun Boğaz (KBB) Hastalıkları uzmanlık eğitimi almıştır
                Bakırköy Dr. Sadi Konuk Eğitim ve Araştırma Hastanesi’nde
                başasistan ve doçent olarak uzun yıllar çalışmıştır. Sağlık
                bilimleri Üniversitesi KBB Anabilim dalında profesör olarak
                çalışmış ve kulak burun boğaz dersleri vermiştir. Çok sayıda
                asistanın yetişmesine katkıda bulunmuştur. Avrupa KBB yeterlilik
                belgesini yazılı ve pratik sınavda başarılı olarak Viyana’da
                almaya hak kazanmıştı. Pittsburg Üniversitesi Tıp Fakültesi KBB
                kliniğinde gözlemci olarak bulunmuştur. Uluslararası ve ulusal
                kitaplar, dergiler ile konferanslarda 300′ün üzerinde makalesi
                ve bildirisi yayınlanmıştır. Yayınlarına uluslararası dergilerde
                1000’in üzerinde atıf yapılmıştır. Halen Avrupa Rinoloji Derneği
                üyesidir. Üst solunum yolu hastalıkları ve Senin sesin senin
                etkin kitaplarının editörleri arasındadır. Çok sayıda dergide
                farklı görevleri (danışma kurulu üyesi, hakem) bulunmaktadır.
                Akademik hayatına 2013 yılında Doçentlik, 2020 yılında
                Profesörlük ünvanını ile devam etmektedir. İngilizce
                bilmektedir, evli ve iki çocuk annesidir. Kulak cerrahisi,
                endoskopik sinüs cerrahisi, burun cerrahisi, çocuk KBB ve baş
                boyun cerrahisi alanlarında uzman Prof. Dr. Zahide Mine Yazıcı
                Ataköy Medicana Hastanesi’nde hastalarının tedavi ve tanı
                ihtiyaçlarına güvenilir çözümler sunmaktadır. Güler yüzlü hasta
                yaklaşımı, deneyimli ekibi, memnuniyet odaklı kalite
                standartlarında hizmet anlayışı, kulak burun boğaz, baş ve boyun
                cerrahisiyle ilgili hastalıklarda 20 yılı aşkın profesyonel
                kariyeriyle alanının deneyimli ve tecrübeli hekimlerinden olan
                Prof. Dr. Zahide Mine Yazıcı, çözüm odaklı ve kaliteli hizmet
                almak için doğru hekimdir.
              </p>
            </div>
          </section>
          {/* box2 */}
          <section className="min-h-screen  bg-teal-400 sm:w-full">
            <div className="px-4">
              <div className="container">
                <img
                  className="w-1/2 h-auto mt-10 ml-10 rounded-3xl p-4  transition ease-in-out delay-150 bg-teal-400 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 duration-300 "
                  src={Item1}
                  alt="image"
                />
              </div>
              <div className="mt-10">
                <p className="text-black-200 mt-4 text-2xl font-mono">
                  Prof. Dr. Zahide Mine Yazıcı, İstanbul Üniversitesi Tıp
                  Fakültesi’nden mezun olduktan sonra, Marmara Hastanesi’nde
                  Kulak Burun Boğaz (KBB) Hastalıkları uzmanlık eğitimi
                  almıştır.
                </p>
              </div>
            </div>
            <button
              onClick={HandleClickHome}
              className="m-4 rounded-lg text-xl text-white bg-teal-700 p-2 hover:bg-blue-800"
            >
              İletişim
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
