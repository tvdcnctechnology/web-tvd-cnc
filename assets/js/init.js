
    function init(){
      setInterval(() => {
        $('svg').each(function () {
          if (this.namespaceURI === "http://www.w3.org/2000/svg") {
            $(this).closest('div').hide();
          }
        });
      }, 2000);
      // Show fullscreen popup when image is clicked
      $(document).on('click', '.table-popup-image', function () {
        const src = $(this).attr('src');
        $('#imagePopup img').attr('src', src);
        $('#imagePopup').fadeIn();
      });
      // Close popup when clicked
      $('#imagePopup').on('click', function () {
        $(this).fadeOut();
      });
    }

    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: '',
        autoDisplay: false,
        includedLanguages: 'th,en,vi,ja',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
      }, 'google_translate_element');

      function abbreviateLanguages() {
        const select = document.querySelector('#google_translate_element select');
        if (!select) return;
        for (let option of select.options) {

          switch (option.text.toLowerCase()) {
            case 'english':
              option.text = 'EN';
              break;
            case 'thai':
              option.text = 'TH';
              break;
            case 'vietnamese':
              option.text = 'VN';
              break;
            case 'japanese':
              option.text = 'JP';
              break;
            case 'select language':
              option.text = '🌐︎';
              select.selectedIndex = 0;
              break;
          }
        }
      }



      function preventThaiTranslation() {
        const select = document.querySelector('#google_translate_element select');
        if (!select) return;
        select.addEventListener('change', (event) => {
          const lang = select.value;
          if (lang === 'th') {
            $("#\\:1\\.container")[0]?.contentDocument?.querySelector("#\\:1\\.close")?.click();
          }
        });
      }

      // Initial abbreviation
      setTimeout(abbreviateLanguages, 500);
      // Watch for changes so selected value stays abbreviated
      const select = document.querySelector('#google_translate_element select');
      if (select) {
        const observer = new MutationObserver(abbreviateLanguages);
        observer.observe(select, {
          childList: true,
          subtree: true
        });

        preventThaiTranslation();
      }
    }
