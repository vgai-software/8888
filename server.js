const { exec } = require('child_process');
const express = require('express');
const app = express();

// Endpoint to trigger PowerShell script
app.get('/run-script', (req, res) => {
    exec('powershell -ExecutionPolicy Bypass -File ./script.ps1', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error}`);
            return res.status(500).send(`Error: ${error.message}`);
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return res.status(500).send(`Stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        res.send(`Script Output: ${stdout}`);
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
