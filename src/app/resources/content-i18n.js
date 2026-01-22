import { InlineCode } from "@/once-ui/components";
import { achievements, team, stats, projects } from './content';

const createI18nContent = (t) => {
    const person = {
        firstName: 'AI2X',
        lastName:  'Software',
        get name() {
            return `AI2X ${this.lastName}`;
        },
        role:      t("person.role") || { en: 'Autonomous Systems and AI Team', tr: 'Otonom Sistemler ve Yapay Zeka Takımı' },
        avatar:    '/images/logo/ai2x-black.png',
        location:  'Europe/Istanbul',
        languages: ['Turkish', 'English']
    }

    const newsletter = {
        display: false,
        title: <>{t("newsletter.title")}</>,
        description: <>{t("newsletter.description")}</>
    }

    const social = [
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/AI2X-Software',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/company/ai2x-software/',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:ai2xsoftware@gmail.com',
        },
    ]

    const home = {
        label: t("nav.home") || { en: 'Home', tr: 'Ana Sayfa' },
        title: t("home.title") || { en: 'AI2X - Autonomous Systems and AI Team', tr: 'AI2X - Otonom Sistemler ve Yapay Zeka Takımı' },
        description: t("home.description") || { en: 'Innovative student team', tr: 'Yenilikçi öğrenci takımı' },
        headline: <>{t("home.headline") || 'Technology Shaping the Future'}</>,
        subline: <>{t("home.subline") || 'Autonomous Systems and AI Team'}</>
    }

    const about = {
        label: t("nav.about") || { en: 'About', tr: 'Hakkımızda' },
        title: t("about.title") || { en: 'About AI2X', tr: 'AI2X Hakkında' },
        description: t("about.description") || { en: 'Meet the AI2X Team', tr: 'AI2X Takımı ile Tanışın' },
        tableOfContent: {
            display: true,
            subItems: false
        },
        avatar: {
            display: true
        },
        calendar: {
            display: false
        },
        intro: {
            display: true,
            title: t("about.intro.title") || { en: 'Who Are We?', tr: 'Biz Kimiz?' },
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: false
        },
        studies: {
            display: false
        },
        technical: {
            display: true,
            title: t("about.technical.title") || { en: 'Our Focus Areas', tr: 'Odak Alanlarımız' },
            skills: [
                {
                    title: t("about.technical.autonomous") || { en: 'Autonomous Systems', tr: 'Otonom Sistemler' },
                    description: <>{t("about.technical.autonomousDesc")}</>
                },
                {
                    title: t("about.technical.ai") || { en: 'Artificial Intelligence', tr: 'Yapay Zeka' },
                    description: <>{t("about.technical.aiDesc")}</>
                },
                {
                    title: t("about.technical.embedded") || { en: 'Embedded Systems', tr: 'Gömülü Sistemler' },
                    description: <>{t("about.technical.embeddedDesc")}</>
                }
            ]
        }
    }

    const blog = {
        label: t("nav.blog") || 'Blog',
        title: t("blog.title") || { en: 'Team Updates', tr: 'Takım Güncellemeleri' },
        description: t("blog.description") || { en: 'Latest news from AI2X', tr: 'AI2X\'ten son haberler' }
    }

    const work = {
        label: t("nav.work") || { en: 'Projects', tr: 'Projeler' },
        title: t("work.title") || { en: 'Our Projects', tr: 'Projelerimiz' },
        description: t("work.description") || { en: 'TEKNOFEST and competition projects', tr: 'TEKNOFEST ve yarışma projeleri' }
    }

    const gallery = {
        label: t("nav.gallery") || { en: 'Gallery', tr: 'Galeri' },
        title: t("gallery.title") || { en: 'Photo Gallery', tr: 'Fotoğraf Galerisi' },
        description: t("gallery.description") || { en: 'Moments from our journey', tr: 'Yolculuğumuzdan anlar' },
        images: [
            { src: '/images/gallery/01_img.jpeg', alt: 'Gallery Photo 1', orientation: 'horizontal' },
            { src: '/images/gallery/02_img.jpeg', alt: 'Gallery Photo 2', orientation: 'horizontal' },
            { src: '/images/gallery/03_img.jpeg', alt: 'Gallery Photo 3', orientation: 'horizontal' },
            { src: '/images/gallery/04_img.jpeg', alt: 'Gallery Photo 4', orientation: 'horizontal' },
            { src: '/images/gallery/05_img.jpeg', alt: 'Gallery Photo 5', orientation: 'horizontal' },
            { src: '/images/gallery/06_img.jpeg', alt: 'Gallery Photo 6', orientation: 'horizontal' },
            { src: '/images/gallery/07_img.jpeg', alt: 'Gallery Photo 7', orientation: 'horizontal' },
            { src: '/images/gallery/08_img.jpeg', alt: 'Gallery Photo 8', orientation: 'horizontal' },
            { src: '/images/gallery/09_img.jpeg', alt: 'Gallery Photo 9', orientation: 'horizontal' },
            { src: '/images/gallery/10_img.jpeg', alt: 'Gallery Photo 10', orientation: 'horizontal' },
            { src: '/images/gallery/11_img.jpeg', alt: 'Gallery Photo 11', orientation: 'horizontal' },
            { src: '/images/gallery/12_img.jpeg', alt: 'Gallery Photo 12', orientation: 'horizontal' },
            { src: '/images/gallery/13_img.jpeg', alt: 'Gallery Photo 13', orientation: 'horizontal' },
            { src: '/images/gallery/14_img.jpeg', alt: 'Gallery Photo 14', orientation: 'horizontal' },
            { src: '/images/gallery/15_img.jpeg', alt: 'Gallery Photo 15', orientation: 'horizontal' },
            { src: '/images/gallery/16_img.jpeg', alt: 'Gallery Photo 16', orientation: 'horizontal' },
            { src: '/images/gallery/17_img.jpeg', alt: 'Gallery Photo 17', orientation: 'horizontal' },
            { src: '/images/gallery/18_img.jpeg', alt: 'Gallery Photo 18', orientation: 'horizontal' },
            { src: '/images/gallery/19_img.jpeg', alt: 'Gallery Photo 19', orientation: 'horizontal' },
            { src: '/images/gallery/20_img.jpeg', alt: 'Gallery Photo 20', orientation: 'horizontal' },
        ]
    }

    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery,
        achievements,
        team,
        stats,
        projects
    }
};

export { createI18nContent };
