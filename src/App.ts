import hello from './Hello'
import world from './World'
import "./style.scss"

const App = () => {
    
    let rootEl = document.getElementById("root");
    let pEl = document.createElement("p");

    const str = hello.toString() + " " + world.toString();
    pEl.innerHTML = str;
    
    rootEl.appendChild(pEl);
    
}

App();