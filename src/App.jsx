import iconSedans from "./assets/icon-sedans.svg"
import iconSUVs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function app() {
  return(
    <main>
      <section>
        <div className="bg-orange">
          <img src={iconSedans} alt="icone dos carros  sedans" />
          <h2 className="text-xl">Sedans</h2>
          <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>
        <div className="bg-green">
          <img src={iconSUVs} alt="icone dos carros SUVs" />
          <h2>SUVs</h2>
          <p>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais</a>
        </div>
        <div className="bg-dark-green">
          <img src={iconLuxury} alt="icone dos carros de luxo" />
          <h2>Luxuosos</h2>
          <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver mais</a>
        </div>
      </section>
    </main>
  )
}