import './polyfills.server.mjs';
import{A as re,B as d,C as l,D as m,E as we,F as D,G as Ie,H as c,I as Se,J as _,L as Ne,Q as Oe,S as oe,T as se,V as xe,W as Pe,X as ke,Y as je,Z as Te,_ as Ge,a as De,b as be,ba as Be,c as Me,d as R,e as I,f as S,g as U,h as g,ha as ae,i as h,j as Ee,k as Ae,l as N,m as te,n as y,o as E,p as v,q as Fe,r as ie,s as V,t as O,u,v as x,w as p,x as ne,y as H,z as P}from"./chunk-YOI2LQFG.mjs";import{a as C,b as M}from"./chunk-VVCT4QZE.mjs";var vt=[],Re=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g({type:e}),e.\u0275inj=y({imports:[ae.forRoot(vt),ae]});let i=e;return i})();var Ue=(()=>{let e=class e{constructor(t){this.http=t,this.url="http://localhost:4000/users",this.url2="http://localhost:4000/download-csv"}postEntry(t){return this.http.post(this.url,t)}getCSV(){return this.http.get(this.url2)}};e.\u0275fac=function(n){return new(n||e)(Fe(ke))},e.\u0275prov=te({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Je=(()=>{let e=class e{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(n){return new(n||e)(u(x),u(N))},e.\u0275dir=h({type:e});let i=e;return i})(),de=(()=>{let e=class e extends Je{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=V(e)))(o||e)}})(),e.\u0275dir=h({type:e,features:[p]});let i=e;return i})(),Y=new E("");var Ct={provide:Y,useExisting:v(()=>J),multi:!0};function Vt(){let i=se()?se().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Dt=new E(""),J=(()=>{let e=class e extends Je{constructor(t,n,o){super(t,n),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Vt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(n){return new(n||e)(u(x),u(N),u(Dt,8))},e.\u0275dir=h({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&D("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[_([Ct]),p]});let i=e;return i})();function ce(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function bt(i){return i!=null&&typeof i.length=="number"}var B=new E(""),Xe=new E("");function Mt(i){return ce(i.value)?{required:!0}:null}function Et(i){return e=>ce(e.value)||!bt(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function At(i){if(!i)return le;let e,r;return typeof i=="string"?(r="",i.charAt(0)!=="^"&&(r+="^"),r+=i,i.charAt(i.length-1)!=="$"&&(r+="$"),e=new RegExp(r)):(r=i.toString(),e=i),t=>{if(ce(t.value))return null;let n=t.value;return e.test(n)?null:{pattern:{requiredPattern:r,actualValue:n}}}}function le(i){return null}function Ke(i){return i!=null}function Qe(i){return Ne(i)?De(i):i}function et(i){let e={};return i.forEach(r=>{e=r!=null?C(C({},e),r):e}),Object.keys(e).length===0?null:e}function tt(i,e){return e.map(r=>r(i))}function Ft(i){return!i.validate}function it(i){return i.map(e=>Ft(e)?e:r=>e.validate(r))}function wt(i){if(!i)return null;let e=i.filter(Ke);return e.length==0?null:function(r){return et(tt(r,e))}}function he(i){return i!=null?wt(it(i)):null}function It(i){if(!i)return null;let e=i.filter(Ke);return e.length==0?null:function(r){let t=tt(r,e).map(Qe);return Me(t).pipe(be(et))}}function fe(i){return i!=null?It(it(i)):null}function He(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function St(i){return i._rawValidators}function Nt(i){return i._rawAsyncValidators}function ue(i){return i?Array.isArray(i)?i:[i]:[]}function $(i,e){return Array.isArray(i)?i.includes(e):i===e}function Le(i,e){let r=ue(e);return ue(i).forEach(n=>{$(r,n)||r.push(n)}),r}function $e(i,e){return ue(e).filter(r=>!$(i,r))}var W=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=he(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=fe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return this.control?this.control.hasError(e,r):!1}getError(e,r){return this.control?this.control.getError(e,r):null}},w=class extends W{get formDirective(){return null}get path(){return null}},G=class extends W{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},q=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ot={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Oi=M(C({},Ot),{"[class.ng-submitted]":"isSubmitted"}),nt=(()=>{let e=class e extends q{constructor(t){super(t)}};e.\u0275fac=function(n){return new(n||e)(u(G,2))},e.\u0275dir=h({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[p]});let i=e;return i})(),rt=(()=>{let e=class e extends q{constructor(t){super(t)}};e.\u0275fac=function(n){return new(n||e)(u(w,10))},e.\u0275dir=h({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){n&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[p]});let i=e;return i})();var k="VALID",L="INVALID",F="PENDING",j="DISABLED";function ot(i){return(X(i)?i.validators:i)||null}function xt(i){return Array.isArray(i)?he(i):i||null}function st(i,e){return(X(e)?e.asyncValidators:i)||null}function Pt(i){return Array.isArray(i)?fe(i):i||null}function X(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function kt(i,e,r){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new R(1e3,"");if(!t[r])throw new R(1001,"")}function jt(i,e,r){i._forEachChild((t,n)=>{if(r[n]===void 0)throw new R(1002,"")})}var z=class{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===k}get invalid(){return this.status===L}get pending(){return this.status==F}get disabled(){return this.status===j}get enabled(){return this.status!==j}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Le(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Le(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators($e(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators($e(e,this._rawAsyncValidators))}hasValidator(e){return $(this._rawValidators,e)}hasAsyncValidator(e){return $(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=F,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=j,this.errors=null,this._forEachChild(t=>{t.disable(M(C({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(M(C({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=k,this._forEachChild(t=>{t.enable(M(C({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(M(C({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===k||this.status===F)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?j:k}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=F,this._hasOwnPendingAsyncValidator=!0;let r=Qe(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(r.emitEvent!==!1)}get(e){let r=e;return r==null||(Array.isArray(r)||(r=r.split(".")),r.length===0)?null:r.reduce((t,n)=>t&&t._find(n),this)}getError(e,r){let t=r?this.get(r):this;return t&&t.errors?t.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new I,this.statusChanges=new I}_calculateStatus(){return this._allControlsDisabled()?j:this.errors?L:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(F)?F:this._anyControlsHaveStatus(L)?L:k}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){X(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let r=this._parent&&this._parent.dirty;return!e&&!!r&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=xt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Pt(this._rawAsyncValidators)}},Z=class extends z{constructor(e,r,t){super(ot(r),st(t,r)),this.controls=e,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,r){return this.controls[e]?this.controls[e]:(this.controls[e]=r,r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange),r)}addControl(e,r,t={}){this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}setControl(e,r,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],r&&this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,r={}){jt(this,!0,e),Object.keys(e).forEach(t=>{kt(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(e,r={}){e!=null&&(Object.keys(e).forEach(t=>{let n=this.controls[t];n&&n.patchValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(e={},r={}){this._forEachChild((t,n)=>{t.reset(e?e[n]:null,{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this._reduceChildren({},(e,r,t)=>(e[t]=r.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(r,t)=>t._syncPendingControls()?!0:r);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(r=>{let t=this.controls[r];t&&e(t,r)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[r,t]of Object.entries(this.controls))if(this.contains(r)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(r,t,n)=>((t.enabled||this.disabled)&&(r[n]=t.value),r))}_reduceChildren(e,r){let t=e;return this._forEachChild((n,o)=>{t=r(t,n,o)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var pe=new E("CallSetDisabledState",{providedIn:"root",factory:()=>me}),me="always";function Tt(i,e){return[...e.path,i]}function at(i,e,r=me){lt(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||r==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Bt(i,e),Ut(i,e),Rt(i,e),Gt(i,e)}function We(i,e){i.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function Gt(i,e){if(e.valueAccessor.setDisabledState){let r=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(r),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(r)})}}function lt(i,e){let r=St(i);e.validator!==null?i.setValidators(He(r,e.validator)):typeof r=="function"&&i.setValidators([r]);let t=Nt(i);e.asyncValidator!==null?i.setAsyncValidators(He(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let n=()=>i.updateValueAndValidity();We(e._rawValidators,n),We(e._rawAsyncValidators,n)}function Bt(i,e){e.valueAccessor.registerOnChange(r=>{i._pendingValue=r,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&ut(i,e)})}function Rt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&ut(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function ut(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Ut(i,e){let r=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};i.registerOnChange(r),e._registerOnDestroy(()=>{i._unregisterOnChange(r)})}function Ht(i,e){i==null,lt(i,e)}function Lt(i,e){if(!i.hasOwnProperty("model"))return!1;let r=i.model;return r.isFirstChange()?!0:!Object.is(e,r.currentValue)}function $t(i){return Object.getPrototypeOf(i.constructor)===de}function Wt(i,e){i._syncPendingControls(),e.forEach(r=>{let t=r.control;t.updateOn==="submit"&&t._pendingChange&&(r.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function qt(i,e){if(!e)return null;Array.isArray(e);let r,t,n;return e.forEach(o=>{o.constructor===J?r=o:$t(o)?t=o:n=o}),n||t||r||null}var zt={provide:w,useExisting:v(()=>ge)},T=Promise.resolve(),ge=(()=>{let e=class e extends w{constructor(t,n,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new I,this.form=new Z({},he(t),fe(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){T.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),at(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){T.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){T.then(()=>{let n=this._findContainer(t.path),o=new Z({});Ht(o,t),n.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){T.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){T.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,Wt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(n){return new(n||e)(u(B,10),u(Xe,10),u(pe,8))},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,o){n&1&&D("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{options:[S.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[_([zt]),p]});let i=e;return i})();function qe(i,e){let r=i.indexOf(e);r>-1&&i.splice(r,1)}function ze(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Zt=class extends z{constructor(e=null,r,t){super(ot(r),st(t,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(r)&&(r.nonNullable||r.initialValueIsDefault)&&(ze(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&r.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,r.emitViewToModelChange!==!1)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){qe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){qe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ze(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Yt={provide:G,useExisting:v(()=>ye)},Ze=Promise.resolve(),ye=(()=>{let e=class e extends G{constructor(t,n,o,s,a,f){super(),this._changeDetectorRef=a,this.callSetDisabledState=f,this.control=new Zt,this._registered=!1,this.name="",this.update=new I,this._parent=t,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=qt(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Lt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){at(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Ze.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,o=n!==0&&oe(n);Ze.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Tt(t,this._parent):[t]}};e.\u0275fac=function(n){return new(n||e)(u(w,9),u(B,10),u(Xe,10),u(Y,10),u(Oe,8),u(pe,8))},e.\u0275dir=h({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[S.None,"disabled","isDisabled"],model:[S.None,"ngModel","model"],options:[S.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[_([Yt]),p,ie]});let i=e;return i})(),dt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=h({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var Jt={provide:Y,useExisting:v(()=>K),multi:!0};function ct(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function Xt(i){return i.split(":")[0]}var K=(()=>{let e=class e extends de{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n=this._getOptionId(t),o=ct(n,t);this.setProperty("value",o)}registerOnChange(t){this.onChange=n=>{this.value=this._getOptionValue(n),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),t))return n;return null}_getOptionValue(t){let n=Xt(t);return this._optionMap.has(n)?this._optionMap.get(n):t}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=V(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,o){n&1&&D("change",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[_([Jt]),p]});let i=e;return i})(),ht=(()=>{let e=class e{constructor(t,n,o){this._element=t,this._renderer=n,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(ct(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(n){return new(n||e)(u(N),u(x),u(K,9))},e.\u0275dir=h({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})(),Kt={provide:Y,useExisting:v(()=>ft),multi:!0};function Ye(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function Qt(i){return i.split(":")[0]}var ft=(()=>{let e=class e extends de{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n;if(Array.isArray(t)){let o=t.map(s=>this._getOptionId(s));n=(s,a)=>{s._setSelected(o.indexOf(a.toString())>-1)}}else n=(o,s)=>{o._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(t){this.onChange=n=>{let o=[],s=n.selectedOptions;if(s!==void 0){let a=s;for(let f=0;f<a.length;f++){let b=a[f],ee=this._getOptionValue(b.value);o.push(ee)}}else{let a=n.options;for(let f=0;f<a.length;f++){let b=a[f];if(b.selected){let ee=this._getOptionValue(b.value);o.push(ee)}}}this.value=o,t(o)}}_registerOption(t){let n=(this._idCounter++).toString();return this._optionMap.set(n,t),n}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,t))return n;return null}_getOptionValue(t){let n=Qt(t);return this._optionMap.has(n)?this._optionMap.get(n)._value:t}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=V(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,o){n&1&&D("change",function(a){return o.onChange(a.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[_([Kt]),p]});let i=e;return i})(),pt=(()=>{let e=class e{constructor(t,n,o){this._element=t,this._renderer=n,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(Ye(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(Ye(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(n){return new(n||e)(u(N),u(x),u(ft,9))},e.\u0275dir=h({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})();function ei(i){return typeof i=="number"?i:parseInt(i,10)}var ve=(()=>{let e=class e{constructor(){this._validator=le}ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):le,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=h({type:e,features:[ie]});let i=e;return i})();var ti={provide:B,useExisting:v(()=>_e),multi:!0};var _e=(()=>{let e=class e extends ve{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=oe,this.createValidator=t=>Mt}enabled(t){return t}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=V(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,o){n&2&&H("required",o._enabled?"":null)},inputs:{required:"required"},features:[_([ti]),p]});let i=e;return i})();var ii={provide:B,useExisting:v(()=>Ce),multi:!0},Ce=(()=>{let e=class e extends ve{constructor(){super(...arguments),this.inputName="minlength",this.normalizeInput=t=>ei(t),this.createValidator=t=>Et(t)}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=V(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(n,o){n&2&&H("minlength",o._enabled?o.minlength:null)},inputs:{minlength:"minlength"},features:[_([ii]),p]});let i=e;return i})();var ni={provide:B,useExisting:v(()=>Ve),multi:!0},Ve=(()=>{let e=class e extends ve{constructor(){super(...arguments),this.inputName="pattern",this.normalizeInput=t=>t,this.createValidator=t=>At(t)}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=V(e)))(o||e)}})(),e.\u0275dir=h({type:e,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(n,o){n&2&&H("pattern",o._enabled?o.pattern:null)},inputs:{pattern:"pattern"},features:[_([ni]),p]});let i=e;return i})();var ri=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g({type:e}),e.\u0275inj=y({});let i=e;return i})();var mt=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:pe,useValue:t.callSetDisabledState??me}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g({type:e}),e.\u0275inj=y({imports:[ri]});let i=e;return i})();function si(i,e){if(i&1&&(d(0,"option",30),c(1),l()),i&2){let r=e.$implicit;P("value",r),O(),Se(r)}}function ai(i,e){i&1&&(d(0,"div",31),c(1," Invalid "),l())}function li(i,e){i&1&&(d(0,"div",32),c(1," Thank You For your Response! "),l())}var gt=(()=>{let e=class e{constructor(t){this.Entry=t,this.giveError=!1,this.noError=!1,this.formFields={},this.collection=[],this.availableDates=[],this.hijri=0,this.populateDates()}formatDate(t){let n=t.getFullYear(),o=t.getMonth(),s=t.getDate().toString().padStart(2,"0"),a=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];return`Ramadan ${this.hijri}th (${s}-${a[o]}-${n}) `}populateDates(){let t=new Date,n=new Date("2024-04-08"),o=new Date("2024-03-10"),s=t.getTime()-o.getTime(),a=Math.floor(s/(1e3*60*60*24));for(this.hijri=a+1;t<=n;)this.availableDates.push(this.formatDate(t)),t.setDate(t.getDate()+1),this.hijri++}saveEntry(){this.Entry.postEntry(this.collection[0]).subscribe(t=>{console.log(t)}),console.log(this.collection[0])}ngOnInit(){}createObject(t,n,o,s,a){let b=[{its_no:t,name:n,adults:o,children:s,date:a},...this.collection];this.collection=b}onSubmit(t){console.log(t),this.error(t),console.log(this.giveError);let n=t.form.controls.itsNo.value,o=t.form.controls.headName.value,s=t.form.controls.adults.value,a=t.form.controls.children.value,f=t.form.controls.date.value;this.giveError==!1&&(t.resetForm(),this.createObject(n,o,s,a,f),this.saveEntry())}error(t){t.form.status=="INVALID"&&(this.giveError=!0),t.form.status=="VALID"&&(this.noError=!0)}};e.\u0275fac=function(n){return new(n||e)(u(Ue))},e.\u0275cmp=U({type:e,selectors:[["app-entry-form"]],decls:64,vars:3,consts:[[1,"container"],[1,"formContainer"],[3,"ngSubmit"],["itsAdd","ngForm"],[1,"form-group"],["for","itsNo"],["required","","pattern","[0-9]{8}","name","itsNo","type","text","placeholder","Enter your ITS Number","ngModel","",1,"form-control"],["itsNo","ngModel"],["for","headName"],["required","","minlength","3","name","headName","type","text","placeholder","Enter your name","ngModel","",1,"form-control"],["name","ngModel"],["for","adults"],["id","num","required","","min","1","max","5","name","adults","ngModel","",1,"form-control"],["adults","ngModel"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["for","children"],["required","","id","num","max","5","min","0","name","children","ngModel","",1,"form-control"],["children","ngModel"],["value","0"],["for","dates"],["required","","name","date","type","text","ngModel","",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["type","button"],[3,"value"],[1,"alert","alert-danger"],[1,"alert","alert-success"]],template:function(n,o){if(n&1){let s=we();d(0,"div",0)(1,"div",1)(2,"h1"),c(3,"Polling Form"),l(),d(4,"form",2,3),D("ngSubmit",function(){Ee(s);let f=Ie(5);return Ae(o.onSubmit(f))}),d(6,"div",4)(7,"label",5),c(8,"ITS No."),l(),m(9,"input",6,7),l(),m(11,"pre"),d(12,"div",4)(13,"label",8),c(14,"Name"),l(),m(15,"input",9,10),l(),m(17,"pre"),d(18,"div",4)(19,"label",11),c(20,"Adults"),l(),d(21,"select",12,13)(23,"option",14),c(24,"1"),l(),d(25,"option",15),c(26,"2"),l(),d(27,"option",16),c(28,"3"),l(),d(29,"option",17),c(30,"4"),l(),d(31,"option",18),c(32,"5"),l()()(),m(33,"pre"),d(34,"div",4)(35,"label",19),c(36,"Children"),l(),d(37,"select",20,21)(39,"option",22),c(40,"0"),l(),d(41,"option",14),c(42,"1"),l(),d(43,"option",15),c(44,"2"),l(),d(45,"option",16),c(46,"3"),l(),d(47,"option",17),c(48,"4"),l(),d(49,"option",18),c(50,"5"),l()()(),d(51,"div",4)(52,"label",23),c(53,"Polling For"),l(),d(54,"select",24),ne(55,si,2,2,"option",25),l()(),m(56,"pre"),d(57,"button",26),c(58,"Submit"),l()()(),m(59,"pre"),ne(60,ai,2,0,"div",27)(61,li,2,0,"div",28),l(),d(62,"div"),m(63,"button",29),l()}n&2&&(O(55),P("ngForOf",o.availableDates),O(5),P("ngIf",o.giveError),O(),P("ngIf",o.noError))},dependencies:[xe,Pe,dt,ht,pt,J,K,nt,rt,_e,Ce,Ve,ye,ge],styles:[".container[_ngcontent-%COMP%]{width:35%}h1[_ngcontent-%COMP%]{text-align:center;font-family:Gill Sans;font-weight:bolder}.formContainer[_ngcontent-%COMP%]{background-color:#fff;margin-top:5%;border-radius:10px;padding:30px;color:#5e5e54;font-weight:700;font-family:Gill Sans}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:70%;border-width:0 3px 3px 0;border-color:#b8b8b8}#num[_ngcontent-%COMP%]{width:25%}@media (max-width: 1000px){.container[_ngcontent-%COMP%]{width:50%}}@media (max-width: 800px){.container[_ngcontent-%COMP%]{width:70%}}@media (max-height: 500px){container[_ngcontent-%COMP%]{width:100%}}"]});let i=e;return i})();var Q=(()=>{let e=class e{constructor(){this.title="my_app"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=U({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(n,o){n&1&&m(0,"app-entry-form")},dependencies:[gt]});let i=e;return i})();var yt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g({type:e,bootstrap:[Q]}),e.\u0275inj=y({providers:[Ge()],imports:[Te,Re,mt,je]});let i=e;return i})();var di=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g({type:e,bootstrap:[Q]}),e.\u0275inj=y({imports:[yt,Be]});let i=e;return i})();export{di as a};
