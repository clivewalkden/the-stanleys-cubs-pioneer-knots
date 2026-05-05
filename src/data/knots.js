export const knots = [
  {
    id: 'overhand',
    name: 'Overhand Knot',
    youtubeId: 'I0ShGbIR0ZI',
    ease: 'Easy',
    priority: null,
    use: 'The simplest of all knots. Used as a stopper knot to prevent a rope end from slipping through a hole or another knot. It is also the foundation for many other knots.',
    steps: [
      'Make a loop in the rope',
      'Pass the working end through the loop',
      'Pull both ends to tighten',
    ],
    tip: 'This is the knot you already know — it is the first half of tying your shoelaces!',
  },
  {
    id: 'figure-of-8',
    name: 'Figure of 8 Knot',
    youtubeId: 'EtzeIQjcKEs',
    ease: 'Easy',
    priority: null,
    use: 'A stronger stopper knot than the overhand. Widely used in climbing and sailing to stop a rope from running through a block or belay device. Easy to untie even after loading.',
    steps: [
      'Make a loop, crossing the working end over the standing part',
      'Bring the working end under and around the standing part',
      'Pass the working end down through the original loop',
      'Pull tight — it should look like a figure 8',
    ],
    tip: 'Count the crossings as you go — there should be exactly two.',
  },
  {
    id: 'reef',
    name: 'Reef Knot',
    youtubeId: '0Y_iorha2k4',
    ease: 'Easy',
    priority: 'ALL CUBS',
    use: 'Joins two rope ends of the same thickness together. Used in sailing to reef sails, in first aid to tie bandages, and in everyday life for tying parcels. Remember: left over right, then right over left.',
    steps: [
      'Hold one end in each hand',
      'Cross left end over right and tuck underneath (half knot)',
      'Cross right end over left and tuck underneath (second half knot)',
      'Pull both ends to tighten — the knot should sit flat',
    ],
    tip: 'Memory trick: "Left over right and under, right over left and under." If it looks like a granny knot it is wrong!',
  },
  {
    id: 'clove-hitch',
    name: 'Clove Hitch',
    youtubeId: 'pwdZTHu5rTI',
    ease: 'Medium',
    priority: null,
    use: 'Attaches a rope to a pole, post, or bar. Quick to tie and adjust. Used in pioneering projects, lashing, and starting lashings. Can loosen under alternating load so best for temporary use.',
    steps: [
      'Wrap the rope around the pole',
      'Cross the working end over the standing part and wrap around again',
      'Pass the working end under the last wrap (between the rope and the pole)',
      'Pull both ends to tighten',
    ],
    tip: 'Think of it as two half-hitches in the same direction around the pole.',
  },
  {
    id: 'round-turn',
    name: 'Round Turn & Two Half-Hitches',
    youtubeId: 'FqxESYQWTdQ',
    ease: 'Medium',
    priority: null,
    use: 'One of the most reliable knots for securing a rope to a post, ring, or rail. The round turn takes the strain while you tie the hitches, making it safe under load. Used for mooring boats and anchoring lines.',
    steps: [
      'Pass the rope around the post twice (the "round turn")',
      'Cross the working end over the standing part and through the loop (first half-hitch)',
      'Repeat with a second half-hitch in the same direction',
      'Pull snug — the two half-hitches grip together',
    ],
    tip: 'The round turn does the work — do not skip it! The two half-hitches just lock it off.',
  },
  {
    id: 'bowline',
    name: 'Bowline Knot',
    youtubeId: 'YXRnPES0Qec',
    ease: 'Medium',
    priority: 'SIXERS',
    use: 'Creates a fixed loop that will not slip or tighten under load, and is easy to untie afterwards. Used in rescue, sailing, climbing, and the "Save the Sixer" game tonight. Often called the King of Knots.',
    steps: [
      'Make a small loop in the standing part (the "rabbit hole")',
      'Bring the working end up through the loop from underneath (the rabbit comes up)',
      'Pass the working end around behind the standing part (the rabbit goes around the tree)',
      'Bring the working end back down through the small loop (the rabbit goes back in the hole)',
      'Hold the loop and pull the standing part to tighten',
    ],
    tip: 'Story: "The rabbit comes up through the hole, goes around the tree, and back down the hole." Practice until it feels natural!',
  },
]

export const easeConfig = {
  Easy: { label: 'Easy', color: 'bg-green-100 text-green-800 border-green-300' },
  Medium: { label: 'Medium', color: 'bg-amber-100 text-amber-800 border-amber-300' },
  Hard: { label: 'Hard', color: 'bg-red-100 text-red-800 border-red-300' },
}

export const priorityConfig = {
  'ALL CUBS': { color: 'bg-[#00a650] text-white', icon: '★' },
  'SIXERS': { color: 'bg-[#7b2d8b] text-white', icon: '★★' },
}
