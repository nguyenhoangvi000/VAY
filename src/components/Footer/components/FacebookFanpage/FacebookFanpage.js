import React, { Component} from 'react';
import FacebookProvider, { Page } from 'react-facebook';
 
export default class FacebookFanpage extends Component {
  render() {
    return (
      <FacebookProvider appId="198993027509159">
        <Page height={300} href="https://www.facebook.com/vayteam/" tabs="timeline" />
      </FacebookProvider>    
    );
  }
}
