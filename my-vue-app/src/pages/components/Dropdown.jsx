import "../stylesheets/Team.css"
const Dropdown = ({ memberList, grade }) => {
    const descriptions = memberList.map((val, index) => {
        const uniqueId = `${grade}-${index}`;
        return (
            <div className="col-md-auto" key={index}>
                <div className="member-picture">
                    <img src={val.foto_perfil} alt={`picture of ${val.nombre}`} height="300" width="300" />
                    <h3>{val.nombre}</h3>
                </div>
                <div className="accordion" id={`description-accordion-${uniqueId}`}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#desc-section-${uniqueId}`}
                                aria-expanded="false"
                                aria-controls={`desc-section-${uniqueId}`}
                            >
                                Más información
                            </button>
                        </h2>
                        <div
                            id={`desc-section-${uniqueId}`}
                            className="accordion-collapse collapse"
                            data-bs-parent={`#description-accordion-${uniqueId}`}
                        >
                            <div className="accordion-body">
                                <p>{val.posicion || 'Posición no especificada'}</p>
                                <p>{val.descripcion || 'Descripción no disponible'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return <div className="row">{descriptions}</div>;
};
export default Dropdown