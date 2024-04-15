import logo from '../../assets/images/logo.webp'
import banner from '../../assets/images/Header/banner-desk.webp'
import Button from '../Button/Button'

export default function Header(){
    return (
        <header className="mx-auto pt-10 lg:py-10 lg:my-20 w-full lg:w-[90%] lg:max-h-[550px] lg:max-w-[1400px] lg:rounded-[30px] bg-[#0062ff] bg-banner">
            <div className=" container mx-auto px-5 md:px-10 xl:px-16 2xl:px-20 ">
                <div className=' flex flex-col items-center lg:flex-row '>
                    <div className='lg:max-w-[450px] flex flex-col gap-10 lg:gap-5'>
                        <div>
                            <img src={logo} className='mx-auto lg:mx-0 w-[200px] lg:w-[100px] ' alt="" />
                        </div>
                        <h1 className='titleFont text-3xl md:text-6xl lg:text-[40px] md:leading-[55px] text-center md:text-start text-[#fff800]  '>
                            JÁ IMAGINOU
                            ECONOMIZAR
                            DINHEIRO EM
                            TODAS AS ÁREAS 
                            DO SEU DIA A DIA?
                        </h1>
                        <p className='text-white text-center lg:text-start'>
                            Garanta até 75% off em Exames, Oftalmologia, Odontologia,
                            Medicamentos, Imunização, Educação, Lazer e Bem-estar
                        </p>

                        <div className='mx-auto'>
                            <Button estilo='amarelo'/>
                        </div>
                    </div>
                    
                    <div className='mt-10 lg:mt-0 w-full h-full'>
                        <img src={banner} className='mx-auto mb-[-30px] md:mb-[-50px] lg:absolute lg:ml-[-20px] xl:ml-[10%] 2xl:ml-[200px] lg:top-10 lg:max-h-[600px] ' alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}