import "../stylesheets/Home.css"
const Footer = () => {
    return (
        <footer className="bg-info text-white">
              <div className="container">
                <div className="row p-5">
                    <div className="col">
                          <h2 className="fw-semibold"> Marco's lab </h2>
                          <p> <i class="bi bi-envelope-fill"></i> mantonio.giraldo@udea.edu.co </p>
                          <p> Cl. Barranquilla #53188 #53- a, Aranjuez, Medellín, Aranjuez, Medellín, Antioquia, Colombia</p>
                          <img src="/marco-lab-pictures/uoa-address.png" class="img-fluid d-block w-100 w-md-75 w-sm-50 h-75 h-md-50 h-sm-25"  alt="university natural sciences building address" />
                    </div>
                    <div className="col">
                         
                    </div>
                </div>
                <div className="text-center p-2">
                <p> Marco's Lab, Universidad de Antioquia 2024</p>
                </div>
                
              </div>
        {/* 
        <div class="contact-section" id="contact-us">
            <div class="contact-title">
                <h2> Contact Us! </h2>
                <div class="divider"> </div>
            </div>
            <div class="contact-numbers">
                <h3> Marco Antonio Giraldo Cadavid </h3>
                <ul>
                    <li class="contact-list-item"> Email: mantonio.giraldo@udea.edu.co </li>
                </ul>
            </div>
            <div class="contact-title">
                <h2> Address </h2>
                <div class="divider"> </div>
                <h3> University of Antioquia Faculty of Exact and Natural Sciences</h3>
                <div class="address-description">

                    <p > Cl. Barranquilla #53188 #53- a, Aranjuez, Medellín, Aranjuez, Medellín, Antioquia, Colombia </p>
                   <img src="/marco-lab-pictures/uoa-address.png" class="d-block w-50" height="100%" alt="university natural sciences building address" />
                </div>
            </div>
        </div>
        */} 
        </footer>
    )
}

export default Footer