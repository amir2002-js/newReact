import axios from "axios";
import { doMap } from "./doMap";

function req (term){
    axios.get('https://api.unsplash.com/search/photos',{
        headers: {Authorization: 'Client-ID G-lWS70H68LJIo-FK0_XYfn1-lXeRurqiCpY2p3SCNw'},
        params:{query: term}
    }).then(resp => doMap(resp.data.results))
}

export {req}