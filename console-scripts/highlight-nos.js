// highlights guests who have not been sent STD or invitation

var stdNos = document.querySelectorAll('*[id*="save-the-date-sent-no"]');
var invNos = document.querySelectorAll('*[id*="invitation-sent-no"]');

for (let stdNo of stdNos)
{
   if (stdNo.checked)
   {
    stdNo.closest('.table-row').style.backgroundColor = 'red';
   }
}

for (let invNo of invNos)
{
  if (invNo.checked)
  {
    invNo.closest('.table-row').style.backgroundColor = 'blue';
  }
}
