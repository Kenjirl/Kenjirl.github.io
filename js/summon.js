$(document).ready(function() {
    const name = 'Kenji Ganteng';
    const message = "Nah bruh this form ain't really doin' shit. If you wanna reach out to me, you can contact me form my social media I've provide in this section. Anyway, I don't really know what to say anymore, so ... this is where this shit ends. lol";

    $('#name').attr('maxlength', name.length);
    $('#message').attr('maxlength', message.length);
    
    $('#name').on('input', function() {
        let currentLength = $(this).val().length;
        $(this).val(name.substring(0, currentLength));
    });
    
    $('#message').on('input', function() {
        let currentLength = $(this).val().length;
        $(this).val(message.substring(0, currentLength));
    });

    // Social Media
    const summons = [
        {
            icon: 'github',
            url: 'https://github.com/Kenjirl',
        },
        {
            icon: 'linkedin',
            url: 'https://www.linkedin.com/in/kencong/',
        },
        {
            icon: 'instagram',
            url: 'https://www.instagram.com/kenjirl_/',
        },
        {
            icon: 'discord',
            url: 'https://www.discordapp.com/users/Kencong#7353',
        },
        {
            icon: 'x-twitter',
            url: 'https://twitter.com/kencongun',
        },
        {
            icon: 'telegram',
            url: 'https://t.me/Kencoong',
        },
    ];

    let k = 0;
    let index = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let value = (i + j) % 2;
            let square = $('<div>');
            if (value === 0) {
                square.append(`
                    <a class="w-full aspect-square flex items-center justify-center outline-none text-xl lg:text-5xl bg-cst-black text-cst-black hover:bg-cst-cream focus:bg-cst-cream transition-all"
                        href="${summons[k].url}" target="_blank" id="summonUrl-${index}">
                        <i class="fa-brands fa-${summons[k].icon}"></i>
                    </a>
                `);
            } else {
                square.append(`
                    <a class="w-full aspect-square flex items-center justify-center outline-none text-xl lg:text-5xl bg-transparent text-cst-cream hover:bg-cst-black focus:bg-cst-black transition-all"
                        href="${summons[k].url}" target="_blank" id="summonUrl-${index}">
                        <i class="fa-brands fa-${summons[k].icon}"></i>
                    </a>
                `);
            }
            $('#squareSummon').append(square);
            index++;
            k++;
            if (k > 5) {
                k = 0;
            }
        }
    }

    $('#summonButton').click(function () { 
        const randomNum = Math.floor(Math.random() * 64);
        $('#summonUrl-'+randomNum).focus();
    });
});
