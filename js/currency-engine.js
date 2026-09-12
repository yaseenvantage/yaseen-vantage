/* =========================================================================
   YASEEN VANTAGE™ | MASTER REALTIME CROSS-PAGE CURRENCY ENGINE v10.5
   PART 1 - GLOBAL LEDGER MAPPINGS & ANIMATION FRAME INITIALIZATION CORES
   ========================================================================= */

(function () {
  // Strict 5-Core Global Exchange Ledger Configuration Mapping Profiles
  const CURRENCY_CONVERSION_LEDGER = {
    USD: { symbol: "$", rate: 1.0, precision: 2, position: "before" },
    EUR: { symbol: "€", rate: 0.92, precision: 2, position: "before" },
    GBP: { symbol: "£", rate: 0.79, precision: 2, position: "before" },
    AED: { symbol: "د.إ ", rate: 3.67, precision: 0, position: "before" },
    TZS: { symbol: "TZS ", rate: 2650.0, precision: 0, position: "before" },
  };

  let ACTIVE_SYSTEM_CURRENCY_TOKEN =
    localStorage.getItem("YASEEN_CURRENCY_CACHE") || "USD";
  let MASTER_BASE_PRICES_REGISTRY = [];

  // =========================================================================
  // ⚡ PRIORITY STEP 1: INITIALIZE SYNCHRONOUS RUNTIME MEMORY LOCK AT BOOT
  // =========================================================================
  function runImmediatePriorityCurrencyInitialization() {
    const cachedCurrencyPreference =
      localStorage.getItem("YASEEN_CURRENCY_CACHE") || "USD";
    if (CURRENCY_CONVERSION_LEDGER[cachedCurrencyPreference]) {
      ACTIVE_SYSTEM_CURRENCY_TOKEN = cachedCurrencyPreference;
    }
  }
  runImmediatePriorityCurrencyInitialization();

  // ANIMATION FRAME SYNC HOOK: Replaces buggy timed delays with native browser render loops
  document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial price text data harvesting sweep across page DOM elements
    harvestAllSystemBasePrices();

    const optionItemsNodeList = document.querySelectorAll(
      "#currencySelector .select-options-panel li",
    );
    const displayLabelSpan = document.getElementById("selectedCurrency");

    // =========================================================================
    // ⚡ PRIORITY STEP 2: FRAME-LOCKED INTERACTION TIMING RESET
    // Waits for the browser paint cycle to finish layout setup before force-injecting preference
    // =========================================================================
    requestAnimationFrame(() => {
      const activeCacheKey =
        localStorage.getItem("YASEEN_CURRENCY_CACHE") || "USD";

      if (displayLabelSpan) {
        displayLabelSpan.textContent =
          activeCacheKey === "TZS"
            ? "TZS"
            : `${activeCacheKey} ${CURRENCY_CONVERSION_LEDGER[activeCacheKey].symbol.trim()}`;
      }

      // Forces instant numbers translation on the current page layout fields
      executeGlobalCurrencyTranslation();
    });

    // =========================================================================
    // ⚡ PATH DROPDOWN LISTENER HOOK
    // =========================================================================
    const pathDropdownSelector = document.getElementById(
      "fieldMotherSelection",
    );
    if (pathDropdownSelector) {
      pathDropdownSelector.addEventListener("change", () => {
        queueMicrotask(() => {
          executeGlobalCurrencyTranslation();
        });
      });
    }

    // Bind clean click event list handlers straight to your custom selection options panels
    optionItemsNodeList.forEach((item) => {
      item.addEventListener("click", () => {
        const selectedValueToken =
          item.getAttribute("data-value") ||
          item.textContent.trim().substring(0, 3);
        const uppercaseToken = selectedValueToken.toUpperCase().trim();

        if (CURRENCY_CONVERSION_LEDGER[uppercaseToken]) {
          ACTIVE_SYSTEM_CURRENCY_TOKEN = uppercaseToken;
          localStorage.setItem("YASEEN_CURRENCY_CACHE", uppercaseToken);

          if (displayLabelSpan) {
            displayLabelSpan.textContent =
              uppercaseToken === "TZS"
                ? "TZS"
                : `${uppercaseToken} ${CURRENCY_CONVERSION_LEDGER[uppercaseToken].symbol.trim()}`;
          }

          executeGlobalCurrencyTranslation();
        }
      });
    });
  });

  /**
   * Scans document text nodes AND select input elements to isolate currency layout markers
   */
  function harvestAllSystemBasePrices() {
    MASTER_BASE_PRICES_REGISTRY = [];

    const textNodesWalker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false,
    );

    let currentTextNode;
    const priceDetectionRegex = /(?:\$|€|£|TZS|د\.إ)\s*([\d,]+(?:\.\d{2})?)/g;

    while (textNodesWalker.nextNode()) {
      currentTextNode = textNodesWalker.currentNode;
      const parentTagName = currentTextNode.parentNode.tagName.toUpperCase();
      if (
        parentTagName === "SCRIPT" ||
        parentTagName === "STYLE" ||
        parentTagName === "TEXTAREA" ||
        parentTagName === "SELECT" ||
        parentTagName === "OPTION"
      )
        continue;

      if (priceDetectionRegex.test(currentTextNode.nodeValue)) {
        priceDetectionRegex.lastIndex = 0;
        MASTER_BASE_PRICES_REGISTRY.push({
          elementNodeRef: currentTextNode,
          type: "text",
          originalValueTemplate: currentTextNode.nodeValue,
        });
      }
    }

    const formOptionElements = document.querySelectorAll("select option");
    formOptionElements.forEach((option) => {
      const optionTextContent = option.textContent;
      const shorthandBudgetRegex = /(?:\$|€|£|TZS|د\.إ)\s*([0-9.]+)\s*(K|M)/gi;
      const standardOptionPriceRegex =
        /(?:\$|€|£|TZS|د\.إ)\s*([\d,]+(?:\.\d{2})?)/g;

      if (shorthandBudgetRegex.test(optionTextContent)) {
        shorthandBudgetRegex.lastIndex = 0;
        MASTER_BASE_PRICES_REGISTRY.push({
          elementNodeRef: option,
          type: "shorthand-option",
          originalValueTemplate: optionTextContent,
        });
      } else if (standardOptionPriceRegex.test(optionTextContent)) {
        standardOptionPriceRegex.lastIndex = 0;
        MASTER_BASE_PRICES_REGISTRY.push({
          elementNodeRef: option,
          type: "standard-option",
          originalValueTemplate: optionTextContent,
        });
      }
    });
  }
  /* =========================================================================
   YASEEN VANTAGE™ | MASTER REALTIME CROSS-PAGE CURRENCY ENGINE v10.5
   PART 2 - DYNAMIC STRING TRANSLATION LOOPS & INTAKE TEXT FORKING FOR CARDS
   ========================================================================= */

  /**
   * Translates and transforms all currency elements instantly based on the active token
   */
  function executeGlobalCurrencyTranslation() {
    const activeConfig =
      CURRENCY_CONVERSION_LEDGER[ACTIVE_SYSTEM_CURRENCY_TOKEN];

    MASTER_BASE_PRICES_REGISTRY.forEach((record) => {
      let baselineText = record.originalValueTemplate;

      if (record.type === "text") {
        const standardRegex = /(?:\$|€|£|TZS|د\.إ)\s*([\d,]+(?:\.\d{2})?)/g;
        const convertedTextResult = baselineText.replace(
          standardRegex,
          (match, numericalStringValue) => {
            const cleanedFloatValue = parseFloat(
              numericalStringValue.replace(/,/g, ""),
            );
            if (isNaN(cleanedFloatValue)) return match;

            const convertedFinalSum = cleanedFloatValue * activeConfig.rate;
            const formattedNumberString =
              activeConfig.precision === 0
                ? Math.round(convertedFinalSum).toLocaleString()
                : convertedFinalSum.toLocaleString(undefined, {
                    minimumFractionDigits: activeConfig.precision,
                    maximumFractionDigits: activeConfig.precision,
                  });

            return `${activeConfig.symbol.trim()}${formattedNumberString}`;
          },
        );
        record.elementNodeRef.nodeValue = convertedTextResult;
      } else if (record.type === "standard-option") {
        const standardOptionRegex =
          /(?:\$|€|£|TZS|د\.إ)\s*([\d,]+(?:\.\d{2})?)/g;
        const convertedOptionResult = baselineText.replace(
          standardOptionRegex,
          (match, numericalStringValue) => {
            const cleanedFloatValue = parseFloat(
              numericalStringValue.replace(/,/g, ""),
            );
            if (isNaN(cleanedFloatValue)) return match;

            const convertedFinalSum = cleanedFloatValue * activeConfig.rate;
            const formattedNumberString =
              activeConfig.precision === 0
                ? Math.round(convertedFinalSum).toLocaleString()
                : convertedFinalSum.toLocaleString(undefined, {
                    minimumFractionDigits: activeConfig.precision,
                    maximumFractionDigits: activeConfig.precision,
                  });

            return `${activeConfig.symbol.trim()}${formattedNumberString}`;
          },
        );
        record.elementNodeRef.textContent = convertedOptionResult;
      } else if (record.type === "shorthand-option") {
        const shorthandRegex = /(?:\$|€|£|TZS|د\.إ)\s*([0-9.]+)\s*(K|M)/gi;
        const convertedOptionResult = baselineText.replace(
          shorthandRegex,
          (match, numericalStringValue, multiplierToken) => {
            let literalNumericSumValue = parseFloat(numericalStringValue);
            if (isNaN(literalNumericSumValue)) return match;

            if (multiplierToken && multiplierToken.toUpperCase() === "K")
              literalNumericSumValue *= 1000;
            if (multiplierToken && multiplierToken.toUpperCase() === "M")
              literalNumericSumValue *= 1000000;

            const finalExchangedValue =
              literalNumericSumValue * activeConfig.rate;
            let outputShorthandString = "";

            if (finalExchangedValue >= 1000000) {
              outputShorthandString =
                (finalExchangedValue / 1000000).toFixed(1).replace(/\.0$/, "") +
                "M";
            } else if (finalExchangedValue >= 1000) {
              outputShorthandString =
                (finalExchangedValue / 1000).toFixed(1).replace(/\.0$/, "") +
                "K";
            } else {
              outputShorthandString =
                Math.round(finalExchangedValue).toString();
            }

            return `${activeConfig.symbol.trim()}${outputShorthandString}`;
          },
        );
        record.elementNodeRef.textContent = convertedOptionResult;
      }
    });

    synchronizeIntakeBillingDisplaySlabs(activeConfig);
  }

  /**
   * DEEP JAVASCRIPT HOOK: Overrides intake billing panel boards to force synchronized math
   * FIXED DIRECT URL LANDING OVERRIDE: Expanded checks detect system=custom routes natively,
   * completely removing the 60% compression mismatch across all custom requests loops!
   */
  function synchronizeIntakeBillingDisplaySlabs(config) {
    const invoiceLabelNode = document.getElementById("billingDisplayPrice");
    const subtextLabelNode = document.getElementById("billingSummaryTerms");
    const fallbackInvoiceLabel = document.getElementById(
      "dynamicInvoiceTotalValueAmount",
    );

    const targetOutputNode = invoiceLabelNode || fallbackInvoiceLabel;
    if (targetOutputNode) {
      if (
        typeof RUNTIME_INVOICE_TOTAL_AMOUNT === "undefined" ||
        RUNTIME_INVOICE_TOTAL_AMOUNT === 0
      ) {
        const zeroFormattedString = config.precision === 0 ? "0" : "0.00";
        targetOutputNode.textContent = `${config.symbol.trim()}${zeroFormattedString}`;
        return;
      }

      const urlCheckParams = new URLSearchParams(window.location.search);
      const itemParamValue = urlCheckParams.get("item");
      const systemParamValue = urlCheckParams.get("system");

      const isSelectiveUpgradeTrack = !!itemParamValue;

      // 🔒 HARMONIZED CUSTOM LANDING PATHWAY DETECTOR
      const isDirectCustomLandingLink =
        systemParamValue === "custom" ||
        (typeof ACTIVE_SYSTEM_TARGET_KEY === "string" &&
          ACTIVE_SYSTEM_TARGET_KEY.toLowerCase().includes("custom"));

      // Expanded condition fork cleanly catches direct landing links, dropdowns, and slider selections simultaneously
      let activeDisplaySum =
        isDirectCustomLandingLink ||
        (ACTIVE_SYSTEM_TARGET_KEY === "custom" && isSelectiveUpgradeTrack) ||
        ACTIVE_SYSTEM_TARGET_KEY === "invoice-clearance"
          ? RUNTIME_INVOICE_TOTAL_AMOUNT
          : RUNTIME_INVOICE_TOTAL_AMOUNT * 0.6;

      const baseConvertedValue = activeDisplaySum * config.rate;
      const formattedNumberString =
        config.precision === 0
          ? Math.round(baseConvertedValue).toLocaleString()
          : baseConvertedValue.toLocaleString(undefined, {
              minimumFractionDigits: config.precision,
              maximumFractionDigits: config.precision,
            });

      targetOutputNode.textContent = `${config.symbol.trim()}${formattedNumberString}`;
    }

    if (
      subtextLabelNode &&
      typeof RUNTIME_INVOICE_TOTAL_AMOUNT !== "undefined" &&
      RUNTIME_INVOICE_TOTAL_AMOUNT > 0
    ) {
      const urlCheckParams = new URLSearchParams(window.location.search);
      const itemParamValue = urlCheckParams.get("item");
      const systemParamValue = urlCheckParams.get("system");

      const isSelectiveUpgradeTrack = !!itemParamValue;
      const isDirectCustomLandingLink =
        systemParamValue === "custom" ||
        (typeof ACTIVE_SYSTEM_TARGET_KEY === "string" &&
          ACTIVE_SYSTEM_TARGET_KEY.toLowerCase().includes("custom"));

      const fullPackageConvertedValue =
        RUNTIME_INVOICE_TOTAL_AMOUNT * config.rate;
      const formattedPackageString =
        config.precision === 0
          ? Math.round(fullPackageConvertedValue).toLocaleString()
          : fullPackageConvertedValue.toLocaleString(undefined, {
              minimumFractionDigits: config.precision,
              maximumFractionDigits: config.precision,
            });

      // Synchronize text notification strings layout descriptions to show 100% upfront targets
      if (
        isDirectCustomLandingLink ||
        (ACTIVE_SYSTEM_TARGET_KEY === "custom" && isSelectiveUpgradeTrack)
      ) {
        if (ACTIVE_SYSTEM_CURRENCY_TOKEN === "TZS") {
          subtextLabelNode.textContent = `Malipo ya Kwanza ya 100% ya Upataji wa Nyongeza ya Kibinafsi (Thamani ya Jumla: TZS ${formattedPackageString})`;
        } else {
          subtextLabelNode.textContent = `100% Upfront Individual Enhancement Access Invoice Balance (Total Value: ${config.symbol.trim()}${formattedPackageString})`;
        }
      } else if (
        !isDirectCustomLandingLink &&
        ACTIVE_SYSTEM_TARGET_KEY !== "invoice-clearance"
      ) {
        if (ACTIVE_SYSTEM_CURRENCY_TOKEN === "TZS") {
          subtextLabelNode.textContent = `Retainer ya 60% ya Malipo ya Kwanza (Thamani Kamili ya Kifurushi: TZS ${formattedPackageString})`;
        } else {
          subtextLabelNode.textContent = `60% Upfront Retainer Deposit (Full Package Value: ${config.symbol.trim()}${formattedPackageString})`;
        }
      }
    }
  }

  // Expose routing hook globally to capture incoming javascript calculations updates dynamically
  window.refreshGlobalCurrencyTranslationEngine =
    executeGlobalCurrencyTranslation;
})();
