const express = require ("express") //impor modul express
const app = express()//inisialisasi express
const port = 3000 //port

//route /
app.get("/",(req,res)=>{
    ///res.send("Hello");
    res.sendFile(__dirname + "/home.html");
});

//route /about
app.get("/about", (req,res)=>{
    // res.send("About us");
    res.sendFile(__dirname + "/About.html");
});
    
//route /contact
app.get("/contact", (req,res)=>{
    ///res.send("contact us");
    res.sendFile(__dirname + "/contact.html");
});

//route /mahasiswa
app.get("/mahasiswa", (req,res)=>{      
    res.json({
        "status" : "succes",
        "message" : "Data Mahasiswa",
        "data" : [{"npm": 2226240020, "nama": "Bryan"
        },{
            "npm" : 2226240010,
            "nama" : "Niko"
        }]
    })
});

//route /dosen
app.get("/dosen", (req,res)=>{      
    res.json({
        "status" : "succes",
        "message" : "Data Dosen",
        "data" : [
            {"Sistem Informasi" : ["Iis" , "Faris", "Dafid"]},
            {"Informatika" : ["Derry" , "Siska", "Yohannes"]}
    ]
    })
});

//handel route yang tidak terdaftar
app.use("/",(req,res)=>{
    res.send("<h1>404 Not Found</h1>");
});

//jalankan server
app.listen(port, () => {
    console.log(`Server dapat diakses di http://localhost:${port}`);
})