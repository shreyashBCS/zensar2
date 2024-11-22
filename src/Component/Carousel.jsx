import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Define the items for the carousel
const items = [
    // Each item is now a div containing an image and overlay content


    <div key="1" style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <img
            src="https://via.placeholder.com/1920x1080?text=Image+1"
            alt="Image 1"
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
        />
        {/* Overlay text and button */}
        <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "white" }}>
            <h4>Bringing a human touch
                to digital healthcare</h4> {/* Title for the first image */}
            <button style={{ padding: "20px 20px", backgroundColor: "black", color: "#fff", border: "none", borderRadius: "5px" }}>
                Learn More &#8594;{/* Button text */}
            </button>
        </div>
    </div>,


    <div key="2" style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <img
            src="https://via.placeholder.com/1920x1080?text=Image+2"
            alt="Image 2"
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
        />
        <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "white" }}>
            <h4>Together,
                we shape experiences
                for better futures.
                Our purpose</h4> {/* Title for the second image */}
            <button style={{ padding: "20px 20px", backgroundColor: "black", color: "#fff", border: "none", borderRadius: "5px" }}>
                Learn More &#8594;  {/* Button text */}
            </button>
        </div>
    </div>,


    <div key="3" style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <img
            src="https://via.placeholder.com/1920x1080?text=Image+3"
            alt="Image 3"
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
        />
        <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "white" }}>
            <h4>Lead With Experience,
                Leap With Intelligence.
                Accelerate, innovate, and drive growth with AI</h4> {/* Title for the third image */}
            <button style={{ padding: "20px 20px", backgroundColor: "black", color: "#fff", border: "none", borderRadius: "5px" }}>
                Learn More &#8594; {/* Button text */}
            </button>
        </div>
    </div>,



    <div key="4" style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <img
            src="https://via.placeholder.com/1920x1080?text=Image+4"
            alt="Image 4"
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
        />
        <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "white" }}>
            <h4>Experience-led
                Everything</h4> {/* Title for the fourth image */}
            <button style={{ padding: "20px 20px", backgroundColor: "black", color: "#fff", border: "none", borderRadius: "5px" }}>
                Learn More &#8594; {/* Button text */}
            </button>
        </div>
    </div>,



    <div key="4" style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <img
            src="https://via.placeholder.com/1920x1080?text=Image+4"
            alt="Image 4"
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
            }}
        />
        <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "white" }}>
            <h4>Guidewire
                Connections 2024
                Join Zensar’s Guidewire experts to discover how our
                data and AI-driven approach ensures a seamless
                migration to Guidewire Cloud</h4> {/* Title for the fourth image */}
            <button style={{ padding: "20px 20px", backgroundColor: "black", color: "#fff", border: "none", borderRadius: "5px" }}>
                Learn More &#8594;  {/* Button text */}
            </button>
        </div>
    </div>,



];






// Carousel component definition
const Carousel = () => (
    <div
        style={{
            margin: 0,
            overflow: "hidden",
        }}
    >
        <AliceCarousel
            autoPlay
            autoPlayControls={false}
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={600}
            animationType="fadeout"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items} // Pass the modified items array to the carousel
        />
    </div>
);

export default Carousel; // Export the Carousel component