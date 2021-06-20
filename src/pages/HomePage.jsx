import React from "react";
import { Segment,Header,Button,Container,Icon } from "semantic-ui-react";
export default function HomePage() {


  return (
    <div>
    <Segment  inverted style={{bottom:0,top:-39,maxHeight:850,display:"flex",flexWrap:"wrap",backgroundImage: "url(" + "https://2ny4tz3q8uac3tyg0h32qj91-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/hrms-payroll-banner.jpg" + ")",backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',height:"100%",width:"100%",border:"none"}}>

        <Container style={{alignSelf:"center",paddingBottom:80}} text>
            
        <Header
          as='h1'
          content=''
          inverted
          style={{
              fontFamily:"Poppins",
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
            
          }}
        />
        <Header
          as='h2'
          content=''
          inverted
          style={{
            fontFamily:"Poppins",
            fontSize:'1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
            
         
          }}
        />
        <Button inverted  size='huge'>
         Haydi Başlayalım 
          <Icon name='right arrow' />
        </Button>
      </Container>

      </Segment>
    </div>
  );
}