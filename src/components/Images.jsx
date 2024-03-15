import { myUrls } from "../events/doMap"

function Images() {

    myUrls.map((url , i) => {
        return(
            <img src={url} key={i}/>
        )
    } )

}
export default Images;
