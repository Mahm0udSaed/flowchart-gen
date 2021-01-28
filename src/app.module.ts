import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




     import { HierarchicalTreeService, MindMapService, RadialTreeService, ComplexHierarchicalTreeService } from '@syncfusion/ej2-angular-diagrams';
   import { DataBindingService, SnappingService, PrintAndExportService, BpmnDiagramsService} from '@syncfusion/ej2-angular-diagrams';
   import { SymmetricLayoutService, ConnectorBridgingService, UndoRedoService, LayoutAnimationService} from '@syncfusion/ej2-angular-diagrams';
   import { DiagramContextMenuService, ConnectorEditingService } from '@syncfusion/ej2-angular-diagrams';




import { DialogAllModule } from '@syncfusion/ej2-angular-popups';

import { DiagramAllModule, SymbolPaletteAllModule, OverviewAllModule } from '@syncfusion/ej2-angular-diagrams';

import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';

import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { NumericTextBoxModule, ColorPickerModule, UploaderModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

import { ButtonModule, CheckBoxModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';

import { HttpClientModule  } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';




@NgModule({ imports: [ DiagramAllModule, SymbolPaletteAllModule, OverviewAllModule, ButtonModule,       ColorPickerModule, CheckBoxModule, ToolbarModule, DropDownButtonModule, UploaderModule, CircularGaugeModule, DropDownListAllModule, ListViewAllModule,       DialogAllModule, TextBoxModule, RadioButtonModule,       MultiSelectModule, NumericTextBoxModule, BrowserModule], providers: []
})
export class AppModule { }
