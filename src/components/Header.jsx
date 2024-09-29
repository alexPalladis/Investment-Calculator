import logo from '../assets/investment-calculator-logo.png';

export default function Header(){
    return (
    <header id='header'>
        <img src={logo} id="img" alt='image with money bag'></img>
        <h1 >React Investment Calculator</h1>
        
    </header>
    )

    
}