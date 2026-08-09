import AppCon from '../assets/certificates/AppCon.jpg'
import IMCEST from '../assets/certificates/IMCEST.jpg'
import MongoDB from '../assets/certificates/MongoDB.jpg'
import Coursera1 from '../assets/certificates/Molina-Coursera1.jpg'
import Coursera2 from '../assets/certificates/Molina-Coursera2.jpg'
import Coursera3 from '../assets/certificates/Molina-Coursera3.jpg'
import Coursera4 from '../assets/certificates/Molina-Coursera4.jpg'
import Coursera5 from '../assets/certificates/Molina-Coursera5.jpg'
import CiscoJS1 from '../assets/certificates/JSEssentials1-Molina.jpg'
import CiscoJS2 from '../assets/certificates/JSEssentials2-Molina.jpg'
import CiscoPy1 from '../assets/certificates/PyEssentials1-Molina.jpg'
import CiscoPy2 from '../assets/certificates/PyEssentials2-Molina.jpg'
import Docker from '../assets/certificates/Docker-Certificate-Molina.jpg'
import DevOps from '../assets/certificates/DevOps-Micro-Molina.jpg'
import Microservices from '../assets/certificates/MicroServices-Molina.jpg'
import DOST from '../assets/certificates/DOST_Hack_Certif.jpg'

//Org's Logo
import Cisco from '../assets/icons/Cisco.png'
import Google from '../assets/icons/Google.webp'
import MongoDBLogo from '../assets/icons/mongodb.svg'
import TCULogo from '../assets/icons/TCU-logo.png'
import DockerLogo from '../assets/icons/docker.png'
import LinkedInLogo from '../assets/icons/linkedin.webp'
import DOSTLogo from '../assets/icons/dost.webp'


export const certificates = [
  {
    title: 'Code Green: Digital Solutions Hackathon for Circular Economy',
    issuer: 'Department of Science and Technology (Philippines)',
    date: 'August 2026',
    orgLogo: DOSTLogo,
    image: DOST,
    credentialUrl: 'https://www.facebook.com/dost.ncr',
    skills: ['Hackathon', 'Circular Economy', 'Digital Solutions']
  },
  {
    title: 'Microservices Foundations',
    issuer: 'LinkedIn',
    date: 'August 2026',
    orgLogo: LinkedInLogo,
    image: Microservices,
    credentialUrl: 'https://www.linkedin.com/learning/certificates/0ec6030db95b6889b6a5c36b1dff0ecd5ace6667c98a7796192158ef6e4c2aab?trk=share_certificate',
    skills: ['Microservices']
  },
  {
    title: 'DevOps Foundations: Microservices',
    issuer: 'LinkedIn',
    date: 'July 2026',
    orgLogo: LinkedInLogo,
    image: DevOps,
    credentialUrl: 'https://www.linkedin.com/learning/certificates/ed8e47c02c9769a3f4e55e215617ae9ba200037496a67582e34620fd5b44fb64?trk=share_certificate',
    skills: ['Microservices', 'DevOps']
  },
  {
    title: 'Docker Foundations Professional Certificate',
    issuer: 'Docker & LinkedIn',
    date: 'July 2026',
    orgLogo: DockerLogo,
    image: Docker,
    credentialUrl: 'https://www.linkedin.com/learning/certificates/7a49559a9c0a9c02fcc319d8152cb425d4841a36a307951dfc6d6f1bb7cf7121?trk=share_certificate',
    skills: ['Docker', 'Containers', 'Containerization']
  },
  {
    title: 'Python Essentials 2',
    issuer: 'Cisco',
    date: 'July 2026',
    orgLogo: Cisco,
    image: CiscoPy2,
    credentialUrl: 'https://www.credly.com/badges/0a2e4846-dad1-4f02-bd54-d65ed2e1267a/',
    skills: ['Python']
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco',
    date: 'July 2026',
    orgLogo: Cisco,
    image: CiscoPy1,
    credentialUrl: 'https://www.credly.com/badges/c1b50e37-b766-4446-9f61-8745a1e3bfd3/',
    skills: ['Python']
  },
  {
    title: 'JavaScript Essentials 2',
    issuer: 'Cisco',
    date: 'July 2026',
    orgLogo: Cisco,
    image: CiscoJS2,
    credentialUrl: 'https://www.credly.com/badges/6ea250da-4974-45b3-9304-fc98b12ee654/',
    skills: ['JavaScript']
  },
  {
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco',
    date: 'July 2026',
    orgLogo: Cisco,
    image: CiscoJS1,
    credentialUrl: 'https://www.credly.com/badges/51374848-5dee-4e60-a1b1-edaa28365b08/',
    skills: ['JavaScript']
  },
  {
    title: 'Agile Project Management',
    issuer: 'Google',
    date: 'July 2026',
    orgLogo: Google,
    image: Coursera5,
    credentialUrl: 'https://coursera.org/share/1084c7cd4824ab38b26d3f415a66eab6',
    skills: ['Agile Project Management', 'Backlogs', 'Agile Methodology', 'Team Building']
  },
  {
    title: 'Project Execution: Running the Project',
    issuer: 'Google',
    date: 'July 2026',
    orgLogo: Google,
    image: Coursera4,
    credentialUrl: 'https://coursera.org/share/acc8e0b82e68bdd918bb26117fefbcaa',
    skills: ['Product Quality (QA/QC)', 'Project Implementation', 'Quality Assessment', 'Project Closure']
  },
  {
    title: 'Project Planning: Putting It All Together',
    issuer: 'Google',
    date: 'July 2026',
    orgLogo: Google,
    image: Coursera3,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/U2EPHJHALMJU',
    skills: ['Document Management', 'Budget Management', 'Procurement', 'Project Risk Management']
  },
  {
    title: 'Project Initiation: Starting a Successful Project',
    issuer: 'Google',
    date: 'June 2026',
    orgLogo: Google,
    image: Coursera2,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/ABB11N0C8ZIF',
    skills: ['Stakeholder Management', 'Project Management', 'Scope Management', 'Project Documentation']
  },
  {
    title: 'Foundations of Project Management',
    issuer: 'Google',
    date: 'June 2026',
    orgLogo: Google,
    image: Coursera1,
    credentialUrl: 'https://coursera.org/share/cc80d642e85cb7d6fba3b43a24cfa211',
    skills: ['Organizational Structure', 'Strategic Thinking', 'Project Planning', 'Project Coordination']
  },
  {
    title: 'Monitoring MongoDB with Built-in Tools',
    issuer: 'MongoDB',
    date: 'May 2026',
    orgLogo: MongoDBLogo,
    image: MongoDB,
    credentialUrl: 'https://www.credly.com/badges/63a7360f-fa59-4211-9d0a-631ab60ee97f/public_url',
    skills: ['Monitoring', 'MongoDB']
  },
  {
    title: 'IMCEST Thesis Paper Presentation',
    issuer: 'IMCEST',
    date: 'November 2025',
    orgLogo: TCULogo,
    image: IMCEST,
    credentialUrl: 'https://www.facebook.com/TaguigCityUniversity',
    skills: ['Thesis Paper']
  },
  {
    title: 'AI & Development Webinar',
    issuer: 'OTIS Philippines Inc.',
    date: 'November 2024',
    image: AppCon,
    credentialUrl: 'https://www.facebook.com/OTisPhilippinesInc',
    skills: ['AI', 'Development']
  },
];