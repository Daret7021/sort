const originalTable = document.querySelector('table').innerHTML;
function returnTable()
{
  document.querySelector('table').innerHTML = originalTable;
}
function clear()
{
  document.querySelector('table').innerHTML = originalTable;
}

function sortTable()
    {
     
      var table = document.querySelector('table');
       let firstLvl = document.getElementById("1lv");
      let sel = firstLvl.value;

      let secLvl = document.getElementById("2Lv").value;
      let thiLvl = document.getElementById("3Lv").value;

      let check1 = document.getElementById('as');
      let check2 = document.getElementById('ag');
      let check3 = document.getElementById('a');
      console.log(check1.checked);
      console.log(check2.checked);
      console.log(check3.checked);

      let direction1 = check1.checked ? -1:1;
      let direction2 = check2.checked ? -1:1;
      let direction3 = check3.checked ? -1:1;
      let wrong = document.getElementById('letSort');
      if (firstLvl === secLvl)
        {
          
          wrong.textContent = "Выберите значение";
        }
        else 
        {
          wrong.textContent = "";


        
      
var rows = Array.from(table.rows).slice(1);
   
  rows.sort(function(a, b) {
  
  if (sel === '1' || sel === '2')
  {
    var cityA = a.cells[sel].textContent;
    var cityB = b.cells[sel].textContent;
  }
  else
  {
    var cityA = parseInt(a.cells[sel].textContent);
    var cityB = parseInt(b.cells[sel].textContent);
  }
  if (secLvl === '1' || sel === '2')
  {
    var lvA = a.cells[secLvl].textContent;
    var lvB = b.cells[secLvl].textContent;
  }
  else
  {
    var lvA = parseInt(a.cells[secLvl].textContent);
    var lvB = parseInt(b.cells[secLvl].textContent);
  }
  if (thiLvl === '1' || sel === '2')
    {
          var lv3A = a.cells[thiLvl].textContent;
          var lv3B = b.cells[thiLvl].textContent;
    }
  else
        {
          var lv3A = parseInt(a.cells[thiLvl].textContent);
          var lv3B = parseInt(b.cells[thiLvl].textContent);
        }
      
  if (cityA < cityB) {
    return -1 * direction1;
  }
  if (cityA > cityB) {
    return 1 * direction1 ;
    
  }
 if (lvA < lvB) {
  return -1 * direction2;
    
    }
  if (lvA> lvB) {
     return 1 * direction2;
    
    }
  if (lv3A < lv3B) {
    return -1 * direction3;
    
        }
    if (lv3A > lv3B) {
      return 1 * direction3;
    }
        return 0;
      }
  
);


while (table.rows.length > 1) {
  table.deleteRow(1);
}


for (var i = 0; i < rows.length; i++) {
  table.appendChild(rows[i]);
}
}
    }

function filterTable()
{
  let table = document.querySelector('table');

  let rows = Array.from(table.rows).slice(1);
  let countryName = document.getElementById('country').value;
  let before = document.getElementById('before').value;
  let after = document.getElementById('after').value;
  let pointB = document.getElementById('pointB').value;
  let pointA = document.getElementById('pointA').value;
  let city = document.getElementById('city').value;
  
  
  
  


  rows = rows.filter(row => row.cells[1].textContent.toLowerCase().includes(countryName.toLowerCase()));
  rows = rows.filter(row => row.cells[2].textContent.toLowerCase().includes(city.toLowerCase()));
  
  
  if (before)
  {
    rows = rows.filter(row => row.cells[4].textContent >= before);
  }
  if (after)
  {
    rows = rows.filter(row => row.cells[4].textContent <= after);
  }
  if (pointB)
  {
    rows = rows.filter(row => row.cells[3].textContent >= pointB);
  }
  if (pointA)
  {
    rows = rows.filter(row => row.cells[3].textContent <= pointA);
  }
  
  
  
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  for (var i = 0; i < rows.length; i++) {
    table.appendChild(rows[i]);
  }
}


const select1 = document.getElementById('1lv');
const select2 = document.getElementById('2Lv');
const select3 = document.getElementById('3Lv');



select1.addEventListener('change', function() {
    updateSelectOptions();
});


select2.addEventListener('change', function() {
    updateSelectOptions();
});

select3.addEventListener('change', function() {
    updateSelectOptions();
});



function updateSelectOptions() {
    const selectedValues = [
        select1.value,
        select2.value,
        select3.value
    ];

   
    enableAllOptions(select1);
    enableAllOptions(select2);
    enableAllOptions(select3);

  
    selectedValues.forEach((value) => {
        disableOption(select1, value);
        disableOption(select2, value);
        disableOption(select3, value);
    });
}


function enableAllOptions(select) {
    for (let option of select.options) {
        option.disabled = false;
    }
}


function disableOption(select, valueToExclude) {
    for (let option of select.options) {
        if (option.value === valueToExclude) {
            option.disabled = true;
        }
    }
}
