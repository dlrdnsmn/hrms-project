import React, { useEffect, useState } from 'react'
import { Checkbox,Item } from 'semantic-ui-react'
import { SearchInput } from 'evergreen-ui';
import positionService from '../services/positionService';

export default function JobPosition() {
    const [position, setPosition] = useState([])

    useEffect(() => { 

        let jobPositionService = new positionService()
        jobPositionService.getJobPositions().then(result => setPosition(result.data.data))
  }, [])

    return (
          <div style={{position:"relative", overflowX:"hidden",overflowY:"auto",maxWidth:"250px", alignContent: "center", justifyContent: "center", marginTop: 10,fontFamily:"Poppins",fontWeight:"500",fontSize:"2",maxHeight:"200px"}}>

            <Item.Group >
                <div style={{display:"flex",alignItems:"center",alignContent:"center",marginTop:10,marginBottom:10,maxWidth:"250px"}}>
            <SearchInput  placeholder="Ara..."  />
            </div>
                {
                    position.map(position => (
                        <Checkbox style={{marginTop:10}} key={position.id} label={position.positionName}  value={position.positionName} />
                    ))
                }
            </Item.Group>

        </div>
    )
} 