/* Guided case assessment. Only in-memory state; nothing is persisted. */
(function(){
function setup(){
const section=document.getElementById('professional'),form=document.getElementById('caseForm'),results=document.getElementById('caseResults');if(!section||!form||!results)return;
section.querySelectorAll('a[href="#assistance"]').forEach(a=>a.remove());
const header=document.createElement('div');header.className='wizard-header';header.innerHTML='<h3>Guided household assessment</h3><p class="muted">Complete only the information available. All steps can be revisited before generating an assessment.</p><div class="wizard-steps" role="group" aria-label="Assessment steps"></div>';form.parentNode.insertBefore(header,form);
const steps=['Household','Financial assessment','Housing challenges','Intervention planning','Results & action plan'];const panels=steps.map((name,i)=>{const div=document.createElement('section');div.className='wizard-panel';div.dataset.wizardStep=i;div.hidden=i!==0;div.innerHTML='<h3>Step '+(i+1)+' of 5 · '+name+'</h3>';if(i<4)form.appendChild(div);else section.insertBefore(div,results);return div});
const allFields=form.querySelector('.top-fields');const fields=[...allFields.children];const group=(idxs)=>{const g=document.createElement('div');g.className='top-fields';idxs.forEach(i=>{if(fields[i])g.appendChild(fields[i])});return g};
panels[0].append(group([0,1]));panels[0].insertAdjacentHTML('beforeend','<p class="muted">Gross income is for housing-cost burden. Take-home income is for the monthly spending balance. Leave either blank when unknown.</p>');
panels[1].append(group([2,3,4,5,6,7,8,9]));
const extraHeading=form.querySelector('.section-heading');const extraRows=document.getElementById('caseExtraRows'),add=document.getElementById('caseAddExpense');panels[1].append(extraHeading,extraRows,add);
panels[2].append(group([10,11]));
// Move all remaining hardship, household needs and screening controls to step 3.
while(form.firstChild && form.firstChild!==panels[0]){panels[2].append(form.firstChild)}
const leftover=[...form.children].filter(el=>!panels.slice(0,4).includes(el));leftover.forEach(el=>panels[2].append(el));
// Step 4 presents intended intervention before results generation.
panels[3].insertAdjacentHTML('beforeend','<p class="muted">Review the reported circumstances. Generate an assessment to evaluate possible assistance, repayment scenarios, and next steps. This tool does not determine eligibility.</p>');
const submit=panels[2].querySelector('button[type="submit"]');if(submit){submit.textContent='Generate assessment and continue';panels[3].append(submit)}
panels[4].append(results);results.hidden=true;
// Editable review and completeness are inside results only, independent of calculation routines.
const review=document.createElement('div');review.className='wizard-review';review.innerHTML='<h3>Information review</h3><p id="proCompleteness" class="muted"></p><h3>Editable action plan notes</h3><label for="proNotes">Case manager notes or revised action steps (optional)</label><textarea id="proNotes" rows="4" placeholder="Add agreed steps, responsible person, and due date. Avoid client identifiers."></textarea><p class="muted">These notes are not saved. Review all details before printing or downloading.</p><button type="button" id="proPrintReview" class="outline">Print complete assessment and notes</button>';
panels[4].append(review);
document.getElementById('proPrintReview').onclick=()=>window.print();
let active=0;const tabs=header.querySelector('.wizard-steps');
steps.forEach((s,i)=>{const b=document.createElement('button');b.type='button';b.textContent=(i+1)+'. '+s;b.setAttribute('aria-label','Go to '+s);b.onclick=()=>show(i);tabs.appendChild(b)});
const controls=document.createElement('div');controls.className='wizard-controls';controls.innerHTML='<button class="outline" type="button" id="wizardBack">← Back</button><button class="primary" type="button" id="wizardNext">Continue →</button>';section.append(controls);
function completeness(){const ids=['caseGross','caseNet','caseRent','caseUtilities','caseArrears','caseIssue','caseUrgency','caseState'];const done=ids.filter(id=>{const e=document.getElementById(id);return e&&e.value!==''}).length;document.getElementById('proCompleteness').textContent=`${done} of ${ids.length} key assessment fields provided. Missing details should be verified; incomplete assessments can still be downloaded.`}
function show(i){active=Math.max(0,Math.min(4,i));panels.forEach((el,k)=>el.hidden=k!==active);[...tabs.children].forEach((b,k)=>{b.setAttribute('aria-current',k===active?'step':'false')});document.getElementById('wizardBack').disabled=active===0;document.getElementById('wizardNext').textContent=active===3?'Generate assessment →':active===4?'Start review again':'Continue →';completeness();header.scrollIntoView({block:'start',behavior:'instant'})}
document.getElementById('wizardBack').onclick=()=>show(active-1);
document.getElementById('wizardNext').onclick=()=>{if(active===3){if(typeof window.buildCase==='function')window.buildCase();else form.requestSubmit();if(!results.hidden)show(4)}else if(active===4)show(0);else show(active+1)};
form.addEventListener('submit',()=>{queueMicrotask(()=>{if(!results.hidden)show(4)})});
document.getElementById('clearCase')?.addEventListener('click',()=>{document.getElementById('proNotes').value='';show(0)});
show(0)
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();
})();
