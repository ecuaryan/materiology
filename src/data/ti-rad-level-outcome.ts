export const tiRadLevelOutcome = {
  'TR1' : {
    'description': 'TR1',
    'recommendation': 'Benign',
    'notes': ['No FNA']
  },
  'TR2' : {
    'description': 'TR2',
    'recommendation': 'Not Suspicious',
    'notes': ['No FNA']
  },
  'TR3' : {
    'description': 'TR3',
    'recommendation': 'Mildly Suspicious',
    'notes': [
      'FNA if ≥ 2.5 cm',
      'Follow if ≥ 1.5 cm (1, 3, and 5 years)'
    ]
  },
  'TR4' : {
    'description': 'TR4',
    'recommendation': 'Moderately Suspicious',
    'notes': [
      'FNA if ≥ 1.5 cm',
      'Follow if ≥ 1 cm (q1y x 3 and at 5 years)'
    ]
  },
  'TR5' : {
    'description': 'TR5',
    'recommendation': 'Highly Suspicious',
    'notes': [
      'FNA if ≥ 1 cm',
      'Follow if ≥ 0.5 cm* (q1y x 5)',
      '*The ACR TI-RADS is concordant with other guidelines in recommending against routine biopsy of nodules smaller than 1 cm, even if they are highly suspicious. However, because some thyroid specialists advocate active surveillance, ablation, or lobectomy for papillary microcarcinomas, biopsy of 5- to 9-mm TR5 nodules may be appropriate under certain circumstances. The determination to perform FNA will involve shared decision making between the referring physician and the patient.'
    ],
  }
};
