import {useState, useEffect} from "react";

const App = () => {
    const API = "https://dog.ceo/api/breeds/image/random";
    const [appInfo, setAppInfo] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
    
        fetch(API)
        .then(res=>res.json())
        .then(data=> {
            setAppInfo(<img src={data.message} alt="A Random Dog"></img>);
            setIsLoaded(true);
        })

    }, []);

    if (!isLoaded) return <p>Loading...</p>;

    return (appInfo);
}

export default App;

