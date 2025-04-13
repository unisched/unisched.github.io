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

document.addEventListener('DOMContentLoaded', async () => {
    initializePlatformDependantContent();

    function initializePlatformDependantContent() {
        const userAgentParser = new UAParser();
        const userAgentOS = userAgentParser.getOS();

        // Android
        if (userAgentOS.name.toLowerCase() === 'android') {
            (document.querySelectorAll('.for-ios') || []).forEach((e) => e.style.display = 'none');
            (document.querySelectorAll('.mobile-qr') || []).forEach((e) => e.style.setProperty('display', 'none', 'important'));
            return;
        }

        // iPhone, iPad, iPod, MacOS
        if (userAgentOS.name.toLowerCase() === 'ios') {
            (document.querySelectorAll('.for-android') || []).forEach((e) => e.style.display = 'none');
            (document.querySelectorAll('.mobile-qr') || []).forEach((e) => e.style.setProperty('display', 'none', 'important'));
            return;
        }
    }

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
});