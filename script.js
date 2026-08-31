document.addEventListener('DOMContentLoaded', () => {
    // Verificar que CONFIG exista
    if (typeof CONFIG === 'undefined') {
        console.error('El archivo config.js no se cargó correctamente.');
        return;
    }

    // Inicializar Pixel
    initPixel();

    // Ahora todo sucede en la misma página, poblamos todo.
    populateLandingPage();
    populateModalOffers();
    setupLandingEvents();
    setupModalEvents();
    setupFloatingWhatsApp();

    /* ==========================================================================
       Funciones Globales
       ========================================================================== */
    function initPixel() {
        const pixelId = CONFIG.contacto.pixelId;
        if (!pixelId) return;

        const scriptContent = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '\${pixelId}');
            fbq('track', 'PageView');
        `;
        const scriptEl = document.createElement('script');
        scriptEl.innerHTML = scriptContent;
        document.head.appendChild(scriptEl);

        const noscriptEl = document.createElement('noscript');
        noscriptEl.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=\${pixelId}&ev=PageView&noscript=1" />`;
        document.head.appendChild(noscriptEl);

        if (typeof fbq === 'function') {
            fbq('track', 'ViewContent', {
                content_name: CONFIG.producto.nombre,
                content_type: 'product',
                value: CONFIG.ofertas.opcion1.precio,
                currency: 'DOP'
            });
        }
    }

    function setupFloatingWhatsApp() {
        const waFloatBtn = document.getElementById('wa-float-btn');
        if (waFloatBtn) {
            waFloatBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                if (typeof fbq === 'function') {
                    fbq('track', 'Lead', {
                        content_name: 'WhatsApp Directo',
                        currency: 'DOP'
                    });
                }
                
                let waMessage = `Hola, quiero saber más información sobre el Calcium Antiedad...`;
                
                const encodedWaMessage = encodeURIComponent(waMessage);
                const floatWhatsappUrl = `https://wa.me/${CONFIG.contacto.whatsappTelefono}?text=${encodedWaMessage}`;
                window.open(floatWhatsappUrl, '_blank');
            });
        }
    }

    /* ==========================================================================
       Funciones de Landing Page
       ========================================================================== */
    function populateLandingPage() {
        document.getElementById('top-bar').textContent = CONFIG.envio.mensajeTopBar;
        document.getElementById('hero-img').src = CONFIG.imagenes.hero;
        document.getElementById('hero-stars').textContent = `${CONFIG.hero.estrellas} estrellas`;
        document.getElementById('hero-title').textContent = CONFIG.hero.titulo;
        document.getElementById('hero-subtitle').textContent = CONFIG.hero.subtitulo;
        document.getElementById('hero-badge-ahorro').textContent = CONFIG.hero.badgeAhorro;

        document.getElementById('comparison-img').src = CONFIG.imagenes.antesDespues;
        document.getElementById('transformation-img').src = CONFIG.imagenes.transformacion;

        document.getElementById('footer-brand-text').textContent = `✨ ${CONFIG.producto.nombre.toUpperCase()} ✨`;

        // Beneficios
        const benefitsContainer = document.getElementById('benefits-grid');
        benefitsContainer.innerHTML = '';
        CONFIG.beneficios.forEach(b => {
            benefitsContainer.innerHTML += `
                <div class="benefit-item">
                    <div class="benefit-icon">${b.icono}</div>
                    <div class="benefit-text">${b.texto}</div>
                </div>
            `;
        });

        // Ingredientes
        const ingredientsContainer = document.getElementById('ingredients-container');
        ingredientsContainer.innerHTML = '';
        CONFIG.ingredientes.forEach(ing => {
            ingredientsContainer.innerHTML += `
                <div style="background-color: white; padding: 16px; border-radius: var(--border-radius); box-shadow: var(--shadow-sm); border-left: 4px solid var(--accent-gold);">
                    <h3 style="font-size: 16px; color: var(--brand-burgundy); margin-bottom: 4px;">${ing.nombre}</h3>
                    <p style="font-size: 14px; color: var(--text-soft);">${ing.descripcion}</p>
                </div>
            `;
        });

        // Comparación (Antes / Después)
        const beforeList = document.getElementById('comparison-before-list');
        const afterList = document.getElementById('comparison-after-list');
        beforeList.innerHTML = '';
        afterList.innerHTML = '';
        
        CONFIG.comparacion.antes.forEach(item => {
            beforeList.innerHTML += `<li>${item}</li>`;
        });
        CONFIG.comparacion.despues.forEach(item => {
            afterList.innerHTML += `<li>${item}</li>`;
        });

        // Pasos
        const stepsContainer = document.getElementById('steps-container');
        stepsContainer.innerHTML = '';
        CONFIG.pasos.forEach(p => {
            stepsContainer.innerHTML += `
                <div class="step-card">
                    <div class="step-number" style="background-color: var(--brand-burgundy); color: white;">${p.numero}</div>
                    <div class="step-text">${p.texto}</div>
                </div>
            `;
        });

        // Zonas
        const zonesContainer = document.getElementById('zones-container');
        zonesContainer.innerHTML = '';
        CONFIG.zonas.forEach(z => {
            zonesContainer.innerHTML += `
                <span style="background-color: white; color: var(--brand-burgundy); padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; box-shadow: var(--shadow-sm); border: 1px solid rgba(122, 27, 41, 0.1);">${z}</span>
            `;
        });

        // Qué incluye
        const includesList = document.getElementById('includes-list');
        includesList.innerHTML = '';
        CONFIG.incluye.forEach(inc => {
            includesList.innerHTML += `
                <div class="includes-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 20px; height: 20px; flex-shrink: 0;">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    ${inc}
                </div>
            `;
        });

        // Testimonios
        const testimonialsGrid = document.getElementById('testimonials-grid');
        testimonialsGrid.innerHTML = '';
        CONFIG.testimonios.forEach(t => {
            let imageHtml = '';
            if (t.imagenResultado) {
                imageHtml = `
                    <div class="testimonial-image-container" style="margin-bottom: 16px; border-radius: 8px; overflow: hidden; background-color: transparent;">
                        <img src="${t.imagenResultado}" alt="Resultado" onerror="this.style.display='none';">
                    </div>
                `;
            }
            
            let avatarHtml = '';
            if (t.avatar.includes('/') || t.avatar.includes('.')) {
                avatarHtml = `<img src="${t.avatar}" alt="${t.nombre}" onerror="this.style.display='none';">`;
            } else {
                avatarHtml = `<div style="width:100%; height:100%; display: flex; align-items: center; justify-content: center; background-color: var(--accent-gold); color: white; font-weight: 700; font-size: 16px; letter-spacing: 1px;">${t.avatar}</div>`;
            }

            testimonialsGrid.innerHTML += `
                <div class="testimonial-card">
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">
                            ${avatarHtml}
                        </div>
                        <div>
                            <div class="testimonial-name">${t.nombre}</div>
                            <div class="verified-buyer">✔ Comprador verificado</div>
                        </div>
                    </div>
                    <div class="testimonial-stars">★★★★★</div>
                    <p class="testimonial-text">${t.texto}</p>
                    ${imageHtml}
                </div>
            `;
        });

        // FAQ
        const faqContainer = document.getElementById('faq-container');
        faqContainer.innerHTML = '';
        CONFIG.faq.forEach(f => {
            faqContainer.innerHTML += `
                <details>
                    <summary>${f.pregunta}</summary>
                    <p>${f.respuesta}</p>
                </details>
            `;
        });
    }

    /* ==========================================================================
       Funciones de Modal (Checkout)
       ========================================================================== */
    function populateModalOffers() {
        const offersContainer = document.getElementById('offers-container');
        const qtySelect = document.getElementById('client-quantity');
        
        offersContainer.innerHTML = '';
        if(qtySelect) qtySelect.innerHTML = '';

        const ofertas = [CONFIG.ofertas.opcion1, CONFIG.ofertas.opcion2];

        ofertas.forEach((oferta, index) => {
            const isRecommended = oferta.recomendada;
            const badgeHtml = isRecommended ? `<div class="offer-badge">${oferta.badge}</div>` : '';
            const activeClass = isRecommended ? 'active' : '';
            const checkedAttr = isRecommended ? 'checked' : '';
            
            let benefitsHtml = '';
            if (oferta.beneficios && oferta.beneficios.length > 0) {
                benefitsHtml = '<ul class="offer-benefits">';
                oferta.beneficios.forEach(ben => {
                    benefitsHtml += `<li>${ben}</li>`;
                });
                benefitsHtml += '</ul>';
            }

            offersContainer.innerHTML += `
                <div class="offer-card ${activeClass}" id="offer-card-${oferta.cantidad}">
                    ${badgeHtml}
                    <input type="radio" name="offer_select" class="offer-radio" data-qty="${oferta.cantidad}" data-price="${oferta.precio}" data-oldprice="${oferta.precioAnterior}" id="radio-${oferta.cantidad}" ${checkedAttr}>
                    <div class="offer-header">
                        <div class="offer-title">
                            <span class="radio-custom"></span>
                            ${oferta.titulo}
                        </div>
                        <div class="offer-price-block">
                            <div class="offer-current-price">RD$${oferta.precio.toLocaleString('en-US')}</div>
                            <div class="offer-old-price">RD$${oferta.precioAnterior.toLocaleString('en-US')}</div>
                        </div>
                    </div>
                    ${benefitsHtml}
                </div>
            `;

            if(qtySelect) {
                let deliveryText = isRecommended ? "Envío Gratis" : "Pago contra entrega";
                qtySelect.innerHTML += `
                    <option value="${oferta.cantidad}" ${isRecommended ? 'selected' : ''}>
                        ${oferta.titulo} - RD$${oferta.precio.toLocaleString('en-US')} (${deliveryText})
                    </option>
                `;
            }

            if (isRecommended) {
                document.getElementById('input-qty').value = oferta.cantidad;
                document.getElementById('input-total').value = oferta.precio;
                
                const summaryQty = document.getElementById('summary-qty');
                if (summaryQty) summaryQty.textContent = `x${oferta.cantidad}`;
                
                const percentage = Math.round(((oferta.precioAnterior - oferta.precio) / oferta.precioAnterior) * 100);
                const summaryPercentage = document.getElementById('summary-savings-percentage');
                if(summaryPercentage) summaryPercentage.textContent = `${percentage}%`;
                
                const summaryTotal = document.getElementById('summary-total');
                if (summaryTotal) summaryTotal.textContent = `RD$${oferta.precio.toLocaleString('en-US')}`;
            }
        });
    }

    function setupLandingEvents() {
        const ctaBtns = document.querySelectorAll('.cta-btn');
        const modal = document.getElementById('checkout-modal');
        const closeBtn = document.getElementById('modal-close');

        ctaBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (typeof fbq === 'function') {
                    fbq('track', 'InitiateCheckout', {
                        content_name: CONFIG.producto.nombre,
                        value: CONFIG.ofertas.opcion2.precio,
                        currency: 'DOP'
                    });
                }
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    function setupModalEvents() {
        const offerCards = document.querySelectorAll('.offer-card');
        const radios = document.querySelectorAll('.offer-radio');
        const inputQty = document.getElementById('input-qty');
        const inputTotal = document.getElementById('input-total');
        const clientQtySelect = document.getElementById('client-quantity');
        const summaryQty = document.getElementById('summary-qty');
        
        function selectOffer(qty, price, oldPrice) {
            offerCards.forEach(c => c.classList.remove('active'));
            radios.forEach(r => {
                r.checked = false;
                if (r.dataset.qty == qty) {
                    r.checked = true;
                    r.closest('.offer-card').classList.add('active');
                }
            });
            
            inputQty.value = qty;
            inputTotal.value = price;
            
            if (clientQtySelect) clientQtySelect.value = qty;
            if (summaryQty) summaryQty.textContent = `x${qty}`;
            
            const summaryPercentage = document.getElementById('summary-savings-percentage');
            if (summaryPercentage && oldPrice) {
                const percentage = Math.round(((oldPrice - price) / oldPrice) * 100);
                summaryPercentage.textContent = `${percentage}%`;
            }
            
            const summaryTotal = document.getElementById('summary-total');
            if (summaryTotal) summaryTotal.textContent = `RD$${parseInt(price).toLocaleString('en-US')}`;
        }

        offerCards.forEach(card => {
            card.addEventListener('click', () => {
                const radio = card.querySelector('.offer-radio');
                selectOffer(radio.dataset.qty, radio.dataset.price, radio.dataset.oldprice);
            });
        });
        
        if (clientQtySelect) {
            clientQtySelect.addEventListener('change', (e) => {
                const qty = e.target.value;
                const radio = document.querySelector(`.offer-radio[data-qty="${qty}"]`);
                if (radio) {
                    selectOffer(qty, radio.dataset.price, radio.dataset.oldprice);
                }
            });
        }

        const orderForm = document.getElementById('order-form');
        let isSubmitting = false;

        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (isSubmitting) return;
            
            const name = document.getElementById('client-name').value.trim();
            const phone = document.getElementById('client-phone').value.trim();
            const address = document.getElementById('client-address').value.trim();
            const qty = inputQty.value;
            const total = inputTotal.value;
            
            if(!name || !phone || !address) {
                alert('Por favor completa todos los campos.');
                return;
            }
            
            isSubmitting = true;
            
            let message = `¡𝗛𝗼𝗹𝗮! 𝗤𝘂𝗶𝗲𝗿𝗼 𝗵𝗮𝗰𝗲𝗿 𝘂𝗻 𝗽𝗲𝗱𝗶𝗱𝗼 𝗰𝗼𝗻𝘁𝗿𝗮 𝗲𝗻𝘁𝗿𝗲𝗴𝗮 🛍️\n\n`;
            message += `𝗣𝗿𝗼𝗱𝘂𝗰𝘁𝗼: ${CONFIG.producto.nombre}\n`;
            message += `𝗖𝗮𝗻𝘁𝗶𝗱𝗮𝗱: ${qty} Unidad(es)\n`;
            message += `𝗧𝗼𝘁𝗮𝗹 𝗮 𝗣𝗮𝗴𝗮𝗿: RD$${parseInt(total).toLocaleString('en-US')}\n\n`;
            
            message += `𝗠𝗶𝘀 𝗗𝗮𝘁𝗼𝘀 𝗽𝗮𝗿𝗮 𝗹𝗮 𝗘𝗻𝘁𝗿𝗲𝗴𝗮:\n`;
            message += `👤 𝗡𝗼𝗺𝗯𝗿𝗲: ${name}\n`;
            message += `📞 𝗧𝗲𝗹𝗲́𝗳𝗼𝗻𝗼: ${phone}\n`;
            message += `📍 𝗗𝗶𝗿𝗲𝗰𝗰𝗶𝗼́𝗻: ${address}\n\n`;
            
            message += `Quedo atento(a) para confirmar mi envío. ¡Gracias!`;
            
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${CONFIG.contacto.whatsappTelefono}?text=${encodedMessage}`;
            
            if (typeof fbq === 'function') {
                fbq('track', 'Lead', {
                    value: parseInt(total),
                    currency: 'DOP'
                });
                
                fbq('track', 'Purchase', {
                    value: parseInt(total),
                    currency: 'DOP',
                    content_type: 'product',
                    content_name: CONFIG.producto.nombre,
                    quantity: parseInt(qty)
                });
            }
            
            window.location.href = whatsappUrl;
            
            setTimeout(() => { isSubmitting = false; }, 3000);
        });
    }
});
