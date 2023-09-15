import FOOTER from "../components/footer";
import HEADER from "../components/header";
import HEADLINE from "../components/headline";

export default function PRIVACY() {
  
    return (

        <div className="flex flex-col h-screen">
            <HEADER />

            <HEADLINE h1="Privacy Policy" p="This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website, use our product, and contact us."/>
            
            <article className="prose max-w-[1400px] mr-auto ml-auto pl-8 pr-8 pb-6 pt-6 overflow-auto">

                <h2>Website</h2>
                <p>Our website, Fitness-Blueprint.com, collects certain information automatically, such as your IP address, browser
                    type, and operating system. This information helps us analyze trends, administer the site, track users'
                    movements, and gather broad demographic information for aggregate use.</p>

                <h2>Product</h2>
                <p>Our product, Fitness-Blueprint, may collect personal information that you voluntarily provide, such as your name
                    and email address when you sign up for an account. We may use this information to personalize your experience,
                    provide customer support, and improve our product.</p>

                <h2>Contact</h2>
                <p>If you contact us through the email address info@Fitness-Blueprint.com, we may keep a record of your communication
                    to help us respond to your inquiry and improve our services.</p>

                <h2>Data Usage</h2>
                <p>We may use your personal information in a variety of ways, including but not limited to:</p>
                <ul>
                    <li>Provide, operate, and maintain our website and product;</li>
                    <li>Improve, personalize, and expand our website and product;</li>
                    <li>Understand and analyze how you use our website and product;</li>
                    <li>Communicate with you, either directly or through our newsletters;</li>
                    <li>Market our products and services to you;</li>
                    <li>Respond to your comments, questions, and requests; and</li>
                    <li>Comply with applicable laws, regulations, and legal processes.</li>
                </ul>

                <h2>Opt Out</h2>
                <p>If you wish to opt out from receiving marketing emails from us, you can do so by clicking on the "unsubscribe" link
                    provided in the email or by contacting us using the provided email address.</p>

                <h2>Owner</h2>
                <p>This website and product are owned and operated by Pascal Lindenau.</p>

                <h2>Security</h2>
                <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However,
                    no method of transmission over the internet or electronic storage is completely secure.</p>

                <p>By using our website and product, you acknowledge and accept the inherent risks associated with transmitting
                    information online and agree to hold us harmless for any security breach.</p>

                <h2>Changes to this Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised version
                    will be effective immediately upon posting.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or our practices, please contact us at info@Fitness-Blueprint.com.</p>

            </article>
            
            <FOOTER />   
        </div>

        
    );
  };
  



