import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [ term, setTerm ] = useState('Programming');
    const [ results, setResults ] = useState([]);

    console.log(results);

    useEffect(() => {
        //Utilizing useEffect() hook to make async request to wiki API
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }      
            });

            setResults(data.query.search);
        }

        if (term && !results.length) {
            //On first load, don't wait 600 ms.
            search();
        } else {
            const timeoutId = setTimeout(() => {
            //500ms timer to prevent api calls per character change.
                if (term) {
                    search();
                }
            }, 600);

            return () => {
            //Resets timer on character change to prevent constant api calls. API call occurs after 600ms.
                clearTimeout(timeoutId);
            }
        } 
    }, [term]);

    const renderedResults = results.map((result) => {
        //Rendering all returned data into a list.
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Read
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    ...
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;