document.querySelectorAll('.update-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const currentQuantity = parseInt(e.target.getAttribute('data-quantity'));
        const decrement = parseInt(e.target.getAttribute('data-decrement'));

        let newQuantity = currentQuantity - decrement; // Decrease the quantity

        // Ensure quantity doesn't go below zero
        if (newQuantity < 0) {
            newQuantity = 0;
        }

        // Send the update request to the server
        fetch('/update-quantity', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, newQuantity })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.reload(); // Reload the page to reflect the updated quantity
            }
        })
        .catch(err => console.error('Error updating quantity:', err));
    });
});
