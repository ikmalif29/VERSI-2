/* eslint-disable react/prop-types */
import { useState } from "react";

export default function OtherContent({ handleInput }) {
    const [inputValue, setInputValue] = useState(""); // State untuk menyimpan nilai input

    // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
        setInputValue(e.target.value); // Menyimpan nilai input ke state
    };

    // Fungsi untuk submit form
    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah reload halaman
        handleInput(inputValue); // Kirim nilai input ke parent melalui handleInput
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange} // Menangani perubahan input
                    placeholder="Enter text"
                />
                <input type="submit" value="Submit" />
            </form>

            {/* 
      
            State Lokal inputValue: Kita menambahkan useState di komponen 
            OtherContent untuk menyimpan nilai input saat pengguna mengetik.
            Fungsi handleChange: Fungsi ini menangani perubahan pada input 
            field dan menyimpan nilainya di inputValue.
            Fungsi handleSubmit: Ketika form disubmit, e.preventDefault() 
            digunakan untuk mencegah halaman refresh. Kemudian, handleInput(inputValue) 
            dipanggil untuk mengirim nilai input ke komponen induk melalui props.
      
            */}
        </>
    );
}
