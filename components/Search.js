import React, {Component} from 'react'
import { SearchBar, Text } from 'react-native-elements';

import {FirebaseWrapper} from '../firebase/firebase'

export class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
        };
    }

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
                onEndEditing={() => this.props.searchfn(search)}
            />
    );
  }
}
