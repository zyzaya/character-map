export let Statistics = {
  strength_score: {
    visual: 'none',
    sources: [],
    affecting: ['strength_modifier'],
  },
  strength_modifier: {
    visual: 'none',
    sources: ['strength_score'],
    affecting: ['strength_save', 'athletics'],
  },
  strength_save: {
    visual: 'none',
    sources: ['strength_modifier', 'proficiency'],
    affecting: [],
  },
  athletics: {
    visual: 'none',
    sources: ['strength_modifier', 'proficiency'],
    affecting: [],
  },
  dexterity_score: {
    visual: 'none',
    sources: [],
    affecting: ['dexterity_modifier'],
  },
  dexterity_modifier: {
    visual: 'none',
    sources: ['dexterity_score'],
    affecting: ['acrobatics', 'sleight_of_hand', 'stealth'],
  },
  dexterity_save: {
    visual: 'none',
    sources: ['dexterity_modifier', 'proficiency'],
    affecting: [],
  },
  acrobatics: {
    visual: 'none',
    sources: ['dexterity_modifier', 'proficiency'],
    affecting: [],
  },
  sleight_of_hand: {
    visual: 'none',
    sources: ['dexterity_modifier', 'proficiency'],
    affecting: [],
  },
  stealth: {
    visual: 'none',
    sources: ['dexterity_modifier', 'proficiency'],
    affecting: [],
  },
  constitution_score: {
    visual: 'none',
    sources: [],
    affecting: ['constitution_modifier'],
  },
  constitution_modifier: {
    visual: 'none',
    sources: ['constitution_score'],
    affecting: ['constitution_save'],
  },
  constitution_save: {
    visual: 'none',
    sources: ['constitution_modifier', 'proficiency'],
    affecting: [],
  },
  intelligence_score: {
    visual: 'none',
    sources: ['intelligence_score'],
    affecting: ['intelligence_modifier'],
  },
  intelligence_modifier: {
    visual: 'none',
    sources: ['intelligence_score'],
    affecting: [
      'intelligence_save',
      'arcana',
      'history',
      'investigation',
      'nature',
      'religion',
    ],
  },
  intelligence_save: {
    visual: 'none',
    sources: ['intelligence_modifier', 'proficiency'],
    affecting: [],
  },
  arcana: {
    visual: 'none',
    sources: ['intelligence_modifier', 'proficiency'],
    affecting: [],
  },
  history: {
    visual: 'none',
    sources: ['intelligence_modifier', 'proficiency'],
    affecting: [],
  },
  investigation: {
    visual: 'none',
    sources: ['intelligence_modifier', 'proficiency'],
    affecting: [],
  },
  nature: {
    visual: 'none',
    sources: ['intelligence_modifier', 'proficiency'],
    affecting: [],
  },
  religion: {
    visual: 'none',
    sources: ['intelligence_modifier', 'proficiency'],
    affecting: [],
  },
  wisdom_score: {
    visual: 'none',
    sources: [],
    affecting: ['wisdom_modifier'],
  },
  wisdom_modifier: {
    visual: 'none',
    sources: ['wisdom_score'],
    affecting: [
      'wisdom_save',
      'animal_handling',
      'insight',
      'medicine',
      'perception',
      'survival',
    ],
  },
  wisdom_save: {
    visual: 'none',
    sources: ['wisdom_modifier'],
    affecting: [],
  },
  animal_handling: {
    visual: 'none',
    sources: ['wisdom_modifier', 'proficiency'],
    affecting: [],
  },
  insight: {
    visual: 'none',
    sources: ['wisdom_modifier', 'proficiency'],
    affecting: [],
  },
  medicine: {
    visual: 'none',
    sources: ['wisdom_modifier', 'proficiency'],
    affecting: [],
  },
  perception: {
    visual: 'none',
    sources: ['wisdom_modifier', 'proficiency'],
    affecting: [],
  },
  survival: {
    visual: 'none',
    sources: ['wisdom_modifier', 'proficiency'],
    affecting: [],
  },
  charisma_score: {
    visual: 'none',
    sources: [],
    affecting: ['charisma_modifier'],
  },
  charisma_modifier: {
    visual: 'none',
    sources: ['charisma_score'],
    affecting: [
      'charisma_save',
      'deception',
      'intimidation',
      'performance',
      'persuasion',
    ],
  },
  charisma_save: {
    visual: 'none',
    sources: ['charisma_modifier', 'proficiency'],
    affecting: [],
  },
  deception: {
    visual: 'none',
    sources: ['charisma_modifier', 'proficiency'],
    affecting: [],
  },
  intimidation: {
    visual: 'none',
    sources: ['charisma_modifier', 'proficiency'],
    affecting: [],
  },
  performance: {
    visual: 'none',
    sources: ['charisma_modifier', 'proficiency'],
    affecting: [],
  },
  persuasion: {
    visual: 'none',
    sources: ['charisma_modifier', 'proficiency'],
    affecting: [],
  },
};
