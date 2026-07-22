import { Flex } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { projects } from '@/app/resources/content';

export async function generateMetadata(
	{ params }: { params: Promise<{ locale: string }> }
) {
	const { locale } = await params;

    const t = await getTranslations();
    const { work } = renderContent(t);
    const currentLocale = locale as 'en' | 'tr';

	const title = (projects.title as any)[currentLocale] || (projects.title as any).en;
	const description = (projects.description as any)[currentLocale] || (projects.description as any).en;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/work/`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function Work(
	{ params }: { params: Promise<{ locale: string }> }
) {
	const { locale } = await params;
	setRequestLocale(locale);
	const currentLocale = locale as 'en' | 'tr';

	const t = await getTranslations();
	const { person, work } = renderContent(t);

    return (
        <Flex
			fillWidth maxWidth="m"
			direction="column"
            paddingTop="l"
            paddingBottom="l">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        headline: (projects.title as any)[currentLocale] || (projects.title as any).en,
                        description: (projects.description as any)[currentLocale] || (projects.description as any).en,
                        url: `https://${baseURL}/projects`,
                        author: {
                            '@type': 'Organization',
                            name: person.name,
                        },
                        hasPart: projects.items.map(project => ({
                            '@type': 'CreativeWork',
                            headline: (project.title as any)[currentLocale] || (project.title as any).en,
                            description: (project.description as any)[currentLocale] || (project.description as any).en,
                        })),
                    }),
                }}
            />
            <Projects locale={locale}/>
        </Flex>
    );
}