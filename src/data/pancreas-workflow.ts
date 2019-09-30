import { WorkflowComponent } from '../app/workflow.component';

export const PANCREAS_ROOT_PATH = 'pancreas';
export const PANCREAS_VIEW_TEXT = 'PANCREAS';

export const PANCREAS_WORKFLOW = {
  title: PANCREAS_VIEW_TEXT,
  subtitle: 'Follow the cystic pancreatic mass algorithm to determine the appropriate ACR White Paper recommendation.',
  rootPath: PANCREAS_ROOT_PATH,
  options: [
    {
      id: 1,
      prompt: 'Incidental cystic pancreatic mass',
      linkOptionIds: [3, 2]
    },
    {
      id: 2,
      // noteIds: [1],
      prompt: '≥80 years old at presentation',
      linkOptionIds: [4, 5]
    },
    {
      id: 3,
      // noteIds: [2],
      prompt: '<80 years old at presentation',
      linkOptionIds: [26, 27, 28]
    },
    {
      id: 4,
      // noteIds: [3],
      prompt: 'Initial scan',
      linkOptionIds: [6, 7]
    },
    {
      id: 5,
      prompt: 'Follow-up scan',
      // noteIds: [4],
      linkOptionIds: [9, 10]
    },
    {
      id: 6,
      prompt: 'Cyst ≤2.5cm',
      // noteIds: [5],
      linkOptionIds: [8]
    },
    {
      id: 7,
      prompt: 'Cyst ≥2.5cm',
      linkOptionIds: [20, 21, 22]
    },
    {
      id: 8,
      prompt: 'Reimage q2y x 2'
      // noteIds: [1],
      // linkOptionIds: [1]
    },
    {
      id: 9,
      prompt: '2 year follow-up',
      // noteIds: [6],
      linkOptionIds: [11, 12]
    },
    {
      id: 10,
      prompt: '4 year follow-up',
      // noteIds: [7],
      linkOptionIds: [18, 12]
    },
    {
      id: 11,
      prompt: 'Stable',
      // noteIds: [8],
      linkOptionIds: [13]
    },
    {
      id: 12,
      prompt: 'Interval growth',
      noteIds: [1, 2],
      linkOptionIds: [14, 15]
    },
    {
      id: 13,
      prompt: 'Reimage in 2 years'
      // linkOptionIds: [15]
    },
    {
      id: 14,
      prompt: 'Cyst is still ≤2.5cm',
      linkOptionIds: [16]
    },
    {
      id: 15,
      prompt: 'Cyst is >2.5cm',
      linkOptionIds: [17]
    },
    {
      id: 16,
      noteIds: [3],
      prompt: 'Reimage q1y until cyst reaches >2.5cm'
      // linkOptionIds: [19]
    },
    {
      id: 17,
      prompt: 'Recommend EUS/FNA'
    },
    {
      id: 18,
      prompt: 'Stable',
      linkOptionIds: [19]
    },
    {
      id: 19,
      prompt: 'No further follow up'
    },
    {
      id: 20,
      prompt: 'Serous cystadenoma',
      noteIds: [4],
      linkOptionIds: [23]
    },
    {
      id: 21,
      noteIds: [5],
      prompt: 'Low Risk by Imaging',
      linkOptionIds: [24]
    },
    {
      id: 22,
      prompt: 'High Risk by Imaging',
      noteIds: [6],
      linkOptionIds: [25]
    },
    {
      id: 23,
      prompt: 'Serous cystadenoma',
      noteIds: [4]
      // linkOptionIds: []
    },
    {
      id: 24,
      prompt: 'Reimage q2y x 2',
      noteIds: [7, 8, 1]
      // linkOptionIds: [1]
    },
    {
      id: 25,
      prompt: 'EUS/FNA plus surgical consultation.'
    },
    {
      id: 26,
      prompt: '<1.5cm incidental pancreatic cyst',
      // noteIds: [10],
      linkOptionIds: [29, 30]
    },
    {
      id: 27,
      prompt: '1.5 - 2.5cm incidental pancreatic cyst',
      // noteIds: [11],
      linkOptionIds: [67, 68]
    },
    {
      id: 28,
      prompt: '>2.5cm incidental pancreatic cyst',
      noteIds: [11],
      linkOptionIds: [52, 53, 54, 55]
    },
    {
      id: 29,
      prompt: '<65 years at presentation',
      // noteIds: [14],
      linkOptionIds: [31, 32]
    },
    {
      id: 30,
      prompt: '65 - 79 years at presentation',
      // noteIds: [13],
      linkOptionIds: [45, 46]
    },
    {
      id: 31,
      prompt: 'Initial scan',
      linkOptionIds: [33]
    },
    {
      id: 32,
      prompt: 'Follow-up scan',
      linkOptionIds: [65, 39]
      // linkOptionIds: [34, 35, 36, 37, 39]
    },
    {
      id: 33,
      prompt: 'Reimage q1y x 5',
      noteIds: [9, 2]
    },
    {
      id: 34,
      prompt: '5 years of stability since presentation',
      linkOptionIds: [40]
    },
    {
      id: 35,
      prompt: '<5 years of stability since presentation',
      linkOptionIds: [33]
    },
    {
      id: 36,
      prompt: '7 years of stability since presentation',
      // noteIds: [1],
      linkOptionIds: [41]
    },
    {
      id: 37,
      prompt: '9 years of stability since presentation',
      // noteIds: [17],
      linkOptionIds: [38]
    },
    {
      id: 38,
      prompt: 'STOP if stable over minimum 9 years',
      // noteIds: [17],
      // linkOptionIds: []
    },
    {
      id: 39,
      prompt: 'Interval growth',
      noteIds: [1, 2],
      linkOptionIds: [42, 43]
    },
    {
      id: 40,
      prompt: 'Reimage q2y x 2',
      noteIds: [2]
    },
    {
      id: 41,
      prompt: 'Reimage q2y x 1',
      noteIds: [2]
    },
    {
      id: 42,
      prompt: 'Cyst is still <1.5cm',
      // noteIds: [20, 21],
      linkOptionIds: [44]
    },
    {
      id: 43,
      prompt: 'Cyst is ≥1.5cm',
      // noteIds: [20, 21],
      linkOptionIds: [67, 68]
    },
    {
      id: 44,
      prompt: 'Reimage q1y or EUS/FNA',
      noteIds: [10]
    },
    {
      id: 45,
      prompt: 'Initial scan',
      // noteIds: [6],
      linkOptionIds: [47]
    },
    {
      id: 46,
      prompt: 'Follow-up scan',
      linkOptionIds: [48, 49, 39]
    },
    {
      id: 47,
      prompt: 'Reimage q2y x 5',
      noteIds: [9, 2]
      // linkOptionIds: [58]
    },
    {
      id: 48,
      prompt: '<10 years stability since presentation',
      linkOptionIds: [50]
    },
    {
      id: 49,
      prompt: '≥10 years stability since presentation',
      // noteIds: [22],
      linkOptionIds: [51]
    },
    {
      id: 50,
      prompt: 'Reimage q2y until 10 years stability',
      noteIds: [2]
    },
    {
      id: 51,
      prompt: 'STOP if stable over 10 years'
    },
    {
      id: 52,
      prompt: 'Serous cystadenoma',
      linkOptionIds: [56]
    },
    {
      id: 53,
      prompt: 'Low Risk by Imaging',
      noteIds: [5],
      linkOptionIds: [57, 58]
    },
    {
      id: 54,
      prompt: 'High Risk by Imaging',
      noteIds: [6],
      linkOptionIds: [63]
    },
    {
      id: 55,
      prompt: 'EUS/FNA',
      noteIds: [11],
      linkOptionIds: [64]
    },
    {
      id: 56,
      prompt: 'For SCA > 4cm, surgical consultation for consideration of resection is advised'
    },
    {
      id: 57,
      prompt: 'Initial scan',
      linkOptionIds: [59]
    },
    {
      id: 58,
      prompt: 'Follow-up scan',
      // noteIds: [25]
      linkOptionIds: [60, 61]
    },
    {
      id: 59,
      prompt: 'Reimage q6mos x 4',
      noteIds: [12]
    },
    {
      id: 60,
      prompt: 'Stable',
      linkOptionIds: [62]
    },
    {
      id: 61,
      prompt: 'Interval growth',
      noteIds: [1, 2],
      linkOptionIds: [63]
    },
    {
      id: 62,
      prompt: 'Reimage q6mos x 4, then reimage q1y x 2, then q2y x 3 since initial detection, STOP if stable over 10 years.'
      // noteIds: [14]
      // linkOptionIds: []
    },
    {
      id: 63,
      prompt: 'EUS/FNA + Surgical consultation'
    },
    {
      id: 64,
      prompt: 'Immediate EUS/FNA performed in many centers for all cysts of this size.'
    },
    {
      id: 65,
      prompt: 'Stable',
      linkOptionIds: [66]
    },
    {
      id: 66,
      prompt: 'Reimage q1y x 5, then reimage q2y x 2, STOP if stable over minimum 9 years',
      noteIds: [2],
      // linkOptionIds: []
    },
    {
      id: 67,
      prompt: 'Main pancreatic duct communication established by imaging',
      linkOptionIds: [69, 70, 71]
    },
    {
      id: 68,
      prompt: 'Main pancreatic duct communication absent or cannot be determined',
      // noteIds: [2],
      linkOptionIds: [87, 97]
    },
    {
      id: 69,
      prompt: '1.5 - 1.9cm cyst',
      // noteIds: [2],
      linkOptionIds: [72, 73]
    },
    {
      id: 70,
      prompt: '2.0 - 2.5cm cyst',
      linkOptionIds: [80, 81]
    },
    {
      id: 71,
      prompt: 'EUS/FNA',
      noteIds: [13],
      linkOptionIds: [86]
    },
    {
      id: 72,
      prompt: 'Initial scan',
      linkOptionIds: [66]
    },
    {
      id: 73,
      prompt: 'Follow-up scan',
      // noteIds: [13],
      linkOptionIds: [74, 75]
    },
    {
      id: 74,
      prompt: 'Stable',
      // noteIds: [13],
      linkOptionIds: [76]
    },
    {
      id: 75,
      prompt: 'Interval growth',
      noteIds: [1, 2],
      linkOptionIds: [77, 78]
    },
    {
      id: 76,
      prompt: 'Since inital scan - Reimage q1y x 5, then reimage q2y x 2, STOP if stable over minimum 9 years',
      noteIds: [2]
      // linkOptionIds: []
    },
    {
      id: 77,
      prompt: 'Cyst is still ≤2.5cm',
      linkOptionIds: [79]
    },
    {
      id: 78,
      prompt: 'Cyst is >2.5cm',
      linkOptionIds: [17]
    },
    {
      id: 79,
      prompt: 'Reimage q6mo x 4, then q1y x 2, then q2y, OR EUS/FNA, STOP if stable over 10 years',
      noteIds: [2]
    },
    {
      id: 80,
      prompt: 'Initial scan',
      linkOptionIds: [82]
    },
    {
      id: 81,
      prompt: 'Follow-up scan',
      linkOptionIds: [83, 84]
    },
    {
      id: 82,
      prompt: 'Reimage q6mo x 4, then q1y x 2, then q2y x 3, STOP if stable over 10 years',
      noteIds: [2]
    },
    {
      id: 83,
      prompt: 'Stable',
      linkOptionIds: [85]
    },
    {
      id: 84,
      prompt: 'Interval growth',
      noteIds: [1, 2],
      linkOptionIds: [17]
    },
    {
      id: 85,
      prompt: 'Since initial scan - Reimage q6mo x 4, then q1y x 2, then q2y x 3, STOP if stable over 10 years',
      noteIds: [2]
    },
    {
      id: 86,
      prompt: 'EUS/FNA can be preformed instead of follow-up imaging.'
    },
    {
      id: 87,
      prompt: '1.5 - 2.5cm cyst',
      linkOptionIds: [89, 90]
    },
    {
      id: 89,
      prompt: 'Initial scan',
      linkOptionIds: [91]
    },
    {
      id: 90,
      prompt: 'Follow-up scan',
      linkOptionIds: [92, 94]
    },
    {
      id: 91,
      prompt: 'Reimage q6mo x 4, then q1y x 2 then q2y x 3 STOP if stable over 10 years',
      noteIds: [2]
    },
    {
      id: 92,
      prompt: 'Stable',
      linkOptionIds: [93]
    },
    {
      id: 93,
      prompt: 'Since initial scan - Reimage q6mo x 4, then q1y x 2 then q2y x 3 STOP if stable over 10 years',
      noteIds: [2]
    },
    {
      id: 94,
      prompt: 'Interval growth',
      linkOptionIds: [95, 15],
      noteIds: [1, 2]
    },
    {
      id: 95,
      prompt: 'Cyst is ≤2.5cm',
      linkOptionIds: [96]
    },
    {
      id: 96,
      prompt: 'Reimage q6mo x 2 then q1y x 5 then q2y OR EUS/FNA STOP if cyst <2.5cm over 10 years',
      noteIds: [2]
    },
    {
      id: 97,
      prompt: 'EUS/FNA',
      linkOptionIds: [98, 99]
    },
    {
      id: 98,
      prompt: 'SCA, cPNET, pseudocyst',
      linkOptionIds: [100]
    },
    {
      id: 99,
      prompt: 'Mucinous cyst or indeterminate aspiration',
      linkOptionIds: [101]
    },
    {
      id: 100,
      prompt: 'Management dependent on diagnosis'
    },
    {
      id: 101,
      prompt: 'Reimage q6mo x 4, then q1y x 2, then q2y x 3 STOP if stable over 10 years. If interval growth recommend surgical consultation.',
      noteIds: [1]
    }
  ],
  notes: [
    {
      id: 1,
      body: 'Interval growth defined as 100% increase in longest axis diameter for cysts <5 mm, 50% increase for cysts ≥5 mm and <15mm, and 20% increase for cysts ≥15 mm.'
    },
    {
      id: 2,
      body: 'Appearance of any mural nodule, wall thickening, dilation of MPD ≥7 mm, or extrahepatic biliary obstruction/jaundice should prompt consideration of immediate EUS/FNA and surgical evaluation regardless of size or amount of growth.'
    },
    {
      id: 3,
      body: 'STOP if stabilizes or if no longer surgical candidate.'
    },
    {
      id: 4,
      body: 'For SCA >4cm, surgical consultation for consideration of resection is advised.'
    },
    {
      id: 5,
      body: 'Low risk features: no mural nodule, no wall thickening, normal caliber MPD, no peripheral Ca++.'
    },
    {
      id: 6,
      body: 'High risk features: mural nodule, wall thickening, dilation of MPD ≥7 mm, peripheral Ca++.'
    },
    {
      id: 7,
      body: 'STOP if stable on 4 year follow-up imaging.'
    },
    {
      id: 8,
      body: 'EUS/FNA plus surgical consultation if interval growth on follow-up imaging.'
    },
    {
      id: 9,
      body: 'While single follow-up of tiny "white dot" lesions at 2 years is appropriate, the need for further follow-up and length of follow-up is unkown. Some radiologists do not report these lesions for patients with advanced age (>75 - 80 years of age).'
    },
    {
      id: 10,
      body: 'STOP if cyst <1.5cm over minimum 10 years.'
    },
    {
      id: 11,
      body: 'Immediate EUS/FNA performed in many centers for all cysts of this size.'
    },
    {
      id: 12,
      body: 'If the patient reaches 80 years before the end of follow-up, follow-up should generally stop. If the patient is close to - but not yet - 80 years when the cyst is first detected, recommendations for a patient >80 years may be used.'
    },
    {
      id: 13,
      body: 'EUS/FNA can be preformed instead of follow-up imaging.'
    },
    // {
    //   id: 14,
    //   body: 'STOP if stable over 10 years.'
    // },
    // {
    //   id: 15,
    //   body: 'Bosniak I: Benign simple cyst with a hairline thin wall without septa, calcification, or solid component. Homogeneous near-water attenuation density (10 to 20 HU) without enhancement.'
    // },
    // {
    //   id: 16,
    //   body: 'Bosniak II: Benign minimally complicated cyst that may contain a few hairline thin septa that may have "perceived" but not measurable enhancement. Fine calcification or a segment of slightly thickened calcification may be present in the wall or septa. Also, a well-marginated nonenhancing homogeneous mass < 3 cm with density above simple fluid attenuation (hyperdense cyst).'
    // },
    // {
    //   id: 17,
    //   body: 'Bosniak IIF: Usually benign complicated renal cyst with multiple hairline thin septa or minimal smooth thickening of the wall or septa. Wall or septa may contain thick and nodular calcification and may have "perceived" but not measurable enhancement. Also, a well-marginated intrarenal nonenhancing mass > 3 cm with density above simple fluid.'
    // },
    // {
    //   id: 18,
    //   body: 'Bosniak III: Indeterminate complicated cystic renal mass with thickened irregular walls or septa that have measurable enhancement.'
    // },
    // {
    //   id: 19,
    //   body: 'Bosniak IV: Malignant cystic renal mass with enhancing soft tissue components (cystic renal cell carcinoma).'
    // },
    // {
    //   id: 20,
    //   body: 'Morphologic change includes increasing number of septa, thickening of the wall or septa, or development of a solid nodular component.'
    // },
    // {
    //   id: 21,
    //   body: 'Growth of a cystic mass without morphologic change is not indicative of malignancy.'
    // },
    // {
    //   id: 22,
    //   body: 'Well-circumscribed TSTC renal masses, either calcified or noncalcified but that are otherwise homogeneous and either visually much lower than the renal parenchyma on any phase or much higher than the unenhanced renal parenchyma, are probably benign cystic lesions that do not need further evaluation.'
    // },
    // {
    //   id: 23,
    //   body: 'A renal mass without change in imaging features and with an average growth of 3 mm per year for at least 5 years is considered stable and likely of no clinical significance.'
    // },
    // {
    //   id: 24,
    //   body: 'Growth is defined as 4 mm per year average; morphologic change is any change in heterogeneity, such as a change in contour, attenuation, or number of septa.'
    // },
    // {
    //   id: 25,
    //   body: 'Consider biopsy, especially if hyperattenuating on unenhanced CT, or hypointense on T2WI MRI, because these are suggestive of a fat-poor angiomyolipoma.'
    // }
  ]
};

export const PANCREAS_ROUTES = [
  {
    path: PANCREAS_ROOT_PATH,
    component: WorkflowComponent,
    data: {
      workFlow: PANCREAS_WORKFLOW
    }
  },
  {
    path: PANCREAS_ROOT_PATH + '/:id',
    component: WorkflowComponent,
    data: {
      workFlow: PANCREAS_WORKFLOW
    }
  }
];
