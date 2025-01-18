import sendIcon from "../../assents/img/icon/Send Email.svg";
import galleryIcon from "../../assents/img/icon/Gallery.svg";
import videoIcon from "../../assents/img/icon/Video.svg";
import gifIcon from "../../assents/img/icon/gif.svg"
export const CriaSuaPublicacao = () => {
return (
    <section className="bg-[#F2F4F7] w-full p-6 flex justify-between">
    <div className="flex flex-col gap-5">
      <span className="text-xl font-normal">Cria a sua publicação</span>
      <div className="flex items-center bg-white rounded-full pl-5 pr-2 py-2 w-96">
        <input
          type="text"
          placeholder="Escreva aqui o que está pensando..."
          className="flex-grow outline-none bg-none text-gray-700 placeholder-gray-400"
        />
        <button className="bg-[#F4F440] p-3 rounded-full">
          <img src={sendIcon} alt="Enviar" className="w-5 h-5" />
        </button>
      </div>
    </div>

    <div className="bg-white p-3 rounded-2xl flex flex-col justify-between">
      <div className="flex gap-5 justify-between">
        <div className="flex items-center gap-2">
          <img src={galleryIcon} alt="Galeria" className="w-5 h-5" />
          <span className="text-sm font-medium">Foto</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={videoIcon} alt="Vídeo" className="w-5 h-5" />
          <span className="text-sm font-medium">Vídeo</span>
        </div>
        <div className="flex items-center gap-2">
          <img src={gifIcon} alt="GIF" className="w-5 h-5" />
          <span className="text-sm font-medium">GIF</span>
        </div>
      </div>

      <div className="flex justify-between">
        <button className="w-1/2 bg-[#F4F440] font-medium py-2 px-4 rounded-lg">
          Adicionar
        </button>
        <button className="border-2 border-[#484848] py-2 px-3 rounded-lg font-medium">
          Aa
        </button>
      </div>
    </div>
  </section>
    )
}