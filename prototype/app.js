'use strict';
const $ = id => document.getElementById(id);
const seed = {
  A: '', B: '',
  C: 'Ý cần nhớ\nPrecision đo tỷ lệ đúng trong những dự đoán dương tính (S1). Recall đo tỷ lệ tìm được trong tất cả trường hợp thực sự dương tính (S2). Precision cao không tự đảm bảo recall cao (S3).\n\nĐiểm chưa hiểu\nLàm sao biết hệ thống đang bỏ sót nhiều? Cần kiểm tra FN và recall; mình vẫn cần một ví dụ cụ thể.\n\nNguồn: S1–S3. Bản nháp AI, cần tự kiểm tra.'
};
const descriptions = {
  A: ['Bạn chọn và viết', 'Tự viết theo cách của bạn. AI chỉ gợi ý cấu trúc khi bạn yêu cầu; bạn chọn nội dung cần giữ.'],
  B: ['Chọn trọng tâm trước', 'AI sẽ tạo nháp từ học liệu, dấu vết và trọng tâm bạn chọn. Bạn kiểm tra và chỉnh trước khi lưu.'],
  C: ['Kiểm tra bản nháp', 'AI đã tạo nháp từ học liệu và dấu vết của bạn. Bạn có thể sửa, bỏ hoặc tự viết lại trước khi lưu.']
};
let current = null;
let state = {};
function initialise(){state=Object.fromEntries(['A','B','C'].map(k=>[k,{note:seed[k],saved:null,history:[],focus:'question'}]));}
function message(text){$('status').textContent=text;}
function renderSaved(){const s=state[current];$('saved').hidden=s.saved===null;$('preview').textContent=s.saved||'';}
function checkpoint(){const s=state[current];s.history.push({note:s.note,saved:s.saved,focus:s.focus});$('undo').disabled=false;}
function replace(text){checkpoint();state[current].note=text;state[current].saved=null;$('note').value=text;renderSaved();}
function show(option){current=option;$('context').hidden=true;$('workspace').hidden=false;$('badge').textContent='Phương án '+option;$('title').textContent=descriptions[option][0];$('expectation').textContent=descriptions[option][1];$('ask').hidden=option!=='B';$('suggest').hidden=option!=='A';$('note').value=state[option].note;$('focus').value=state[option].focus;$('undo').disabled=!state[option].history.length;renderSaved();message('');document.querySelectorAll('[data-option]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.option===option)));document.querySelectorAll('article').forEach(a=>a.classList.remove('review'));}
document.querySelectorAll('[data-option]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.option)));
$('back').addEventListener('click',()=>{$('workspace').hidden=true;$('context').hidden=false;});
$('reset').addEventListener('click',()=>{initialise();current=null;$('workspace').hidden=true;$('context').hidden=false;});
$('note').addEventListener('input',()=>{checkpoint();state[current].note=$('note').value;state[current].saved=null;renderSaved();message('Nội dung đã thay đổi; cần xác nhận lại để lưu.');});
$('focus').addEventListener('change',()=>{state[current].focus=$('focus').value;message('Trọng tâm đã đổi. Bấm tạo bản nháp nếu muốn thay nội dung; có thể hoàn tác.');});
$('suggest').addEventListener('click',()=>{replace(state[current].note+(state[current].note?'\n\n':'')+'Ý cần nhớ:\n\nĐiểm chưa hiểu:\n\nNguồn để xem lại: S1 / S2 / S3');message('Đã thêm khung gợi ý. Bạn tự chọn ý và viết nội dung.');});
$('generate').addEventListener('click',()=>{const question=$('focus').value==='question';replace(question?'Câu hỏi của mình: Làm sao nhận biết hệ thống bỏ sót nhiều?\n\nÝ để xem lại: Recall = TP / (TP + FN) (S2). Recall thấp có thể cho thấy nhiều trường hợp bị bỏ sót. Cần cân nhắc hậu quả false negative (S3).\n\nĐiểm chưa hiểu: Mình cần một ví dụ để tự tính FN và recall.\n\nNguồn: S2, S3. Nháp cần kiểm tra.':'Precision khác Recall thế nào?\n\nPrecision xét những dự đoán dương tính (S1); Recall xét tất cả trường hợp thực sự dương tính (S2). Hai mẫu số khác nhau.\n\nĐiểm chưa hiểu: Làm sao biết đang bỏ sót nhiều? Mình cần tự tính recall trong một ví dụ.\n\nNguồn: S1–S3. Nháp cần kiểm tra.');message('Đã tạo nháp theo trọng tâm. Bạn có thể sửa hoặc bỏ trước khi xác nhận.');});
$('source').addEventListener('click',()=>{document.querySelectorAll('article').forEach(a=>a.classList.add('review'));$('S1').scrollIntoView({behavior:'smooth',block:'center'});message('Nguồn S1–S3 được đánh dấu ở phần học liệu.');});
$('reject').addEventListener('click',()=>{replace('');message('Đã bỏ nội dung. Bạn có thể tự viết hoặc hoàn tác.');});
$('undo').addEventListener('click',()=>{const s=state[current],prev=s.history.pop();if(!prev)return;Object.assign(s,prev);$('note').value=s.note;$('focus').value=s.focus;$('undo').disabled=!s.history.length;renderSaved();message('Đã hoàn tác thao tác trước.');});
$('save').addEventListener('click',()=>{const s=state[current];if(!s.note.trim()){message('Hãy viết hoặc tạo một ghi chú trước khi lưu.');$('note').focus();return;}checkpoint();s.saved=s.note;renderSaved();message('Đã lưu trong phiên này. Bạn có thể tải note để xem lại; refresh sẽ mất dữ liệu phiên.');});
$('download').addEventListener('click',()=>{const text=state[current].saved;if(text===null)return;const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='AI-Notes-'+current+'.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
initialise();
