import simboloLogo from '../../../../assets/images/simboloLogo.webp'
import Button from '../../../../components/Button/Button'

export default function SectionTwo() {
    return (
        <section className="my-20 container mx-auto px-5 md:px-10 xl:px-16 flex flex-col-reverse lg:flex-row gap-5">
            <div className='w-full flex flex-col items-center gap-10 lg:gap-0 lg:flex-row lg:justify-around'>
                {/* CARDS */}
                <div className='border-2  border-[#0062ff] rounded-[20px] max-w-[450px] '>
                    <div className='ml-[-2px] mt-[-40px] max-w-[200px] flex justify-center items-center py-2 px-7 gap-2 rounded-[15px] bg-[#ff4200] '>
                        <img src={simboloLogo} className='w-[30px] h-[30px] ' alt="" />
                        <p className='titleFont text-xl text-white uppercase'>
                            mais <br /> popular!
                        </p>
                    </div>
                    <div className='p-5 md:p-10 pb-12'>
                        <h2 className='titleFont text-3xl text-center uppercase font-bold text-[3011936] '>
                            plano premium 
                        </h2>
                        <h2 className='titleFont text-[#0062ff] text-6xl md:text-7xl text-center'>
                            R$ 25,90
                        </h2>
                        <ul className='mt-7 pl-5 flex flex-col gap-3 list-disc text-lg font-semibold'>
                            <li>Sem carência independente da idade;</li>
                            <li>Até 70% de desconto em Medicamentos;</li>
                            <li>Até 30% de desconto em Exames, Imagens e Análises Clínicas;</li>
                            <li>Até 70% de desconto em empresas de Saúde e Bem-estar;</li>
                            <li>Até 50% de desconto em empresas de Educação;</li>
                            <li>Apenas R$ 6,90 por mês por dependente;</li>
                            <li>6 consultas gratuitas de Telemedicina por beneficiário por ano.</li>
                        </ul>
                        <div className='mx-auto w-fit mt-10'>
                            <Button estilo='azul'/>
                        </div>
                        
                    </div>
                </div>

                <div className='border-2  bg-[#0062ff] rounded-[20px] max-w-[450px] '>
                    <div className='p-5 md:p-10 py-12 text-white'>
                        <h2 className='titleFont text-3xl md:text-4xl text-center uppercase font-bold text-[3011936] '>
                            plano premium 
                        </h2>
                        <h2 className='titleFont text-[#fff800] text-6xl md:text-7xl text-center'>
                            R$ 35,90
                        </h2>
                        <ul className='mt-7 pl-5 flex flex-col gap-3 list-disc text-lg font-semibold'>
                            <li>Sem carência independente da idade;</li>
                            <li>Até 70% de desconto em Medicamentos;</li>
                            <li>Até 30% de desconto em Exames, Imagens e Análises Clínicas;</li>
                            <li>Até 70% de desconto em empresas de Saúde e Bem-estar;</li>
                            <li>Até 50% de desconto em empresas de Educação;</li>
                            <li>Apenas R$ 6,90 por mês por dependente;</li>
                            <li>6 consultas gratuitas de Telemedicina por beneficiário por ano.</li>
                            <li>Telemedicina em Ginecologia, Pediatria e + 20especiaIidades.</li>
                        </ul>
                        <div className='mx-auto w-fit mt-10'>
                            <Button estilo='amarelo'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}