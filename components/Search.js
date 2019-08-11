import React, {Component} from 'react'
import { SearchBar } from 'react-native-elements';

import {FirebaseWrapper} from '../firebase/firebase'

export class Search extends Component {
    constructor(){
        super();
        this.state = {
            search: '',
        };
    }

    async search(search){
        try {
            await FirebaseWrapper.GetInstance().SetupCollectionListener('posts', function(container){
                let platform = container.filter(doc => {
                    if (doc.title === search){
                        return doc.platform;
                    }
                });
                console.log(platform[0].platform)
            });

        } catch (error) {console.log('something went wrong searching', error)}
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
                onEndEditing={() => this.search(search)}
            />
    );
  }
}
