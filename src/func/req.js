import axios from "axios";

let myImageUrls = [];

async function req(inpVal, imgArr, setImgArr) {
    await axios("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization:
                "Client-ID G-lWS70H68LJIo-FK0_XYfn1-lXeRurqiCpY2p3SCNw",
        },
        params: { query: inpVal },
    }).then((p) => {
        setImgArr(p.data.results);
        myImageUrls = p.data.results;
    });
}

export { req, myImageUrls };
