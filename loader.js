// Loader for Quran Tracking System
(function() {
    'use strict';

    // Show loading state
    function showLoader() {
        const loaderHTML = `
            <div id="pageLoader" class="page-loader">
                <div class="loader-content">
                    <div class="loader-spinner"></div>
                    <div class="loader-text">Loading Quran Tracking System...</div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('afterbegin', loaderHTML);
    }

    // Hide loading state
    function hideLoader() {
        const loader = document.getElementById('pageLoader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 300);
        }
    }

    // Check if all required resources are loaded
    function checkResourcesLoaded() {
        return new Promise((resolve) => {
            // Check if DOM is ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        });
    }

    // Initialize the application
    function initializeApp() {
        try {
            // Hide loader
            hideLoader();
            
            // Add loaded class to body
            document.body.classList.add('loaded');
            
            console.log('Quran Tracking System loaded successfully');
            
        } catch (error) {
            console.error('Error initializing app:', error);
            hideLoader();
        }
    }

    // Show loader immediately
    showLoader();

    // Wait for resources to load then initialize
    checkResourcesLoaded().then(() => {
        // Small delay to ensure smooth loading
        setTimeout(initializeApp, 500);
    });

    // Add CSS for loader
    const loaderCSS = `
        <style>
            .page-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 999999;
                transition: opacity 0.3s ease;
            }

            .loader-content {
                text-align: center;
                color: white;
            }

            .loader-spinner {
                width: 60px;
                height: 60px;
                border: 4px solid rgba(255, 255, 255, 0.3);
                border-top: 4px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }

            .loader-text {
                font-size: 18px;
                font-weight: 500;
                font-family: 'Excalifont', Arial, sans-serif;
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            body:not(.loaded) {
                overflow: hidden;
            }

            body.loaded .page-loader {
                display: none;
            }
        </style>
    `;

    // Inject loader CSS
    document.head.insertAdjacentHTML('beforeend', loaderCSS);

})();
