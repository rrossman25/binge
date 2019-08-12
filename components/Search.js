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

    async search(search, platforms){
        try {
            await FirebaseWrapper.GetInstance().SetupCollectionListener('posts', function(container){
                container.filter(doc => {
                    if (doc.title === search){
                        platforms = [...platforms, doc];
                    }
                })
            })

        } catch (error) {console.log('something went wrong searching', error)}
    }

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        let { platforms } = this.props;
        return (
            <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
                onEndEditing={() => this.search(search, platforms)}
            />
    );
  }
}
