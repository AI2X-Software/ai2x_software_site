const person = {
    firstName: 'AI2X',
    lastName:  'Software',
    get name() {
        return `AI2X ${this.lastName}`;
    },
    role:      { en: 'Autonomous Systems and AI Team', tr: 'Otonom Sistemler ve Yapay Zeka Takımı' },
    avatar:    '/images/logo/ai2x-black.png',
    location:  '',        // IANA time zone identifier
    languages: []
}

const newsletter = {
    display: false,  // Disabled for now
    title: <>Subscribe to AI2X Newsletter</>,
    description: <>Latest updates on our autonomous systems, AI projects, and competition achievements.</>
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
    label: { en: 'Home', tr: 'Ana Sayfa' },
    title: { en: 'AI2X - Autonomous Systems and AI Team', tr: 'AI2X - Otonom Sistemler ve Yapay Zeka Takımı' },
    description: { en: 'Innovative student team developing autonomous systems, AI, and robotics projects', tr: 'Otonom sistemler, yapay zeka ve robotik projeleri geliştiren yenilikçi öğrenci takımı' },
    headline: <>Technology Shaping the Future</>,
    subline: <>Autonomous Systems and Artificial Intelligence Team.<br/>Innovative ideas, transformative solutions and engineers of the future.</>
}

const about = {
    label: { en: 'About', tr: 'Hakkımızda' },
    title: { en: 'About AI2X', tr: 'AI2X Hakkında' },
    description: { en: 'Meet the AI2X Team', tr: 'AI2X Takımı ile Tanışın' },
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
        title: { en: 'Who Are We?', tr: 'Biz Kimiz?' },
        description: <>AI2X is an innovative team of university students focused on technology and artificial intelligence. We represent our country in national and international competitions by developing projects in autonomous systems, artificial intelligence, and robotics.<br/><br/>Our team consists of students from different engineering disciplines and produces solutions to complex problems through interdisciplinary work.</>
    },
    work: {
        display: false,  // Using separate achievements page instead
    },
    studies: {
        display: false,
    },
    technical: {
        display: true,
        title: { en: 'Our Focus Areas', tr: 'Odak Alanlarımız' },
        skills: [
            {
                title: { en: 'Autonomous Systems', tr: 'Otonom Sistemler' },
                description: <>Developing groundbreaking autonomous systems in our Robotaxi and UAV projects.</>,
            },
            {
                title: { en: 'Artificial Intelligence', tr: 'Yapay Zeka' },
                description: <>Creating intelligent solutions with machine learning and deep learning.</>,
            },
            {
                title: { en: 'Embedded Systems', tr: 'Gömülü Sistemler' },
                description: <>Designing powerful solutions by combining hardware and software.</>,
            }
        ]
    }
}

const work = {
    label: { en: 'Projects', tr: 'Projeler' },
    title: { en: 'Our Projects', tr: 'Projelerimiz' },
    description: { en: 'TEKNOFEST and competition projects by AI2X', tr: 'AI2X TEKNOFEST ve yarışma projeleri' }
}

const gallery = {
    label: { en: 'Gallery', tr: 'Galeri' },
    title: { en: 'Photo Gallery', tr: 'Fotoğraf Galerisi' },
    description: { en: 'Moments from our journey', tr: 'Yolculuğumuzdan anlar' },
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

// New: Achievements data
const achievements = {
    label: { en: 'Achievements', tr: 'Başarılarımız' },
    title: { en: 'Our Achievements', tr: 'Başarılarımız' },
    description: { en: 'Competition awards and project achievements', tr: 'Yarışma ödülleri ve proje başarıları' },
    items: [
        {
            id: '5g-positioning-2025',
            icon: 'signal',
            badge: { en: '4th in Turkey', tr: 'Türkiye 4.\'sü' },
            title: { en: '5G Positioning Competition', tr: '5G Konumlandırma Yarışması' },
            description: { en: 'Successfully completed the field mission in the TEKNOFEST 5G Positioning Competition and achieved 4th place in Turkey.', tr: 'TEKNOFEST 5G Konumlandırma Yarışması\'nda saha görevini başarıyla tamamladık ve Türkiye 4.\'sü olduk.' },
            year: '2025'
        },
        {
            id: 'idef-2025',
            icon: 'presentation',
            badge: { en: 'Booth & Presentation', tr: 'Stand & Sunum' },
            title: { en: 'IDEF 2025 Defense Exhibition', tr: 'IDEF 2025 Savunma Fuarı' },
            description: { en: 'Successfully opened a booth and gave a presentation with our UAV project at the IDEF 2025 International Defense Industry Fair.', tr: 'IDEF 2025 Uluslararası Savunma Sanayii Fuarı\'nda İHA projemizle stand açma ve sunum yapma başarısı gösterdik.' },
            year: '2025'
        },
        {
            id: 'robotaksi-2024',
            icon: 'rocket',
            badge: { en: 'Finalist', tr: 'Finalist' },
            title: { en: 'Robotaxi Autonomous Vehicle Competition', tr: 'Robotaksi Binek Otonom Araç Yarışması' },
            description: { en: 'Achieved finalist status in Turkey\'s leading TEKNOFEST autonomous vehicle competition.', tr: 'Türkiye\'nin önde gelen TEKNOFEST otonom araç yarışmasında finalist derecesi elde ettik.' },
            year: '2024'
        },
        {
            id: 'virtual-tryon-2023',
            icon: 'cpu',
            badge: { en: 'Project Support', tr: 'Proje Desteği' },
            title: { en: 'Virtual Clothing Try-On System', tr: 'Sanal Giyim Deneme Sistemi' },
            description: { en: 'AI-powered clothing try-on project supported by the TÜBİTAK 2209-A program.', tr: 'TÜBİTAK 2209-A programı kapsamında desteklenen yapay zeka destekli giyim deneme projesi.' },
            year: '2023'
        },
        {
            id: 'venue-security-2024',
            icon: 'shield',
            badge: { en: 'Project Support', tr: 'Proje Desteği' },
            title: { en: 'AI-Powered Venue Security System', tr: 'Yapay Zeka Destekli Mekan Güvenlik Sistemi' },
            description: { en: 'Venue security solution supported by the TÜBİTAK 2209-A program.', tr: 'TÜBİTAK 2209-A programı kapsamında desteklenen mekan güvenlik çözümü.' },
            year: '2024'
        },
        {
            id: 'sayzek-datathon-2024',
            icon: 'trophy',
            badge: { en: 'Top 10', tr: 'İlk 10' },
            title: { en: 'Sayzek Datathon 2024', tr: 'Sayzek Datathon 2024' },
            description: { en: 'Reached the top 10 in Sayzek Datathon 2024 with our YOLOv5 model developed for object detection in satellite imagery.', tr: 'Uydu görüntülerinde nesne tanıma üzerine geliştirilen YOLOv5 modeliyle Sayzek Datathon 2024\'te ilk 10\'a girdik.' },
            year: '2024'
        }
    ]
}

// New: Team data
const team = {
    label: { en: 'Team', tr: 'Ekibimiz' },
    title: { en: 'Our Team', tr: 'Ekibimiz' },
    description: { en: 'Meet our talented team members', tr: 'Yetenekli ekip üyelerimizle tanışın' },
    members: [
        {
            id: 'mert-almali',
            name: 'Süleyman Mert Almalı',
            role: { en: 'Software Developer', tr: 'Yazılım Geliştirici' },
            bio: {
                en: 'Computer Engineering student at RTE University. Develops projects on computer vision, artificial intelligence, and autonomous driving systems, gaining practical experience as a TEKNOFEST Robotaxi finalist.',
                tr: 'RTE Üniversitesi Bilgisayar Mühendisliği öğrencisi. Bilgisayarla görme, yapay zeka ve otonom sürüş sistemleri üzerine projeler geliştirmekte, TEKNOFEST Robotaksi finalisti olarak uygulamalı deneyim kazanmıştır.'
            },
            avatar: '/images/team/mert.jpg',
            skills: { en: ['Autonomous Driving', 'Computer Vision', 'Python'], tr: ['Otonom Sürüş', 'Görüntü İşleme', 'Python'] },
            social: {
                linkedIn: 'https://www.linkedin.com/in/suleyman-mert-almali/',
                github: 'https://github.com/Mertalmali4/'
            }
        },
        {
            id: 'gokay-dervisoglu',
            name: 'Gökay Dervişoğlu',
            role: { en: 'Software Developer', tr: 'Yazılım Geliştirici' },
            bio: {
                en: 'Computer Engineering student at RTE University. Focused on web and mobile development, with experience in building efficient, scalable software solutions and a strong foundation in AI and computer vision.',
                tr: 'RTE Üniversitesi Bilgisayar Mühendisliği öğrencisi. Verimli ve ölçeklenebilir yazılım çözümleri geliştirme deneyimine sahip, web ve mobil geliştirmeye odaklı, yapay zeka ve bilgisayarlı görü alanlarında güçlü bir temele sahiptir.'
            },
            avatar: '/images/team/gokay.jpg',
            skills: { en: ['Web Development', 'Mobile Development', 'AI & Computer Vision'], tr: ['Web Geliştirme', 'Mobil Geliştirme', 'Yapay Zeka ve Bilgisayarlı Görü'] },
            social: {
                linkedIn: 'https://www.linkedin.com/in/gokaydervisoglu/',
                github: 'https://github.com/gokaydervisoglu/'
            }
        },
        {
            id: 'mehmetali-gumusler',
            name: 'Mehmet Ali Gümüşler',
            role: { en: 'Software Developer', tr: 'Yazılım Geliştirici' },
            bio: {
                en: 'Computer Engineering student at RTE University. Develops computer vision and AI projects for the defense industry. Has works supported by TÜBİTAK and TEKNOFEST.',
                tr: 'RTE Üniversitesi Bilgisayar Mühendisliği öğrencisi. Savunma sanayisine yönelik görüntü işleme ve yapay zeka projeleri geliştirmektedir. TÜBİTAK ve TEKNOFEST destekli çalışmaları bulunmaktadır.'
            },
            avatar: '/images/team/mehmetali.jpg',
            skills: { en: ['Deep Learning', 'Computer Vision', 'Algorithms'], tr: ['Derin Öğrenme', 'Görüntü İşleme', 'Algoritmalar'] },
            social: {
                linkedIn: 'https://www.linkedin.com/in/mehmetaligumusler/',
                github: 'https://github.com/mehmetaligumusler/'
            }
        },
        {
            id: 'eray-burak-cakir',
            name: 'Eray Burak Çakır',
            role: { en: 'Software Developer', tr: 'Yazılım Geliştirici' },
            bio: {
                en: 'Computer Engineering student at RTE University. Develops autonomous systems with tools like ROS, Gazebo, TensorFlow, and PyTorch; takes an active role in face recognition, object detection, and simulation-based projects.',
                tr: 'RTE Üniversitesi Bilgisayar Mühendisliği öğrencisi. ROS, Gazebo, TensorFlow ve PyTorch gibi araçlarla otonom sistemler geliştirmekte; yüz tanıma, nesne tespiti ve simülasyon tabanlı projelerde aktif rol almaktadır.'
            },
            avatar: '/images/team/eray.jpg',
            skills: { en: ['Autonomous Systems', 'Simulation', 'Python'], tr: ['Otonom Sistemler', 'Simülasyon', 'Python'] },
            social: {
                linkedIn: 'https://www.linkedin.com/in/eray-burak-cakir/',
                github: 'https://github.com/cakirerayburak/'
            }
        },
        {
            id: 'ali-emre',
            name: 'Ali Emre',
            role: { en: 'Software Developer', tr: 'Yazılım Geliştirici' },
            bio: {
                en: 'Computer Engineering student at RTE University. Led web technologies, machine learning, and NLP projects; developed socially beneficial software within TÜBİTAK and Teknofest frameworks.',
                tr: 'RTE Üniversitesi Bilgisayar Mühendisliği öğrencisi. Web teknolojileri, makine öğrenimi ve doğal dil işleme projelerinde liderlik yapmış; TÜBİTAK ve Teknofest kapsamında toplumsal faydaya odaklı yazılımlar geliştirmiştir.'
            },
            avatar: '/images/team/ali.jpg',
            skills: { en: ['Web Development', 'NLP', 'Project Management'], tr: ['Web Geliştirme', 'Doğal Dil İşleme', 'Proje Yönetimi'] },
            social: {
                linkedIn: 'https://www.linkedin.com/in/ali-emre/',
                github: 'https://github.com/Aliemree/'
            }
        }
    ]
}

// New: Projects data
const projects = {
    label: { en: 'Projects', tr: 'Projeler' },
    title: { en: 'Our Projects', tr: 'Projelerimiz' },
    description: { en: 'Innovative projects in autonomous systems, defense technology, and artificial intelligence', tr: 'Otonom sistemler, savunma teknolojileri ve yapay zeka alanındaki yenilikçi projelerimiz' },
    items: [
        {
            id: '5g-deployment',
            icon: 'signal',
            badges: [
                { en: 'TEKNOFEST', tr: 'TEKNOFEST' },
                { en: '4th in Turkey', tr: 'Türkiye 4.' }
            ],
            title: { en: '5G Deployment', tr: '5G Konumlandırma' },
            description: { en: 'Advanced 5G positioning and localization technologies for TEKNOFEST competition. Successfully completed field mission and achieved 4th place in Turkey.', tr: 'TEKNOFEST yarışması için gelişmiş 5G konumlandırma ve lokalizasyon teknolojileri. Saha görevini başarıyla tamamlayarak Türkiye 4.sü olduk.' },
            year: '2025',
            status: { en: 'Completed', tr: 'Tamamlandı' },
            tags: ['5G', 'IoT', 'TEKNOFEST'],
            images: [
                { src: '/images/projects/5g/01_5G.jpeg', alt: '5G Deployment Project 1' },
                { src: '/images/projects/5g/02_5G.jpeg', alt: '5G Deployment Project 2' },
                { src: '/images/projects/5g/03_5G.jpeg', alt: '5G Deployment Project 3' },
                { src: '/images/projects/5g/04_5G.jpeg', alt: '5G Deployment Project 4' }
            ]
        },
        {
            id: 'air-defense-systems',
            icon: 'shield',
            badges: [
                { en: 'TEKNOFEST', tr: 'TEKNOFEST' }
            ],
            title: { en: 'Air Defense Systems', tr: 'Hava Savunma Sistemleri' },
            description: { en: 'Autonomous air defense systems with computer vision and machine learning for target detection and tracking.', tr: 'Hedef tespiti ve takibi için görüntü işleme ve makine öğrenimi kullanan otonom hava savunma sistemleri.' },
            year: '2025',
            status: { en: 'Completed', tr: 'Tamamlandı' },
            tags: ['Defense', 'AI', 'TEKNOFEST'],
            images: [
                { src: '/images/projects/air-defense/01_air_defense.jpeg', alt: 'Air Defense Systems 1' },
                { src: '/images/projects/air-defense/02_air_defense.jpeg', alt: 'Air Defense Systems 2' },
                { src: '/images/projects/air-defense/03_air_defense.jpeg', alt: 'Air Defense Systems 3' },
                { src: '/images/projects/air-defense/04_air_defense.jpeg', alt: 'Air Defense Systems 4' }
            ]
        },
        {
            id: 'international-uav',
            icon: 'rocket',
            badges: [
                { en: 'TEKNOFEST', tr: 'TEKNOFEST' }
            ],
            title: { en: 'International UAV Competition', tr: 'Uluslararası İHA Yarışması' },
            description: { en: 'High-performance unmanned aerial vehicle with advanced autonomous flight systems and real-time decision making capabilities.', tr: 'Gelişmiş otonom uçuş sistemleri ve gerçek zamanlı karar verme yeteneklerine sahip yüksek performanslı insansız hava aracı.' },
            year: '2025',
            status: { en: 'Completed', tr: 'Tamamlandı' },
            tags: ['UAV', 'Autonomous', 'TEKNOFEST'],
            images: [
                { src: '/images/projects/uav/01_uav.jpeg', alt: 'UAV Project 1' },
                { src: '/images/projects/uav/02_uav.jpeg', alt: 'UAV Project 2' },
                { src: '/images/projects/uav/03_uav.jpeg', alt: 'UAV Project 3' },
                { src: '/images/projects/uav/04_uav.jpeg', alt: 'UAV Project 4' },
                { src: '/images/projects/uav/05_uav.jpeg', alt: 'UAV Project 5' },
                { src: '/images/projects/uav/06_uav.jpeg', alt: 'UAV Project 6' }
            ]
        },
        {
            id: 'ai-in-aviation',
            icon: 'cpu',
            badges: [
                { en: 'TEKNOFEST', tr: 'TEKNOFEST' }
            ],
            title: { en: 'AI in Aviation', tr: 'Havacılıkta Yapay Zeka' },
            description: { en: 'Machine learning models for flight optimization, predictive maintenance, and aviation operations enhancement.', tr: 'Uçuş optimizasyonu, kestirimci bakım ve havacılık operasyonlarını geliştirmek için makine öğrenimi modelleri.' },
            year: '2025',
            status: { en: 'Completed', tr: 'Tamamlandı' },
            tags: ['AI', 'Aviation', 'TEKNOFEST'],
            images: [
                { src: '/images/projects/ai-aviation/01_ai.jpeg', alt: 'AI in Aviation 1' },
                { src: '/images/projects/ai-aviation/02_ai.jpeg', alt: 'AI in Aviation 2' }
            ]
        }
    ]
}

// New: Stats data
const stats = {
    display: true,
    items: [
        { value: '10+', label: { en: 'Projects', tr: 'Proje' } },
        { value: '5+', label: { en: 'Team Members', tr: 'Ekip Üyesi' } },
        { value: '3+', label: { en: 'TEKNOFEST Competitions', tr: 'Teknofest Yarışması' } }
    ]
}

export { person, social, newsletter, home, about, work, gallery, achievements, team, stats, projects };
