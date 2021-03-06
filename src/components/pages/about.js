import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="ContentStyle">
                <div className="Container">
                    <h1>About Us</h1>
                    <hr/>

                    <p className="indentText">Starting from our passion in transporting products and commodities across the country along with our extensively experiences in logistics management and real-estate industry, Orbits DVL has become one of the potential challengers in logistics market which accumulates elites whose profession is committed to delivering a high standard services to our customers, both for SMEs and global one.</p>

                    <p className="indentText">Orbits DVL has a long mutual cooperation with Orbits Chem—a chemical products and plastic resins provider in Thailand. They equips us with a profoundly understanding of serving our customer needs on practical and effective advises on logistics and warehousing. We strategically position ourselves to partner as a professional property consultant. So that,  we could be your lifelong and sustainable partner in real-estate section.</p>

                    <img src={require('../../assets/img/hand.jpg')} alt=""/>
                </div>
            </div>
        )
    }
}

export default About;