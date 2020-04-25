import React from 'react'

const styles= {
    headerStyle:{
        backgroundColor:"#111D44",
        color:"white",
        textAlign:"center",
        padding:"20px",
        fontSize:30,
        fontFamily:"Roboto Slab"
    }
}
export default function Header() {
    return (
                    <div>
                        <header>
                            <h1 style={styles.headerStyle}>Employee  Directory</h1>
                        </header>
                    </div>
    );
}