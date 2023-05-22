# botvagas
Scrap das vagas de diversos sites

Este bot vai rodar como CRON job em um dos servidores da BSS e estará constantemente varreendo os principais sites de vagas para coletar informações sobre as vagas em aberto e salvá-las no nosso banco de dados. Ele é baseado em crawlers que pegam as informações de vagas em cada um dos sites, junto com um shell script que será rodado pelo **cron**.

Essas vagas serão exibidas no site da BSS, com link para o site de vagas correspondente. Assim, todos que entram em nosso site tem acesso a esse informativo. No futuro podemos ter uma mailing list divulgando vagas na medida em que elas forem aparecendo.

Também teremos, internamente, um mecanismo para identificar as vagas que melhor se enquadram para o nosso pessoal, de forma que possamos fazer as necessárias indicações.

No caso de empresas parceiras, como a Landing.Jobs, as vagas devem ser encaminhadas para o meu email (eddelalmeida@blackscorpion.tech) para que eu possa encaminhar as indicações pessoalmente.

Cada pessoa que pegar um crawler para fazer, por favor mantenha o status atualizado aqui nesta tabela.

| Empresa | Situação do crawler | Responsável |
| Landing.Jobs | Coleta de dados pronta. Aguardando apenas schema GraphQL para organizar os dados. | Ed de Almeida |

