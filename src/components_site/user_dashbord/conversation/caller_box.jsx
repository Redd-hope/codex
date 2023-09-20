import React from 'react';

function HomePage(data_inp) {
    return (
        <article className="tile">
            <div className="tile-header">
                <i className="ph-lightning-light"></i>
                <h3>
                    <span>{data_inp.title}</span>
                    <span>{data_inp.description}</span>
                </h3>
            </div>
            <a href="#">
                <span>contact </span>
                <span className="icon-button">
                    <i className="ph-caret-right-bold"></i>
                </span>
            </a>
        </article>
    );
}

export default HomePage;
