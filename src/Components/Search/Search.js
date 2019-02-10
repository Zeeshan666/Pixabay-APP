import React, { Component } from 'react'
import ImageResult from '../imageResult/ImageResult';
import Textfield from 'material-ui/TextField'
import Selectfield from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';

import axios from 'axios';
class Search extends Component {

 state={
     searchText:'',
     amount:15,
     apiUrl:'https://pixabay.com/api',
     apiKey:'11556831-3c3f3b7d842037f70e6f60d96',
     images:[]
 }
 
onTextChange=(e)=>{
    const val = e.target.value;
    this.setState({[e.target.name]:val
    },  ()=>{
              if(val==''){
                this.setState({
                    images:[]
                })

            }
            else{
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}
                &image_type=photo&per_page=${this.state.amount}&safesearch=true`).
                then(res=>{
                 const apidetails = res.data;
                 const download = res.data.hits[3].downloads;

                  const  images =res.data.hits;
                  console.log(download,apidetails)

                    this.setState({images  })
                })
           .catch(err=>console.log(err))

            }
           
    })

};
onAmountChange=(e,index,value)=>{
    this.setState({
        amount:value
    })

}

  render() {
     
      console.log(this.state.images)
    return (
      <div>
        <Textfield
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
        floatingLabelText='search images'
        fullWidth={true}
        />
        <br/>
        <Selectfield
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </Selectfield>
          <br/>
          {this.state.images.length >0 ?
         ( <ImageResult download={this.state.images} images={this.state.images}/> ): null}
      </div>
    )
  }
}
export default Search
