import { WorkflowComponent } from '../app/workflow.component';

export const RENAL_ROOT_PATH = 'renal';
export const RENAL_VIEW_TEXT = 'RENAL';

export const RENAL_WORKFLOW = {
  title: RENAL_VIEW_TEXT,
  subtitle: 'Follow the renal mass algorithm to determine the appropriate ACR White Paper recommendation.',
  rootPath: RENAL_ROOT_PATH,
  options: [
    {
      id: 1,
      linkOptionIds: [2, 3, 6, 7]
    },
    {
      id: 2,
      noteIds: [1],
      prompt: 'Incidental mass on non-contrast CT',
      linkOptionIds: [9, 10, 11]
    },
    {
      id: 3,
      noteIds: [2],
      prompt: 'Incidental mass on contrast-enhanced CT',
      linkOptionIds: [9, 22, 11]
    },
    {
      id: 4,
      noteIds: [3],
      prompt: 'Incidental cystic mass',
      linkOptionIds: [1]
    },
    {
      id: 5,
      prompt: 'Incidental solid mass',
      noteIds: [4],
      linkOptionIds: [1]
    },
    {
      id: 6,
      prompt: 'Incidental mass containing fat',
      noteIds: [5],
      linkOptionIds: [26, 27]
    },
    {
      id: 7,
      prompt: 'Incidental mass on multiphase CT or MRI',
      linkOptionIds: [34, 35]
    },
    {
      id: 8,
      prompt: 'Incidental mass too small to characterize (TSTC)',
      noteIds: [4, 6],
      linkOptionIds: [1]
    },
    {
      id: 9,
      prompt: 'TSTC, homogenous',
      noteIds: [6],
      linkOptionIds: [12, 13]
    },
    {
      id: 10,
      prompt: 'Homogenous',
      noteIds: [7],
      linkOptionIds: [16, 17, 18]
    },
    {
      id: 11,
      prompt: 'Heterogeneous',
      noteIds: [8],
      linkOptionIds: [20]
    },
    {
      id: 12,
      prompt: 'Likely benign cyst, not fully characterized',
      noteIds: [9],
      linkOptionIds: [14]
    },
    {
      id: 13,
      prompt: 'Inconclusive based on subjective evaluation',
      linkOptionIds: [15]
    },
    {
      id: 14,
      prompt: 'No further workup.'
    },
    {
      id: 15,
      prompt: 'Indeterminate. WO&W MRI (preferred) or WO&W CT within 6 - 12 months.'
    },
    {
      id: 16,
      prompt: '-10 to 20 HU',
      linkOptionIds: [19]
    },
    {
      id: 17,
      prompt: '21 to 69 HU',
      linkOptionIds: [20]
    },
    {
      id: 18,
      prompt: '≥70 HU',
      linkOptionIds: [21]
    },
    {
      id: 19,
      prompt: 'Likely benign cyst, not fully characterized. No further workup.'
    },
    {
      id: 20,
      prompt: 'Indeterminate. Recommend WO&W MRI or WO&W CT.'
    },
    {
      id: 21,
      prompt: 'Hemorrhagic or proteinaceous cyst, unlikely to be neoplastic. No further workup.'
    },
    {
      id: 22,
      prompt: 'Homogenous',
      noteIds: [7],
      linkOptionIds: [23, 24]
    },
    {
      id: 23,
      prompt: '-10 to 20 HU',
      linkOptionIds: [25]
    },
    {
      id: 24,
      prompt: '>20 HU',
      linkOptionIds: [20]
    },
    {
      id: 25,
      prompt: 'Benign cyst. No futher workup.'
    },
    {
      id: 26,
      prompt: 'No calcification',
      noteIds: [10],
      linkOptionIds: [28, 29]
    },
    {
      id: 27,
      prompt: 'With calcification',
      noteIds: [11],
      linkOptionIds: [33]
    },
    {
      id: 28,
      prompt: 'Solitary without documentation of growth',
      noteIds: [12],
      linkOptionIds: [30, 31]
    },
    {
      id: 29,
      prompt: 'Multiple or growth based on old studies',
      noteIds: [14],
      linkOptionIds: [32]
    },
    {
      id: 30,
      prompt: 'Size <4cm',
      noteIds: [13],
      linkOptionIds: [14]
    },
    {
      id: 31,
      prompt: 'Size ≥4cm',
      linkOptionIds: [32]
    },
    {
      id: 32,
      prompt: 'Refer for management'
    },
    {
      id: 33,
      prompt: 'CT or MRI WO&W IV contrast'
    },
    {
      id: 34,
      prompt: 'Incidental cystic renal mass, does not contain fat',
      linkOptionIds: [36, 37, 38, 39]
    },
    {
      id: 35,
      prompt: 'Incidental solid renal mass or mass too small to characterize',
      linkOptionIds: [45, 46, 47, 48]
    },
    {
      id: 36,
      prompt: 'Bosniak I or II',
      noteIds: [15, 16],
      linkOptionIds: [14]
    },
    {
      id: 37,
      prompt: 'Bosniak IIF on Baseline Multiphase CT or MRI',
      noteIds: [17],
      linkOptionIds: [40]
    },
    {
      id: 38,
      prompt: 'Bosniak IIF on Follow-up Multiphase CT or MRI',
      noteIds: [17],
      linkOptionIds: [41, 42, 43]
    },
    {
      id: 39,
      prompt: 'Bosniak III or IV',
      noteIds: [18, 19],
      linkOptionIds: [32]
    },
    {
      id: 40,
      prompt: 'Follow-up multiphase CT or MRI at 6 and 12 months, then yearly for 5 years'
    },
    {
      id: 41,
      prompt: 'No morphologic change: <5 years of stability',
      noteIds: [20, 21],
      linkOptionIds: [44]
    },
    {
      id: 42,
      prompt: 'No morphologic change: ≥5 years of stability',
      noteIds: [20, 21],
      linkOptionIds: [14]
    },
    {
      id: 43,
      prompt: 'Morphologic change',
      noteIds: [20, 21],
      linkOptionIds: [32]
    },
    {
      id: 44,
      prompt: 'Multiphase CT or MRI at 6 and 12 months, then yearly for 5 years from baseline exam'
    },
    {
      id: 45,
      prompt: 'TSTC',
      noteIds: [6],
      linkOptionIds: [49, 50]
    },
    {
      id: 46,
      prompt: 'Solid mass <1cm',
      linkOptionIds: [51, 52]
    },
    {
      id: 47,
      prompt: 'Solid mass 1 - 4cm',
      linkOptionIds: [58]
    },
    {
      id: 48,
      prompt: 'Solid mass >4cm',
      linkOptionIds: [59]
    },
    {
      id: 49,
      prompt: 'Likely benign cyst',
      noteIds: [22],
      linkOptionIds: [14]
    },
    {
      id: 50,
      prompt: 'Inconclusive based on subjective evaluation',
      linkOptionIds: [15]
    },
    {
      id: 51,
      prompt: 'Baseline multiphase CT or MRI',
      linkOptionIds: [53]
    },
    {
      id: 52,
      prompt: 'Follow-up multiphase CT or MRI',
      linkOptionIds: [54, 55, 57]
    },
    {
      id: 53,
      prompt: 'Follow-up multiphase CT or MRI beginning at 6 and 12 months, then yearly for 5 years'
    },
    {
      id: 54,
      prompt: 'Stable <4 years',
      noteIds: [23],
      linkOptionIds: [53]
    },
    {
      id: 55,
      prompt: 'Stable ≥5 years',
      noteIds: [23],
      linkOptionIds: [56]
    },
    {
      id: 56,
      prompt: 'Unlikley clinical significance, no futher workup'
    },
    {
      id: 57,
      prompt: 'Growth or morphologic change',
      noteIds: [24],
      linkOptionIds: [58]
    },
    {
      id: 58,
      prompt: 'Small renal neoplasm, refer for management; consider biopsy',
      noteIds: [25]
    },
    {
      id: 59,
      prompt: 'Renal neoplasm, refer for management',
      noteIds: [25]
    }
  ],
  notes: [
    {
      id: 1,
      body: 'Only unenhanced CT available, not completely characterized. Does not contain fat.'
    },
    {
      id: 2,
      body: 'Only contrast-enhanced CT available, not completely characterized. Does not contain fat.'
    },
    {
      id: 3,
      body: 'Completely characterized on CT or MRI without and with IV contrast. Does not contain fat.'
    },
    {
      id: 4,
      body: 'Evaluated on CT or MRI without and with IV contrast. Does not contain fat.'
    },
    {
      id: 5,
      body: 'Contains a region of interest measuring less than -10 HU.'
    },
    {
      id: 6,
      body: 'TSTC (too small to characterize) = lesion size is less than twice recontsructed slice thickness.'
    },
    {
      id: 7,
      body: 'Thin or imperceptible wall, no mural nodule, septa, or calcification.'
    },
    {
      id: 8,
      body: 'Thick or irregular wall, mural nodule, septa, or calcification.'
    },
    {
      id: 9,
      body: 'Well circumscribed and homogenous TSTC renal masses that are visually much lower than the unenhanced parenchyma are probably benign cystic lesions.'
    },
    {
      id: 10,
      body: 'Angiomyolipoma (AML)'
    },
    {
      id: 11,
      body: 'Suspected Renal Cell Carcinoma'
    },
    {
      id: 12,
      body: 'Incedental sporadic AML (ie no hematuria, flank pain, or perilesional hemorrhage).'
    },
    {
      id: 13,
      body: 'Symptomatic AMLs should be referred to urology regardless of size.'
    },
    {
      id: 14,
      body: 'Growth is defined by ≥4mm per year.'
    },
    {
      id: 15,
      body: 'Bosniak I: Benign simple cyst with a hairline thin wall without septa, calcification, or solid component. Homogeneous near-water attenuation density (10 to 20 HU) without enhancement.'
    },
    {
      id: 16,
      body: 'Bosniak II: Benign minimally complicated cyst that may contain a few hairline thin septa that may have "perceived" but not measurable enhancement. Fine calcification or a segment of slightly thickened calcification may be present in the wall or septa. Also, a well-marginated nonenhancing homogeneous mass < 3 cm with density above simple fluid attenuation (hyperdense cyst).'
    },
    {
      id: 17,
      body: 'Bosniak IIF: Usually benign complicated renal cyst with multiple hairline thin septa or minimal smooth thickening of the wall or septa. Wall or septa may contain thick and nodular calcification and may have "perceived" but not measurable enhancement. Also, a well-marginated intrarenal nonenhancing mass > 3 cm with density above simple fluid.'
    },
    {
      id: 18,
      body: 'Bosniak III: Indeterminate complicated cystic renal mass with thickened irregular walls or septa that have measurable enhancement.'
    },
    {
      id: 19,
      body: 'Bosniak IV: Malignant cystic renal mass with enhancing soft tissue components (cystic renal cell carcinoma).'
    },
    {
      id: 20,
      body: 'Morphologic change includes increasing number of septa, thickening of the wall or septa, or development of a solid nodular component.'
    },
    {
      id: 21,
      body: 'Growth of a cystic mass without morphologic change is not indicative of malignancy.'
    },
    {
      id: 22,
      body: 'Well-circumscribed TSTC renal masses, either calcified or noncalcified but that are otherwise homogeneous and either visually much lower than the renal parenchyma on any phase or much higher than the unenhanced renal parenchyma, are probably benign cystic lesions that do not need further evaluation.'
    },
    {
      id: 23,
      body: 'A renal mass without change in imaging features and with an average growth of 3 mm per year for at least 5 years is considered stable and likely of no clinical significance.'
    },
    {
      id: 24,
      body: 'Growth is defined as 4 mm per year average; morphologic change is any change in heterogeneity, such as a change in contour, attenuation, or number of septa.'
    },
    {
      id: 25,
      body: 'Consider biopsy, especially if hyperattenuating on unenhanced CT, or hypointense on T2WI MRI, because these are suggestive of a fat-poor angiomyolipoma.'
    }
  ]
};

export const RENAL_ROUTES = [
  {
    path: RENAL_ROOT_PATH,
    component: WorkflowComponent,
    data: {
      workFlow: RENAL_WORKFLOW
    }
  },
  {
    path: RENAL_ROOT_PATH + '/:id',
    component: WorkflowComponent,
    data: {
      workFlow: RENAL_WORKFLOW
    }
  }
];
