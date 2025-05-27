import reactLogo from '../assets/logos/physics.png';
import jsLogo from '../assets/logos/js.png';
import csharpLogo from '../assets/logos/c-sharp.png';
import agileLogo from '../assets/logos/agile-methodology.png';
import tsLogo from '../assets/logos/typescript.png';
import nodejsLogo from '../assets/logos/nodejs.png';
import htmlLogo from '../assets/logos/html.png';
import cssLogo from '../assets/logos/css-3.png';

export interface Skill {
  name: string;
  value: number;
  logo: string;
}

export const portfolioData = [
  {
    skills: [
      { name: "React", value: 90, logo: reactLogo },
      { name: "JavaScript", value: 90, logo: jsLogo },
      { name: "TypeScript", value: 75, logo: tsLogo },
      { name: "C#", value: 55, logo: csharpLogo },
      { name: "Agile Methodology", value: 65, logo: agileLogo },
      { name: "NodeJS", value: 70, logo: nodejsLogo },
      { name: "CSS", value: 85, logo: cssLogo },
      { name: "HTML", value: 90, logo: htmlLogo},
    ],
  },
];