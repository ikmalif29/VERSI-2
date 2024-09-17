/* eslint-disable react/prop-types */
export default function MianContent({ setMahasiswa }) {
    const { nama, prodi, nim } = setMahasiswa;
    // parameter props kita terima lalu kita gunakan destructuring assigment
    // supaya semaua properti dalam object yang kita kirim itu bisa di akses
    // pastinya sudah paham dong tentang destructuring assigment

    return (
        <>
            <main>
                <h2>Nama Mahasiswa : {nama}</h2>
                <h3>Prodi Mahasiswa : {prodi}</h3>
                <h3>Nim Mahasiswa : {nim}</h3>
            </main>
        </>
    )
}