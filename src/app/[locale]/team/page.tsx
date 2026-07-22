import { Flex } from '@/once-ui/components';
import { Team } from '@/components/team/Team';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata(
    { params }: { params: Promise<{ locale: string }> }
) {
    const { locale } = await params;

    const t = await getTranslations();
    const { team } = renderContent(t);

	const title = (team.title as any)[locale] || (team.title as any).en;
	const description = (team.description as any)[locale] || (team.description as any).en;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/team/`,
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

export default async function TeamPage(
    { params }: { params: Promise<{ locale: string }> }
) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations();
    const { person, team } = renderContent(t);

    return (
        <Flex
			fillWidth maxWidth="m"
			direction="column"
            paddingTop="l"
            paddingBottom="l"
		>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'TeamPage',
                        headline: (team.title as any)[locale] || (team.title as any).en,
                        description: (team.description as any)[locale] || (team.description as any).en,
                        url: `https://${baseURL}/team`,
                        author: {
                            '@type': 'Organization',
                            name: person.name,
                        },
                    }),
                }}
            />
            <Team />
        </Flex>
    );
}
