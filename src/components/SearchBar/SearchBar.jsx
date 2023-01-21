import React,{useState} from "react";
import './SearchBar.css'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = (event) => {
        setSearchValue('')
    }

    const handleSubmitClick = (event) => {
        console.log(searchValue)
        setSearchValue('')
    }

    const shouldDisplayButton = searchValue.length>0

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} placeholder="insert value" />
            <input type  ="submit" onClick={handleSubmitClick} value  ="submit"/>
            { shouldDisplayButton && <button onClick={handleClearClick}>clear</button> }
            
        </div>
    )
}

export default SearchBar