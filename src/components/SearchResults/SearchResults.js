import React from "react";
import styles from './SearchResults.module.css';
import Tracklist from "../Tracklist/Tracklist";
function SearchResults (props) {
    return (
        <div className={styles.SearchResults}>
       {/*<Tracklist userSearchResults = {props.userSearchResults} isRemoval = {props.isRemoval} onAdd = {props.onAdd} onRemove = {props.onRemove} */}
        <Tracklist userSearchResults = {props.userSearchResults} isRemoval = {false} onAdd = {props.onAdd}/>
      </div>
        );
}

export default SearchResults;