
import React from "react";
import "./PrivacyPolicy.css";

const CachePolicy = () => {
    return (
        <>
            <section className="policy-hero">
                <div className="container">
                    <h1>Cache Policy</h1>
                    <p>
                        Learn how caching technologies help us deliver a faster, more
                        reliable, and optimized browsing experience.
                    </p>
                </div>
            </section>

            <section className="policy-section">
                <div className="container">
                    <div className="policy-card">

                        <p>
                            This Cache Policy explains how caching technologies are used on
                            the Sellaro Digitec website to improve performance, speed,
                            security, and overall user experience.
                        </p>

                        <h2>What Is Caching?</h2>
                        <p>
                            Caching is a technology that temporarily stores copies of website
                            files and data on your device, browser, or network systems. This
                            allows web pages to load more quickly during future visits by
                            reducing the need to repeatedly download the same resources.
                        </p>

                        <h2>Why We Use Caching</h2>
                        <ul>
                            <li>Improve website loading speed and responsiveness.</li>
                            <li>Enhance user experience across devices.</li>
                            <li>Reduce server workload and bandwidth usage.</li>
                            <li>Optimize content delivery worldwide.</li>
                            <li>Improve website stability during high traffic periods.</li>
                            <li>Support faster delivery of images, scripts, and stylesheets.</li>
                        </ul>

                        <h2>Types of Cached Data</h2>
                        <p>
                            Cached data may include static website resources such as images,
                            logos, CSS stylesheets, JavaScript files, fonts, and other assets
                            necessary for website functionality and visual presentation.
                        </p>

                        <h2>Browser Caching</h2>
                        <p>
                            Your web browser may store certain website files locally on your
                            device. This helps pages load faster when revisiting our website
                            and reduces unnecessary data transfers.
                        </p>

                        <h2>Content Delivery Networks (CDNs)</h2>
                        <p>
                            We may use Content Delivery Networks (CDNs) to distribute cached
                            copies of website resources across multiple geographic locations.
                            This enables faster content delivery by serving files from
                            servers closest to the visitor.
                        </p>

                        <h2>Managing Your Cache</h2>
                        <p>
                            Users can clear cached website data at any time through their
                            browser settings. Clearing cache may help resolve display issues
                            or ensure the latest version of website content is loaded.
                        </p>

                        <h2>Performance & Security Benefits</h2>
                        <p>
                            Caching not only improves website speed but also enhances
                            reliability and security by reducing server load and helping
                            protect against certain performance-related disruptions.
                        </p>

                        <h2>Third-Party Caching Services</h2>
                        <p>
                            Sellaro Digitec may utilize trusted third-party infrastructure,
                            cloud hosting providers, CDN services, and performance
                            optimization platforms to improve website availability and user
                            experience.
                        </p>

                        <h2>Policy Updates</h2>
                        <p>
                            We reserve the right to update this Cache Policy at any time as
                            technologies, infrastructure, and operational requirements evolve.
                            Any modifications will be published on this page.
                        </p>

                        <div className="policy-footer">
                            <strong>Last Updated:</strong> June 2026
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default CachePolicy;
