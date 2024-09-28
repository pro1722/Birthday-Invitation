let rsvpCount = 0;

        function collectRSVP() {
            const response = confirm("Will you attend the party? Click 'OK' for Yes or 'Cancel' for No.");
            if (response) {
                rsvpCount++;
                alert("Thank you for your RSVP! We can't wait to see you!");
               
            } else {
                alert("Thank you for your response! We hope to see you next time.");
            }

            
        }