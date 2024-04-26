interface ButtonProps {
    estilo: "amarelo" | "azul";
}

export default function Button( {estilo}:ButtonProps ){
    return (
        <a 
            href="https://beneficiarios.cartaobomdemais.com.br/contratacao/plano"
            target="_blank"
            className={
                `${estilo === "amarelo" ? 
                "bg-[#fff800] hover:bg-[#001a3a] text-black hover:text-white" : 
                "bg-[#0062ff] hover:bg-[#001a3a] text-white hover:text-white"} 
                w-[250px] py-2 px-7 text-xl uppercase text-center titleFont rounded-[35px]`
            }
        >
            CONTRATE AGORA
        </a>
    )
}