import './Banner.css' //o ./ significa diretório atual na hora de apontar o caminho do import

function Banner()
{
    //return de várias linhas, JSX
    return (
        /*Retorna uma imagem com texto alternativo, a classe referenciada em className é o Banner.css*/
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>
    )
}
//Exporta a função
export default Banner;