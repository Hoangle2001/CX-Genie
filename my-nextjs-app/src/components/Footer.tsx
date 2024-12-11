import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [completed, setCompleted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      alert("Please enter a valid email");
      return;
    }
    try {
      console.log("Email submitted:", formData.email);
      setCompleted(true);
      setFormData({ email: "" });
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };

  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo and Product Hunt Badge */}
        <div>
          <Image
            src="/svgs/logo_footer.svg"
            alt="Footer Logo"
            width={162}
            height={40}
            className="mb-4"
          />
          <a
            href="https://www.producthunt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=486201&theme=light&period=daily"
              alt="Product Hunt Badge"
              width="200"
              height="39"
            />
          </a>
        </div>

        {/* Social Links and Contact */}
        <div>
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
          </div>
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <p>Email: <a href="mailto:hello@example.com">hello@example.com</a></p>
          <p>Address: 18 Sin Ming Lane, Singapore</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/#features">Solutions</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-use">Terms of Use</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Newsletter Form */}
        <div>
          <h3 className="font-bold text-lg mb-2">Newsletter</h3>
          {completed ? (
            <p>Thank you for subscribing to our newsletter!</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-gray-800 pt-4">
        <p>&copy; 2024 CX Genie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
