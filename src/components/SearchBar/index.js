import React, {useState, useEffect, useRef} from 'react'
import {Wrapper, Content} from './SearchBar.styles'
import searchIcon from '../../images/search-icon.svg';

const SearchBar = ({setSearchTerm}) => {

    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)
        
        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='searchIcon'/>
                <input 
                    type='text' 
                    placeholder='Search movie'
                    onChange={e => setState(e.currentTarget.value)}
                    value={state}
                    />
            </Content>
        </Wrapper>
    )

};

export default SearchBar;