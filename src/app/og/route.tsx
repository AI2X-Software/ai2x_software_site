import { ImageResponse } from 'next/og'
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations } from 'next-intl/server';
import { readFile } from 'fs/promises';
import path from 'path';

// Node.js runtime: Edge Function'ın 1 MB boyut limitini aşmasını önler
// (Hobby planı; Next 15 ile next/og + gömülü font bundle > 1 MB oluyordu)
export const runtime = 'nodejs';

export async function GET(request: Request) {
    let url = new URL(request.url)
    let title = url.searchParams.get('title') || 'Portfolio'
    const fontData = await readFile(
        path.join(process.cwd(), 'public', 'fonts', 'Inter.ttf')
    );

    const t = await getTranslations();
    const { person } = renderContent(t);

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    padding: '8rem',
                    background: '#151515',
                }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '4rem',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        color: 'white',
                    }}>
                    <span
                        style={{
                            fontSize: '8rem',
                            lineHeight: '8rem',
                            letterSpacing: '-0.05em',
                            whiteSpace: 'pre-wrap',
                            textWrap: 'balance',
                        }}>
                        {title}
                    </span>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5rem'
                        }}>
                        <img src={'https://' + baseURL + person.avatar}
                            style={{
                                width: '12rem',
                                height: '12rem',
                                objectFit: 'cover',
                                borderRadius: '100%',
                            }}/>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem'
                            }}>
                            <span
                                style={{
                                    fontSize: '4.5rem',
                                    lineHeight: '4.5rem',
                                    whiteSpace: 'pre-wrap',
                                    textWrap: 'balance',
                                }}>
                                {person.name}
                            </span>
                            <span
                                style={{
                                    fontSize: '2.5rem',
                                    lineHeight: '2.5rem',
                                    whiteSpace: 'pre-wrap',
                                    textWrap: 'balance',
                                    opacity: '0.6'
                                }}>
                                {person.role}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1920,
            height: 1080,
            fonts: [
                {
                    name: 'Inter',
                    data: fontData,
                    style: 'normal',
                },
              ],
        }
    )
}