import React from 'react'
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

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
        // <Container fluid="-fluid">
        //     <Row>
        //         <Col size="sm-12">
                    <div>
                        <header>
                            <h1 style={styles.headerStyle}>Employee  Directory</h1>
                        </header>
                    </div>
        //         </Col>
        //     </Row>
        // </Container>
    );
}
