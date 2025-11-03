// src/data/coursesData.jsx
import firstaidHero from "../assets/firstaid_hero.png";
import firefightingHero from "../assets/firefighting_hero.png";
import sheHero from "../assets/she_hero.png";

export const coursesData = {
  firstAid: [
    {
      id: 'first-aid-1',
      title: 'First Aid Level 1',
      duration: '2 Days',
      price: 'R1,200',
      level: 'Beginner',
      image: firstaidHero,
      badge: 'Accredited',
      description: 'Learn critical skills that empower you to respond effectively in emergency situations.',
      admissionRequirements: 'Basic literacy',
      chapters: [
        'Principles of Emergency Care and Ethics',
        'Safety and Emergency Scene Management',
        'Patient Assessment',
        'Artificial Respirations',
        'One Man CPR',
        'Airway Obstruction',
        'Wounds & Bleeding',
        'Shock',
        'Unconsciousness & Fainting',
        'Burns',
        'Fractures & Splinting',
        'Head and Spine Injury'
      ],
      outcomes: 'Learn critical skills that empower you to respond effectively in emergencies and contribute to workplace safety.',
      certificate: 'Upon successful completion, a nationally recognized certificate will be issued.'
    },
    {
      id: 'first-aid-2',
      title: 'First Aid Level 2',
      duration: '3 Days',
      price: 'R1,500',
      level: 'Intermediate',
      image: firstaidHero,
      badge: 'Accredited',
      description: 'Strengthen your emergency response skills and deepen your first aid knowledge.',
      admissionRequirements: 'Basic literacy + Level 1 certificate',
      chapters: [
        'Revision of Level 1',
        'Additional CPR Techniques',
        'Medical Conditions',
        'Environmental Emergencies',
        'Child & Infant First Aid',
        'Triage Principles'
      ],
      outcomes: 'Strengthen your emergency response skills and deepen your first aid knowledge.',
      certificate: 'Upon successful completion, a nationally recognized certificate will be issued.'
    },
    {
      id: 'first-aid-3',
      title: 'First Aid Level 3',
      duration: '4 Days',
      price: 'R2,000',
      level: 'Advanced',
      image: firstaidHero,
      badge: 'Accredited',
      description: 'Become highly proficient in emergency medical response, suitable for workplace and high-risk environments.',
      admissionRequirements: 'Level 2 certificate',
      chapters: [
        'Revision of Level 2',
        'Advanced Patient Assessment',
        'Emergency Childbirth',
        'Rescue Techniques',
        'Advanced CPR & AED Use',
        'Multiple Casualty Management',
        'Practical Scenarios & Evaluation'
      ],
      outcomes: 'Become highly proficient in emergency medical response, suitable for workplace and high-risk environments.',
      certificate: 'Upon successful completion, a nationally recognized certificate will be issued.'
    }
  ],
  fireFighting: [
    {
      id: 'basic-fire-fighting',
      title: 'Basic Fire Fighting',
      duration: '1 Day',
      price: 'R1,000',
      level: 'Beginner',
      image: firefightingHero,
      badge: 'Accredited',
      description: 'Essential fire safety skills for immediate response to fire emergencies.',
      admissionRequirements: 'None',
      chapters: [
        'Fire Triangle & Classes of Fire',
        'Fire Extinguishers & Equipment',
        'Emergency Evacuation Procedures',
        'Fire Prevention Techniques',
        'Types of Fire and Extinguishers',
        'Proper Use of Fire Extinguishers'
      ],
      outcomes: 'Gain essential skills to prevent and respond to fire emergencies in any environment.',
      certificate: 'Upon successful completion, a nationally recognized certificate will be issued.'
    }
  ],
  occupationalSafety: [
    {
      id: 'she-rep',
      title: 'SHE Representative Training',
      duration: '3 Days',
      price: 'R1,800',
      level: 'Intermediate',
      image: sheHero,
      badge: 'Accredited',
      description: 'Comprehensive training for Safety, Health & Environmental representatives.',
      admissionRequirements: 'None',
      chapters: [
        'Occupational Health & Safety Act',
        'Risk Assessment and Management',
        'Incident Investigation',
        'Safety Committee Functions',
        'Legal Responsibilities',
        'Health & Safety Committees',
        'Hazard Identification',
        'Reporting Procedures'
      ],
      outcomes: 'Learn to promote safety and prevent hazards in any work environment.',
      certificate: 'Upon successful completion, a nationally recognized certificate will be issued.'
    },
    {
      id: 'health-safety-rep',
      title: 'Health & Safety Representative',
      duration: '1 Day',
      price: 'R1,000',
      level: 'Beginner',
      image: sheHero,
      badge: 'Accredited',
      description: 'Essential training for workplace health and safety representatives.',
      admissionRequirements: 'None',
      chapters: [
        'OHS Act Overview',
        'Roles & Responsibilities',
        'Incident Reporting',
        'Safety Inspections'
      ],
      outcomes: 'Gain practical knowledge to protect lives and ensure compliance at your workplace.',
      certificate: 'Upon successful completion, a nationally recognized certificate will be issued.'
    },
    {
      id: 'incident-investigation',
      title: 'Incident Investigation',
      duration: '2 Days',
      price: 'R1,500',
      level: 'Intermediate',
      image: sheHero,
      badge: 'Accredited',
      description: 'Learn to identify, analyze and prevent workplace incidents.',
      admissionRequirements: 'Basic understanding of workplace operations',
      chapters: [
        'Incident Scene Management',
        'Interviewing Witnesses',
        'Root Cause Analysis',
        'Corrective & Preventative Actions'
      ],
      outcomes: 'Be equipped to identify, analyze and prevent workplace incidents.',
      certificate: 'Upon successful completion, a nationally recognized certificate will be issued.'
    },
    {
      id: 'health-safety-induction',
      title: 'Health & Safety Induction',
      duration: '1 Day',
      price: 'R1,000',
      level: 'Beginner',
      image: sheHero,
      badge: 'Accredited',
      description: 'Essential workplace safety induction training.',
      admissionRequirements: 'None',
      chapters: [
        'Workplace Safety Basics',
        'Hazard Recognition',
        'Emergency Procedures',
        'Personal Protective Equipment'
      ],
      outcomes: 'Understand fundamental workplace safety principles and procedures.',
      certificate: 'Upon successful completion, a nationally recognized certificate will be issued.'
    }
  ]
};
