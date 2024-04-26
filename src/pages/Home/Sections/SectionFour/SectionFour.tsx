import logo from '../../../../assets/images/logoFrente.webp'

export default function SectionFour(){
    return (
        <section className="py-20 container mx-auto px-5 md:px-10 xl:px-16 text-white">
            <div className="pt-10 px-5 h-[700px]  flex flex-col items-center gap-5 rounded-[30px] bg-[#0062ff] bg-banner-form ">
                <img src={logo} alt="" className='w-[200px] ' />
                <h2 className="titleFont uppercase text-3xl lg:text-4xl text-center">
                    Contrate agora seu <br /> 
                    <span className='text-[#ffee00] lg:text-6xl text-center'>cartão bomd+</span>
                </h2>

                <div className='max-w-[650px] flex flex-col md:text-lg'>
                    <p className='text-center mb-5'>
                        Tenha acesso a descontos exclusivos em saúde, educação, beleza e
                        bem-estar! <br /> Preencha o formulário abaixo para contratar o seu cartão
                        bomd+.
                    </p>
                    <p className='text-center'>
                        Aproveite os descontos especiais <strong>para você e sua família.</strong>
                    </p>
                    
                    <a 
                        className=" w-[250px] md:w-[300px] mt-7 mx-auto py-2 px-7 text-xl md:text-2xl uppercase text-center titleFont rounded-[35px] bg-[#ff4200] text-black"
                        target='_blank'
                        href='https://beneficiarios.cartaobomdemais.com.br/contratacao/plano'
                    >
                        contrate agora
                    </a>
                </div>
                
            </div>
        </section>
    )
}
