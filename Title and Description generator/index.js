const trigger=(event)=>
{
    event.preventDefault();

    let val=document.querySelector('.input_box').value;

    if(val.trim().toLowerCase()==='tea')
    {
        document.querySelector('.title').textContent="Tea";
        document.querySelector('.desc').textContent='Please Drink Tea'
    }
    else if(val.trim().toLowerCase()=='coffe')
    {
        document.querySelector('.title').textContent="coffee";
        document.querySelector('.desc').textContent='Please not Drink Tea'
    }
    else
    {
        document.querySelector('.input_box').classList.add('bor');
    }
}



document.querySelector('.btn').addEventListener('click',trigger)