// FlowerBot VK Mini App

// Данные приложения
const appData = {
    events: [],
    bouquets: {
        'День рождения': [
            {
                id: 'b1',
                name: 'Радужное настроение',
                price: '2500 ₽',
                description: 'Яркий микс цветов',
                image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=300&h=300&fit=crop'
            },
            {
                id: 'b2',
                name: 'Солнечный букет',
                price: '1800 ₽',
                description: 'Желтые хризантемы',
                image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300&h=300&fit=crop'
            },
            {
                id: 'b3',
                name: 'Весенняя радость',
                price: '2200 ₽',
                description: 'Тюльпаны и нарциссы',
                image: 'https://images.unsplash.com/photo-1574684891174-df8bc2d51162?w=300&h=300&fit=crop'
            }
        ]
    }
};

// Инициализация VK Bridge
function initVK() {
    if (window.vkBridge) {
        vkBridge.send('VKWebAppInit')
            .then(data => {
                console.log('VK Bridge initialized:', data);
            })
            .catch(error => {
                console.log('VK Bridge error:', error);
            });
    }
}

// Навигация между экранами
function showScreen(screenId) {
    // Скрыть все экраны
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показать выбранный экран
    document.getElementById(screenId).classList.add('active');
}

// Форматирование даты
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('ru-RU', options);
}

// Подсчет дней до события
function getDaysUntil(dateString) {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Обработка формы добавления события
function handleEventForm() {
    const form = document.getElementById('event-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const eventData = {
            id: Date.now().toString(),
            type: document.getElementById('event-type').value,
            date: document.getElementById('event-date').value,
            recipientName: document.getElementById('recipient-name').value,
            comment: document.getElementById('event-comment').value,
            remindersEnabled: document.getElementById('reminders-enabled').checked
        };
        
        // Добавляем событие
        appData.events.push(eventData);
        
        // Показываем уведомление
        if (window.vkBridge) {
            vkBridge.send('VKWebAppTapticNotificationOccurred', {type: 'success'});
        }
        
        // Очищаем форму
        form.reset();
        
        // Возвращаемся на главный экран
        showScreen('home-screen');
        
        // Обновляем список событий
        renderEvents();
        
        alert('Событие успешно добавлено! Вы получите напоминания в нужное время.');
    });
}

// Отображение событий
function renderEvents() {
    const eventsList = document.getElementById('events-list');
    if (!eventsList) return;
    
    if (appData.events.length === 0) {
        eventsList.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📅</span>
                <p>У вас пока нет добавленных событий</p>
                <p class="empty-subtitle">Добавьте первое событие, чтобы получать напоминания</p>
            </div>
        `;
        return;
    }
    
    const eventsHTML = appData.events.map(event => {
        const daysUntil = getDaysUntil(event.date);
        const daysText = daysUntil === 0 ? 'Сегодня!' : 
                        daysUntil === 1 ? 'Завтра' : 
                        daysUntil > 1 ? `Через ${daysUntil} дней` : 
                        'Прошедшее событие';
        
        return `
            <div class="event-card" data-event-id="${event.id}">
                <div class="event-info">
                    <h4>${event.type}</h4>
                    <p><strong>Получатель:</strong> ${event.recipientName}</p>
                    <p><strong>Дата:</strong> ${formatDate(event.date)}</p>
                    <p class="days-until ${daysUntil <= 3 ? 'urgent' : ''}">${daysText}</p>
                </div>
                <div class="event-actions">
                    <button class="btn btn--small" onclick="showBouquets('${event.type}', '${event.id}')">
                        Выбрать букет
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    eventsList.innerHTML = eventsHTML;
}

// Показать букеты для события
function showBouquets(eventType, eventId) {
    const bouquets = appData.bouquets[eventType] || appData.bouquets['День рождения'];
    
    // Здесь можно открыть экран с каруселью букетов
    // Для демонстрации просто покажем alert
    alert(`Подборка букетов для события "${eventType}" будет показана в отдельном экране`);
}

// Отображение топ-букетов
function renderTopBouquets() {
    const topBouquetsContainer = document.getElementById('top-bouquets');
    if (!topBouquetsContainer) return;
    
    const topBouquets = appData.bouquets['День рождения']; // Для примера
    
    const bouquetsHTML = topBouquets.map(bouquet => `
        <div class="bouquet-card">
            <img src="${bouquet.image}" alt="${bouquet.name}" class="bouquet-image" 
                 onerror="this.src='https://via.placeholder.com/300x300/e0e0e0/666?text=🌸'">
            <div class="bouquet-info">
                <div class="bouquet-name">${bouquet.name}</div>
                <div class="bouquet-price">${bouquet.price}</div>
            </div>
        </div>
    `).join('');
    
    topBouquetsContainer.innerHTML = bouquetsHTML;
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    // Инициализируем VK Bridge
    initVK();
    
    // Настраиваем обработку формы
    handleEventForm();
    
    // Отображаем события и топ-букеты
    renderEvents();
    renderTopBouquets();
    
    // Устанавливаем минимальную дату для события (сегодня)
    const dateInput = document.getElementById('event-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
});

// Экспорт функций для глобального доступа
window.showScreen = showScreen;
window.showBouquets = showBouquets;
