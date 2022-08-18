import React from "react";

const Choice = (props) => {
    const listOfPages = ['Accueil', 'Parcours', 'Compétences', 'Documents'];
    return (
        <div>
            <div className="col-12 d-flex justify-content-center flex-wrap">
                <h1 className="d-flex justify-content-center col-12">{props.title}</h1>
                <div className="d-flex justify-content-center flex-wrap">
                    { listOfPages.map(page => <p className="col-12" key={page}>{page}</p>) }
                </div>
            </div>
        </div>
    );
};

export default Choice;