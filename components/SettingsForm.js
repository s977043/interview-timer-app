import React, { useState } from 'react';

const SettingsForm = ({ onSave }) => {
    const [timerSettings, setTimerSettings] = useState({ total: 0, section: 0 });

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(timerSettings);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Total Time (minutes):
                <input
                    type="number"
                    value={timerSettings.total}
                    onChange={(e) => setTimerSettings({ ...timerSettings, total: e.target.value })}
                />
            </label>
            <label>
                Section Time (minutes):
                <input
                    type="number"
                    value={timerSettings.section}
                    onChange={(e) => setTimerSettings({ ...timerSettings, section: e.target.value })}
                />
            </label>
            <button type="submit">Save Settings</button>
        </form>
    );
};

export default SettingsForm;
