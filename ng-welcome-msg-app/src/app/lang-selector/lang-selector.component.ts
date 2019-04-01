import { Component, OnInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';
import { LANG_METADATA } from '../lang-metadata';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
  langMetaData = LANG_METADATA;
  langCode: string;

  constructor(public i18nSupporter: I18nSupportService) {
    this.langCode = i18nSupporter.langCode;
   }

  ngOnInit() {
  }
  syncToService(code: string) {
    this.i18nSupporter.langCode = code;
  }

}
