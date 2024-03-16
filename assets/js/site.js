document.addEventListener('DOMContentLoaded', () => {
    function openModal($el) { $el.classList.add('is-active'); }
    function closeModal($el) { $el.classList.remove('is-active'); }

    (document.querySelectorAll('.modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);
        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');
        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    function initiateAppDownload () {
        const userAgent = navigator.userAgent.toLowerCase();

        // On Android-powered devices, redirect to the Play Store
        if (userAgent.indexOf("android") > -1) {
            window.location = 'https://play.google.com/store/apps/details?id=download.unisched.app';
            return;
        }

        // On Windows-powered devices, redirect to the Microsoft Store
        if (userAgent.indexOf("windows") > -1) {
            window.location = 'https://apps.microsoft.com/detail/UniSched/9pg4lx8swxcm?launch=true&mode=mini';
            return;
        }

        // On other devices, redirect to the web app
        window.location = 'https://app.unisched.download/';
    }

    (document.querySelectorAll('.download-button') || []).forEach(($button) => {
        $button.addEventListener('click', initiateAppDownload);
    });
});