import React from 'react'
import '../css/Book2.css'

class Book2 extends React.Component {
    render() {
        return (
            <div className='container_b2'>
                {/* top */}
                <div className='smallStripe_b2' />
                <div className='bigStripe_b2' />
                <div className='smallStripe_b2' />
                <div className='mediumStripe_b2' />
                <div className='smallStripe_b2' />

                {/* bottom */}
                <div className='smallStripe_b2' style={{top: '80px'}} />
                <div className='bigStripe_b2' style={{top: '80px'}} />
                <div className='smallStripe_b2' style={{top: '40px'}} />
                <div className='smallStripe_b2' style={{top: '72px'}} />
            </div>
        )
    }
}

export default Book2
