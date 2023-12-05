import Item1 from "../../assets/images/desk2.jpg";
import Item2 from "../../assets/images/desk1.jpg";
import Item3 from "../../assets/images/doc3.jpg";
const Specialiteit = () => {
  return (
    <section id="specialiteit">
      <div className="w-full bg-blue-100 text-white ">
        <h1 className="text-5xl font-bold text-center p-2 bg-teal-400 ">
          {" "}
          Tıbbi uzmanlık
        </h1>
        <div className="flex flex-col">
          {/* section flex-col */}

          {/* section flex-row */}
          <div className="m-4 md:flex flex-row ">
            {/* Cart */}
            <div className="m-4 md:w-1/3 pr-4 pl-4 ">
              <div className="relative clearfix">
                <div>
                  <img
                    className="img-responsive w-full h-auto"
                    src={Item1}
                    alt=""
                  />
                </div>
                <div className="rounded-sm p-4 w-full transition ease-in-out delay-150 bg-blue-950 hover:-translate-y-1 hover:scale-110 hover:bg-teal-400 duration-300">
                  <div className="w-16 h-12 relative"></div>
                  <h3 className="text-white-100 text-center text-4xl">
                    Kulak Hastalıklarına Özenli Yaklaşım
                  </h3>
                  <p className="text-white-100 m-1 text-center">
                    Hayat kalitemizi bozan, hayatınızı zorlaştıran ve
                    sağlığınızı etkileyen kulak akıntılarına, işitme
                    kayıplarına, çeşitli kulak enfeksiyonların da doğru tanı ve
                    tedavi yöntemleri öneriyoruz. Tedavi yöntemlerimiz hastalığa
                    göre kimi zaman cerrahi kimi zamanda ilaç tedavilerini
                    içermektedir. Kulak çınlamaları için hayat kalitesi
                    arttırıcı ve sebebe yönelik yaklaşımlar sunmaktayız. İleri
                    işitme kayıplarında uygun hastaları biyonik kulak adı
                    verilen ileri teknolojik yöntemlerle işitme rehabilitasyonu
                    sağlayabilmekteyiz.
                  </p>
                </div>
              </div>
            </div>
            {/* Cart */}
            <div className="md:w-1/3 pr-4 pl-4 mt-32">
              <div className="relative clearfix">
                <div>
                  <img
                    className="img-responsive w-full h-auto"
                    src={Item2}
                    alt=""
                  />
                </div>
                <div className=" rounded-sm p-4 w-full transition ease-in-out delay-150 bg-blue-950 hover:-translate-y-1 hover:scale-110 hover:bg-teal-400  duration-300 ">
                  <div className="w-16 h-12 relative"></div>
                  <h3 className=" text-white-100 text-center text-4xl">
                    Burun Hastalıkları
                  </h3>
                  <p className=" text-white-100 text-center m-2">
                    Alerjik burun hastalığınızın kaynağını bulmaya yönelik deri
                    testlerini gereğinde kan testlerini yaparak. Tanı ve tedavi
                    olanakları sunuyoruz. Septum deviasyonu ve burun eti de
                    denilen konkalarınıza son teknoloji eşliğinde konforlu
                    cerrahiler uygulayabiliyoruz. Nazal polip denilen
                    hastalıklara rinosinüzitlere gereğinde navigasyon eşliğinde
                    endoskopik sinüs cerrahisi ameliyatları yapıyoruz.
                  </p>
                </div>
              </div>
            </div>
            {/* Cart */}
            <div className="m-4 md:w-1/3 pr-4 pl-4 ">
              <div className="relative clearfix">
                <div>
                  <img
                    className="img-responsive w-full h-auto"
                    src={Item3}
                    alt=""
                  />
                </div>
                <div className=" rounded-sm p-4 w-full transition ease-in-out delay-150 bg-blue-950 hover:-translate-y-1 hover:scale-110 hover:bg-teal-400  duration-300 ">
                  <div className="w-16 h-12 relative "></div>
                  <h3 className="text-white-100 text-center text-4xl">
                    Çocuk Pediatrik KBB
                  </h3>
                  <p className="text-white-100 m-1 text-center">
                    Çocuklarınıza özenli ve güvenilir hizmet almak için Prof
                    .Dr. Zahide Mine Yazıcı doğru adres olup, bademcik, geniz
                    eti ve kulak sıvısına tüp tatbiki gibi sık yapılan çocuk kbb
                    ameliyatlarında oldukça tecrübelidir. Çocuk havayolu
                    hastalıklarını değerlendirme konusunda yeterli yetkinliğe
                    sahiptir.
                  </p>
                </div>
              </div>
            </div>
            {/* end cart */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Specialiteit;
