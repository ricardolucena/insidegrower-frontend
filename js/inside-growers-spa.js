
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('#ig-main-content');
    if (!container) return;

    function attachInternalButtons() {
        const internalButtons = container.querySelectorAll('[data-page]');
        internalButtons.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const page = btn.getAttribute('data-page');
                if (page) {
                    loadPage(page);
                }
            });
        });
    }

    function loadPage(page) {
        fetch('partials/' + page + '.html', { cache: 'no-store' })
            .then(resp => {
                if (!resp.ok) throw new Error('Erro ao carregar página: ' + page);
                return resp.text();
            })
            .then(html => {
                container.innerHTML = html;
                attachInternalButtons();
            })
            .catch(err => {
                container.innerHTML = '<div class="alert alert-danger">Erro ao carregar conteúdo: ' + err.message + '</div>';
            });
    }

    document.querySelectorAll('[data-page-link]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = link.getAttribute('data-page-link');
            if (page) {
                loadPage(page);
            }
        });
    });

    loadPage('dashboard');
});
