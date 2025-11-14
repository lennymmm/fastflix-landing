// FastFlix Help Page - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    if (searchInput && searchButton) {
        // Search on button click
        searchButton.addEventListener('click', performSearch);
        
        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Live search as user types (debounced)
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(performSearch, 300);
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Auto-expand FAQ if URL has hash
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement && targetElement.tagName === 'DETAILS') {
            targetElement.open = true;
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
    
    // Track FAQ interactions
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('toggle', function() {
            if (this.open) {
                console.log('FAQ opened:', this.querySelector('summary').textContent);
            }
        });
    });
});

// Search function
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        clearSearch();
        return;
    }
    
    // Get all searchable elements
    const searchableElements = [
        ...document.querySelectorAll('.card'),
        ...document.querySelectorAll('.feature-item'),
        ...document.querySelectorAll('.faq-item')
    ];
    
    let foundCount = 0;
    
    searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        
        if (text.includes(query)) {
            element.style.display = '';
            highlightText(element, query);
            foundCount++;
        } else {
            element.style.display = 'none';
        }
    });
    
    // Show/hide sections based on results
    document.querySelectorAll('.section').forEach(section => {
        const visibleItems = section.querySelectorAll('.card:not([style*="display: none"]), .feature-item:not([style*="display: none"]), .faq-item:not([style*="display: none"])');
        if (visibleItems.length === 0) {
            section.style.display = 'none';
        } else {
            section.style.display = '';
        }
    });
    
    // Show message if no results
    showSearchResults(foundCount, query);
    
    console.log(`Search: "${query}" - Found ${foundCount} results`);
}

// Clear search
function clearSearch() {
    // Remove all highlights
    document.querySelectorAll('.highlight').forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });
    
    // Show all elements
    document.querySelectorAll('.card, .feature-item, .faq-item, .section').forEach(el => {
        el.style.display = '';
    });
    
    // Remove search results message
    const resultsMessage = document.getElementById('searchResults');
    if (resultsMessage) {
        resultsMessage.remove();
    }
}

// Highlight search terms
function highlightText(element, query) {
    // Remove previous highlights
    element.querySelectorAll('.highlight').forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
        parent.normalize();
    });
    
    // Add new highlights
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const nodesToReplace = [];
    let node;
    
    while (node = walker.nextNode()) {
        if (node.nodeValue.toLowerCase().includes(query)) {
            nodesToReplace.push(node);
        }
    }
    
    nodesToReplace.forEach(node => {
        const span = document.createElement('span');
        span.innerHTML = node.nodeValue.replace(
            new RegExp(query, 'gi'),
            match => `<mark class="highlight">${match}</mark>`
        );
        node.parentNode.replaceChild(span, node);
    });
}

// Show search results message
function showSearchResults(count, query) {
    // Remove existing message
    const existingMessage = document.getElementById('searchResults');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const message = document.createElement('div');
    message.id = 'searchResults';
    message.style.cssText = `
        background: #2196F3;
        color: white;
        padding: 16px;
        text-align: center;
        position: sticky;
        top: 0;
        z-index: 1000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    `;
    
    if (count === 0) {
        message.innerHTML = `
            <strong>No se encontraron resultados para "${query}"</strong>
            <button onclick="clearSearchAndFocus()" style="margin-left: 16px; padding: 8px 16px; background: white; color: #2196F3; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">
                Limpiar búsqueda
            </button>
        `;
    } else {
        message.innerHTML = `
            <strong>Se encontraron ${count} resultado${count !== 1 ? 's' : ''} para "${query}"</strong>
            <button onclick="clearSearchAndFocus()" style="margin-left: 16px; padding: 8px 16px; background: white; color: #2196F3; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">
                Limpiar búsqueda
            </button>
        `;
    }
    
    document.body.insertBefore(message, document.body.firstChild);
}

// Clear search and focus input
function clearSearchAndFocus() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    clearSearch();
    searchInput.focus();
}

// Add CSS for highlights
const style = document.createElement('style');
style.textContent = `
    .highlight {
        background-color: #FFEB3B;
        padding: 2px 4px;
        border-radius: 2px;
        font-weight: 500;
    }
`;
document.head.appendChild(style);

// Analytics (optional - can be replaced with Google Analytics)
function trackEvent(category, action, label) {
    console.log('Event:', category, action, label);
    // Add your analytics code here
    // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track page load
trackEvent('Help Page', 'Load', window.location.pathname);
