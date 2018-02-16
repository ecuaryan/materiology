export const tiRad = {
  'description': 'ACR TI-RADS',
  'characteristics': [
    {
      'description': 'Composition',
      'type': 'radio',
      'options': [
        {
          'description': 'Cystic or almost completely cystic',
          'points': 0
        },
        {
          'description': 'Spongiform',
          'note': 'Spongiform: Composed predominantly (>50%) of small cystic spaces. Do not add further points for other categories.',
          'points': 0,
          'break': true,
          'breakReasonTitle': 'Spongiform - STOP',
          'breakReasonContent': 'Do not add further points for other categories. TR1: Benign'
        },
        {
          'description': 'Mixed cystic and solid',
          'note': 'Mixed cystic and solid: Assign points for predominant solid component.',
          'points': 1
        },
        {
          'description': 'Solid or almost completely solid',
          'points': 2
        },
        {
          'description': 'Cannot be determined because of calcification.',
          'points': 2
        }
      ]
    },
    {
      'description': 'Echogenicity',
      'type': 'radio',
      'options': [
        {
          'description': 'Anechoic',
          'note': 'Anechoic: Applies to cystic or almost completely cystic nodules.',
          'points': 0
        },
        {
          'description': 'Hyperechoic or isoechoic',
          'note': 'Hyperechoic / isoechoic / hypoechoic: Compared to adjacent parenchyma.',
          'points': 1
        },
        {
          'description': 'Hypoechoic',
          'points': 2
        },
        {
          'description': 'Very hypoechoic',
          'note': 'Very hypoechoic: More hypoechoic than strap muscles.',
          'points': 3
        },
        {
          'description': 'Cannot be determined',
          'points': 1
        }
      ]
    },
    {
      'description': 'Shape',
      'type': 'radio',
      'options': [
        {
          'description': 'Wider-than-tall',
          'points': 0
        },
        {
          'description': 'Taller-than-wide',
          'note': 'Taller-than-wide: Should be assessed on a transverse image with measurements parallel to sound beam for height and perpendicular to sound beam for width.',
          'points': 3
        }
      ]
    },
    {
      'description': 'Margin',
      'type': 'radio',
      'options': [
        {
          'description': 'Smooth',
          'points': 0
        },
        {
          'description': 'Ill-defined',
          'points': 0
        },
        {
          'description': 'Lobulated or irregular',
          'note': 'Lobulated: Protrusions into adjacent tissue. Irregular: Jagged, spiculated, or sharp angles.',
          'points': 2
        },
        {
          'description': 'Extra-thyroidal extension',
          'note': 'Extrathyroidal extension: Obvious invasion = malignancy.',
          'points': 3
        },
        {
          'description': 'Cannot be determined',
          'points': 0
        }
      ]
    },
    {
      'description': 'Echogenic Foci',
      'type': 'checkbox',
      'options': [
        {
          'description': 'None or large comet-tail artifacts',
          'note': 'Large comet-tail artifacts: V-shaped, >1 mm, in cystic components.',
          'points': 0
        },
        {
          'description': 'Macrocalcifications',
          'note': 'Macrocalcifications: Cause acoustic shadowing.',
          'points': 1
        },
        {
          'description': 'Peripheral (rim) calcifications',
          'note': 'Peripheral: Complete or incomplete along margin.',
          'points': 2
        },
        {
          'description': 'Punctate echogenic foci',
          'note': 'Punctate echogenic foci: May have small comet-tail artifacts.',
          'points': 3
        }
      ]
    }
  ]
};
