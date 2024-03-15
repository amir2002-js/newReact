import axios from "axios";

const REQ_HEADER = {
    Authorization: "Client-ID G-lWS70H68LJIo-FK0_XYfn1-lXeRurqiCpY2p3SCNw",
};

async function req(term) {
    try {
        const { data } = await axios("https://api.unsplash.com/search/photos", {
            headers: REQ_HEADER,
            params: { query: term },
        });
        return data.results;
    } catch (error) {
        console.log(error);
    }
}

export { req };
