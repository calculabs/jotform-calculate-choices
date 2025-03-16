# Common Mistakes to Avoid in JotForm Widget Development

1. **Don't rely solely on formData events for field values**
   - We initially tried to use only the formData event subscription
   - This doesn't provide reliable real-time updates for field changes
   - Instead, use `JFCustomWidget.listenFromField(fieldId, 'change', callback)` to track specific fields

2. **Don't use `getWidgetSettings()` (plural)**
   - We tried using `JFCustomWidget.getWidgetSettings()` multiple times
   - The correct method is `JFCustomWidget.getWidgetSetting('parameterName')` (singular)
   - JotForm's API specifically uses the singular version for getting individual settings

3. **Don't try to parse settings from data.settings directly**
   - We attempted to parse the URL-encoded settings string from `data.settings`
   - This was unnecessary and caused issues with parameter retrieval
   - Instead, use `JFCustomWidget.getWidgetSetting('parameterName')` which handles the parsing for you

4. **Don't use `getFormData()`**
   - We tried using `JFCustomWidget.getFormData()` multiple times
   - This method doesn't exist in the JotForm Widget API
   - Instead, rely on the `formData` event subscription using `JFCustomWidget.subscribe("formData", callback)`

5. **Don't send logs directly through console.log in iframe**
   - We initially used `console.log` which isn't visible when the widget is embedded
   - Logs in iframes are isolated and not visible in the main window's console
   - Either use JotForm's messaging system or ensure logs are sent to the parent window

These mistakes often stemmed from:
- Assuming standard JavaScript methods would work in JotForm's widget environment
- Not fully understanding JotForm's widget API structure
- Trying to implement complex solutions when simpler API methods existed
- Not using JotForm's direct field listening capabilities
