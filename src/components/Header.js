import React from 'react'

const styles= {
    headerStyle:{
        backgroundColor:"#111D44",
        color:"white",
        textAlign:"center",
        padding:"20px",
        fontSize:40
    }
}
export default function Header() {
    return (
        <div>
            <header>
                <p style={styles.headerStyle}>Employee Directory</p>
               
            </header>
          
        </div>
    );
}
