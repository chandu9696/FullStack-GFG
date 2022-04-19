let ply1=document.querySelector('.btn1');
let ply2=document.querySelector('.btn2');
let rese=document.querySelector('.btn');
let disp_p1=document.querySelector('.score_show1')
let disp_p2=document.querySelector('.score_show2')



flag=0;
var player_score1=0;
var player_score2=0;
target=50;

rese.addEventListener('click',function()
{
    flag=0;
    player_score1=0;
    player_score2=0;
    disp_p1.textContent=player_score1;
    disp_p2.textContent=player_score2;


})
ply1.addEventListener('click',function()
{
    if(flag)
    {
        alert('wrong player1');
        return
    }
    flag=1;
    let gen_number=5;
    player_score1+=gen_number;
    disp_p1.textContent=player_score1;
    if(player_score1>=target)
    {
        alert(`Player 1 Win ${player_score1} Game ReStart`);
        rese.click();
    }
})

ply2.addEventListener('click',function()
{
    if(!flag)
    {
        console.log(flag)
        alert('wrong player2');
        return
    }
    let gen_number=5;
    player_score2+=gen_number;
    disp_p2.textContent=player_score2;
    if(player_score2>=target)
    {
        alert(`Player 1 Win ${player_score2} Game ReStart`);
        rese.click();
    }
    flag=0;
})