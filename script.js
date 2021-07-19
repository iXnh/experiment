 //fitur justdolist:
     //1. tambah
     //2. coret
     //3. hapus


        //fungsi tambah
                function add() {
                
                //1. ambil nilai dari textnya
                let newText = document.getElementById('new_text')
                console.log(newText.value)

                //2. tambahkan list baru ke dalam ul
                let newTodo = "<li> <span onclick='toggle(this)'>" + newText.value + "</span>" +
                              "<span onclick='removeItem(this)'> [delete] </span>" + "</li>"
                
                justdo.insertAdjacentHTML('afterbegin', newTodo)

                //3. kosongkan fieldnya
                newText.value = ""
                }
       
        //fungsi coret
                function toggle(el) {
                el.classList.toggle('done')
                }
        
        //fungsi hapus     
                function removeItem(el) {
                el.parentElement.remove()
                }
