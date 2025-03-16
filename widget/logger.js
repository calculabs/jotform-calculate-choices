// Custom logging function that uses JotForm's messaging
export function log(type, ...args) {
    console[type](...args);
    if (window.JFCustomWidget && JFCustomWidget.sendData) {
        try {
            JFCustomWidget.sendData({
                valid: true,
                value: JSON.stringify({
                    type: 'log',
                    logType: type,
                    message: args.map(arg => 
                        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
                    ).join(' ')
                })
            });
        } catch (e) {
            console.error('Failed to send log via JotForm:', e);
        }
    }
} 