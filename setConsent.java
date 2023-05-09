// Set consent types.
Map<ConsentType, ConsentStatus> consentMap = new EnumMap<>(ConsentType.class);
consentMap.put(ConsentType.ANALYTICS_STORAGE, ConsentStatus.GRANTED);
consentMap.put(ConsentType.AD_STORAGE, ConsentStatus.GRANTED);

mFirebaseAnalytics.setConsent(consentMap);
