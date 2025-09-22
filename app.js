function listen() {
      let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = "en-US";   // for hindi 
      recognition.onresult = function(e) {
        document.getElementById("text").value = e.results[0][0].transcript;
      }
      recognition.start();
    }