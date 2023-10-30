async function cadastrar() {  
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  console.log(nome);
  console.log(email);
  console.log(senha);

  const data = {
    nome,
    email,
    senha
  };

  console.log(data);

  await fetch('http://localhost:3010/api/cadastrar', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json' 
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.success);
    alert('Valida retorno');

  });
}


async function logar() {  
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
      
        console.log(email);
        console.log(senha);
      
        const data = {
          email,
          senha
        };
      
        console.log(data);
      
        fetch('http://localhost:3010/api/auth/logar', {
          method: 'POST',
          headers: {
            'Content-Type':'application/json' 
          },
          body: JSON.stringify(data)
        })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.success);

    alert('Valida retorno');

  });
}