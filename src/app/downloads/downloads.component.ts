import { DomSanitizer } from '@angular/platform-browser';
import { NewsSubModel } from '../../interfaces/news-sub-model';
import { Component, ElementRef } from '@angular/core';
import { Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MessageService } from 'primeng/api';
import { SafePipe } from './url.pipe';

@Component({
  selector: 'downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css'],
  providers: [MessageService],
  styles: [`
      :host ::ng-deep .p-treeselect {
          width:20rem;
          display: inline-flex;
      }
  `],
})
export class DownloadsModuleComponent implements OnInit  {

  title = "title";

  nodes2!: any[];
  // itsSafe !: SafeHtml;
  clickeDataPdf : any;
  newsHeading : string ="";
  selectedNode: any;
  std=""
  year=""
  almanacForm : any;
  holidayAndVacation: any;
  feesStructure:any;
  QuesPapaer:any;


  ngOnInit(): void {
    this.QuesPapaer =  [
      {
        std : 1,
      data : [
        {
          year : "2019" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },
        {
          year : "2020" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },

      ]
      },
      {
        std : 2,
      data : [
        {
          year : "2019" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },
        {
          year : "2020" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },

      ]
      },
      {
        std : 3,
      data : [
        {
          year : "2019" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },
        {
          year : "2020" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },

      ]
      },
      {
        std : 4,
      data : [
        {
          year : "2019" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },
        {
          year : "2020" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },

      ]
      },
      {
        std : 5,
      data : [
        {
          year : "2019" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },
        {
          year : "2020" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },

      ]
      },
      {
        std : 6,
      data : [
        {
          year : "2019" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },
        {
          year : "2020" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },

      ]
      },
      {
        std : 7,
      data : [
        {
          year : "2019" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },
        {
          year : "2020" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },

      ]
      },
      {
        std : 8,
      data : [
        {
          year : "2019" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },
        {
          year : "2020" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },

      ]
      },
      {
        std : 9,
      data : [
        {
          year : "2019" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },
        {
          year : "2020" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },

      ]
      },
      {
        std : 10,
      data :  [
        {
          year : "2019" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },
        {
          year : "2020" ,
          link : "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        },


      ]

    }
  ]
  this.almanacForm = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  this.holidayAndVacation = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
  this.feesStructure = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  throw new Error('Method not implemented.');
}

  constructor( private domSanitizer: DomSanitizer){}

  clickedBtn(data : string , heading:string)
  {

    this.clickeDataPdf=this.domSanitizer.bypassSecurityTrustResourceUrl(data);
    this.newsHeading=heading;
    // alert(data)
    // alert(heading)
  }

  clickedBtnDiff(data : string ,heading:string ,std:string , year:string){


    this.clickeDataPdf=this.domSanitizer.bypassSecurityTrustResourceUrl(data);
    this.newsHeading=heading;
    this.std = std
    this.year=year;

  }


  displayModal: boolean = false;
  showModalDialog() {
    this.displayModal = true;
  }



}



interface SafeValue {}
interface SafeHtml extends SafeValue {}

abstract class SafeValueImpl implements SafeValue {
  abstract getTypeName(): string;

}

class SafeHtmlImpl extends SafeValueImpl implements SafeHtml {
  getTypeName() { return 'HTML'; }
}

// class Temp extends DomSanitizer {
//   bypassSecurityTrustHtml(value: string): SafeHtml {
//     return new SafeHtmlImpl(value);
//   }
// }
