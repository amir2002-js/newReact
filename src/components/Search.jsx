import { useState } from "react";
import { IconContext } from "react-icons";
import { IoMdSearch } from "react-icons/io";
import { req } from "../func/req";
import { myImageUrls } from "../func/req";

function Search() {
    async function btnClickHandler(e, inpVal) {
        e.preventDefault();
        if (inpVal === "" || inpVal === undefined) {
            console.log("enter input value");
        } else {
            await req(inpVal, imgArr, setImgArr);
        }
    }

    const [inputValue, setInputValue] = useState("");
    const [imgArr, setImgArr] = useState("");
    const par = myImageUrls.map((url, i) => (
        <img key={i} src={url.urls.regular} />
    ));
    return (
        <div className="">
            <form
                action=""
                className="max-w-96 mx-auto my-32 flex flex-col gap-5 items-center justify-center "
            >
                <div className="flex justify-center items-center border-[1px] w-full border-slate-300">
                    <label
                        htmlFor="myInp"
                        className="flex justify-center items-center w-10"
                    >
                        <IconContext.Provider value={{ size: "20px" }}>
                            <IoMdSearch />
                        </IconContext.Provider>
                    </label>
                    <input
                        type="text"
                        id="myInp"
                        className=" focus-visible:outline-none w-full p-2"
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                    />
                </div>
                <button
                    className="border border-blue-500 rounded-sm py-1 px-7 w-full bg-slate-400"
                    onClick={async (e) => {
                        await btnClickHandler(e, inputValue);
                    }}
                >
                    submit
                </button>
            </form>
            <div className=" *:w-96 *:max-h-[400px] *:min-h-44 *:object-cover flex items-center justify-center flex-wrap gap-4 ">
                {par}
            </div>
        </div>
    );
}

export default Search;
