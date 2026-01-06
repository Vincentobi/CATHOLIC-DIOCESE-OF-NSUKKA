import church from '@/public/images/church_icon.png';
import menuBook from '@/public/images/menu_book_icon.png';
import diversity from '@/public/images/diversity_3_icon.png';
import school from '@/public/images/school_icon.png';
// import msgr_onoyima from '@public/images/msgr-Onoyima.jpg';
// import fr_abbah from '@public/images/Fr-Abbah.jpg';
// import fr_henry from '@public/images/Fr-Henry.jpg';
// import fr_love from '@public/images/Fr-Love.jpg';

export const quickResources = [
  { icon: church, title: 'Find a Parish', description: 'Locate a church near you for Mass and Confession times.', link: '/parishes' },
  { icon: menuBook, title: 'Daily Readings', description: 'Scripture readings and reflections for the day to guide your meditation.', link: '/mass-times' },
  { icon: diversity, title: 'Vocations', description: 'Guidance and resources for those answering the call to serve.', link: '/vocations' },
  { icon: school, title: 'Diocesan Schools', description: 'Quality education rooted in Catholic faith, values, and excellence.', link: '/schools' },
];

export const history = {
  para1: "The Catholic Diocese of Nsukka was canonically erected on November 19, 1990, by His Holiness Pope John Paul II. It was carved out of the old Enugu Diocese, marking a new dawn for evangelization in the Nsukka cultural zone.",

  para2: " The first Bishop, Most Rev. Dr. Francis Emmanuel Ogbonna Okobo, laid a solid foundation for the diocese, establishing parishes, schools, and hospitals to serve the growing population. Upon his retirement, Bishop Godfrey Onah took up the mantle, continuing the work of shepherding the flock towards holiness and societal progress.",

  para3: " Today, the Diocese stands as a pillar of faith in Enugu State, boasting a vibrant presbyterate, dedicated religious men and women, and an active lay faithful committed to the Gospel values."
}

export type DiocesanData = {
  profile: string;
  name: string;
  position: string;
};


export const diocese_curia: DiocesanData[] = [
  {
    profile: "/images/msgr-Onoyima.jpg",
    name: 'Msgr Thaddea Onoyima',
    position: 'Vicar General'
  },
  {
    profile: "/images/Fr-Abbah.jpg",
    name: 'Fr George Abbah',
    position: 'Vicar General'
  },
  {
    profile: "/images/Fr-Henry.jpg",
    name: 'Fr.Henry Chukwuebuka Attamah',
    position: 'Diocesan Secretary'
  },
  {
    profile: "/images/Fr.Love.jpg",
    name: 'Fr.Felix Uchenna Asogwa(Aka: Fr.Love)',
    position: 'Media Lead'
  }
]


export const departments = [
  {
    logo: 'account_balance',
    dept: 'Admin',
    title: 'The Chancery',
    description: 'The administrative center of the diocese handling official records, canonical matters and communication with the Holy See.',
    indicationLogo: 'location_on',
    indication: 'Diocesan Secetariat Nsukka',
    contactLogo: 'mail',
    contact: 'chancery@nsukkadiocese.org',
    keywords: ['law', 'canonical', 'archives', 'records', 'secretary', 'bishop', 'official']
  },
  {
    logo: 'school',
    dept: 'Education',
    title: 'Education',
    description: 'Responsible for the management, policy formulation, and standard assurance of all Catholic schools within the diocese.',
    indicationLogo: 'person',
    indication: 'Rev.fr Director',
    contactLogo: 'phone',
    contact: '07032222222',
    keywords: ['schools', 'training', 'admissions', 'teachers', 'principals', 'academic']
  },
  {
    logo: 'local_hospital',
    dept: 'Health',
    title: 'Health',
    description: 'Oversees the administration of diocesan hospitals, clinics, and outreach programs to ensure quality healthcare for all.',
    indicationLogo: 'location_on',
    indication: 'Bishop Shanahan Hospital',
    contactLogo: 'mail',
    contact: 'health@nsukkadiocese.org',
    keywords: ['hospital', 'clinic', 'doctor', 'nurse', 'medical', 'treatment', 'care']
  },
  {
    logo: 'balance',
    dept: 'Social',
    title: 'JDPC',
    description: 'Justice, Development, and Peace Caritas. Promoting social justice, human rights, and poverty alleviation in the community.',
    indicationLogo: 'event',
    indication: 'Legal Aid &amp; Advocacy',
    contactLogo: 'mail',
    contact: 'jdpc@nsukkadiocese.org',
    keywords: ['justice', 'peace', 'charity', 'legal', 'rights', 'development', 'advocacy', 'human rights', 'poverty']
  },
  {
    logo: 'diversity_3',
    dept: 'Pastoral',
    title: 'Laity Council',
    description: 'Coordinating the activities of the lay faithful, fostering unity, and mobilizing resources for diocesan projects.',
    indicationLogo: 'group',
    indication: 'CWO, CMO, CYON',
    contactLogo: 'phone',
    contact: '07032222222',
    keywords: ['cwo', 'cmo', 'cyon', 'women', 'men', 'youth', 'catholic women organization', 'catholic men organization']
  },
  {
    logo: 'auto_stories',
    dept: 'Pastoral',
    title: 'Liturgical Commision',
    description: 'Ensuring the proper celebration of the Mass and Sacraments, taining of liturgical ministers and promoting sacred music.',
    indicationLogo: 'music_note',
    indication: 'Choir &amp; Liturgical Ministers',
    contactLogo: 'phone',
    contact: '07032222222',
    keywords: ['mass', 'worship', 'choir', 'music', 'sacraments', 'liturgy', 'singing']
  },
]
