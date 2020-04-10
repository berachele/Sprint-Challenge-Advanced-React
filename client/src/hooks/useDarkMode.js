import React, {useState, useEffect} from "react"

const useDarkMode = () => {
    const [value, setValue] = useState(false)

    // const div = document.getElementsByTagName("div"),
    //     h1 = document.getElementsByTagName("h1"),
    //     h2 = document.getElementsByTagName("h2"),
    //     p = document.getElementsByTagName("p"),
    //     button = document.getElementsByTagName("button");

    useEffect(() => {
        if(value === true){
            document.body.classList.add("dark-mode")
            // div.classList.add("dark-mode")
            // h1.classList.add("dark-mode")
            // h2.classList.add("dark-mode")
            // p.classList.add("dark-mode")
            // button.classList.add("dark-mode")
        }else {
            document.body.classList.remove("dark-mode")
            // div.classList.remove("dark-mode"),
            // h1.classList.remove("dark-mode"),
            // h2.classList.remove("dark-mode"),
            // p.classList.remove("dark-mode"),
            // button.classList.remove("dark-mode");
        }
        //testing
        console.log("Is DarkMode on??", value)
    }, [value])
    return [value, setValue]
}

export default useDarkMode