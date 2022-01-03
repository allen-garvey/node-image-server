document.querySelectorAll('#files .icon-image').forEach((link) => {
    const image = document.createElement('img');
    image.src = link.href;
    image.setAttribute('loading', 'lazy');
    link.prepend(image);
});