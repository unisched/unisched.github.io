/*
 *  ________  ___  ________  ___  __    ________  ________  ___  ________  ________  ___      ___ 
 * |\   ____\|\  \|\   __  \|\  \|\  \ |\   __  \|\   ___ \|\  \|\   __  \|\   __  \|\  \    /  /|
 * \ \  \___|\ \  \ \  \|\  \ \  \/  /|\ \  \|\  \ \  \_|\ \ \  \ \  \|\  \ \  \|\  \ \  \  /  / /
 *  \ \_____  \ \  \ \   _  _\ \   ___  \ \   __  \ \  \ \\ \ \  \ \   _  _\ \  \\\  \ \  \/  / / 
 *   \|____|\  \ \  \ \  \\  \\ \  \\ \  \ \  \ \  \ \  \_\\ \ \  \ \  \\  \\ \  \\\  \ \    / /  
 *     ____\_\  \ \__\ \__\\ _\\ \__\\ \__\ \__\ \__\ \_______\ \__\ \__\\ _\\ \_______\ \__/ /   
 *    |\_________\|__|\|__|\|__|\|__| \|__|\|__|\|__|\|_______|\|__|\|__|\|__|\|_______|\|__|/    
 *    \|_________|
 */

const model = {
    'features': [
        {
            'icon_name': 'signal_wifi_off',
            'title': 'Доступ без Інтернету',
            'description': 'Використовуй функції додатка з поганим зв\'язком або взагалі без доступу до мережі Інтернет'
        },
        {
            'icon_name': 'videocam',
            'title': 'Заходь на онлайн-пари',
            'description': 'Переходь до онлайнових занять в Microsoft Teams, Google Meet та інших додатках прямо з розкладу'
        },
        {
            'icon_name': 'stream_apps',
            'title': 'Всі сервіси вже в додатку',
            'description': 'Переходь до кабінету студента і веб-сервісів твого закладу освіти в один дотик — прямо з UniSched'
        },
        {
            'icon_name': 'data_loss_prevention',
            'title': 'Зручний пошук розкладу',
            'description': 'Переглядай розклад занять своїх друзів і викладачів за допомогою зручного пошукового сервісу'
        },
        {
            'icon_name': 'ios_share',
            'title': 'Ділися скрінами розкладу',
            'description': 'Скидай їх одногрупникам, які досі користуються Windows 2000, тож ніяк не встановлять собі UniSched'
        },
        {
            'icon_name': 'thermostat',
            'title': 'Дивись прогноз погоди',
            'description': 'Зручний віджет з температурою на день і погодними умовами поруч з розкладом пар на день'
        },
        {
            'icon_name': 'lock',
            'title': 'Повага до твоїх даних',
            'description': 'Ми з турботою ставимося до твоєї особистої інформації, тож ніяк не збираємо її, для будь-яких цілей'
        },
        {
            'icon_name': 'featured_seasonal_and_gifts',
            'title': 'Повністю безкоштовний',
            'description': 'Усі функції додатка доступні для всіх користувачів без додаткової плати — завдяки вашим донатам'
        },
        {
            'icon_name': 'visibility_off',
            'title': 'Відсутність реклами',
            'description': 'В UniSched немає ані реклами, ані «спеціальних пропозицій», адже ми теж ним користуємося, щодня'
        }
    ],
    'partners': [
        {
            'link': 'https://lnu.edu.ua/',
            'image': 'assets/institutions/lviv_university.png'
        },
        {
            'link': 'https://polissiauniver.edu.ua/',
            'image': 'assets/institutions/polissia_university.png'
        },
        {
            'link': 'https://help.unisched.download/institutions/',
            'image': 'assets/institutions/add_university.png'
        }
    ],
    'testimonials': [
        {
            'rating': 5,
            'author': 'Відгук з Google Play',
            'text': 'Подобається додаток, бо мені не треба заходити в Telegram, аби дивитись свій розклад пар'
        },
        {
            'rating': 5,
            'author': 'Особистий відгук',
            'text': 'Користуюся як PWA на своєму айфоні, єдине що страшно дивитися на восьмі пари в розкладі. Можна їх прибрати?'
        },
        {
            'rating': 5,
            'author': 'Відгук з Google Play',
            'text': 'Дуже зручно, можна відразу знайти свій розклад, а не шукати його на сайті університету ще й в таблицях'
        },
        {
            'rating': 5,
            'author': 'Відгук з Google Play',
            'text': 'Не дочекаюся, коли вже у ньому з\'являться мої оцінки, щоб не заходити на сайт університету'
        },
        {
            'rating': 5,
            'author': 'Відгук з Google Play',
            'text': 'Сподобалося те, що не треба заходити на сайт і шукати свій розклад, тепер я можу просто відкрити цей застосунок'
        },
        {
            'rating': 5,
            'author': 'Відгук з Google Play',
            'text': 'Додаток дуже зручний і корисний. Шкода, що він з\'явився у Поліському лише на початку цього семестру.'
        }
    ],
    'rating_stars': function () {
        let temp_html = '';
        for (let i = 1; i <= 5; i++) {
            let positive_class = this.rating >= i ? 'is-positive' : '';
            temp_html += '<span class="material-symbols-outlined ' + positive_class + '">star</span>';
        }
        return temp_html;
    }
};

loadDataModel();

function loadDataModel() {
    loadFeatures();
    loadPartners();
    loadTestimonials();
    hide_splash_screen();

    (adsbygoogle = window.adsbygoogle || []).push({});
}

function loadFeatures() {
    const template = document.getElementById('unisched_features_template').innerHTML;
    const rendered = Mustache.render(template, model);
    document.getElementById('unisched_features').innerHTML = rendered;
}

function loadPartners() {
    const template = document.getElementById('unisched_partners_template').innerHTML;
    const rendered = Mustache.render(template, model);
    document.getElementById('unisched_partners').innerHTML = rendered;
}

function loadTestimonials() {
    const template = document.getElementById('unisched_testimonials_template').innerHTML;
    const rendered = Mustache.render(template, model);
    document.getElementById('unisched_testimonials').innerHTML = rendered;
}

function hide_splash_screen() {
    setTimeout(function () {
        document.getElementById('splash_screen').classList.add('is-hidden');
    }, 1000);
}