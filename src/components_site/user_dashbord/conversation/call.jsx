import React from 'react';
import './call.css';

const CountryList = () => {
    return (
        <div className="container">
            <div className="floating-stack">
                <dl>
                    <dt>A</dt>
                    <dd>Algeria</dd>
                    <dd>Angola</dd>

                    <dt>B</dt>
                    <dd>Benin</dd>
                    <dd>Botswana</dd>
                    <dd>Burkina Faso</dd>
                    <dd>Burundi</dd>

                    <dt>C</dt>
                    <dd>Cabo Verde</dd>
                    <dd>Cameroon</dd>
                    <dd>Central African Republic</dd>
                    <dd>Chad</dd>
                    <dd>Comoros</dd>
                    <dd>Congo, Democratic Republic of the</dd>
                    <dd>Congo, Republic of the</dd>
                    <dd>Cote d'Ivoire</dd>

                    <dt>D</dt>
                    <dd>Djibouti</dd>

                    <dt>E</dt>
                    <dd>Egypt</dd>
                    <dd>Equatorial Guinea</dd>
                    <dd>Eritrea</dd>
                    <dd>Eswatini (formerly Swaziland)</dd>
                    <dd>Ethiopia</dd>
                </dl>
            </div>
        </div>
    );
};

export default CountryList;
