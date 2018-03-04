import { WorkflowComponent } from '../app/workflow.component';

export const ADRENAL_ROOT_PATH = 'adrenal';
export const ADRENAL_VIEW_TEXT = 'ADRENAL';

export const ADRENAL_WORKFLOW = {
  title: ADRENAL_VIEW_TEXT,
  subtitle: 'Follow the adrenal mass algorithm to determine the appropriate ACR White Paper recommendation.',
  rootPath: ADRENAL_ROOT_PATH,
  defaultId: 35,
  options: [
    {
      id: 1,
      prompt: 'Incidental Adrenal Mass Detected on CT or MR',
      linkOptionIds: [2, 3]
    },
    {
      id: 2,
      prompt: '<1cm',
      linkOptionIds: [4]
    },
    {
      id: 3,
      prompt: '≥1cm',
      linkOptionIds: [5, 6]
    },
    {
      id: 4,
      prompt: 'No Follow Up',
      // linkOptionIds: [7, 10, 19]
    },
    {
      id: 5,
      prompt: 'Diagnostic Benign Imaging Features',
      noteIds: [2],
      linkOptionIds: [24]
    },
    {
      id: 6,
      prompt: 'Indeterminate Imaging Features',
      // noteIds: [3],
      linkOptionIds: [7, 8]
    },
    {
      id: 7,
      prompt: '≥1 - <4cm',
      // noteIds: [5],
      linkOptionIds: [11, 12, 13]
    },
    {
      id: 8,
      prompt: '≥4cm',
      // noteIds: [6],
      linkOptionIds: [9, 10]
    },
    {
      id: 9,
      prompt: 'No Cancer History',
      linkOptionIds: [32]
    },
    {
      id: 10,
      prompt: 'Positive Cancer History',
      linkOptionIds: [20]
    },
    {
      id: 11,
      prompt: 'Prior Imaging',
      linkOptionIds: [14, 15]
    },
    {
      id: 12,
      prompt: 'No Prior Imaging, No Cancer History',
      // noteIds: [4]
      linkOptionIds: [17, 21]
    },
    {
      id: 13,
      prompt: 'No Prior Imaging, Positive Cancer History and Isolated Adrenal Mass',
      linkOptionIds: [22]
    },
    {
      id: 14,
      prompt: 'Stable ≥1 year',
      // noteIds: [8, 9]
      linkOptionIds: [16]
    },
    {
      id: 15,
      prompt: 'New or Enlarging',
      // noteIds: [2],
      linkOptionIds: [33, 10]
    },
    {
      id: 16,
      prompt: 'Benign, No Follow Up',
      // noteIds: [3],
      // linkOptionIds: [13]
    },
    {
      id: 17,
      prompt: '1 - 2cm',
      // noteIds: [3],
      linkOptionIds: [18]
    },
    {
      id: 18,
      prompt: 'Probably Benign Consider 12 month follow up adrenal CT',
      // noteIds: [1]
    },
    {
      id: 19,
      prompt: 'Consider Follow Up Adrenal CT or Resection',
      // noteIds: [3],
      // linkOptionIds: [13]
    },
    {
      id: 20,
      prompt: 'Consider Bx or PET-CT',
      // noteIds: [1]
      // linkOptionIds: [13]
    },
    {
      id: 21,
      prompt: '>2cm, <4cm',
      // noteIds: [1],
      linkOptionIds: [22]
    },
    {
      id: 22,
      prompt: 'Recommend Adrenal Mass CT Protocol',
      noteIds: [4],
      // linkOptionIds: [13]
    },
    {
      id: 23,
      prompt: 'Non Contrast CT ≤10 HU',
      // noteIds: [1],
      linkOptionIds: [24]
    },
    {
      id: 24,
      prompt: 'Benign Adenoma, No Follow Up',
      noteIds: [1],
      // linkOptionIds: [13]
    },
    {
      id: 25,
      prompt: 'Non Contrast CT >10 HU',
      // noteIds: [1],
      linkOptionIds: [27, 28, 29]
    },
    {
      id: 26,
      prompt: 'Adrenal CT Washout',
      // noteIds: [1],
      // linkOptionIds: [13]
    },
    {
      id: 27,
      prompt: 'No enhancement = Cyst or Hemorrhage',
      // noteIds: [1],
      linkOptionIds: [16]
    },
    {
      id: 28,
      prompt: 'Absolute % Washout ≥60%, Relative % washout ≥40%',
      noteIds: [5],
      linkOptionIds: [24]
    },
    {
      id: 29,
      prompt: 'Absolute % Washout <60%, Relative % washout <40%',
      noteIds: [5],
      linkOptionIds: [31]
    },
    {
      id: 30,
      prompt: 'Benign, No Follow Up',
      // noteIds: [1],
      // linkOptionIds: [13]
    },
    {
      id: 31,
      prompt: 'Imaging Follow Up, Bx, PET-CT, or resection depending on clinical scenario.',
      noteIds: [3],
      // linkOptionIds: [13]
    },
    {
      id: 32,
      prompt: 'Consider Resection',
      noteIds: [3]
    },
    {
      id: 33,
      prompt: 'No Cancer History',
      linkOptionIds: [19]
    },
    {
      id: 34,
      prompt: 'Positive Cancer History',
      linkOptionIds: []
    },
    {
      id: 35,
      linkOptionIds: [1, 36]
    },
    {
      id: 36,
      prompt: 'Non Incidental Adrenal Mass CT Protocol',
      linkOptionIds: [23, 25]
    }
    // {
    //   id: 37,
    //   prompt: 'Non Incidental',
    //   linkOptionIds: [1]
    // }
  ],
  notes: [
    {
      id: 1,
      body: 'Consider biochemical assays to determine functional status.'
    },
    {
      id: 2,
      body: '<p>Myelolipoma, no enhancement, calcifications = Benign</p><p>≤10 HU or ↓ signal on chemical shift MR = Benign adenoma.</p>'
    },
    {
      id: 3,
      body: 'Consider biochemical assays to determine functional status and exclude pheochromocytoma before biopsy/resection.'
    },
    {
      id: 4,
      body: 'May consider chemical-shift MRI.'
    },
    {
      id: 5,
      body: '<p>APW: dynamic enhanced (HU) - delayed (HU)  / dynamic enhanced (HU) - unenhanced (HU)</p><p>RPW: dynamic enhanced (HU) - delayed (HU)  / dynamic enhanced HU</p>'
    }
  ]
};

export const ADRENAL_ROUTES = [
  {
    path: ADRENAL_ROOT_PATH,
    component: WorkflowComponent,
    data: {
      workFlow: ADRENAL_WORKFLOW
    }
  },
  {
    path: ADRENAL_ROOT_PATH + '/:id',
    component: WorkflowComponent,
    data: {
      workFlow: ADRENAL_WORKFLOW
    }
  }
];
