// VK FlowerBot App JavaScript

// Application data
const appData = {
  bouquets: {
    "День рождения": [
      {
        id: "b1",
        name: "Радужное настроение",
        price: "2500 ₽",
        description: "Яркий микс цветов",
        image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=300&h=300&fit=crop"
      },
      {
        id: "b2", 
        name: "Солнечный букет",
        price: "1800 ₽",
        description: "Желтые хризантемы",
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300&h=300&fit=crop"
      },
      {
        id: "b3",
        name: "Весенняя радость",
        price: "2200 ₽", 
        description: "Тюльпаны и нарциссы",
        image: "https://images.unsplash.com/photo-1574684891174-df8bc2d51162?w=300&h=300&fit=crop"
      }
    ],
    "Свадьба": [
      {
        id: "w1",
        name: "Белоснежная классика",
        price: "4500 ₽",
        description: "Белые розы и пионы",
        image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=300&h=300&fit=crop"
      },
      {
        id: "w2",
        name: "Нежная элегантность",
        price: "3800 ₽",
        description: "Кремовые розы",
        image: "https://images.unsplash.com/photo-1606672718991-201b35ea7908?w=300&h=300&fit=crop"
      },
      {
        id: "w3",
        name: "Пудровая мечта",
        price: "4200 ₽",
        description: "Пионы и эустома",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
      }
    ],
    "Юбилей": [
      {
        id: "a1",
        name: "Благородные розы",
        price: "3200 ₽",
        description: "Красные розы премиум",
        image: "https://images.unsplash.com/photo-1605641310230-54ccb1668fd3?w=300&h=300&fit=crop"
      },
      {
        id: "a2",
        name: "Аристократичный стиль",
        price: "3800 ₽",
        description: "Бордовые пионы",
        image: "https://images.unsplash.com/photo-1588521043524-c5ad0fe8fe2c?w=300&h=300&fit=crop"
      },
      {
        id: "a3",
        name: "Классическая элегантность", 
        price: "2900 ₽",
        description: "Белые лилии",
        image: "https://images.unsplash.com/photo-1524621875-0b1b44fce0e8?w=300&h=300&fit=crop"
      }
    ],
    "Годовщина": [
      {
        id: "a1",
        name: "Благородные розы",
        price: "3200 ₽",
        description: "Красные розы премиум",
        image: "https://images.unsplash.com/photo-1605641310230-54ccb1668fd3?w=300&h=300&fit=crop"
      },
      {
        id: "w2",
        name: "Нежная элегантность",
        price: "3800 ₽",
        description: "Кремовые розы",
        image: "https://images.unsplash.com/photo-1606672718991-201b35ea7908?w=300&h=300&fit=crop"
      },
      {
        id: "a3",
        name: "Классическая элегантность", 
        price: "2900 ₽",
        description: "Белые лилии",
        image: "https://images.unsplash.com/photo-1524621875-0b1b44fce0e8?w=300&h=300&fit=crop"
      }
    ],
    "День матери": [
      {
        id: "m1",
        name: "Мамина нежность",
        price: "2100 ₽",
        description: "Розовые розы",
        image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=300&h=300&fit=crop"
      },
      {
        id: "m2",
        name: "Весенняя любовь",
        price: "1900 ₽", 
        description: "Альстромерии",
        image: "https://images.unsplash.com/photo-1606672718991-201b35ea7908?w=300&h=300&fit=crop"
      },
      {
        id: "m3",
        name: "Теплые объятия",
        price: "2400 ₽",
        description: "Герберы и розы",
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300&h=300&fit=crop"
      }
    ],
    "8 марта": [
      {
        id: "e1",
        name: "Весенний фейерверк",
        price: "2800 ₽",
        description: "Тюльпаны микс",
        image: "https://images.unsplash.com/photo-1574684891174-df8bc2d51162?w=300&h=300&fit=crop"
      },
      {
        id: "e2",
        name: "Женский день",
        price: "2300 ₽",
        description: "Мимозы и розы",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop"
      },
      {
        id: "e3",
        name: "Праздничный букет",
        price: "3100 ₽",
        description: "Пионы и тюльпаны",
        image: "https://images.unsplash.com/photo-1588521043524-c5ad0fe8fe2c?w=300&h=300&fit=crop"
      }
    ],
    "Другое": [
      {
        id: "b1",
        name: "Радужное настроение",
        price: "2500 ₽",
        description: "Яркий микс цветов",
        image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=300&h=300&fit=crop"
      },
      {
        id: "w2",
        name: "Нежная элегантность",
        price: "3800 ₽",
        description: "Кремовые розы",
        image: "https://images.unsplash.com/photo-1606672718991-201b35ea7908?w=300&h=300&fit=crop"
      },
      {
        id: "a1",
        name: "Благородные розы",
        price: "3200 ₽",
        description: "Красные розы премиум",
        image: "https://images.unsplash.com/photo-1605641310230-54ccb1668fd3?w=300&h=300&fit=crop"
      }
    ]
  }
};

// Application state
let events = [];
let currentEvent = null;
let selectedBouquet = null;

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  return date.toLocaleDateString('ru-RU', options);
}

function getDaysUntil(dateString) {
  const eventDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  
  const diffTime = eventDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

function generateId() {
  return 'event_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Screen management
function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));
  
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
}

// Notification system
function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  const text = document.getElementById('notification-text');
  
  text.textContent = message;
  notification.classList.remove('hidden');
  
  if (type === 'error') {
    notification.style.backgroundColor = '#c53030';
  } else if (type === 'info') {
    notification.style.backgroundColor = '#3182ce';
  } else {
    notification.style.backgroundColor = '#38a169';
  }
  
  setTimeout(() => {
    hideNotification();
  }, 3000);
}

function hideNotification() {
  const notification = document.getElementById('notification');
  notification.classList.add('hidden');
}

// Event management
function saveEvent(eventData) {
  const newEvent = {
    id: generateId(),
    ...eventData,
    createdAt: new Date().toISOString()
  };
  
  events.push(newEvent);
  renderEventsList();
  showNotification('Событие успешно добавлено!');
}

function deleteEvent(eventId) {
  events = events.filter(event => event.id !== eventId);
  renderEventsList();
  renderManageEventsList();
  showNotification('Событие удалено');
}

function editEvent(eventId) {
  const event = events.find(e => e.id === eventId);
  if (event) {
    // Pre-fill form with event data
    document.getElementById('event-type').value = event.type;
    document.getElementById('event-date').value = event.date;
    document.getElementById('recipient-name').value = event.recipientName;
    document.getElementById('event-comment').value = event.comment || '';
    document.getElementById('reminders-enabled').checked = event.remindersEnabled;
    
    // Remove the event temporarily for re-adding
    events = events.filter(e => e.id !== eventId);
    
    showScreen('add-event-screen');
  }
}

// Render functions
function renderEventsList() {
  const container = document.getElementById('events-list');
  
  if (events.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">📅</span>
        <p>У вас пока нет добавленных событий</p>
        <p class="empty-subtitle">Добавьте первое событие, чтобы получать напоминания</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = events.map(event => {
    const daysLeft = getDaysUntil(event.date);
    const daysText = daysLeft === 0 ? 'Сегодня!' : 
                     daysLeft === 1 ? '1 день' : 
                     daysLeft < 0 ? 'Прошло' : `${daysLeft} дней`;
    
    return `
      <div class="event-card" onclick="showEventBouquets('${event.id}')">
        <div class="event-header">
          <span class="event-type">${event.type}</span>
          <span class="event-date">${formatDate(event.date)}</span>
        </div>
        <div class="event-recipient">Для: ${event.recipientName}</div>
        <div class="event-days-left">До события: ${daysText}</div>
        ${event.remindersEnabled ? '<div class="reminder-badge">🔔 Напоминания включены</div>' : ''}
      </div>
    `;
  }).join('');
}

function renderManageEventsList() {
  const container = document.getElementById('manage-events-list');
  
  if (events.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">📅</span>
        <p>У вас пока нет добавленных событий</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = events.map(event => {
    const daysLeft = getDaysUntil(event.date);
    const daysText = daysLeft === 0 ? 'Сегодня!' : 
                     daysLeft === 1 ? '1 день' : 
                     daysLeft < 0 ? 'Прошло' : `${daysLeft} дней`;
    
    return `
      <div class="manage-event-card">
        <div class="manage-event-header">
          <div>
            <div class="event-type">${event.type}</div>
            <div class="event-recipient">${event.recipientName}</div>
            <div class="event-date">${formatDate(event.date)}</div>
            <div class="event-days-left">${daysText}</div>
          </div>
          <div class="manage-event-actions">
            <button class="btn btn-small btn-edit" onclick="editEvent('${event.id}')">
              ✏️ Редактировать
            </button>
            <button class="btn btn-small btn-delete" onclick="deleteEvent('${event.id}')">
              🗑️ Удалить
            </button>
          </div>
        </div>
        ${event.comment ? `<div style="margin-top: 8px; font-size: 14px; color: #818C99;">Комментарий: ${event.comment}</div>` : ''}
      </div>
    `;
  }).join('');
}

function renderTopBouquets() {
  const container = document.getElementById('top-bouquets');
  const topBouquets = [
    appData.bouquets['День рождения'][0],
    appData.bouquets['Свадьба'][0],
    appData.bouquets['Юбилей'][0]
  ];
  
  container.innerHTML = topBouquets.map(bouquet => `
    <div class="bouquet-card-mini">
      <img src="${bouquet.image}" alt="${bouquet.name}">
      <div class="bouquet-mini-info">
        <div class="bouquet-mini-name">${bouquet.name}</div>
        <div class="bouquet-mini-price">${bouquet.price}</div>
      </div>
    </div>
  `).join('');
}

function showEventBouquets(eventId) {
  const event = events.find(e => e.id === eventId);
  if (!event) return;
  
  currentEvent = event;
  
  // Update reminder header
  const daysLeft = getDaysUntil(event.date);
  const daysText = daysLeft === 0 ? 'Событие сегодня!' : 
                   daysLeft === 1 ? 'До события 1 день' : 
                   daysLeft < 0 ? 'Событие прошло' : `До события ${daysLeft} дней`;
  
  document.getElementById('reminder-title').textContent = `Напоминание: ${event.type}`;
  document.getElementById('reminder-subtitle').textContent = daysText;
  
  // Get bouquets for this event type
  const bouquets = appData.bouquets[event.type] || appData.bouquets['Другое'];
  
  // Render bouquets carousel
  const carousel = document.getElementById('bouquets-carousel');
  carousel.innerHTML = bouquets.map(bouquet => `
    <div class="bouquet-card">
      <img src="${bouquet.image}" alt="${bouquet.name}" class="bouquet-image">
      <div class="bouquet-info">
        <div class="bouquet-name">${bouquet.name}</div>
        <div class="bouquet-price">${bouquet.price}</div>
        <div class="bouquet-description">${bouquet.description}</div>
        <div class="bouquet-actions">
          <button class="btn-want-this" onclick="selectBouquet('${bouquet.id}', '${event.type}')">
            💖 Хочу этот!
          </button>
        </div>
      </div>
    </div>
  `).join('');
  
  showScreen('bouquets-carousel-screen');
}

function selectBouquet(bouquetId, eventType) {
  const bouquets = appData.bouquets[eventType] || appData.bouquets['Другое'];
  selectedBouquet = bouquets.find(b => b.id === bouquetId);
  
  if (!selectedBouquet || !currentEvent) return;
  
  // Show selected bouquet info
  const infoContainer = document.getElementById('selected-bouquet-info');
  infoContainer.innerHTML = `
    <img src="${selectedBouquet.image}" alt="${selectedBouquet.name}" class="selected-bouquet-image">
    <div class="selected-bouquet-details">
      <h3>${selectedBouquet.name}</h3>
      <div class="price">${selectedBouquet.price}</div>
      <div class="description">${selectedBouquet.description}</div>
      <div style="margin-top: 8px; font-size: 14px; color: #818C99;">
        Событие: ${currentEvent.type} для ${currentEvent.recipientName}
      </div>
    </div>
  `;
  
  showScreen('order-confirmation-screen');
}

function showOtherBouquets() {
  showNotification('В полной версии здесь будут дополнительные варианты букетов', 'info');
}

// Form handlers
function handleEventForm(event) {
  event.preventDefault();
  
  const formData = {
    type: document.getElementById('event-type').value.trim(),
    date: document.getElementById('event-date').value.trim(),
    recipientName: document.getElementById('recipient-name').value.trim(),
    comment: document.getElementById('event-comment').value.trim(),
    remindersEnabled: document.getElementById('reminders-enabled').checked
  };
  
  // Enhanced validation with better error messages
  if (!formData.type) {
    showNotification('Пожалуйста, выберите тип события', 'error');
    return;
  }
  
  if (!formData.date) {
    showNotification('Пожалуйста, выберите дату события', 'error');
    return;
  }
  
  if (!formData.recipientName) {
    showNotification('Пожалуйста, укажите имя получателя', 'error');
    return;
  }
  
  // Validate date
  const eventDate = new Date(formData.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  
  if (isNaN(eventDate.getTime())) {
    showNotification('Пожалуйста, выберите корректную дату', 'error');
    return;
  }
  
  if (eventDate < today) {
    showNotification('Дата события не может быть в прошлом', 'error');
    return;
  }
  
  saveEvent(formData);
  
  // Reset form
  document.getElementById('event-form').reset();
  document.getElementById('reminders-enabled').checked = true;
  
  showScreen('home-screen');
}

function handleOrderForm(event) {
  event.preventDefault();
  
  const customerName = document.getElementById('customer-name').value.trim();
  const customerPhone = document.getElementById('customer-phone').value.trim();
  const deliveryAddress = document.getElementById('delivery-address').value.trim();
  
  if (!customerName) {
    showNotification('Пожалуйста, укажите ваше имя', 'error');
    return;
  }
  
  if (!customerPhone) {
    showNotification('Пожалуйста, укажите номер телефона', 'error');
    return;
  }
  
  // Basic phone validation
  const phoneDigits = customerPhone.replace(/\D/g, '');
  if (phoneDigits.length < 10) {
    showNotification('Пожалуйста, укажите корректный номер телефона', 'error');
    return;
  }
  
  // Simulate sending order to admin
  const orderData = {
    customer: {
      name: customerName,
      phone: customerPhone,
      address: deliveryAddress || 'Не указан'
    },
    event: currentEvent,
    bouquet: selectedBouquet,
    orderTime: new Date().toISOString()
  };
  
  console.log('Заказ отправлен администратору:', orderData);
  
  showNotification('Заказ отправлен! Администратор свяжется с вами в ближайшее время.');
  
  // Reset form and return to home
  document.getElementById('order-form').reset();
  showScreen('home-screen');
}

// Initialize app
function initApp() {
  renderEventsList();
  renderTopBouquets();
  
  // Set minimum date for event date input to today
  const today = new Date();
  const todayString = today.getFullYear() + '-' + 
    String(today.getMonth() + 1).padStart(2, '0') + '-' + 
    String(today.getDate()).padStart(2, '0');
  
  const eventDateInput = document.getElementById('event-date');
  if (eventDateInput) {
    eventDateInput.min = todayString;
    
    // Add change event listener to ensure date is captured properly
    eventDateInput.addEventListener('change', function(e) {
      console.log('Date selected:', e.target.value);
    });
  }
  
  // Add event listeners
  document.getElementById('event-form').addEventListener('submit', handleEventForm);
  document.getElementById('order-form').addEventListener('submit', handleOrderForm);
  
  // Add sample events for demonstration (with future dates)
  if (events.length === 0) {
    const futureDate1 = new Date();
    futureDate1.setDate(futureDate1.getDate() + 30); // 30 days from today
    
    const futureDate2 = new Date();
    futureDate2.setDate(futureDate2.getDate() + 60); // 60 days from today
    
    events.push({
      id: generateId(),
      type: 'День рождения',
      date: futureDate1.toISOString().split('T')[0],
      recipientName: 'Мария',
      comment: 'Любит розовые цветы',
      remindersEnabled: true,
      createdAt: new Date().toISOString()
    });
    
    events.push({
      id: generateId(),
      type: 'Годовщина',
      date: futureDate2.toISOString().split('T')[0],
      recipientName: 'Супруга',
      comment: '5 лет вместе',
      remindersEnabled: true,
      createdAt: new Date().toISOString()
    });
    
    renderEventsList();
  }
}

// Navigation functions (called from HTML)
function showManageEvents() {
  renderManageEventsList();
  showScreen('manage-events-screen');
}

// Phone number formatting
function setupPhoneFormatting() {
  const phoneInput = document.getElementById('customer-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 0) {
        if (value[0] === '8') value = '7' + value.slice(1);
        if (value[0] !== '7') value = '7' + value;
      }
      if (value.length > 11) value = value.slice(0, 11);
      
      let formatted = '';
      if (value.length >= 1) formatted += '+7';
      if (value.length >= 2) formatted += ' (' + value.slice(1, 4);
      if (value.length >= 5) formatted += ') ' + value.slice(4, 7);
      if (value.length >= 8) formatted += '-' + value.slice(7, 9);
      if (value.length >= 10) formatted += '-' + value.slice(9, 11);
      
      e.target.value = formatted;
    });
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initApp();
  setupPhoneFormatting();
  
  // Add debugging for date input
  console.log('FlowerBot app initialized');
});