import { useState } from "react";
const Dropdown = ({ memberList, grade }) => {
    console.log(memberList)
    const descriptions = memberList.map((val, index) => {
        return (
            <div className="col-md-auto" key={index}>
                <div className="member-picture">
                    <img src={val.foto_perfil} alt={`picture of ${val.nombre}`} height="300" width="300" />
                    <h3>{val.nombre}</h3>
                </div>
                <div className="accordion" id={`description-accordion-${val.nombre}`}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#desc-section-${val.nombre}`} aria-expanded="true" aria-controls={`desc-section-${val.nombre}`}>
                                Más información
                            </button>
                        </h2>
                        <div id={`desc-section-${val.nombre}`} className="accordion-collapse collapse" data-bs-parent={`#description-accordion-${val.nombre}`}>
                            <div className="accordion-body">
                                <p>{val.posicion ? val.posicion : 'Posición no especificada'}</p>
                                <p>{val.descripcion ? val.descripcion : 'Descripción no disponible'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return <div className="row">{descriptions}</div>;
};

export default Dropdown;
