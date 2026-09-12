/* =========================================================================
   YASEEN VANTAGE™ | MASTER CONTEXT SYSTEM
   VERSION 1.0 - CORE OPERATIONS MOTOR ENGINE (COMPLETE UNIFIED CONSOLE BUILD)
   ========================================================================= */

// Hard Override: Disables automatic browser scroll restoration to prevent page sticking
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

// Macro-task loop forces the browser to wait for the DOM paint before snapping back to Hero
setTimeout(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant", // Instant snap cuts out slow scrolling lag on refresh
  });
}, 0);

document.addEventListener("DOMContentLoaded", () => {
  initPreciseScrollEngine();
  initLuxurySelector();
  initConsoleDrawerEngine();
  initBiDirectionalRevealEngine();
  initCinematicSliderEngine(); // RESTORED: Boots your luxury landscape slideshow engines
});

/**
 * CINEMATIC BACKGROUND SLIDER ENGINE
 * Cycles your local background nodes at a luxurious 6-second pacing track
 */
function initCinematicSliderEngine() {
  const slidesMatrix = document.querySelectorAll(".hero-system .slide");
  if (slidesMatrix.length === 0) return;

  let currentSlideTrack = 0;
  const intervalPacingTimeline = 6000; // Exact locked 6-Second intervals

  setInterval(() => {
    // Clear active visibility classes recursively from current track item
    slidesMatrix[currentSlideTrack].classList.remove("active");

    // Loop structural array pointers smoothly forward
    currentSlideTrack = (currentSlideTrack + 1) % slidesMatrix.length;

    // Deploy animation tracking class onto the incoming slide asset node
    slidesMatrix[currentSlideTrack].classList.add("active");
  }, intervalPacingTimeline);
}

/**
 * MULTI-HEADER SCROLL TRACKING ENGINE
 * Translates Header 2 upward out of sight on scrolling down, pops back up on scroll up
 */
function initPreciseScrollEngine() {
  const masterHeader = document.querySelector(".master-header");
  if (!masterHeader) return;

  let initialScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  const microTolerance = 4;

  window.addEventListener("scroll", () => {
    let liveScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(initialScrollPosition - liveScrollPosition) <= microTolerance)
      return;

    if (
      liveScrollPosition > initialScrollPosition &&
      liveScrollPosition > 100
    ) {
      masterHeader.classList.add("hide-bottom-panel");
    } else {
      masterHeader.classList.remove("hide-bottom-panel");
    }
    initialScrollPosition = liveScrollPosition;
  });
}

/**
 * DROPDOWN DATA CONTROL ENGINE
 * Handles the custom luxury currency selector mechanics
 */
function initLuxurySelector() {
  const interfaceBox = document.getElementById("currencySelector");
  if (!interfaceBox) return;

  const actionTrigger = interfaceBox.querySelector(".select-trigger");
  const optionsPanel = interfaceBox.querySelector(".select-options-panel");
  const outputDisplay = document.getElementById("selectedCurrency");

  if (actionTrigger && optionsPanel) {
    actionTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      optionsPanel.classList.toggle("active-panel");
    });

    optionsPanel.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", function () {
        const chosenCurrency = this.getAttribute("data-value");
        if (outputDisplay) outputDisplay.textContent = chosenCurrency;
        optionsPanel.classList.remove("active-panel");
        console.log(
          `System State Sync: Base Asset Currency locked to ${chosenCurrency}`,
        );
      });
    });

    document.addEventListener("click", () => {
      optionsPanel.classList.remove("active-panel");
    });
  }
}

/**
 * BI-DIRECTIONAL RECURSIVE OBSERVER ENGINE
 * Triggers instant, un-aggressive visual clear-ups both scrolling up and down
 * Threshold is set to 0.01 to fire the moment micro-pixels cross into viewport space
 */
function initBiDirectionalRevealEngine() {
  const revealTargets = document.querySelectorAll(".recursive-reveal");
  if (revealTargets.length === 0) return;

  const configurationMatrix = {
    root: null,
    threshold: 0.01, // Fires transitions instantly upon entrance crossing to guarantee zero delay lag
    rootMargin: "0px 0px -10px 0px",
  };

  const revealObserver = new IntersectionObserver((observedNodes) => {
    observedNodes.forEach((node) => {
      if (node.isIntersecting) {
        node.target.classList.add("reveal-active");
      } else {
        node.target.classList.remove("reveal-active");
      }
    });
  }, configurationMatrix);

  revealTargets.forEach((target) => {
    revealObserver.observe(target);
  });
}

/**
 * HAMBURGER MENU INTERACTIVE CONSOLE DRAWER ENGINE
 * Dual-Input Matrix: Operates via intentional hover delay on desktop, instant click on mobile.
 */
function initConsoleDrawerEngine() {
  const triggerNode = document.querySelector(".menu-button");
  const drawerNode = document.getElementById("menuConsoleDrawer");
  const blanketNode = document.getElementById("drawerEscapeBlanket");
  const bodyNode = document.body;
  const navAnchors = document.querySelectorAll(".tree-node-item");
  const headerBottomNode = document.querySelector(".header-bottom");

  if (!triggerNode || !drawerNode || !blanketNode || !headerBottomNode) return;

  let isMobileDevice = false;
  let hoverTimeoutGate = null;

  if (
    window.matchMedia("(max-width: 768px)").matches ||
    "ontouchstart" in window
  ) {
    isMobileDevice = true;
  }

  function openDrawerAbsolute() {
    drawerNode.classList.add("drawer-open");
    triggerNode.classList.add("drawer-active");
    bodyNode.classList.add("drawer-active-mask");
  }

  function closeDrawerAbsolute() {
    drawerNode.classList.remove("drawer-open");
    triggerNode.classList.remove("drawer-active");
    bodyNode.classList.remove("drawer-active-mask");
  }

  function toggleDrawerState(event) {
    if (event) event.preventDefault();
    if (drawerNode.classList.contains("drawer-open")) {
      closeDrawerAbsolute();
    } else {
      openDrawerAbsolute();
    }
  }

  triggerNode.addEventListener("click", toggleDrawerState);
  blanketNode.addEventListener("click", closeDrawerAbsolute);

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", closeDrawerAbsolute);
  });

  if (!isMobileDevice) {
    triggerNode.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimeoutGate);
      hoverTimeoutGate = setTimeout(openDrawerAbsolute, 550);
    });

    triggerNode.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimeoutGate);
    });

    drawerNode.addEventListener("mouseleave", (e) => {
      if (
        !triggerNode.contains(e.relatedTarget) &&
        !headerBottomNode.contains(e.relatedTarget)
      ) {
        closeDrawerAbsolute();
      }
    });

    headerBottomNode.addEventListener("mouseleave", (e) => {
      if (
        !drawerNode.contains(e.relatedTarget) &&
        !triggerNode.contains(e.relatedTarget)
      ) {
        closeDrawerAbsolute();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawerAbsolute();
  });
}
/* =========================================================================
   SURGICAL SPRINT: MOBILE TOUCH DISPLACEMENT ISOLATION CAROUSEL MOTOR ENGINE
   ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initInteractiveCarouselEngine();
});

function initInteractiveCarouselEngine() {
  const track = document.getElementById("enhancementsTrack");
  if (!track) return;

  let isDown = false;
  let startX;
  let currentX = 0;
  let dragThresholdMoved = false; // Tracks thumb displacement to isolate slides from click activations
  let touchStartPageX = 0;
  let autoSlideTimeout = null;

  // Direct HTML element pass: Controls click routes based on swipe states
  const childAnchors = track.querySelectorAll("a");
  childAnchors.forEach((anchor) => {
    anchor.setAttribute("draggable", "false");
    anchor.addEventListener("click", (e) => {
      // If the finger moved horizontally past the threshold, block the link from opening
      if (dragThresholdMoved) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  });

  function getComputedTranslateX() {
    const style = window.getComputedStyle(track);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
  }

  function startDragAction(e) {
    isDown = true;
    dragThresholdMoved = false; // Reset state tracking on fresh contact trigger
    clearTimeout(autoSlideTimeout);

    currentX = getComputedTranslateX();

    // Injecting the `.is-dragging` class handles the hard stop of the CSS animation instantly
    track.classList.add("is-dragging");

    // Capture initial touch down coordinates on the mobile glass interface surface
    const pageX = e.pageX || (e.touches && e.touches.pageX);
    touchStartPageX = pageX;
    startX = pageX - currentX;

    track.style.transform = `translate3d(${currentX}px, 0px, 0px)`;
  }

  function stopDragAction() {
    if (!isDown) return;
    isDown = false;
    track.classList.remove("is-dragging");

    currentX = getComputedTranslateX();

    // Release threshold flag on a micro-timeout to protect quick natural tap clicks
    setTimeout(() => {
      dragThresholdMoved = false;
    }, 80);

    // INERTIA RESET: Once released, wait 4 seconds then smoothly re-engage native auto-sliding
    autoSlideTimeout = setTimeout(() => {
      track.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      track.style.transform = ""; // Removing inline translate styles wakes the CSS @keyframes up cleanly

      setTimeout(() => {
        track.style.transition = "";
      }, 600);
    }, 4000);
  }

  function moveDragAction(e) {
    if (!isDown) return;

    const pageX = e.pageX || (e.touches && e.touches.pageX);
    const walkDistance = pageX - startX;

    // --- MOBILE TOUCH DISPLACEMENT SHIELD ---
    // If the finger moves horizontally more than 10px, flag it as an active manual swipe intent
    const currentSwipeDistance = Math.abs(pageX - touchStartPageX);
    if (currentSwipeDistance > 10) {
      dragThresholdMoved = true;
    }

    track.style.transform = `translate3d(${walkDistance}px, 0px, 0px)`;
  }

  // DESKTOP CONTROLS
  track.addEventListener("mousedown", startDragAction);
  window.addEventListener("mouseup", stopDragAction);
  track.addEventListener("mousemove", moveDragAction);

  // SMARTPHONE CONTROLS
  track.addEventListener("touchstart", startDragAction, { passive: true });
  track.addEventListener("touchend", stopDragAction);
  track.addEventListener("touchmove", moveDragAction, { passive: false }); // Blocks native screen bouncing layout interference
}

/* =========================================================================
   SURGICAL SPRINT: DYNAMIC SLIDE DOT TRACKER COORDINATION MODULES
   ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  syncRibbonDotsTracker("transformation-pods-shield", "transformationDots");
  syncRibbonDotsTracker("payment-pods-shield", "paymentDots");
});

/**
 * AUTOMATED RIBBON DIRECTION TRACKER SYNC
 * Monitors the scroll coordinates of the horizontal views and updates
 * the active gold state dots dynamically to match what card is on screen glass.
 */
function syncRibbonDotsTracker(trackClassNameOrId, dotsPanelId) {
  const scrollContainer =
    document.getElementById(trackClassNameOrId) ||
    document.querySelector(`.${trackClassNameOrId}`);
  const dotsPanel = document.getElementById(dotsPanelId);
  if (!scrollContainer || !dotsPanel) return;

  const dotsCollection = dotsPanel.querySelectorAll(".indicator-dot");

  // Scroll Observer math updates active dot focus cleanly on finger drags or mouse scrolls
  scrollContainer.addEventListener("scroll", () => {
    const viewportWidth = scrollContainer.clientWidth;
    const totalScrollWidth = scrollContainer.scrollLeft;

    // Calculate which horizontal quadrant is currently centered on screen
    let liveFocusIndex = Math.round(totalScrollWidth / viewportWidth);

    // Safety lock prevents tracking boundary overflow errors
    if (liveFocusIndex >= dotsCollection.length)
      liveFocusIndex = dotsCollection.length - 1;
    if (liveFocusIndex < 0) liveFocusIndex = 0;

    // Reset and apply gold highlighting class states recursively
    dotsCollection.forEach((dot, index) => {
      if (index === liveFocusIndex) {
        dot.classList.add("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });
  });

  // Touch click binding lets high-ticket users snap directly to slides via dot taps
  dotsCollection.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const viewportWidth = scrollContainer.clientWidth;
      scrollContainer.scrollTo({
        left: index * viewportWidth,
        behavior: "smooth", // Smooth scrolling transitions snap nicely into cell bounds
      });
    });
  });
}

/* =========================================================================
   SURGICAL EXTENSION: INVESTMENT PROTOCOLS MOBILE DOTS NAVIGATION TRACKER
   ========================================================================= */
window.addEventListener("DOMContentLoaded", () => {
  // Targets the precise class elements of your financial protocols layer securely
  const scrollContainer = document.querySelector(".payment-pods-shield");
  const dotsPanel = document.getElementById("paymentDots");

  if (!scrollContainer || !dotsPanel) return;

  const dotsCollection = dotsPanel.querySelectorAll(".indicator-dot");

  // Scroll Observer math updates active dot focus cleanly on mobile finger swipes
  scrollContainer.addEventListener("scroll", () => {
    const viewportWidth = scrollContainer.clientWidth;
    const totalScrollWidth = scrollContainer.scrollLeft;

    // Calculate which horizontal card quadrant is currently centered on glass screen
    let liveFocusIndex = Math.round(totalScrollWidth / viewportWidth);

    // Safety lock prevents tracking boundary overflow anomalies
    if (liveFocusIndex >= dotsCollection.length)
      liveFocusIndex = dotsCollection.length - 1;
    if (liveFocusIndex < 0) liveFocusIndex = 0;

    // Reset and apply gold highlighting class states recursively
    dotsCollection.forEach((dot, index) => {
      if (index === liveFocusIndex) {
        dot.classList.add("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });
  });

  // Touch tap binding lets high-ticket users snap directly to slides via dot taps
  dotsCollection.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const viewportWidth = scrollContainer.clientWidth;
      scrollContainer.scrollTo({
        left: index * viewportWidth,
        behavior: "smooth", // Smooth scrolling transitions snap nicely into cell bounds
      });
    });
  });

  console.log(
    "System Sync: Investment Protocols Mobile Dots Tracker Operational.",
  );
});

/**
 * YASEEN VANTAGE™ | DUAL-LAYER CAROUSEL HARMONIZER
 * Cross-links your manual gold slider bar track directly to your viewport coordinates.
 * Gives users complete manual drag control without any code fighting or pullbacks.
 */
document.addEventListener("DOMContentLoaded", () => {
  const sliderBar = document.getElementById("manualCarouselSliderBar");
  const track = document.getElementById("enhancementsTrack");
  const viewport =
    document.querySelector(".enhancements-carousel-viewport") ||
    track?.parentElement;

  if (!sliderBar || !track || !viewport) return;

  // 1. CALCULATE MAX BOUNDS: Determine total manual scrolling clearance runway area
  function computeMaximumScrollRunway() {
    return track.scrollWidth - viewport.clientWidth;
  }

  // 2. SLIDER BAR MOVEMENT INTERCEPT:
  // Translates dragging the gold bar handle into smooth, un-snapped horizontal viewport offsets
  sliderBar.addEventListener("input", (e) => {
    const activePercentage = parseFloat(e.target.value) / 100;
    const maxScrollDistance = computeMaximumScrollRunway();

    // Permanently pause standard autoplay timelines while user is handling the gold trackbar
    track.style.animationPlayState = "paused";
    if (window.isCarouselPaused !== undefined) window.isCarouselPaused = true;

    viewport.style.scrollBehavior = "auto"; // Kill smooth delay animations to unlock instant responsive finger tracking
    viewport.scrollLeft = maxScrollDistance * activePercentage;
  });

  // 3. SAFE RE-ENTRY DEPLOYMENT: Re-enables automatic looping when user lets go of the trackbar
  const releaseSliderTrackingLock = () => {
    setTimeout(() => {
      track.style.animationPlayState = "running";
      viewport.style.scrollBehavior = "smooth";
      if (window.isCarouselPaused !== undefined)
        window.isCarouselPaused = false;
    }, 1500); // 1.5-second safety grace buffer cushion allows client time to read chosen cards
  };

  sliderBar.addEventListener("mouseup", releaseSliderTrackingLock);
  sliderBar.addEventListener("touchend", releaseSliderTrackingLock);

  // 4. BACKWARD SYNCHRONIZATION LOOP:
  // Dynamically updates the gold slider thumb handle location if the carousel is running its standard autoplay cycle
  viewport.addEventListener(
    "scroll",
    () => {
      const maxScrollDistance = computeMaximumScrollRunway();
      if (maxScrollDistance <= 0) return;

      // Real-time synchronization check ensures the handle tracks correctly even during autoplay frames
      const currentScrollPercentage =
        (viewport.scrollLeft / maxScrollDistance) * 100;

      // Updates position quietly without firing duplicate event hooks loops
      if (document.activeElement !== sliderBar) {
        sliderBar.value = currentScrollPercentage;
      }
    },
    { passive: true },
  );
});
/**
 /**
 * 4. VALIDATION CONSOLE FIELD SHIELD
 * Evaluates core input fields based on the single consolidated production layout tree.
 * Safely handles submission routes for free applications vs direct upfront checkouts.
 */
document
  .getElementById("masterVantageIntakeForm")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    const diagnosticConsole = document.getElementById(
      "formValidationDiagnosticAlertConsole",
    );
    if (diagnosticConsole) {
      diagnosticConsole.style.display = "none";
      diagnosticConsole.textContent = "";
    }

    // Initialize checking variables cleanly using the single production architecture IDs exclusively
    const name = document.getElementById("fieldName").value.trim();
    const brand = document.getElementById("fieldBrand").value.trim();
    const objective = document.getElementById("fieldObjective").value.trim();
    const email = document.getElementById("fieldEmail").value.trim();
    const phone = document.getElementById("fieldPhone").value.trim();
    const consent1 = document.getElementById("legalConsent1").checked;
    const consent2 = document.getElementById("legalConsent2").checked;

    // Core Baseline Ingestion Safeguard
    if (
      !name ||
      !brand ||
      !objective ||
      !email ||
      !phone ||
      !consent1 ||
      !consent2
    ) {
      showDiagnosticAlertError(
        "Error: All required executive files profiling nodes and disclosures must be signed.",
      );
      return;
    }

    let activeRouterPath = ACTIVE_SYSTEM_TARGET_KEY;
    if (ACTIVE_SYSTEM_TARGET_KEY === "access") {
      activeRouterPath = document.getElementById("fieldMotherSelection").value;
    }

    const platformCheckbox = document.querySelector(
      '.enhancement-checkbox[value="platform"]',
    );
    const isPlatformQuoteTrack =
      (platformCheckbox && platformCheckbox.checked) ||
      window.location.search.toLowerCase().includes("item=platform");

    if (!activeRouterPath) {
      showDiagnosticAlertError(
        "Error: Please identify your required system asset archetype or customization track.",
      );
      return;
    }

    // --- ENFORCE STANDALONE SUBMISSION CHANNEL ROUTING INTERCEPTS ---
    if (
      activeRouterPath === "whitehorse" ||
      (activeRouterPath === "custom" &&
        (RUNTIME_INVOICE_TOTAL_AMOUNT === 0 || isPlatformQuoteTrack))
    ) {
      // Channel A: Free Application Consultation Submission Gate (No Price / Custom Quote)
      console.log(
        `System Status: Free Consultation ${activeRouterPath.toUpperCase()} Application Logged.`,
      );
      executeSuccessfulCallbackTransition();
    } else {
      // Channel B: Secure Checkout Engines (60% Base Retainer Deposit OR 100% Upfront Individual Card Upgrade)
      let targetCheckoutAmount = RUNTIME_INVOICE_TOTAL_AMOUNT;
      if (activeRouterPath !== "custom") {
        targetCheckoutAmount = RUNTIME_INVOICE_TOTAL_AMOUNT * 0.6; // 60% System Retainer Rule
      }

      document.getElementById("submitActionStrip").style.display = "none";
      document.getElementById("paypal-gateway-container").style.display =
        "block";

      initializeSecurePayPalSmartGateway(targetCheckoutAmount);
    }
  });

/**
 * UTILITY: TRIGGER LOCAL DIAGNOSTIC ERRORS PRINTING
 */
function showDiagnosticAlertError(msg) {
  const consoleBox = document.getElementById(
    "formValidationDiagnosticAlertConsole",
  );
  if (consoleBox) {
    consoleBox.textContent = msg;
    consoleBox.style.display = "block";
    consoleBox.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

/**
 * 5. SECURE LIVE PAYPAL JS SMART BUTTONS API INJECTION
 * Generates un-hackable dynamic payment checkouts using isolated variables.
 */
function initializeSecurePayPalSmartGateway(calculatedFinalAmount) {
  const renderTarget = document.getElementById("paypal-button-render-target");
  if (!renderTarget) return;

  renderTarget.innerHTML = ""; // Flush pre-existing instances to stop duplicate render loops

  const stringLockedPaymentTarget = calculatedFinalAmount.toFixed(2);

  if (typeof paypal === "undefined") {
    showDiagnosticAlertError(
      "Critical Connection Timeout: PayPal Smart SDK failed to map network hooks.",
    );
    return;
  }

  paypal
    .Buttons({
      style: {
        layout: "vertical",
        color: "gold",
        shape: "rect",
        label: "checkout",
      },
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: stringLockedPaymentTarget,
              },
              description: `YASEEN VANTAGE™ - Access Token Authorization: ${ACTIVE_SYSTEM_TARGET_KEY.toUpperCase()}`,
            },
          ],
        });
      },
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          console.log("Transaction Clearance Match Token Secured:", details);
          executeSuccessfulCallbackTransition();
        });
      },
      onError: function (err) {
        console.error("Gateway Processing Deviation Detected:", err);
        showDiagnosticAlertError(
          "Gateway Transaction Refused. Verify capital channels allocation limits.",
        );
        document.getElementById("submitActionStrip").style.display = "flex";
        document.getElementById("paypal-gateway-container").style.display =
          "none";
      },
    })
    .render("#paypal-button-render-target");
}

/**
 * 6. HIGH-END GRAPHIC TRANSITION TERMINATION CALLBACK
 * Blurs active field cards smoothly, completely fading them into the success panel layout.
 */
function executeSuccessfulCallbackTransition() {
  const mainUI = document.getElementById("mainUI");
  const confirmationUI = document.getElementById("confirmation");

  if (mainUI) {
    mainUI.style.transition = "filter 1.2s ease, opacity 1.2s ease";
    mainUI.style.filter = "blur(60px)";
    mainUI.style.opacity = "0";
  }

  setTimeout(() => {
    if (mainUI) mainUI.style.display = "none";
    if (confirmationUI) {
      confirmationUI.style.display = "flex";
      setTimeout(() => {
        confirmationUI.style.opacity = "1";
      }, 50);
    }
  }, 1200);
}

/**
 * RE-ALIGN UN-TAMPERABLE BILLING BOARD DISPLAY NUMBER STRINGS
 */
function updateBillingDisplayUI(amount, textNotice) {
  const priceDisplay = document.getElementById("billingDisplayPrice");
  const termsDisplay = document.getElementById("billingSummaryTerms");

  if (priceDisplay)
    priceDisplay.textContent = `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (termsDisplay) termsDisplay.textContent = textNotice;
}
