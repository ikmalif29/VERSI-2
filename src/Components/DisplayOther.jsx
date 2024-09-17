/* eslint-disable react/prop-types */
export default function DisplayOther({ valueInput }) {
    return (
        <>
            <h2>Value inputan :{valueInput}</h2>

            {/* 
            
                State value: State ini digunakan di komponen induk untuk menyimpan 
                nilai input yang dikirim dari komponen anak (OtherContent).
                Fungsi handleInput: Fungsi ini menerima parameter dari OtherContent (yang berasal 
                dari input pengguna) dan memperbarui state value.
                DisplayOther: value yang telah disimpan dari input pengguna kemudian dikirim 
                ke DisplayOther untuk ditampilkan.
            
            */}
        </>
    )
}