import React from "react";
import "../styles/about.css"; // Import the CSS file for styling

function About() {
    return (
        <div className="about-container">
            <header className="header1">
                <div className="mid-header">
                    <a href="http://localhost:3000">Home</a>
                </div>
                <a href="/about">About</a>
                <a href="/privacy">privacy Policy</a>
                <p><a href="/terms">Terms of Service</a></p>
            </header>
            <section className="about-content">
                <h1>About Us</h1>
                <h3>DressCode Online</h3>
                <p>
                    DressCode is a leading online platform dedicated to providing a comprehensive and curated selection of professional and fashionable attire. Our website offers an extensive range of clothing options tailored to meet the diverse needs of modern professionals. With a commitment to quality and style, DressCode ensures that every piece in our collection adheres to the highest standards of craftsmanship and design.

                    Our user-friendly online portal features an intuitive interface, making it easy for customers to navigate through various categories, including business suits, casual wear, and accessories. Each product is meticulously described and accompanied by high-resolution images to provide a detailed view of the fabric, fit, and design.

                    At DressCode, we prioritize a seamless shopping experience. Our website supports a secure and efficient checkout process, and we offer a range of payment options to accommodate our customers' preferences. Additionally, our responsive customer service team is available to assist with inquiries, returns, and exchanges, ensuring that every interaction is handled with professionalism and care.

                    We are dedicated to staying ahead of fashion trends while maintaining a classic appeal, helping professionals present themselves with confidence and elegance in any setting. Explore DressCode online to discover how we can elevate your wardrobe and enhance your professional image.
                </p>
            </section>
        </div>
    );
}

export default About;