import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO component to dynamically manage document title, meta description, schema, and social tags.
 *
 * @param {Object} props
 * @param {string} props.title - The page title
 * @param {string} props.description - The page meta description
 * @param {Object|Array} props.schema - Structured JSON-LD schema
 * @param {string} props.image - Custom social share image URL
 */
export default function SEO({ title, description, schema, image }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const setMetaTag = (attrName, attrVal, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 1. Standard Description Meta Tag
    if (description) {
      setMetaTag('name', 'description', description);
    }

    // 2. Open Graph (og:*) Tags
    const currentUrl = `https://www.kripalibrary.com${pathname}`;
    const defaultImage = "https://ik.imagekit.io/manish07/assets/logo2.png";
    const ogImage = image || defaultImage;

    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:type', 'website');
    
    if (title) {
      setMetaTag('property', 'og:title', title);
      setMetaTag('name', 'twitter:title', title);
    }
    
    if (description) {
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('name', 'twitter:image', ogImage);

    // 3. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');

    // 4. Dynamic JSON-LD Schema injection
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else {
      if (scriptTag) {
        scriptTag.remove();
      }
    }
  }, [title, description, schema, image, pathname]);

  return null;
}

