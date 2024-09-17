/* eslint-disable react/prop-types */
export default function Header({ setData }) {
    return (
        <header>
            <h1>{setData}</h1>
            {/* 
            
            jadi perbedaan dengan props sebelum nya adalah pada penerimaan parameter props dan cara pemanggilan nya
            di yang sebelum nya harus di ikut sertakan si props nya dan sekarang tidak usah di ikut sertakan
            dan kita menggantinya dengan kurung kurawal
            itu artinya kita langsung meng akses si variabel(value) yang di lempar dari si induk tanpa memanggil props
            
            maka dari itu versi jedua ini lebih efektif dan singkat
            
            */}
        </header>
    )
}