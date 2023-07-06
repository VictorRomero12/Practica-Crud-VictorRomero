let form = document.getElementById("form");
    let textarea = document.getElementById("textarea");
    let msg = document.getElementById("msg");
    let post = document.getElementById("post");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formValidation();
    });

    let formValidation = () => {
      if (textarea.value === "") {
        msg.innerHTML = "El comentario no puede estar vacío.";
      } else {
        msg.innerHTML = "";
        acceptData();
      }
    };

    let acceptData = () => {
      let data = {
        text: textarea.value
      };
      createPost(data);
    };

    let createPost = (data) => {
      let commentElement = document.createElement("div");
      commentElement.innerHTML = `
        <p>${data.text}</p>
        <span class="options">
          <i onclick="editpost(this)" class="fas fa-edit"></i>
          <i onclick="deletepost(this)" class="fas fa-trash-alt"></i>
        </span>
      `;
      post.appendChild(commentElement);

      // Hacer scroll hacia abajo
      window.scrollTo(0, document.body.scrollHeight);

      textarea.value = "";
    };

    let editpost = (element) => {
        textarea.value = element.parentElement.previousElementSibling.innerHTML;
        element.parentElement.parentElement.remove();
    };

    let deletepost = (element) => {
        element.parentElement.parentElement.remove();
    };