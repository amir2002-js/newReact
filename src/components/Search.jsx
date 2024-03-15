import { IconContext } from "react-icons";
import { IoMdSearch } from "react-icons/io";
import { req } from "../events/req";
import { ImageList } from "./ImageList";
import { useState } from "react";

function Search() {
    const [inputVal, setInputVal] = useState("");
    const [allImages, setAllImages] = useState([]);

    const submitFormHandler = async (e) => {
        e.preventDefault();

        const result = await req(inputVal);
        result && setAllImages(result);
        console.log(result);
    };

    return (
        <div className="container mx-auto my-32 flex flex-col gap-5 items-center justify-center">
            <form
                className="flex gap-y-3 flex-col w-full max-w-96 rounded-md"
                onSubmit={submitFormHandler}
            >
                <div className="flex border-[1px] border-slate-300 w-full h-10">
                    <label
                        htmlFor="myInp"
                        className="flex justify-center items-center w-10 shrink-0 h-10 border-r border-r-stale-300"
                    >
                        <IconContext.Provider value={{ size: "20px" }}>
                            <IoMdSearch />
                        </IconContext.Provider>
                    </label>
                    <input
                        type="text"
                        id="myInp"
                        className=" focus-visible:outline-none p-2 w-full h-full"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="border h-10 border-blue-500 rounded-lg py-1 px-7 w-full bg-slate-400"
                >
                    submit
                </button>
            </form>

            <ImageList allImages={allImages} />
        </div>
    );
}

export default Search;
