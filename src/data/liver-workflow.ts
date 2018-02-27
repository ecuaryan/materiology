export const LIVER_WORKFLOW = {
  title: 'LIVER',
  subtitle: 'Follow the incidental liver mass algorithm to determine the appropriate ACR White Paper recommendation.',
  options: [
    {
      id: 1,
      prompt: 'Incidental liver mass detected on CT',
      linkOptionIds: [2, 3, 4],
    },
    {
      id: 2,
      prompt: '<1 cm',
      linkOptionIds: [5, 6]
    },
    {
      id: 3,
      prompt: '1.0 - 1.5 cm',
      linkOptionIds: [7, 8, 9, 19]
    },
    {
      id: 4,
      prompt: '>1.5 cm',
      linkOptionIds: [7, 10, 19]
    },
    {
      id: 5,
      prompt: 'Low-risk patient',
      noteIds: [2],
      linkOptionIds: [11]
    },
    {
      id: 6,
      prompt: 'High-risk patient',
      noteIds: [3],
      linkOptionIds: [12]
    },
    {
      id: 7,
      prompt: 'Benign imaging features',
      noteIds: [5],
      linkOptionIds: [11]
    },
    {
      id: 8,
      prompt: 'Suspicious imaging features',
      noteIds: [6],
      linkOptionIds: [13]
    },
    {
      id: 9,
      prompt: '"Flash-filling" imaging feature',
      noteIds: [7],
      linkOptionIds: [5, 16]
    },
    {
      id: 10,
      noteIds: [6, 7],
      prompt: 'Suspicious or "Flash-filling" imaging features',
      linkOptionIds: [15, 17]
    },
    {
      id: 11,
      prompt: 'Benign, no further follow-up'
    },
    {
      id: 12,
      noteIds: [4],
      prompt: 'Follow-up MRI in 3-6 months'
    },
    {
      id: 13,
      prompt: 'Hepatic MRI now'
    },
    {
      id: 14,
      noteIds: [8, 9],
      prompt: 'Hepatic MRI now or biopsy'
    },
    {
      id: 15,
      prompt: 'Low-risk patient',
      noteIds: [2],
      linkOptionIds: [18]
    },
    {
      id: 16,
      prompt: 'High-risk patient',
      noteIds: [3],
      linkOptionIds: [13]
    },
    {
      id: 17,
      prompt: 'High-risk patient',
      noteIds: [3],
      linkOptionIds: [14]
    },
    {
      id: 18,
      noteIds: [8],
      prompt: 'Hepatic MRI now'
    },
    {
      id: 19,
      noteIds: [1],
      prompt: 'Indeterminate imaging features',
      linkOptionIds: [13]
    }
  ]
};


export const LIVER_WORKFLOW_NOTES = [
  {
    id: 1,
    body: 'If inadequate imaging is available to ascertain the presence of benign versus suspicious features in a ≥1-cm lesion, prompt MRI is advised.'
  },
  {
    id: 2,
    body: '<p>No known primary malignancy, hepatic dysfunction, or hepatic risk factors.</p><p>Hepatic Risk Factors:</p><div>Hepatitis</div><div>NASH</div><div>Alcoholism</div><div>PSC</div><div>PBC</div><div>Choledochal cysts</div><div>Hemochromatosis and other hereditary hepatic conditions</div><div>Anabolic steroid use</div>'
  },
  {
    id: 3,
    body: '<p>Known primary malignancy with a propensity to metastasize to the liver, cirrhosis, and/or hepatic risk factors.</p><p>Hepatic Risk Factors:</p><div>Hepatitis</div><div>NASH</div><div>Alcoholism</div><div>PSC</div><div>PBC</div><div>Choledochal cysts</div><div>Hemochromatosis and other hereditary hepatic conditions</div><div>Anabolic steroid use</div>'
  },
  {
    id: 4,
    body: 'May need more immediate follow-up in some scenarios. CT is also acceptable in a patient with cancer who is due for routine CT surveillance.'
  },
  {
    id: 5,
    body: '<p>Sharp margin, homogeneous low attenuation (20 Hounsfield units [HU]) on noncontrast and/or portal venous–phase imaging.</p><p>Characteristic features of hemangiomas, focal nodular hyperplasia, focal fatty sparing or deposition, or perfusional changes.</p><p>If pseudoenhancement is present, a benign cyst may measure >20 HU; radiologists\' discretion is necessary.</p>'
  },
  {
    id: 6,
    title: 'Suspicious Features',
    body: '<p>Ill-defined margins, heterogeneous density, mural thickening or nodularity, thick septa, and intermediate to high attenuation on portal venous–phase imaging (>20 HU, in the absence of pseudoenhancement).</p><p>If pre and postcontrast CT is available, enhancement >20 HU is a suspicious feature.</p>'
  },
  {
    id: 7,
    title: 'Flash-filling',
    body: '<p>Uniform hyperenhancement relative to hepatic parenchyma on arterial-phase (including late arterial/early portal venous–phase) postcontrast imaging.</p><p>If additional postcontrast phases are available to characterize lesion as benign (eg, hemangioma) or suspicious (eg, hepatocellular carcinoma), the lesion should be placed in one of those respective categories and not here.</p>'
  },
  {
    id: 8,
    body: '<p>Incidental hepatic lesions that are >1.5 cm and do not have benign features should at least undergo prompt MRI. Direct biopsy (without MRI) may be appropriate in some scenarios.</p><p>Differentiation of FNH from adenoma is important, especially if larger than 3 cm and subcapsular in location; for such patients, MRI with gadoxetate disodium is advised.</p>'
  },
  {
    id: 9,
    body: 'If biopsy is pursued, core biopsy is preferred over fine-needle aspiration.'
  },
];
