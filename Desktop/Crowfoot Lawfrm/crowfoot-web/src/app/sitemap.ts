import { MetadataRoute } from 'next'
import { servicesData } from '@/lib/services-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://crowfootlaw.com'

    // Static routes
    const routes = [
        '',
        '/services',
        '/attorneys',
        '/faqs',
        '/contact',
        '/privacy-policy',
        '/legal-disclaimer',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic service routes
    const serviceRoutes = Object.keys(servicesData).map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    return [...routes, ...serviceRoutes]
}
