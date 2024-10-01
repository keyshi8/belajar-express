const express = require ("express") //impor modul express
const app = express()//inisialisasi express
const expressLayout = require("express-ejs-layouts"); //import modul express-ejs-layouts
const port = 3000 //port

app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

app.use(expressLayout);
app.use(express.static('public'));

// route //
app.get("/",(req,res)=>{
    ///res.send("Hello");
    // res.sendFile(__dirname + "/home.html");

    const berita = [
        {
            judul : 'berita 1',
            isi : ' isi berita 1'
        },
        {
            judul : 'berita 2',
            isi : ' isi berita 2'
        },
    ];
    res.render('index', {title: 'Halaman Home', berita, layout: 'main'});
});

//route /about
app.get("/about", (req,res)=>{
    // res.send("About us");
    // res.sendFile(__dirname + "/About.html");
    res.render('about', {title: 'About us', layout: 'main'});
});
    
//route /contact
app.get("/contact", (req,res)=>{
    ///res.send("contact us");
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact', {title: 'Halaman Contact', layout: 'main'});
});

// route prodi
app.get("/prodi", (req, res)=>{
    const prodi = [
        {
           prodi : ' sistem informasi',
           fakultas : ' FIKR',
           singkatan : 'SI'
        },
        {
            prodi : 'informatika',
           fakultas : ' FIKR',
           singkatan : 'IF'
        },
        {
            prodi : 'teknik elektro',
           fakultas : ' FIKR',
           singkatan : 'TE'
        },
        {
            prodi : 'manajemen informatika',
           fakultas : ' FIKR',
           singkatan : 'MI'
        },
        {
            prodi : ' manajemen',
           fakultas : ' FEB',
           singkatan : 'MJ'
        },
        {
            prodi : 'akutansi',
           fakultas : ' FEB',
           singkatan : 'AK'
        },
    ];

    res.render('prodi', {title: 'Halaman Prodi', prodi, layout: 'main'});
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