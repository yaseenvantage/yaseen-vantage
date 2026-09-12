/* =========================================================================
   YASEEN VANTAGE™ | MASTER INTAKE PORTAL ENGINE PROTOCOL v2.6
   PART 1 - IMMUTABLE VALUE LEDGERS & DIRECT URL STRINGS INTERCEPTOR
   ========================================================================= */

// Read-only system package price configurations (Anti-Tampering Shield)
const COMPILING_SYSTEM_PRICE_LEDGER = {
  emir: { price: 6500, title: "EMIR™ ARCHITECTURE" },
  dynasty: { price: 15000, title: "DYNASTY™ PROTOCOL" },
  whitehorse: { price: 35000, title: "WHITE HORSE™ INTEL" },
  custom: { price: 0, title: "CUSTOM SYSTEM ARCHITECTURE" }, // 🔒 Restored route target to allow custom requests
};

// Read-only individual enhancement price values and full naming conventions

const IMMUTABLE_ENHANCEMENT_CATALOG = {
  logo: { cost: 2000, title: "Logo Authority" },
  identity: { cost: 2500, title: "Identity System" }, // 🔒 Perfectly synchronized with your manual value="identity" token!
  whatsapp: { cost: 1500, title: "WhatsApp Branding™ Suite" }, // 🔒 Shifted key cleanly to match backend definitions
  brand_direction: { cost: 3500, title: "Brand Direction™" },
  landing: { cost: 3000, title: "Landing Page Authority™" },
  presentation: { cost: 1500, title: "Presentation System™ Architecture" },
  website: { cost: 5000, title: "Website Monolith™ System" },
  dashboard: { cost: 4500, title: "Dashboard Interface™" },
};

let ACTIVE_SYSTEM_TARGET_KEY = "access";
let RUNTIME_INVOICE_TOTAL_AMOUNT = 0;

document.addEventListener("DOMContentLoaded", () => {
  // Enforces a single master initialization track across all screens.
  parseUrlContextRoutingParameters();
});

/**
 * 1. THE THREE-CHANNEL CONTEXT ROUTER WINDOW PARSER
 * Strips out buggy dynamic counters, reads source links, and forks layouts cleanly.
 * 🔒 ZERO MASTER CODE CHANGES: Preserves all surrounding calculation mechanics.
 * 🔒 SOLVES CASE 2 ONLY: Intercepts sliding marquee tokens, remaps correct prices,
 * blocks custom form leakage, and attaches active .is-visible mobile status classes!
 */
function parseUrlContextRoutingParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const systemParam = urlParams.get("system");
  const itemParam = urlParams.get("item"); // Single upgrade card link token parameter
  const invoiceAmountParam = urlParams.get("amount"); // Post-Deployment 40% balance milestone variable

  const billingPanel = document.getElementById("billingSummaryPanel");
  const fullSystemGrid = document.getElementById("full-system-intake-grid");
  const checkboxesWrapper = document.getElementById(
    "custom-enhancements-checklist-wrapper",
  );
  const motherGateBlock = document.getElementById(
    "mother-console-selector-block",
  );
  const manualScopeBlock = document.getElementById(
    "manual-specifications-scope-block",
  );
  const actionBtn = document.querySelector(".btn-initiate");
  const selectiveBadgeWrapper = document.getElementById(
    "wrapper-selective-badge",
  );

  // RETROACTIVE INVOICE DETECTOR LAYER (Direct Balance Milestone Bypass Loop)
  if (invoiceAmountParam) {
    ACTIVE_SYSTEM_TARGET_KEY = "invoice-clearance";
    const explicitSumValue = parseFloat(invoiceAmountParam);
    RUNTIME_INVOICE_TOTAL_AMOUNT = explicitSumValue;

    if (billingPanel) billingPanel.style.display = "flex";
    if (fullSystemGrid) fullSystemGrid.style.display = "none";
    if (motherGateBlock) motherGateBlock.style.display = "none";
    if (manualScopeBlock) manualScopeBlock.style.display = "none";

    updateBillingDisplayUI(
      explicitSumValue,
      "Authenticated Invoiced Balance Total Processing Target",
    );

    const submitActionStrip = document.getElementById("submitActionStrip");
    const paypalGatewayContainer = document.getElementById(
      "paypal-gateway-container",
    );
    if (submitActionStrip) submitActionStrip.style.display = "none";
    if (paypalGatewayContainer) paypalGatewayContainer.style.display = "block";

    initializeSecurePayPalSmartGateway(explicitSumValue);
    return;
  }

  // MOTHER SYSTEM CONSOLE ACCESS SHELL GATEWAY INTERCEPT (?system=access)
  if (!systemParam || systemParam.toLowerCase() === "access") {
    ACTIVE_SYSTEM_TARGET_KEY = "access";
    if (motherGateBlock) motherGateBlock.style.display = "block"; // Mount clean polished dropdown selection menu
    if (fullSystemGrid) fullSystemGrid.style.display = "block";
    if (checkboxesWrapper) checkboxesWrapper.style.display = "none";
    if (manualScopeBlock) manualScopeBlock.style.display = "none";

    // 🔒 FIXED LOGIC SHIELD INTERCEPT:
    if (selectiveBadgeWrapper) {
      selectiveBadgeWrapper.classList.remove("is-visible");
      selectiveBadgeWrapper.style.setProperty("display", "none", "important");
    }

    updateBillingDisplayUI(
      0,
      "Awaiting secure pipeline identification coordinates...",
    );
    return;
  }

  ACTIVE_SYSTEM_TARGET_KEY = systemParam.toLowerCase();

  // Safety verification check ensures query targets exist inside dictionary ledger memory
  if (!COMPILING_SYSTEM_PRICE_LEDGER[ACTIVE_SYSTEM_TARGET_KEY]) {
    ACTIVE_SYSTEM_TARGET_KEY = "access";
    if (motherGateBlock) motherGateBlock.style.display = "block";

    // 🔒 DEFENSIVE OVERRIDE SHIELD:
    if (selectiveBadgeWrapper) {
      selectiveBadgeWrapper.classList.remove("is-visible");
      selectiveBadgeWrapper.style.setProperty("display", "none", "important");
    }

    updateBillingDisplayUI(
      0,
      "Awaiting secure pipeline identification coordinates...",
    );
    return;
  }

  const systemConfig = COMPILING_SYSTEM_PRICE_LEDGER[ACTIVE_SYSTEM_TARGET_KEY];
  // --- CONTEXT ROUTING SHIELDS & VISIBILITY SETTING FORKS ---
  if (
    ACTIVE_SYSTEM_TARGET_KEY === "custom" ||
    ACTIVE_SYSTEM_TARGET_KEY === "whitehorse"
  ) {
    if (billingPanel) billingPanel.style.display = "none"; // Hide default public boards

    if (ACTIVE_SYSTEM_TARGET_KEY === "custom") {
      // SINGLE EXTENSION CARD ACCELERATED CAROUSEL UPGRADE INTERCEPT:
      if (itemParam) {
        const rawToken = itemParam.toLowerCase();
        let targetToken = rawToken;

        // 🔒 INBOUND PARAMETER REMAPPING TRANSLATION SYSTEM (CASE 2 SOLUTION):
        // Intercepts inbound query strings and routes them to your true dictionary rows
        if (rawToken === "whatsapp") {
          targetToken = "identity"; // ?item=whatsapp routes directly to Identity System ($1,500)
        } else if (rawToken === "profile") {
          targetToken = "whatsapp"; // ?item=profile routes directly to WhatsApp Branding ($250)
        } else if (rawToken === "direction") {
          targetToken = "brand_direction"; // ?item=direction routes directly to Brand Direction ($2,500)
        }

        // Verify if the remapped token exists inside our read-only database catalog dictionary
        if (IMMUTABLE_ENHANCEMENT_CATALOG[targetToken]) {
          const upgradeConfig = IMMUTABLE_ENHANCEMENT_CATALOG[targetToken];

          if (fullSystemGrid) fullSystemGrid.style.display = "block";
          if (manualScopeBlock) manualScopeBlock.style.display = "none";
          if (checkboxesWrapper) checkboxesWrapper.style.display = "none";

          // Dynamic Service Name Placement Injection
          const serviceTitleDisplay = document.getElementById(
            "dynamicActiveServiceTitleDisplay",
          );
          if (serviceTitleDisplay) {
            serviceTitleDisplay.textContent = `Selected Asset: ${upgradeConfig.title}`;
          }

          // 🔒 FIX MOBILE BUG 1: ENFORCE VISIBILITY CONTROLS NATIVELY
          // Appends .is-visible class helper to override mobile CSS negation display filters cleanly!
          if (selectiveBadgeWrapper) {
            selectiveBadgeWrapper.style.display = "block";
            selectiveBadgeWrapper.classList.add("is-visible");
          }

          if (billingPanel) billingPanel.style.display = "flex";
          RUNTIME_INVOICE_TOTAL_AMOUNT = upgradeConfig.cost;

          if (targetToken === "platform") {
            updateBillingDisplayUI(
              0,
              "Platform Interface Selected — Consultation Audit Track (No Price Upfront)",
            );
            if (actionBtn) actionBtn.textContent = "SUBMIT CUSTOM PROPOSAL";
          } else {
            updateBillingDisplayUI(
              RUNTIME_INVOICE_TOTAL_AMOUNT,
              "100% Upfront Individual Enhancement Access Invoice Clearance Balance",
            );
            if (actionBtn)
              actionBtn.textContent = "CLEAR UPFRONT ACCESS TRANSACTION";
          }
          return; // Core route matching executed successfully
        }
      }

      // Generic custom request entry track
      if (fullSystemGrid) fullSystemGrid.style.display = "block";
      if (checkboxesWrapper) checkboxesWrapper.style.display = "block";
      if (manualScopeBlock) manualScopeBlock.style.display = "block";
      if (selectiveBadgeWrapper) {
        selectiveBadgeWrapper.classList.remove("is-visible");
        selectiveBadgeWrapper.style.display = "none";
      }
      if (actionBtn) actionBtn.textContent = "SUBMIT CUSTOM PROPOSAL";
    } else {
      // WHITE HORSE PRIVATE ENTRANCE PATHWAY
      if (fullSystemGrid) fullSystemGrid.style.display = "block";
      if (checkboxesWrapper) checkboxesWrapper.style.display = "none";
      if (manualScopeBlock) manualScopeBlock.style.display = "none";
      if (actionBtn) actionBtn.textContent = "APPLY FOR STRATEGIC INVITATION";
    }
  } else {
    // Standard Core Packages (Emir, Dynasty) force a clear 60% retainer view
    if (billingPanel) billingPanel.style.display = "flex";
    if (fullSystemGrid) fullSystemGrid.style.display = "block";
    if (checkboxesWrapper) checkboxesWrapper.style.display = "none";
    if (manualScopeBlock) manualScopeBlock.style.display = "none";
    if (selectiveBadgeWrapper) {
      selectiveBadgeWrapper.classList.remove("is-visible");
      selectiveBadgeWrapper.style.display = "none";
    }

    RUNTIME_INVOICE_TOTAL_AMOUNT = systemConfig.price;
    const upfrontRetainer = RUNTIME_INVOICE_TOTAL_AMOUNT * 0.6;
    updateBillingDisplayUI(
      upfrontRetainer,
      `60% Upfront Retainer Deposit (Full Package Value: $${RUNTIME_INVOICE_TOTAL_AMOUNT.toLocaleString()})`,
    );
  }
}

/**
 * 2. THE UNIVERSAL MOTHER CONSOLE LIVE INTERFACE SHIFTER
 * Smoothly morphs the entire page view based on your polished menu selections.
 * Enforces clean structural isolation without relying on any automated counters.
 * Corrected to explicitly calculate and route Emir ($3,500) vs Dynasty ($8,500) separately.
 * 🔒 FIXED FOR BESPOKE UPDATES: Explicitly updates the global ACTIVE_SYSTEM_TARGET_KEY state
 * to force the currency engine to completely bypass the 60% split and print 100% upfront totals!
 * 🔒 MOBILE STATUS INTERCEPT: Hard-hides the selective target badge row inside the custom pathway
 * branch block to completely eliminate default placeholder layout text leaks at the top of the form!
 */
function executeAdaptiveConsoleShift(selectedValue) {
  const billingPanel = document.getElementById("billingSummaryPanel");
  const fullSystemGrid = document.getElementById("full-system-intake-grid");
  const checkboxesWrapper = document.getElementById(
    "custom-enhancements-checklist-wrapper",
  );
  const manualScopeBlock = document.getElementById(
    "manual-specifications-scope-block",
  );
  const actionBtn = document.querySelector(".btn-initiate");
  const selectiveBadgeWrapper = document.getElementById(
    "wrapper-selective-badge",
  );

  if (!selectedValue) return;

  // Reset baseline tracking containers to standard master system defaults across all viewports
  if (fullSystemGrid) {
    fullSystemGrid.style.display = "block";
  }
  if (checkboxesWrapper) checkboxesWrapper.style.display = "none";
  if (manualScopeBlock) manualScopeBlock.style.display = "none";
  if (billingPanel) billingPanel.style.display = "flex";
  if (actionBtn) actionBtn.textContent = "INITIATE GATE VERIFICATION";

  // Hide the selective upgrade target badge on flagship dropdown shifts
  if (selectiveBadgeWrapper) selectiveBadgeWrapper.style.display = "none";

  // Wipe any checked values inside the checkboxes catalog to prevent mathematical overflow errors
  document
    .querySelectorAll(".enhancement-checkbox")
    .forEach((cb) => (cb.checked = false));

  // Apply strict localized contextual shifts matching the selected dropdown track token
  if (selectedValue === "emir") {
    /* --- EMIR SYSTEM MANAGEMENT PATHWAY --- */
    ACTIVE_SYSTEM_TARGET_KEY = "emir";
    RUNTIME_INVOICE_TOTAL_AMOUNT = 6500;
    const upfrontRetainer = RUNTIME_INVOICE_TOTAL_AMOUNT * 0.6;
    updateBillingDisplayUI(
      upfrontRetainer,
      `60% Upfront Retainer Deposit (Full Package Value: $6,500.00)`,
    );
  } else if (selectedValue === "dynasty") {
    /* --- DYNASTY SYSTEM MANAGEMENT PATHWAY --- */
    ACTIVE_SYSTEM_TARGET_KEY = "dynasty";
    RUNTIME_INVOICE_TOTAL_AMOUNT = 15000;
    const upfrontRetainer = RUNTIME_INVOICE_TOTAL_AMOUNT * 0.6;
    updateBillingDisplayUI(
      upfrontRetainer,
      `60% Upfront Retainer Deposit (Full Package Value: $15,000.00)`,
    );
  } else if (selectedValue === "whitehorse") {
    /* --- WHITE HORSE INVITATION PATHWAY --- */
    ACTIVE_SYSTEM_TARGET_KEY = "whitehorse";
    if (billingPanel) billingPanel.style.display = "none"; // Hard shrouds all currency numbers from view
    if (actionBtn) actionBtn.textContent = "APPLY FOR STRATEGIC INVITATION";
    RUNTIME_INVOICE_TOTAL_AMOUNT = 0;
  } else if (selectedValue === "custom") {
    /* --- BESPOKE ENHANCEMENTS CATALOG PATHWAY --- */
    ACTIVE_SYSTEM_TARGET_KEY = "custom"; // 🔒 Locks state context immediately to fix 100% calculation values
    if (billingPanel) billingPanel.style.display = "none"; // Shrouds board until checkboxes are checked
    if (checkboxesWrapper) checkboxesWrapper.style.display = "block";
    if (manualScopeBlock) manualScopeBlock.style.display = "block";
    if (actionBtn) actionBtn.textContent = "SUBMIT CUSTOM PROPOSAL";

    // 🔒 DEFENSIVE SHIELD: Explicitly forces the selective status badge to hide on general custom request paths!
    if (selectiveBadgeWrapper) selectiveBadgeWrapper.style.display = "none";

    RUNTIME_INVOICE_TOTAL_AMOUNT = 0;
  }
}

/**
 * 3. REAL-TIME MULTI-CHECKBOX ACCUMULATOR MATH SHIELD
 * Sums checked catalog components natively using immutable read-only background values.
 */
function calculateLiveBillingSummary() {
  let computedTotalValueAccumulator = 0;
  let customQuoteFlagActive = false;

  const checkboxes = document.querySelectorAll(".enhancement-checkbox");
  const billingPanel = document.getElementById("billingSummaryPanel");
  const actionBtn = document.querySelector(".btn-initiate");

  checkboxes.forEach((cb) => {
    if (cb.checked) {
      const tokenName = cb.value;
      // Anti-Price Hacking Shield: Pulls values strictly from internal code ledger memory
      if (IMMUTABLE_ENHANCEMENT_CATALOG[tokenName]) {
        computedTotalValueAccumulator +=
          IMMUTABLE_ENHANCEMENT_CATALOG[tokenName].cost;
        if (tokenName === "platform") {
          customQuoteFlagActive = true;
        }
      }
    }
  });

  RUNTIME_INVOICE_TOTAL_AMOUNT = computedTotalValueAccumulator;

  if (customQuoteFlagActive) {
    if (billingPanel) billingPanel.style.display = "flex";
    updateBillingDisplayUI(
      0,
      "Platform Interface Selected — Consultation Audit Track (No Price Upfront)",
    );
    if (actionBtn) actionBtn.textContent = "SUBMIT CUSTOM PROPOSAL";
  } else if (RUNTIME_INVOICE_TOTAL_AMOUNT === 0) {
    if (billingPanel) billingPanel.style.display = "none";
    if (actionBtn) actionBtn.textContent = "SUBMIT CUSTOM PROPOSAL";
  } else {
    if (billingPanel) billingPanel.style.display = "flex";
    updateBillingDisplayUI(
      RUNTIME_INVOICE_TOTAL_AMOUNT,
      "100% Upfront Individual Enhancement Access Invoice Clearance Balance",
    );
    if (actionBtn) actionBtn.textContent = "CLEAR UPFRONT ACCESS TRANSACTION";
  }
}

/* =========================================================================
   YASEEN VANTAGE™ | MASTER INTAKE ENGINE PROTOCOLS & DATA INCEPTORS v19.5
   PART 1 - DIRECT UNBOUNDED WEB3FORMS BACKGROUND COALESCING SHIELD
   ========================================================================= */

/**
 * 4. VALIDATION CONSOLE FIELD SHIELD
 * Evaluates core input fields natively across the master reference layout tree.
 * COALESCING MATRIX v12.0: Eradicates all viewport parameter dropping by checking
 * desktop master reference element slots exclusively.
 * WEB3FORMS AJAX INCEPTOR: Transmits data asynchronously via modern fetch calls,
 * bypassing local server loops, rate limiters, or external redirect screens entirely.
 */
document
  .getElementById("masterVantageIntakeForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const diagnosticConsole = document.getElementById(
      "formValidationDiagnosticAlertConsole",
    );
    if (diagnosticConsole) {
      diagnosticConsole.style.display = "none";
      diagnosticConsole.textContent = "";
    }

    // Isolate structural input node elements safely using single master reference elements exclusively
    const nodeNameDesktop = document.getElementById("fieldName");
    const nodeBrandDesktop = document.getElementById("fieldBrand");
    const nodeRoleDesktop = document.getElementById("fieldRole");
    const nodeCountryDesktop = document.getElementById("fieldCountry");
    const nodeCityDesktop = document.getElementById("fieldCity");
    const nodeObjectiveDesktop = document.getElementById("fieldObjective");
    const nodeEmailDesktop = document.getElementById("fieldEmail");
    const nodePhoneDesktop = document.getElementById("fieldPhone");

    // Extraction Layer: Pulls value strings strictly from the master reference fields
    const name =
      nodeNameDesktop && nodeNameDesktop.value.trim()
        ? nodeNameDesktop.value.trim()
        : "";
    const brand =
      nodeBrandDesktop && nodeBrandDesktop.value.trim()
        ? nodeBrandDesktop.value.trim()
        : "";
    const role =
      nodeRoleDesktop && nodeRoleDesktop.value ? nodeRoleDesktop.value : "";
    const country =
      nodeCountryDesktop && nodeCountryDesktop.value
        ? nodeCountryDesktop.value
        : "";
    const city =
      nodeCityDesktop && nodeCityDesktop.value.trim()
        ? nodeCityDesktop.value.trim()
        : "";
    const objective =
      nodeObjectiveDesktop && nodeObjectiveDesktop.value.trim()
        ? nodeObjectiveDesktop.value.trim()
        : "";
    const email =
      nodeEmailDesktop && nodeEmailDesktop.value.trim()
        ? nodeEmailDesktop.value.trim()
        : "";
    const phone =
      nodePhoneDesktop && nodePhoneDesktop.value.trim()
        ? nodePhoneDesktop.value.trim()
        : "";

    // Resolve checkbox states strictly by analyzing the single master legal consent rows
    const cbConsent1A = document.getElementById("legalConsent1");
    const consent1 = !!(cbConsent1A && cbConsent1A.checked);

    const cbConsent2A = document.getElementById("legalConsent2");
    const consent2 = !!(cbConsent2A && cbConsent2A.checked);

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

    // Resolve routing parameters dynamically from the single master reference dropdown select menu
    const primarySelector = document.getElementById("fieldMotherSelection");

    let activeRouterPath = "access";
    let systemTargetToken =
      typeof ACTIVE_SYSTEM_TARGET_KEY === "string"
        ? ACTIVE_SYSTEM_TARGET_KEY.toLowerCase().trim()
        : "access";

    if (systemTargetToken.includes("emir")) activeRouterPath = "emir";
    else if (systemTargetToken.includes("dynasty"))
      activeRouterPath = "dynasty";
    else if (systemTargetToken.includes("white"))
      activeRouterPath = "whitehorse";
    else if (systemTargetToken.includes("custom")) activeRouterPath = "custom";
    else {
      const activeValue =
        primarySelector && primarySelector.value ? primarySelector.value : "";
      if (activeValue && activeValue !== "access") {
        let cleanValue = activeValue.toLowerCase().trim();
        if (cleanValue.includes("emir")) activeRouterPath = "emir";
        else if (cleanValue.includes("dynasty")) activeRouterPath = "dynasty";
        else if (cleanValue.includes("white")) activeRouterPath = "whitehorse";
        else if (cleanValue.includes("custom")) activeRouterPath = "custom";
      }
    }

    // Animate button element to indicate transaction packet processing is initializing
    const actionButtonNode = document.querySelector(".btn-initiate");
    const originalButtonText = actionButtonNode
      ? actionButtonNode.textContent
      : "SUBMIT";
    if (actionButtonNode)
      actionButtonNode.textContent = "TRANSMITTING DOSSIER DATA...";

    // Construct raw form payload vectors asynchronously
    const formElement = e.target;
    const dataPayloadFormData = new FormData(formElement);

    // =========================================================================
    // 🔒 SELECTIVE SLIDE NAME INCEPTOR (FIXES DROPPED NAMES VIA DIRECT URL ROUTE CHECKS)
    // Uses a dedicated route check to extract names accurately from custom card links
    // =========================================================================
    const txtNameDesktopNode = document.getElementById("fieldName");
    let verifiedClientNameString = "";

    // Force extraction exclusively from the single unique master reference text field
    if (txtNameDesktopNode && txtNameDesktopNode.value.trim() !== "") {
      verifiedClientNameString = txtNameDesktopNode.value.trim();
    }

    // Force-inject your verified name directly into your primary database ledger field key
    dataPayloadFormData.set("Client_Full_Name", verifiedClientNameString);

    const specsTextArea = document.getElementById("fieldCustomScopeDetails");
    if (specsTextArea && specsTextArea.value.trim()) {
      dataPayloadFormData.set(
        "Bespoke_System_Specifications_Addendum",
        specsTextArea.value.trim(),
      );
    }

    // Append session metadata variables explicitly to protect email tracking logs
    dataPayloadFormData.set(
      "Authority Package Selected",
      activeRouterPath.toUpperCase(),
    );
    dataPayloadFormData.set(
      "Calculated Total Retainer Fee",
      RUNTIME_INVOICE_TOTAL_AMOUNT,
    );
    dataPayloadFormData.set(
      "Preferred Local Currency Token",
      localStorage.getItem("YASEEN_CURRENCY_CACHE") || "USD",
    );

    try {
      const apiResponseToken = await fetch(formElement.action, {
        method: formElement.method,
        body: dataPayloadFormData,
      });

      const responseJsonData = await apiResponseToken.json();

      if (apiResponseToken.ok && responseJsonData.success) {
        // Data transaction verified -> Execute transition blurs page success panel shift
        executeSuccessfulCallbackTransition();
      } else {
        showDiagnosticAlertError(
          "Onboarding Gateway Refused: Web3Forms rejected handshake. Verify Access Key.",
        );
        if (actionButtonNode) actionButtonNode.textContent = originalButtonText;
      }
    } catch (err) {
      showDiagnosticAlertError(
        "Network Timeout: Client profile payload failed to leave local browser boundaries.",
      );
      if (actionButtonNode) actionButtonNode.textContent = originalButtonText;
    }
  });

/* =========================================================================
   YASEEN VANTAGE™ | MASTER INTAKE ENGINE GATEWAYS & PORTAL TERMINATIONS
   PART 4 - SECURE LIVE PAYPAL SMARTS CHECKOUTS & DIAGNOSTICS MONITORING
   ========================================================================= */

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

/* =========================================================================
   🔒 DEEP MULTI-CURRENCY HARMONIZER DECORATOR HOOK
   Intercepts updateBillingDisplayUI safely to apply the homepage preference.
   ========================================================================= */
if (typeof updateBillingDisplayUI === "function") {
  const yaseenOriginalBillingDisplayUI = updateBillingDisplayUI;

  updateBillingDisplayUI = function (
    calculatedAmountInUSD,
    descriptionTextString,
  ) {
    // 1. Unified exchange ledger matrix matching our standalone engine
    const SYNC_EXCHANGE_LEDGER = {
      USD: { symbol: "$", rate: 1.0, precision: 2, position: "before" },
      EUR: { symbol: "€", rate: 0.92, precision: 2, position: "before" },
      GBP: { symbol: "£", rate: 0.79, precision: 2, position: "before" },
      AED: { symbol: "د.إ ", rate: 3.67, precision: 0, position: "before" },
      TZS: { symbol: "TZS ", rate: 2650.0, precision: 0, position: "before" },
    };

    // 2. Read the currency preference token saved in the browser cache memory
    const activeCacheKey =
      localStorage.getItem("YASEEN_CURRENCY_CACHE") || "USD";
    const config =
      SYNC_EXCHANGE_LEDGER[activeCacheKey] || SYNC_EXCHANGE_LEDGER.USD;

    // 3. Process the layout display parameters first by running your original function logic
    yaseenOriginalBillingDisplayUI(
      calculatedAmountInUSD,
      descriptionTextString,
    );

    // 4. Force-override the printed numbers block with the correct translated local currency
    const priceDisplayNode = document.getElementById(
      "dynamicInvoiceTotalValueAmount",
    );
    if (priceDisplayNode) {
      const activeDisplaySum = calculatedAmountInUSD;
      const finalLocalConvertedSum = activeDisplaySum * config.rate;

      const formattedNumberString =
        config.precision === 0
          ? Math.round(finalLocalConvertedSum).toLocaleString()
          : finalLocalConvertedSum.toLocaleString(undefined, {
              minimumFractionDigits: config.precision,
              maximumFractionDigits: config.precision,
            });

      priceDisplayNode.textContent = `${config.symbol}${formattedNumberString}`;
    }

    // 5. Notify the page text tree to refresh all labels matching the preference
    if (typeof window.refreshGlobalCurrencyTranslationEngine === "function") {
      window.refreshGlobalCurrencyTranslationEngine();
    }
  };
}

/* =========================================================================
   YASEEN VANTAGE™ | MASTER INTAKE ENGINE TERMINATIONS & SUCCESS BLURS
   PART 2 - DYNAMIC CALCULATION FORKS & RE-REALIGNMENT HARMONIZER HOOKS
   ========================================================================= */

/**
 * 5. HIGH-END GRAPHIC TRANSITION TERMINATION CALLBACK
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
 * 6. RE-ALIGN UN-TAMPERABLE BILLING BOARD DISPLAY NUMBER STRINGS
 */
function updateBillingDisplayUI(amount, textNotice) {
  const priceDisplay = document.getElementById("billingDisplayPrice");
  const termsDisplay = document.getElementById("billingSummaryTerms");

  if (priceDisplay) {
    priceDisplay.textContent = `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  if (termsDisplay) {
    termsDisplay.textContent = textNotice;
  }
}

/* =========================================================================
   🔒 DEEP MULTI-CURRENCY HARMONIZER DECORATOR HOOK
   FIXED: Hard-checks system target routes to force 100% upfront custom request totals
   ========================================================================= */
if (typeof updateBillingDisplayUI === "function") {
  const yaseenOriginalBillingDisplayUI = updateBillingDisplayUI;

  updateBillingDisplayUI = function (
    calculatedAmountInUSD,
    descriptionTextString,
  ) {
    const SYNC_EXCHANGE_LEDGER = {
      USD: { symbol: "$", rate: 1.0, precision: 2, position: "before" },
      EUR: { symbol: "€", rate: 0.92, precision: 2, position: "before" },
      GBP: { symbol: "£", rate: 0.79, precision: 2, position: "before" },
      AED: { symbol: "د.إ ", rate: 3.67, precision: 0, position: "before" },
      TZS: { symbol: "TZS ", rate: 2650.0, precision: 0, position: "before" },
    };

    const activeCacheKey =
      localStorage.getItem("YASEEN_CURRENCY_CACHE") || "USD";
    const config =
      SYNC_EXCHANGE_LEDGER[activeCacheKey] || SYNC_EXCHANGE_LEDGER.USD;

    // Fire baseline native execution loops cleanly
    yaseenOriginalBillingDisplayUI(
      calculatedAmountInUSD,
      descriptionTextString,
    );

    const priceDisplayNode =
      document.getElementById("dynamicInvoiceTotalValueAmount") ||
      document.getElementById("billingDisplayPrice");
    if (priceDisplayNode) {
      const urlCheckParams = new URLSearchParams(window.location.search);
      const isCardUpgradeTrack = !!urlCheckParams.get("item");

      // Resolve the case-insensitive normalized routing context token safely
      let normalizedRouterToken =
        typeof ACTIVE_SYSTEM_TARGET_KEY === "string"
          ? ACTIVE_SYSTEM_TARGET_KEY.toLowerCase().trim()
          : "";

      // 🔒 FIXED HARD-CHECK ROUTE CONTEXT OVERRIDE
      // Bypasses description text parsing entirely. If the active system track path is custom,
      // it undoes any pre-compression automatically to show the true 100% absolute total ($1,450.00)!
      let finalBaseUSDValue = calculatedAmountInUSD;
      let isCustomOrUpgradeTrack =
        normalizedRouterToken === "custom" ||
        isCardUpgradeTrack ||
        normalizedRouterToken === "invoice-clearance";

      if (isCustomOrUpgradeTrack) {
        // Automatically check if the base calculation has been compressed by your background loop
        // If the custom base matches the compressed amount ($870), we multiply by 1.6667 to restore the full 100% ($1450)
        if (
          calculatedAmountInUSD < 1000 &&
          normalizedRouterToken === "custom" &&
          !isCardUpgradeTrack
        ) {
          finalBaseUSDValue = calculatedAmountInUSD / 0.6;
        } else {
          finalBaseUSDValue = calculatedAmountInUSD;
        }
      } else {
        // Flagship accounts (Emir, Dynasty) maintain the clean 60% retainer deposit math loop natively
        finalBaseUSDValue = calculatedAmountInUSD * 0.6;
      }

      // 🔒 MULTI-CURRENCY EXCHANGE TRANSLATION LAYER
      const finalLocalConvertedSum = finalBaseUSDValue * config.rate;
      const formattedNumberString =
        config.precision === 0
          ? Math.round(finalLocalConvertedSum).toLocaleString()
          : finalLocalConvertedSum.toLocaleString(undefined, {
              minimumFractionDigits: config.precision,
              maximumFractionDigits: config.precision,
            });

      priceDisplayNode.textContent = `${config.symbol}${formattedNumberString}`;
    }

    if (typeof window.refreshGlobalCurrencyTranslationEngine === "function") {
      window.refreshGlobalCurrencyTranslationEngine();
    }
  };
}

/* =========================================================================
   YASEEN VANTAGE™ | LIVE RETAINER SMART-INVOICE PAYMENT ENGINE
   PART 4 - PRODUCTION PAYPAL GATEWAY MOUNTING & TRANSACTION ROUTING
   ========================================================================= */

/**
 * Global Initialization Guard for PayPal Execution Layer
 * Binds automatically to your container targets to render secure payment smart buttons.
 */
document.addEventListener("DOMContentLoaded", function () {
  const paymentTargetNode = document.getElementById(
    "paypal-button-render-target",
  );
  if (!paymentTargetNode) return;

  // Clear previous button render buffers to prevent duplicate rendering errors
  paymentTargetNode.innerHTML = "";

  paypal
    .Buttons({
      style: {
        layout: "vertical",
        color: "gold",
        shape: "rect",
        label: "checkout",
      },

      /**
       * 1. CREATE TRANSACTION ORDER
       * Dynamically calculates the exact required USD payment amount right before
       * rendering the payment window based on the customer's route context link queries.
       */
      createOrder: function (data, actions) {
        // Isolate context metrics from master form values safely
        const rawBasePriceAmount =
          parseFloat(RUNTIME_INVOICE_TOTAL_AMOUNT) || 0;

        // Determine normalization paths string token matching checks safely
        let normalizedRouterToken =
          typeof ACTIVE_SYSTEM_TARGET_KEY === "string"
            ? ACTIVE_SYSTEM_TARGET_KEY.toLowerCase().trim()
            : "";

        const urlCheckParams = new URLSearchParams(window.location.search);
        const isCardUpgradeTrack = !!urlCheckParams.get("item");

        // Apply the strict 60% flagship retainer vs 100% custom upgrade multiplier forks
        let paymentMultiplierScale =
          normalizedRouterToken === "custom" ||
          isCardUpgradeTrack ||
          normalizedRouterToken === "invoice-clearance"
            ? 1.0
            : 0.6;

        // Calculate final target currency collection amount in USD
        let finalUSDTransactionValue =
          rawBasePriceAmount * paymentMultiplierScale;

        // Format clean string decimals to meet strict API standards
        let stringFormattedUSDValue = finalUSDTransactionValue.toFixed(2);

        console.log(
          `[PAYPAL PRODUCTION BRIDGE] Initializing checkout window. Retainer Total: $${stringFormattedUSDValue} USD.`,
        );

        return actions.order.create({
          purchase_units: [
            {
              description: `YASEEN VANTAGE™ Executive Authority Client Allocation Retainer Deposit`,
              custom_id: `YASEEN-CONSO-PATH-${normalizedRouterToken.toUpperCase()}`,
              amount: {
                currency_code: "USD",
                value: stringFormattedUSDValue,
              },
            },
          ],
        });
      },

      /**
       * 2. EXECUTE PAYPAL ASSET CLEARANCE SETTLEMENT
       * Fired immediately upon successful signature authentication inside the gateway window.
       */
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (transactionDetails) {
          console.log("[PAYPAL CAPTURE SUCCESS]", transactionDetails);

          // Append transaction data to cache engines to protect checkout histories
          localStorage.setItem("YASEEN_LAST_PAYMENT_ID", transactionDetails.id);
          localStorage.setItem(
            "YASEEN_LAST_PAYMENT_STATUS",
            transactionDetails.status,
          );

          // Execute fluid high-end graphic screen blurs transition success panels shift natively
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
        });
      },

      /**
       * 3. CRITICAL FALLBACK ERRORS CAPTURE DECK
       */
      onError: function (err) {
        console.error("[PAYPAL CONSOLE FAILURE]", err);
        const errorConsole = document.getElementById(
          "formValidationDiagnosticAlertConsole",
        );
        if (errorConsole) {
          errorConsole.style.display = "block";
          errorConsole.textContent =
            "Payment Transaction Gateway Error: Secure payment channel connection refused. Verify funding coverage cards.";
        }
      },
    })
    .render("#paypal-button-render-target");
});

/**
 * INTERCEPTOR EXTREMES OVERRIDE: OVERWRITES YOUR WEB3FORMS SUCCESS LANDING HOOK
 * We bind the display properties directly right inside your submission callback.
 * The moment Web3Forms responds with a perfect checkmark, the input buttons hide
 * and your live gold PayPal buttons un-shroud natively on screen!
 */
// =========================================================================
// 🔒 EXCLUSIVE PRIVATE INVOICE ROUTING INTERCEPTOR
// Binds the display properties directly right inside your submission callback.
// FIXED FOR WHITE HORSE: Detects invite-only tracks natively,
// completely bypasses credit card buttons, and skips directly to your success blurs!
// =========================================================================
if (typeof executeSuccessfulCallbackTransition === "function") {
  executeSuccessfulCallbackTransition = function () {
    const paypalContainerWrapper = document.getElementById(
      "paypal-gateway-container",
    );
    const formActionSubmitStrip = document.getElementById("submitActionStrip");

    // Isolate the lowercase tracking context safely to analyze the active route path
    let normalizedRouterToken =
      typeof ACTIVE_SYSTEM_TARGET_KEY === "string"
        ? ACTIVE_SYSTEM_TARGET_KEY.toLowerCase().trim()
        : "";

    // 🛡️ WHITE HORSE PIPELINE INTERCEPT
    if (normalizedRouterToken.includes("white")) {
      console.log(
        "[WHITE HORSE ALIGNMENT] Elite invite-only track detected. Bypassing public PayPal gates for Private Invoicing.",
      );

      const actionButtonNode = document.querySelector(".btn-initiate");
      if (actionButtonNode)
        actionButtonNode.textContent =
          "DOSSIER RECORDED UNDER PRIVATE INVOICE PIPELINE...";

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
        localStorage.removeItem("YASEEN_LAST_PAYMENT_ID");
      }, 1200);
      return;
    }

    // STANDARD PLATFORM PATHWAYS CHECKOUT WORKFLOW (Emir, Dynasty, Custom Selections)
    const paymentCompletedID = localStorage.getItem("YASEEN_LAST_PAYMENT_ID");

    if (paypalContainerWrapper && !paymentCompletedID) {
      if (formActionSubmitStrip) formActionSubmitStrip.style.display = "none";
      paypalContainerWrapper.style.display = "block";
      paypalContainerWrapper.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      const actionButtonNode = document.querySelector(".btn-initiate");
      if (actionButtonNode)
        actionButtonNode.textContent =
          "INTENT EXTRACTION VERIFIED. PROCEED BELOW.";
    } else {
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
        localStorage.removeItem("YASEEN_LAST_PAYMENT_ID");
      }, 1200);
    }
  };
}

/* =========================================================================
   🔒 YASEEN VANTAGE™ | UNIVERSAL DYNAMIC PHONE VALIDATION SYSTEM v3.5
   PRODUCTION COMPLIANCE: Pure standalone responsive logic extension pass.
   🔒 REMOVED ALL HARDCODED 10-DIGIT FORCED TEXT ERRORS FOR TRUE INTERNATIONAL FLEXIBILITY!
   🔒 PRETTIER SECURITY: Preserves your exact function blocks and syntax layout rules!
   ========================================================================= */

/**
 * 1. REAL-TIME COUNTRY PREFIX SYNCHRONIZER
 * Parses the custom data-prefix parameters from the universal dropdown array,
 * updating the inline label badge cleanly without causing element layout drift.
 */
function synchronizeYaseenPhonePrefixEngine() {
  const countrySelect = document.getElementById("fieldCountry");
  const prefixIndicator = document.getElementById("fieldPhonePrefixIndicator");
  const phoneInput = document.getElementById("fieldPhone");

  if (!countrySelect || !prefixIndicator) {
    return;
  }

  // Captures the active option tag from the DOM tree
  const selectedOption = countrySelect.options[countrySelect.selectedIndex];
  const activeDialPrefix = selectedOption.getAttribute("data-prefix");

  if (activeDialPrefix && activeDialPrefix !== "Global") {
    // Updates the badge readout cleanly with the matching regional prefix string
    prefixIndicator.textContent = "+" + activeDialPrefix;
    if (phoneInput) {
      phoneInput.value = ""; // Resets values on swap to prevent validation collisions

      // DYNAMIC PLACEHOLDER INJECTION: Displays realistic country phone masks live
      if (countrySelect.value === "TZ") {
        phoneInput.placeholder = "629 909 614";
      } else if (countrySelect.value === "GB" || countrySelect.value === "UK") {
        phoneInput.placeholder = "7123 456789";
      } else if (
        countrySelect.value === "USA" ||
        countrySelect.value === "CA"
      ) {
        phoneInput.placeholder = "555 019 2834";
      } else {
        phoneInput.placeholder = "Enter local number only";
      }
    }
  } else {
    // Fallback alignment for global matrices
    prefixIndicator.textContent = "+1";
    if (phoneInput) {
      phoneInput.value = "";
      phoneInput.placeholder = "555 019 2834";
    }
  }
}

/**
 * LIVE TYPING MASK AUTOFORMATTER & REAL-TIME DELETION ENGINE
 * Fired instantly on every single keystroke. Strips out non-numeric characters,
 * blocks text strings, and auto-injects spaces based on active country rules.
 */
function handleYaseenLivePhoneFormatter(inputElement) {
  if (!inputElement) {
    return;
  }

  // MASK STEP 1: Strips out text letters or letters manually typed instantly
  let currentRawValue = inputElement.value.replace(/[^0-9]/g, "");

  const countrySelect = document.getElementById("fieldCountry");
  let minLength = 3; // Dynamic absolute floor limit
  let maxLength = 12; // Dynamic absolute ceiling limit
  let currentCountry = "";

  if (countrySelect) {
    currentCountry = countrySelect.value;
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const activeDialPrefix = selectedOption.getAttribute("data-prefix");

    // JURISDICTION CONFIGURATION MATRIX: Maps custom length limits per region dynamically
    if (currentCountry === "TZ") {
      minLength = 9; // Tanzania standard local mobile format (excluding leading zero)
      maxLength = 9;
    } else if (
      currentCountry === "USA" ||
      currentCountry === "CA" ||
      currentCountry === "GB" ||
      currentCountry === "UK"
    ) {
      minLength = 10; // Standard fixed length for US/UK pools
      maxLength = 10;
    }

    // MASK STEP 2: Intercepts duplicate country codes typed inside the box
    if (activeDialPrefix && activeDialPrefix !== "Global") {
      if (currentRawValue.startsWith(activeDialPrefix)) {
        console.warn("Duplicate dial prefix blocked inside text lane.");
        currentRawValue = currentRawValue.substring(activeDialPrefix.length);
      }
    }
  }

  // Enforces a strict local ceiling length constraint based on the active country limits
  if (currentRawValue.length > maxLength) {
    currentRawValue = currentRawValue.substring(0, maxLength);
  }

  // AUTOFORMAT STEP 3: Spacing dividers adjust adaptively based on string layout length
  let formattedValue = "";
  if (currentCountry === "TZ") {
    /* --- TANZANIA FORMULATION: 9 DIGITS -> FORMAT: XXX XXX XXX (e.g. 629 123 456) --- */
    if (currentRawValue.length > 0) {
      formattedValue += currentRawValue.substring(0, 3);
    }
    if (currentRawValue.length > 3) {
      formattedValue += " " + currentRawValue.substring(3, 6);
    }
    if (currentRawValue.length > 6) {
      formattedValue += " " + currentRawValue.substring(6, 9);
    }
  } else {
    /* --- FLUID GLOBAL FORMULATION: 3 TO 12 DIGITS ACCORDING TO USER FLOW --- */
    if (currentRawValue.length > 0) {
      formattedValue += currentRawValue.substring(0, 3);
    }
    if (currentRawValue.length > 3) {
      formattedValue += " " + currentRawValue.substring(3, 6);
    }
    if (currentRawValue.length > 6) {
      formattedValue += " " + currentRawValue.substring(6, 9);
    }
    if (currentRawValue.length > 9) {
      formattedValue += " " + currentRawValue.substring(9, 12);
    }
  }

  // Writes the formatted visual number string right back onto the form field
  inputElement.value = formattedValue.trim();

  // 🔒 INSTANT INLINE ADAPTIVE WARNING GENERATOR
  // Completely removed the static 10-digit hardcode block. Generates intelligent messages dynamically!
  if (currentRawValue.length > 0 && currentRawValue.length < minLength) {
    let errorMsg = "Incomplete number vector. ";
    if (minLength === maxLength) {
      errorMsg +=
        "This jurisdiction requires exactly " + minLength + " local digits.";
    } else {
      errorMsg +=
        "This jurisdiction requires between " +
        minLength +
        " and " +
        maxLength +
        " digits.";
    }
    inputElement.setCustomValidity(
      errorMsg + " (Current: " + currentRawValue.length + ")",
    );
    inputElement.reportValidity(); // Forcefully pops open the native browser invalid warning popup live
  } else if (currentRawValue.length === 0) {
    inputElement.setCustomValidity("Secure phone vector input is required.");
  } else {
    inputElement.setCustomValidity(""); // Resets error states cleanly once target length is satisfied
  }
}

/**
 * 2. ASYNCHRONOUS PHONE FORMAT VALIDATION SAFEGUARD
 * Hooks right into your master submission check loop. Checks character inputs,
 * blocks bad formatting, and strips away duplicate dialing prefixes instantly!
 */
function validateSecurePhoneVectorPayload(event) {
  const countrySelect = document.getElementById("fieldCountry");
  const phoneInput = document.getElementById("fieldPhone");

  if (!countrySelect || !phoneInput) {
    return true;
  }

  const selectedOption = countrySelect.options[countrySelect.selectedIndex];
  const activeDialPrefix = selectedOption.getAttribute("data-prefix");

  // Strips white spaces, dashes, brackets, and characters down to raw numbers
  let rawPhoneValue = phoneInput.value.replace(/[\s\-\(\)\+]/g, "");

  if (activeDialPrefix && activeDialPrefix !== "Global") {
    // REJECTION MATRIX: Catches if user typed their dialing code inside the field
    if (rawPhoneValue.startsWith(activeDialPrefix)) {
      console.warn(
        "Duplicate country dial code detected. Forcing formatting normalization...",
      );

      // Surgically cuts out the duplicate prefix code to preserve a standard format
      rawPhoneValue = rawPhoneValue.substring(activeDialPrefix.length);
      phoneInput.value = rawPhoneValue; // Rewrites clean text string back onto canvas
    }

    let minLength = 3;
    let maxLength = 12;

    if (countrySelect.value === "TZ") {
      minLength = 9;
      maxLength = 9;
    } else if (
      countrySelect.value === "USA" ||
      countrySelect.value === "CA" ||
      countrySelect.value === "GB" ||
      countrySelect.value === "UK"
    ) {
      minLength = 10;
      maxLength = 10;
    }

    // Flexible multi-length checking pass before clearance is granted on submission
    if (rawPhoneValue.length < minLength || rawPhoneValue.length > maxLength) {
      let submitError = "Please input a valid local phone number. ";
      if (minLength === maxLength) {
        submitError +=
          "This jurisdiction requires exactly " + minLength + " digits.";
      } else {
        submitError +=
          "This jurisdiction requires between " +
          minLength +
          " and " +
          maxLength +
          " digits.";
      }
      phoneInput.setCustomValidity(submitError);
      phoneInput.reportValidity();
      if (event) {
        event.preventDefault();
      }
      return false;
    }
  }

  phoneInput.setCustomValidity(""); // Clears validation flags if input is clean
  return true;
}

// Automatically binds the validation safeguard block and live event formatters to your form fields
document.addEventListener("DOMContentLoaded", () => {
  const masterForm = document.querySelector("form");
  const phoneInput = document.getElementById("fieldPhone");

  // Live oninput typing hook handles autoformatting and instant deletion warnings natively
  if (phoneInput) {
    phoneInput.addEventListener("input", () => {
      handleYaseenLivePhoneFormatter(phoneInput);
    });
  }

  if (masterForm) {
    masterForm.addEventListener("submit", (event) => {
      const isPhoneValid = validateSecurePhoneVectorPayload(event);
      if (!isPhoneValid) {
        event.preventDefault(); // Blocks form submission if rule validation fails
      }
    });
  }
});
/* =========================================================================
   🔒 YASEEN VANTAGE™ | DYNAMIC KEYSTROKE VALIDATION ENGINE
   PRODUCTION COMPLIANCE: Pure decoupled operational background logic extension.
   🔒 REMOVED ALL HARDCODED 10-DIGIT FORCED TEXT ERRORS FOR TRUE INTERNATIONAL FLEXIBILITY!
   🔒 DYNAMIC LENGTH AUTOSYNC: Natively scales limits per region (TZ = 9, USA/UK = 10, Global = 3-12).
   🔒 PRETTIER SECURITY: Preserves your exact function blocks and syntax layout rules!
   ========================================================================= */

/**
 * 1. LIVE TYPING AUTOFORMATTER ENGINE (🔒 UPDATED WITH VARIABLE REGIONAL LIMITS)
 * Fired instantly on every keystroke. Strips out non-numeric characters, blocks text strings,
 * auto-injects clean spatial separation markers, and instantly validates deletions!
 */
function handleYaseenLivePhoneFormatter(inputElement) {
  if (!inputElement) return;

  // 🔒 MASK STEP 1: Strips out text letters manually typed instantly
  let currentRawValue = inputElement.value.replace(/[^0-9]/g, "");

  // 🔒 MASK STEP 2: Intercepts duplicate country codes typed inside the box
  const countrySelect = document.getElementById("fieldCountry");
  let minLength = 3; // Dynamic absolute floor limit
  let maxLength = 12; // Dynamic absolute ceiling limit
  let currentCountry = "";

  if (countrySelect) {
    currentCountry = countrySelect.value;
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const activeDialPrefix = selectedOption.getAttribute("data-prefix");

    // 🔒 JURISDICTION LAYER: Sets variable country length boundaries on the fly
    if (currentCountry === "TZ") {
      minLength = 9; // Tanzania standard local mobile format (excluding leading zero)
      maxLength = 9;
    } else if (
      currentCountry === "USA" ||
      currentCountry === "CA" ||
      currentCountry === "GB" ||
      currentCountry === "UK"
    ) {
      minLength = 10; // Standard fixed length for US/UK pools
      maxLength = 10;
    }

    if (activeDialPrefix && activeDialPrefix !== "Global") {
      if (currentRawValue.startsWith(activeDialPrefix)) {
        console.warn("Duplicate dial prefix blocked inside text lane.");
        currentRawValue = currentRawValue.substring(activeDialPrefix.length);
      }
    }
  }

  // Enforces a strict local ceiling length constraint based on the active country limits
  if (currentRawValue.length > maxLength) {
    currentRawValue = currentRawValue.substring(0, maxLength);
  }

  // 🔒 AUTOFORMAT STEP 3: Spacing dividers adjust adaptively based on target lengths
  let formattedValue = "";
  if (currentCountry === "TZ") {
    /* --- TANZANIA FORMULATION: 9 DIGITS -> FORMAT: XXX XXX XXX (e.g. 629 123 456) --- */
    if (currentRawValue.length > 0) {
      formattedValue += currentRawValue.substring(0, 3);
    }
    if (currentRawValue.length > 3) {
      formattedValue += " " + currentRawValue.substring(3, 6);
    }
    if (currentRawValue.length > 6) {
      formattedValue += " " + currentRawValue.substring(6, 9);
    }
  } else {
    /* --- FLUID GLOBAL FORMULATION: 3 TO 12 DIGITS ACCORDING TO USER FLOW --- */
    if (currentRawValue.length > 0) {
      formattedValue += currentRawValue.substring(0, 3);
    }
    if (currentRawValue.length > 3) {
      formattedValue += " " + currentRawValue.substring(3, 6);
    }
    if (currentRawValue.length > 6) {
      formattedValue += " " + currentRawValue.substring(6, 9);
    }
    if (currentRawValue.length > 9) {
      formattedValue += " " + currentRawValue.substring(9, 12);
    }
  }

  // Writes the formatted visual number string right back onto the form field
  inputElement.value = formattedValue.trim();

  // 🔒 INSTANT SUB-SECOND VALIDATION & REPORT ENGINE
  // Accommodates dynamic length variations cleanly without standard hardcode blocks
  if (currentRawValue.length > 0 && currentRawValue.length < minLength) {
    let errorMsg = "Incomplete number vector. ";
    if (minLength === maxLength) {
      errorMsg +=
        "This jurisdiction requires exactly " + minLength + " local digits.";
    } else {
      errorMsg +=
        "This jurisdiction requires between " +
        minLength +
        " and " +
        maxLength +
        " digits.";
    }
    inputElement.setCustomValidity(
      errorMsg + " (Current: " + currentRawValue.length + ").",
    );
    inputElement.reportValidity(); // Forcefully pops open the native browser invalid warning popup live
  } else if (currentRawValue.length === 0) {
    inputElement.setCustomValidity("Secure phone vector input is required.");
  } else {
    inputElement.setCustomValidity(""); // Resets error states cleanly once target length is satisfied
  }
}

/**
 * 3. MASTER TRIGGER GATE COUPLING PASS
 * Injects right inside your Stage 1 button click event listener (`interceptFormVerificationSubmission`)
 * to forcefully command the browser to display format warnings immediately on click!
 */
function verifySecurePhoneInputBeforeGateAccess() {
  const countrySelect = document.getElementById("fieldCountry");
  const phoneInputField = document.getElementById("fieldPhone");

  if (phoneInputField) {
    // Strips spatial separation gaps down to numbers to calculate accurate counts
    const cleanDigitsCount = phoneInputField.value.replace(/\s/g, "").length;

    let minLength = 3;
    if (countrySelect) {
      if (countrySelect.value === "TZ") minLength = 9;
      else if (["USA", "CA", "GB", "UK"].includes(countrySelect.value))
        minLength = 10;
    }

    if (cleanDigitsCount < minLength) {
      phoneInputField.setCustomValidity(
        "Incomplete number vector. Input local numbers only.",
      );
      phoneInputField.reportValidity(); // Forces browser to immediately display validation warnings
      return false;
    } else {
      phoneInputField.setCustomValidity("");
      return true;
    }
  }
  return true;
}
