import React, {useState, useEffect} from "react"

const useDarkMode = () => {
    // const [value, setValue] = useState(() => {

    // })

    const div = document.getElementsByTagName("div"),
                  h1 = document.getElementsByTagName("h1"),
                  h2 = document.getElementsByTagName("h2"),
                  p = document.getElementsByTagName("p"),
                  button = document.getElementsByTagName("button");
    useEffect(() => {
        if(value === true){
            div.classList.add("dark-mode")
            h1.classList.add("dark-mode")
            h2.classList.add("dark-mode")
            p.classList.add("dark-mode")
            button.classList.add("dark-mode")
        }else {
            div.classList.remove("dark-mode")
            h1.classList.remove("dark-mode")
            h2.classList.remove("dark-mode")
            p.classList.remove("dark-mode")
            button.classList.remove("dark-mode")
        }
    }, [value])
}

export default useDarkMode