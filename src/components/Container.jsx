import React, { Component } from 'react';
import Card from './Card';
import images from '../images.json'
// let counter;
import YourScore from './YourScore';
import TopScore from './TopScore';

export default class Container extends Component {
    state = {
        images: images,
        counter: 0,
        topScore: 0,
    }


    selectImage = id => {


        const clickedImg = this.state.images
            .find(
                img => img.id === id)
        console.log("cur", id)
        this.compareImage(this.state.clickedImg, clickedImg);
        this.shuffleImages();
        this.setState({ clickedImg })

        // console.log(id, "been clicked", clickedImg);

    };

    compareImage = (prev, cur) => {
        // counter = 0;
        // console.log("thats the same " + clicked.id + " img, no points for you!")
        // this.state.images.filter(
        //     img => img.id === clicked.id)
        this.setState({ counter: this.state.counter + 1 })
        console.log(prev, cur);
        if (prev === cur) {
            this.setState({ counter: 0 })
            this.setState({ topScore: this.state.counter })

            console.log("lose score is ", this.state.counter)

        } if (prev !== cur) {
            this.setState({ counter: this.state.counter + 1 })
            console.log("point = ", this.state.counter)
        }

    }


    shuffleImages = data => {
        console.log("everyday im shuffling")
        let i = images.length - 1;
        while (i > 0) {
            const shuffledArr = Math.floor(Math.random() * (images.length - 1 + 1));
            const renderedArr = images[i];
            images[i] = images[shuffledArr];
            images[shuffledArr] = renderedArr;
            i--;
        }
        return images
    }

    render() {
        const navStyle = {
            textAlign: "left",
            backgroundColor: "aliceblue",
            display: "flex",
            placeContent: "space-around",
        };
        const divStyle = {
            padding: "auto",
            color: 'blue',
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',

        };
        return (
            <div>
                <nav style={navStyle}>
                    <h3>Clicky Game</h3>

                    <div style={navStyle}>
                        Top Score: <TopScore
                        topScore={this.state.topScore}/>

                        Your Score: <YourScore
                        counter={this.state.counter}/>
                    </div>
                </nav>
                <div style={divStyle} >

                    {
                        this.state.images.map(img => (
                            <Card
                                id={img.id}
                                key={img.id}
                                image={img.image}
                                name={img.name}
                                handleSelectImage={this.selectImage}
                            />)
                        )}
                </div>
            </div>
        )
    }
}
