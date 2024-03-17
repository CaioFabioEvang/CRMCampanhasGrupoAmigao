const btnExp = document.querySelector('#btn-exp');
const menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir');
})

function btnplanejamento(){
    const btnPlanej = document.getElementById('btn-planej');
    if(btnPlanej){
        alert('Falta pouco em breve a opção de Planejamento estará disponível :D');
    }
}

function btnconfig(){
    const btnConfig = document.getElementById('btn-config');
    if(btnConfig){
        alert('A opção de Configurações em breve estará disponível :D');
    }
}

function btnresultado(){
    const btnResult = document.getElementById('btn-resultado');
    if(btnResult){
        alert('A opção de Resultados em breve estará disponível :D');
    }
}

function semDados(){
   const semInfo = document.getElementById('menu-meses');
   if(semInfo){
      alert('O mês selecionado ainda não possui informações.');
   }
}

function toggleMenu() {
  var menuMeses = document.getElementById("menu-meses");
  if (menuMeses.style.display === "block") {
      menuMeses.style.display = "none";
  } else {
      menuMeses.style.display = "block";
  }
}



//ESCOLHA DE CAMPANHAS


const dadosCampanhas = {
  campanha1: {
    nome: "E-mail TQV 30012024",
    filtro: "Clientes de todas filiais com filtro IdCsdmfilialpreferencial, Prpopensos de Alto e Médio Relacionamento no departamento de 'FLV'",
    abordado: 159.026,
    grupoControle: 9026,
    produtos: "1011006-Ovo Galinha Branco Grande C/30 Bandejao,116998-Cebola Kg,560472-Tomate Saladete Kg,116866-Melancia Inteira Kg,116726-Banana Nanica Venda Kg,2086417-Mandioca S/Casca Resfriada Pacote 1kg,387312-Ovo Galinha Branco Grande C/20,132489-Goiaba Vermelha Kg,180807-Alho Granel Kg Venda,117099-Tomate Longa Vida Kg,117870-Mamao Formosa Especial Kg,117285-Abobora Moranga Kg,117285-Abobora Moranga Kg",
    mensuracao: "1 dia"
  },
  campanha2: {
    nome: "68750 - Email - Volta as Aulas - Dia da Saudade Publico 1 30012024",
    filtro: "Clientes de todas filiais com filtro IdCsdmfilialpreferencial, Prpopensos de Alto e Médio Relacionamento no Grupo 'Papelaria'",
    abordado: 13.111,
    grupoControle: 5544,
    produtos: "3991482-Caderno Jandaia Cp Dura Broch 80f Stiff Slim Vermelho,3991474-Caderno Jandaia Cp Dura Broch 80f Stiff Slim Azul,3991423-Caderno Jandaia Cp Dura Broch 80f Stiff Slim Amarelo,2010976-Lapis Cor Bic C/12 Evolution Gts 4 Lapis,463116-Caneta Bic 4 Cores,2084600-Papel A4 Chamex C/500 Office,2084600-Papel A4 Chamex C/500 Office",
    mensuracao: "12 dias"
  },
  campanha3: {
    nome: "68751 - Email - Volta as Aulas - Dia da Saudade Publico 2 30012024",
    filtro: "Clientes de todas filiais com filtro IdCsdmfilialpreferencial, Prpopensos de Baixo Relacionamento e Não Compradores Propensos no Grupo 'Papelaria'",
    abordado: 35.263,
    grupoControle: 7549,
    produtos: "3991482-Caderno Jandaia Cp Dura Broch 80f Stiff Slim Vermelho,3991474-Caderno Jandaia Cp Dura Broch 80f Stiff Slim Azul,3991423-Caderno Jandaia Cp Dura Broch 80f Stiff Slim Amarelo,2010976-Lapis Cor Bic C/12 Evolution Gts 4 Lapis,463116-Caneta Bic 4 Cores,2084600-Papel A4 Chamex C/500 Office,2084600-Papel A4 Chamex C/500 Office",
    mensuracao: "12 dias"
  },
  campanha4: {
    nome: "68821 - Custom Audience - TRADE MKT Hoegaarden SP 01022024",
    filtro: "Clientes de todas filiais com filtro IdCsdmfilialpreferencial, Prpopensos de Alto Médio e Baixo Relacionamento no Grupo 'Cerveja'",
    abordado: 50.000,
    grupoControle: 8040,
    produtos: "946931	- Cerveja Hoegaarden 330ml Long Neck",
    mensuracao: "14 dias"
  },
  campanha5: {
    nome: "68822 - Custom Audience - TRADE MKT Agua Tonica PR MS 01022024",
    filtro: "Clientes das filiais PR e MS com filtro IdCsdmfilialpreferencial, Prpopensos de Alto Médio e Baixo Relacionamento no Grupo 'Agua Tonica'",
    abordado: 50000,
    grupoControle: 8040,
    produtos: "194743 - Agua Tonica Antarctica 350ml Zr Lata, 389552 - Agua Tonica Antarctica 350ml Lata",
    mensuracao: "14 dias"
  },
  campanha6: {
    nome: "68823 - Custom Audience - TRADE MKT Agua Tonica SP 01022024",
    filtro: "Clientes das filiais SP com filtro IdCsdmfilialpreferencial, Prpopensos de Alto Médio e Baixo Relacionamento no Grupo 'Agua Tonica'",
    abordado: 50.000,
    grupoControle: 8040,
    produtos: "194743 - Agua Tonica Antarctica 350ml Zr Lata, 389552 - Agua Tonica Antarctica 350ml Lata",
    mensuracao: "14 dias"
  },
  campanha7: {
    nome: "68783 - Email - Encarte Carnaval Churrasco com a Galera Publico 1 02022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Prpopensos de Alto E Médio Relacionamento no Grupo 'Bovinos e Cervejas'",
    abordado: 139.001,
    grupoControle: 8984,
    produtos: "821420-Costela Bov Cong Peca/Pedaco Kg,2845644-Hamburguer Bov Resfr Bdj Kg,440493-Costela Suina Cong S/Couro Kg,3993035-Cerveja Spaten 350ml Munich Puro Malte Lata,4399277-Cerveja Heineken 473ml Lata,4330463-Cerveja Antarctica 473ml Original Lata,2859807-Cerveja Antarctica 350ml Original Lata,2864851-Cerveja Corona 330ml  Extra Long Neck,2864851-Cerveja Corona 330ml  Extra Long Neck",
    mensuracao: "12 dias"
  },
  campanha8: {
    nome: "68784 - Email - Encarte Carnaval Churrasco com a Galera Publico 2 02022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Prpopensos de Baixo E Não Comprador no Grupo 'Bovinos e Cervejas'",
    abordado: 138.741,
    grupoControle: 8985,
    produtos: "821420-Costela Bov Cong Peca/Pedaco Kg,2845644-Hamburguer Bov Resfr Bdj Kg,440493-Costela Suina Cong S/Couro Kg,3993035-Cerveja Spaten 350ml Munich Puro Malte Lata,4399277-Cerveja Heineken 473ml Lata,4330463-Cerveja Antarctica 473ml Original Lata,2859807-Cerveja Antarctica 350ml Original Lata,2864851-Cerveja Corona 330ml  Extra Long Neck,2864851-Cerveja Corona 330ml  Extra Long Neck",
    mensuracao: "12 dias"
  },
  campanha9: {
    nome: "68785 - SMS - Encarte Carnaval Churrasco com a Galera Publico 1 PR 02022024",
    filtro: "Clientes filiais PR com filtro IdCsdmfilialpreferencial, Prpopensos de Alto E Médio Relacionamento no Grupo 'Bovinos e Cervejas'",
    abordado: 40000,
    grupoControle: 7745,
    produtos: "821420-Costela Bov Cong Peca/Pedaco Kg,2845644-Hamburguer Bov Resfr Bdj Kg,440493-Costela Suina Cong S/Couro Kg,3993035-Cerveja Spaten 350ml Munich Puro Malte Lata,4399277-Cerveja Heineken 473ml Lata,4330463-Cerveja Antarctica 473ml Original Lata,2859807-Cerveja Antarctica 350ml Original Lata,2864851-Cerveja Corona 330ml  Extra Long Neck,2864851-Cerveja Corona 330ml  Extra Long Neck",
    mensuracao: "12 dias"
  },
  campanha10: {
    nome: "68786 - SMS - Encarte Carnaval Churrasco com a Galera Publico 1 MS 02022024",
    filtro: "Clientes filiais MS com filtro IdCsdmfilialpreferencial, Prpopensos de Alto E Médio Relacionamento no Grupo 'Bovinos e Cervejas'",
    abordado: 23715,
    grupoControle: 7905,
    produtos: "821420-Costela Bov Cong Peca/Pedaco Kg,2845644-Hamburguer Bov Resfr Bdj Kg,440493-Costela Suina Cong S/Couro Kg,3993035-Cerveja Spaten 350ml Munich Puro Malte Lata,4399277-Cerveja Heineken 473ml Lata,4330463-Cerveja Antarctica 473ml Original Lata,2859807-Cerveja Antarctica 350ml Original Lata,2864851-Cerveja Corona 330ml  Extra Long Neck,2864851-Cerveja Corona 330ml  Extra Long Neck",
    mensuracao: "12 dias"
  },
  campanha11: {
    nome: "68787 - SMS - Encarte Carnaval Churrasco com a Galera Publico 1 SP 02022024",
    filtro: "Clientes filiais SP com filtro IdCsdmfilialpreferencial, Prpopensos de Alto E Médio Relacionamento no Grupo 'Bovinos e Cervejas'",
    abordado: 30000,
    grupoControle: 7276,
    produtos: "821420-Costela Bov Cong Peca/Pedaco Kg,2845644-Hamburguer Bov Resfr Bdj Kg,440493-Costela Suina Cong S/Couro Kg,3993035-Cerveja Spaten 350ml Munich Puro Malte Lata,4399277-Cerveja Heineken 473ml Lata,4330463-Cerveja Antarctica 473ml Original Lata,2859807-Cerveja Antarctica 350ml Original Lata,2864851-Cerveja Corona 330ml  Extra Long Neck,2864851-Cerveja Corona 330ml  Extra Long Neck",
    mensuracao: "12 dias"
  },
  campanha12: {
    nome: "68788 - SMS - Encarte Carnaval Churrasco com a Galera Publico 2 PR 02022024",
    filtro: "Clientes filiais PR com filtro IdCsdmfilialpreferencial, Prpopensos de Baixo E Não Compradores no Grupo 'Bovinos e Cervejas'",
    abordado: 40000,
    grupoControle: 7745,
    produtos: "821420-Costela Bov Cong Peca/Pedaco Kg,2845644-Hamburguer Bov Resfr Bdj Kg,440493-Costela Suina Cong S/Couro Kg,3993035-Cerveja Spaten 350ml Munich Puro Malte Lata,4399277-Cerveja Heineken 473ml Lata,4330463-Cerveja Antarctica 473ml Original Lata,2859807-Cerveja Antarctica 350ml Original Lata,2864851-Cerveja Corona 330ml  Extra Long Neck,2864851-Cerveja Corona 330ml  Extra Long Neck",
    mensuracao: "12 dias"
  },
  campanha13: {
    nome: "68789 - SMS - Encarte Carnaval Churrasco com a Galera Publico 2 SP 02022024",
    filtro: "Clientes filiais SP com filtro IdCsdmfilialpreferencial, Prpopensos de Baixo E Não Compradores no Grupo 'Bovinos e Cervejas'",
    abordado: 30000,
    grupoControle: 7276,
    produtos: "821420-Costela Bov Cong Peca/Pedaco Kg,2845644-Hamburguer Bov Resfr Bdj Kg,440493-Costela Suina Cong S/Couro Kg,3993035-Cerveja Spaten 350ml Munich Puro Malte Lata,4399277-Cerveja Heineken 473ml Lata,4330463-Cerveja Antarctica 473ml Original Lata,2859807-Cerveja Antarctica 350ml Original Lata,2864851-Cerveja Corona 330ml  Extra Long Neck,2864851-Cerveja Corona 330ml  Extra Long Neck",
    mensuracao: "12 dias"
  },
  campanha14: {
    nome: "68790 - SMS - Encarte Carnaval Churrasco com a Galera Publico 2 MS 02022024",
    filtro: "Clientes filiais MS com filtro IdCsdmfilialpreferencial, Prpopensos de Prpopensos de Baixo E Não Compradores no Grupo 'Bovinos e Cervejas'",
    abordado: 17641,
    grupoControle: 6275,
    produtos: "821420-Costela Bov Cong Peca/Pedaco Kg,2845644-Hamburguer Bov Resfr Bdj Kg,440493-Costela Suina Cong S/Couro Kg,3993035-Cerveja Spaten 350ml Munich Puro Malte Lata,4399277-Cerveja Heineken 473ml Lata,4330463-Cerveja Antarctica 473ml Original Lata,2859807-Cerveja Antarctica 350ml Original Lata,2864851-Cerveja Corona 330ml  Extra Long Neck,2864851-Cerveja Corona 330ml  Extra Long Neck",
    mensuracao: "12 dias"
  },
  campanha15: {
    nome: "SMS - Oferta Relampago Bebida Lactea e Biscoito 01022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Com compras nos últimos 30 dias Grupo 'Bebida Lactea e Biscoitos'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "2102366-Pao Mel Bauducco 30g C/ Cob Chocolate,4410947-Bolinho Cesta Bauducco 27g Duo Chocolate,560596-Bebida Lac Lider 200ml Choc",
    mensuracao: "0 dia"
  },
  campanha16: {
    nome: "68792 - Email - Festival Bebidas Hidrate se na Folia Publico 1 02022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Propensos Alto e Medio Relacionamento Grupo 'Agua Mineral - Isotonicos - Refresco - Refrigerantes - Sucos'",
    abordado: 146.980,
    grupoControle: 8981,
    produtos: "2823250-Suco Del Valle  1.5l Integral 100% Uva Vidro,632678-Agua Coco Kero Coco 1l  Trad,992224-Bebida Soja Ades 1l  Calcio Original,992240-Bebida Soja Ades 1l  Zero Original,367923-Bebida Soja Ades 1l Abacaxi,286494-Bebida Soja Ades 1l Laranja,286516-Bebida Soja Ades 1l Maca,367931-Bebida Soja Ades 1l Pessego,532584-Bebida Soja Ades 1l Uva,4412567-Bebida Isotonica Powerade 500ml Cittrus Maracuja,4085337-Bebida Isotonica Powerade 500ml Frutas Tropicais,1595571-Bebida Isotonica Powerade 500ml Laranja,1996916-Bebida Isotonica Powerade 500ml Limao,1595563-Bebida Isotonica Powerade 500ml Mix Frutas,1996932-Bebida Isotonica Powerade 500ml Tangerina,1595580-Bebida Isotonica Powerade 500ml Uva,1535455-Suco Del Valle 1l Nectar Abacaxi,818089-Suco Del Valle 1l Nectar Caju S/ Acucar,818119-Suco Del Valle 1l Nectar Laranja,818020-Suco Del Valle 1l Nectar Manga,818070-Suco Del Valle 1l Nectar Maracuja,818046-Suco Del Valle 1l Nectar Pessego,818054-Suco Del Valle 1l Nectar Pessego S/Acucar,818097-Suco Del Valle 1l Nectar Uva,818100-Suco Del Valle 1l Nectar Uva S/Acucar,113042-Refrig Antarctica 2l Guarana Pet,144304-Refrig Antarctica 2l Guarana Zero Pet,317861-Refrig Sukita 2l Laranja Pet,3983994-Refrig Sukita 2l Limao Pet,3999904-Refrig Sukita 2l Tubaina Pet,943509-Refrig Sukita 2l Uva Pet",
    mensuracao: "12 dia"
  },
  campanha17: {
    nome: "68793 - Email - Festival Bebidas Hidrate se na Folia Publico 2 02022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Propensos Baixo Relacionamento e Não Compradores Grupo 'Agua Mineral - Isotonicos - Refresco - Refrigerantes - Sucos'",
    abordado: 149.110,
    grupoControle: 9063,
    produtos: "2823250-Suco Del Valle  1.5l Integral 100% Uva Vidro,632678-Agua Coco Kero Coco 1l  Trad,992224-Bebida Soja Ades 1l  Calcio Original,992240-Bebida Soja Ades 1l  Zero Original,367923-Bebida Soja Ades 1l Abacaxi,286494-Bebida Soja Ades 1l Laranja,286516-Bebida Soja Ades 1l Maca,367931-Bebida Soja Ades 1l Pessego,532584-Bebida Soja Ades 1l Uva,4412567-Bebida Isotonica Powerade 500ml Cittrus Maracuja,4085337-Bebida Isotonica Powerade 500ml Frutas Tropicais,1595571-Bebida Isotonica Powerade 500ml Laranja,1996916-Bebida Isotonica Powerade 500ml Limao,1595563-Bebida Isotonica Powerade 500ml Mix Frutas,1996932-Bebida Isotonica Powerade 500ml Tangerina,1595580-Bebida Isotonica Powerade 500ml Uva,1535455-Suco Del Valle 1l Nectar Abacaxi,818089-Suco Del Valle 1l Nectar Caju S/ Acucar,818119-Suco Del Valle 1l Nectar Laranja,818020-Suco Del Valle 1l Nectar Manga,818070-Suco Del Valle 1l Nectar Maracuja,818046-Suco Del Valle 1l Nectar Pessego,818054-Suco Del Valle 1l Nectar Pessego S/Acucar,818097-Suco Del Valle 1l Nectar Uva,818100-Suco Del Valle 1l Nectar Uva S/Acucar,113042-Refrig Antarctica 2l Guarana Pet,144304-Refrig Antarctica 2l Guarana Zero Pet,317861-Refrig Sukita 2l Laranja Pet,3983994-Refrig Sukita 2l Limao Pet,3999904-Refrig Sukita 2l Tubaina Pet,943509-Refrig Sukita 2l Uva Pet",
    mensuracao: "12 dia"
  },
  campanha18: {
    nome: "68794 - SMS - Festival Bebidas Hidrate se na Folia Publico 1 PR 02022024",
    filtro: "Clientes filiais PR com filtro IdCsdmfilialpreferencial, Propensos Alto e Medio Relacionamento Grupo 'Agua Mineral - Isotonicos - Refresco - Refrigerantes - Sucos'",
    abordado: 25000,
    grupoControle: 6939,
    produtos: "2823250-Suco Del Valle  1.5l Integral 100% Uva Vidro,632678-Agua Coco Kero Coco 1l  Trad,992224-Bebida Soja Ades 1l  Calcio Original,992240-Bebida Soja Ades 1l  Zero Original,367923-Bebida Soja Ades 1l Abacaxi,286494-Bebida Soja Ades 1l Laranja,286516-Bebida Soja Ades 1l Maca,367931-Bebida Soja Ades 1l Pessego,532584-Bebida Soja Ades 1l Uva,4412567-Bebida Isotonica Powerade 500ml Cittrus Maracuja,4085337-Bebida Isotonica Powerade 500ml Frutas Tropicais,1595571-Bebida Isotonica Powerade 500ml Laranja,1996916-Bebida Isotonica Powerade 500ml Limao,1595563-Bebida Isotonica Powerade 500ml Mix Frutas,1996932-Bebida Isotonica Powerade 500ml Tangerina,1595580-Bebida Isotonica Powerade 500ml Uva,1535455-Suco Del Valle 1l Nectar Abacaxi,818089-Suco Del Valle 1l Nectar Caju S/ Acucar,818119-Suco Del Valle 1l Nectar Laranja,818020-Suco Del Valle 1l Nectar Manga,818070-Suco Del Valle 1l Nectar Maracuja,818046-Suco Del Valle 1l Nectar Pessego,818054-Suco Del Valle 1l Nectar Pessego S/Acucar,818097-Suco Del Valle 1l Nectar Uva,818100-Suco Del Valle 1l Nectar Uva S/Acucar,113042-Refrig Antarctica 2l Guarana Pet,144304-Refrig Antarctica 2l Guarana Zero Pet,317861-Refrig Sukita 2l Laranja Pet,3983994-Refrig Sukita 2l Limao Pet,3999904-Refrig Sukita 2l Tubaina Pet,943509-Refrig Sukita 2l Uva Pet",
    mensuracao: "12 dia"
  },
  campanha19: {
    nome: "68795 - SMS - Festival Bebidas Hidrate se na Folia Publico 1 MS 02022024",
    filtro: "Clientes filiais MS com filtro IdCsdmfilialpreferencial, Propensos Alto e Medio Relacionamento Grupo 'Agua Mineral - Isotonicos - Refresco - Refrigerantes - Sucos'",
    abordado: 23715,
    grupoControle: 7905,
    produtos: "2823250-Suco Del Valle  1.5l Integral 100% Uva Vidro,632678-Agua Coco Kero Coco 1l  Trad,992224-Bebida Soja Ades 1l  Calcio Original,992240-Bebida Soja Ades 1l  Zero Original,367923-Bebida Soja Ades 1l Abacaxi,286494-Bebida Soja Ades 1l Laranja,286516-Bebida Soja Ades 1l Maca,367931-Bebida Soja Ades 1l Pessego,532584-Bebida Soja Ades 1l Uva,4412567-Bebida Isotonica Powerade 500ml Cittrus Maracuja,4085337-Bebida Isotonica Powerade 500ml Frutas Tropicais,1595571-Bebida Isotonica Powerade 500ml Laranja,1996916-Bebida Isotonica Powerade 500ml Limao,1595563-Bebida Isotonica Powerade 500ml Mix Frutas,1996932-Bebida Isotonica Powerade 500ml Tangerina,1595580-Bebida Isotonica Powerade 500ml Uva,1535455-Suco Del Valle 1l Nectar Abacaxi,818089-Suco Del Valle 1l Nectar Caju S/ Acucar,818119-Suco Del Valle 1l Nectar Laranja,818020-Suco Del Valle 1l Nectar Manga,818070-Suco Del Valle 1l Nectar Maracuja,818046-Suco Del Valle 1l Nectar Pessego,818054-Suco Del Valle 1l Nectar Pessego S/Acucar,818097-Suco Del Valle 1l Nectar Uva,818100-Suco Del Valle 1l Nectar Uva S/Acucar,113042-Refrig Antarctica 2l Guarana Pet,144304-Refrig Antarctica 2l Guarana Zero Pet,317861-Refrig Sukita 2l Laranja Pet,3983994-Refrig Sukita 2l Limao Pet,3999904-Refrig Sukita 2l Tubaina Pet,943509-Refrig Sukita 2l Uva Pet",
    mensuracao: "12 dia"
  },
  campanha20: {
    nome: "68796 - SMS - Festival Bebidas Hidrate se na Folia Publico 1 SP 02022024",
    filtro: "Clientes filiais SP com filtro IdCsdmfilialpreferencial, Propensos Alto e Medio Relacionamento Grupo 'Agua Mineral - Isotonicos - Refresco - Refrigerantes - Sucos'",
    abordado: 30000,
    grupoControle: 7276,
    produtos: "2823250-Suco Del Valle  1.5l Integral 100% Uva Vidro,632678-Agua Coco Kero Coco 1l  Trad,992224-Bebida Soja Ades 1l  Calcio Original,992240-Bebida Soja Ades 1l  Zero Original,367923-Bebida Soja Ades 1l Abacaxi,286494-Bebida Soja Ades 1l Laranja,286516-Bebida Soja Ades 1l Maca,367931-Bebida Soja Ades 1l Pessego,532584-Bebida Soja Ades 1l Uva,4412567-Bebida Isotonica Powerade 500ml Cittrus Maracuja,4085337-Bebida Isotonica Powerade 500ml Frutas Tropicais,1595571-Bebida Isotonica Powerade 500ml Laranja,1996916-Bebida Isotonica Powerade 500ml Limao,1595563-Bebida Isotonica Powerade 500ml Mix Frutas,1996932-Bebida Isotonica Powerade 500ml Tangerina,1595580-Bebida Isotonica Powerade 500ml Uva,1535455-Suco Del Valle 1l Nectar Abacaxi,818089-Suco Del Valle 1l Nectar Caju S/ Acucar,818119-Suco Del Valle 1l Nectar Laranja,818020-Suco Del Valle 1l Nectar Manga,818070-Suco Del Valle 1l Nectar Maracuja,818046-Suco Del Valle 1l Nectar Pessego,818054-Suco Del Valle 1l Nectar Pessego S/Acucar,818097-Suco Del Valle 1l Nectar Uva,818100-Suco Del Valle 1l Nectar Uva S/Acucar,113042-Refrig Antarctica 2l Guarana Pet,144304-Refrig Antarctica 2l Guarana Zero Pet,317861-Refrig Sukita 2l Laranja Pet,3983994-Refrig Sukita 2l Limao Pet,3999904-Refrig Sukita 2l Tubaina Pet,943509-Refrig Sukita 2l Uva Pet",
    mensuracao: "12 dia"
  },
  campanha21: {
    nome: "68798 - SMS - Festival Bebidas Hidrate se na Folia Publico 2 PR 02022024",
    filtro: "Clientes filiais PR com filtro IdCsdmfilialpreferencial, Propensos Baixo Relacionamento e Não Compradores Grupo 'Agua Mineral, Isotonicos, Refresco, Refrigerantes, Sucos'",
    abordado: 25000,
    grupoControle: 6939,
    produtos: "2823250-Suco Del Valle  1.5l Integral 100% Uva Vidro,632678-Agua Coco Kero Coco 1l  Trad,992224-Bebida Soja Ades 1l  Calcio Original,992240-Bebida Soja Ades 1l  Zero Original,367923-Bebida Soja Ades 1l Abacaxi,286494-Bebida Soja Ades 1l Laranja,286516-Bebida Soja Ades 1l Maca,367931-Bebida Soja Ades 1l Pessego,532584-Bebida Soja Ades 1l Uva,4412567-Bebida Isotonica Powerade 500ml Cittrus Maracuja,4085337-Bebida Isotonica Powerade 500ml Frutas Tropicais,1595571-Bebida Isotonica Powerade 500ml Laranja,1996916-Bebida Isotonica Powerade 500ml Limao,1595563-Bebida Isotonica Powerade 500ml Mix Frutas,1996932-Bebida Isotonica Powerade 500ml Tangerina,1595580-Bebida Isotonica Powerade 500ml Uva,1535455-Suco Del Valle 1l Nectar Abacaxi,818089-Suco Del Valle 1l Nectar Caju S/ Acucar,818119-Suco Del Valle 1l Nectar Laranja,818020-Suco Del Valle 1l Nectar Manga,818070-Suco Del Valle 1l Nectar Maracuja,818046-Suco Del Valle 1l Nectar Pessego,818054-Suco Del Valle 1l Nectar Pessego S/Acucar,818097-Suco Del Valle 1l Nectar Uva,818100-Suco Del Valle 1l Nectar Uva S/Acucar,113042-Refrig Antarctica 2l Guarana Pet,144304-Refrig Antarctica 2l Guarana Zero Pet,317861-Refrig Sukita 2l Laranja Pet,3983994-Refrig Sukita 2l Limao Pet,3999904-Refrig Sukita 2l Tubaina Pet,943509-Refrig Sukita 2l Uva Pet",
    mensuracao: "12 dia"
  },
  campanha22: {
    nome: "68799 - SMS - Festival Bebidas Hidrate se na Folia Publico 2 SP 02022024",
    filtro: "Clientes filiais SP com filtro IdCsdmfilialpreferencial, Propensos Baixo Relacionamento e Não Compradores Grupo 'Agua Mineral - Isotonicos - Refresco - Refrigerantes - Sucos'",
    abordado: 23715,
    grupoControle: 7905,
    produtos: "2823250-Suco Del Valle  1.5l Integral 100% Uva Vidro,632678-Agua Coco Kero Coco 1l  Trad,992224-Bebida Soja Ades 1l  Calcio Original,992240-Bebida Soja Ades 1l  Zero Original,367923-Bebida Soja Ades 1l Abacaxi,286494-Bebida Soja Ades 1l Laranja,286516-Bebida Soja Ades 1l Maca,367931-Bebida Soja Ades 1l Pessego,532584-Bebida Soja Ades 1l Uva,4412567-Bebida Isotonica Powerade 500ml Cittrus Maracuja,4085337-Bebida Isotonica Powerade 500ml Frutas Tropicais,1595571-Bebida Isotonica Powerade 500ml Laranja,1996916-Bebida Isotonica Powerade 500ml Limao,1595563-Bebida Isotonica Powerade 500ml Mix Frutas,1996932-Bebida Isotonica Powerade 500ml Tangerina,1595580-Bebida Isotonica Powerade 500ml Uva,1535455-Suco Del Valle 1l Nectar Abacaxi,818089-Suco Del Valle 1l Nectar Caju S/ Acucar,818119-Suco Del Valle 1l Nectar Laranja,818020-Suco Del Valle 1l Nectar Manga,818070-Suco Del Valle 1l Nectar Maracuja,818046-Suco Del Valle 1l Nectar Pessego,818054-Suco Del Valle 1l Nectar Pessego S/Acucar,818097-Suco Del Valle 1l Nectar Uva,818100-Suco Del Valle 1l Nectar Uva S/Acucar,113042-Refrig Antarctica 2l Guarana Pet,144304-Refrig Antarctica 2l Guarana Zero Pet,317861-Refrig Sukita 2l Laranja Pet,3983994-Refrig Sukita 2l Limao Pet,3999904-Refrig Sukita 2l Tubaina Pet,943509-Refrig Sukita 2l Uva Pet",
    mensuracao: "12 dia"
  },
  campanha23: {
    nome: "68800 - SMS - Festival Bebidas Hidrate se na Folia Publico 2 MS 02022024",
    filtro: "Clientes filiais MS com filtro IdCsdmfilialpreferencial, Propensos Baixo Relacionamento e Não Compradores Grupo 'Agua Mineral - Isotonicos - Refresco - Refrigerantes - Sucos'",
    abordado: 30000,
    grupoControle: 7276,
    produtos: "2823250-Suco Del Valle  1.5l Integral 100% Uva Vidro,632678-Agua Coco Kero Coco 1l  Trad,992224-Bebida Soja Ades 1l  Calcio Original,992240-Bebida Soja Ades 1l  Zero Original,367923-Bebida Soja Ades 1l Abacaxi,286494-Bebida Soja Ades 1l Laranja,286516-Bebida Soja Ades 1l Maca,367931-Bebida Soja Ades 1l Pessego,532584-Bebida Soja Ades 1l Uva,4412567-Bebida Isotonica Powerade 500ml Cittrus Maracuja,4085337-Bebida Isotonica Powerade 500ml Frutas Tropicais,1595571-Bebida Isotonica Powerade 500ml Laranja,1996916-Bebida Isotonica Powerade 500ml Limao,1595563-Bebida Isotonica Powerade 500ml Mix Frutas,1996932-Bebida Isotonica Powerade 500ml Tangerina,1595580-Bebida Isotonica Powerade 500ml Uva,1535455-Suco Del Valle 1l Nectar Abacaxi,818089-Suco Del Valle 1l Nectar Caju S/ Acucar,818119-Suco Del Valle 1l Nectar Laranja,818020-Suco Del Valle 1l Nectar Manga,818070-Suco Del Valle 1l Nectar Maracuja,818046-Suco Del Valle 1l Nectar Pessego,818054-Suco Del Valle 1l Nectar Pessego S/Acucar,818097-Suco Del Valle 1l Nectar Uva,818100-Suco Del Valle 1l Nectar Uva S/Acucar,113042-Refrig Antarctica 2l Guarana Pet,144304-Refrig Antarctica 2l Guarana Zero Pet,317861-Refrig Sukita 2l Laranja Pet,3983994-Refrig Sukita 2l Limao Pet,3999904-Refrig Sukita 2l Tubaina Pet,943509-Refrig Sukita 2l Uva Pet",
    mensuracao: "12 dias"
  },
  campanha24: {
    nome: "68832 - Email - Sabadao Amigao Publico 1 03022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes do ciclo de Vida Ativação e Rentabilização, CLV 'C' e sem compras no período de 30 a 15 dias",
    abordado: 61300,
    grupoControle: 8301,
    produtos: "601810-Acucar Cristal Alto Alegre 2kg,2798735-Leite Po Gloria 400g Inst Integral Sache,505080-Azeite Gallo 500ml Extra Virgem Vidro,2834243-Ketchup Heinz 1.033kg Tradicional,1958704-Leite Condensado Piracanjuba 395g Tp,4060440-Lava Roupa Tixan L1.6p1.52kg Maciez,4068858-Lava Roupa Tixan L1.6p1.52kg Po Primavera,2871831-Deterg Limpol 500ml  Liq Cristal C/6 L+p-,2871823-Deterg Limpol 500ml  Liq Neutro C/6 L+p-,3971465-Achoc Po Nescau 1.02kg Sache,4076761-Molho Tom Pomarola 300g Tradicional,1781553-Feijao Carioca Camil 1kg T1,1035533-Arroz Guacira 5kg T1 Speciale",
    mensuracao: "0 dia"
  },
  campanha25: {
    nome: "68833 - Email - Sabadao Amigao Publico 2 03022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes do ciclo de Vida Retenção, CLV 'B'",
    abordado: 18498,
    grupoControle: 6322,
    produtos: "601810-Acucar Cristal Alto Alegre 2kg,2798735-Leite Po Gloria 400g Inst Integral Sache,505080-Azeite Gallo 500ml Extra Virgem Vidro,2834243-Ketchup Heinz 1.033kg Tradicional,1958704-Leite Condensado Piracanjuba 395g Tp,4060440-Lava Roupa Tixan L1.6p1.52kg Maciez,4068858-Lava Roupa Tixan L1.6p1.52kg Po Primavera,2871831-Deterg Limpol 500ml  Liq Cristal C/6 L+p-,2871823-Deterg Limpol 500ml  Liq Neutro C/6 L+p-,3971465-Achoc Po Nescau 1.02kg Sache,4076761-Molho Tom Pomarola 300g Tradicional,1781553-Feijao Carioca Camil 1kg T1,1035533-Arroz Guacira 5kg T1 Speciale",
    mensuracao: "0 dia"
  },
  campanha26: {
    nome: "68834 - SMS - Sabadao Amigao Publico 1 PR 03022024",
    filtro: "Clientes filiais PR com filtro IdCsdmfilialpreferencial, Clientes do ciclo de Vida Ativação e Rentabilização, CLV 'C' e sem compras no período de 30 a 15 dias",
    abordado: 19372,
    grupoControle: 6684,
    produtos: "601810-Acucar Cristal Alto Alegre 2kg,2798735-Leite Po Gloria 400g Inst Integral Sache,505080-Azeite Gallo 500ml Extra Virgem Vidro,2834243-Ketchup Heinz 1.033kg Tradicional,1958704-Leite Condensado Piracanjuba 395g Tp,4060440-Lava Roupa Tixan L1.6p1.52kg Maciez,4068858-Lava Roupa Tixan L1.6p1.52kg Po Primavera,2871831-Deterg Limpol 500ml  Liq Cristal C/6 L+p-,2871823-Deterg Limpol 500ml  Liq Neutro C/6 L+p-,3971465-Achoc Po Nescau 1.02kg Sache,4076761-Molho Tom Pomarola 300g Tradicional,1781553-Feijao Carioca Camil 1kg T1,1035533-Arroz Guacira 5kg T1 Speciale",
    mensuracao: "0 dia"
  },
  campanha27: {
    nome: "68835 - SMS - Sabadao Amigao Publico 1 SP 03022024",
    filtro: "Clientes filiais SP com filtro IdCsdmfilialpreferencial, Clientes do ciclo de Vida Ativação e Rentabilização, CLV 'C' e sem compras no período de 30 a 15 dias",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "601810-Acucar Cristal Alto Alegre 2kg,2798735-Leite Po Gloria 400g Inst Integral Sache,505080-Azeite Gallo 500ml Extra Virgem Vidro,2834243-Ketchup Heinz 1.033kg Tradicional,1958704-Leite Condensado Piracanjuba 395g Tp,4060440-Lava Roupa Tixan L1.6p1.52kg Maciez,4068858-Lava Roupa Tixan L1.6p1.52kg Po Primavera,2871831-Deterg Limpol 500ml  Liq Cristal C/6 L+p-,2871823-Deterg Limpol 500ml  Liq Neutro C/6 L+p-,3971465-Achoc Po Nescau 1.02kg Sache,4076761-Molho Tom Pomarola 300g Tradicional,1781553-Feijao Carioca Camil 1kg T1,1035533-Arroz Guacira 5kg T1 Speciale",
    mensuracao: "0 dia"
  },
  campanha28: {
    nome: "68839 - SMS - Sabadao Amigao Publico 2 PR 03022024",
    filtro: "Clientes filiais PR com filtro IdCsdmfilialpreferencial, Clientes do ciclo de Vida Retenção, CLV 'B'",
    abordado: 7021,
    grupoControle: 0,
    produtos: "601810-Acucar Cristal Alto Alegre 2kg,2798735-Leite Po Gloria 400g Inst Integral Sache,505080-Azeite Gallo 500ml Extra Virgem Vidro,2834243-Ketchup Heinz 1.033kg Tradicional,1958704-Leite Condensado Piracanjuba 395g Tp,4060440-Lava Roupa Tixan L1.6p1.52kg Maciez,4068858-Lava Roupa Tixan L1.6p1.52kg Po Primavera,2871831-Deterg Limpol 500ml  Liq Cristal C/6 L+p-,2871823-Deterg Limpol 500ml  Liq Neutro C/6 L+p-,3971465-Achoc Po Nescau 1.02kg Sache,4076761-Molho Tom Pomarola 300g Tradicional,1781553-Feijao Carioca Camil 1kg T1,1035533-Arroz Guacira 5kg T1 Speciale",
    mensuracao: "0 dia"
  },
  campanha29: {
    nome: "68840 - SMS - Sabadao Amigao Publico 2 SP 03022024",
    filtro: "Clientes filiais SP com filtro IdCsdmfilialpreferencial, Clientes do ciclo de Vida Retenção, CLV 'B'",
    abordado: 13611,
    grupoControle: 5196,
    produtos: "601810-Acucar Cristal Alto Alegre 2kg,2798735-Leite Po Gloria 400g Inst Integral Sache,505080-Azeite Gallo 500ml Extra Virgem Vidro,2834243-Ketchup Heinz 1.033kg Tradicional,1958704-Leite Condensado Piracanjuba 395g Tp,4060440-Lava Roupa Tixan L1.6p1.52kg Maciez,4068858-Lava Roupa Tixan L1.6p1.52kg Po Primavera,2871831-Deterg Limpol 500ml  Liq Cristal C/6 L+p-,2871823-Deterg Limpol 500ml  Liq Neutro C/6 L+p-,3971465-Achoc Po Nescau 1.02kg Sache,4076761-Molho Tom Pomarola 300g Tradicional,1781553-Feijao Carioca Camil 1kg T1,1035533-Arroz Guacira 5kg T1 Speciale",
    mensuracao: "0 dia"
  },
  campanha30: {
    nome: "68841 - SMS - Sabadao Amigao Publico 2 MS 03022024",
    filtro: "Clientes filiais MS com filtro IdCsdmfilialpreferencial, Clientes do ciclo de Vida Retenção, CLV 'B'",
    abordado: 2019,
    grupoControle: 0,
    produtos: "601810-Acucar Cristal Alto Alegre 2kg,2798735-Leite Po Gloria 400g Inst Integral Sache,505080-Azeite Gallo 500ml Extra Virgem Vidro,2834243-Ketchup Heinz 1.033kg Tradicional,1958704-Leite Condensado Piracanjuba 395g Tp,4060440-Lava Roupa Tixan L1.6p1.52kg Maciez,4068858-Lava Roupa Tixan L1.6p1.52kg Po Primavera,2871831-Deterg Limpol 500ml  Liq Cristal C/6 L+p-,2871823-Deterg Limpol 500ml  Liq Neutro C/6 L+p-,3971465-Achoc Po Nescau 1.02kg Sache,4076761-Molho Tom Pomarola 300g Tradicional,1781553-Feijao Carioca Camil 1kg T1,1035533-Arroz Guacira 5kg T1 Speciale",
    mensuracao: "0 dia"
  },
  campanha31: {
    nome: "68844 - Email - TRADE MKT AMBEV - CORONA LONG NECK PR MS 03022024",
    filtro: "Clientes filiais PR-MS com filtro IdCsdmfilialpreferencial, Clientes sem compras nos últimos 90 na Marca 'Corona'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "2864851 - Cerveja Corona 330ml Long Neck",
    mensuracao: "0 dia"
  },
  campanha32: {
    nome: "68845 - Email - TRADE MKT AMBEV - CORONA LONG NECK SP 03022024",
    filtro: "Clientes filiais SP com filtro IdCsdmfilialpreferencial, Clientes sem compras nos últimos 90 na Marca 'Corona'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "2864851 - Cerveja Corona 330ml Long Neck",
    mensuracao: "0 dia"
  },
  campanha33: {
    nome: "68853 - Email - Abastecimento Exclusivo Vitrine 1 Publico 1 05022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes do ciclo de Ativaçã e Rentabilização - CLV A e B, Clientes sem venda entre período de 30 a 15 dias.",
    abordado: 128853,
    grupoControle: 8910,
    produtos: "601810-Acucar Cristal Alto Alegre 2kg,105570-Acucar Refinado Uniao 1kg,1612930-Agua Min Cristal Select 500ml S/Gas,4413865-Arroz Minueto 5kg Ft Verde,365670-Azeite Andorinha 500ml Extra Virgem Vidro,997765-Bebida Energetica Red Bull 355ml,2866013-Bebida Energetica Red Bull 355ml Sugar Free,2864851-Cerveja Corona 330ml  Extra Long Neck,3993035-Cerveja Spaten 350ml Munich Puro Malte Lata,2771322-Extrato Tomate Elefante 275g Tp,4416422-Não Encontrado,4410980-Feijao Carioca Vo Geralda 1kg Comum,777854-Leite Uht Frimesa 1l Zero Lactose,4343875-Mac Magni 500g Semola Espaguete,4343859-Mac Magni 500g Semola Parafuso,4343867-Mac Magni 500g Semola Penne,2930340-Mac Nissin 75g Caldinho Feijao,2930439-Mac Nissin 75g Canja Galinha,816370-Mac Nissin 80g Hot Calabresa,2947048-Mac Nissin 80g Lamen Carne Desfiada C/Pim,136077-Mac Nissin 85g Bacon,2875659-Mac Nissin 85g Camarao C/ Alho,133043-Mac Nissin 85g Carne,578860-Mac Nissin 85g Carne C/Tomate,4077695-Mac Nissin 85g Chico Bento Milho Na Manteiga,2813017-Mac Nissin 85g Costela,102369-Mac Nissin 85g Gal Caipira,4415221-Mac Nissin 85g Gal Caipira C/6 L+p-,4417399-Não Encontrado,102350-Mac Nissin 85g Galinha,102393-Mac Nissin 85g Monica Carne,102440-Mac Nissin 85g Monica Galinha,102407-Mac Nissin 85g Monica Tomate,2724421-Mac Nissin 85g Sabor Fgo Assado C/Limao,775304-Mac Nissin 87g Yakissoba Trad,525200-Mac Nissin 88g Crem Frango,444715-Mac Nissin 88g Crem Picanha,2857790-Mac Nissin 88g Cremoso Molho De Queijo,771406-Mac Renata 500g Ovos Sem Ave Maria,215775-Mac Renata 500g Ovos Sem Espag 8,2368155-Mac Renata 500g Ovos Sem Fidelinho 10,512168-Mac Renata 500g Ovos Sem Furadinho 5,998052-Mac Renata 500g Ovos Sem Linguine,219037-Mac Renata 500g Ovos Sem Padre Nosso,215783-Mac Renata 500g Ovos Sem Parafuso,389420-Mac Renata 500g Ovos Sem Pena,3933881-Maionese Hellmann's 800g Doypack Sachet,2104334-Molho Tom Heinz 300g Sache Tradicional,3995119-Oleo Algodao Liza 900ml",
    mensuracao: "6 dias"
  },
  campanha34: {
    nome: "68854 - Email - Abastecimento Exclusivo Vitrine 1 Publico 2 05022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes do ciclo de Retenção com CLV A e B",
    abordado: 20926,
    grupoControle: 6583,
    produtos: "601810-Acucar Cristal Alto Alegre 2kg,105570-Acucar Refinado Uniao 1kg,1612930-Agua Min Cristal Select 500ml S/Gas,4413865-Arroz Minueto 5kg Ft Verde,365670-Azeite Andorinha 500ml Extra Virgem Vidro,997765-Bebida Energetica Red Bull 355ml,2866013-Bebida Energetica Red Bull 355ml Sugar Free,2864851-Cerveja Corona 330ml  Extra Long Neck,3993035-Cerveja Spaten 350ml Munich Puro Malte Lata,2771322-Extrato Tomate Elefante 275g Tp,4416422-Não Encontrado,4410980-Feijao Carioca Vo Geralda 1kg Comum,777854-Leite Uht Frimesa 1l Zero Lactose,4343875-Mac Magni 500g Semola Espaguete,4343859-Mac Magni 500g Semola Parafuso,4343867-Mac Magni 500g Semola Penne,2930340-Mac Nissin 75g Caldinho Feijao,2930439-Mac Nissin 75g Canja Galinha,816370-Mac Nissin 80g Hot Calabresa,2947048-Mac Nissin 80g Lamen Carne Desfiada C/Pim,136077-Mac Nissin 85g Bacon,2875659-Mac Nissin 85g Camarao C/ Alho,133043-Mac Nissin 85g Carne,578860-Mac Nissin 85g Carne C/Tomate,4077695-Mac Nissin 85g Chico Bento Milho Na Manteiga,2813017-Mac Nissin 85g Costela,102369-Mac Nissin 85g Gal Caipira,4415221-Mac Nissin 85g Gal Caipira C/6 L+p-,4417399-Não Encontrado,102350-Mac Nissin 85g Galinha,102393-Mac Nissin 85g Monica Carne,102440-Mac Nissin 85g Monica Galinha,102407-Mac Nissin 85g Monica Tomate,2724421-Mac Nissin 85g Sabor Fgo Assado C/Limao,775304-Mac Nissin 87g Yakissoba Trad,525200-Mac Nissin 88g Crem Frango,444715-Mac Nissin 88g Crem Picanha,2857790-Mac Nissin 88g Cremoso Molho De Queijo,771406-Mac Renata 500g Ovos Sem Ave Maria,215775-Mac Renata 500g Ovos Sem Espag 8,2368155-Mac Renata 500g Ovos Sem Fidelinho 10,512168-Mac Renata 500g Ovos Sem Furadinho 5,998052-Mac Renata 500g Ovos Sem Linguine,219037-Mac Renata 500g Ovos Sem Padre Nosso,215783-Mac Renata 500g Ovos Sem Parafuso,389420-Mac Renata 500g Ovos Sem Pena,3933881-Maionese Hellmann's 800g Doypack Sachet,2104334-Molho Tom Heinz 300g Sache Tradicional,3995119-Oleo Algodao Liza 900ml",
    mensuracao: "6 dias"
  },
  campanha35: {
    nome: "68855 - SMS - Abastecimento Exclusivo Vitrine 1 Publico 1 05022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes do ciclo de Ativaçã e Rentabilização - CLV A e B, Clientes sem venda entre período de 30 a 15 dias.",
    abordado: 30000,
    grupoControle: 7276,
    produtos: "601810-Acucar Cristal Alto Alegre 2kg,105570-Acucar Refinado Uniao 1kg,1612930-Agua Min Cristal Select 500ml S/Gas,4413865-Arroz Minueto 5kg Ft Verde,365670-Azeite Andorinha 500ml Extra Virgem Vidro,997765-Bebida Energetica Red Bull 355ml,2866013-Bebida Energetica Red Bull 355ml Sugar Free,2864851-Cerveja Corona 330ml  Extra Long Neck,3993035-Cerveja Spaten 350ml Munich Puro Malte Lata,2771322-Extrato Tomate Elefante 275g Tp,4416422-Não Encontrado,4410980-Feijao Carioca Vo Geralda 1kg Comum,777854-Leite Uht Frimesa 1l Zero Lactose,4343875-Mac Magni 500g Semola Espaguete,4343859-Mac Magni 500g Semola Parafuso,4343867-Mac Magni 500g Semola Penne,2930340-Mac Nissin 75g Caldinho Feijao,2930439-Mac Nissin 75g Canja Galinha,816370-Mac Nissin 80g Hot Calabresa,2947048-Mac Nissin 80g Lamen Carne Desfiada C/Pim,136077-Mac Nissin 85g Bacon,2875659-Mac Nissin 85g Camarao C/ Alho,133043-Mac Nissin 85g Carne,578860-Mac Nissin 85g Carne C/Tomate,4077695-Mac Nissin 85g Chico Bento Milho Na Manteiga,2813017-Mac Nissin 85g Costela,102369-Mac Nissin 85g Gal Caipira,4415221-Mac Nissin 85g Gal Caipira C/6 L+p-,4417399-Não Encontrado,102350-Mac Nissin 85g Galinha,102393-Mac Nissin 85g Monica Carne,102440-Mac Nissin 85g Monica Galinha,102407-Mac Nissin 85g Monica Tomate,2724421-Mac Nissin 85g Sabor Fgo Assado C/Limao,775304-Mac Nissin 87g Yakissoba Trad,525200-Mac Nissin 88g Crem Frango,444715-Mac Nissin 88g Crem Picanha,2857790-Mac Nissin 88g Cremoso Molho De Queijo,771406-Mac Renata 500g Ovos Sem Ave Maria,215775-Mac Renata 500g Ovos Sem Espag 8,2368155-Mac Renata 500g Ovos Sem Fidelinho 10,512168-Mac Renata 500g Ovos Sem Furadinho 5,998052-Mac Renata 500g Ovos Sem Linguine,219037-Mac Renata 500g Ovos Sem Padre Nosso,215783-Mac Renata 500g Ovos Sem Parafuso,389420-Mac Renata 500g Ovos Sem Pena,3933881-Maionese Hellmann's 800g Doypack Sachet,2104334-Molho Tom Heinz 300g Sache Tradicional,3995119-Oleo Algodao Liza 900ml",
    mensuracao: "6 dias"
  },
  campanha36: {
    nome: "68856 - SMS - Abastecimento Exclusivo Vitrine 1 Publico 2 05022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes do ciclo de Retenção com CLV A e B",
    abordado: 10221,
    grupoControle: 6083,
    produtos: "601810-Acucar Cristal Alto Alegre 2kg,105570-Acucar Refinado Uniao 1kg,1612930-Agua Min Cristal Select 500ml S/Gas,4413865-Arroz Minueto 5kg Ft Verde,365670-Azeite Andorinha 500ml Extra Virgem Vidro,997765-Bebida Energetica Red Bull 355ml,2866013-Bebida Energetica Red Bull 355ml Sugar Free,2864851-Cerveja Corona 330ml  Extra Long Neck,3993035-Cerveja Spaten 350ml Munich Puro Malte Lata,2771322-Extrato Tomate Elefante 275g Tp,4416422-Não Encontrado,4410980-Feijao Carioca Vo Geralda 1kg Comum,777854-Leite Uht Frimesa 1l Zero Lactose,4343875-Mac Magni 500g Semola Espaguete,4343859-Mac Magni 500g Semola Parafuso,4343867-Mac Magni 500g Semola Penne,2930340-Mac Nissin 75g Caldinho Feijao,2930439-Mac Nissin 75g Canja Galinha,816370-Mac Nissin 80g Hot Calabresa,2947048-Mac Nissin 80g Lamen Carne Desfiada C/Pim,136077-Mac Nissin 85g Bacon,2875659-Mac Nissin 85g Camarao C/ Alho,133043-Mac Nissin 85g Carne,578860-Mac Nissin 85g Carne C/Tomate,4077695-Mac Nissin 85g Chico Bento Milho Na Manteiga,2813017-Mac Nissin 85g Costela,102369-Mac Nissin 85g Gal Caipira,4415221-Mac Nissin 85g Gal Caipira C/6 L+p-,4417399-Não Encontrado,102350-Mac Nissin 85g Galinha,102393-Mac Nissin 85g Monica Carne,102440-Mac Nissin 85g Monica Galinha,102407-Mac Nissin 85g Monica Tomate,2724421-Mac Nissin 85g Sabor Fgo Assado C/Limao,775304-Mac Nissin 87g Yakissoba Trad,525200-Mac Nissin 88g Crem Frango,444715-Mac Nissin 88g Crem Picanha,2857790-Mac Nissin 88g Cremoso Molho De Queijo,771406-Mac Renata 500g Ovos Sem Ave Maria,215775-Mac Renata 500g Ovos Sem Espag 8,2368155-Mac Renata 500g Ovos Sem Fidelinho 10,512168-Mac Renata 500g Ovos Sem Furadinho 5,998052-Mac Renata 500g Ovos Sem Linguine,219037-Mac Renata 500g Ovos Sem Padre Nosso,215783-Mac Renata 500g Ovos Sem Parafuso,389420-Mac Renata 500g Ovos Sem Pena,3933881-Maionese Hellmann's 800g Doypack Sachet,2104334-Molho Tom Heinz 300g Sache Tradicional,3995119-Oleo Algodao Liza 900ml",
    mensuracao: "6 dias"
  },
  campanha37: {
    nome: "68867 - Email - TRADE MKT AMBEV - BDM 350ML PR MS 07022024",
    filtro: "Clientes filiais PR/MS com filtro IdCsdmfilialpreferencial, Clientes com compras nos últimos 90 dias no Grupo 'Cerveja'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "2890887 - Cerveja Brahma 350ml Duplo Malte Lata",
    mensuracao: "8 dias"
  },
  campanha38: {
    nome: "68868 - Email - TRADE MKT AMBEV - BDM 350ML SP 07022024",
    filtro: "Clientes filiais SP com filtro IdCsdmfilialpreferencial,  Clientes com compras nos últimos 90 dias no Grupo 'Cerveja'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "2890887 - Cerveja Brahma 350ml Duplo Malte Lata",
    mensuracao: "8 dias"
  },
  campanha39: {
    nome: "68869 - Email - TRADE MKT AMBEV - BRAHMA CHOPP 350ML PR MS 07022024",
    filtro: "Clientes filiais PR/MS com filtro IdCsdmfilialpreferencial,  Clientes com compras nos últimos 90 dias no Grupo 'Cerveja'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "306550	- Cerveja Brahma 350ml Lata",
    mensuracao: "8 dias"
  },
  campanha40: {
    nome: "68870 - Email - TRADE MKT AMBEV - BRAHMA CHOPP 350ML SP 07022024",
    filtro: "Clientes filiais SP com filtro IdCsdmfilialpreferencial,  Clientes com compras nos últimos 90 dias no Grupo 'Cerveja'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "306550	- Cerveja Brahma 350ml Lata",
    mensuracao: "8 dias"
  },
  campanha39: {
    nome: "68869 - Email - TRADE MKT AMBEV - BRAHMA CHOPP 350ML PR MS 07022024",
    filtro: "Clientes filiais PR/MS com filtro IdCsdmfilialpreferencial,  Clientes com compras nos últimos 90 dias no Grupo 'Cerveja'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "306550	- Cerveja Brahma 350ml Lata",
    mensuracao: "8 dias"
  },
  campanha40: {
    nome: "68870 - Email - TRADE MKT AMBEV - BRAHMA CHOPP 350ML SP 07022024",
    filtro: "Clientes filiais SP com filtro IdCsdmfilialpreferencial,  Clientes com compras nos últimos 90 dias no Grupo 'Cerveja'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "306550	- Cerveja Brahma 350ml Lata",
    mensuracao: "8 dias"
  },
  campanha41: {
    nome: "68871 - Email - TRADE MKT AMBEV - BEATS TROPICAL PR MS 07022024",
    filtro: "Clientes filiais PR/MS com filtro IdCsdmfilialpreferencial,  Clientes com compras nos últimos 90 dias no Grupo 'Aperitivos e demais Destilados'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "4422627 - Bebida Beats 269ml Tropical Long Neck,4422635 - Bebida Beats 269ml Tropical Lata",
    mensuracao: "8 dias"
  },
  campanha42: {
    nome: "68872 - Email - TRADE MKT AMBEV - BEATS TROPICAL SP 07022024",
    filtro: "Clientes filiais SP com filtro IdCsdmfilialpreferencial,  Clientes com compras nos últimos 90 dias no Grupo 'Aperitivos e demais Destilados'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "4422627 - Bebida Beats 269ml Tropical Long Neck,4422635 - Bebida Beats 269ml Tropical Lata",
    mensuracao: "8 dias"
  },
  campanha43: {
    nome: "68858 - E-mail TQV 06022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial,  Clientes propensos Alto e Médio no departamento 'FLV'",
    abordado: 158712,
    grupoControle: 9026,
    produtos: "387312-Ovo Galinha Branco Grande C/20,117250-Limao Taiti Kg,116955-Batata Extra Kg,130400-Cenoura Kg,1011006-Ovo Galinha Branco Grande C/30 Bandejao,117668-Abobora Italia Kg,116866-Melancia Inteira Kg,117870-Mamao Formosa Especial Kg,117870-Mamao Formosa Especial Kg",
    mensuracao: "1 dia"
  },
  campanha44: {
    nome: "68894 - SMS - Campanha Ofertas Limpeza - H&B Disp 2 10022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial,  Clientes propensos Alto e Médio no SubGrupo 'Lava Louças Liquido - Lava Roupas Pó, Pepal Higienico Folha Dupla e Tintuca Cabelo s/Amonia'",
    abordado: 40000,
    grupoControle: 7745,
    produtos: "2946742-Lava Roupa Omo 2,2kg Sanitiza/Higieniza,3947980-Papel Hig Benev L12p11 Fd 30m Neutro,2770032-Lava Louca De Vida 500ml Neutro,4428021-Tintura Cor & Ton",
    mensuracao: "1 dia"
  },
  campanha45: {
    nome: "68893 - SMS - Campanha Ofertas Limpeza - H&B Disp 1 09022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial,  Clientes propensos Alto e Médio no SubGrupo 'Lava Louças Liquido - Lava Roupas Pó, Pepal Higienico Folha Dupla e Tintuca Cabelo s/Amonia'",
    abordado: 40000,
    grupoControle: 7745,
    produtos: "2946742-Lava Roupa Omo 2,2kg Sanitiza/Higieniza,3947980-Papel Hig Benev L12p11 Fd 30m Neutro,2770032-Lava Louca De Vida 500ml Neutro,4428021-Tintura Cor & Ton",
    mensuracao: "2 dias"
  },
  campanha46: {
    nome: "68895 - Push - Campanha Ofertas Limpeza - H&B Disp 1 09022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial,  Clientes propensos Alto e Médio no SubGrupo 'Lava Louças Liquido - Lava Roupas Pó, Pepal Higienico Folha Dupla e Tintuca Cabelo s/Amonia'",
    abordado: 41149,
    grupoControle: 8035,
    produtos: "2946742-Lava Roupa Omo 2,2kg Sanitiza/Higieniza,3947980-Papel Hig Benev L12p11 Fd 30m Neutro,2770032-Lava Louca De Vida 500ml Neutro,4428021-Tintura Cor & Ton",
    mensuracao: "2 dias"
  },
  campanha47: {
    nome: "68896 - Push - Campanha Ofertas Limpeza - H&B Disp 2 10022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial,  Clientes propensos Alto e Médio no SubGrupo 'Lava Louças Liquido - Lava Roupas Pó, Pepal Higienico Folha Dupla e Tintuca Cabelo s/Amonia'",
    abordado: 41149,
    grupoControle: 8035,
    produtos: "2946742-Lava Roupa Omo 2,2kg Sanitiza/Higieniza,3947980-Papel Hig Benev L12p11 Fd 30m Neutro,2770032-Lava Louca De Vida 500ml Neutro,4428021-Tintura Cor & Ton",
    mensuracao: "2 dias"
  },
  campanha48: {
    nome: "68897 - Push - Campanha Ofertas Limpeza - H&B Disp 3 11022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial,  Clientes propensos Alto e Médio no SubGrupo 'Lava Louças Liquido - Lava Roupas Pó, Pepal Higienico Folha Dupla e Tintuca Cabelo s/Amonia'",
    abordado: 41149,
    grupoControle: 8035,
    produtos: "2946742-Lava Roupa Omo 2,2kg Sanitiza/Higieniza,3947980-Papel Hig Benev L12p11 Fd 30m Neutro,2770032-Lava Louca De Vida 500ml Neutro,4428021-Tintura Cor & Ton",
    mensuracao: "2 dias"
  },
  campanha49: {
    nome: "68883 - Email - Jornada Inativos Primeira Semana 08022024",
    filtro: "Base Externa com faixa de Inatividade",
    abordado: 84992,
    grupoControle: 'Apropriação',
    produtos: "2753561-Creme Leite Gloria 200g Tp,165646-Oleo Soja Cocamar 900ml Pet,2837587-Refr Po Tang 18g Uva Intensa,1587285-Refr Po Tang 18g Uva,1587277-Refr Po Tang 18g Tangerina,1587250-Refr Po Tang 18g Morango,1587307-Refr Po Tang 18g Maracuja,1587293-Refr Po Tang 18g Manga,1587196-Refr Po Tang 18g Limao,1587188-Refr Po Tang 18g Laranja/Mamao,2795140-Refr Po Tang 18g Laranja Docinha,1587170-Refr Po Tang 18g Laranja,4079795-Refr Po Tang 18g Guarana,2811405-Refr Po Tang 18g Goiaba,1587218-Refr Po Tang 18g Abacaxi,2022249-Biscoito Bauducco 140g Wafer Triplo,2022060-Biscoito Bauducco 140g Wafer Nozes,2022230-Biscoito Bauducco 140g Wafer Morango,2022044-Biscoito Bauducco 140g Wafer Chocolate,2022052-Biscoito Bauducco 140g Wafer Avela,406740-Lava Louca Ype 500ml Neutro,331635-Lava Louca Ype 500ml Maca,421200-Lava Louca Ype 500ml Limao,4079728-Lava Louca Ype 500ml Green,492442-Lava Louca Ype 500ml Coco,832286-Lava Louca Ype 500ml Clear Care/Guarana,331660-Lava Louca Ype 500ml Clear,2822741-Lava Louca Ype 500ml Capim Limao,3983374-Lava Louca Ype 500ml Antibac,3983374-Lava Louca Ype 500ml Antibac",
    mensuracao: "7 dias"
  },
  campanha50: {
    nome: "68884 - Push - Jornada Inativos Primeira Semana 08022024",
    filtro: "Base Externa com faixa de Inatividade",
    abordado: 41149,
    grupoControle: 'Apropriação',
    produtos: "2753561-Creme Leite Gloria 200g Tp,165646-Oleo Soja Cocamar 900ml Pet,2837587-Refr Po Tang 18g Uva Intensa,1587285-Refr Po Tang 18g Uva,1587277-Refr Po Tang 18g Tangerina,1587250-Refr Po Tang 18g Morango,1587307-Refr Po Tang 18g Maracuja,1587293-Refr Po Tang 18g Manga,1587196-Refr Po Tang 18g Limao,1587188-Refr Po Tang 18g Laranja/Mamao,2795140-Refr Po Tang 18g Laranja Docinha,1587170-Refr Po Tang 18g Laranja,4079795-Refr Po Tang 18g Guarana,2811405-Refr Po Tang 18g Goiaba,1587218-Refr Po Tang 18g Abacaxi,2022249-Biscoito Bauducco 140g Wafer Triplo,2022060-Biscoito Bauducco 140g Wafer Nozes,2022230-Biscoito Bauducco 140g Wafer Morango,2022044-Biscoito Bauducco 140g Wafer Chocolate,2022052-Biscoito Bauducco 140g Wafer Avela,406740-Lava Louca Ype 500ml Neutro,331635-Lava Louca Ype 500ml Maca,421200-Lava Louca Ype 500ml Limao,4079728-Lava Louca Ype 500ml Green,492442-Lava Louca Ype 500ml Coco,832286-Lava Louca Ype 500ml Clear Care/Guarana,331660-Lava Louca Ype 500ml Clear,2822741-Lava Louca Ype 500ml Capim Limao,3983374-Lava Louca Ype 500ml Antibac,3983374-Lava Louca Ype 500ml Antibac",
    mensuracao: "7 dias"
  },
  campanha51: {
    nome: "68891 - Custom Audience - Jornada Inativos Primeira Semana 09022024",
    filtro: "Base Externa com faixa de Inatividade",
    abordado: 98000,
    grupoControle: 'Apropriação',
    produtos: "2753561-Creme Leite Gloria 200g Tp,165646-Oleo Soja Cocamar 900ml Pet,2837587-Refr Po Tang 18g Uva Intensa,1587285-Refr Po Tang 18g Uva,1587277-Refr Po Tang 18g Tangerina,1587250-Refr Po Tang 18g Morango,1587307-Refr Po Tang 18g Maracuja,1587293-Refr Po Tang 18g Manga,1587196-Refr Po Tang 18g Limao,1587188-Refr Po Tang 18g Laranja/Mamao,2795140-Refr Po Tang 18g Laranja Docinha,1587170-Refr Po Tang 18g Laranja,4079795-Refr Po Tang 18g Guarana,2811405-Refr Po Tang 18g Goiaba,1587218-Refr Po Tang 18g Abacaxi,2022249-Biscoito Bauducco 140g Wafer Triplo,2022060-Biscoito Bauducco 140g Wafer Nozes,2022230-Biscoito Bauducco 140g Wafer Morango,2022044-Biscoito Bauducco 140g Wafer Chocolate,2022052-Biscoito Bauducco 140g Wafer Avela,406740-Lava Louca Ype 500ml Neutro,331635-Lava Louca Ype 500ml Maca,421200-Lava Louca Ype 500ml Limao,4079728-Lava Louca Ype 500ml Green,492442-Lava Louca Ype 500ml Coco,832286-Lava Louca Ype 500ml Clear Care/Guarana,331660-Lava Louca Ype 500ml Clear,2822741-Lava Louca Ype 500ml Capim Limao,3983374-Lava Louca Ype 500ml Antibac,3983374-Lava Louca Ype 500ml Antibac",
    mensuracao: "6 dias"
  },
  campanha52: {
    nome: "68904 - SMS - Jornada Inativos Primeira Semana 12022024",
    filtro: "Base Externa com faixa de Inatividade",
    abordado: 71148,
    grupoControle: 'Apropriação',
    produtos: "2753561-Creme Leite Gloria 200g Tp,165646-Oleo Soja Cocamar 900ml Pet,2837587-Refr Po Tang 18g Uva Intensa,1587285-Refr Po Tang 18g Uva,1587277-Refr Po Tang 18g Tangerina,1587250-Refr Po Tang 18g Morango,1587307-Refr Po Tang 18g Maracuja,1587293-Refr Po Tang 18g Manga,1587196-Refr Po Tang 18g Limao,1587188-Refr Po Tang 18g Laranja/Mamao,2795140-Refr Po Tang 18g Laranja Docinha,1587170-Refr Po Tang 18g Laranja,4079795-Refr Po Tang 18g Guarana,2811405-Refr Po Tang 18g Goiaba,1587218-Refr Po Tang 18g Abacaxi,2022249-Biscoito Bauducco 140g Wafer Triplo,2022060-Biscoito Bauducco 140g Wafer Nozes,2022230-Biscoito Bauducco 140g Wafer Morango,2022044-Biscoito Bauducco 140g Wafer Chocolate,2022052-Biscoito Bauducco 140g Wafer Avela,406740-Lava Louca Ype 500ml Neutro,331635-Lava Louca Ype 500ml Maca,421200-Lava Louca Ype 500ml Limao,4079728-Lava Louca Ype 500ml Green,492442-Lava Louca Ype 500ml Coco,832286-Lava Louca Ype 500ml Clear Care/Guarana,331660-Lava Louca Ype 500ml Clear,2822741-Lava Louca Ype 500ml Capim Limao,3983374-Lava Louca Ype 500ml Antibac,3983374-Lava Louca Ype 500ml Antibac",
    mensuracao: "2 dias"
  },
  campanha53: {
    nome: "68928 - Email - Jornada Inativos Segunda Semana 15012024",
    filtro: "Base Externa com faixa de Inatividade",
    abordado: 78781,
    grupoControle: 'Apropriação',
    produtos: "283452-Salsicha Perdigao Kg c Granel,1625233-Leite Condensado Moca 395g Tp,344605-Agua Sanitaria Qboa 2l,2101521-Biscoito Marilan 350g  Cream Cracker Gergelim,444570-Biscoito Marilan 350g  Cream Cracker Manteiga,1609874-Biscoito Marilan 350g  Maizena Chocolate,2122545-Biscoito Marilan 350g  Maizena Integral,429376-Biscoito Marilan 350g Agua Sal,431818-Biscoito Marilan 350g Coco,429384-Biscoito Marilan 350g Cream Cracker,431826-Biscoito Marilan 350g Leite,431834-Biscoito Marilan 350g Maizena,431842-Biscoito Marilan 350g Manteiga,2836033-Choc Lacta 100.8g Bis Black,2075725-Choc Lacta 100.8g Bis Branco,2769530-Choc Lacta 100.8g Bis Oreo,2075687-Choc Lacta 100.8g Bis Original,2887304-Choc Lacta 100.8g C/3 Bis Branco L+ P-,2887290-Choc Lacta 100.8g C/3 Bis Original L+ P-,4398556-Choc Lacta 100.8g C/5 Bis Branco L+ P-,4398530-Choc Lacta 100.8g C/5 Bis Original L+ P-,163449-Leite Uht Lider 1l  Integral",
    mensuracao: "6 dias"
  },
  campanha54: {
    nome: "68929 - Push - Jornada Inativos Segunda Semana 15012024",
    filtro: "Base Externa com faixa de Inatividade",
    abordado: 931,
    grupoControle: 'Apropriação',
    produtos: "283452-Salsicha Perdigao Kg c Granel,1625233-Leite Condensado Moca 395g Tp,344605-Agua Sanitaria Qboa 2l,2101521-Biscoito Marilan 350g  Cream Cracker Gergelim,444570-Biscoito Marilan 350g  Cream Cracker Manteiga,1609874-Biscoito Marilan 350g  Maizena Chocolate,2122545-Biscoito Marilan 350g  Maizena Integral,429376-Biscoito Marilan 350g Agua Sal,431818-Biscoito Marilan 350g Coco,429384-Biscoito Marilan 350g Cream Cracker,431826-Biscoito Marilan 350g Leite,431834-Biscoito Marilan 350g Maizena,431842-Biscoito Marilan 350g Manteiga,2836033-Choc Lacta 100.8g Bis Black,2075725-Choc Lacta 100.8g Bis Branco,2769530-Choc Lacta 100.8g Bis Oreo,2075687-Choc Lacta 100.8g Bis Original,2887304-Choc Lacta 100.8g C/3 Bis Branco L+ P-,2887290-Choc Lacta 100.8g C/3 Bis Original L+ P-,4398556-Choc Lacta 100.8g C/5 Bis Branco L+ P-,4398530-Choc Lacta 100.8g C/5 Bis Original L+ P-,163449-Leite Uht Lider 1l  Integral",
    mensuracao: "6 dias"
  },
  campanha55: {
    nome: "68917 - Email - Reposicao Vitrine 1 Publico 1 15022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes do ciclo de vida: Ativação e Rentabilização - com CLV A-B. Sem compras entre 30 a 15 dias",
    abordado: 40000,
    grupoControle: 8575,
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,2833158-Desinf Pinho Sol 1.75l Lavanda,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,1612832-Arroz Emporio Sao Joao 2kg,4343069-Farinha Trigo Adria 1kg Premium",
    mensuracao: "3 dias"
  },
  campanha56: {
    nome: "68918 - Email - Reposicao Vitrine 1 Publico 2 15022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes do ciclo de vida: Retenção - com CLV A-B",
    abordado: 20118,
    grupoControle: 6501,
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,2833158-Desinf Pinho Sol 1.75l Lavanda,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,1612832-Arroz Emporio Sao Joao 2kg,4343069-Farinha Trigo Adria 1kg Premium",
    mensuracao: "3 dias"
  },
  campanha57: {
    nome: "68921 - Push - Reposicao Vitrine 1 Publico 1 15022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes do ciclo de vida: Ativação e Rentabilização - com CLV A-B. Sem compras entre 30 a 15 dias",
    abordado: 3441,
    grupoControle: "Apropriação",
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,2833158-Desinf Pinho Sol 1.75l Lavanda,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,1612832-Arroz Emporio Sao Joao 2kg,4343069-Farinha Trigo Adria 1kg Premium",
    mensuracao: "3 dias"
  },
  campanha58: {
    nome: "68922 - Push - Reposicao Vitrine 1 Publico 2 15022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes do ciclo de vida: Retenção - com CLV A-B",
    abordado: 121,
    grupoControle: "Apropriação",
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,2833158-Desinf Pinho Sol 1.75l Lavanda,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,1612832-Arroz Emporio Sao Joao 2kg,4343069-Farinha Trigo Adria 1kg Premium",
    mensuracao: "3 dias"
  },
  campanha59: {
    nome: "68919 - SMS - Reposicao Vitrine 1 Publico 1 15022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes do ciclo de vida: Ativação e Rentabilização - com CLV A-B. Sem compras entre 30 a 15 dias",
    abordado: 10000,
    grupoControle: 6489,
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,2833158-Desinf Pinho Sol 1.75l Lavanda,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,1612832-Arroz Emporio Sao Joao 2kg,4343069-Farinha Trigo Adria 1kg Premium",
    mensuracao: "3 dias"
  },
  campanha60: {
    nome: "68920 - SMS - Reposicao Vitrine 1 Publico 2 15022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes do ciclo de vida: Retenção - com CLV A-B",
    abordado: 16534,
    grupoControle: 6076,
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,2833158-Desinf Pinho Sol 1.75l Lavanda,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,1612832-Arroz Emporio Sao Joao 2kg,4343069-Farinha Trigo Adria 1kg Premium",
    mensuracao: "3 dias"
  },
  campanha61: {
    nome: "68976 - Email - TRADE MKT AMBEV - BUDWEISER 350ML PR MS 16022024",
    filtro: "Clientes das filiais PR MS com filtro IdCsdmfilialpreferencial, Clientes com compras nos últimos 90 dias no Grupo 'Cerveja'",
    abordado: 49820,
    grupoControle: 8052,
    produtos: "2007959-Cerveja Budweiser 350ml Lata",
    mensuracao: "13 dias"
  },
  campanha62: {
    nome: "68977 - Email - TRADE MKT AMBEV - BUDWEISER 350ML SP 16022024",
    filtro: "Clientes das filiais MS com filtro IdCsdmfilialpreferencial, Clientes com compras nos últimos 90 dias no Grupo 'Cerveja'",
    abordado: 54864,
    grupoControle: 8174,
    produtos: "2007959-Cerveja Budweiser 350ml Lata",
    mensuracao: "13 dias"
  },
  campanha63: {
    nome: "68970 - Email - TRADE MKT AMBEV - ORIGINAL 350ML PR MS 160220224",
    filtro: "Clientes das filiais PR MS com filtro IdCsdmfilialpreferencial, Clientes propensos Alto Medio e Baixo no grupo 'Cervejas'",
    abordado: 50000,
    grupoControle: 8074,
    produtos: "2859807-Cerveja Antarctica 350ml Original Lata",
    mensuracao: "13 dias"
  },
  campanha64: {
    nome: "68971 - Email - TRADE MKT AMBEV - ORIGINAL 473ML SP 160220224",
    filtro: "Clientes das filiais SP com filtro IdCsdmfilialpreferencial, Clientes com compras nos últimos 90 dias no Grupo 'Cerveja Artesanal e Cerveja Importada'",
    abordado: 5644,
    grupoControle: "Apropriação",
    produtos: "4330463-Cerveja Antarctica 473ml Original Lata",
    mensuracao: "13 dias"
  },
  campanha65: {
    nome: "68972 - Email - TRADE MKT AMBEV - SPATEN 350ML PR MS 16022024",
    filtro: "Clientes das filiais PR MS com filtro IdCsdmfilialpreferencial, Clientes com compras nos últimos 90 dias na Marca 'Heineken'",
    abordado: 30703,
    grupoControle: 7316,
    produtos: "3993035-Cerveja Spaten 350ml Munich Puro Malte Lata",
    mensuracao: "13 dias"
  },
  campanha66: {
    nome: "68973 - Email - TRADE MKT AMBEV - SPATEN 350ML SP 16022024",
    filtro: "Clientes das filiais SP com filtro IdCsdmfilialpreferencial, Clientes com compras nos últimos 90 dias na Marca 'Heineken'",
    abordado: 12495,
    grupoControle: 5431,
    produtos: "3993035-Cerveja Spaten 350ml Munich Puro Malte Lata",
    mensuracao: "13 dias"
  },
  campanha67: {
    nome: "68969 - Custom Audience - Jornada Inativos Segunda Semana 16012024",
    filtro: "Base Externa com faixa de Inatividade",
    abordado: 78776,
    grupoControle: 'Apropriação',
    produtos: "283452-Salsicha Perdigao Kg c Granel,1625233-Leite Condensado Moca 395g Tp,344605-Agua Sanitaria Qboa 2l,2101521-Biscoito Marilan 350g  Cream Cracker Gergelim,444570-Biscoito Marilan 350g  Cream Cracker Manteiga,1609874-Biscoito Marilan 350g  Maizena Chocolate,2122545-Biscoito Marilan 350g  Maizena Integral,429376-Biscoito Marilan 350g Agua Sal,431818-Biscoito Marilan 350g Coco,429384-Biscoito Marilan 350g Cream Cracker,431826-Biscoito Marilan 350g Leite,431834-Biscoito Marilan 350g Maizena,431842-Biscoito Marilan 350g Manteiga,2836033-Choc Lacta 100.8g Bis Black,2075725-Choc Lacta 100.8g Bis Branco,2769530-Choc Lacta 100.8g Bis Oreo,2075687-Choc Lacta 100.8g Bis Original,2887304-Choc Lacta 100.8g C/3 Bis Branco L+ P-,2887290-Choc Lacta 100.8g C/3 Bis Original L+ P-,4398556-Choc Lacta 100.8g C/5 Bis Branco L+ P-,4398530-Choc Lacta 100.8g C/5 Bis Original L+ P-,163449-Leite Uht Lider 1l  Integral",
    mensuracao: "5 dias"
  },
  campanha68: {
    nome: "68953 - Custom Audience - TRADE MKT AMBEV - FAMILIA BEATS 16022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com compras nos ultimos 90 dias no Grupo 'Aperitivos e Demais Destilados'",
    abordado: 27255,
    grupoControle: 7102,
    produtos: "2138158-Bebida Ice Skol 269ml Beats Sense Lata,2886855-Bebida Gt Skol 269ml Beats Lata,4006739-Bebida Ginger Skol 269ml Beats Moscow Mule Lata,4006909-Bebida Mint Skol 269ml Beats Mojito Lata,4328019-Bebida Mista Beats 269ml Caipi Beats Caipirinha,4422635-Não Encontrado,4053478-Bebida Ice Skol 269ml Beats Sense Long Neck,4053524-Bebida Gt Skol 269ml Beats Long Neck,4053524-Bebida Gt Skol 269ml Beats Long Neck,4422627-Não Encontrado,4328019-Bebida Mista Beats 269ml Caipi Beats Caipirinha",
    mensuracao: "13 dias"
  },
  campanha69: {
    nome: "68951 - Custom Audience - TRADE MKT AMBEV - FAMILIA GUARANA 16022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes propensos ao Grupo: 'Refrigerantes'",
    abordado: 49823,
    grupoControle: 8052,
    produtos: "356727-Refrig Antarctica 600ml Guarana Diet Pet,119504-Refrig Antarctica 350ml Guarana Zr Lt,144304-Refrig Antarctica 2l Guarana Zero Pet",
    mensuracao: "13 dias"
  },
  campanha70: {
    nome: "68962 - Custom Audience - TRADE MKT DIA DO GATO - MARS 16022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com compras nos ultimos 90 dias no Departamento 'Pet Shop'",
    abordado: 47049,
    grupoControle: 7976,
    produtos: "4382668Petisco Dreamies 80g Carne Tentadora,4382692Petisco Whiskas 80g Anti Bola Pelo Sache,4382684Petisco Dreamies 80g Salmao Irresistivel,754951Racao Whiskas 2,7kg Carne,754960Racao Whiskas 2,7g Peixe,2729229Racao Whiskas 2,7kg Filhotes,3993191Racao Whiskas 2,7kg Gato Ad 1+ Frango,3993248Racao Whiskas 2,7kg Gato Ad 1+ Salmao,2804743Racao Whiskas L3p2,7kg Carne,4382676Racao Whiskas 2,7kg Gatos Cast 1+ Carne,2799170Alim Whiskas 85g Umid Sache Ad Carne L8p7,2736063Petisco Pedigree 180g Dentastix Rcs m,933260Alim Whiskas 85g Umid Sache Ad Carne,2810050Alim Kitekat 70g Umid Sache Carne Molho,2810077Alim Kitekat 70g Umid Sache Fgo Molho,530417Alim Whiskas 85g Umid Sache Ad Atum,530425-Alim Whiskas 85g Umid Sache Ad Salmao,640824-Alim Whiskas 85g Umid Sache Ad Cordeiro,2752948-Alim Whiskas 85g Umid Sache Ad 7+ Peixe,921530-Alim Whiskas 85g Umid Sache Ad Frango,2810069-Alim Kitekat 70g Umid Sache Peixe Molho,2131900-Alim Whiskas 85g Umid Sache Jelly 1+ Carne,2131927-Alim Whiskas 85g Umid Sache Fil Jelly,2752964-Alim Whiskas 85g Umid Sache Jelly 7+ Carne,640816-Alim Whiskas 85g Umid Sache Fil Fgo,2752972-Alim Whiskas 85g Umid Sache Ad 7+ Carne,530409-Alim Whiskas 85g Umid Sache Fil Carne,3978222-Racao Kitekat 900g  Mix Carne,3978583-Racao Kitekat 2,7kg Mix Carne,1614983-Alim Whiskas 290g Umid Lata Ad Pate Carne,3993264-Racao Whiskas 900g Gato Ad 1+ Frango,3993280-Racao Whiskas 900g Gato Ad 1+ Salmao,235490-Racao Whiskas 500g Carne,1615106-Alim Whiskas 290g Umid Lata Ad Pate Peixe,1615092-Alim Whiskas 290g Umid Lata Ad Pate Atum,2091623-Racao Whiskas 900g Gatos Cast Carne,235512-Racao Whiskas 500g Peixe,1615076-Alim Whiskas 290g Umid Lata Ad Carne Molho,235440-Racao Whiskas 900g Carne,1615068-Alim Whiskas 290g Umid Lata Ad Atum Molho,235482-Racao Whiskas 900g Peixe,754978-Racao Whiskas 900g Frango/Leite,4080289-Racao Whiskas 900g Gatos Cast Peixe,2091615-Racao Whiskas 500g Cast Carne,1615084-Alim Whiskas 290g Umid Lata Ad Pate Fgo,936537-Racao Whiskas 900g Filhotes,755036-Racao Whiskas 500g Filhotes",
    mensuracao: "13 dias"
  },
  campanha71: {
    nome: "68963 - Custom Audience - TRADE MKT DIA DO GATO - SC JOHNSON 16022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com compras nos ultimos 90 dias no Departamento 'Pet Shop'",
    abordado: 47048,
    grupoControle: 7976,
    produtos: "4004108-Desinf Lysoform 500ml Pet Original,4004086-Elimina Odor Lysoform 360ml Aer Original,4004051-Desinf Lysoform 1l Pet Original,4004043-Desinf Lysoform 1l Pet Suave",
    mensuracao: "13 dias"
  },
  campanha72: {
    nome: "68960 - Custom Audience - TRADE MKT ESTRELLA GALICIA 16022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes propensos Alto Medio e Baixo ao Grupo: 'Cerveja'",
    abordado: 49839,
    grupoControle: 8053,
    produtos: "2789922-Cerveja Estrella Galicia 350ml Lager Lata",
    mensuracao: "13 dias"
  },
  campanha73: {
    nome: "68956 - Custom Audience - TRADE MKT MONSTER 16022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com Vendas nos últimos 90 dias ao Grupo: Energéticos",
    abordado: 49924,
    grupoControle: 8055,
    produtos: "2865920-Bebida Energetica Monster 473ml Absolutely Zero,2892456-Bebida Energetica Monster 473ml Dragon Tea Ice,3997731-Bebida Energetica Monster 473ml Dragon Ice Tea Peach,4342208-Bebida Energetica Monster 473ml Juice Tropical Orange,2865890-Bebida Energetica Monster 473ml Mango Loco,3997723-Bebida Energetica Monster 473ml Juice Pacific Punch,4417240-Não Encontrado,2943956-Bebida Energetica Monster 473ml Paradise Zero,2865904-Bebida Energetica Monster 473ml Ultra Violet,4342330-Bebida Energetica Monster 473ml Ultra Watermelon,2777886-Bebida Energetica Monster 473ml Ultra",
    mensuracao: "13 dias"
  },
  campanha74: {
    nome: "68954 - Custom Audience - TRADE MKT NESTLE CHOCOLATES 16022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com Vendas nos últimos 90 dias ao Departamento: 'Merceria Doce'",
    abordado: 49938,
    grupoControle: 8055,
    produtos: "652016-Choc Nestle 38g Sensacao Un,652040-Choc Nestle 32g Chokito Un,652059-Choc Nestle 33g Prestigio Un,652067-Choc Nestle 40g Charge Un,2075660-Choc Garoto 28g Caribe Banana,2767228-Choc Nestle 33g Prestigio Dark Un,2796872-Choc Nestle 33g Prestigio Branco Un,4162986-Chocolate Garoto 25g Crocante 2",
    mensuracao: "13 dias"
  },
  campanha75: {
    nome: "68955 - Custom Audience - TRADE MKT NESTLE MAGGI 16022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com Vendas nos últimos 90 dias ao Departamento: 'Merceria Salgada'",
    abordado: 49928,
    grupoControle: 8055,
    produtos: "100200-Sopa Maggi 68g Cebola,100234-Creme Maggi 68g Cebola,100285-Sopa Maggi 63g Carne C/Conchinhas,114561-Sopa Maggi 60g Galinha C/Fidelini,130222-Sopao Maggi 200g Galinha/Macar/Leg,148040-Canjao Maggi 200g Galinha,148067-Temp Maggi 120g Fondor,150436-Temp Maggi 120g Amac Carne,151700-Temp Maggi 120g Gril Carne,591793-Temp Maggi 49g Meu Segredo,665347-Creme Maggi 78g Queijo,835080-Sopao Maggi 200g Costela,875597-Sopao Maggi 200g Gal Caipira,2824310-Caldo Maggi 57g Bacon,2824345-Caldo Maggi 57g Carne,2824353-Caldo Maggi 57g Galinha,2825317-Caldo Maggi 57g Menos Sodio Galinha,2825333-Caldo Maggi 152g Carne,2825341-Caldo Maggi 114g Galinha,2825376-Caldo Maggi 57g Menos Sodio Carne,2825392-Caldo Maggi 57g Costela,2825422-Caldo Maggi 114g Equilib Menos Sodio Galinha,2825430-Caldo Maggi 152g Galinha,2825449-Caldo Maggi 57g Legumes,2825457-Caldo Maggi 114g Equilib Menos Sodio Carne,2825465-Caldo Maggi 114g Carne,2825481-Caldo Maggi 114g Bacon,2856093-Sopao Maggi 150g Gal/Leg Menos Sodio,2856107-Sopao Maggi 150g Car/Leg Menos Sodio,2856751-Creme Maggi 61g Cebola Menos Sodio,2868610-Caldo Maggi 35g Carne,2928337-Creme Maggi 61g Cebola C/Bacon,2928345-Creme Maggi 61g Cebola C/Queijo,3979245-Caldo Maggi 35g Legumes,3979253-Temp Maggi 49g Meu Segredo Cheiro Verde,3979288-Temp Maggi 49g Meu Segredo Tomate Ervas,3979318-Temp Maggi 95g Toque Defumado Carne Legumes Ovos,3979369-Temp Maggi 49g Meu Segredo Refogado Celoga Alho,3985652-Temp Maggi 50g Sopas,4077180-Sopa Maggi 61g Madioquinha/Frango,4077180-Sopa Maggi 61g Madioquinha/Frango",
    mensuracao: "13 dias"
  },
  campanha76: {
    nome: "68952 - Custom Audience - TRADE MKT PEPSICO VERAO 16022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com Vendas nos últimos 90 dias ao Grupo: Salgadinho",
    abordado: 49927,
    grupoControle: 8055,
    produtos: "3976149-Salgadinho Doritos 300g Queijo Nacho,3976106-Salgadinho Doritos 140g Queijo Nacho,2927993-Salgadinho Doritos 84g Nacho,2928000-Batata Lays 135g Classica,3976203-Batata Lays 135g Creme Cebola,4087445-Batata Lays 68g Rustica Sal Marinho,4087437-Batata Lays 68g Cream Cheese,3976165-Batata Lays 80g Classica,3976351-Batata Lays 80g Creme Cebola,3976424-Batata Ruffles 76g Cebola/Salsa,3976440-Não Encontrado,3976289-Batata Ruffles 76g Original,3976220-Não Encontrado,3976262-Batata Ruffles 115g Churrasco,3976130-Batata Ruffles 115g Sal,2360643-Amendoim Elma Chips 145g Japones,2864304-Não Encontrado,1584731-Amendoim Elma Chips 170g Ovinhos,4083610-Amendoim Elma Chips 130g Ovinhos Barbecue,2864312-Salgadinho Pingo Douro 90g Picanha Grelhada,429694-Salgadinho Pingo Douro 120g Bacon,2720760-Salgadinho Cheetos 115g Mix,758558-Salgadinho Cheetos 125g Lua,2927900-Salgadinho Cheetos 140g Onda Requeijao,2927969-Salgadinho Fandangos 140g Presunto,2927985-Salgadinho Fandangos 140g Queijo,2887398-Aveia Quaker 165g Flocos Finos,2053187-Aveia Quaker 165g Flocos Regular,3959740-Aveia Quaker 450g Flocos Finos,3975614-Aveia Quaker 450g Flocos Regular,3959775-Salgadinho Torcida 100g Churrasco,3959783-Salgadinho Torcida 100g Cebola,3959767-Salgadinho Torcida 100g Pimenta Mexicana,4081102-Salgadinho Torcida 100g Pao De Alho,2868636-Salgadinho Torcida 38g Bacon,2868628-Salgadinho Torcida 38g Calabresa,3959910-Salgadinho Torcida 38g Camarao,2868679-Salgadinho Torcida 38g Cebola,2868660-Salgadinho Torcida 38g Churrasco,2870959-Salgadinho Torcida 38g Costelinha/Limao,4079850-Salgadinho Torcida 38g Pao De Alho,2868652-Salgadinho Torcida 38g Pimenta Mexicana,4328051-Salgadinho Torcida 38g Vinagrete,2794080-Torrada Eqlibri 40g Panetini Cottage C/Erva,3986829-Não Encontrado,2794071-Torrada Eqlibri 40g Panetini Presunto Defumado,1585622-Torrada Eqlibri 40g Panetini Queijo Suave,4344537-Batata Ruffles 134g Tubo Original,4344545-Batata Ruffles 134g Tubo Cream Cebola,4344529-Batata Ruffles 134g Tubo Cheddar,4415205-Salgadinho Cheetos 78g Crunchy White Cheddar,4415213-Salgadinho Cheetos 78g Crunchy Super Cheddar",
    mensuracao: "13 dias"
  },
  campanha77: {
    nome: "68961 - Custom Audience - TRADE MKT SCHWEPPES 16022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes Propensos Alto Medio e Baixo Relacionamento ao SubGrupo: Agua Tonica",
    abordado: 29975,
    grupoControle: 7274,
    produtos: "4054113-Bebida Mista Schweppes 310ml Vodka/Citrus Premium Lt,4054156-Bebida Mista Schweppes 310ml Spritz Premium Lata,4080050-Gin Schweppes 310ml Tonica Pink Amora,4054229-Gin Schweppes 310ml Tonica Premium,4429435-Não Encontrado,4041526-Refrig Schweppes 220ml Ginger Ale,2943948-Agua Tonica Schweppes 220ml Zero Acucar Lt,4331770-Agua Tonica Schweppes 220ml Limao Toque Sal",
    mensuracao: "13 dias"
  },
  campanha78: {
    nome: "68959 - Custom Audience - TRADE MKT THEREZOPOLIS 16022024",
    filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com Vendas nos últimos 90 dias ao Grupo: Cerveja",
    abordado: 7720,
    grupoControle: "Apropriação",
    produtos: "1862413-Cerveja Therezopolis 355ml Gold l Neck",
    mensuracao: "13 dias"
  },
  campanha79: {
      nome: "68979 - Push - TRADE MKT PEPSICO VERAO 19022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com Vendas nos últimos 90 dias ao Grupo: Cerveja",
      abordado: 6269,
      grupoControle: "Apropriação",
      produtos: "3976149-Salgadinho Doritos 300g Queijo Nacho,3976106-Salgadinho Doritos 140g Queijo Nacho,2927993-Salgadinho Doritos 84g Nacho,2928000-Batata Lays 135g Classica,3976203-Batata Lays 135g Creme Cebola,4087445-Batata Lays 68g Rustica Sal Marinho,4087437-Batata Lays 68g Cream Cheese,3976165-Batata Lays 80g Classica,3976351-Batata Lays 80g Creme Cebola,3976424-Batata Ruffles 76g Cebola/Salsa,3976440-Não Encontrado,3976289-Batata Ruffles 76g Original,3976220-Não Encontrado,3976262-Batata Ruffles 115g Churrasco,3976130-Batata Ruffles 115g Sal,2360643-Amendoim Elma Chips 145g Japones,2864304-Não Encontrado,1584731-Amendoim Elma Chips 170g Ovinhos,4083610-Amendoim Elma Chips 130g Ovinhos Barbecue,2864312-Salgadinho Pingo Douro 90g Picanha Grelhada,429694-Salgadinho Pingo Douro 120g Bacon,2720760-Salgadinho Cheetos 115g Mix,758558-Salgadinho Cheetos 125g Lua,2927900-Salgadinho Cheetos 140g Onda Requeijao,2927969-Salgadinho Fandangos 140g Presunto,2927985-Salgadinho Fandangos 140g Queijo,2887398-Aveia Quaker 165g Flocos Finos,2053187-Aveia Quaker 165g Flocos Regular,3959740-Aveia Quaker 450g Flocos Finos,3975614-Aveia Quaker 450g Flocos Regular,3959775-Salgadinho Torcida 100g Churrasco,3959783-Salgadinho Torcida 100g Cebola,3959767-Salgadinho Torcida 100g Pimenta Mexicana,4081102-Salgadinho Torcida 100g Pao De Alho,2868636-Salgadinho Torcida 38g Bacon,2868628-Salgadinho Torcida 38g Calabresa,3959910-Salgadinho Torcida 38g Camarao,2868679-Salgadinho Torcida 38g Cebola,2868660-Salgadinho Torcida 38g Churrasco,2870959-Salgadinho Torcida 38g Costelinha/Limao,4079850-Salgadinho Torcida 38g Pao De Alho,2868652-Salgadinho Torcida 38g Pimenta Mexicana,4328051-Salgadinho Torcida 38g Vinagrete,2794080-Torrada Eqlibri 40g Panetini Cottage C/Erva,3986829-Não Encontrado,2794071-Torrada Eqlibri 40g Panetini Presunto Defumado,1585622-Torrada Eqlibri 40g Panetini Queijo Suave,4344537-Batata Ruffles 134g Tubo Original,4344545-Batata Ruffles 134g Tubo Cream Cebola,4344529-Batata Ruffles 134g Tubo Cheddar,4415205-Salgadinho Cheetos 78g Crunchy White Cheddar,4415213-Salgadinho Cheetos 78g Crunchy Super Cheddar",
      mensuracao: "10 dias"
    },
    campanha80: {
      nome: "68980 - SMS - Jornada Inativos Segunda Semana 19012024",
      filtro: "Base Externa",
      abordado: 68871,
      grupoControle: "Apropriação",
      produtos: "283452-Salsicha Perdigao Kg c Granel,1625233-Leite Condensado Moca 395g Tp,344605-Agua Sanitaria Qboa 2l,2101521-Biscoito Marilan 350g  Cream Cracker Gergelim,444570-Biscoito Marilan 350g  Cream Cracker Manteiga,1609874-Biscoito Marilan 350g  Maizena Chocolate,2122545-Biscoito Marilan 350g  Maizena Integral,429376-Biscoito Marilan 350g Agua Sal,431818-Biscoito Marilan 350g Coco,429384-Biscoito Marilan 350g Cream Cracker,431826-Biscoito Marilan 350g Leite,431834-Biscoito Marilan 350g Maizena,431842-Biscoito Marilan 350g Manteiga,2836033-Choc Lacta 100,8g Bis Black,2075725-Choc Lacta 100.8g Bis Branco,2769530-Choc Lacta 100.8g Bis Oreo,2075687-Choc Lacta 100.8g Bis Original,2887304-Choc Lacta 100.8g C/3 Bis Branco L+ P-,2887290-Choc Lacta 100.8g C/3 Bis Original L+ P-,4398556-Choc Lacta 100.8g C/5 Bis Branco L+ P-,4398530-Choc Lacta 100.8g C/5 Bis Original L+ P-,163449-Leite Uht Lider 1l  Integral",
      mensuracao: "2 dias"
    },
    campanha81: {
      nome: "68981 - Custom Audience - TRADE MKT COCA COLA - SPRITE 19022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes propensos a Alto Medio e Baixo no Grupo: Refrigerantes",
      abordado: 50000,
      grupoControle: 8057,
      produtos: "2839105-Refrig Sprite 510ml Lemon Fresh Pet, 2874873-Refrig Sprite 1,5l Fresh Limao Pet",
      mensuracao: "10 dias"
    },
    campanha82: {
      nome: "68987 - Email - Festival Congelados Publico 1 20022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes propensos a Alto e Medio nos SubGrupos: Lanches Prontos Lasanha Pizza Congelada Pizza Refrigerada Pratos Prontos",
      abordado: 67899,
      grupoControle: 8414,
      produtos: "4395018-Creme Acai Ultracai 1l Tradicional,4395069-Creme Acai Ultracai 220ml Tradicional C/Granola,2771764-Sorv Nestle 1.5l Napolitano Tradicional,2148617-Sorv Nestle 1.5l Prestigio,4000641-Sorv Nobrelli 1.5l Tentazione Morango,861464-Sorv Kibon 92g Classico Mini Eskibon,2868326-Sorv Kibon Magnum 92g Bites,2838990-Sorv Kibon 800ml Ovomaltine,2082438-Sorv Kibon 1.5l Cremosissimo Chicabon,2868920-Pizza Perdigao 460g Napolitana,2804093-Lasanha Forno Minas 600g Bolonhesa,1819020-Pao Queijo Forno Minas 400g Tradicional,618390-Hamb Seara 672g Texas Burguer,996610-Hot Pocket Sadia 145g X-Bacon,2945126-Massa Seara 300g Mac'n Cheese Bacon",
      mensuracao: "5 dias"
    },
    campanha83: {
      nome: "68990 - Email - Festival Congelados Publico 2 20022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes propensos Baixo e Não Propenso nos SubGrupos: Lanches Prontos Lasanha Pizza Congelada Pizza Refrigerada Pratos Prontos",
      abordado: 128893,
      grupoControle: 8893,
      produtos: "4395018-Creme Acai Ultracai 1l Tradicional,4395069-Creme Acai Ultracai 220ml Tradicional C/Granola,2771764-Sorv Nestle 1.5l Napolitano Tradicional,2148617-Sorv Nestle 1.5l Prestigio,4000641-Sorv Nobrelli 1.5l Tentazione Morango,861464-Sorv Kibon 92g Classico Mini Eskibon,2868326-Sorv Kibon Magnum 92g Bites,2838990-Sorv Kibon 800ml Ovomaltine,2082438-Sorv Kibon 1.5l Cremosissimo Chicabon,2868920-Pizza Perdigao 460g Napolitana,2804093-Lasanha Forno Minas 600g Bolonhesa,1819020-Pao Queijo Forno Minas 400g Tradicional,618390-Hamb Seara 672g Texas Burguer,996610-Hot Pocket Sadia 145g X-Bacon,2945126-Massa Seara 300g Mac'n Cheese Bacon",
      mensuracao: "5 dias"
    },
    campanha84: {
      nome: "68995 - Email - Inativos Exclusivo Publico 1 20022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Com compras Setembro Outubro e Novembro. Sem compras de Dezembro a Fevereiro",
      abordado: 74414,
      grupoControle: 8507,
      produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,4065042-Des Above 150ml Aer Fem Cream Light,4065050-Des Above 150ml Aer Fem Cream Shine,4391799-Des Above 150ml Aer Fem Cream Vanilla,4079566-Des Above 150ml Aer Masc Elements Carbon,4079582-Des Above 150ml Aer Masc Elements Shiny Silver,2833158-Desinf Pinho Sol 1.75l Lavanda,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,3998789-Esc Dent Jadepro C/2 Pro Slim Macia,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,2094118-Prot Solar Nivea 200ml Fps 50 Hidratante,2872099-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot 100ml,2872145-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot Kids 100ml,4428609-Não Encontrado,4332806-Sab Francis 90g C/6 Classico Cerejeira Ylang L+p-,4332890-Sab Francis 90g C/6 Classico Rosa Branca Pattchouli L+p-,1876449-Sab Granado 90g Glicerina Calendula,1876600-Sab Granado 90g Glicerina Castanha,195294-Sab Granado 90g Glicerina Trad,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade,2770830-Sh Head Shoulders 200ml Rem Oleosidade",
      mensuracao: "5 dias"
    },
    campanha85: {
      nome: "69007 - Email - Inativos Exclusivo Publico 2 20022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Ciclo de Vida: Retenção CLV; B-C",
      abordado: 98678,
      grupoControle: 8678,
      produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,4065042-Des Above 150ml Aer Fem Cream Light,4065050-Des Above 150ml Aer Fem Cream Shine,4391799-Des Above 150ml Aer Fem Cream Vanilla,4079566-Des Above 150ml Aer Masc Elements Carbon,4079582-Des Above 150ml Aer Masc Elements Shiny Silver,2833158-Desinf Pinho Sol 1.75l Lavanda,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,3998789-Esc Dent Jadepro C/2 Pro Slim Macia,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,2094118-Prot Solar Nivea 200ml Fps 50 Hidratante,2872099-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot 100ml,2872145-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot Kids 100ml,4428609-Não Encontrado,4332806-Sab Francis 90g C/6 Classico Cerejeira Ylang L+p-,4332890-Sab Francis 90g C/6 Classico Rosa Branca Pattchouli L+p-,1876449-Sab Granado 90g Glicerina Calendula,1876600-Sab Granado 90g Glicerina Castanha,195294-Sab Granado 90g Glicerina Trad,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade,2770830-Sh Head Shoulders 200ml Rem Oleosidade",
      mensuracao: "5 dias"
    },
    campanha86: {
      nome: "69019 - Email - Saldao Quebra Preco Publico 1 20022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Ciclo de Vida: Ativação;Rentabilização CLV: C - Sem compras Entre 30 dias a 15 dias",
      abordado: 59149,
      grupoControle: 8263,
      produtos: "115460-Cerveja Antarctica 350ml Lata,3993469-Refrig Coca-Cola 350ml Lata C/6 L+ P- Scb,552445-Bebida Lac Danette 200ml Chocolate,1587170-Refr Po Tang 18g Laranja,137189-Farofa Mandioca Yoki 400g,4079906-Oleo Comp Olivia 500ml Misto,1827626-Vinagre Belmont 750ml Alcool Trad,505102-Maionese Arisco 500g Trad Pet,1816241-Ketchup Siamar 400g Tradicional,4397240-Areia Sanitaria New Dots 4kg Pcte,170917-Marg Qualy 500g  C/Sal,4064852-Manteiga Lider 200g C/Sal,2862972-Leite Po Ccgl 400g Integral Instantaneo,2756293-Agua Sanitaria Ype 5l Bomb,4002296-Lava Roupa Assim 1.6kg Po Triplacao,4411129-Sabao Ype 900g Barra Neutro Original 10%desc,2043068-Lava Roupa Omo 3l Liq Lavagem Perfeita,2945657-Sard Nautique 125g Cons Oleo,3934705-Atum 88 Ralado 140g Ralado C/Oleo,175480-Pipoca Vanessa 50g Doce,2365306-Goma Mascar Mentos 56g Up2u Menta/Tutti Frutti,2839725-Goma Mascar Mentos 8.5g Pure Fresh Mint,2877619-Bala Haribo 100g Cream Kiss Moran/Nata,2868636-Salgadinho Torcida 38g Bacon,927651-Pao Mel Barion 90g,4003985-Limp Azulim 500ml Kit Economico L+p-,187518-Desinf Lysoform 1l Original,2771764-Sorv Nestle 1.5l Napolitano Tradicional,2931389-Hamb Chuletao 56g Misto,2127679-Lasanha Rezende 600g Bolonhesa,2061309-Tekitos Seara 300g Tradicional,934224-Steak Lar 100g Frango Congelado,689580-Steak Seara 100g Empanado Tradicional,926531-Balde Sanremo 8l Oba Color,3985334-Bebida Lac Lactobom 510g Morango,2930455-Bebida Lact Very Gurt 1.250g Morango,4343905-Mac Magni 500g Semola C/Ovos Espaguete,4003756-Mac Magni 85g Instant Gal Caipira,2861259-Azeitona Verde La Violetera 120g S/Caroco,2870762-Mist Lactea Mococa 200g Creme De Leite,4069145-Cafe Fazenda Mineira 500g Almofada,2088290-Biscoito Bauducco 25g Barrinha Choc,2763974-Leite Condensado Tirol 395g Tp,759813-Bombom Garoto  16.5g Serenata Amor Leite,4376358-Tomate Pelado Magni 400g Inteiro,2857740-Não Encontrado,4411650-Cr Trat Tresemme 200ml Leave-In Reconstrucao/Forca,329525-Esm Risque 8ml Nat Renda,4421850-Não Encontrado,4421930-Não Encontrado,4429125-Não Encontrado,1579177-Panettone Da Casa 400g Frutas,944300-Pao  Forma 450g Tradicional,3978850-Papel Hig Mili Bianco C/12 30m Folha Dupla Neutro,771724-Presunto Seara Kg Cozido Peca,2881578-Queijo Ralado Matilat 40g Parmetto,4397266-Racao Buzz Dog 5kg Caes Adultos Carne,2872692-Sab Deoline 1l Liq Erva Doce,2715198-Salsicha Hot Dog Kg Granel Cong,4397282-Tapete New Dots 60x60cm Higenico C/28 Un,2761734-Tint Beauty Color 2.0 Bela&cor Preto,2751003-Jarra Sanremo 2l Vac Freezer,999539-Requeijao Carolina 180g Trad Cremoso C/ Amido,2083450-Pano Scotch Brite 29x29cm Limpeza Esfrega C/2,507881-Suco Kapo 200ml Uva,2760150-Batata Uai 2kg Palito Pre Frita,4343875-Mac Magni 500g Semola Espaguete,989398-Cerveja Skol 269ml Pilsen Lata,4329619-Vinagre Magni 750ml Alcool,4422503-Não Encontrado,2811979-File Merluza Iglu 800g,415260-Maionese Suavit 500g Pote,2801566-Batata Bem Brasil 2kg Mais Batata Congelada,912786-Molho Tom Stella D'oro 300g Sache Refog,1810740-Oleo Composto Olinda 500ml,3935418-Queijo Ralado Kunzler 40g Brasileirinho,2730600-Azeitona Verde Zaeli 150g S/Caroco Pouch,639850-Refrig Coca-Cola 350ml Lata C/6 L+ P-,2872757-Lava Roupa Omo 2.2kg Lavagem Perfeita,4390253-Queijo Ralado Kiformaggio 40g Tradicional,4063384-Amac Downy 1l Conc Brisa Intenso,503215-Molho Tom Salsaretti 300g Trad Sache",
      mensuracao: "0 dia"
    },
    campanha87: {
      nome: "69020 - Email - Saldao Quebra Preco Publico 2 20022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Ciclo de Vida: Retenção CLV: B",
      abordado: 17791,
      grupoControle: 6238,
      produtos: "115460-Cerveja Antarctica 350ml Lata,3993469-Refrig Coca-Cola 350ml Lata C/6 L+ P- Scb,552445-Bebida Lac Danette 200ml Chocolate,1587170-Refr Po Tang 18g Laranja,137189-Farofa Mandioca Yoki 400g,4079906-Oleo Comp Olivia 500ml Misto,1827626-Vinagre Belmont 750ml Alcool Trad,505102-Maionese Arisco 500g Trad Pet,1816241-Ketchup Siamar 400g Tradicional,4397240-Areia Sanitaria New Dots 4kg Pcte,170917-Marg Qualy 500g  C/Sal,4064852-Manteiga Lider 200g C/Sal,2862972-Leite Po Ccgl 400g Integral Instantaneo,2756293-Agua Sanitaria Ype 5l Bomb,4002296-Lava Roupa Assim 1.6kg Po Triplacao,4411129-Sabao Ype 900g Barra Neutro Original 10%desc,2043068-Lava Roupa Omo 3l Liq Lavagem Perfeita,2945657-Sard Nautique 125g Cons Oleo,3934705-Atum 88 Ralado 140g Ralado C/Oleo,175480-Pipoca Vanessa 50g Doce,2365306-Goma Mascar Mentos 56g Up2u Menta/Tutti Frutti,2839725-Goma Mascar Mentos 8.5g Pure Fresh Mint,2877619-Bala Haribo 100g Cream Kiss Moran/Nata,2868636-Salgadinho Torcida 38g Bacon,927651-Pao Mel Barion 90g,4003985-Limp Azulim 500ml Kit Economico L+p-,187518-Desinf Lysoform 1l Original,2771764-Sorv Nestle 1.5l Napolitano Tradicional,2931389-Hamb Chuletao 56g Misto,2127679-Lasanha Rezende 600g Bolonhesa,2061309-Tekitos Seara 300g Tradicional,934224-Steak Lar 100g Frango Congelado,689580-Steak Seara 100g Empanado Tradicional,926531-Balde Sanremo 8l Oba Color,3985334-Bebida Lac Lactobom 510g Morango,2930455-Bebida Lact Very Gurt 1.250g Morango,4343905-Mac Magni 500g Semola C/Ovos Espaguete,4003756-Mac Magni 85g Instant Gal Caipira,2861259-Azeitona Verde La Violetera 120g S/Caroco,2870762-Mist Lactea Mococa 200g Creme De Leite,4069145-Cafe Fazenda Mineira 500g Almofada,2088290-Biscoito Bauducco 25g Barrinha Choc,2763974-Leite Condensado Tirol 395g Tp,759813-Bombom Garoto  16.5g Serenata Amor Leite,4376358-Tomate Pelado Magni 400g Inteiro,2857740-Não Encontrado,4411650-Cr Trat Tresemme 200ml Leave-In Reconstrucao/Forca,329525-Esm Risque 8ml Nat Renda,4421850-Não Encontrado,4421930-Não Encontrado,4429125-Não Encontrado,1579177-Panettone Da Casa 400g Frutas,944300-Pao  Forma 450g Tradicional,3978850-Papel Hig Mili Bianco C/12 30m Folha Dupla Neutro,771724-Presunto Seara Kg Cozido Peca,2881578-Queijo Ralado Matilat 40g Parmetto,4397266-Racao Buzz Dog 5kg Caes Adultos Carne,2872692-Sab Deoline 1l Liq Erva Doce,2715198-Salsicha Hot Dog Kg Granel Cong,4397282-Tapete New Dots 60x60cm Higenico C/28 Un,2761734-Tint Beauty Color 2.0 Bela&cor Preto,2751003-Jarra Sanremo 2l Vac Freezer,999539-Requeijao Carolina 180g Trad Cremoso C/ Amido,2083450-Pano Scotch Brite 29x29cm Limpeza Esfrega C/2,507881-Suco Kapo 200ml Uva,2760150-Batata Uai 2kg Palito Pre Frita,4343875-Mac Magni 500g Semola Espaguete,989398-Cerveja Skol 269ml Pilsen Lata,4329619-Vinagre Magni 750ml Alcool,4422503-Não Encontrado,2811979-File Merluza Iglu 800g,415260-Maionese Suavit 500g Pote,2801566-Batata Bem Brasil 2kg Mais Batata Congelada,912786-Molho Tom Stella D'oro 300g Sache Refog,1810740-Oleo Composto Olinda 500ml,3935418-Queijo Ralado Kunzler 40g Brasileirinho,2730600-Azeitona Verde Zaeli 150g S/Caroco Pouch,639850-Refrig Coca-Cola 350ml Lata C/6 L+ P-,2872757-Lava Roupa Omo 2.2kg Lavagem Perfeita,4390253-Queijo Ralado Kiformaggio 40g Tradicional,4063384-Amac Downy 1l Conc Brisa Intenso,503215-Molho Tom Salsaretti 300g Trad Sache",
      mensuracao: "0 dias"
    },
  campanha88: {
      nome: "68989 - Push - Festival Congelados Publico 1 20022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes propensos a Alto e Medio nos SubGrupos: Lanches Prontos Lasanha Pizza Congelada Pizza Refrigerada Pratos Prontos",
      abordado: 21144,
      grupoControle: 6605,
      produtos: "4395018-Creme Acai Ultracai 1l Tradicional,4395069-Creme Acai Ultracai 220ml Tradicional C/Granola,2771764-Sorv Nestle 1.5l Napolitano Tradicional,2148617-Sorv Nestle 1.5l Prestigio,4000641-Sorv Nobrelli 1.5l Tentazione Morango,861464-Sorv Kibon 92g Classico Mini Eskibon,2868326-Sorv Kibon Magnum 92g Bites,2838990-Sorv Kibon 800ml Ovomaltine,2082438-Sorv Kibon 1.5l Cremosissimo Chicabon,2868920-Pizza Perdigao 460g Napolitana,2804093-Lasanha Forno Minas 600g Bolonhesa,1819020-Pao Queijo Forno Minas 400g Tradicional,618390-Hamb Seara 672g Texas Burguer,996610-Hot Pocket Sadia 145g X-Bacon,2945126-Massa Seara 300g Mac'n Cheese Bacon",
      mensuracao: "5 dias"
  },
  campanha89: {
      nome: "68992 - Push - Festival Congelados Publico 2 20022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes propensos Baixo e Não Propenso nos SubGrupos: Lanches Prontos Lasanha Pizza Congelada Pizza Refrigerada Pratos Prontos",
      abordado: 56722,
      grupoControle: 8214,
      produtos: "4395018-Creme Acai Ultracai 1l Tradicional,4395069-Creme Acai Ultracai 220ml Tradicional C/Granola,2771764-Sorv Nestle 1.5l Napolitano Tradicional,2148617-Sorv Nestle 1.5l Prestigio,4000641-Sorv Nobrelli 1.5l Tentazione Morango,861464-Sorv Kibon 92g Classico Mini Eskibon,2868326-Sorv Kibon Magnum 92g Bites,2838990-Sorv Kibon 800ml Ovomaltine,2082438-Sorv Kibon 1.5l Cremosissimo Chicabon,2868920-Pizza Perdigao 460g Napolitana,2804093-Lasanha Forno Minas 600g Bolonhesa,1819020-Pao Queijo Forno Minas 400g Tradicional,618390-Hamb Seara 672g Texas Burguer,996610-Hot Pocket Sadia 145g X-Bacon,2945126-Massa Seara 300g Mac'n Cheese Bacon",
      mensuracao: "5 dias"
  },
  campanha90: {
      nome: "69008 - SMS - Inativos Exclusivo Publico 1 20022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Com compras Setembro Outubro e Novembro. Sem compras de Dezembro a Fevereiro",
      abordado: 15000,
      grupoControle: 5856,
      produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,4065042-Des Above 150ml Aer Fem Cream Light,4065050-Des Above 150ml Aer Fem Cream Shine,4391799-Des Above 150ml Aer Fem Cream Vanilla,4079566-Des Above 150ml Aer Masc Elements Carbon,4079582-Des Above 150ml Aer Masc Elements Shiny Silver,2833158-Desinf Pinho Sol 1.75l Lavanda,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,3998789-Esc Dent Jadepro C/2 Pro Slim Macia,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,2094118-Prot Solar Nivea 200ml Fps 50 Hidratante,2872099-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot 100ml,2872145-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot Kids 100ml,4428609-Não Encontrado,4332806-Sab Francis 90g C/6 Classico Cerejeira Ylang L+p-,4332890-Sab Francis 90g C/6 Classico Rosa Branca Pattchouli L+p-,1876449-Sab Granado 90g Glicerina Calendula,1876600-Sab Granado 90g Glicerina Castanha,195294-Sab Granado 90g Glicerina Trad,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade,2770830-Sh Head Shoulders 200ml Rem Oleosidade",
      mensuracao: "5 dias"
    },
    campanha91: {
      nome: "69009 - SMS - Inativos Exclusivo Publico 2 20022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Ciclo de Vida: Retenção CLV; B-C",
      abordado: 15000,
      grupoControle: 5856,
      produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,4065042-Des Above 150ml Aer Fem Cream Light,4065050-Des Above 150ml Aer Fem Cream Shine,4391799-Des Above 150ml Aer Fem Cream Vanilla,4079566-Des Above 150ml Aer Masc Elements Carbon,4079582-Des Above 150ml Aer Masc Elements Shiny Silver,2833158-Desinf Pinho Sol 1.75l Lavanda,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,3998789-Esc Dent Jadepro C/2 Pro Slim Macia,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,2094118-Prot Solar Nivea 200ml Fps 50 Hidratante,2872099-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot 100ml,2872145-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot Kids 100ml,4428609-Não Encontrado,4332806-Sab Francis 90g C/6 Classico Cerejeira Ylang L+p-,4332890-Sab Francis 90g C/6 Classico Rosa Branca Pattchouli L+p-,1876449-Sab Granado 90g Glicerina Calendula,1876600-Sab Granado 90g Glicerina Castanha,195294-Sab Granado 90g Glicerina Trad,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade,2770830-Sh Head Shoulders 200ml Rem Oleosidade",
      mensuracao: "5 dias"
    },
    campanha92: {
      nome: "69021 - SMS - Saldao Quebra Preco Publico 1 20022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Ciclo de Vida: Ativação;Rentabilização CLV: C - Sem compras Entre 30 dias a 15 dias",
      abordado: 15000,
      grupoControle: 5856,
      produtos: "115460-Cerveja Antarctica 350ml Lata,3993469-Refrig Coca-Cola 350ml Lata C/6 L+ P- Scb,552445-Bebida Lac Danette 200ml Chocolate,1587170-Refr Po Tang 18g Laranja,137189-Farofa Mandioca Yoki 400g,4079906-Oleo Comp Olivia 500ml Misto,1827626-Vinagre Belmont 750ml Alcool Trad,505102-Maionese Arisco 500g Trad Pet,1816241-Ketchup Siamar 400g Tradicional,4397240-Areia Sanitaria New Dots 4kg Pcte,170917-Marg Qualy 500g  C/Sal,4064852-Manteiga Lider 200g C/Sal,2862972-Leite Po Ccgl 400g Integral Instantaneo,2756293-Agua Sanitaria Ype 5l Bomb,4002296-Lava Roupa Assim 1.6kg Po Triplacao,4411129-Sabao Ype 900g Barra Neutro Original 10%desc,2043068-Lava Roupa Omo 3l Liq Lavagem Perfeita,2945657-Sard Nautique 125g Cons Oleo,3934705-Atum 88 Ralado 140g Ralado C/Oleo,175480-Pipoca Vanessa 50g Doce,2365306-Goma Mascar Mentos 56g Up2u Menta/Tutti Frutti,2839725-Goma Mascar Mentos 8.5g Pure Fresh Mint,2877619-Bala Haribo 100g Cream Kiss Moran/Nata,2868636-Salgadinho Torcida 38g Bacon,927651-Pao Mel Barion 90g,4003985-Limp Azulim 500ml Kit Economico L+p-,187518-Desinf Lysoform 1l Original,2771764-Sorv Nestle 1.5l Napolitano Tradicional,2931389-Hamb Chuletao 56g Misto,2127679-Lasanha Rezende 600g Bolonhesa,2061309-Tekitos Seara 300g Tradicional,934224-Steak Lar 100g Frango Congelado,689580-Steak Seara 100g Empanado Tradicional,926531-Balde Sanremo 8l Oba Color,3985334-Bebida Lac Lactobom 510g Morango,2930455-Bebida Lact Very Gurt 1.250g Morango,4343905-Mac Magni 500g Semola C/Ovos Espaguete,4003756-Mac Magni 85g Instant Gal Caipira,2861259-Azeitona Verde La Violetera 120g S/Caroco,2870762-Mist Lactea Mococa 200g Creme De Leite,4069145-Cafe Fazenda Mineira 500g Almofada,2088290-Biscoito Bauducco 25g Barrinha Choc,2763974-Leite Condensado Tirol 395g Tp,759813-Bombom Garoto  16.5g Serenata Amor Leite,4376358-Tomate Pelado Magni 400g Inteiro,2857740-Não Encontrado,4411650-Cr Trat Tresemme 200ml Leave-In Reconstrucao/Forca,329525-Esm Risque 8ml Nat Renda,4421850-Não Encontrado,4421930-Não Encontrado,4429125-Não Encontrado,1579177-Panettone Da Casa 400g Frutas,944300-Pao  Forma 450g Tradicional,3978850-Papel Hig Mili Bianco C/12 30m Folha Dupla Neutro,771724-Presunto Seara Kg Cozido Peca,2881578-Queijo Ralado Matilat 40g Parmetto,4397266-Racao Buzz Dog 5kg Caes Adultos Carne,2872692-Sab Deoline 1l Liq Erva Doce,2715198-Salsicha Hot Dog Kg Granel Cong,4397282-Tapete New Dots 60x60cm Higenico C/28 Un,2761734-Tint Beauty Color 2.0 Bela&cor Preto,2751003-Jarra Sanremo 2l Vac Freezer,999539-Requeijao Carolina 180g Trad Cremoso C/ Amido,2083450-Pano Scotch Brite 29x29cm Limpeza Esfrega C/2,507881-Suco Kapo 200ml Uva,2760150-Batata Uai 2kg Palito Pre Frita,4343875-Mac Magni 500g Semola Espaguete,989398-Cerveja Skol 269ml Pilsen Lata,4329619-Vinagre Magni 750ml Alcool,4422503-Não Encontrado,2811979-File Merluza Iglu 800g,415260-Maionese Suavit 500g Pote,2801566-Batata Bem Brasil 2kg Mais Batata Congelada,912786-Molho Tom Stella D'oro 300g Sache Refog,1810740-Oleo Composto Olinda 500ml,3935418-Queijo Ralado Kunzler 40g Brasileirinho,2730600-Azeitona Verde Zaeli 150g S/Caroco Pouch,639850-Refrig Coca-Cola 350ml Lata C/6 L+ P-,2872757-Lava Roupa Omo 2.2kg Lavagem Perfeita,4390253-Queijo Ralado Kiformaggio 40g Tradicional,4063384-Amac Downy 1l Conc Brisa Intenso,503215-Molho Tom Salsaretti 300g Trad Sache",
      mensuracao: "0 dia"
    },
    campanha93: {
      nome: "69043 - Custom Audience - TRADE MKT SEARA 21022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Ciclo de Vida: Ativação;Rentabilização CLV: C - Sem compras Entre 30 dias a 15 dias",
      abordado: 50000,
      grupoControle: 8057,
      produtos: "1994158-Salame Seara 100g Italiano Fatiado,2830418-Salame Seara 100g Hamburgues Fatiado,2868113-Salame Seara 100g Gourmet Borda Pimenta,2832909-Presunto Seara 180g Fatiado,2832933-Mort Seara 180g Defumada Fatiada,2889447-Ling Fininha Seara 215g Defumada",
      mensuracao: "11 dias"
    },
    campanha94: {
      nome: "69041 - Email - TRADE MKT SC JOHNSON - PATO - E-COMM 21022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes Propensos Alto Médio no departamento de Limpeza",
      abordado: 50000,
      grupoControle: 8057,
      produtos: "4415647-Deterg Sanit Pato 38g Gel Ades Rf Game Frutas C/Aplicador,4415604-Deterg Sanit Pato 38g Gel Ades Rf Desafio Flores C/Aplicador,4415710-Desinf Pato 750ml Limp Prof Gel Desafio Flores,4415728-Desinf Pato 750ml Limp Prof Gel Game Frutas,4415639-Deterg Sanit Pato C/3 Past Adesiva Desafio Flores,4415663-Deterg Sanit Pato C/3 Past Adesiva Game Frutas,4415698-Deterg Sanit Pato 38g Gel Ades Rf Game Frutas C/2 50% Desc",
      mensuracao: "8 dias"
    },
    campanha95: {
      nome: "69042 - Email - TRADE MKT SC JOHNSON - REPELENTE OFF - E-COMM 21022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes Propensos Alto Médio ao Grupo: Limpeza;Inseticida Mata Barata;Inseticida Mata Formiga;Inseticida Mata Pernilongo;Inseticida Multi Inseticida;Repelente'",
      abordado: 42317,
      grupoControle: 7828,
      produtos: "4415655-Repelente Off 100g Gel Toque Leve",
      mensuracao: "8 dias"
    },
    campanha96: {
      nome: "69079 - Custom Audience - Festival Congelados 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes propensos a Alto e Medio nos SubGrupos: Lanches Prontos Lasanha Pizza Congelada Pizza Refrigerada Pratos Prontos",
      abordado: 42317,
      grupoControle: 7828,
      produtos: "4415655-Repelente Off 100g Gel Toque Leve",
      mensuracao: "8 dias"
    },
    campanha97: {
      nome: "69070 - Custom Audience - Jornada Inativos Terceira Semana 23022024",
      filtro: "Base Externa",
      abordado: 70795,
      grupoControle: "Apropriação",
      produtos: "601802-Acucar Cristal Alto Alegre 5kg,2101521-Biscoito Marilan 350g  Cream Cracker Gergelim,444570-Biscoito Marilan 350g  Cream Cracker Manteiga,1609874-Biscoito Marilan 350g  Maizena Chocolate,2122545-Biscoito Marilan 350g  Maizena Integral,429376-Biscoito Marilan 350g Agua Sal,431818-Biscoito Marilan 350g Coco,429384-Biscoito Marilan 350g Cream Cracker,431826-Biscoito Marilan 350g Leite,431834-Biscoito Marilan 350g Maizena,431842-Biscoito Marilan 350g Manteiga,2931397-Temp Sazon 60g  Pipoca Cebola/Salsa,2932954-Temp Sazon 60g  Pipoca Churrasco,2932962-Temp Sazon 60g  Pipoca Manteiga,2106477-Temp Sazon 60g Alecrim,2106493-Temp Sazon 60g Alho,2749351-Temp Sazon 60g Almond Picanha,2749343-Temp Sazon 60g Almonda,612162-Temp Sazon 60g Arroz,109061-Temp Sazon 60g Carne,268496-Temp Sazon 60g Feijao,109053-Temp Sazon 60g Frango,179302-Temp Sazon 60g Legumes,2106485-Temp Sazon 60g Limao,268500-Temp Sazon 60g Massas,2134284-Temp Sazon 60g Milanesa Ervas Limao,2134306-Temp Sazon 60g Milanesa Trad,814733-Temp Sazon 60g Sabor Nordeste,509574-Temp Sazon 60g Salada,1578693-Bebida Lac Carolina 510g Bandeja Morango,999555-Bebida Lac Carolina 510g Bandeja Morango/Coco,306894-Ling Calabresa Perdigao Kg Curada,593761-Oleo Soja Coamo 900ml Pet",
      mensuracao: "5 dias"
    },
    campanha98: {
      nome: "69068 - Custom Audience - Melhores Clientes 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes do ciclo de Rentabilização e são CLV A",
      abordado: 169521,
      grupoControle: 9114,
      produtos: "601802-Acucar Cristal Alto Alegre 5kg,2101521-Biscoito Marilan 350g  Cream Cracker Gergelim,444570-Biscoito Marilan 350g  Cream Cracker Manteiga,1609874-Biscoito Marilan 350g  Maizena Chocolate,2122545-Biscoito Marilan 350g  Maizena Integral,429376-Biscoito Marilan 350g Agua Sal,431818-Biscoito Marilan 350g Coco,429384-Biscoito Marilan 350g Cream Cracker,431826-Biscoito Marilan 350g Leite,431834-Biscoito Marilan 350g Maizena,431842-Biscoito Marilan 350g Manteiga,2931397-Temp Sazon 60g  Pipoca Cebola/Salsa,2932954-Temp Sazon 60g  Pipoca Churrasco,2932962-Temp Sazon 60g  Pipoca Manteiga,2106477-Temp Sazon 60g Alecrim,2106493-Temp Sazon 60g Alho,2749351-Temp Sazon 60g Almond Picanha,2749343-Temp Sazon 60g Almonda,612162-Temp Sazon 60g Arroz,109061-Temp Sazon 60g Carne,268496-Temp Sazon 60g Feijao,109053-Temp Sazon 60g Frango,179302-Temp Sazon 60g Legumes,2106485-Temp Sazon 60g Limao,268500-Temp Sazon 60g Massas,2134284-Temp Sazon 60g Milanesa Ervas Limao,2134306-Temp Sazon 60g Milanesa Trad,814733-Temp Sazon 60g Sabor Nordeste,509574-Temp Sazon 60g Salada,1578693-Bebida Lac Carolina 510g Bandeja Morango,999555-Bebida Lac Carolina 510g Bandeja Morango/Coco,306894-Ling Calabresa Perdigao Kg Curada,593761-Oleo Soja Coamo 900ml Pet",
      mensuracao: "5 dias"
    },
    campanha99: {
      nome: "69086 - Custom Audience - TRADE MKT MARS - CHAMP 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes compradores Alto Medio e Baixo Relacionamento no SubGrupo 'Racao Caes'",
      abordado: 41705,
      grupoControle: 8051,
      produtos: "4395000-Alim Champ 85g Umid Frango Sache Filhote,4394992-Alim Champ 85g Umid Frango Sache Ad,4394984-Alim Champ 85g Umid Carne Sache Ad",
      mensuracao: "6 dias"
    },
    campanha100: {
      nome: "69083 - Custom Audience - TRADE MKT MARS - DREAMIES 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes compradores Alto Medio e Baixo Relacionamento no SubGrupo 'Snacks e Petiscos'",
      abordado: 24135,
      grupoControle: 7360,
      produtos: "4382668-Petisco Dreamies 80g Carne Tentadora,4382684-Petisco Dreamies 80g Salmao Irresistivel,2084090-Petisco Dreamies 40g Queijo,2084082-Petisco Dreamies 40g Frango,2084104-Petisco Dreamies 40g Carne",
      mensuracao: "6 dias"
    },
    campanha101: {
      nome: "69085 - Custom Audience - TRADE MKT MARS - KITEKAT 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes compradores Alto Medio e Baixo Relacionamento no SubGrupo 'Racao Gatos'",
      abordado: 17298,
      grupoControle: 6874,
      produtos: "3978583-Racao Kitekat 2.7kg Mix Carne,3978222-Racao Kitekat 900g  Mix Carne,2810069-Alim Kitekat 70g Umid Sache Peixe Molho,2810050-Alim Kitekat 70g Umid Sache Carne Molho,2810077-Alim Kitekat 70g Umid Sache Fgo Molho",
      mensuracao: "6 dias"
    },
    campanha102: {
      nome: "69089 - Custom Audience - TRADE MKT MARS - PEDIGREE 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes compradores Alto Medio e Baixo Relacionamento no SubGrupo 'Racao Caes'",
      abordado: 41705,
      grupoControle: 8051,
      produtos: "2748800-Alim Pedigree 100g Umid Sache Ad 7+,2748827-Alim Pedigree 100g Umid Sache Ad Carne Rc M/G,2000253-Alim Pedigree 100g Umid Sache Ad Cord Molho,2000270-Alim Pedigree 100g Umid Sache Ad Fgo Molho,2748797-Alim Pedigree 100g Umid Sache Ad Fgo Rc M/G,2800691-Alim Pedigree 100g Umid Sache Carne Rc p L+p- C/8,2000261-Alim Pedigree 100g Umid Sache Carne Rcs p,2748819-Alim Pedigree 100g Umid Sache Fil Carne,2000237-Alim Pedigree 100g Umid Sache Jr Fgo Molho,846007-Biscoito Pedigree 500g Biscrok Ad,846023-Biscoito Pedigree 500g Biscrok Rcs g,846031-Biscoito Pedigree 500g Biscrok Rcs p,2736063-Petisco Pedigree 180g Dentastix Rcs m,1614991-Alim Pedigree 280g Umid Lata Jr Carne Fgo,1615025-Alim Pedigree 290g Umid Lata Ad Carne Molho,1990934-Alim Pedigree 290g Umid Lata Ad Fgo Molho,1615017-Alim Pedigree 280g Umid Lata Ad Carne,846112-Biscoito Pedigree 200g Marrobone Pouch,4080270-Racao Pedigree 900g Rcs Peq Carne/Vegetais,846074-Biscoito Pedigree 500g Marrobone Pouch,4081706-Racao Pedigree 900g Carne Ao Leite,390895-Racao Pedigree 2.7kg Rcs p,422312-Racao Pedigree 2.7kg Carne/Veg,846015-Biscoito Pedigree 300g Biscrok Fil,530530-Racao Pedigree 900g Fil Rcs M/G,4411005-Racao Pedigree 2.7kg Carne/Frango 28% Proteina,2711664-Petisco Pedigree 77g Dentastix Rcs m,3994503-Racao Pedigree 900g Ad Nutricao Essencial,2711656-Petisco Pedigree 45g Dentastix Rcs p,530549-Racao Pedigree 900g Carne/Veg,4081668-Racao Pedigree 9kg Nut Essenc + 1.1kg Gts,2736136-Petisco Pedigree 110g Dentastix Rcs p,2711699-Petisco Pedigree 270g Dentastix Rcs g,1615009-Alim Pedigree 280g Umid Lata Ad Fgo,4081684-Racao Pedigree 9kg Carne Ao Leite + 1.1kg Gts,2931508-Racao Pedigree 9kg  + 1.1kg Gts Racas p,391255-Racao Pedigree 10.1kg Rcs p,2109549-Racao Pedigree 10.1kg Carne/Fgo",
      mensuracao: "6 dias"
    },
    campanha103: {
      nome: "69088 - Custom Audience - TRADE MKT MARS - WHISKAS 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes compradores Alto Medio e Baixo Relacionamento no SubGrupo 'Racao Gatos'",
      abordado: 17298,
      grupoControle: 6874,
      produtos: "2752972-Alim Whiskas 85g Umid Sache Ad 7+ Carne,2752948-Alim Whiskas 85g Umid Sache Ad 7+ Peixe,530417-Alim Whiskas 85g Umid Sache Ad Atum,933260-Alim Whiskas 85g Umid Sache Ad Carne,2799170-Alim Whiskas 85g Umid Sache Ad Carne L8p7,640824-Alim Whiskas 85g Umid Sache Ad Cordeiro,921530-Alim Whiskas 85g Umid Sache Ad Frango,530425-Alim Whiskas 85g Umid Sache Ad Salmao,530409-Alim Whiskas 85g Umid Sache Fil Carne,640816-Alim Whiskas 85g Umid Sache Fil Fgo,2131927-Alim Whiskas 85g Umid Sache Fil Jelly,2131900-Alim Whiskas 85g Umid Sache Jelly 1+ Carne,2752964-Alim Whiskas 85g Umid Sache Jelly 7+ Carne,4382692-Petisco Whiskas 80g Anti Bola Pelo Sache,1615076-Alim Whiskas 290g Umid Lata Ad Carne Molho,1615068-Alim Whiskas 290g Umid Lata Ad Atum Molho,1615106-Alim Whiskas 290g Umid Lata Ad Pate Peixe,1615092-Alim Whiskas 290g Umid Lata Ad Pate Atum,1614983-Alim Whiskas 290g Umid Lata Ad Pate Carne,4382650-Petisco Whiskas 40g Anti Bola Pelo Sache,4382307-Petisco Whiskas 40g Pelo Saudavel Sache,1615084-Alim Whiskas 290g Umid Lata Ad Pate Fgo,235490-Racao Whiskas 500g Carne,235512-Racao Whiskas 500g Peixe,2091615-Racao Whiskas 500g Cast Carne,755036-Racao Whiskas 500g Filhotes,235440-Racao Whiskas 900g Carne,754951-Racao Whiskas 2.7kg Carne,754960-Racao Whiskas 2.7g Peixe,3993280-Racao Whiskas 900g Gato Ad 1+ Salmao,2729229-Racao Whiskas 2.7kg Filhotes,3993264-Racao Whiskas 900g Gato Ad 1+ Frango,2091623-Racao Whiskas 900g Gatos Cast Carne,235482-Racao Whiskas 900g Peixe,936537-Racao Whiskas 900g Filhotes,754978-Racao Whiskas 900g Frango/Leite,4080289-Racao Whiskas 900g Gatos Cast Peixe,3993191-Racao Whiskas 2.7kg Gato Ad 1+ Frango,3993248-Racao Whiskas 2.7kg Gato Ad 1+ Salmao,2804743-Racao Whiskas L3p2.7kg Cae,4382676-Racao Whiskas 2.7kg Gatos Cast 1+ Carne,2084066-Petisco Whiskas 40g Tempt Anti Bola Pelos,2084040-Petisco Whiskas 40g Tempt Salmao",
      mensuracao: "6 dias"
    },
    campanha104: {
      nome: "69076 - Email - Acao NAO ALIMENTAR Esquenta Festival Bebe 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes compradores Alto Medio e Baixo Relacionamento no Grupo 'Fraldas e Perfumaria Infantil'",
      abordado: 70000,
      grupoControle: 8446,
      produtos: "884693-Colonia Infantil Huggies 100ml Extra Suave,4331761-Cr Pentear Johnsons 200ml  Kids Blackinho Poderoso,2866382-Cr Assadura Huggies 80g Supreme,1538020-Sab Huggies 75g Camomila,4341708-Fralda Huggies Supreme Care Hiper g C/66",
      mensuracao: "6 dias"
    },
    campanha105: {
      nome: "69073 - Email - Acao NAO ALIMENTAR Inativos 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes sem compras nos últimos 90 dias nos Grupos: Creme Dental - Desodorante Talcos e Colonias - Lava Louças - Lava Roupas,Papel Higienico - Tintura Cabelo - Tratamento e Finalização Cabelos",
      abordado: 70000,
      grupoControle: 8446,
      produtos: "4078632-Sand Havaianas Brasil Listras Branca 39/0,1771809-Tigela Marinex 300ml Facilita Vap Quadrada,284416-Cr Dent Sorriso 90g Dentes Brancos Trad,4001680-Des Rexona 250ml Aer Invisible L+p-,2833158-Desinf Pinho Sol 1.75l Lavanda,2859750-Amac Comfort 1.5l Conc Intensivo,4332644-Lava Roupa Tixan 1.6kg Po Antibac",
      mensuracao: "2 dias"
    },
    campanha106: {
      nome: "69039 - Email - Fecha Mes Publico 1 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, Clientes com compras nos últimos 2 meses (Dezembro e Janeiro) e sem compra em Fevereiro.",
      abordado: 79366,
      grupoControle: 8469,
      produtos: "160822-Cafe Melitta 500g Tradicional,2886502-Inset Raid 420ml  Aer Base Agua,2010011-Inset Raid 420ml  Aer Base Agua Lv+pg-,2886499-Inset Raid 420ml  Aer Base Agua Oleo Euc,2868296-Inset Raid 420ml Aer Aqua Protection Lv+pg-,2886480-Inset Raid 420ml Aer Mata Barata/Formigas,2134489-Inset Raid 420ml Aer Mata Baratas/Formigas Lv+pg-,2010046-Inset Raid 420ml Aer Multi Eucalipto Lv+pg-,4088190-Inset Raid 420ml Aer Multi Insetos Emb Econ,2892952-Maionese Hemmer 500g Receita Caseira,4065018-Requeijao Lider 180g Trad Cremoso,1612816-Arroz Emporio Sao Joao 5kg T1,2833131-Desinf Pinho Sol 1.750l Original,2945436-Desinf Pinho Sol 1.75l 2x Poder,3984710-Desinf Pinho Sol 1.75l 2x Poder Suave,2833158-Desinf Pinho Sol 1.75l Lavanda,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2868911-Pizza Perdigao 460g Brasileira,2868938-Pizza Perdigao 460g Calabresa,2868920-Pizza Perdigao 460g Napolitana,2872692-Sab Deoline 1l Liq Erva Doce,2870142-Sab Deoline 1l Liq Morango Champagne,2872706-Sab Deoline 1l Liq Pessego/Damasco",
      mensuracao: "2 dias"
    },
    campanha107: {
      nome: "69048 - Email - Melhores Clientes 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes do ciclo de Rentabilização e são CLV A",
      abordado: 50000,
      grupoControle: 8678,
      produtos: "601802-Acucar Cristal Alto Alegre 5kg,2101521-Biscoito Marilan 350g  Cream Cracker Gergelim,444570-Biscoito Marilan 350g  Cream Cracker Manteiga,1609874-Biscoito Marilan 350g  Maizena Chocolate,2122545-Biscoito Marilan 350g  Maizena Integral,429376-Biscoito Marilan 350g Agua Sal,431818-Biscoito Marilan 350g Coco,429384-Biscoito Marilan 350g Cream Cracker,431826-Biscoito Marilan 350g Leite,431834-Biscoito Marilan 350g Maizena,431842-Biscoito Marilan 350g Manteiga,2931397-Temp Sazon 60g  Pipoca Cebola/Salsa,2932954-Temp Sazon 60g  Pipoca Churrasco,2932962-Temp Sazon 60g  Pipoca Manteiga,2106477-Temp Sazon 60g Alecrim,2106493-Temp Sazon 60g Alho,2749351-Temp Sazon 60g Almond Picanha,2749343-Temp Sazon 60g Almonda,612162-Temp Sazon 60g Arroz,109061-Temp Sazon 60g Carne,268496-Temp Sazon 60g Feijao,109053-Temp Sazon 60g Frango,179302-Temp Sazon 60g Legumes,2106485-Temp Sazon 60g Limao,268500-Temp Sazon 60g Massas,2134284-Temp Sazon 60g Milanesa Ervas Limao,2134306-Temp Sazon 60g Milanesa Trad,814733-Temp Sazon 60g Sabor Nordeste,509574-Temp Sazon 60g Salada,1578693-Bebida Lac Carolina 510g Bandeja Morango,999555-Bebida Lac Carolina 510g Bandeja Morango/Coco,306894-Ling Calabresa Perdigao Kg Curada,593761-Oleo Soja Coamo 900ml Pet",
      mensuracao: "5 dias"
    },
    campanha108: {
      nome: "69071 - Email - NAO ALIMENTAR Clientes Ativos Higiene Beleza 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes sem compras nos últimos 90 dias nos Grupos: Creme Dental Desodorante-Talco-Colonias Tintura Cabelos Tratamento e Finalização Cabelos",
      abordado: 70000,
      grupoControle: 8446,
      produtos: "4129423-Caixa Organizadora Plasutil 28l Transparente,573248-Esponja Esfrebom L4p3 Multiuso,4400151-Des Secret 45g Gel Ph Balanced Lavender,4416210-Spray Cap Hidrabene 100ml,4416228-Toalha Umed Hidrabene C/25 Limp Facial 2 Em 1,4416279-Base Hidrabene 12g Escura Fps 50,4428609-Sab Farnese 85g Proteinas Leite C/6 L+p-,2854414-Tint Koleston 28 Preto Azulado,2770032-Lava Louca De Vida 500ml Neutro,957313-Papel Hig Mili C/12 Fd 30m Neutro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza",
      mensuracao: "2 dias"
    },
    campanha109: {
      nome: "69072 - Email - NAO ALIMENTAR Clientes Ativos Limpeza 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes sem compras nos últimos 90 dias nos Grupos: Creme Dental Desodorante-Talco-Colonias Tintura Cabelos Tratamento e Finalização Cabelos",
      abordado: 70000,
      grupoControle: 8446,
      produtos: "4129423-Caixa Organizadora Plasutil 28l Transparente,573248-Esponja Esfrebom L4p3 Multiuso,2770032-Lava Louca De Vida 500ml Neutro,957313-Papel Hig Mili L12p11 Fd 30m Neutro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza",
      mensuracao: "2 dias"
    },
    campanha110: {
      nome: "69084 - Oferta Relampago - Original - PR - 23022024",
      filtro: "Clientes PR com filtro IdCsdmfilialpreferencial, clientes Propensos Alto e Medio Relacionamento no SubSegmento: Cerveja Trad Pilsen Lata.",
      abordado: 20000,
      grupoControle: 6489,
      produtos: "4330463-Cerveja Antarctica 473ml Original Lata",
      mensuracao: "0 dias"
    },
    campanha111: {
      nome: "69074 - Oferta Relampago Biscoito Bauducco 23022024",
      filtro: "Clientes todas lojas com filtro IdCsdmfilialpreferencial, clientes Propensos Alto Relacionamento no SubSegmento: Biscoito Waffer.",
      abordado: 17953,
      grupoControle: 6489,
      produtos: "2022249-Biscoito Bauducco 140g Wafer Triplo,2022060-Biscoito Bauducco 140g Wafer Nozes,2022230-Biscoito Bauducco 140g Wafer Morango,2022044-Biscoito Bauducco 140g Wafer Chocolate,2022052-Biscoito Bauducco 140g Wafer Avela",
      mensuracao: "0 dias"
    },
    campanha112: {
      nome: "69092 - Push - Lava Louca de Vida - 25022024",
      filtro: "Base Full TOKENS",
      abordado: 186685,
      grupoControle: 9155,
      produtos: "2770032-Lava Louca De Vida 500ml Neutro",
      mensuracao: "0 dias"
    },
    campanha113: {
      nome: "69051 - Push - Melhores Clientes 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes do ciclo de Rentabilização e são CLV A",
      abordado: 47079,
      grupoControle: 8182,
      produtos: "601802-Acucar Cristal Alto Alegre 5kg,2101521-Biscoito Marilan 350g  Cream Cracker Gergelim,444570-Biscoito Marilan 350g  Cream Cracker Manteiga,1609874-Biscoito Marilan 350g  Maizena Chocolate,2122545-Biscoito Marilan 350g  Maizena Integral,429376-Biscoito Marilan 350g Agua Sal,431818-Biscoito Marilan 350g Coco,429384-Biscoito Marilan 350g Cream Cracker,431826-Biscoito Marilan 350g Leite,431834-Biscoito Marilan 350g Maizena,431842-Biscoito Marilan 350g Manteiga,2931397-Temp Sazon 60g  Pipoca Cebola/Salsa,2932954-Temp Sazon 60g  Pipoca Churrasco,2932962-Temp Sazon 60g  Pipoca Manteiga,2106477-Temp Sazon 60g Alecrim,2106493-Temp Sazon 60g Alho,2749351-Temp Sazon 60g Almond Picanha,2749343-Temp Sazon 60g Almonda,612162-Temp Sazon 60g Arroz,109061-Temp Sazon 60g Carne,268496-Temp Sazon 60g Feijao,109053-Temp Sazon 60g Frango,179302-Temp Sazon 60g Legumes,2106485-Temp Sazon 60g Limao,268500-Temp Sazon 60g Massas,2134284-Temp Sazon 60g Milanesa Ervas Limao,2134306-Temp Sazon 60g Milanesa Trad,814733-Temp Sazon 60g Sabor Nordeste,509574-Temp Sazon 60g Salada,1578693-Bebida Lac Carolina 510g Bandeja Morango,999555-Bebida Lac Carolina 510g Bandeja Morango/Coco,306894-Ling Calabresa Perdigao Kg Curada,593761-Oleo Soja Coamo 900ml Pet",
      mensuracao: "5 dias"
    },
    campanha114: {
      nome: "69091 - Push - Oferta Omo - 24022024",
      filtro: "Base Full TOKENS",
      abordado: 186685,
      grupoControle: 9155,
      produtos: "2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza",
      mensuracao: "1 dias"
    },
    campanha115: {
      nome: "69094 - SMS - Jornada Inativos Terceira Semana 22022024",
      filtro: "Base Externa",
      abordado: 20000,
      grupoControle: "Apropriação",
      produtos: "601802-Acucar Cristal Alto Alegre 5kg,2101521-Biscoito Marilan 350g  Cream Cracker Gergelim,444570-Biscoito Marilan 350g  Cream Cracker Manteiga,1609874-Biscoito Marilan 350g  Maizena Chocolate,2122545-Biscoito Marilan 350g  Maizena Integral,429376-Biscoito Marilan 350g Agua Sal,431818-Biscoito Marilan 350g Coco,429384-Biscoito Marilan 350g Cream Cracker,431826-Biscoito Marilan 350g Leite,431834-Biscoito Marilan 350g Maizena,431842-Biscoito Marilan 350g Manteiga,2931397-Temp Sazon 60g  Pipoca Cebola/Salsa,2932954-Temp Sazon 60g  Pipoca Churrasco,2932962-Temp Sazon 60g  Pipoca Manteiga,2106477-Temp Sazon 60g Alecrim,2106493-Temp Sazon 60g Alho,2749351-Temp Sazon 60g Almond Picanha,2749343-Temp Sazon 60g Almonda,612162-Temp Sazon 60g Arroz,109061-Temp Sazon 60g Carne,268496-Temp Sazon 60g Feijao,109053-Temp Sazon 60g Frango,179302-Temp Sazon 60g Legumes,2106485-Temp Sazon 60g Limao,268500-Temp Sazon 60g Massas,2134284-Temp Sazon 60g Milanesa Ervas Limao,2134306-Temp Sazon 60g Milanesa Trad,814733-Temp Sazon 60g Sabor Nordeste,509574-Temp Sazon 60g Salada,1578693-Bebida Lac Carolina 510g Bandeja Morango,999555-Bebida Lac Carolina 510g Bandeja Morango/Coco,306894-Ling Calabresa Perdigao Kg Curada,593761-Oleo Soja Coamo 900ml Pet",
      mensuracao: "4 dias"
    },
    campanha116: {
      nome: "69050 - SMS - Melhores Clientes 23022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes do ciclo de Rentabilização e são CLV A",
      abordado: 50000,
      grupoControle: 8678,
      produtos: "601802-Acucar Cristal Alto Alegre 5kg,2101521-Biscoito Marilan 350g  Cream Cracker Gergelim,444570-Biscoito Marilan 350g  Cream Cracker Manteiga,1609874-Biscoito Marilan 350g  Maizena Chocolate,2122545-Biscoito Marilan 350g  Maizena Integral,429376-Biscoito Marilan 350g Agua Sal,431818-Biscoito Marilan 350g Coco,429384-Biscoito Marilan 350g Cream Cracker,431826-Biscoito Marilan 350g Leite,431834-Biscoito Marilan 350g Maizena,431842-Biscoito Marilan 350g Manteiga,2931397-Temp Sazon 60g  Pipoca Cebola/Salsa,2932954-Temp Sazon 60g  Pipoca Churrasco,2932962-Temp Sazon 60g  Pipoca Manteiga,2106477-Temp Sazon 60g Alecrim,2106493-Temp Sazon 60g Alho,2749351-Temp Sazon 60g Almond Picanha,2749343-Temp Sazon 60g Almonda,612162-Temp Sazon 60g Arroz,109061-Temp Sazon 60g Carne,268496-Temp Sazon 60g Feijao,109053-Temp Sazon 60g Frango,179302-Temp Sazon 60g Legumes,2106485-Temp Sazon 60g Limao,268500-Temp Sazon 60g Massas,2134284-Temp Sazon 60g Milanesa Ervas Limao,2134306-Temp Sazon 60g Milanesa Trad,814733-Temp Sazon 60g Sabor Nordeste,509574-Temp Sazon 60g Salada,1578693-Bebida Lac Carolina 510g Bandeja Morango,999555-Bebida Lac Carolina 510g Bandeja Morango/Coco,306894-Ling Calabresa Perdigao Kg Curada,593761-Oleo Soja Coamo 900ml Pet",
      mensuracao: "5 dias"
    },
    campanha117: {
      nome: "69099 - SMS E-commerce Compre e Ganhe - Semana 1 - 26022024",
      filtro: "Base Externa",
      abordado: 233,
      grupoControle: "Apropriação",
      produtos: "Institucional",
      mensuracao: "0 dia"
    },
    campanha118: {
      nome: "69100 - SMS E-commerce Compre e Ganhe - Semana 2 - 26022024",
      filtro: "Base Externa",
      abordado: 185,
      grupoControle: "Apropriação",
      produtos: "Institucional",
      mensuracao: "0 dia"
    },
    campanha119: {
      nome: "69101 - SMS E-commerce Compre e Ganhe - Semana 3 - 26022024",
      filtro: "Base Externa",
      abordado: 161,
      grupoControle: "Apropriação",
      produtos: "Institucional",
      mensuracao: "0 dia"
    },
    campanha120: {
      nome: "69104 - Email - TRADE MKT NESTLE - PROMOCAO TA NA MESA 27022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com compras nos últimos 90 dias na Marca: Nestle",
      abordado: 50000,
      grupoControle: 8057,
      produtos: "875465-Temp Temp&sabor 50g Legumes,875449-Temp Temp&sabor 50g Carne,875457-Temp Temp&sabor 50g Aves,3979318-Temp Maggi 95g Toque Defumado Carne Legumes Ovos,3979075-Não Encontrado,3985652-Temp Maggi 50g Sopas,3979288-Temp Maggi 49g Meu Segredo Tomate Ervas,3979369-Temp Maggi 49g Meu Segredo Refogado Celoga Alho,3979253-Temp Maggi 49g Meu Segredo Cheiro Verde,591793-Temp Maggi 49g Meu Segredo,151700-Temp Maggi 120g Gril Carne,148067-Temp Maggi 120g Fondor,150436-Temp Maggi 120g Amac Carne,2811634-Temp Maggi 1.1kg Fondor,2811642-Temp Maggi 1.1kg Amac Carne,130222-Sopao Maggi 200g Galinha/Macar/Leg,875597-Sopao Maggi 200g Gal Caipira,835080-Sopao Maggi 200g Costela,2856093-Sopao Maggi 150g Gal/Leg Menos Sodio,2856107-Sopao Maggi 150g Car/Leg Menos Sodio,100200-Sopa Maggi 68g Cebola,100285-Sopa Maggi 63g Carne C/Conchinhas,4077180-Sopa Maggi 61g Madioquinha/Frango,114561-Sopa Maggi 60g Galinha C/Fidelini,665347-Creme Maggi 78g Queijo,100234-Creme Maggi 68g Cebola,2856751-Creme Maggi 61g Cebola Menos Sodio,2928345-Creme Maggi 61g Cebola C/Queijo,2928337-Creme Maggi 61g Cebola C/Bacon,2290524-Creme Maggi 1kg Cebola,148040-Canjao Maggi 200g Galinha,2833344-Não Encontrado,2825317-Caldo Maggi 57g Menos Sodio Galinha,2825376-Caldo Maggi 57g Menos Sodio Carne,2825449-Caldo Maggi 57g Legumes,2824353-Caldo Maggi 57g Galinha,2825392-Caldo Maggi 57g Costela,2824345-Caldo Maggi 57g Carne,2824310-Caldo Maggi 57g Bacon,3979245-Caldo Maggi 35g Legumes,2868610-Caldo Maggi 35g Carne,2825430-Caldo Maggi 152g Galinha,2825333-Caldo Maggi 152g Carne,2825341-Caldo Maggi 114g Galinha,2825422-Caldo Maggi 114g Equilib Menos Sodio Galinha,2825457-Caldo Maggi 114g Equilib Menos Sodio Carne,2825465-Caldo Maggi 114g Carne,2825481-Caldo Maggi 114g Bacon,2811669-Caldo Maggi 1.01kg Galinha,2811650-Caldo Maggi 1.01kg Carne,103454-Leite Condensado Moca 395g Lata,920924-Sobr Moca 2.57kg Brigadeiro,920940-Sobr Moca 2.4kg Beijinho,921092-Sobr Moca 2.54kg Chocolate Fs,921114-Leite Condensado Moca 2.6kg,1625233-Leite Condensado Moca 395g Tp,2720973-Leite Condensado Moca 410g Light,2790726-Leite Condensado Moca 395g C/2 Gratis l Cond,2953790-Leite Condensado Moca 395g Tp Zero Lactose,3960528-Leite Condensado Moca 65g Original Mini Squize,3989712-Leite Condensado Moca 300g Integral Topping Sqz,3996514-Sobr Moca 1kg Brigadeiro,3996522-Sobr Moca 1kg Doce Leite,4058917-Leite Condensado Moca 370g Mist Para Sorvete,4065620-Alim Condensado Moca 240g Vegetal Zr Lactose Tp,351946-Creme Leite Nestle 300g Tradicional Lata,385972-Creme Leite Nestle 200g Uht,2821478-Creme Leite Nestle 200g Zr Lactose,2892049-Não Encontrado,2953862-Creme Leite Nestle 200g Levissimo",
      mensuracao: "10 dias"
    },
    campanha121: {
      nome: "69108 - Email - Oferta Extra Pescado 28022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com compras nos últimos 90 dias na Marca: Nestle",
      abordado: 60000,
      grupoControle: 8279,
      produtos: "998761-Sobr Moca 1kg Doce Leite,367885-Leite Condensado Moca 370g Mist Para Sorvete,367877-Alim Condensado Moca 240g Vegetal Zr Lactose Tp,524050-Creme Leite Nestle 300g Tradicional Lata,2715880-Creme Leite Nestle 200g Uht,4341805-Creme Leite Nestle 200g Zr Lactose,338958-Não Encontrado,814636-Creme Leite Nestle 200g Levissimo",
      mensuracao: "0 dia"
    },
    campanha121: {
      nome: "69108 - Email - Oferta Extra Pescado 28022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com compras nos últimos 90 dias na Marca: Nestle",
      abordado: 60000,
      grupoControle: 8279,
      produtos: "998761-Sobr Moca 1kg Doce Leite,367885-Leite Condensado Moca 370g Mist Para Sorvete,367877-Alim Condensado Moca 240g Vegetal Zr Lactose Tp,524050-Creme Leite Nestle 300g Tradicional Lata,2715880-Creme Leite Nestle 200g Uht,4341805-Creme Leite Nestle 200g Zr Lactose,338958-Não Encontrado,814636-Creme Leite Nestle 200g Levissimo",
      mensuracao: "0 dia"
    },
    campanha122: {
      nome: "69107 - SMS - Oferta TV - Azeite Borges 28022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes com compras nos últimos 90 dias no Grupo: Azeite",
      abordado: 20000,
      grupoControle: 6489,
      produtos: "814636-Azeite Borges 500ml Ex Virgem",
      mensuracao: "0 dia"
    },
    campanha123: {
      nome: "69121 - Email - Dia Extra Amigao 29022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes propensos Alto Medio e Baixo Relacionamento nos Grupos: Amaciante - Café - Lava Roupas - Leite UHT - Papel Higienico",
      abordado: 116110,
      grupoControle: 8870,
      produtos: "593761-Oleo Soja Coamo 900ml Pet,165646-Oleo Soja Cocamar 900ml Pet,994928-Oleo Soja Concordia 900ml Pet,1545957-Oleo Soja Leve 900ml Pet,504947-Oleo Soja Liza 900ml Pet,262986-Oleo Soja Soya 900ml Pet,3996786-Oleo Soja Vitaliv 900ml Pet,4069510-Papel Hig Atualle C/12 Fd 20m Neutro,4385128-Cafe Uniao 500g Tradicional Vacuo,4106598-Amaciante Soft Plus Erva Doce 5l,4185919-Amaciante Soft Plus Lavanda 5l,966223-Vinho Porto Mouro 750ml Branco Seco,793248-Vinho Porto Mouro 750ml Branco Suave,966231-Vinho Porto Mouro 750ml Tinto Seco,632481-Vinho Porto Mouro 750ml Tinto Suave,1810740-Oleo Composto Olinda 500ml,553913-Cafe Caboclo 500g Vacuo,3975061-Lava Roupa Omo 1,6kg Lavagem Perf Gts 150g,132985-Leite Uht Batavo 1l Integral,415626-Leite Uht Frimesa 1l Integral,1917439-Leite Uht Hercules 1l Integral,2807548-Leite Uht Italac 1l  Integral Tpa Rosca,477281-Leite Uht Itambe 1l Integral,4399978-Leite Uht Jussara 1l  Integral,4412745-Leite Uht Leitissimo 1l Integral,163449-Leite Uht Lider 1l  Integral,999946-Leite Uht Ninho 1l Integral,197459-Leite Uht Parmalat  1l Integral,2311140-Leite Uht Piracanjuba 1l Integral,1533983-Leite Uht Tirol 1l  Integral",
      mensuracao: "0 dia"
    },
    campanha124: {
      nome: "69130 - Email - Jornada Inativos Quarta Semana 29022024",
      filtro: "Base Externa",
      abordado: 66874,
      grupoControle: "Apropriação",
      produtos: "115746-Queijo Mussarela Kg Fatiada,170917-Marg Qualy 500g  C/Sal,810967-Molho Tom Fugini 300g Trad Sache,2122251-Amac Soft Plus 5l Azul Floral,2824280-Mac Nissin 85g  L6p5 Gal Caipira,136077-Mac Nissin 85g Bacon,2875659-Mac Nissin 85g Camarao C/ Alho,4395727-Mac Nissin 85g Carfrangao Fgo C/Carne,133043-Mac Nissin 85g Carne,578860-Mac Nissin 85g Carne C/Tomate,4077695-Mac Nissin 85g Chico Bento Milho Na Manteiga,2813017-Mac Nissin 85g Costela,2813327-Mac Nissin 85g Fgo C/Alho,102369-Mac Nissin 85g Gal Caipira,4415221-Mac Nissin 85g Gal Caipira C/6 L+p-,4395743-Mac Nissin 85g Galicaibacon Galinha C/Bacon,4395735-Mac Nissin 85g Galigume Galinha C/ Legumes,102350-Mac Nissin 85g Galinha,102393-Mac Nissin 85g Monica Carne,102440-Mac Nissin 85g Monica Galinha,102407-Mac Nissin 85g Monica Tomate,2724421-Mac Nissin 85g Sabor Fgo Assado C/Limao",
      mensuracao: "6 dia"
    },
    campanha125: {
      nome: "69127 - Push - Dia Extra Amigao 29022024",
      filtro: "Clientes todas filiais com filtro IdCsdmfilialpreferencial, clientes propensos Alto Medio e Baixo Relacionamento nos Grupos: Amaciante - Café - Lava Roupas - Leite UHT - Papel Higienico",
      abordado: 40118,
      grupoControle: 8007,
      produtos: "593761-Oleo Soja Coamo 900ml Pet,165646-Oleo Soja Cocamar 900ml Pet,994928-Oleo Soja Concordia 900ml Pet,1545957-Oleo Soja Leve 900ml Pet,504947-Oleo Soja Liza 900ml Pet,262986-Oleo Soja Soya 900ml Pet,3996786-Oleo Soja Vitaliv 900ml Pet,4069510-Papel Hig Atualle C/12 Fd 20m Neutro,4385128-Cafe Uniao 500g Tradicional Vacuo,4106598-Amaciante Soft Plus Erva Doce 5l,4185919-Amaciante Soft Plus Lavanda 5l,966223-Vinho Porto Mouro 750ml Branco Seco,793248-Vinho Porto Mouro 750ml Branco Suave,966231-Vinho Porto Mouro 750ml Tinto Seco,632481-Vinho Porto Mouro 750ml Tinto Suave,1810740-Oleo Composto Olinda 500ml,553913-Cafe Caboclo 500g Vacuo,3975061-Lava Roupa Omo 1,6kg Lavagem Perf Gts 150g,132985-Leite Uht Batavo 1l Integral,415626-Leite Uht Frimesa 1l Integral,1917439-Leite Uht Hercules 1l Integral,2807548-Leite Uht Italac 1l  Integral Tpa Rosca,477281-Leite Uht Itambe 1l Integral,4399978-Leite Uht Jussara 1l  Integral,4412745-Leite Uht Leitissimo 1l Integral,163449-Leite Uht Lider 1l  Integral,999946-Leite Uht Ninho 1l Integral,197459-Leite Uht Parmalat  1l Integral,2311140-Leite Uht Piracanjuba 1l Integral,1533983-Leite Uht Tirol 1l  Integral",
      mensuracao: "0 dia"
    },
    campanha126: {
      nome: "69131 - Push - Jornada Inativos Quarta Semana 29022024",
      filtro: "Base Externa",
      abordado: 3972,
      grupoControle: "Apropriação",
      produtos: "115746-Queijo Mussarela Kg Fatiada,170917-Marg Qualy 500g  C/Sal,810967-Molho Tom Fugini 300g Trad Sache,2122251-Amac Soft Plus 5l Azul Floral,2824280-Mac Nissin 85g  L6p5 Gal Caipira,136077-Mac Nissin 85g Bacon,2875659-Mac Nissin 85g Camarao C/ Alho,4395727-Mac Nissin 85g Carfrangao Fgo C/Carne,133043-Mac Nissin 85g Carne,578860-Mac Nissin 85g Carne C/Tomate,4077695-Mac Nissin 85g Chico Bento Milho Na Manteiga,2813017-Mac Nissin 85g Costela,2813327-Mac Nissin 85g Fgo C/Alho,102369-Mac Nissin 85g Gal Caipira,4415221-Mac Nissin 85g Gal Caipira C/6 L+p-,4395743-Mac Nissin 85g Galicaibacon Galinha C/Bacon,4395735-Mac Nissin 85g Galigume Galinha C/ Legumes,102350-Mac Nissin 85g Galinha,102393-Mac Nissin 85g Monica Carne,102440-Mac Nissin 85g Monica Galinha,102407-Mac Nissin 85g Monica Tomate,2724421-Mac Nissin 85g Sabor Fgo Assado C/Limao",
      mensuracao: "6 dia"
    },
    campanha127: {
      nome: "69124 - SMS - Dia Extra Amigao MS 29022024",
      filtro: "Clientes MS filtro IdCsdmfilialpreferencial, clientes propensos Alto Medio e Baixo Relacionamento nos Grupos: Amaciante - Café - Lava Roupas - Leite UHT - Papel Higienico",
      abordado: 10000,
      grupoControle: 4900,
      produtos: "593761-Oleo Soja Coamo 900ml Pet,165646-Oleo Soja Cocamar 900ml Pet,994928-Oleo Soja Concordia 900ml Pet,1545957-Oleo Soja Leve 900ml Pet,504947-Oleo Soja Liza 900ml Pet,262986-Oleo Soja Soya 900ml Pet,3996786-Oleo Soja Vitaliv 900ml Pet,4069510-Papel Hig Atualle C/12 Fd 20m Neutro,4385128-Cafe Uniao 500g Tradicional Vacuo,4106598-Amaciante Soft Plus Erva Doce 5l,4185919-Amaciante Soft Plus Lavanda 5l,966223-Vinho Porto Mouro 750ml Branco Seco,793248-Vinho Porto Mouro 750ml Branco Suave,966231-Vinho Porto Mouro 750ml Tinto Seco,632481-Vinho Porto Mouro 750ml Tinto Suave,1810740-Oleo Composto Olinda 500ml,553913-Cafe Caboclo 500g Vacuo,3975061-Lava Roupa Omo 1,6kg Lavagem Perf Gts 150g,132985-Leite Uht Batavo 1l Integral,415626-Leite Uht Frimesa 1l Integral,1917439-Leite Uht Hercules 1l Integral,2807548-Leite Uht Italac 1l  Integral Tpa Rosca,477281-Leite Uht Itambe 1l Integral,4399978-Leite Uht Jussara 1l  Integral,4412745-Leite Uht Leitissimo 1l Integral,163449-Leite Uht Lider 1l  Integral,999946-Leite Uht Ninho 1l Integral,197459-Leite Uht Parmalat  1l Integral,2311140-Leite Uht Piracanjuba 1l Integral,1533983-Leite Uht Tirol 1l  Integral",
      mensuracao: "0 dia"
    },
    campanha128: {
      nome: "69122 - SMS - Dia Extra Amigao PR 29022024",
      filtro: "Clientes PR filtro IdCsdmfilialpreferencial, clientes propensos Alto Medio e Baixo Relacionamento nos Grupos: Amaciante - Café - Lava Roupas - Leite UHT - Papel Higienico",
      abordado: 15000,
      grupoControle: 5856,
      produtos: "593761-Oleo Soja Coamo 900ml Pet,165646-Oleo Soja Cocamar 900ml Pet,994928-Oleo Soja Concordia 900ml Pet,1545957-Oleo Soja Leve 900ml Pet,504947-Oleo Soja Liza 900ml Pet,262986-Oleo Soja Soya 900ml Pet,3996786-Oleo Soja Vitaliv 900ml Pet,4069510-Papel Hig Atualle C/12 Fd 20m Neutro,4385128-Cafe Uniao 500g Tradicional Vacuo,4106598-Amaciante Soft Plus Erva Doce 5l,4185919-Amaciante Soft Plus Lavanda 5l,966223-Vinho Porto Mouro 750ml Branco Seco,793248-Vinho Porto Mouro 750ml Branco Suave,966231-Vinho Porto Mouro 750ml Tinto Seco,632481-Vinho Porto Mouro 750ml Tinto Suave,1810740-Oleo Composto Olinda 500ml,553913-Cafe Caboclo 500g Vacuo,3975061-Lava Roupa Omo 1,6kg Lavagem Perf Gts 150g,132985-Leite Uht Batavo 1l Integral,415626-Leite Uht Frimesa 1l Integral,1917439-Leite Uht Hercules 1l Integral,2807548-Leite Uht Italac 1l  Integral Tpa Rosca,477281-Leite Uht Itambe 1l Integral,4399978-Leite Uht Jussara 1l  Integral,4412745-Leite Uht Leitissimo 1l Integral,163449-Leite Uht Lider 1l  Integral,999946-Leite Uht Ninho 1l Integral,197459-Leite Uht Parmalat  1l Integral,2311140-Leite Uht Piracanjuba 1l Integral,1533983-Leite Uht Tirol 1l  Integral",
      mensuracao: "0 dia"
    },
    campanha129: {
      nome: "69123 - SMS - Dia Extra Amigao SP 29022024",
      filtro: "Clientes SP filtro IdCsdmfilialpreferencial, clientes propensos Alto Medio e Baixo Relacionamento nos Grupos: Amaciante - Café - Lava Roupas - Leite UHT - Papel Higienico",
      abordado: 15000,
      grupoControle: 5856,
      produtos: "593761-Oleo Soja Coamo 900ml Pet,165646-Oleo Soja Cocamar 900ml Pet,994928-Oleo Soja Concordia 900ml Pet,1545957-Oleo Soja Leve 900ml Pet,504947-Oleo Soja Liza 900ml Pet,262986-Oleo Soja Soya 900ml Pet,3996786-Oleo Soja Vitaliv 900ml Pet,4069510-Papel Hig Atualle C/12 Fd 20m Neutro,4385128-Cafe Uniao 500g Tradicional Vacuo,4106598-Amaciante Soft Plus Erva Doce 5l,4185919-Amaciante Soft Plus Lavanda 5l,966223-Vinho Porto Mouro 750ml Branco Seco,793248-Vinho Porto Mouro 750ml Branco Suave,966231-Vinho Porto Mouro 750ml Tinto Seco,632481-Vinho Porto Mouro 750ml Tinto Suave,1810740-Oleo Composto Olinda 500ml,553913-Cafe Caboclo 500g Vacuo,3975061-Lava Roupa Omo 1,6kg Lavagem Perf Gts 150g,132985-Leite Uht Batavo 1l Integral,415626-Leite Uht Frimesa 1l Integral,1917439-Leite Uht Hercules 1l Integral,2807548-Leite Uht Italac 1l  Integral Tpa Rosca,477281-Leite Uht Itambe 1l Integral,4399978-Leite Uht Jussara 1l  Integral,4412745-Leite Uht Leitissimo 1l Integral,163449-Leite Uht Lider 1l  Integral,999946-Leite Uht Ninho 1l Integral,197459-Leite Uht Parmalat  1l Integral,2311140-Leite Uht Piracanjuba 1l Integral,1533983-Leite Uht Tirol 1l  Integral",
      mensuracao: "0 dia"
    },
    campanha129: {
      nome: "69126 - SMS - Oferta TV Oleo Soja 29022024",
      filtro: "Clientes SP filtro IdCsdmfilialpreferencial, clientes propensos Alto Medio e Baixo Relacionamento nos Grupos: Amaciante - Café - Lava Roupas - Leite UHT - Papel Higienico",
      abordado: 28000,
      grupoControle: 7152,
      produtos: "3996786-Oleo Soja Vitaliv 900ml Pet,262986-Oleo Soja Soya 900ml Pet,504947-Oleo Soja Liza 900ml Pet,1545957-Oleo Soja Leve 900ml Pet,994928-Oleo Soja Concordia 900ml Pet,165646-Oleo Soja Cocamar 900ml Pet,593761-Oleo Soja Coamo 900ml Pet,4415760-Oleo Soja Biorganica 500ml Organico",
      mensuracao: "0 dia"
    },
    // Adicione mais campanhas conforme necessário
  };

  function mostrarDados() {
    const select = document.getElementById("campanhaSelect");
    const campanhaSelecionada = select.value;

    const dadosCampanha = dadosCampanhas[campanhaSelecionada];

    // Exibir os dados da campanha selecionada
    const nomeCampanha = document.getElementById("campanhaNome").querySelector("h3");
    nomeCampanha.textContent = dadosCampanha.nome;

    const filtroCampanha = document.getElementById("campanhaFiltro").querySelector("p");
    const quebraNome = dadosCampanha.filtro.split(',').join('<br>');
    filtroCampanha.innerHTML = `Filtro: ${quebraNome}`;

    const campanhaPublicoAbordado = document.getElementById("campanhaPublicoAbordado").querySelector("p");
    campanhaPublicoAbordado.textContent = `Abordado: ${dadosCampanha.abordado}`;

    const campanhaPublicoGrupoControle = document.getElementById("campanhaPublicoGrupoControle").querySelector("p");
    campanhaPublicoGrupoControle.textContent = `Grupo Controle: ${dadosCampanha.grupoControle}`;

    const produtoMensuracaoCampanha = document.getElementById("campanhaProdutosMensuracao").querySelector("p");
    const produtosQuebrados = dadosCampanha.produtos.split(',').join('<br>');
    produtoMensuracaoCampanha.innerHTML = `
      Produtos:<br><br>
      ${produtosQuebrados}<br>
    `;

    const campanhaMensuracao = document.getElementById("campanhaMensuracao").querySelector("p");
    campanhaMensuracao.textContent = `Período Mensuração: ${dadosCampanha.mensuracao}`;
  }

  function exportarParaExcel() {
    const dadosCampanha = dadosCampanhas[document.getElementById("campanhaSelect").value];
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet([dadosCampanha]);
      XLSX.utils.book_append_sheet(wb, ws, "Campanha");
      XLSX.writeFile(wb, "dados_campanha.xlsx");
    }