import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO component to dynamically manage document title and meta description.
 *
 * @param {Object} props
 * @param {string} props.title - The page title
 * @param {string} props.description - The page meta description
 */
export default function SEO({ title, description, schema }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Dynamic JSON-LD Schema injection
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
  }, [title, description, schema, pathname]);

  return null;
}
