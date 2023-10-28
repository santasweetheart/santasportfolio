import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); //index of which word is currently displayed on screen
    const [isDeleting, setIsDeleting] = useState(false); //whetehr word is deleting or not
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"] //list of words to display on screen in rotated manner
    const [text, setText] = useState(''); //the current text being displayed on screen
    const [delta, setDelta] = useState(300 - Math.random() * 100); //Determines how fast one letter appears after the first one is typed or deleted. It starts with a random value between 200 and 300.
    const PERIOD = 2000; //Defines the time interval between each word being typed out (2 seconds).
   
   //initiatiate the typing animation
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    //responsible for updating the displayed text and controlling the typing/deleting animation
    const tick = () => {
        // 
        let i = loopNum % toRotate.length; //calculates the index of the word to display based on loopNum and the length of the toRotate array.
        let fullText = toRotate[i]; //get full word to diplay from toRotate based on i
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); //updates the text state to either add a character if it's not deleting or remove a character if it's deleting.

        setText(updatedText);

        //If deleting then make deletion appear slower
        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        //If not deleting and full work is typed out, switch to deleting mode , move to next word and selt delta to 500 to make typing faster 
        if(!isDeleting && updatedText == fullText) {
            setIsDeleting(true);
            setDelta(PERIOD);
        } else if(isDeleting && updatedText == "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    
    return(
        <section className="banner" id="home">
        <Container>
        </Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Blurb</span>
                    <h1>{"Hi I'm Santa "} <span className="wrap">{text}</span></h1>
                    <p>About me stuff in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget</p>
                    <button onClick={() => console.log('connect')}>Connect with me! <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                </Col> 
            </Row>
        </section>

    )
}