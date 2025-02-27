// eslint-disable-next-line no-unused-vars
import React from 'react'
import LibraryImg from "../../assets/website/library.jpg"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
    return <>
    <div className='py-20'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 item-center gap-6">
                {/* imgage section */}                           
                <div>
                    <img data-aos="zoom-in" data-aos-duration="300" src={LibraryImg} alt="" 
                    className="maa-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                    />
                </div>
                {/* text conten section */}
                <div data-aos="slide-up" data-aos-duration="300" className="flex flex-col justify-center  gap-6 sm:pt-0">
                    <h1 className='text-3xl sm:text-4xl font-bold'>Library at your Fingertips</h1>
                    <p className='text-sm text-gray-500 tracking-wide leading-5'>Dengan koleksi lengkap dan layanan unggul, kami adalah perpustakaan terbaik pilihan Anda</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                        <GrSecure 
                        className="text 4-xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                        <p>Buku Berkualitas</p>
                        </div>
                        <div className="flex items-center gap-4">
                        <IoFastFood 
                        className="text 4-xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-violet-400"/>
                        <p>Pengiriman Cepat</p>
                        </div>
                        <div className="flex items-center gap-4">
                        <GiFoodTruck 
                        className="text 4-xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-violet-400"/>
                        <p>Metode Pembayaran Mudah</p>
                        </div>
                        <div className="flex items-center gap-4">
                        <GiFoodTruck 
                        className="text 4-xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-violet-400"/>
                        <p>Dapatkan Penawaran Spesial untuk Buku</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>;
}

export default Banner