var home_head_current_idx = 0
var home_head_register_find_index = 0
var home_head_register_continue = true
var home_head_elements = []

while (home_head_register_continue)
{
    var find_str = 'home_head_' + home_head_register_find_index;
    var find_obj = document.getElementById(find_str);

    if(find_obj != null)
    {
        home_head_elements.push(find_obj)
    }
    else
        break;

    home_head_register_find_index++;
}

function updateHomeHead()
{
    home_head_current_idx = (home_head_current_idx + 1) % home_head_elements.length;
    for (var i = 0; i < home_head_elements.length; i++)
    {
        // console.log(i);
        if(i == home_head_current_idx)
        {
            home_head_elements[i].classList.add('hidden');
        }
        else
        {
            home_head_elements[i].classList.remove('hidden');
        }
    }
}

function startHomeHead(dom_id)
{
    document.getElementById(dom_id).classList.add('ready');
}

setInterval(function(){
    if(home_head_elements.length > 1) updateHomeHead();
}, 6000);
