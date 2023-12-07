import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  /*
  TODO: After CMS IS DONE
  const blogs = await fetch("https://www.someapi.com/posts");
    const data = await blogs.json();
  
    const posts = data.map((post) => ({
      url: `${homepage}/blogs/${post.slug}`,
      lastModified: new Date(post.date).toISOString(),
    }));
  
    const routes = ["", "/about-us", "/contact-us"].map((route) => ({
      url: `${homepage}${route}`,
      lastModified: new Date().toISOString(),
    }));
  
    return [...routes, ...posts];*/

  return [
    {
      url: 'https://gabriel-chelles.ux',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    }
  ]
}
