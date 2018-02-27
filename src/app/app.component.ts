import { Component } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SimpleDialog } from './simple-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public matDialog: MatDialog) {}

  openDialog(settings) { // move this to a utilities class too
    return this.matDialog.open(SimpleDialog, {
      width: settings.width,
      data: {
        title: settings.title,
        htmlTitle: settings.htmlTitle,
        content: settings.content,
        htmlContent: settings.htmlContent,
        leftButtonText: settings.leftButtonText,
        rightButtonText: settings.rightButtonText,
        leftButtonCallback: settings.leftButtonCallback,
        rightButtonCallback: settings.rightButtonCallback,
        rightButtonResetDelay: settings.rightButtonResetDelay,
        leftButtonResetDelay: settings.leftButtonResetDelay
      }
    });
  }

  showReferencesDialog() {
    const settings = {
      width: '650px',
      title: 'References',
      htmlContent: '<ul><li>1. Tessler FN, Middleton WD, Grant EG, et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper of the ACR TI-RADS Committee. J Am Coll Radiol. In press; 2017. <a class="muted-text" href="http://dx.doi.org/10.1016/j.jacr.2017.01.046" target="_blank">doi.org:10.1016/j.jacr.2017.01.046</a></li><li>2. Grant EG, Tessler FN, Hoang JK, Langer JE, Beland MD, Berland LL, Cronan JJ, Desser TS, Frates MC, Hamper UM, Middleton WD, Reading CC, Scoutt LM, Stavros AT, Teefey SA. Thyroid Ultrasound Reporting Lexicon: White Paper of the ACR Thyroid Imaging, Reporting and Data System (TIRADS) Committee. Journal of the American College of Radiology : JACR. 12 (12 Pt A): 1272-9. <a class="muted-text"  href="https://doi.org/10.1016/j.jacr.2015.07.011" target="_blank">doi:10.1016/j.jacr.2015.07.011</a> - <a class="muted-text"  href="https://www.ncbi.nlm.nih.gov/pubmed/26419308" target="_blank">Pubmed</a></li><li>3. Hoang JK, Langer JE, Middleton WD, Wu CC, Hammers LW, Cronan JJ, Tessler FN, Grant EG, Berland LL. Managing incidental thyroid nodules detected on imaging: white paper of the ACR Incidental Thyroid Findings Committee. Journal of the American College of Radiology : JACR. 12 (2): 143-50. <a class="muted-text"  href="https://doi.org/10.1016/j.jacr.2014.09.038" target="_blank">doi:10.1016/j.jacr.2014.09.038</a> - <a class="muted-text"  href="https://www.ncbi.nlm.nih.gov/pubmed/25456025" target="_blank">Pubmed</a></li><li>4. Gore RM, Pickhardt PJ, Mortele KJ, Fishman EK, Horowitz JM, Fimmel CJ, Talamonti MS, Berland LL, Pandharipande PV. Management of Incidental Liver Lesions on CT: A White Paper of the ACR Incidental Findings Committee. J Am Coll Radiol. 2017 Nov; 14(11):1429-1437. Epub 2017 Sep 18.</li></ul>',
      rightButtonText: 'close'
    };

    this.openDialog(settings);
  }

  showTermsDialog() {
    const settings = {
      width: '650px',
      title: 'Terms and Conditions',
      content: 'The contents of this website are for informational purposes only and do not constitute medical advice; the Content is not intended to be a substitute for professional medical judgement, diagnosis, or treatment.',
      rightButtonText: 'close'
    };

    this.openDialog(settings);
  }

}
