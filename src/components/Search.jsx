import { IconContext } from "react-icons";
import { IoMdSearch } from "react-icons/io";
import { val , inp } from "../events/input";
// import { btnEvent } from "../events/buttonEvent";
import { req } from "../events/req";
import { ImageList } from "./ImageList";



function Search() {
   

  return (
    <div className="max-w-96 mx-auto my-32 flex flex-col gap-5 items-center justify-center">
        <form action="" className="flex border-[1px] w-full border-slate-300 rounded-md">
            <label htmlFor="myInp" className="flex justify-center items-center w-10">
                <IconContext.Provider value={{ size:"20px"}}>
                    <IoMdSearch/>
                </IconContext.Provider>
            </label>
            <input type="text" id='myInp' className=" focus-visible:outline-none w-full p-2" onChange={(e) => {inp(e.target.value)}} />
        </form>

        <button className="border border-blue-500 rounded-lg py-1 px-7 w-full bg-slate-400" onClick={() => {
            req(val)
        }}>
            submit
        </button>
        <ImageList/>
    </div>
  )
}

export default Search;
