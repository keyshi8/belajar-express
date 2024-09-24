const express = require("express"); //impor modul express
const app = express() // inisialisasi express
const port = 3000 // port

// route //
app.get("/", (req, res) => {
    res.send("hello");
});

// route // about
app.get("/about", (req, res) => {
    res.send("about us");
});

// route // contact
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
});

// route // mahasiswa
app.get("/mahasiswa", (req, res) => {
    res.json({
        "status"    : "succes",
        "message"   : "data mahasiswa",
        "data"      : [
                    {npm : 2226240076, nama : "riki"}, 
                    {npm : 2226240077, nama : "hades"},
                    {npm : 2226240078, nama : "andrielle"},
                    {npm : 2226240079, nama : "faith"}
                ]

    })
});

// route // dosen
app.get("/dosen", (req, res) => {
    res.json({
        "status"    : "succes",
        "message"   : "data dosen",
        "data"      : [
                    {   prodi : "sistem informasi", 
                        nama  : ["iis", "faris", "dafid"]},
                    
                    {   prodi : "informatika", 
                        nama  : ["derry", "siska", "yohanes"]}
                ]
    })

});

// handle route yang tidak terdaftar
app.use("", (req, res) => {
    res.send("<h1> 404 not found </h1>");
});

// jalankan server //
app.listen(port, () => {
    console.log(`server dapat diakses di http://localhost:${port}`);
});