import React, { Component } from 'react'


const imagesPath = {
    image1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
    image2: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
}

export default class Image extends Component {

    state = { open: true };



    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
    }

    getImageName = () => this.state.open ? 'image1' : 'image2'

    render() {
        const imageName = this.getImageName();
        return (
            <div>
                <br /><br />
                <img style={{ width: '100%' }} src={imagesPath[imageName]} />
                <button onClick={this.toggleImage}>click to change</button>
            </div>
        );
    }
}


