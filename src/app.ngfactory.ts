/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from './crud.module';
import * as import7 from '@angular/common/src/localization';
import * as import8 from '@angular/core/src/application_init';
import * as import9 from '@angular/core/src/testability/testability';
import * as import10 from '@angular/core/src/application_ref';
import * as import11 from '@angular/core/src/linker/compiler';
import * as import12 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import13 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import14 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import15 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import16 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import17 from '@angular/core/src/animation/animation_queue';
import * as import18 from '@angular/core/src/linker/view_utils';
import * as import19 from '@angular/platform-browser/src/browser/title';
import * as import20 from '@angular/core/src/di/injector';
import * as import21 from './input.component.ngfactory';
import * as import22 from '@angular/core/src/i18n/tokens';
import * as import23 from '@angular/core/src/application_tokens';
import * as import24 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import25 from '@angular/platform-browser/src/dom/events/key_events';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import28 from '@angular/core/src/console';
import * as import29 from '@angular/core/src/error_handler';
import * as import30 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import31 from '@angular/platform-browser/src/dom/animation_driver';
import * as import32 from '@angular/core/src/render/api';
import * as import33 from '@angular/core/src/security';
import * as import34 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import35 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import36 from '@angular/core/src/linker/view';
import * as import37 from '@angular/core/src/metadata/view';
import * as import38 from '@angular/core/src/linker/view_type';
import * as import39 from '@angular/core/src/change_detection/constants';
import * as import40 from '@angular/core/src/linker/component_factory';
import * as import41 from './crud.component';
import * as import42 from './crud.component.ngfactory';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _RouterModule_3:import5.RouterModule;
  _CrudModule_4:import6.CrudModule;
  _AppModule_5:import1.AppModule;
  __LOCALE_ID_6:any;
  __NgLocalization_7:import7.NgLocaleLocalization;
  _ErrorHandler_8:any;
  _ApplicationInitStatus_9:import8.ApplicationInitStatus;
  _Testability_10:import9.Testability;
  _ApplicationRef__11:import10.ApplicationRef_;
  __ApplicationRef_12:any;
  __Compiler_13:import11.Compiler;
  __APP_ID_14:any;
  __DOCUMENT_15:any;
  __HAMMER_GESTURE_CONFIG_16:import12.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_17:any[];
  __EventManager_18:import13.EventManager;
  __DomSharedStylesHost_19:import14.DomSharedStylesHost;
  __AnimationDriver_20:any;
  __DomRootRenderer_21:import15.DomRootRenderer_;
  __RootRenderer_22:any;
  __DomSanitizer_23:import16.DomSanitizerImpl;
  __Sanitizer_24:any;
  __AnimationQueue_25:import17.AnimationQueue;
  __ViewUtils_26:import18.ViewUtils;
  __IterableDiffers_27:any;
  __KeyValueDiffers_28:any;
  __SharedStylesHost_29:any;
  __Title_30:import19.Title;
  constructor(parent:import20.Injector) {
    super(parent,[
      import21.InputTextComponentNgFactory,
      AppNgFactory
    ]
    ,[AppNgFactory]);
  }
  get _LOCALE_ID_6():any {
    if ((this.__LOCALE_ID_6 == null)) { (this.__LOCALE_ID_6 = import3._localeFactory(this.parent.get(import22.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_6;
  }
  get _NgLocalization_7():import7.NgLocaleLocalization {
    if ((this.__NgLocalization_7 == null)) { (this.__NgLocalization_7 = new import7.NgLocaleLocalization(this._LOCALE_ID_6)); }
    return this.__NgLocalization_7;
  }
  get _ApplicationRef_12():any {
    if ((this.__ApplicationRef_12 == null)) { (this.__ApplicationRef_12 = this._ApplicationRef__11); }
    return this.__ApplicationRef_12;
  }
  get _Compiler_13():import11.Compiler {
    if ((this.__Compiler_13 == null)) { (this.__Compiler_13 = new import11.Compiler()); }
    return this.__Compiler_13;
  }
  get _APP_ID_14():any {
    if ((this.__APP_ID_14 == null)) { (this.__APP_ID_14 = import23._appIdRandomProviderFactory()); }
    return this.__APP_ID_14;
  }
  get _DOCUMENT_15():any {
    if ((this.__DOCUMENT_15 == null)) { (this.__DOCUMENT_15 = import4._document()); }
    return this.__DOCUMENT_15;
  }
  get _HAMMER_GESTURE_CONFIG_16():import12.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_16 == null)) { (this.__HAMMER_GESTURE_CONFIG_16 = new import12.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_16;
  }
  get _EVENT_MANAGER_PLUGINS_17():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_17 == null)) { (this.__EVENT_MANAGER_PLUGINS_17 = [
      new import24.DomEventsPlugin(),
      new import25.KeyEventsPlugin(),
      new import12.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_16)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_17;
  }
  get _EventManager_18():import13.EventManager {
    if ((this.__EventManager_18 == null)) { (this.__EventManager_18 = new import13.EventManager(this._EVENT_MANAGER_PLUGINS_17,this.parent.get(import26.NgZone))); }
    return this.__EventManager_18;
  }
  get _DomSharedStylesHost_19():import14.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_19 == null)) { (this.__DomSharedStylesHost_19 = new import14.DomSharedStylesHost(this._DOCUMENT_15)); }
    return this.__DomSharedStylesHost_19;
  }
  get _AnimationDriver_20():any {
    if ((this.__AnimationDriver_20 == null)) { (this.__AnimationDriver_20 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_20;
  }
  get _DomRootRenderer_21():import15.DomRootRenderer_ {
    if ((this.__DomRootRenderer_21 == null)) { (this.__DomRootRenderer_21 = new import15.DomRootRenderer_(this._DOCUMENT_15,this._EventManager_18,this._DomSharedStylesHost_19,this._AnimationDriver_20,this._APP_ID_14)); }
    return this.__DomRootRenderer_21;
  }
  get _RootRenderer_22():any {
    if ((this.__RootRenderer_22 == null)) { (this.__RootRenderer_22 = import27._createConditionalRootRenderer(this._DomRootRenderer_21,this.parent.get(import27.NgProbeToken,(null as any)),this.parent.get(import10.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_22;
  }
  get _DomSanitizer_23():import16.DomSanitizerImpl {
    if ((this.__DomSanitizer_23 == null)) { (this.__DomSanitizer_23 = new import16.DomSanitizerImpl()); }
    return this.__DomSanitizer_23;
  }
  get _Sanitizer_24():any {
    if ((this.__Sanitizer_24 == null)) { (this.__Sanitizer_24 = this._DomSanitizer_23); }
    return this.__Sanitizer_24;
  }
  get _AnimationQueue_25():import17.AnimationQueue {
    if ((this.__AnimationQueue_25 == null)) { (this.__AnimationQueue_25 = new import17.AnimationQueue(this.parent.get(import26.NgZone))); }
    return this.__AnimationQueue_25;
  }
  get _ViewUtils_26():import18.ViewUtils {
    if ((this.__ViewUtils_26 == null)) { (this.__ViewUtils_26 = new import18.ViewUtils(this._RootRenderer_22,this._Sanitizer_24,this._AnimationQueue_25)); }
    return this.__ViewUtils_26;
  }
  get _IterableDiffers_27():any {
    if ((this.__IterableDiffers_27 == null)) { (this.__IterableDiffers_27 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_27;
  }
  get _KeyValueDiffers_28():any {
    if ((this.__KeyValueDiffers_28 == null)) { (this.__KeyValueDiffers_28 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_28;
  }
  get _SharedStylesHost_29():any {
    if ((this.__SharedStylesHost_29 == null)) { (this.__SharedStylesHost_29 = this._DomSharedStylesHost_19); }
    return this.__SharedStylesHost_29;
  }
  get _Title_30():import19.Title {
    if ((this.__Title_30 == null)) { (this.__Title_30 = new import19.Title()); }
    return this.__Title_30;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._RouterModule_3 = new import5.RouterModule(this.parent.get(import5.ROUTER_FORROOT_GUARD,(null as any)));
    this._CrudModule_4 = new import6.CrudModule();
    this._AppModule_5 = new import1.AppModule();
    this._ErrorHandler_8 = import4.errorHandler();
    this._ApplicationInitStatus_9 = new import8.ApplicationInitStatus(this.parent.get(import8.APP_INITIALIZER,(null as any)));
    this._Testability_10 = new import9.Testability(this.parent.get(import26.NgZone));
    this._ApplicationRef__11 = new import10.ApplicationRef_(this.parent.get(import26.NgZone),this.parent.get(import28.Console),this,this._ErrorHandler_8,this,this._ApplicationInitStatus_9,this.parent.get(import9.TestabilityRegistry,(null as any)),this._Testability_10);
    return this._AppModule_5;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.RouterModule)) { return this._RouterModule_3; }
    if ((token === import6.CrudModule)) { return this._CrudModule_4; }
    if ((token === import1.AppModule)) { return this._AppModule_5; }
    if ((token === import22.LOCALE_ID)) { return this._LOCALE_ID_6; }
    if ((token === import7.NgLocalization)) { return this._NgLocalization_7; }
    if ((token === import29.ErrorHandler)) { return this._ErrorHandler_8; }
    if ((token === import8.ApplicationInitStatus)) { return this._ApplicationInitStatus_9; }
    if ((token === import9.Testability)) { return this._Testability_10; }
    if ((token === import10.ApplicationRef_)) { return this._ApplicationRef__11; }
    if ((token === import10.ApplicationRef)) { return this._ApplicationRef_12; }
    if ((token === import11.Compiler)) { return this._Compiler_13; }
    if ((token === import23.APP_ID)) { return this._APP_ID_14; }
    if ((token === import30.DOCUMENT)) { return this._DOCUMENT_15; }
    if ((token === import12.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_16; }
    if ((token === import13.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_17; }
    if ((token === import13.EventManager)) { return this._EventManager_18; }
    if ((token === import14.DomSharedStylesHost)) { return this._DomSharedStylesHost_19; }
    if ((token === import31.AnimationDriver)) { return this._AnimationDriver_20; }
    if ((token === import15.DomRootRenderer)) { return this._DomRootRenderer_21; }
    if ((token === import32.RootRenderer)) { return this._RootRenderer_22; }
    if ((token === import16.DomSanitizer)) { return this._DomSanitizer_23; }
    if ((token === import33.Sanitizer)) { return this._Sanitizer_24; }
    if ((token === import17.AnimationQueue)) { return this._AnimationQueue_25; }
    if ((token === import18.ViewUtils)) { return this._ViewUtils_26; }
    if ((token === import34.IterableDiffers)) { return this._IterableDiffers_27; }
    if ((token === import35.KeyValueDiffers)) { return this._KeyValueDiffers_28; }
    if ((token === import14.SharedStylesHost)) { return this._SharedStylesHost_29; }
    if ((token === import19.Title)) { return this._Title_30; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__11.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);
export class Wrapper_App {
  /*private*/ _eventHandler:Function;
  context:import1.App;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import1.App();
  }
  ngOnDetach(view:import36.AppView<any>,componentView:import36.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import36.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import36.AppView<any>,componentView:import36.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import36.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_App_Host:import32.RenderComponentType = import18.createRenderComponentType('',0,import37.ViewEncapsulation.None,([] as any[]),{});
class View_App_Host0 extends import36.AppView<any> {
  _el_0:any;
  compView_0:import36.AppView<import1.App>;
  _App_0_3:Wrapper_App;
  constructor(viewUtils:import18.ViewUtils,parentView:import36.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_App_Host0,renderType_App_Host,import38.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import39.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import40.ComponentRef<any> {
    this._el_0 = import18.selectOrCreateRenderHostElement(this.renderer,'my-app',import18.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_App0(this.viewUtils,this,0,this._el_0);
    this._App_0_3 = new Wrapper_App();
    this.compView_0.create(this._App_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import40.ComponentRef_<any>(0,this,this._el_0,this._App_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.App) && (0 === requestNodeIndex))) { return this._App_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._App_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AppNgFactory:import40.ComponentFactory<import1.App> = new import40.ComponentFactory<import1.App>('my-app',View_App_Host0,import1.App);
const styles_App:any[] = ([] as any[]);
var renderType_App:import32.RenderComponentType = import18.createRenderComponentType('',0,import37.ViewEncapsulation.None,styles_App,{});
export class View_App0 extends import36.AppView<import1.App> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  compView_3:import36.AppView<import41.CrudComponent>;
  _CrudComponent_3_3:import42.Wrapper_CrudComponent;
  _text_4:any;
  _text_5:any;
  constructor(viewUtils:import18.ViewUtils,parentView:import36.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_App0,renderType_App,import38.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import39.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import40.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import18.createRenderElement(this.renderer,parentRenderNode,'div',import18.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import18.createRenderElement(this.renderer,this._el_1,'crud',import18.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_3 = new import42.View_CrudComponent0(this.viewUtils,this,3,this._el_3);
    this._CrudComponent_3_3 = new import42.Wrapper_CrudComponent();
    this.compView_3.create(this._CrudComponent_3_3.context);
    this._text_4 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import41.CrudComponent) && (3 === requestNodeIndex))) { return this._CrudComponent_3_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._CrudComponent_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this.compView_3.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_3.destroy();
  }
}