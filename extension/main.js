// Stearells (C)
// github.com/stearells
// ыЫ :-)

// node observers
let bottomNode = document.getElementById('bottom');
let bottomObs = new MutationObserver(() => {
    bottomNode.style.background = 'rgba(0, 0, 0, 0.0)';
    bottomNode.style.backdropFilter = 'blur(3px)';
});

bottomObs.observe(bottomNode, {attributes: true, attributeFilter: ['style']});


function addBG(f) {
    let video = document.createElement('video');
    video.id = 'vbg';

    const attr = 'autoplay muted loop'.split(' ');
    attr.forEach(e => {video.setAttribute(e, '');});

    let source = document.createElement('source');
    source.setAttribute('src', f);
    source.setAttribute('type', 'video/mp4');
    
    video.appendChild(source);
    document.body.appendChild(video);
}

addBG(res('data/bg.mp4'));