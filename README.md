# Cadastro de carro

**RF**

- Deve ser possível cadastrar um novo carro.
- Deve ser possível listar todas as categorias.

**RN**

- Não deve ser possível cadastrar um carro com uma placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O carro só pode ser cadastrado por um admin.

# Listagem de carros

**RF**

- Deve ser possivel listar os carros disponíveis.
- Deve ser possivel listar os carros disponíveis pelo nome da marca.
- Deve ser possivel listar os carros disponíveis pelo nome da categoria.
- Deve ser possivel listar os carros disponíveis pelo nome do carro.

**RN**

- O usuário não precisa estar logado no sistema.

# Cadastro de Especifiação no carro

**RF**

- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações.
- Deve ser possível listar todos os carros.

**RN**

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- A especificação só pode ser cadastrada por um admin.

# Cadastro de imagens do carro

**RF**

- Deve ser possível cadastrar a imagem do carro.
- Deve ser possível listar todos os carros.

**RNF**

- Utilizar o multer para upload dos arquivos

**RN**

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
- A imagem só pode ser cadastrada por um admin.

# Aluguel de carro

**RF**

- Deve ser possivel cadastrar um aluguel

**RNF**

- oioioi

**RN**

- O aluguel deve ter duração minima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
