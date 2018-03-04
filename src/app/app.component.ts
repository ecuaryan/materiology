import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UtilComponent } from './util.component';
import { LIVER_VIEW_TEXT, LIVER_ROOT_PATH } from '../data/liver-workflow';
import { ADRENAL_VIEW_TEXT, ADRENAL_ROOT_PATH } from '../data/adrenal-workflow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pages: Array<any> = [
    {
      path: '/ti-rads',
      viewText: 'TI-RADS'
    },
    {
      path: LIVER_ROOT_PATH,
      viewText: LIVER_VIEW_TEXT
    },
    {
      path: ADRENAL_ROOT_PATH,
      viewText: ADRENAL_VIEW_TEXT
    }
  ];

  constructor(public matDialog: MatDialog, public util: UtilComponent) {}

  showReferencesDialog() {
    const settings = {
      width: '650px',
      title: 'References',
      htmlContent: `<ul>
                      <li>1. Tessler FN, Middleton WD, Grant EG, et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper of the ACR TI-RADS Committee. J Am Coll Radiol. In press; 2017. <a class="muted-text" href="http://dx.doi.org/10.1016/j.jacr.2017.01.046" target="_blank">doi.org:10.1016/j.jacr.2017.01.046</a></li>
                      <li>2. Grant EG, Tessler FN, Hoang JK, Langer JE, Beland MD, Berland LL, Cronan JJ, Desser TS, Frates MC, Hamper UM, Middleton WD, Reading CC, Scoutt LM, Stavros AT, Teefey SA. Thyroid Ultrasound Reporting Lexicon: White Paper of the ACR Thyroid Imaging, Reporting and Data System (TIRADS) Committee. Journal of the American College of Radiology : JACR. 12 (12 Pt A): 1272-9. <a class="muted-text"  href="https://doi.org/10.1016/j.jacr.2015.07.011" target="_blank">doi:10.1016/j.jacr.2015.07.011</a> - <a class="muted-text"  href="https://www.ncbi.nlm.nih.gov/pubmed/26419308" target="_blank">Pubmed</a></li>
                      <li>3. Hoang JK, Langer JE, Middleton WD, Wu CC, Hammers LW, Cronan JJ, Tessler FN, Grant EG, Berland LL. Managing incidental thyroid nodules detected on imaging: white paper of the ACR Incidental Thyroid Findings Committee. Journal of the American College of Radiology : JACR. 12 (2): 143-50. <a class="muted-text"  href="https://doi.org/10.1016/j.jacr.2014.09.038" target="_blank">doi:10.1016/j.jacr.2014.09.038</a> - <a class="muted-text"  href="https://www.ncbi.nlm.nih.gov/pubmed/25456025" target="_blank">Pubmed</a></li>
                      <li>4. Gore RM, Pickhardt PJ, Mortele KJ, Fishman EK, Horowitz JM, Fimmel CJ, Talamonti MS, Berland LL, Pandharipande PV. Management of Incidental Liver Lesions on CT: A White Paper of the ACR Incidental Findings Committee. J Am Coll Radiol. 2017 Nov; 14(11):1429-1437. Epub 2017 Sep 18. <a class="muted-text" href="https://doi.org/10.1016/j.jacr.2017.07.018" target="_blank">https://doi.org/10.1016/j.jacr.2017.07.018</a></li>
                      <li>5. Mayo-Smith WW, Song JH, Boland GL, Francis IR, Israel GM, Mazzaglia PJ, Berland LL, Pandharipande PV. Management of Incidental Adrenal Masses: A White Paper of the ACR Incidental Findings Committee. J Am Coll Radiol. 2017 Aug;14(8):1038-1044. <a class="muted-text" href="https://doi.org/10.1016/j.jacr.2017.05.001" target="_blank">https://doi.org/10.1016/j.jacr.2017.05.001</a></li>
                    </ul>`,
      rightButtonText: 'close'
    };

    this.util.openSimpleDialog(settings);
  }

  showTermsDialog() {
    const settings = {
      width: '650px',
      title: 'Terms and Conditions',
      content: 'The contents of this website are for informational purposes only and do not constitute medical advice; the Content is not intended to be a substitute for professional medical judgement, diagnosis, or treatment.',
      rightButtonText: 'close'
    };

    this.util.openSimpleDialog(settings);
  }

}
