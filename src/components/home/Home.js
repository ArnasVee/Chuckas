import {useState, useEffect} from "react";
import data from "bootstrap/js/src/dom/data";

const Home =()=>{
    const [jokes,setJokes] = useState([]);   //cia desim fetchintus juokelius
    useEffect(()=>{
        try{
            fetch("https://api.chucknorris.io/jokes/search?query=bee")
                .then(response=>response.json())
                .then(data=>setJokes(data.result))
        }catch(msg){
            console.log(msg)
        }
    },[])
    console.log(jokes)
    return(
        <div>
            <p>Cia bus daug juokeliu</p>
        </div>
    )
}

export default Home