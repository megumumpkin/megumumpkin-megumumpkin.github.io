var navOverlayOn = false;
var navOverlayElement = document.getElementById('nav-overlay');

function toggleNavOverlay()
{
    navOverlayOn = !navOverlayOn;
    if(navOverlayOn)
    {
        navOverlayElement.classList.remove('hidden');
    }
    if(!navOverlayOn)
    {
        navOverlayElement.classList.add('hidden');
    }
}