import { useState } from "react";
import Header from "./Components/Header";
import MianContent from "./Components/MainContent";
import OtherContent from "./Components/OtherContent";
import DisplayOther from "./Components/DisplayOther";

function App() {
  // kita sekarang belajar props tetpi versi sigkat nya
  const data = "ikmal fauzaeni";
  // sebagi contoh kita menggunakan variabel seperti pada file sebelum nya
  // namun kali ini berbeda pada pemanggilan nya


  // bukan hanya string dan tag saja yang bisa di kirim melalui props
  // tetapi juga bisa berupa object

  // value adalah state lokal dari komponen App, yang digunakan 
  // untuk menyimpan nilai input dari komponen OtherContent.
  // setValue adalah fungsi yang digunakan untuk memperbarui nilai dari value.
  // State ini dimulai dengan nilai awal berupa string kosong (""), 
  // dan akan diperbarui setiap kali ada input dari OtherContent.
  const [value, setValue] = useState("");

  const mahasiswa = {
    nama : "Hapiz Tanjung",
    prodi : "S1 Teknik informatika",
    nim : 12344
  }

  const handleInput = (parameter) => {
    setValue(parameter);
  }
  // handleInput adalah sebuah fungsi yang digunakan untuk
  //  memperbarui state value di komponen induk (App).
  // Fungsi ini menerima parameter (nilai input) dari 
  // komponen OtherContent dan kemudian memanggil setValue(parameter) 
  // untuk memperbarui state value dengan nilai yang dikirimkan dari komponen anak (OtherContent).


  return (
    <>
      <Header setData={data}/>
      <MianContent setMahasiswa={mahasiswa}/>
      <OtherContent handleInput={handleInput}/>
      <DisplayOther valueInput={value}/>

      {/* 
      
      Input dari pengguna: Input dari OtherContent dikirim ke komponen induk (App) melalui handleInput.
      Pembaruan state di komponen induk: State value di App diperbarui dengan nilai yang dikirim dari OtherContent. 
      Nilai input ditampilkan: Nilai value yang sudah diperbarui kemudian dikirim sebagai props valueInput 
      ke DisplayOther untuk ditampilkan atau diolah lebih lanjut.  

      Kode ini menggambarkan pola komunikasi antara komponen anak (OtherContent) dan komponen induk (App) 
      menggunakan props dan state. Pengguna bisa memasukkan data melalui OtherContent, yang kemudian dikirim 
      ke App, disimpan di state value, dan ditampilkan melalui DisplayOther.
      
      */}
    </>
  )
}

export default App;
