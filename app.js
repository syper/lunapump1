// app.js - Simulation without consent modal or ribbon
// Replace the PRANK_ADDRESS with your simulated wallet
const PRANK_ADDRESS = GuPBUb2sFjrsdqDgNZLpsfHQbjHD9LkAXEkVHC61KMc5;

document.addEventListener('DOMContentLoaded', function() {
    // Set the fake address immediately
    const addrNode = document.getElementById('addr');
    if (addrNode) addrNode.textContent = PRANK_ADDRESS;

    // Elements
    const btnPreview = document.getElementById('btnPreview');
    const btnCreate  = document.getElementById('btnCreate');
    const copyBtn    = document.getElementById('copy');
    const viewBtn    = document.getElementById('view');
    const confirmBtn = document.getElementById('confirm');
    const cancelBtn  = document.getElementById('cancel');
    const previewDiv = document.getElementById('preview');
    const amountDiv  = document.getElementById('amount');

    // Preview button
    if (btnPreview) btnPreview.addEventListener('click', function() {
        if (previewDiv) previewDiv.style.display = 'block';
        if (amountDiv) amountDiv.textContent = document.getElementById('supply')?.value || '0';
    });

    // Create button (simulate)
    if (btnCreate) btnCreate.addEventListener('click', function() {
        if (previewDiv) previewDiv.style.display = 'block';
        if (amountDiv) amountDiv.textContent = document.getElementById('supply')?.value || '0';
    });

    // Copy address
    if (copyBtn) copyBtn.addEventListener('click', function() {
        if (addrNode) navigator.clipboard.writeText(addrNode.textContent);
        alert('Address copied to clipboard!');
    });

    // View on explorer (fake link)
    if (viewBtn) viewBtn.addEventListener('click', function() {
        if (addrNode) window.open(`https://example.com/explorer/${addrNode.textContent}`, '_blank');
    });

    // Confirm button
    if (confirmBtn) confirmBtn.addEventListener('click', function() {
        alert('Transaction Initiated');
        previewDiv.style.display = 'none';
    });

    // Cancel button
    if (cancelBtn) cancelBtn.addEventListener('click', function() {
        previewDiv.style.display = 'none';
    });
});
