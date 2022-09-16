export let Armors = {
  none: {
    name: 'No armor',
    base: 10,
    dex: true,
  },
  light: {
    padded: {
      name: 'Padded',
      base: 11,
      dex: true,
      stealth_disadvantage: true,
    },
    leather: {
      name: 'Leather',
      base: 11,
      dex: true,
    },
    studded: {
      name: 'Studded Leather',
      base: 12,
      dex: true,
    },
  },
  medium: {
    hide: {
      name: 'Hide',
      base: 12,
      dex: 2,
    },
    chain: {
      name: 'Chain Shirt',
      base: 13,
      dex: 2,
    },
    scale: {
      name: 'Scale Mail',
      base: 14,
      dex: 2,
      stealth_disadvantage: true,
    },
    breastplate: {
      name: 'Breastplate',
      base: 14,
      dex: 2,
    },
    half: {
      name: 'Half Plate',
      base: 15,
      dex: 2,
      stealth_disadvantage: true,
    },
  },
  heavy: {
    ring: {
      name: 'Ring Mail',
      base: 14,
      stealth_disadvantage: true,
    },
    chain: {
      name: 'Chain Mail',
      base: 16,
      strength_min: 13,
      stealth_disadvantage: true,
    },
    splint: {
      name: 'Splint',
      base: 17,
      strength_min: 15,
      stealth_disadvantage: true,
    },
    plate: {
      name: 'Plate',
      base: 18,
      strength_min: 15,
      stealth_disadvantage: true,
    },
  },
};
