# Common Mistakes to Avoid in JotForm Widget Development

1. **Don't rely solely on formData events for field values**
   - We initially tried to use only the formData event subscription
   - This doesn't provide reliable real-time updates for field changes
   - Instead, use `JFCustomWidget.listenFromField(fieldId, 'change', callback)` to track specific fields

2. **Don't use `getWidgetSettings()` (plural)**
   - We tried using `JFCustomWidget.getWidgetSettings()` multiple times
   - The correct method is `JFCustomWidget.getWidgetSetting('parameterName')` (singular)
   - JotForm's API specifically uses the singular version for getting individual settings

3. **Don't parse settings without proper decoding**
   - Settings in `data.settings` are URL-encoded JSON strings
   - Always use `decodeURIComponent()` before parsing the JSON
   - Example: `JSON.parse(decodeURIComponent(data.settings))`
   - Both `data.settings` and `getWidgetSetting()` are valid approaches when used correctly

4. **Don't use `getFormData()`**
   - We tried using `JFCustomWidget.getFormData()` multiple times
   - This method doesn't exist in the JotForm Widget API
   - Instead, rely on the `formData` event subscription using `JFCustomWidget.subscribe("formData", callback)`

5. **Don't send logs directly through console.log in iframe**
   - We initially used `console.log` which isn't visible when the widget is embedded
   - Logs in iframes are isolated and not visible in the main window's console
   - Either use JotForm's messaging system or ensure logs are sent to the parent window

6. **Don't assume field IDs will be in a consistent format**
   - Field IDs can appear in multiple formats: raw QID, 'input_QID', or 'qQID_quantity'
   - Always try multiple ID formats when listening to or storing field values
   - Use an array of possible ID formats and attempt each one

7. **Don't rely on a single method for getting widget settings**
   - Both `data.settings` (in ready event) and `getWidgetSetting()` are valid approaches
   - `data.settings` contains all settings at once as a URL-encoded JSON array
   - `getWidgetSetting()` provides individual settings in already-parsed format
   - Consider implementing both for robustness

8. **Don't forget to handle undefined or null settings**
   - Widget settings might be undefined when the widget first loads
   - Always check for null/undefined values before parsing settings
   - Provide clear error messages when required settings are missing

9. **Don't rely on a single method for field detection**
   - Form fields can be detected through multiple methods
   - Use both `getFieldsValueByName` and formData events
   - Set up individual field listeners with `listenFromField`
   - Log all detected fields and their values for debugging

10. **Don't rely on dynamic field discovery**
    - Use specific question IDs when possible (e.g., 'cid_7', 'cid_9')
    - Prefer `getFieldsValueById` over dynamic field discovery
    - Set up direct listeners using `listenFromField` with known IDs
    - Always try both raw ID and 'input_' prefixed versions

11. **Don't assume simple field IDs for radio inputs**
    - Radio inputs have complex ID structures (e.g., `input_7_0`, `input_7_1`)
    - Questions have separate names (e.g., `q7_typeA`)
    - Need to listen to both question name and individual radio inputs
    - Radio change events return boolean values, not the selected option value

12. **Don't ignore the data-calcvalue attribute**
    - Radio inputs store their actual value in `data-calcvalue`
    - The `value` attribute contains the display text
    - When a radio is selected, you get `true` as the value
    - Need to correlate the selection with the `data-calcvalue`

These mistakes often stemmed from:
- Assuming standard JavaScript methods would work in JotForm's widget environment
- Not fully understanding JotForm's widget API structure
- Not properly handling URL-encoded JSON settings
- Not using JotForm's direct field listening capabilities
- Not implementing proper error handling for widget settings
- Not accounting for JotForm's various field ID formats

Best Practices:
1. Use both settings methods where appropriate:
   - `data.settings` for accessing all settings at once
   - `getWidgetSetting()` for individual settings
2. Always decode URL-encoded settings before parsing
3. Try multiple field ID formats when interacting with form fields
4. Provide clear feedback when settings are missing or invalid
5. Use JotForm's built-in messaging system for logging
6. Test widget behavior with different parameter configurations
7. Implement proper error handling for all settings access methods
8. Use multiple approaches for field detection:
   - Subscribe to formData events for overall form changes
   - Use getFieldsValueByName for initial field discovery
   - Set up individual field listeners for real-time updates
   - Log all field detection attempts and successes/failures
9. Implement comprehensive logging:
   - Log all field detection attempts
   - Log when listeners are successfully set up
   - Log all field value changes
   - Log the results of value matching attempts
8. Use direct field access methods:
   - Use `getFieldsValueById` with specific question IDs
   - Set up direct change listeners with known IDs
   - Try both raw and 'input_' prefixed versions of IDs
   - Get initial values explicitly before setting up listeners
9. Handle field values consistently:
   - Store values using the raw question ID as key
   - Update counts immediately when values change
   - Process all fields before updating final count
   - Log all value changes and processing steps
10. Handle radio inputs properly:
   - Listen to both question name and individual radio inputs
   - Use `data-calcvalue` for actual option values
   - Handle boolean change events correctly
   - Track both question ID and name
11. Structure question data clearly:
   - Define question IDs, names, and options explicitly
   - Use consistent naming conventions
   - Handle initial values and changes separately
   - Log all radio selection events
