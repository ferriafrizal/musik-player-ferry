$(document).ready(function () {
    var audio = $('#audioPlayer')[0]; // Ambil elemen audio sekali, jika ada

    $('.spinner-wrap').click(function() {
        var $this = $(this);
        var $play = $('.play-sprite');

        // Cek jika audio sudah tersedia
        if (!audio) {
            console.error("Audio player not found!");
            return;
        }

        // Fungsi untuk mengontrol pemutaran audio
        if (audio.paused) {
            audio.play().then(() => {
                $play.addClass('playing');
            }).catch((error) => {
                console.error("Error playing audio:", error);
            });
        } else {
            audio.pause();
            audio.currentTime = 0; // Reset audio ke awal
            $play.removeClass('playing');
        }
    });

    // Pastikan untuk memanggil changeSong saat lagu dipilih
    $('#playlist').change(function() {
        var selectedSong = $(this).val();
        audio.src = selectedSong; // Set audio source
        audio.load(); // Muat audio
        audio.play().catch((error) => {
            console.error("Error playing audio:", error);
        });
    });
});