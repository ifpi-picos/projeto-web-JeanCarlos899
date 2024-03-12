addEventListener('load', () => {
    const text = {
        "h2": "Olá, eu sou o",
        "span": "Jean Carlos :)",
        "p": "Desenvolvedor Full Stack Jr."
    };
    const time = 80;

    const h2 = document.querySelector('.title h2');
    const span = document.querySelector('.title span');
    const p = document.querySelector('.title p');

    let i = 0;
    let j = 0;
    let k = 0;

    const type = () => {
        if (i < text.h2.length) {
            h2.innerHTML += text.h2.charAt(i);
            i++;
            setTimeout(type, time);
        } else if (j < text.span.length) {
            span.innerHTML += text.span.charAt(j);
            j++;
            setTimeout(type, time);
        } else if (k < text.p.length) {
            p.innerHTML += text.p.charAt(k);
            k++;
            setTimeout(type, time);
        }
    };

    type();
});

