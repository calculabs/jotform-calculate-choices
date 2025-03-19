// Custom logging function that uses JotForm's messaging
export function log(message, ...args) {
    // Default to 'log' if no type specified
    const type = typeof args[0] === 'string' && ['log', 'error', 'warn', 'info'].includes(args[0]) 
        ? args.shift() 
        : 'log';
    
    console[type](message, ...args);
    if (window.JFCustomWidget && JFCustomWidget.sendData) {
        try {
            JFCustomWidget.sendData({
                valid: true,
                value: JSON.stringify({
                    type: 'log',
                    logType: type,
                    message: [message, ...args].map(arg => 
                        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
                    ).join(' ')
                })
            });
        } catch (e) {
            console.error('Failed to send log via JotForm:', e);
        }
    }
} 