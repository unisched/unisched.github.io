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
    'app_links': [
        {
            'title': 'Запустити',
            'subtitle': 'веб-версію',
            'icon': 'assets/icons/pwa.svg',
            'link': 'https://app.unisched.download/',
            'link_class': 'hide-on-mobile'
        },
        {
            'title': 'Додаток на',
            'subtitle': 'Google Play',
            'icon': 'assets/icons/google_play.svg',
            'link': 'https://play.google.com/store/apps/details?id=download.unisched.app',
            'link_class': ''
        },
        {
            'title': 'Встановити',
            'subtitle': 'на iPhone',
            'icon': 'assets/icons/app_store.svg',
            'link': 'https://app.unisched.download/',
            'link_class': ''
        },
    ],
    'app_infos': [
        {
            'title': 'Додаток для Android',
            'link': 'https://play.google.com/store/apps/details?id=download.unisched.app',
            'icon_button': 'assets/img/google_play.png',
            'description': 'Завантажити для мобільних пристроїв на базі Android 8 і вище з Google Play'
        },
        {
            'title': 'Додаток для Windows',
            'link': 'https://microsoft.com/store/productId/9PG4LX8SWXCM',
            'icon_button': 'assets/img/microsoft_store.svg',
            'description': 'Встановити на пристрій з ОС Windows 10 версії 19041 чи новіше, а також для усіх актуальних версій ОС Windows 11'
        },
    ],
    'features': [
        {
            'icon_name': 'signal_wifi_off',
            'title': 'Доступ без Інтернету',
            'description': 'Використовуй усі функції додатка з поганим зв\'язком або взагалі без доступу до мережі Інтернет'
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
            'image': 'assets/logos/lviv_university.svg'
        },
        {
            'link': 'https://help.unisched.download/institutions/',
            'image': 'assets/logos/add_university.svg'
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
            'author': 'Викладач ФЕКТ',
            'text': 'Користуюся як PWA на своєму айфоні, єдине що страшно дивитися на восьмі пари в розкладі. Можна їх прибрати?'
        },
        {
            'rating': 5,
            'author': 'З приватних повідомлень',
            'text': 'Шкода, що дізнався про додаток вже під кінець семестру. Цікавий проект, бажаю успіхів з ним, вже завантажив'
        },
        {
            'rating': 4,
            'author': 'Студентка ФЕКТ',
            'text': 'Дуже зручно! Додай ще оцінки з Деканату — тоді доставлю ще одну зірку і буду сидіти в ньому 24/7'
        },
        {
            'rating': 5,
            'author': 'Відгук з Google Play',
            'text': 'Сподобалося те, що не треба заходити на сайт і шукати свій розклад, тепер я можу просто відкрити цей застосунок'
        },
        {
            'rating': 5,
            'author': 'Викладач ЛНУ',
            'text': 'Дізнався про додаток ще в листопаді від студентів, з того часу було багато змін, які мені неабияк сподобалися'
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
    loadAppLinks();
    loadFeatures();
    loadPartners();
    loadTestimonials();
    loadAppInfos();
    //hide_splash_screen();

    (adsbygoogle = window.adsbygoogle || []).push({});
}

function loadAppLinks() {
    const template = document.getElementById('unisched_app_links_template').innerHTML;
    const rendered = Mustache.render(template, model);
    document.getElementById('unisched_app_links').innerHTML = rendered;
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

function loadAppInfos() {
    const template = document.getElementById('unisched_app_infos_template').innerHTML;
    const rendered = Mustache.render(template, model);
    document.getElementById('unisched_app_infos').innerHTML = rendered;
}

function hide_splash_screen() {
    setTimeout(function () {
        document.getElementById('splash_screen').classList.add('is-hidden');
    }, 1000);
}