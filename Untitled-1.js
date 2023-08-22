<!DOCTYPE html>
<html lang="es">
    <!DOCTYPE html>
<body>
    <script defer type="text/javascript">
        var eventId = 9616;
        var formObj = {
          first_name: true,
          paternal_last_name: true,
          maternal_last_name: true,
          idn: true,
          gender: true,
          phone_mobile: true,
          email: true,
          campus_id: false,
          career_id: true,
          event_shift_id: false,
          grade_year: true,
          city_id: true,
        };
        window.configFields = {
          digitalChannel: 7,
          // labelCampusLabelInShift: 'carrera',
          showOnlyGradesRelatedTo: ['3ro', '4to', '5to', 'Ya terminé el colegio'],
        }
    
        addEventListener('scroll', (event) => {
          const form = document.querySelector('#form-admission');
          const buttonPosition = document.querySelector('#buttonEventos').getBoundingClientRect();
          const footerPosition = document.querySelector('#footer').getBoundingClientRect();
          if (document.documentElement.scrollTop > 50 && buttonPosition.bottom > window.innerHeight) {
            form.classList.add('moveToTop');
          } else if (document.documentElement.scrollTop < 50) {
            form.classList.remove('moveToTop');
          }
          if(buttonPosition.bottom > footerPosition.top) {
            form.classList.add('moveFromBottom');
          } else if (footerPosition.top > window.innerHeight) {
            form.classList.remove('moveFromBottom');
          }
        });
    
        // cambia texto del form
        // addEventListener('load', (event) => {
        //   document.querySelectorAll("#sectionDescription").innerHTML = `Regístrate aquí para más información`;
        //   document.querySelectorAll("#sectionDescription").classList.add('pb-2', 'pb-md-1', 'size-22-form')
        // }, true);
    
        // addEventListener('load', () => {
        //   if (document.querySelectorAll("#sectionDescription") !== null) {
        //     document.querySelectorAll("#sectionDescription").innerHTML = "Regístrate aquí para más información";
        //     document.querySelector("#sectionDescription").classList.add('pb-2', 'pb-md-1', 'size-22-form');
            // document.querySelector(".help").textContent = "Te contactaremos para resolver todas tus dudas.";
            // document.querySelector("#programs").firstChild.textContent = "Elige tu flex course";
        //   }
        // }, true);
    
      </script>
    
</body>