let btn = () => 
{
    let c = document.getElementById('sele');
    if(c.checked == true)
    {
        let x = document.getElementsByClassName('vi1');
        for (let i of x)
        {
            i.checked = true;
        }
    }
    else
    {
        let x = document.getElementsByClassName('vi1');
        for(let i of x)
        {
            i.checked = false;
        }
    }
}

let vi = () => 
{
    let x = document.getElementsByClassName('vi1');
    let c = document.getElementById('sele');
    count = 0;

    for(let i of x)
    {
        if(i.checked == true)
        {
            count++;
            console.log(count);
            // console.log(x.length);
            if(count ==  x.length)
            {
                c.checked = true;
            }
        }
        else
        {
            c.checked = false;
        }
    }
}
