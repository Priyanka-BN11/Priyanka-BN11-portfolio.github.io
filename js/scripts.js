function active(a)
{
    items = document.querySelectorAll('.tabs.active');

    if(items.length) 
    {
        items[0].className = 'tabs';
    }

    a.className = 'tabs active';
}