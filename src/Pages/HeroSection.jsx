import React, { Fragment } from 'react'

export const HeroSection = () => {
    const styles = {
        backgroundImage: "url(src/assets/hero_sectino_2024_800.png)",
    }
    return (
        <Fragment>
            <div className='min-h-128 w-full relative '>
                <div className='w-full bg-no-repeat absolute bg-cover top-0 right-0 bottom-0 left-0 ' style={styles}>
                    <div className='grid grid-cols-2 max-w-7xl px-12 m-auto'>
                        <div>
                            <p>Transform Your Space with Elegance and Greenery</p>
                            <br></br>
                            <p>Discover a World of Stylish Planters</p>
                            <p>Explore our Collection Today!</p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}
