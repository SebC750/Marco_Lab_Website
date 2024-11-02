import "../stylesheets/Home.css"
import {useEffect, useState} from "react"
const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() =>{
        let newDate = new Date().getFullYear()
        setCurrentYear(newDate)
    },[])
    return (
        <footer className="bg-info text-white" id="contact-us">
            <div className="container">
                <div className="row p-5">
                    <div className="col">
                        <h2 className="fw-semibold"> Marco's lab </h2>
                        <p> <i className="bi bi-envelope-fill"></i> mantonio.giraldo@udea.edu.co </p>
                        <p> Cl. Barranquilla #53188 #53- a, Aranjuez, Medellín, Aranjuez, Medellín, Antioquia, Colombia</p>
                        <img src="/marco-lab-pictures/uoa-address.png" className="img-fluid img-thumbnail rounded-0 d-block w-auto h-auto" alt="university natural sciences building address" />
                    </div>
                    <div className="col d-none d-md-block">
                         <h4> Quick links</h4>
                         <ul className="list">
                            <li className="list-item"> <a className="text-white" href="/Team"> Team </a></li>
                            <li className="list-item"> <a className="text-white" href="/Research"> Research </a></li>
                            <li className="list-item"> <a className="text-white" href="/About"> About us</a></li>
                         </ul>
                    </div>
                </div>


            </div>
            <div className="text-center p-2 bg-dark d-flex justify-content-evenly align-items-center flex-column flex-sm-row">
                <img src="marco-lab-pictures/logo-uofantioquia-png.png" alt="university of antioquia logo" className="w-25 p-md-2"/>
                <p className="fs-6 fs-md-4 opacity-50"> {currentYear && (<span> {currentYear} </span>)} Marco's Lab, Universidad de Antioquia, All rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer