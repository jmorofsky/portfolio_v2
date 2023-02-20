import React from 'react'
import '../css/Book1.css'

class Book1 extends React.Component {
    render() {
        if (this.props.color === 'brown') {
            return (
                <div className='container_b1_brown' style={{marginRight: this.props.margin}}>
                    {/* top */}
                    <div className='bigStripe_b1' style={{ top: '15px' }} />
                    <div className='middleStripe_b1' style={{ top: '25px' }} />
                    <div className='smallStripe_b1' style={{ top: '35px' }} />
                    <div className='bigStripe_b1' style={{ top: '42px' }} />
                    <div className='smallStripe_b1' style={{ top: '49px' }} />

                    {/* bottom */}
                    <div className='bigStripe_b1' style={{ top: '150px' }} />
                    <div className='diamond_b1' style={{ top: '160px' }} />
                    <div className='bigStripe_b1' style={{ top: '170px' }} />
                </div>
            )
        }

        if(this.props.color === 'green') {
            return (
                <div className='container_b1_green' style={{marginRight: this.props.margin}}>
                    {/* top */}
                    <div className='bigStripe_b1' style={{ top: '15px' }} />
                    <div className='middleStripe_b1' style={{ top: '25px' }} />
                    <div className='smallStripe_b1' style={{ top: '35px' }} />
                    <div className='bigStripe_b1' style={{ top: '42px' }} />
                    <div className='smallStripe_b1' style={{ top: '49px' }} />

                    {/* bottom */}
                    <div className='bigStripe_b1' style={{ top: '150px' }} />
                    <div className='diamond_b1' style={{ top: '160px' }} />
                    <div className='bigStripe_b1' style={{ top: '170px' }} />
                </div>
            )
        }

        if(this.props.color === 'blue') {
            return (
                <div className='container_b1_blue' style={{marginRight: this.props.margin}}>
                    {/* top */}
                    <div className='bigStripe_b1' style={{ top: '15px' }} />
                    <div className='middleStripe_b1' style={{ top: '25px' }} />
                    <div className='smallStripe_b1' style={{ top: '35px' }} />
                    <div className='bigStripe_b1' style={{ top: '42px' }} />
                    <div className='smallStripe_b1' style={{ top: '49px' }} />

                    {/* bottom */}
                    <div className='bigStripe_b1' style={{ top: '150px' }} />
                    <div className='diamond_b1' style={{ top: '160px' }} />
                    <div className='bigStripe_b1' style={{ top: '170px' }} />
                </div>
            )
        }
    }
}

export default Book1
