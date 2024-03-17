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
    nome: "69138 - Custom Audience - Acao Picanha & File Mignon",
    filtro: "Clientes com compras nos produtos ofertados nos últimos 180 dias",
    abordado: 4675,
    grupoControle: "Apropriação",
    produtos: "684554-Picanha Bov Resfr Vacuo Kg,182800-Picanha Bov Resfr Especial Vacuo Kg,684600-File Mignon Bov Resfr Vacuo Kg",
    mensuracao: "2 dias"
  },
  campanha2: {
    nome: "69139 - Custom Audience - Jornada Inativos Quarta Semana 01032024",
    filtro: "Base Externa com Faixa de Inatividade Estipulada",
    abordado: 66875,
    grupoControle: "Base Externa",
    produtos: "115746-Queijo Mussarela Kg Fatiada,170917-Marg Qualy 500g  C/Sal,810967-Molho Tom Fugini 300g Trad Sache,2122251-Amac Soft Plus 5l Azul Floral,2824280-Mac Nissin 85g  L6p5 Gal Caipira,136077-Mac Nissin 85g Bacon,2875659-Mac Nissin 85g Camarao C/ Alho,4395727-Mac Nissin 85g Carfrangao Fgo C/Carne,133043-Mac Nissin 85g Carne,578860-Mac Nissin 85g Carne C/Tomate,4077695-Mac Nissin 85g Chico Bento Milho Na Manteiga,2813017-Mac Nissin 85g Costela,2813327-Mac Nissin 85g Fgo C/Alho,102369-Mac Nissin 85g Gal Caipira,4415221-Mac Nissin 85g Gal Caipira C/6 L+p-,4395743-Mac Nissin 85g Galicaibacon Galinha C/Bacon,4395735-Mac Nissin 85g Galigume Galinha C/ Legumes,102350-Mac Nissin 85g Galinha,102393-Mac Nissin 85g Monica Carne,102440-Mac Nissin 85g Monica Galinha,102407-Mac Nissin 85g Monica Tomate,2724421-Mac Nissin 85g Sabor Fgo Assado C/Limao",
    mensuracao: "5 dias"
  },
  campanha3: {
    nome: "69154 - Email - Festival Beleza Publico 1 01032024",
    filtro: "Clientes Não Propensos aos Grupos: 'Condicionador;Creme Dental;Desodorante Talco e Colônia;Sabonete;Shampoo;Tratamento e Finalização Cabelos'",
    abordado: 110000,
    grupoControle: 8833,
    produtos: "2867621-Desod Red Apple 55g Creme Acropole,2867605-Desod Red Apple 55g Creme Active,2867613-Desod Red Apple 55g Creme Natural,131741-Desod Red Apple 55g Creme Unissex,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,4066464-Gelatina Cab Salon Line 550g To De Cacho Super Definicao,2892596-Sh Pantene 400ml Bambu Nutri & Cresce,2062402-Sh Pantene 400ml Brilho Extremo,1650106-Sh Pantene 400ml Cachos Hidra-Vit,1651498-Sh Pantene 400ml Hidratacao,2101840-Sh Pantene 400ml Hidro Cauterizacao,1650130-Sh Pantene 400ml Liso Extremo,2843781-Sh Pantene 400ml Micelar,2733293-Sh Pantene 400ml Pre Hidro Cauterizacao,1986414-Sh Pantene 400ml Restauracao,169269-Sab Protex 85g Balance,4083164-Sab Protex 85g Carvao Detox,547344-Sab Protex 85g Cream,2835860-Sab Protex 85g Cuid Int Delicate Care,2836483-Sab Protex 85g Cuid Int Fresh Equilib,3971651-Sab Protex 85g Duo Protect,1025660-Sab Protex 85g Erva Doce,1612468-Sab Protex 85g Limp Profunda,2043424-Sab Protex 85g Men Sports,2766671-Sab Protex 85g Men Tripla Acao,2014807-Sab Protex 85g Vitamina e,1615165-Gel Dent Sorriso 90g Fresh Ex Mint,401200-Gel Dent Sorriso 90g Fresh Hortela,2840154-Gel Dent Sorriso 90g Fresh Hortela C/3,439320-Gel Dent Sorriso 90g Fresh Impact Menta,401188-Gel Dent Sorriso 90g Fresh Menta",
    mensuracao: "12 dias"
  },
  campanha4: {
    nome: "69156 - Email - Festival Beleza Publico 2 01032024",
    filtro: "Clientes de Baixo Relacionamento aos Grupos: 'Condicionador;Creme Dental;Desodorante Talco e Colônia;Sabonete;Shampoo;Tratamento e Finalização Cabelos',  Com compras nos últimos 90 dias e sem compras nos últimos 30 a 15 dias",
    abordado: 85386,
    grupoControle: 8517,
    produtos: "2867621-Desod Red Apple 55g Creme Acropole,2867605-Desod Red Apple 55g Creme Active,2867613-Desod Red Apple 55g Creme Natural,131741-Desod Red Apple 55g Creme Unissex,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,4066464-Gelatina Cab Salon Line 550g To De Cacho Super Definicao,2892596-Sh Pantene 400ml Bambu Nutri & Cresce,2062402-Sh Pantene 400ml Brilho Extremo,1650106-Sh Pantene 400ml Cachos Hidra-Vit,1651498-Sh Pantene 400ml Hidratacao,2101840-Sh Pantene 400ml Hidro Cauterizacao,1650130-Sh Pantene 400ml Liso Extremo,2843781-Sh Pantene 400ml Micelar,2733293-Sh Pantene 400ml Pre Hidro Cauterizacao,1986414-Sh Pantene 400ml Restauracao,169269-Sab Protex 85g Balance,4083164-Sab Protex 85g Carvao Detox,547344-Sab Protex 85g Cream,2835860-Sab Protex 85g Cuid Int Delicate Care,2836483-Sab Protex 85g Cuid Int Fresh Equilib,3971651-Sab Protex 85g Duo Protect,1025660-Sab Protex 85g Erva Doce,1612468-Sab Protex 85g Limp Profunda,2043424-Sab Protex 85g Men Sports,2766671-Sab Protex 85g Men Tripla Acao,2014807-Sab Protex 85g Vitamina e,1615165-Gel Dent Sorriso 90g Fresh Ex Mint,401200-Gel Dent Sorriso 90g Fresh Hortela,2840154-Gel Dent Sorriso 90g Fresh Hortela C/3,439320-Gel Dent Sorriso 90g Fresh Impact Menta,401188-Gel Dent Sorriso 90g Fresh Menta",
    mensuracao: "12 dias"
  },
  campanha5: {
    nome: "69145 - Email - Sabadao Amigao Publico 1 02032024",
    filtro: "Clientes do ciclo de vida: Ativação e Rentabilização com CLV: C, Sem compras no período de 30 a 15 dias",
    abordado: 74545,
    grupoControle: 8501,
    produtos: "1615165-Gel Dent Sorriso 90g Fresh Ex Mint,401200-Gel Dent Sorriso 90g Fresh Hortela,2840154-Gel Dent Sorriso 90g Fresh Hortela C/3,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,4413571-Amac Comfort 1.5l Conc Lavanda,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2928663-Lava Louca Ype 500ml Neutro C/6,3971465-Achoc Po Nescau 1.02kg Sache,4017056-Cafe Melitta 500g Extra Forte Pouch,815063-Cafe Melitta 500g Extra Forte Vacuo,160822-Cafe Melitta 500g Tradicional,2762722-Cafe Melitta 500g Tradicional Pouch,2930455-Bebida Lact Very Gurt 1.250g Morango,2930463-Bebida Lact Very Gurt 1.250g Salada Fruta,2889846-Biscoito Marilan 80g Waffer Chocolate,2889820-Biscoito Marilan 80g Waffer Limao,2889838-Biscoito Marilan 80g Waffer Morango,553913-Cafe Caboclo 500g Vacuo,1625233-Leite Condensado Moca 395g Tp,3975061-Lava Roupa Omo 1.6kg Lavagem Perf Gts 150g,949973-Cafe 3 Coracoes 500g Trad Vacuo,2834243-Ketchup Heinz 1.033kg Tradicional,628352-Feijao Carioca Saboroso 1kg T1,984353-Filtro Papel Melitta 103 Grande C/30",
    mensuracao: "0 dia"
  },
  campanha6: {
    nome: "69147 - Email - Sabadao Amigao Publico 2 02032024",
    filtro: "Clientes do ciclo de vida: Retenção com CLV: B",
    abordado: 20275,
    grupoControle: 6517,
    produtos: "1615165-Gel Dent Sorriso 90g Fresh Ex Mint,401200-Gel Dent Sorriso 90g Fresh Hortela,2840154-Gel Dent Sorriso 90g Fresh Hortela C/3,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,4413571-Amac Comfort 1.5l Conc Lavanda,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2928663-Lava Louca Ype 500ml Neutro C/6,3971465-Achoc Po Nescau 1.02kg Sache,4017056-Cafe Melitta 500g Extra Forte Pouch,815063-Cafe Melitta 500g Extra Forte Vacuo,160822-Cafe Melitta 500g Tradicional,2762722-Cafe Melitta 500g Tradicional Pouch,2930455-Bebida Lact Very Gurt 1.250g Morango,2930463-Bebida Lact Very Gurt 1.250g Salada Fruta,2889846-Biscoito Marilan 80g Waffer Chocolate,2889820-Biscoito Marilan 80g Waffer Limao,2889838-Biscoito Marilan 80g Waffer Morango,553913-Cafe Caboclo 500g Vacuo,1625233-Leite Condensado Moca 395g Tp,3975061-Lava Roupa Omo 1.6kg Lavagem Perf Gts 150g,949973-Cafe 3 Coracoes 500g Trad Vacuo,2834243-Ketchup Heinz 1.033kg Tradicional,628352-Feijao Carioca Saboroso 1kg T1,984353-Filtro Papel Melitta 103 Grande C/30",
    mensuracao: "0 dia"
  },
  campanha7: {
    nome: "69146 - SMS - Acao de Picanha e File Mignon 02032024",
    filtro: "Clientes com compras nos produtos ofertados nos últimos 180 dias",
    abordado: 13847,
    grupoControle: 5663,
    produtos: "684554-Picanha Bov Resfr Vacuo Kg,182800-Picanha Bov Resfr Especial Vacuo Kg,684600-File Mignon Bov Resfr Vacuo Kg",
    mensuracao: "1 dia"
  },
  campanha8: {
    nome: "69155 - SMS - Festival Beleza Publico 1 01032024",
    filtro: "Clientes Não Propensos aos Grupos: 'Condicionador;Creme Dental;Desodorante Talco e Colônia;Sabonete;Shampoo;Tratamento e Finalização Cabelos'",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "2867621-Desod Red Apple 55g Creme Acropole,2867605-Desod Red Apple 55g Creme Active,2867613-Desod Red Apple 55g Creme Natural,131741-Desod Red Apple 55g Creme Unissex,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,4066464-Gelatina Cab Salon Line 550g To De Cacho Super Definicao,2892596-Sh Pantene 400ml Bambu Nutri & Cresce,2062402-Sh Pantene 400ml Brilho Extremo,1650106-Sh Pantene 400ml Cachos Hidra-Vit,1651498-Sh Pantene 400ml Hidratacao,2101840-Sh Pantene 400ml Hidro Cauterizacao,1650130-Sh Pantene 400ml Liso Extremo,2843781-Sh Pantene 400ml Micelar,2733293-Sh Pantene 400ml Pre Hidro Cauterizacao,1986414-Sh Pantene 400ml Restauracao,169269-Sab Protex 85g Balance,4083164-Sab Protex 85g Carvao Detox,547344-Sab Protex 85g Cream,2835860-Sab Protex 85g Cuid Int Delicate Care,2836483-Sab Protex 85g Cuid Int Fresh Equilib,3971651-Sab Protex 85g Duo Protect,1025660-Sab Protex 85g Erva Doce,1612468-Sab Protex 85g Limp Profunda,2043424-Sab Protex 85g Men Sports,2766671-Sab Protex 85g Men Tripla Acao,2014807-Sab Protex 85g Vitamina e,1615165-Gel Dent Sorriso 90g Fresh Ex Mint,401200-Gel Dent Sorriso 90g Fresh Hortela,2840154-Gel Dent Sorriso 90g Fresh Hortela C/3,439320-Gel Dent Sorriso 90g Fresh Impact Menta,401188-Gel Dent Sorriso 90g Fresh Menta",
    mensuracao: "12 dias"
  },
  campanha9: {
    nome: "69157 - SMS - Festival Beleza Publico 2 01032024",
    filtro: "Clientes de Baixo Relacionamento aos Grupos: 'Condicionador;Creme Dental;Desodorante Talco e Colônia;Sabonete;Shampoo;Tratamento e Finalização Cabelos',  Com compras nos últimos 90 dias e sem compras nos últimos 30 a 15 dias",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "2867621-Desod Red Apple 55g Creme Acropole,2867605-Desod Red Apple 55g Creme Active,2867613-Desod Red Apple 55g Creme Natural,131741-Desod Red Apple 55g Creme Unissex,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,4066464-Gelatina Cab Salon Line 550g To De Cacho Super Definicao,2892596-Sh Pantene 400ml Bambu Nutri & Cresce,2062402-Sh Pantene 400ml Brilho Extremo,1650106-Sh Pantene 400ml Cachos Hidra-Vit,1651498-Sh Pantene 400ml Hidratacao,2101840-Sh Pantene 400ml Hidro Cauterizacao,1650130-Sh Pantene 400ml Liso Extremo,2843781-Sh Pantene 400ml Micelar,2733293-Sh Pantene 400ml Pre Hidro Cauterizacao,1986414-Sh Pantene 400ml Restauracao,169269-Sab Protex 85g Balance,4083164-Sab Protex 85g Carvao Detox,547344-Sab Protex 85g Cream,2835860-Sab Protex 85g Cuid Int Delicate Care,2836483-Sab Protex 85g Cuid Int Fresh Equilib,3971651-Sab Protex 85g Duo Protect,1025660-Sab Protex 85g Erva Doce,1612468-Sab Protex 85g Limp Profunda,2043424-Sab Protex 85g Men Sports,2766671-Sab Protex 85g Men Tripla Acao,2014807-Sab Protex 85g Vitamina e,1615165-Gel Dent Sorriso 90g Fresh Ex Mint,401200-Gel Dent Sorriso 90g Fresh Hortela,2840154-Gel Dent Sorriso 90g Fresh Hortela C/3,439320-Gel Dent Sorriso 90g Fresh Impact Menta,401188-Gel Dent Sorriso 90g Fresh Menta",
    mensuracao: "12 dias"
  },
  campanha10: {
    nome: "69158 - SMS - Jornada Inativos Quarta Semana 29022024",
    filtro: "Base Externa com Faixa de Inatividade Estipulada",
    abordado: 58885,
    grupoControle: "Base Externa",
    produtos: "115746-Queijo Mussarela Kg Fatiada,170917-Marg Qualy 500g  C/Sal,810967-Molho Tom Fugini 300g Trad Sache,2122251-Amac Soft Plus 5l Azul Floral,2824280-Mac Nissin 85g  L6p5 Gal Caipira,136077-Mac Nissin 85g Bacon,2875659-Mac Nissin 85g Camarao C/ Alho,4395727-Mac Nissin 85g Carfrangao Fgo C/Carne,133043-Mac Nissin 85g Carne,578860-Mac Nissin 85g Carne C/Tomate,4077695-Mac Nissin 85g Chico Bento Milho Na Manteiga,2813017-Mac Nissin 85g Costela,2813327-Mac Nissin 85g Fgo C/Alho,102369-Mac Nissin 85g Gal Caipira,4415221-Mac Nissin 85g Gal Caipira C/6 L+p-,4395743-Mac Nissin 85g Galicaibacon Galinha C/Bacon,4395735-Mac Nissin 85g Galigume Galinha C/ Legumes,102350-Mac Nissin 85g Galinha,102393-Mac Nissin 85g Monica Carne,102440-Mac Nissin 85g Monica Galinha,102407-Mac Nissin 85g Monica Tomate,2724421-Mac Nissin 85g Sabor Fgo Assado C/Limao",
    mensuracao: "6 dias"
  },
  campanha11: {
    nome: "69140 - SMS - Oferta Relampago Mistura Lactea 01032024",
    filtro: "Clientes propensos Alto - Médio e Baixo Relacionamento no Grupo: Misturas para Preparo",
    abordado: 20000,
    grupoControle: 6489,
    produtos: "2868156-Mist Lactea Mococa 395g Condensada",
    mensuracao: "0 dia"
  },
  campanha12: {
    nome: "69150 - SMS - Sabadao Amigao Publico 1 MS 02032024",
    filtro: "Clientes do MS do ciclo de vida: Ativação e Rentabilização com CLV: C, Sem compras no período de 30 a 15 dias",
    abordado: 5296,
    grupoControle: "Apropriação",
    produtos: "1615165-Gel Dent Sorriso 90g Fresh Ex Mint,401200-Gel Dent Sorriso 90g Fresh Hortela,2840154-Gel Dent Sorriso 90g Fresh Hortela C/3,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,4413571-Amac Comfort 1.5l Conc Lavanda,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2928663-Lava Louca Ype 500ml Neutro C/6,3971465-Achoc Po Nescau 1.02kg Sache,4017056-Cafe Melitta 500g Extra Forte Pouch,815063-Cafe Melitta 500g Extra Forte Vacuo,160822-Cafe Melitta 500g Tradicional,2762722-Cafe Melitta 500g Tradicional Pouch,2930455-Bebida Lact Very Gurt 1.250g Morango,2930463-Bebida Lact Very Gurt 1.250g Salada Fruta,2889846-Biscoito Marilan 80g Waffer Chocolate,2889820-Biscoito Marilan 80g Waffer Limao,2889838-Biscoito Marilan 80g Waffer Morango,553913-Cafe Caboclo 500g Vacuo,1625233-Leite Condensado Moca 395g Tp,3975061-Lava Roupa Omo 1.6kg Lavagem Perf Gts 150g,949973-Cafe 3 Coracoes 500g Trad Vacuo,2834243-Ketchup Heinz 1.033kg Tradicional,628352-Feijao Carioca Saboroso 1kg T1,984353-Filtro Papel Melitta 103 Grande C/30",
    mensuracao: "0 dia"
  },
  campanha13: {
    nome: "69148 - SMS - Sabadao Amigao Publico 1 PR 02032024",
    filtro: "Clientes do PR do ciclo de vida: Ativação e Rentabilização com CLV: C, Sem compras no período de 30 a 15 dias",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "1615165-Gel Dent Sorriso 90g Fresh Ex Mint,401200-Gel Dent Sorriso 90g Fresh Hortela,2840154-Gel Dent Sorriso 90g Fresh Hortela C/3,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,4413571-Amac Comfort 1.5l Conc Lavanda,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2928663-Lava Louca Ype 500ml Neutro C/6,3971465-Achoc Po Nescau 1.02kg Sache,4017056-Cafe Melitta 500g Extra Forte Pouch,815063-Cafe Melitta 500g Extra Forte Vacuo,160822-Cafe Melitta 500g Tradicional,2762722-Cafe Melitta 500g Tradicional Pouch,2930455-Bebida Lact Very Gurt 1.250g Morango,2930463-Bebida Lact Very Gurt 1.250g Salada Fruta,2889846-Biscoito Marilan 80g Waffer Chocolate,2889820-Biscoito Marilan 80g Waffer Limao,2889838-Biscoito Marilan 80g Waffer Morango,553913-Cafe Caboclo 500g Vacuo,1625233-Leite Condensado Moca 395g Tp,3975061-Lava Roupa Omo 1.6kg Lavagem Perf Gts 150g,949973-Cafe 3 Coracoes 500g Trad Vacuo,2834243-Ketchup Heinz 1.033kg Tradicional,628352-Feijao Carioca Saboroso 1kg T1,984353-Filtro Papel Melitta 103 Grande C/30",
    mensuracao: "0 dia"
  },
  campanha14: {
    nome: "69149 - SMS - Sabadao Amigao Publico 1 SP 02032024",
    filtro: "Clientes do SP do ciclo de vida: Ativação e Rentabilização com CLV: C, Sem compras no período de 30 a 15 dias",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "1615165-Gel Dent Sorriso 90g Fresh Ex Mint,401200-Gel Dent Sorriso 90g Fresh Hortela,2840154-Gel Dent Sorriso 90g Fresh Hortela C/3,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,4413571-Amac Comfort 1.5l Conc Lavanda,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2928663-Lava Louca Ype 500ml Neutro C/6,3971465-Achoc Po Nescau 1.02kg Sache,4017056-Cafe Melitta 500g Extra Forte Pouch,815063-Cafe Melitta 500g Extra Forte Vacuo,160822-Cafe Melitta 500g Tradicional,2762722-Cafe Melitta 500g Tradicional Pouch,2930455-Bebida Lact Very Gurt 1.250g Morango,2930463-Bebida Lact Very Gurt 1.250g Salada Fruta,2889846-Biscoito Marilan 80g Waffer Chocolate,2889820-Biscoito Marilan 80g Waffer Limao,2889838-Biscoito Marilan 80g Waffer Morango,553913-Cafe Caboclo 500g Vacuo,1625233-Leite Condensado Moca 395g Tp,3975061-Lava Roupa Omo 1.6kg Lavagem Perf Gts 150g,949973-Cafe 3 Coracoes 500g Trad Vacuo,2834243-Ketchup Heinz 1.033kg Tradicional,628352-Feijao Carioca Saboroso 1kg T1,984353-Filtro Papel Melitta 103 Grande C/30",
    mensuracao: "0 dia"
  },
  campanha15: {
    nome: "69153 - SMS - Sabadao Amigao Publico 2 MS 02032024",
    filtro: "Clientes do MS do ciclo de vida: Retenção com CLV: B",
    abordado: 2029,
    grupoControle: "Apropriação",
    produtos: "1615165-Gel Dent Sorriso 90g Fresh Ex Mint,401200-Gel Dent Sorriso 90g Fresh Hortela,2840154-Gel Dent Sorriso 90g Fresh Hortela C/3,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,4413571-Amac Comfort 1.5l Conc Lavanda,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2928663-Lava Louca Ype 500ml Neutro C/6,3971465-Achoc Po Nescau 1.02kg Sache,4017056-Cafe Melitta 500g Extra Forte Pouch,815063-Cafe Melitta 500g Extra Forte Vacuo,160822-Cafe Melitta 500g Tradicional,2762722-Cafe Melitta 500g Tradicional Pouch,2930455-Bebida Lact Very Gurt 1.250g Morango,2930463-Bebida Lact Very Gurt 1.250g Salada Fruta,2889846-Biscoito Marilan 80g Waffer Chocolate,2889820-Biscoito Marilan 80g Waffer Limao,2889838-Biscoito Marilan 80g Waffer Morango,553913-Cafe Caboclo 500g Vacuo,1625233-Leite Condensado Moca 395g Tp,3975061-Lava Roupa Omo 1.6kg Lavagem Perf Gts 150g,949973-Cafe 3 Coracoes 500g Trad Vacuo,2834243-Ketchup Heinz 1.033kg Tradicional,628352-Feijao Carioca Saboroso 1kg T1,984353-Filtro Papel Melitta 103 Grande C/30",
    mensuracao: "0 dia"
  },
  campanha16: {
    nome: "69151 - SMS - Sabadao Amigao Publico 2 PR 02032024",
    filtro: "Clientes do PR do ciclo de vida: Retenção com CLV: B",
    abordado: 9033,
    grupoControle: 5202,
    produtos: "1615165-Gel Dent Sorriso 90g Fresh Ex Mint,401200-Gel Dent Sorriso 90g Fresh Hortela,2840154-Gel Dent Sorriso 90g Fresh Hortela C/3,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,4413571-Amac Comfort 1.5l Conc Lavanda,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2928663-Lava Louca Ype 500ml Neutro C/6,3971465-Achoc Po Nescau 1.02kg Sache,4017056-Cafe Melitta 500g Extra Forte Pouch,815063-Cafe Melitta 500g Extra Forte Vacuo,160822-Cafe Melitta 500g Tradicional,2762722-Cafe Melitta 500g Tradicional Pouch,2930455-Bebida Lact Very Gurt 1.250g Morango,2930463-Bebida Lact Very Gurt 1.250g Salada Fruta,2889846-Biscoito Marilan 80g Waffer Chocolate,2889820-Biscoito Marilan 80g Waffer Limao,2889838-Biscoito Marilan 80g Waffer Morango,553913-Cafe Caboclo 500g Vacuo,1625233-Leite Condensado Moca 395g Tp,3975061-Lava Roupa Omo 1.6kg Lavagem Perf Gts 150g,949973-Cafe 3 Coracoes 500g Trad Vacuo,2834243-Ketchup Heinz 1.033kg Tradicional,628352-Feijao Carioca Saboroso 1kg T1,984353-Filtro Papel Melitta 103 Grande C/30",
    mensuracao: "0 dia"
  },
  campanha17: {
    nome: "69152 - SMS - Sabadao Amigao Publico 2 SP 02032024",
    filtro: "Clientes do SP do ciclo de vida: Retenção com CLV: B",
    abordado: 9553,
    grupoControle: 5337,
    produtos: "1615165-Gel Dent Sorriso 90g Fresh Ex Mint,401200-Gel Dent Sorriso 90g Fresh Hortela,2840154-Gel Dent Sorriso 90g Fresh Hortela C/3,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,4413571-Amac Comfort 1.5l Conc Lavanda,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2928663-Lava Louca Ype 500ml Neutro C/6,3971465-Achoc Po Nescau 1.02kg Sache,4017056-Cafe Melitta 500g Extra Forte Pouch,815063-Cafe Melitta 500g Extra Forte Vacuo,160822-Cafe Melitta 500g Tradicional,2762722-Cafe Melitta 500g Tradicional Pouch,2930455-Bebida Lact Very Gurt 1.250g Morango,2930463-Bebida Lact Very Gurt 1.250g Salada Fruta,2889846-Biscoito Marilan 80g Waffer Chocolate,2889820-Biscoito Marilan 80g Waffer Limao,2889838-Biscoito Marilan 80g Waffer Morango,553913-Cafe Caboclo 500g Vacuo,1625233-Leite Condensado Moca 395g Tp,3975061-Lava Roupa Omo 1.6kg Lavagem Perf Gts 150g,949973-Cafe 3 Coracoes 500g Trad Vacuo,2834243-Ketchup Heinz 1.033kg Tradicional,628352-Feijao Carioca Saboroso 1kg T1,984353-Filtro Papel Melitta 103 Grande C/30",
    mensuracao: "0 dia"
  },
  campanha18: {
    nome: "69176 - Email - Abastecimento Vitrine 1 Publico 1 05032024",
    filtro: "Clientes do ciclo de Ativação e Rentabilização; CLV A ou B; sem compra nos últimos 30 a 60 dias",
    abordado: 97435,
    grupoControle: 8743,
    produtos: "1896814-Acucar Refinado Caravelas 1kg,1612832-Arroz Emporio Sao Joao 2kg,114189-Arroz Tio Joao 5kg Tp1,1574345-Farinha Trigo Globo 1kg,2876094-Feijao Carioca Colibri 2kg,2309091-Leite Uht Jussara 1l Zero Lactose Integral Garrafa,4162501-Oleo Girassol Soya 900ml,1618709-Acucar Cristal Native 5kg Org,1857975-Arroz Prato Fino 2kg Parboilizado,2767562-Arroz Rizzeto 5kg T1 Premium,442291-Farinha Trigo Coamo 5kg Comum,1564501-Feijao Caldo Bom 1kg Preto Ouro,777854-Leite Uht Frimesa 1l Zero Lactose,355097-Oleo Milho Liza 900ml",
    mensuracao: "6 dias"
  },
  campanha19: {
    nome: "69178 - Email - Abastecimento Vitrine 1 Publico 2 05032024",
    filtro: "Clientes do ciclo de Retenção e são CLV A.",
    abordado: 20686,
    grupoControle: 6559,
    produtos: "1896814-Acucar Refinado Caravelas 1kg,1612832-Arroz Emporio Sao Joao 2kg,114189-Arroz Tio Joao 5kg Tp1,1574345-Farinha Trigo Globo 1kg,2876094-Feijao Carioca Colibri 2kg,2309091-Leite Uht Jussara 1l Zero Lactose Integral Garrafa,4162501-Oleo Girassol Soya 900ml,1618709-Acucar Cristal Native 5kg Org,1857975-Arroz Prato Fino 2kg Parboilizado,2767562-Arroz Rizzeto 5kg T1 Premium,442291-Farinha Trigo Coamo 5kg Comum,1564501-Feijao Caldo Bom 1kg Preto Ouro,777854-Leite Uht Frimesa 1l Zero Lactose,355097-Oleo Milho Liza 900ml",
    mensuracao: "6 dias"
  },
  campanha20: {
    nome: "69190 - Email - Encarte Pascoa II Organize-se pra Pascoa Disp 1 Pub 1 05032024",
    filtro: "Clientes propensos “não compradores” as categorias dos produtos ofertados (departamento de limpeza)",
    abordado: 118257,
    grupoControle: 8885,
    produtos: "2861445-Desinf Lysoform 1l Citrus,2861429-Desinf Lysoform 1l Lavanda,187518-Desinf Lysoform 1l Original,2718405-Desinf Lysoform 1l Suave,4040481-Querosene Petrus 500ml,2829967-Querosene Petrus 500ml Lavanda,4040490-Querosene Petrus 500ml Perfumado Eucalipto,4040503-Querosene Petrus 500ml Perfumado Floral,3986969-Limp Limpol 500ml Inox,2945460-Lava Roupa Ola 1l Liq Agua Rosa,2014700-Lava Roupa Ola 1l Liq Bebe,4411226-Lava Roupa Ola 1l Liq Bebe Lavanda,2763737-Lava Roupa Ola 1l Liq Coco,2788110-Lava Roupa Ola 1l Liq Cores Escuras,1025694-Lava Roupa Ola 1l Liq Original,3990567-Desinf Ype 500ml Antibac Gatilho,4002296-Lava Roupa Assim 1,6kg Po Triplacao",
    mensuracao: "8 dias"
  },
  campanha21: {
    nome: "69191 - Email - Encarte Pascoa II Organize-se pra Pascoa Disp 1 Pub 2 05032024",
    filtro: "Clientes propensos, de alto e médio relacionamento, as categorias dos produtos ofertados (departamento de limpeza) mas que estão de 15 a 45 dias sem comprar.",
    abordado: 68707,
    grupoControle: 8427,
    produtos: "2861445-Desinf Lysoform 1l Citrus,2861429-Desinf Lysoform 1l Lavanda,187518-Desinf Lysoform 1l Original,2718405-Desinf Lysoform 1l Suave,4040481-Querosene Petrus 500ml,2829967-Querosene Petrus 500ml Lavanda,4040490-Querosene Petrus 500ml Perfumado Eucalipto,4040503-Querosene Petrus 500ml Perfumado Floral,3986969-Limp Limpol 500ml Inox,2945460-Lava Roupa Ola 1l Liq Agua Rosa,2014700-Lava Roupa Ola 1l Liq Bebe,4411226-Lava Roupa Ola 1l Liq Bebe Lavanda,2763737-Lava Roupa Ola 1l Liq Coco,2788110-Lava Roupa Ola 1l Liq Cores Escuras,1025694-Lava Roupa Ola 1l Liq Original,3990567-Desinf Ype 500ml Antibac Gatilho,4002296-Lava Roupa Assim 1,6kg Po Triplacao",
    mensuracao: "8 dias"
  },
  campanha22: {
    nome: "69192 - Email - Encarte Pascoa II Organize-se pra Pascoa Disp 1 Pub 3 05032024",
    filtro: "Clientes propensos, de baixo relacionamento, as categorias dos produtos ofertados (departamento de limpeza).",
    abordado: 121303,
    grupoControle: 8902,
    produtos: "2861445-Desinf Lysoform 1l Citrus,2861429-Desinf Lysoform 1l Lavanda,187518-Desinf Lysoform 1l Original,2718405-Desinf Lysoform 1l Suave,4040481-Querosene Petrus 500ml,2829967-Querosene Petrus 500ml Lavanda,4040490-Querosene Petrus 500ml Perfumado Eucalipto,4040503-Querosene Petrus 500ml Perfumado Floral,3986969-Limp Limpol 500ml Inox,2945460-Lava Roupa Ola 1l Liq Agua Rosa,2014700-Lava Roupa Ola 1l Liq Bebe,4411226-Lava Roupa Ola 1l Liq Bebe Lavanda,2763737-Lava Roupa Ola 1l Liq Coco,2788110-Lava Roupa Ola 1l Liq Cores Escuras,1025694-Lava Roupa Ola 1l Liq Original,3990567-Desinf Ype 500ml Antibac Gatilho,4002296-Lava Roupa Assim 1,6kg Po Triplacao",
    mensuracao: "8 dias"
  },
  campanha23: {
    nome: "69185 - Email - TRADE MKT BRAHMA CHOPP 350ML PR MS 05032024",
    filtro: "Clientes do PR MS sem compras nos últimos 90 dias no Grupo: Cervejas",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "306550-Cerveja Brahma 350ml Lata",
    mensuracao: "11 dias"
  },
  campanha24: {
    nome: "69186 - Email - TRADE MKT BRAHMA CHOPP 350ML SP 05032024",
    filtro: "Clientes do SP sem compras nos últimos 90 dias no Grupo: Cervejas",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "306550-Cerveja Brahma 350ml Lata",
    mensuracao: "11 dias"
  },
  campanha25: {
    nome: "69183 - Email - TRADE MKT CORONA LN 330ML PR MS 05032024",
    filtro: "Clientes do PR MS com compras nos últimos 90 dias no Grupo: Cervejas",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "2864851-Cerveja Corona 330ml  Extra Long Neck",
    mensuracao: "11 dias"
  },
  campanha26: {
    nome: "69184 - Email - TRADE MKT CORONA LN 330ML SP 05032024",
    filtro: "Clientes do SP com compras nos últimos 90 dias no Grupo: Cervejas",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "2864851-Cerveja Corona 330ml  Extra Long Neck",
    mensuracao: "11 dias"
  },
  campanha27: {
    nome: "69195 - Email - TRADE MKT GUARANA ZERO 350ML 05032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Refrigerantes",
    abordado: 21377,
    grupoControle: 6617,
    produtos: "119504-Refrig Antarctica 350ml Guarana Zr Lt",
    mensuracao: "11 dias"
  },
  campanha28: {
    nome: "69196 - Email - TRADE MKT SKOL 350ML 05032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: 'Antarctica Sub Zero;Bavaria;Cerveja;Crystal;Lokal;Moema'",
    abordado: 21377,
    grupoControle: 6617,
    produtos: "109304-Cerveja Skol 350ml Pilsen Lata",
    mensuracao: "11 dias"
  },
  campanha29: {
    nome: "69187 - Email - TRADE MKT UNILEVER - FESTIVAL DA BELEZA CLEAR 05032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: 'Shampoo'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "2828529-Sh Clear L400p330ml Anticaspa Ice Cool Menthol,2871513-Sh Clear L400p330ml Anticaspa Hidrat Intensa,3989542-Sh Clear L400p330ml Anticaspa Jojoba Melaleuca,2871726-Sh Clear L400p330ml Anticaspa Detox Diario",
    mensuracao: "11 dias"
  },
  campanha30: {
    nome: "69188 - Email - TRADE MKT UNILEVER - HELLMANNS 05032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: 'Antarctica Sub Zero;Bavaria;Cerveja;Crystal;Lokal;Moema'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "2106124-Maionese Hellmann's 335g Mais Sqz,2837285-Maionese Hellmann's 400g Rf,4076079-Maionese Hellmann's 330g Supreme Sqz,2088215-Ketchup Hellmann's 380g Sqz Tradicional,3940594-Ketchup Hellmann's 380g Sqz Trad C/2 50%desc,4003179-Maionese Hellmann's 750g Sqz",
    mensuracao: "11 dias"
  },
  campanha31: {
    nome: "69181 - Push - Abastecimento Vitrine 1 Publico 1 05032024",
    filtro: "Clientes do ciclo de Retenção e são CLV A.",
    abordado: 12905,
    grupoControle: 6415,
    produtos: "1896814-Acucar Refinado Caravelas 1kg,1612832-Arroz Emporio Sao Joao 2kg,114189-Arroz Tio Joao 5kg Tp1,1574345-Farinha Trigo Globo 1kg,2876094-Feijao Carioca Colibri 2kg,2309091-Leite Uht Jussara 1l Zero Lactose Integral Garrafa,4162501-Oleo Girassol Soya 900ml,1618709-Acucar Cristal Native 5kg Org,1857975-Arroz Prato Fino 2kg Parboilizado,2767562-Arroz Rizzeto 5kg T1 Premium,442291-Farinha Trigo Coamo 5kg Comum,1564501-Feijao Caldo Bom 1kg Preto Ouro,777854-Leite Uht Frimesa 1l Zero Lactose,355097-Oleo Milho Liza 900ml",
    mensuracao: "6 dias"
  },
  campanha32: {
    nome: "69179 - SMS - Abastecimento Vitrine 1 Publico 1 05032024",
    filtro: "Clientes do ciclo de Ativação e Rentabilização; CLV A ou B; sem compra nos últimos 30 a 60 dias",
    abordado: 20000,
    grupoControle: 6489,
    produtos: "1896814-Acucar Refinado Caravelas 1kg,1612832-Arroz Emporio Sao Joao 2kg,114189-Arroz Tio Joao 5kg Tp1,1574345-Farinha Trigo Globo 1kg,2876094-Feijao Carioca Colibri 2kg,2309091-Leite Uht Jussara 1l Zero Lactose Integral Garrafa,4162501-Oleo Girassol Soya 900ml,1618709-Acucar Cristal Native 5kg Org,1857975-Arroz Prato Fino 2kg Parboilizado,2767562-Arroz Rizzeto 5kg T1 Premium,442291-Farinha Trigo Coamo 5kg Comum,1564501-Feijao Caldo Bom 1kg Preto Ouro,777854-Leite Uht Frimesa 1l Zero Lactose,355097-Oleo Milho Liza 900ml",
    mensuracao: "6 dias"
  },
  campanha33: {
    nome: "69180 - SMS - Abastecimento Vitrine 1 Publico 2 05032024",
    filtro: "Clientes do ciclo de Retenção e são CLV A.",
    abordado: 10829,
    grupoControle: 6133,
    produtos: "1896814-Acucar Refinado Caravelas 1kg,1612832-Arroz Emporio Sao Joao 2kg,114189-Arroz Tio Joao 5kg Tp1,1574345-Farinha Trigo Globo 1kg,2876094-Feijao Carioca Colibri 2kg,2309091-Leite Uht Jussara 1l Zero Lactose Integral Garrafa,4162501-Oleo Girassol Soya 900ml,1618709-Acucar Cristal Native 5kg Org,1857975-Arroz Prato Fino 2kg Parboilizado,2767562-Arroz Rizzeto 5kg T1 Premium,442291-Farinha Trigo Coamo 5kg Comum,1564501-Feijao Caldo Bom 1kg Preto Ouro,777854-Leite Uht Frimesa 1l Zero Lactose,355097-Oleo Milho Liza 900ml",
    mensuracao: "6 dias"
  },
  campanha34: {
    nome: "69197 - SMS - Encarte Pascoa II Organize-se pra Pascoa Disp 1 Pub 1 05032024",
    filtro: "Clientes propensos “não compradores” as categorias dos produtos ofertados (departamento de limpeza)",
    abordado: 30000,
    grupoControle: 7276,
    produtos: "2861445-Desinf Lysoform 1l Citrus,2861429-Desinf Lysoform 1l Lavanda,187518-Desinf Lysoform 1l Original,2718405-Desinf Lysoform 1l Suave,4040481-Querosene Petrus 500ml,2829967-Querosene Petrus 500ml Lavanda,4040490-Querosene Petrus 500ml Perfumado Eucalipto,4040503-Querosene Petrus 500ml Perfumado Floral,3986969-Limp Limpol 500ml Inox,2945460-Lava Roupa Ola 1l Liq Agua Rosa,2014700-Lava Roupa Ola 1l Liq Bebe,4411226-Lava Roupa Ola 1l Liq Bebe Lavanda,2763737-Lava Roupa Ola 1l Liq Coco,2788110-Lava Roupa Ola 1l Liq Cores Escuras,1025694-Lava Roupa Ola 1l Liq Original,3990567-Desinf Ype 500ml Antibac Gatilho,4002296-Lava Roupa Assim 1.6kg Po Triplacao",
    mensuracao: "8 dias"
  },
  campanha35: {
    nome: "69198 - SMS - Encarte Pascoa II Organize-se pra Pascoa Disp 1 Pub 2 05032024",
    filtro: "Clientes propensos de alto e médio relacionamento as categorias dos produtos ofertados (departamento de limpeza) mas que estão de 15 a 45 dias sem comprar.",
    abordado: 33535,
    grupoControle: 7489,
    produtos: "2861445-Desinf Lysoform 1l Citrus,2861429-Desinf Lysoform 1l Lavanda,187518-Desinf Lysoform 1l Original,2718405-Desinf Lysoform 1l Suave,4040481-Querosene Petrus 500ml,2829967-Querosene Petrus 500ml Lavanda,4040490-Querosene Petrus 500ml Perfumado Eucalipto,4040503-Querosene Petrus 500ml Perfumado Floral,3986969-Limp Limpol 500ml Inox,2945460-Lava Roupa Ola 1l Liq Agua Rosa,2014700-Lava Roupa Ola 1l Liq Bebe,4411226-Lava Roupa Ola 1l Liq Bebe Lavanda,2763737-Lava Roupa Ola 1l Liq Coco,2788110-Lava Roupa Ola 1l Liq Cores Escuras,1025694-Lava Roupa Ola 1l Liq Original,3990567-Desinf Ype 500ml Antibac Gatilho,4002296-Lava Roupa Assim 1.6kg Po Triplacao",
    mensuracao: "8 dias"
  },
  campanha36: {
    nome: "69199 - SMS - Encarte Pascoa II Organize-se pra Pascoa Disp 1 Pub 3 05032024",
    filtro: "Clientes propensos de baixo relacionamento as categorias dos produtos ofertados (departamento de limpeza).",
    abordado: 30000,
    grupoControle: 7276,
    produtos: "2861445-Desinf Lysoform 1l Citrus,2861429-Desinf Lysoform 1l Lavanda,187518-Desinf Lysoform 1l Original,2718405-Desinf Lysoform 1l Suave,4040481-Querosene Petrus 500ml,2829967-Querosene Petrus 500ml Lavanda,4040490-Querosene Petrus 500ml Perfumado Eucalipto,4040503-Querosene Petrus 500ml Perfumado Floral,3986969-Limp Limpol 500ml Inox,2945460-Lava Roupa Ola 1l Liq Agua Rosa,2014700-Lava Roupa Ola 1l Liq Bebe,4411226-Lava Roupa Ola 1l Liq Bebe Lavanda,2763737-Lava Roupa Ola 1l Liq Coco,2788110-Lava Roupa Ola 1l Liq Cores Escuras,1025694-Lava Roupa Ola 1l Liq Original,3990567-Desinf Ype 500ml Antibac Gatilho,4002296-Lava Roupa Assim 1.6kg Po Triplacao",
    mensuracao: "8 dias"
  },
  campanha37: {
    nome: "69202 - Email - Festival da Beleza Retencao 06032024",
    filtro: "Clientes propensos de Alto e Médio relacionamento nos Grupo: 'Condicionador;Desodorante, Talco e Colônia;Sabonete;Shampoo;Tratamento e Finalização Cabelos'",
    abordado: 133006,
    grupoControle: 8166,
    produtos: "321508-Talco Granado 100g Antisseptico,1462946-Talco Granado 100g Antisseptico Fresh,2007495-Talco Granado 100g Antisseptico Pink,327409-Leite Hidr Paixao 200ml Inspiradora,529648-Leite Hidr Paixao 200ml Irresistivel,1632256-Leite Hidr Paixao 200ml Tentadora,2721155-Leite Hidr Paixao 400ml Inspiradora,2721163-Leite Hidr Paixao 400ml Irresistivel,2774437-Leite Hidr Paixao 400ml Tentadora,2872692-Sab Deoline 1l Liq Erva Doce,2870142-Sab Deoline 1l Liq Morango Champagne,2872706-Sab Deoline 1l Liq Pessego/Damasco,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,2768330-Sh Head Shoulders 200ml Men 3 Em 1  C/2,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade,2833468-Cr Pentear Seda 300ml Babosa Oleos,316725-Cr Pentear Seda 300ml Cachos Definidos,356530-Cr Pentear Seda 300ml Ceramidas,3969533-Cr Pentear Seda 300ml Colageno Vitamina c,810630-Cr Pentear Seda 300ml Color Pretos Lumin,2074540-Cr Pentear Seda 300ml Crespo Force,579360-Cr Pentear Seda 300ml Liso Perfeito,4391519-Cr Pentear Seda 300ml Probioticos + Biotina,4079647-Des Above 50ml Roll Fem Personalities Fierce Savage,4079663-Des Above 50ml Roll Fem Personalities Peaceful & Fashion,4079655-Des Above 50ml Roll Fem Sport Energy,4079620-Des Above 50ml Roll Masc Elements Ocean,4079639-Des Above 50ml Roll Masc Elements Shiny Silver,4079671-Des Above 50ml Roll Masc Sport Energy,752860-Sh Darling 350ml 2x1,752851-Sh Darling 350ml Ceramidas,4087402-Sh Darling 350ml Detox,4383516-Sh Darling 350ml Detox C/3,752835-Sh Darling 350ml Tilia,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,2768330-Sh Head Shoulders 200ml Men 3 Em 1  C/2,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade,2867621-Desod Red Apple 55g Creme Acropole,2867605-Desod Red Apple 55g Creme Active,2867613-Desod Red Apple 55g Creme Natural,131741-Desod Red Apple 55g Creme Unissex,1876643-Sab Granado 300ml Liq Calendula,4348370-Sab Granado 300ml Liq Calendula Refil,1876651-Sab Granado 300ml Liq Castanha,4348362-Sab Granado 300ml Liq Castanha Refil,2892596-Sh Pantene 400ml Bambu Nutri & Cresce,2062402-Sh Pantene 400ml Brilho Extremo,1650106-Sh Pantene 400ml Cachos Hidra-Vit,1651498-Sh Pantene 400ml Hidratacao,2101840-Sh Pantene 400ml Hidro Cauterizacao,1650130-Sh Pantene 400ml Liso Extremo,2843781-Sh Pantene 400ml Micelar,2733293-Sh Pantene 400ml Pre Hidro Cauterizacao,1986414-Sh Pantene 400ml Restauracao,3973387-Sab Flor Ype 85g Agua Coco/Alecrim,3973581-Sab Flor Ype 85g Flor Baunilha/Amendoas,3973301-Sab Flor Ype 85g Flor Laranjeira/Damasco,3973336-Sab Flor Ype 85g Flor Maca/ Framboesa,3973310-Sab Flor Ype 85g Fresia/Pessego,3973328-Sab Flor Ype 85g Gardenia/Argan,4332300-Sab Flor Ype 85g Glic Acao Relaxante Lavanda,4332385-Sab Flor Ype 85g Glic Acao Revigorante Gengibre,3973514-Sab Flor Ype 85g Rosas Branca/Avela,4332369-Sab Flor Ype 85g Vegetal Cacau/Baunilha,4332296-Sab Flor Ype 85g Vegetal Flor Alecrim,4332415-Sab Flor Ype 85g Vegetal Limao Siciliano,4332334-Sab Flor Ype 85g Vegetal Pitaya,2062429-Cond Pantene 400ml Brilho Extremo,2793571-Cond Pantene 400ml Cachos Hidra-Vit,1651471-Cond Pantene 400ml Hidratacao,2101793-Cond Pantene 400ml Hidro Cauterizacao,1650149-Cond Pantene 400ml Liso Extremo,2843307-Cond Pantene 400ml Micelar,2040603-Cond Pantene 400ml Restauracao,2892596-Sh Pantene 400ml Bambu Nutri & Cresce,2062402-Sh Pantene 400ml Brilho Extremo,1650106-Sh Pantene 400ml Cachos Hidra-Vit,1651498-Sh Pantene 400ml Hidratacao,2101840-Sh Pantene 400ml Hidro Cauterizacao,1650130-Sh Pantene 400ml Liso Extremo,2843781-Sh Pantene 400ml Micelar,2733293-Sh Pantene 400ml Pre Hidro Cauterizacao,1986414-Sh Pantene 400ml Restauracao,2872692-Sab Deoline 1l Liq Erva Doce,2870142-Sab Deoline 1l Liq Morango Champagne,2872706-Sab Deoline 1l Liq Pessego/Damasco,2867621-Desod Red Apple 55g Creme Acropole,2867605-Desod Red Apple 55g Creme Active,2867613-Desod Red Apple 55g Creme Natural,131741-Desod Red Apple 55g Creme Unissex,321508-Talco Granado 100g Antisseptico,1462946-Talco Granado 100g Antisseptico Fresh,2007495-Talco Granado 100g Antisseptico Pink,327409-Leite Hidr Paixao 200ml Inspiradora,529648-Leite Hidr Paixao 200ml Irresistivel,1632256-Leite Hidr Paixao 200ml Tentadora,2721155-Leite Hidr Paixao 400ml Inspiradora,2721163-Leite Hidr Paixao 400ml Irresistivel",
    mensuracao: "7 dias"
  },
  campanha38: {
    nome: "69205 - SMS - Festival da Beleza Retencao MS 06032024",
    filtro: "Clientes propensos de Alto e Médio relacionamento nos Grupo: 'Condicionador;Desodorante, Talco e Colônia;Sabonete;Shampoo;Tratamento e Finalização Cabelos'",
    abordado: 25716,
    grupoControle: 8572,
    produtos: "321508-Talco Granado 100g Antisseptico,1462946-Talco Granado 100g Antisseptico Fresh,2007495-Talco Granado 100g Antisseptico Pink,327409-Leite Hidr Paixao 200ml Inspiradora,529648-Leite Hidr Paixao 200ml Irresistivel,1632256-Leite Hidr Paixao 200ml Tentadora,2721155-Leite Hidr Paixao 400ml Inspiradora,2721163-Leite Hidr Paixao 400ml Irresistivel,2774437-Leite Hidr Paixao 400ml Tentadora,2872692-Sab Deoline 1l Liq Erva Doce,2870142-Sab Deoline 1l Liq Morango Champagne,2872706-Sab Deoline 1l Liq Pessego/Damasco,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,2768330-Sh Head Shoulders 200ml Men 3 Em 1  C/2,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade,2833468-Cr Pentear Seda 300ml Babosa Oleos,316725-Cr Pentear Seda 300ml Cachos Definidos,356530-Cr Pentear Seda 300ml Ceramidas,3969533-Cr Pentear Seda 300ml Colageno Vitamina c,810630-Cr Pentear Seda 300ml Color Pretos Lumin,2074540-Cr Pentear Seda 300ml Crespo Force,579360-Cr Pentear Seda 300ml Liso Perfeito,4391519-Cr Pentear Seda 300ml Probioticos + Biotina,4079647-Des Above 50ml Roll Fem Personalities Fierce Savage,4079663-Des Above 50ml Roll Fem Personalities Peaceful & Fashion,4079655-Des Above 50ml Roll Fem Sport Energy,4079620-Des Above 50ml Roll Masc Elements Ocean,4079639-Des Above 50ml Roll Masc Elements Shiny Silver,4079671-Des Above 50ml Roll Masc Sport Energy,752860-Sh Darling 350ml 2x1,752851-Sh Darling 350ml Ceramidas,4087402-Sh Darling 350ml Detox,4383516-Sh Darling 350ml Detox C/3,752835-Sh Darling 350ml Tilia,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,2768330-Sh Head Shoulders 200ml Men 3 Em 1  C/2,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade,2867621-Desod Red Apple 55g Creme Acropole,2867605-Desod Red Apple 55g Creme Active,2867613-Desod Red Apple 55g Creme Natural,131741-Desod Red Apple 55g Creme Unissex,1876643-Sab Granado 300ml Liq Calendula,4348370-Sab Granado 300ml Liq Calendula Refil,1876651-Sab Granado 300ml Liq Castanha,4348362-Sab Granado 300ml Liq Castanha Refil,2892596-Sh Pantene 400ml Bambu Nutri & Cresce,2062402-Sh Pantene 400ml Brilho Extremo,1650106-Sh Pantene 400ml Cachos Hidra-Vit,1651498-Sh Pantene 400ml Hidratacao,2101840-Sh Pantene 400ml Hidro Cauterizacao,1650130-Sh Pantene 400ml Liso Extremo,2843781-Sh Pantene 400ml Micelar,2733293-Sh Pantene 400ml Pre Hidro Cauterizacao,1986414-Sh Pantene 400ml Restauracao,3973387-Sab Flor Ype 85g Agua Coco/Alecrim,3973581-Sab Flor Ype 85g Flor Baunilha/Amendoas,3973301-Sab Flor Ype 85g Flor Laranjeira/Damasco,3973336-Sab Flor Ype 85g Flor Maca/ Framboesa,3973310-Sab Flor Ype 85g Fresia/Pessego,3973328-Sab Flor Ype 85g Gardenia/Argan,4332300-Sab Flor Ype 85g Glic Acao Relaxante Lavanda,4332385-Sab Flor Ype 85g Glic Acao Revigorante Gengibre,3973514-Sab Flor Ype 85g Rosas Branca/Avela,4332369-Sab Flor Ype 85g Vegetal Cacau/Baunilha,4332296-Sab Flor Ype 85g Vegetal Flor Alecrim,4332415-Sab Flor Ype 85g Vegetal Limao Siciliano,4332334-Sab Flor Ype 85g Vegetal Pitaya,2062429-Cond Pantene 400ml Brilho Extremo,2793571-Cond Pantene 400ml Cachos Hidra-Vit,1651471-Cond Pantene 400ml Hidratacao,2101793-Cond Pantene 400ml Hidro Cauterizacao,1650149-Cond Pantene 400ml Liso Extremo,2843307-Cond Pantene 400ml Micelar,2040603-Cond Pantene 400ml Restauracao,2892596-Sh Pantene 400ml Bambu Nutri & Cresce,2062402-Sh Pantene 400ml Brilho Extremo,1650106-Sh Pantene 400ml Cachos Hidra-Vit,1651498-Sh Pantene 400ml Hidratacao,2101840-Sh Pantene 400ml Hidro Cauterizacao,1650130-Sh Pantene 400ml Liso Extremo,2843781-Sh Pantene 400ml Micelar,2733293-Sh Pantene 400ml Pre Hidro Cauterizacao,1986414-Sh Pantene 400ml Restauracao,2872692-Sab Deoline 1l Liq Erva Doce,2870142-Sab Deoline 1l Liq Morango Champagne,2872706-Sab Deoline 1l Liq Pessego/Damasco,2867621-Desod Red Apple 55g Creme Acropole,2867605-Desod Red Apple 55g Creme Active,2867613-Desod Red Apple 55g Creme Natural,131741-Desod Red Apple 55g Creme Unissex,321508-Talco Granado 100g Antisseptico,1462946-Talco Granado 100g Antisseptico Fresh,2007495-Talco Granado 100g Antisseptico Pink,327409-Leite Hidr Paixao 200ml Inspiradora,529648-Leite Hidr Paixao 200ml Irresistivel,1632256-Leite Hidr Paixao 200ml Tentadora,2721155-Leite Hidr Paixao 400ml Inspiradora,2721163-Leite Hidr Paixao 400ml Irresistivel",
    mensuracao: "7 dias"
  },
  campanha39: {
    nome: "69203 - SMS - Festival da Beleza Retencao PR 06032024",
    filtro: "Clientes propensos de Alto e Médio relacionamento nos Grupo: 'Condicionador;Desodorante, Talco e Colônia;Sabonete;Shampoo;Tratamento e Finalização Cabelos'",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "321508-Talco Granado 100g Antisseptico,1462946-Talco Granado 100g Antisseptico Fresh,2007495-Talco Granado 100g Antisseptico Pink,327409-Leite Hidr Paixao 200ml Inspiradora,529648-Leite Hidr Paixao 200ml Irresistivel,1632256-Leite Hidr Paixao 200ml Tentadora,2721155-Leite Hidr Paixao 400ml Inspiradora,2721163-Leite Hidr Paixao 400ml Irresistivel,2774437-Leite Hidr Paixao 400ml Tentadora,2872692-Sab Deoline 1l Liq Erva Doce,2870142-Sab Deoline 1l Liq Morango Champagne,2872706-Sab Deoline 1l Liq Pessego/Damasco,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,2768330-Sh Head Shoulders 200ml Men 3 Em 1  C/2,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade,2833468-Cr Pentear Seda 300ml Babosa Oleos,316725-Cr Pentear Seda 300ml Cachos Definidos,356530-Cr Pentear Seda 300ml Ceramidas,3969533-Cr Pentear Seda 300ml Colageno Vitamina c,810630-Cr Pentear Seda 300ml Color Pretos Lumin,2074540-Cr Pentear Seda 300ml Crespo Force,579360-Cr Pentear Seda 300ml Liso Perfeito,4391519-Cr Pentear Seda 300ml Probioticos + Biotina,4079647-Des Above 50ml Roll Fem Personalities Fierce Savage,4079663-Des Above 50ml Roll Fem Personalities Peaceful & Fashion,4079655-Des Above 50ml Roll Fem Sport Energy,4079620-Des Above 50ml Roll Masc Elements Ocean,4079639-Des Above 50ml Roll Masc Elements Shiny Silver,4079671-Des Above 50ml Roll Masc Sport Energy,752860-Sh Darling 350ml 2x1,752851-Sh Darling 350ml Ceramidas,4087402-Sh Darling 350ml Detox,4383516-Sh Darling 350ml Detox C/3,752835-Sh Darling 350ml Tilia,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,2768330-Sh Head Shoulders 200ml Men 3 Em 1  C/2,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade,2867621-Desod Red Apple 55g Creme Acropole,2867605-Desod Red Apple 55g Creme Active,2867613-Desod Red Apple 55g Creme Natural,131741-Desod Red Apple 55g Creme Unissex,1876643-Sab Granado 300ml Liq Calendula,4348370-Sab Granado 300ml Liq Calendula Refil,1876651-Sab Granado 300ml Liq Castanha,4348362-Sab Granado 300ml Liq Castanha Refil,2892596-Sh Pantene 400ml Bambu Nutri & Cresce,2062402-Sh Pantene 400ml Brilho Extremo,1650106-Sh Pantene 400ml Cachos Hidra-Vit,1651498-Sh Pantene 400ml Hidratacao,2101840-Sh Pantene 400ml Hidro Cauterizacao,1650130-Sh Pantene 400ml Liso Extremo,2843781-Sh Pantene 400ml Micelar,2733293-Sh Pantene 400ml Pre Hidro Cauterizacao,1986414-Sh Pantene 400ml Restauracao,3973387-Sab Flor Ype 85g Agua Coco/Alecrim,3973581-Sab Flor Ype 85g Flor Baunilha/Amendoas,3973301-Sab Flor Ype 85g Flor Laranjeira/Damasco,3973336-Sab Flor Ype 85g Flor Maca/ Framboesa,3973310-Sab Flor Ype 85g Fresia/Pessego,3973328-Sab Flor Ype 85g Gardenia/Argan,4332300-Sab Flor Ype 85g Glic Acao Relaxante Lavanda,4332385-Sab Flor Ype 85g Glic Acao Revigorante Gengibre,3973514-Sab Flor Ype 85g Rosas Branca/Avela,4332369-Sab Flor Ype 85g Vegetal Cacau/Baunilha,4332296-Sab Flor Ype 85g Vegetal Flor Alecrim,4332415-Sab Flor Ype 85g Vegetal Limao Siciliano,4332334-Sab Flor Ype 85g Vegetal Pitaya,2062429-Cond Pantene 400ml Brilho Extremo,2793571-Cond Pantene 400ml Cachos Hidra-Vit,1651471-Cond Pantene 400ml Hidratacao,2101793-Cond Pantene 400ml Hidro Cauterizacao,1650149-Cond Pantene 400ml Liso Extremo,2843307-Cond Pantene 400ml Micelar,2040603-Cond Pantene 400ml Restauracao,2892596-Sh Pantene 400ml Bambu Nutri & Cresce,2062402-Sh Pantene 400ml Brilho Extremo,1650106-Sh Pantene 400ml Cachos Hidra-Vit,1651498-Sh Pantene 400ml Hidratacao,2101840-Sh Pantene 400ml Hidro Cauterizacao,1650130-Sh Pantene 400ml Liso Extremo,2843781-Sh Pantene 400ml Micelar,2733293-Sh Pantene 400ml Pre Hidro Cauterizacao,1986414-Sh Pantene 400ml Restauracao,2872692-Sab Deoline 1l Liq Erva Doce,2870142-Sab Deoline 1l Liq Morango Champagne,2872706-Sab Deoline 1l Liq Pessego/Damasco,2867621-Desod Red Apple 55g Creme Acropole,2867605-Desod Red Apple 55g Creme Active,2867613-Desod Red Apple 55g Creme Natural,131741-Desod Red Apple 55g Creme Unissex,321508-Talco Granado 100g Antisseptico,1462946-Talco Granado 100g Antisseptico Fresh,2007495-Talco Granado 100g Antisseptico Pink,327409-Leite Hidr Paixao 200ml Inspiradora,529648-Leite Hidr Paixao 200ml Irresistivel,1632256-Leite Hidr Paixao 200ml Tentadora,2721155-Leite Hidr Paixao 400ml Inspiradora,2721163-Leite Hidr Paixao 400ml Irresistivel",
    mensuracao: "7 dias"
  },
  campanha40: {
    nome: "69204 - SMS - Festival da Beleza Retencao SP 06032024",
    filtro: "Clientes propensos de Alto e Médio relacionamento nos Grupo: 'Condicionador;Desodorante, Talco e Colônia;Sabonete;Shampoo;Tratamento e Finalização Cabelos'",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "321508-Talco Granado 100g Antisseptico,1462946-Talco Granado 100g Antisseptico Fresh,2007495-Talco Granado 100g Antisseptico Pink,327409-Leite Hidr Paixao 200ml Inspiradora,529648-Leite Hidr Paixao 200ml Irresistivel,1632256-Leite Hidr Paixao 200ml Tentadora,2721155-Leite Hidr Paixao 400ml Inspiradora,2721163-Leite Hidr Paixao 400ml Irresistivel,2774437-Leite Hidr Paixao 400ml Tentadora,2872692-Sab Deoline 1l Liq Erva Doce,2870142-Sab Deoline 1l Liq Morango Champagne,2872706-Sab Deoline 1l Liq Pessego/Damasco,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,2768330-Sh Head Shoulders 200ml Men 3 Em 1  C/2,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade,2833468-Cr Pentear Seda 300ml Babosa Oleos,316725-Cr Pentear Seda 300ml Cachos Definidos,356530-Cr Pentear Seda 300ml Ceramidas,3969533-Cr Pentear Seda 300ml Colageno Vitamina c,810630-Cr Pentear Seda 300ml Color Pretos Lumin,2074540-Cr Pentear Seda 300ml Crespo Force,579360-Cr Pentear Seda 300ml Liso Perfeito,4391519-Cr Pentear Seda 300ml Probioticos + Biotina,4079647-Des Above 50ml Roll Fem Personalities Fierce Savage,4079663-Des Above 50ml Roll Fem Personalities Peaceful & Fashion,4079655-Des Above 50ml Roll Fem Sport Energy,4079620-Des Above 50ml Roll Masc Elements Ocean,4079639-Des Above 50ml Roll Masc Elements Shiny Silver,4079671-Des Above 50ml Roll Masc Sport Energy,752860-Sh Darling 350ml 2x1,752851-Sh Darling 350ml Ceramidas,4087402-Sh Darling 350ml Detox,4383516-Sh Darling 350ml Detox C/3,752835-Sh Darling 350ml Tilia,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,2768330-Sh Head Shoulders 200ml Men 3 Em 1  C/2,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade,2867621-Desod Red Apple 55g Creme Acropole,2867605-Desod Red Apple 55g Creme Active,2867613-Desod Red Apple 55g Creme Natural,131741-Desod Red Apple 55g Creme Unissex,1876643-Sab Granado 300ml Liq Calendula,4348370-Sab Granado 300ml Liq Calendula Refil,1876651-Sab Granado 300ml Liq Castanha,4348362-Sab Granado 300ml Liq Castanha Refil,2892596-Sh Pantene 400ml Bambu Nutri & Cresce,2062402-Sh Pantene 400ml Brilho Extremo,1650106-Sh Pantene 400ml Cachos Hidra-Vit,1651498-Sh Pantene 400ml Hidratacao,2101840-Sh Pantene 400ml Hidro Cauterizacao,1650130-Sh Pantene 400ml Liso Extremo,2843781-Sh Pantene 400ml Micelar,2733293-Sh Pantene 400ml Pre Hidro Cauterizacao,1986414-Sh Pantene 400ml Restauracao,3973387-Sab Flor Ype 85g Agua Coco/Alecrim,3973581-Sab Flor Ype 85g Flor Baunilha/Amendoas,3973301-Sab Flor Ype 85g Flor Laranjeira/Damasco,3973336-Sab Flor Ype 85g Flor Maca/ Framboesa,3973310-Sab Flor Ype 85g Fresia/Pessego,3973328-Sab Flor Ype 85g Gardenia/Argan,4332300-Sab Flor Ype 85g Glic Acao Relaxante Lavanda,4332385-Sab Flor Ype 85g Glic Acao Revigorante Gengibre,3973514-Sab Flor Ype 85g Rosas Branca/Avela,4332369-Sab Flor Ype 85g Vegetal Cacau/Baunilha,4332296-Sab Flor Ype 85g Vegetal Flor Alecrim,4332415-Sab Flor Ype 85g Vegetal Limao Siciliano,4332334-Sab Flor Ype 85g Vegetal Pitaya,2062429-Cond Pantene 400ml Brilho Extremo,2793571-Cond Pantene 400ml Cachos Hidra-Vit,1651471-Cond Pantene 400ml Hidratacao,2101793-Cond Pantene 400ml Hidro Cauterizacao,1650149-Cond Pantene 400ml Liso Extremo,2843307-Cond Pantene 400ml Micelar,2040603-Cond Pantene 400ml Restauracao,2892596-Sh Pantene 400ml Bambu Nutri & Cresce,2062402-Sh Pantene 400ml Brilho Extremo,1650106-Sh Pantene 400ml Cachos Hidra-Vit,1651498-Sh Pantene 400ml Hidratacao,2101840-Sh Pantene 400ml Hidro Cauterizacao,1650130-Sh Pantene 400ml Liso Extremo,2843781-Sh Pantene 400ml Micelar,2733293-Sh Pantene 400ml Pre Hidro Cauterizacao,1986414-Sh Pantene 400ml Restauracao,2872692-Sab Deoline 1l Liq Erva Doce,2870142-Sab Deoline 1l Liq Morango Champagne,2872706-Sab Deoline 1l Liq Pessego/Damasco,2867621-Desod Red Apple 55g Creme Acropole,2867605-Desod Red Apple 55g Creme Active,2867613-Desod Red Apple 55g Creme Natural,131741-Desod Red Apple 55g Creme Unissex,321508-Talco Granado 100g Antisseptico,1462946-Talco Granado 100g Antisseptico Fresh,2007495-Talco Granado 100g Antisseptico Pink,327409-Leite Hidr Paixao 200ml Inspiradora,529648-Leite Hidr Paixao 200ml Irresistivel,1632256-Leite Hidr Paixao 200ml Tentadora,2721155-Leite Hidr Paixao 400ml Inspiradora,2721163-Leite Hidr Paixao 400ml Irresistivel",
    mensuracao: "7 dias"
  },
  campanha41: {
    nome: "69201 - SMS - Oferta Relampago Fralda Pampers 06032024",
    filtro: "Clientes propensos de Alto e Médio relacionamento nos Grupo: 'Condicionador;Desodorante, Talco e Colônia;Sabonete;Shampoo;Tratamento e Finalização Cabelos'",
    abordado: 25000,
    grupoControle: 6939,
    produtos: "4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,2836360-Fralda Pampers Confort Sec Fortbag Xg C/58,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,2836351-Fralda Pampers Confort Sec Fortbag Xxg C/56,4433181-Não Encontrado,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72",
    mensuracao: "0 dia"
  },
  campanha42: {
    nome: "69222 - Custom Audience - TRADE MKT YOKI - PIPOCAS 07032023",
    filtro: "Clientes com compras nos últimos 90 dias nos Grupos: 'Grãos Naturais;Pipoca Microondas;Refrigerante Familia;Suco Refrig Natural'",
    abordado: 50000,
    grupoControle: 5856,
    produtos: "851361-Pipoca Yoki 100g Micro Manteiga/Cinema,776831-Pipoca Yoki 100g Micro Tq Chef,386197-Pipoca Yoki 100g Micro Salgada,255629-Pipoca Yoki 100g Micro Bacon,181846-Pipoca Yoki 100g Micro Manteiga,127400-Pipoca Yoki 100g Micro Natural",
    mensuracao: "5 dias"
  },
  campanha43: {
    nome: "69215 - Email - Encarte Pascoa II: Tempo em Familia (disp. 2) Pub1 07032024",
    filtro: "Clientes propensos de Alto e Médio relacionamento nos Grupo: 'Batata Cong Palito;Batata Cong Smiles;Catchup Reg Tradicional;Empanado Cong Frango;Hamburguer Cong;Lasanha Cong,Massa Lasanha Refrig Tradicional;Mostarda Reg Amarela;Mostarda Reg Escura;Mostarda Reg Sabores' e PeopleScope sem os seguintes segmentos:'Elite do Interior Urbano;Envelhecendo no Interior;Interior Cosmopolita;Lutando pela Casa Própria no Interior;Tranquilidade no Interior'",
    abordado: 86150,
    grupoControle: 8645,
    produtos: "4327187-Batata Mc Cain 600g Extracrocante Airfryer,998656-Lasanha Seara 600g Bolonhesa,998630-Lasanha Seara 600g Calabresa,998648-Lasanha Seara 600g Frango,998621-Lasanha Seara 600g Quatro Queijos,934224-Steak Lar 100g Frango Congelado,2067048-Hamb Seara 672g 100% Bovino,2751747-Ketchup Heinz 567g Trad,868264-Mostarda Heinz 255g Pet",
    mensuracao: "6 dias"
  },
  campanha44: {
    nome: "9214 - Email - Encarte Pascoa II: Tempo em Familia (disp. 2) Pub2 07032024",
    filtro: "Clientes propensos de Baixo Relacionamento e Não Comprador nos Grupo: 'Batata Cong Palito;Batata Cong Smiles;Catchup Reg Tradicional;Empanado Cong Frango;Hamburguer Cong;Lasanha Cong,Massa Lasanha Refrig Tradicional;Mostarda Reg Amarela;Mostarda Reg Escura;Mostarda Reg Sabores' e PeopleScope sem os seguintes segmentos:'Elite do Interior Urbano;Envelhecendo no Interior;Interior Cosmopolita;Lutando pela Casa Própria no Interior;Tranquilidade no Interior'",
    abordado: 121599,
    grupoControle: 8904,
    produtos: "4327187-Batata Mc Cain 600g Extracrocante Airfryer,998656-Lasanha Seara 600g Bolonhesa,998630-Lasanha Seara 600g Calabresa,998648-Lasanha Seara 600g Frango,998621-Lasanha Seara 600g Quatro Queijos,934224-Steak Lar 100g Frango Congelado,2067048-Hamb Seara 672g 100% Bovino,2751747-Ketchup Heinz 567g Trad,868264-Mostarda Heinz 255g Pet",
    mensuracao: "6 dias"
  },
  campanha45: {
    nome: "69218 - SMS - Encarte Pascoa II: Tempo em Familia (disp. 2) Pub1 MS 07032024",
    filtro: "Clientes propensos de Alto e Médio relacionamento nos Grupo: 'Batata Cong Palito;Batata Cong Smiles;Catchup Reg Tradicional;Empanado Cong Frango;Hamburguer Cong;Lasanha Cong,Massa Lasanha Refrig Tradicional;Mostarda Reg Amarela;Mostarda Reg Escura;Mostarda Reg Sabores' e PeopleScope sem os seguintes segmentos:'Elite do Interior Urbano;Envelhecendo no Interior;Interior Cosmopolita;Lutando pela Casa Própria no Interior;Tranquilidade no Interior'",
    abordado: 6146,
    grupoControle: "Apropriação",
    produtos: "4327187-Batata Mc Cain 600g Extracrocante Airfryer,998656-Lasanha Seara 600g Bolonhesa,998630-Lasanha Seara 600g Calabresa,998648-Lasanha Seara 600g Frango,998621-Lasanha Seara 600g Quatro Queijos,934224-Steak Lar 100g Frango Congelado,2067048-Hamb Seara 672g 100% Bovino,2751747-Ketchup Heinz 567g Trad,868264-Mostarda Heinz 255g Pet",
    mensuracao: "6 dias"
  },
  campanha46: {
    nome: "69216 - SMS - Encarte Pascoa II: Tempo em Familia (disp. 2) Pub1 PR 07032024",
    filtro: "Clientes propensos de Alto e Médio relacionamento nos Grupo: 'Batata Cong Palito;Batata Cong Smiles;Catchup Reg Tradicional;Empanado Cong Frango;Hamburguer Cong;Lasanha Cong,Massa Lasanha Refrig Tradicional;Mostarda Reg Amarela;Mostarda Reg Escura;Mostarda Reg Sabores' e PeopleScope sem os seguintes segmentos:'Elite do Interior Urbano;Envelhecendo no Interior;Interior Cosmopolita;Lutando pela Casa Própria no Interior;Tranquilidade no Interior'",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "4327187-Batata Mc Cain 600g Extracrocante Airfryer,998656-Lasanha Seara 600g Bolonhesa,998630-Lasanha Seara 600g Calabresa,998648-Lasanha Seara 600g Frango,998621-Lasanha Seara 600g Quatro Queijos,934224-Steak Lar 100g Frango Congelado,2067048-Hamb Seara 672g 100% Bovino,2751747-Ketchup Heinz 567g Trad,868264-Mostarda Heinz 255g Pet",
    mensuracao: "6 dias"
  },
  campanha47: {
    nome: "69220 - SMS - Encarte Pascoa II: Tempo em Familia (disp. 2) Pub2 MS 07032024",
    filtro: "Clientes propensos de Baixo Relacionamento e Não Comprador nos Grupo: 'Batata Cong Palito;Batata Cong Smiles;Catchup Reg Tradicional;Empanado Cong Frango;Hamburguer Cong;Lasanha Cong,Massa Lasanha Refrig Tradicional;Mostarda Reg Amarela;Mostarda Reg Escura;Mostarda Reg Sabores' e PeopleScope sem os seguintes segmentos:'Elite do Interior Urbano;Envelhecendo no Interior;Interior Cosmopolita;Lutando pela Casa Própria no Interior;Tranquilidade no Interior'",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "4327187-Batata Mc Cain 600g Extracrocante Airfryer,998656-Lasanha Seara 600g Bolonhesa,998630-Lasanha Seara 600g Calabresa,998648-Lasanha Seara 600g Frango,998621-Lasanha Seara 600g Quatro Queijos,934224-Steak Lar 100g Frango Congelado,2067048-Hamb Seara 672g 100% Bovino,2751747-Ketchup Heinz 567g Trad,868264-Mostarda Heinz 255g Pet",
    mensuracao: "6 dias"
  },
  campanha48: {
    nome: "69219 - SMS - Encarte Pascoa II: Tempo em Familia (disp. 2) Pub2 PR 07032024",
    filtro: "Clientes propensos de Baixo Relacionamento e Não Comprador nos Grupo: 'Batata Cong Palito;Batata Cong Smiles;Catchup Reg Tradicional;Empanado Cong Frango;Hamburguer Cong;Lasanha Cong,Massa Lasanha Refrig Tradicional;Mostarda Reg Amarela;Mostarda Reg Escura;Mostarda Reg Sabores' e PeopleScope sem os seguintes segmentos:'Elite do Interior Urbano;Envelhecendo no Interior;Interior Cosmopolita;Lutando pela Casa Própria no Interior;Tranquilidade no Interior'",
    abordado: 20000,
    grupoControle: 6489,
    produtos: "4327187-Batata Mc Cain 600g Extracrocante Airfryer,998656-Lasanha Seara 600g Bolonhesa,998630-Lasanha Seara 600g Calabresa,998648-Lasanha Seara 600g Frango,998621-Lasanha Seara 600g Quatro Queijos,934224-Steak Lar 100g Frango Congelado,2067048-Hamb Seara 672g 100% Bovino,2751747-Ketchup Heinz 567g Trad,868264-Mostarda Heinz 255g Pet",
    mensuracao: "6 dias"
  },
  campanha49: {
    nome: "69221 - SMS - Encarte Pascoa II: Tempo em Familia (disp. 2) Pub2 SP 07032024",
    filtro: "Clientes propensos de Baixo Relacionamento e Não Comprador nos Grupo: 'Batata Cong Palito;Batata Cong Smiles;Catchup Reg Tradicional;Empanado Cong Frango;Hamburguer Cong;Lasanha Cong,Massa Lasanha Refrig Tradicional;Mostarda Reg Amarela;Mostarda Reg Escura;Mostarda Reg Sabores' e PeopleScope sem os seguintes segmentos:'Elite do Interior Urbano;Envelhecendo no Interior;Interior Cosmopolita;Lutando pela Casa Própria no Interior;Tranquilidade no Interior'",
    abordado: 20000,
    grupoControle: 6489,
    produtos: "4327187-Batata Mc Cain 600g Extracrocante Airfryer,998656-Lasanha Seara 600g Bolonhesa,998630-Lasanha Seara 600g Calabresa,998648-Lasanha Seara 600g Frango,998621-Lasanha Seara 600g Quatro Queijos,934224-Steak Lar 100g Frango Congelado,2067048-Hamb Seara 672g 100% Bovino,2751747-Ketchup Heinz 567g Trad,868264-Mostarda Heinz 255g Pet",
    mensuracao: "6 dias"
  },
  campanha50: {
    nome: "69233 - Custom Audience - TRADE MKT SPRITE - LEMON FRESH 08032024",
    filtro: "Clientes com compras nos últimos 90 dias na Marca: H2oh",
    abordado: 1500,
    grupoControle: "Apropriação",
    produtos: "2839105-Refrig Sprite 510ml Lemon Fresh Pet",
    mensuracao: "9 dias"
  },
  campanha51: {
    nome: "69246 - Custom Audience - TRADE MKT YPE - PROMOCAO ACHE O X 08032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Lava Roupas no Marca: Ypê",
    abordado: 22174,
    grupoControle: 7241,
    produtos: "2039478-Lava Roupa Tixan 1l Liq Maciez,2867281-Lava Roupa Tixan 900ml Liq Maciez Refil,2039486-Lava Roupa Tixan 1l Liq Primavera,2785471-Lava Roupa Tixan 900ml Liq Primavera Refil,2866765-Lava Roupa Tixan 3l Liq Maciez,2764717-Lava Roupa Tixan 3l Liq Primavera,2711621-Lava Roupa Tixan 5l Liq Primavera,4059158-Lava Roupa Tixan 7l Liq Primavera,4059476-Lava Roupa Tixan 400g Po Maciez,4059484-Lava Roupa Tixan 800g Po Maciez,4060482-Lava Roupa Tixan 1,3kg Po Primavera,4060490-Lava Roupa Tixan 1,6kg Po Primavera,4059450-Lava Roupa Tixan 1,6kg Po Primavera Sache,4060474-Lava Roupa Tixan 2,4kg Po Primavera,4062760-Lava Roupa Tixan 4kg Po Primavera,4060466-Lava Roupa Tixan 4kg Po Sensitive S/Perfume,4327896-Tira Manchas Tixan 462g Gel Roupa Bca Colorida,3936481-Tira Manchas Tixan 420g Po Roupa Brancas Refil,3936490-Tira Manchas Tixan 420g Po Roupa Bca Color Refil",
    mensuracao: "9 dias"
  },
  campanha52: {
    nome: "69248 - Email - Dia Internacional da Mulher - Presentes 08032024",
    filtro: "Clientes do sexo 'M'",
    abordado: 226817,
    grupoControle: 9227,
    produtos: "4427785-Não Encontrado,4427807-Não Encontrado,2773864-Bombom Ferrero 150g T12,783005-Flor Roseira Pote 13,773476-Flor Orquidea Denphalen Pote 15,2518642-Flor Orquidea Phaleanopsis Pote 12",
    mensuracao: "0 dia"
  },
  campanha53: {
    nome: "69239 - Email - Festival da Beleza Dia Internacional da Mulher Dp3 08032024",
    filtro: "Clientes do sexo 'F' propensos de Alto Médio e Baixo Relacionamento no Departamento: Higiene Beleza",
    abordado: 110885,
    grupoControle: 8833,
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,329630-Esm Risque 8ml Cintilante Perola,261122-Esm Risque 8ml Cr Seda Base,4390199-Esm Risque 8ml Crem a Mar,4390172-Esm Risque 8ml Crem Antes Sol Que Mal Iluminada,329398-Esm Risque 8ml Crem Astral,2785226-Esm Risque 8ml Crem Bela e Poderosa,329363-Esm Risque 8ml Crem Bianco Purissimo,993662-Esm Risque 8ml Crem Carmim,994090-Esm Risque 8ml Crem Doce Orgulho,1719815-Esm Risque 8ml Crem Energia Rosas,329428-Esm Risque 8ml Crem Gabriela,4390229-Esm Risque 8ml Crem Geracao Ctrl z,2774640-Esm Risque 8ml Crem Grao Arroz,2831481-Esm Risque 8ml Crem Hoje So Volto Amanha,2774674-Esm Risque 8ml Crem Lagrimas Venus,2785218-Esm Risque 8ml Crem Leo Mandou Flores,2839237-Esm Risque 8ml Crem Linda Leve e Nude,4390059-Esm Risque 8ml Crem Look Do Dia Good Vibes,2113864-Esm Risque 8ml Crem Malicia,4390083-Esm Risque 8ml Crem Menta Liza,4390113-Esm Risque 8ml Crem Neon Gender,4390180-Esm Risque 8ml Crem Padraozinho Pra Quem,391182-Esm Risque 8ml Crem Paris,4390156-Esm Risque 8ml Crem Politicamente Colorida,993808-Esm Risque 8ml Crem Preto Sepia,329410-Esm Risque 8ml Crem Rebu,4390164-Esm Risque 8ml Crem Roxo Sem Crise,4390091-Esm Risque 8ml Crem Se Solta No Blues,4390237-Esm Risque 8ml Crem Sem Filtro,329770-Esm Risque 8ml Fortalec,4082532-Esm Risque 8ml Glitter As Mil Purpurinas,4390067-Esm Risque 8ml Met Comigo Ninguem Cobre,4390148-Esm Risque 8ml Met Fora Da Caixinha,2774631-Esm Risque 8ml Met Gota Anjos,1718967-Esm Risque 8ml Met Maca Amor,4390210-Esm Risque 8ml Met Nao Me Rotule,329517-Esm Risque 8ml Nat Incolor,329525-Esm Risque 8ml Nat Renda,993948-Esm Risque 8ml Nat Rendinha,2761734-Tint Beauty Color 2.0 Bela&cor Preto,855197-Tint Beauty Color 2.0 Preto,2761718-Tint Beauty Color 2.11 Bela&cor Preto Azulado,2081440-Tint Beauty Color 2.11 Preto Azulado,2761696-Tint Beauty Color 3.0 Bela&cor Cast Escuro,855200-Tint Beauty Color 3.0 Cast Escuro,2761700-Tint Beauty Color 4.0 Bela&cor Cast Medio,855219-Tint Beauty Color 4.0 Cast Natural,2761580-Tint Beauty Color 4.66 Bela&cor Verm Profundo,2761661-Tint Beauty Color 5.0 Bela&cor  Cast Claro,855227-Tint Beauty Color 5.0 Cast Claro,2081415-Tint Beauty Color 5.7 Choc Cafe,2761688-Tint Beauty Color 6.0 Bela&cor Louro Escuro,855235-Tint Beauty Color 6.0 Louro Esc,2081423-Tint Beauty Color 6.1 Louro Esc Acinzentado,855332-Tint Beauty Color 6.34 Chocolate,2761572-Tint Beauty Color 6.7 Bela&cor Chocolate,2826836-Tint Beauty Color 66.26 Marsala Infalivel,2761637-Tint Beauty Color 7.0 Bela&cor Louro Medio,855243-Tint Beauty Color 7.0 Louro Natural,2761645-Tint Beauty Color 7.1 Bela&cor Louro Medio,2081431-Tint Beauty Color 7.1 Louro Nat Acinzentado,2826844-Tint Beauty Color 76.44 Ruivo Absoluto,2081490-Tint Beauty Color 9.1 Louro Medio Claro Acinz,2894335-Des Monange 90g Aer Fem Detox,4384563-Des Monange 90g Aer Fem Esporte,2746271-Des Monange 90g Aer Fem Extrato Oliva,2746263-Des Monange 90g Aer Fem Flor Lavanda,1620037-Des Monange 90g Aer Fem Frutas Vermelhas,2784882-Des Monange 90g Aer Fem Invisivel,3983960-Des Monange 90g Aer Fem Protecao Seca,1828711-Des Monange 90g Aer Fem S/Perfume,4331648-Des Monange 94g Aer Fem Clinical Conforto,4331664-Des Monange 94g Aer Fem Clinical Revigorante",
    mensuracao: "5 dias"
  },
  campanha54: {
    nome: "69249 - SMS - Dia Internacional da Mulher - Presentes 08032024",
    filtro: "Clientes do sexo 'M'",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "4427785-Não Encontrado,4427807-Não Encontrado,2773864-Bombom Ferrero 150g T12,783005-Flor Roseira Pote 13,773476-Flor Orquidea Denphalen Pote 15,2518642-Flor Orquidea Phaleanopsis Pote 12",
    mensuracao: "0 dia"
  },
  campanha55: {
    nome: "69242 - SMS - Festival da Beleza Dia Internacional da Mulher Dp3 MS 08032024",
    filtro: "Clientes do sexo 'F' propensos de Alto Médio e Baixo Relacionamento no Departamento: Higiene Beleza",
    abordado: 11469,
    grupoControle: 5305,
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,329630-Esm Risque 8ml Cintilante Perola,261122-Esm Risque 8ml Cr Seda Base,4390199-Esm Risque 8ml Crem a Mar,4390172-Esm Risque 8ml Crem Antes Sol Que Mal Iluminada,329398-Esm Risque 8ml Crem Astral,2785226-Esm Risque 8ml Crem Bela e Poderosa,329363-Esm Risque 8ml Crem Bianco Purissimo,993662-Esm Risque 8ml Crem Carmim,994090-Esm Risque 8ml Crem Doce Orgulho,1719815-Esm Risque 8ml Crem Energia Rosas,329428-Esm Risque 8ml Crem Gabriela,4390229-Esm Risque 8ml Crem Geracao Ctrl z,2774640-Esm Risque 8ml Crem Grao Arroz,2831481-Esm Risque 8ml Crem Hoje So Volto Amanha,2774674-Esm Risque 8ml Crem Lagrimas Venus,2785218-Esm Risque 8ml Crem Leo Mandou Flores,2839237-Esm Risque 8ml Crem Linda Leve e Nude,4390059-Esm Risque 8ml Crem Look Do Dia Good Vibes,2113864-Esm Risque 8ml Crem Malicia,4390083-Esm Risque 8ml Crem Menta Liza,4390113-Esm Risque 8ml Crem Neon Gender,4390180-Esm Risque 8ml Crem Padraozinho Pra Quem,391182-Esm Risque 8ml Crem Paris,4390156-Esm Risque 8ml Crem Politicamente Colorida,993808-Esm Risque 8ml Crem Preto Sepia,329410-Esm Risque 8ml Crem Rebu,4390164-Esm Risque 8ml Crem Roxo Sem Crise,4390091-Esm Risque 8ml Crem Se Solta No Blues,4390237-Esm Risque 8ml Crem Sem Filtro,329770-Esm Risque 8ml Fortalec,4082532-Esm Risque 8ml Glitter As Mil Purpurinas,4390067-Esm Risque 8ml Met Comigo Ninguem Cobre,4390148-Esm Risque 8ml Met Fora Da Caixinha,2774631-Esm Risque 8ml Met Gota Anjos,1718967-Esm Risque 8ml Met Maca Amor,4390210-Esm Risque 8ml Met Nao Me Rotule,329517-Esm Risque 8ml Nat Incolor,329525-Esm Risque 8ml Nat Renda,993948-Esm Risque 8ml Nat Rendinha,2761734-Tint Beauty Color 2.0 Bela&cor Preto,855197-Tint Beauty Color 2.0 Preto,2761718-Tint Beauty Color 2.11 Bela&cor Preto Azulado,2081440-Tint Beauty Color 2.11 Preto Azulado,2761696-Tint Beauty Color 3.0 Bela&cor Cast Escuro,855200-Tint Beauty Color 3.0 Cast Escuro,2761700-Tint Beauty Color 4.0 Bela&cor Cast Medio,855219-Tint Beauty Color 4.0 Cast Natural,2761580-Tint Beauty Color 4.66 Bela&cor Verm Profundo,2761661-Tint Beauty Color 5.0 Bela&cor  Cast Claro,855227-Tint Beauty Color 5.0 Cast Claro,2081415-Tint Beauty Color 5.7 Choc Cafe,2761688-Tint Beauty Color 6.0 Bela&cor Louro Escuro,855235-Tint Beauty Color 6.0 Louro Esc,2081423-Tint Beauty Color 6.1 Louro Esc Acinzentado,855332-Tint Beauty Color 6.34 Chocolate,2761572-Tint Beauty Color 6.7 Bela&cor Chocolate,2826836-Tint Beauty Color 66.26 Marsala Infalivel,2761637-Tint Beauty Color 7.0 Bela&cor Louro Medio,855243-Tint Beauty Color 7.0 Louro Natural,2761645-Tint Beauty Color 7.1 Bela&cor Louro Medio,2081431-Tint Beauty Color 7.1 Louro Nat Acinzentado,2826844-Tint Beauty Color 76.44 Ruivo Absoluto,2081490-Tint Beauty Color 9.1 Louro Medio Claro Acinz,2894335-Des Monange 90g Aer Fem Detox,4384563-Des Monange 90g Aer Fem Esporte,2746271-Des Monange 90g Aer Fem Extrato Oliva,2746263-Des Monange 90g Aer Fem Flor Lavanda,1620037-Des Monange 90g Aer Fem Frutas Vermelhas,2784882-Des Monange 90g Aer Fem Invisivel,3983960-Des Monange 90g Aer Fem Protecao Seca,1828711-Des Monange 90g Aer Fem S/Perfume,4331648-Des Monange 94g Aer Fem Clinical Conforto,4331664-Des Monange 94g Aer Fem Clinical Revigorante",
    mensuracao: "5 dias"
  },
  campanha56: {
    nome: "69240 - SMS - Festival da Beleza Dia Internacional da Mulher Dp3 PR 08032024",
    filtro: "Clientes do sexo 'F' propensos de Alto Médio e Baixo Relacionamento no Departamento: Higiene Beleza",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,329630-Esm Risque 8ml Cintilante Perola,261122-Esm Risque 8ml Cr Seda Base,4390199-Esm Risque 8ml Crem a Mar,4390172-Esm Risque 8ml Crem Antes Sol Que Mal Iluminada,329398-Esm Risque 8ml Crem Astral,2785226-Esm Risque 8ml Crem Bela e Poderosa,329363-Esm Risque 8ml Crem Bianco Purissimo,993662-Esm Risque 8ml Crem Carmim,994090-Esm Risque 8ml Crem Doce Orgulho,1719815-Esm Risque 8ml Crem Energia Rosas,329428-Esm Risque 8ml Crem Gabriela,4390229-Esm Risque 8ml Crem Geracao Ctrl z,2774640-Esm Risque 8ml Crem Grao Arroz,2831481-Esm Risque 8ml Crem Hoje So Volto Amanha,2774674-Esm Risque 8ml Crem Lagrimas Venus,2785218-Esm Risque 8ml Crem Leo Mandou Flores,2839237-Esm Risque 8ml Crem Linda Leve e Nude,4390059-Esm Risque 8ml Crem Look Do Dia Good Vibes,2113864-Esm Risque 8ml Crem Malicia,4390083-Esm Risque 8ml Crem Menta Liza,4390113-Esm Risque 8ml Crem Neon Gender,4390180-Esm Risque 8ml Crem Padraozinho Pra Quem,391182-Esm Risque 8ml Crem Paris,4390156-Esm Risque 8ml Crem Politicamente Colorida,993808-Esm Risque 8ml Crem Preto Sepia,329410-Esm Risque 8ml Crem Rebu,4390164-Esm Risque 8ml Crem Roxo Sem Crise,4390091-Esm Risque 8ml Crem Se Solta No Blues,4390237-Esm Risque 8ml Crem Sem Filtro,329770-Esm Risque 8ml Fortalec,4082532-Esm Risque 8ml Glitter As Mil Purpurinas,4390067-Esm Risque 8ml Met Comigo Ninguem Cobre,4390148-Esm Risque 8ml Met Fora Da Caixinha,2774631-Esm Risque 8ml Met Gota Anjos,1718967-Esm Risque 8ml Met Maca Amor,4390210-Esm Risque 8ml Met Nao Me Rotule,329517-Esm Risque 8ml Nat Incolor,329525-Esm Risque 8ml Nat Renda,993948-Esm Risque 8ml Nat Rendinha,2761734-Tint Beauty Color 2.0 Bela&cor Preto,855197-Tint Beauty Color 2.0 Preto,2761718-Tint Beauty Color 2.11 Bela&cor Preto Azulado,2081440-Tint Beauty Color 2.11 Preto Azulado,2761696-Tint Beauty Color 3.0 Bela&cor Cast Escuro,855200-Tint Beauty Color 3.0 Cast Escuro,2761700-Tint Beauty Color 4.0 Bela&cor Cast Medio,855219-Tint Beauty Color 4.0 Cast Natural,2761580-Tint Beauty Color 4.66 Bela&cor Verm Profundo,2761661-Tint Beauty Color 5.0 Bela&cor  Cast Claro,855227-Tint Beauty Color 5.0 Cast Claro,2081415-Tint Beauty Color 5.7 Choc Cafe,2761688-Tint Beauty Color 6.0 Bela&cor Louro Escuro,855235-Tint Beauty Color 6.0 Louro Esc,2081423-Tint Beauty Color 6.1 Louro Esc Acinzentado,855332-Tint Beauty Color 6.34 Chocolate,2761572-Tint Beauty Color 6.7 Bela&cor Chocolate,2826836-Tint Beauty Color 66.26 Marsala Infalivel,2761637-Tint Beauty Color 7.0 Bela&cor Louro Medio,855243-Tint Beauty Color 7.0 Louro Natural,2761645-Tint Beauty Color 7.1 Bela&cor Louro Medio,2081431-Tint Beauty Color 7.1 Louro Nat Acinzentado,2826844-Tint Beauty Color 76.44 Ruivo Absoluto,2081490-Tint Beauty Color 9.1 Louro Medio Claro Acinz,2894335-Des Monange 90g Aer Fem Detox,4384563-Des Monange 90g Aer Fem Esporte,2746271-Des Monange 90g Aer Fem Extrato Oliva,2746263-Des Monange 90g Aer Fem Flor Lavanda,1620037-Des Monange 90g Aer Fem Frutas Vermelhas,2784882-Des Monange 90g Aer Fem Invisivel,3983960-Des Monange 90g Aer Fem Protecao Seca,1828711-Des Monange 90g Aer Fem S/Perfume,4331648-Des Monange 94g Aer Fem Clinical Conforto,4331664-Des Monange 94g Aer Fem Clinical Revigorante",
    mensuracao: "5 dias"
  },
  campanha57: {
    nome: "69241 - SMS - Festival da Beleza Dia Internacional da Mulher Dp3 SP 08032024",
    filtro: "Clientes do sexo 'F' propensos de Alto Médio e Baixo Relacionamento no Departamento: Higiene Beleza",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,329630-Esm Risque 8ml Cintilante Perola,261122-Esm Risque 8ml Cr Seda Base,4390199-Esm Risque 8ml Crem a Mar,4390172-Esm Risque 8ml Crem Antes Sol Que Mal Iluminada,329398-Esm Risque 8ml Crem Astral,2785226-Esm Risque 8ml Crem Bela e Poderosa,329363-Esm Risque 8ml Crem Bianco Purissimo,993662-Esm Risque 8ml Crem Carmim,994090-Esm Risque 8ml Crem Doce Orgulho,1719815-Esm Risque 8ml Crem Energia Rosas,329428-Esm Risque 8ml Crem Gabriela,4390229-Esm Risque 8ml Crem Geracao Ctrl z,2774640-Esm Risque 8ml Crem Grao Arroz,2831481-Esm Risque 8ml Crem Hoje So Volto Amanha,2774674-Esm Risque 8ml Crem Lagrimas Venus,2785218-Esm Risque 8ml Crem Leo Mandou Flores,2839237-Esm Risque 8ml Crem Linda Leve e Nude,4390059-Esm Risque 8ml Crem Look Do Dia Good Vibes,2113864-Esm Risque 8ml Crem Malicia,4390083-Esm Risque 8ml Crem Menta Liza,4390113-Esm Risque 8ml Crem Neon Gender,4390180-Esm Risque 8ml Crem Padraozinho Pra Quem,391182-Esm Risque 8ml Crem Paris,4390156-Esm Risque 8ml Crem Politicamente Colorida,993808-Esm Risque 8ml Crem Preto Sepia,329410-Esm Risque 8ml Crem Rebu,4390164-Esm Risque 8ml Crem Roxo Sem Crise,4390091-Esm Risque 8ml Crem Se Solta No Blues,4390237-Esm Risque 8ml Crem Sem Filtro,329770-Esm Risque 8ml Fortalec,4082532-Esm Risque 8ml Glitter As Mil Purpurinas,4390067-Esm Risque 8ml Met Comigo Ninguem Cobre,4390148-Esm Risque 8ml Met Fora Da Caixinha,2774631-Esm Risque 8ml Met Gota Anjos,1718967-Esm Risque 8ml Met Maca Amor,4390210-Esm Risque 8ml Met Nao Me Rotule,329517-Esm Risque 8ml Nat Incolor,329525-Esm Risque 8ml Nat Renda,993948-Esm Risque 8ml Nat Rendinha,2761734-Tint Beauty Color 2.0 Bela&cor Preto,855197-Tint Beauty Color 2.0 Preto,2761718-Tint Beauty Color 2.11 Bela&cor Preto Azulado,2081440-Tint Beauty Color 2.11 Preto Azulado,2761696-Tint Beauty Color 3.0 Bela&cor Cast Escuro,855200-Tint Beauty Color 3.0 Cast Escuro,2761700-Tint Beauty Color 4.0 Bela&cor Cast Medio,855219-Tint Beauty Color 4.0 Cast Natural,2761580-Tint Beauty Color 4.66 Bela&cor Verm Profundo,2761661-Tint Beauty Color 5.0 Bela&cor  Cast Claro,855227-Tint Beauty Color 5.0 Cast Claro,2081415-Tint Beauty Color 5.7 Choc Cafe,2761688-Tint Beauty Color 6.0 Bela&cor Louro Escuro,855235-Tint Beauty Color 6.0 Louro Esc,2081423-Tint Beauty Color 6.1 Louro Esc Acinzentado,855332-Tint Beauty Color 6.34 Chocolate,2761572-Tint Beauty Color 6.7 Bela&cor Chocolate,2826836-Tint Beauty Color 66.26 Marsala Infalivel,2761637-Tint Beauty Color 7.0 Bela&cor Louro Medio,855243-Tint Beauty Color 7.0 Louro Natural,2761645-Tint Beauty Color 7.1 Bela&cor Louro Medio,2081431-Tint Beauty Color 7.1 Louro Nat Acinzentado,2826844-Tint Beauty Color 76.44 Ruivo Absoluto,2081490-Tint Beauty Color 9.1 Louro Medio Claro Acinz,2894335-Des Monange 90g Aer Fem Detox,4384563-Des Monange 90g Aer Fem Esporte,2746271-Des Monange 90g Aer Fem Extrato Oliva,2746263-Des Monange 90g Aer Fem Flor Lavanda,1620037-Des Monange 90g Aer Fem Frutas Vermelhas,2784882-Des Monange 90g Aer Fem Invisivel,3983960-Des Monange 90g Aer Fem Protecao Seca,1828711-Des Monange 90g Aer Fem S/Perfume,4331648-Des Monange 94g Aer Fem Clinical Conforto,4331664-Des Monange 94g Aer Fem Clinical Revigorante",
    mensuracao: "5 dias"
  },
  campanha58: {
    nome: "69238 - SMS - Oferta Relampago Margarina PR e SP 08032024",
    filtro: "Clientes propensos de Alto e Médio Relacionamento no SubSegmento: 'Margarina Trad C/Sal 500g'",
    abordado: 30000,
    grupoControle: 7276,
    produtos: "2039060-Marg Claybom 500g Cremosa C/Sal",
    mensuracao: "0 dia"
  },
  campanha59: {
    nome: "69271 - Email - Festival Meu Bebe Tudo pro Seu Bebe Ativacao disp. 1 Pub1 11032024",
    filtro: "Clientes com compras nos últimos 180 dias nos Grupo: 'Fraldas Infantis;Perfumaria Infantil', sem compras nos últimos 90 dias nos Grupos: 'Farinha e Composto Infantil;Formula Infantil;Papinha Infantil'",
    abordado: 40352,
    grupoControle: 8013,
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "13 dias"
  },
  campanha60: {
    nome: "69275 - Email - Festival Meu Bebe Tudo pro Seu Bebe Ativacao disp. 1 Pub2 11032024",
    filtro: "Clientes com compras nos últimos 180 dias nos Grupo: 'Farinha e Composto Infantil;Formula Infantil;Papinha Infantil', sem compras nos últimos 90 dias nos Grupos: 'Fraldas Infantis;Perfumaria Infantil'",
    abordado: 21292,
    grupoControle: 7183,
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "13 dias"
  },
  campanha61: {
    nome: "69278 - Email - Festival Meu Bebe Tudo pro Seu Bebe Ativacao disp. 1 Pub3 11032024",
    filtro: "Clientes Não Propensos nos Grupo: 'Farinha e Composto Infantil;Formula Infantil;Fraldas Infantis;Papinha Infantil;Perfumaria Infantil', e excluíndo os públicos do Grupo 1 e Grupo 2",
    abordado: 17778,
    grupoControle: 6916,
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "13 dias"
  },
  campanha62: {
    nome: "69273 - Push - Festival Meu Bebe Tudo pro Seu Bebe Ativacao disp. 1 Pub1 11032024",
    filtro: "Clientes com compras nos últimos 180 dias nos Grupo: 'Fraldas Infantis;Perfumaria Infantil', sem compras nos últimos 90 dias nos Grupos: 'Farinha e Composto Infantil;Formula Infantil;Papinha Infantil'",
    abordado: 2307,
    grupoControle: "Apropriação",
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "13 dias"
  },
  campanha63: {
    nome: "69277 - Push - Festival Meu Bebe Tudo pro Seu Bebe Ativacao disp. 1 Pub2 11032024",
    filtro: "Clientes com compras nos últimos 180 dias nos Grupo: 'Farinha e Composto Infantil;Formula Infantil;Papinha Infantil', sem compras nos últimos 90 dias nos Grupos: 'Fraldas Infantis;Perfumaria Infantil'",
    abordado: 1436,
    grupoControle: "Apropriação",
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "13 dias"
  },
  campanha64: {
    nome: "69281 - Push - Festival Meu Bebe Tudo pro Seu Bebe Ativacao disp. 1 Pub3 11032024",
    filtro: "Clientes Não Propensos nos Grupo: 'Farinha e Composto Infantil;Formula Infantil;Fraldas Infantis;Papinha Infantil;Perfumaria Infantil', e excluíndo os públicos do Grupo 1 e Grupo 2",
    abordado: 2188,
    grupoControle: "Apropriação",
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "13 dias"
  },
  campanha65: {
    nome: "69272 - SMS - Festival Meu Bebe Tudo pro Seu Bebe Ativacao disp. 1 Pub1 11032024",
    filtro: "Clientes com compras nos últimos 180 dias nos Grupo: 'Fraldas Infantis;Perfumaria Infantil', sem compras nos últimos 90 dias nos Grupos: 'Farinha e Composto Infantil;Formula Infantil;Papinha Infantil'",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "13 dias"
  },
  campanha66: {
    nome: "69276 - SMS - Festival Meu Bebe Tudo pro Seu Bebe Ativacao disp. 1 Pub2 11032024",
    filtro: "Clientes com compras nos últimos 180 dias nos Grupo: 'Farinha e Composto Infantil;Formula Infantil;Papinha Infantil', sem compras nos últimos 90 dias nos Grupos: 'Fraldas Infantis;Perfumaria Infantil'",
    abordado: 14317,
    grupoControle: 5856,
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "13 dias"
  },
  campanha67: {
    nome: "69279 - SMS - Festival Meu Bebe Tudo pro Seu Bebe Ativacao disp. 1 Pub3 11032024",
    filtro: "Clientes Não Propensos nos Grupo: 'Farinha e Composto Infantil;Formula Infantil;Fraldas Infantis;Papinha Infantil;Perfumaria Infantil', e excluíndo os públicos do Grupo 1 e Grupo 2",
    abordado: 10134,
    grupoControle: 5856,
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "13 dias"
  },
  campanha68: {
    nome: "69288 - Custom Audience - Festival Meu Bebe Tudo pro Seu Bebe 12032024",
    filtro: "Clientes Não Propensos nos Grupo: 'Farinha e Composto Infantil;Formula Infantil;Fraldas Infantis;Papinha Infantil;Perfumaria Infantil', e excluíndo os públicos do Grupo 1 e Grupo 2",
    abordado: 48382,
    grupoControle: 8014,
    produtos: "2873761-Ampola Pantene 15ml Misturinha Hidratacao,2873273-Ampola Pantene 15ml Misturinha Nutricao,2873117-Ampola Pantene 15ml Misturinha Reconstrucao,2741520-Ampola Pantene 15ml Restauracao,2441266-Ampola Pantene 15ml Restauracao C/3,2825678-Ampola Pantene 15ml Trat Bmbu C/3,2741563-Ampola Pantene 15ml Trat Hidro Cauterizacao C/3,2836416-Cond Pantene 170ml 3 Min Hidratacao,2780631-Cond Pantene 170ml 3 Min Nutricao,2892669-Mascara Conc Pantene 600ml Bambu Nutri & Cresce,2873508-Mascara Conc Pantene 600ml Hidra Vit Cachos Oleo Coco,3948480-Mascara Conc Pantene 600ml Prov Hidratacao,2873494-Mascara Conc Pantene 600ml Restauracao Oleo Argan,2893860-Esm Risque  8ml Crem Bali,2893835-Esm Risque  8ml Crem Capuccino,1534734-Esm Risque  8ml Crem Nude,4390075-Esm Risque 8ml Base Care Efeito Matte,329681-Esm Risque 8ml Cintilante Cristal,3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "12 dias"
  },
  campanha69: {
    nome: "69282 - Email - Reposicao Vitrine 2 Publico 1 11032024",
    filtro: "Clientes do ciclo de vida: Ativação e Rentabilização com CLV: A B e sem compras no período de 90 a 60 dias",
    abordado: 91648,
    grupoControle: 8687,
    produtos: "4162501-Oleo Girassol Soya 900ml,777854-Leite Uht Frimesa 1l Zero Lactose,4068858-Lava Roupa Tixan L1,6p1,52kg Po Primavera,4060440-Lava Roupa Tixan L1,6p1,52kg Maciez,4410980-Feijao Carioca Vo Geralda 1kg Comum,4416422-Não Encontrado,4413865-Arroz Minueto 5kg Ft Verde,105570-Acucar Refinado Uniao 1kg,601810-Acucar Cristal Alto Alegre 2kg",
    mensuracao: "6 dias"
  },
  campanha70: {
    nome: "69283 - Email - Reposicao Vitrine 2 Publico 2 12032024",
    filtro: "Clientes do ciclo de vida: Retenção com CLV: A B.",
    abordado: 48382,
    grupoControle: 8014,
    produtos: "4162501-Oleo Girassol Soya 900ml,777854-Leite Uht Frimesa 1l Zero Lactose,4068858-Lava Roupa Tixan L1,6p1,52kg Po Primavera,4060440-Lava Roupa Tixan L1,6p1,52kg Maciez,4410980-Feijao Carioca Vo Geralda 1kg Comum,4416422-Não Encontrado,4413865-Arroz Minueto 5kg Ft Verde,105570-Acucar Refinado Uniao 1kg,601810-Acucar Cristal Alto Alegre 2kg",
    mensuracao: "6 dias"
  },
  campanha71: {
    nome: "69351 - Custom Audience - Inativos Exclusivo 13032024",
    filtro: "Clientes sem compras nos últimos 120 a 90 dias",
    abordado: 89829,
    grupoControle: 8677,
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,4065042-Des Above 150ml Aer Fem Cream Light,4065050-Des Above 150ml Aer Fem Cream Shine,4391799-Des Above 150ml Aer Fem Cream Vanilla,4079566-Des Above 150ml Aer Masc Elements Carbon,4079582-Des Above 150ml Aer Masc Elements Shiny Silver,2833158-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,3998789-Esc Dent Jadepro C/2 Pro Slim Macia,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,2094118-Prot Solar Nivea 200ml Fps 50 Hidratante,2872099-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot 100ml,2872145-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot Kids 100ml,4428609-Não Encontrado,4332806-Sab Francis 90g C/6 Classico Cerejeira Ylang L+p-,4332890-Sab Francis 90g C/6 Classico Rosa Branca Pattchouli L+p-,1876449-Sab Granado 90g Glicerina Calendula,1876600-Sab Granado 90g Glicerina Castanha,195294-Sab Granado 90g Glicerina Trad,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade",
    mensuracao: "6 dias"
  },
  campanha72: {
    nome: "69311 - Email - Inativos Exclusivo Publico 1 13032024",
    filtro: "Clientes sem compras nos últimos 120 a 90 dias",
    abordado: 89827,
    grupoControle: 8677,
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,4065042-Des Above 150ml Aer Fem Cream Light,4065050-Des Above 150ml Aer Fem Cream Shine,4391799-Des Above 150ml Aer Fem Cream Vanilla,4079566-Des Above 150ml Aer Masc Elements Carbon,4079582-Des Above 150ml Aer Masc Elements Shiny Silver,2833158-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,3998789-Esc Dent Jadepro C/2 Pro Slim Macia,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,2094118-Prot Solar Nivea 200ml Fps 50 Hidratante,2872099-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot 100ml,2872145-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot Kids 100ml,4428609-Não Encontrado,4332806-Sab Francis 90g C/6 Classico Cerejeira Ylang L+p-,4332890-Sab Francis 90g C/6 Classico Rosa Branca Pattchouli L+p-,1876449-Sab Granado 90g Glicerina Calendula,1876600-Sab Granado 90g Glicerina Castanha,195294-Sab Granado 90g Glicerina Trad,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade",
    mensuracao: "6 dias"
  },
  campanha73: {
    nome: "69313 - Email - Inativos Exclusivo Publico 2 13032024",
    filtro: "Clientes com CLV: C e com ciclo de vida: Retenção",
    abordado: 48382,
    grupoControle: 8014,
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,4065042-Des Above 150ml Aer Fem Cream Light,4065050-Des Above 150ml Aer Fem Cream Shine,4391799-Des Above 150ml Aer Fem Cream Vanilla,4079566-Des Above 150ml Aer Masc Elements Carbon,4079582-Des Above 150ml Aer Masc Elements Shiny Silver,2833158-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,3998789-Esc Dent Jadepro C/2 Pro Slim Macia,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,2094118-Prot Solar Nivea 200ml Fps 50 Hidratante,2872099-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot 100ml,2872145-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot Kids 100ml,4428609-Não Encontrado,4332806-Sab Francis 90g C/6 Classico Cerejeira Ylang L+p-,4332890-Sab Francis 90g C/6 Classico Rosa Branca Pattchouli L+p-,1876449-Sab Granado 90g Glicerina Calendula,1876600-Sab Granado 90g Glicerina Castanha,195294-Sab Granado 90g Glicerina Trad,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade",
    mensuracao: "6 dias"
  },
  campanha74: {
    nome: "69316 - Push - Inativos Exclusivo Publico 1 13032024",
    filtro: "Clientes sem compras nos últimos 120 a 90 dias",
    abordado: 10692,
    grupoControle: 5060,
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,4065042-Des Above 150ml Aer Fem Cream Light,4065050-Des Above 150ml Aer Fem Cream Shine,4391799-Des Above 150ml Aer Fem Cream Vanilla,4079566-Des Above 150ml Aer Masc Elements Carbon,4079582-Des Above 150ml Aer Masc Elements Shiny Silver,2833158-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,3998789-Esc Dent Jadepro C/2 Pro Slim Macia,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,2094118-Prot Solar Nivea 200ml Fps 50 Hidratante,2872099-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot 100ml,2872145-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot Kids 100ml,4428609-Não Encontrado,4332806-Sab Francis 90g C/6 Classico Cerejeira Ylang L+p-,4332890-Sab Francis 90g C/6 Classico Rosa Branca Pattchouli L+p-,1876449-Sab Granado 90g Glicerina Calendula,1876600-Sab Granado 90g Glicerina Castanha,195294-Sab Granado 90g Glicerina Trad,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade",
    mensuracao: "6 dias"
  },
  campanha75: {
    nome: "69315 - Push - Inativos Exclusivo Publico 2 13032024",
    filtro: "Clientes com CLV: C e com ciclo de vida: Retenção",
    abordado: 9994,
    grupoControle: "Apropriação",
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,4065042-Des Above 150ml Aer Fem Cream Light,4065050-Des Above 150ml Aer Fem Cream Shine,4391799-Des Above 150ml Aer Fem Cream Vanilla,4079566-Des Above 150ml Aer Masc Elements Carbon,4079582-Des Above 150ml Aer Masc Elements Shiny Silver,2833158-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,3998789-Esc Dent Jadepro C/2 Pro Slim Macia,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,2094118-Prot Solar Nivea 200ml Fps 50 Hidratante,2872099-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot 100ml,2872145-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot Kids 100ml,4428609-Não Encontrado,4332806-Sab Francis 90g C/6 Classico Cerejeira Ylang L+p-,4332890-Sab Francis 90g C/6 Classico Rosa Branca Pattchouli L+p-,1876449-Sab Granado 90g Glicerina Calendula,1876600-Sab Granado 90g Glicerina Castanha,195294-Sab Granado 90g Glicerina Trad,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade",
    mensuracao: "6 dias"
  },
  campanha76: {
    nome: "69312 - SMS - Inativos Exclusivo Publico 1 13032024",
    filtro: "Clientes sem compras nos últimos 120 a 90 dias",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,4065042-Des Above 150ml Aer Fem Cream Light,4065050-Des Above 150ml Aer Fem Cream Shine,4391799-Des Above 150ml Aer Fem Cream Vanilla,4079566-Des Above 150ml Aer Masc Elements Carbon,4079582-Des Above 150ml Aer Masc Elements Shiny Silver,2833158-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,3998789-Esc Dent Jadepro C/2 Pro Slim Macia,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,2094118-Prot Solar Nivea 200ml Fps 50 Hidratante,2872099-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot 100ml,2872145-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot Kids 100ml,4428609-Não Encontrado,4332806-Sab Francis 90g C/6 Classico Cerejeira Ylang L+p-,4332890-Sab Francis 90g C/6 Classico Rosa Branca Pattchouli L+p-,1876449-Sab Granado 90g Glicerina Calendula,1876600-Sab Granado 90g Glicerina Castanha,195294-Sab Granado 90g Glicerina Trad,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade",
    mensuracao: "6 dias"
  },
  campanha77: {
    nome: "69314 - SMS - Inativos Exclusivo Publico 2 13032024",
    filtro: "Clientes com CLV: C e com ciclo de vida: Retenção",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "406457-Acucar Cristal Uniao 5kg,105570-Acucar Refinado Uniao 1kg,3969541-Amac Comfort 1.5l Conc Fiber Protect Oleo Argan,3969630-Amac Comfort 1.5l Conc Hydra Serum,2859750-Amac Comfort 1.5l Conc Intensivo,2873044-Amac Comfort 1.5l Conc Puro Cuidado,2767562-Arroz Rizzeto 5kg T1 Premium,4065042-Des Above 150ml Aer Fem Cream Light,4065050-Des Above 150ml Aer Fem Cream Shine,4391799-Des Above 150ml Aer Fem Cream Vanilla,4079566-Des Above 150ml Aer Masc Elements Carbon,4079582-Des Above 150ml Aer Masc Elements Shiny Silver,2833158-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,4343581-Desinf Pinho Sol 1.75l Limao Emb Economica,2945428-Desinf Pinho Sol 1.75l Lavanda/Melaleuca,2833131-Desinf Pinho Sol 1.750l Original,3998789-Esc Dent Jadepro C/2 Pro Slim Macia,442291-Farinha Trigo Coamo 5kg Comum,2898136-Feijao Caldo Bom 500g Vermelho Sel Especial,1564625-Feijao Carioca Caldo Bom 1kg Ouro,2946742-Lava Roupa Omo 2.2kg Sanitiza/Higieniza,2856450-Lava Roupa Omo 900ml Liq Lavagem Perfeita,1025279-Limp Ajax 1l Bouquet Flores Diluivel,2003805-Limp Ajax 1l Festa Flores Lavanda Diluivel,4422210-Não Encontrado,2128110-Limp Cif L450p360ml Crem Limp Prof Orig,1022482-Limp Facille 500ml Multi Uso Festa Flores,1022466-Limp Facille 500ml Multi Uso Lavanda,1022458-Limp Facille 500ml Multi Uso Limao,1022440-Limp Facille 500ml Multi Uso Tradicional,2094118-Prot Solar Nivea 200ml Fps 50 Hidratante,2872099-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot 100ml,2872145-Prot Solar Nivea 200ml Fps 50 Prot & Hidr Gt Prot Kids 100ml,4428609-Não Encontrado,4332806-Sab Francis 90g C/6 Classico Cerejeira Ylang L+p-,4332890-Sab Francis 90g C/6 Classico Rosa Branca Pattchouli L+p-,1876449-Sab Granado 90g Glicerina Calendula,1876600-Sab Granado 90g Glicerina Castanha,195294-Sab Granado 90g Glicerina Trad,1600737-Sh Head Shoulders 200ml Anticoceira,3975363-Sh Head Shoulders 200ml Cuidados C/Raiz Vitamina e,2113082-Sh Head Shoulders 200ml Men 3 Em 1,390968-Sh Head Shoulders 200ml Men Menthol Sport,4080904-Sh Head Shoulders 200ml Old Spice,2770830-Sh Head Shoulders 200ml Rem Oleosidade",
    mensuracao: "6 dias"
  },
  campanha78: {
    nome: "69352 - Custom Audience - TRADE MKT Unilever Rexona 14032024",
    filtro: "Clientes com App com BaseTokens",
    abordado: 145273,
    grupoControle: 9009,
    produtos: "2079852-Des Rexona 150ml Aer Masc Extracool,2079968-Des Rexona 150ml Aer Masc Invisible,2079984-Des Rexona 150ml Aer Masc V8,2080036-Des Rexona 150ml Aer Masc Active Dry,2129183-Des Rexona 150ml Aer Masc Antibac Protection,2770482-Des Rexona 150ml Aer Fem Cotton Dry,2770490-Des Rexona 150ml Aer Fem Invisible,2770512-Des Rexona 150ml Aer Fem Stay Fresh Bamb/Aloe,2770539-Des Rexona 150ml Aer Fem Powder Dry,2770580-Des Rexona 150ml Aer Fem Active Emotion,2770598-Des Rexona 150ml Aer Fem S/Perfume,2783800-Des Rexona 150ml Aer Masc Antibac Invisible,2783819-Des Rexona 150ml Aer Fem Antibac Invisible,2794136-Des Rexona 150ml Aer Masc Impacto,2794144-Des Rexona 150ml Aer Fem Erva Doce,2803577-Des Rexona 150ml Aer Masc Torc Fanatico,2803704-Des Rexona 150ml Aer Masc S/Perfume,2845016-Des Rexona 150ml Aer Fem Now United,2854503-Des Rexona 150ml Aer Fem Frutas Vermelhas,2854651-Des Rexona 150ml Aer Fem Classic Clinical,2854660-Des Rexona 150ml Aer Masc Classic Clean,2856379-Des Rexona 150ml Aer Fem Antibac Clinical,2871424-Des Rexona 150ml Aer Sport Clinical Men,2871432-Des Rexona 150ml Aer Sem Perfume Clinical,2887800-Des Rexona 150ml Aer Fem Anitta Bang,2887819-Des Rexona 150ml Aer Fem Anitta Vai Malan,2892510-Des Rexona 150ml Aer Fem Fru Verm C/3,2892707-Des Rexona 150ml Aer Fem Bamb C/3,2892723-Des Rexona 150ml Aer Men Invis C/3,2892731-Des Rexona 150ml Aer Masc V8 C/3,3994546-Des Rexona 150ml Aer Now United,4001605-Des Rexona 250ml Aer Antibac Invisible L+p-,4001621-Des Rexona 250ml Aer Invisible Men L+p-,4001648-Des Rexona 250ml Aer Antibac Invisible Men L+p-,4001664-Des Rexona 250ml Aer Fem Powder Dry L+p-,4001680-Des Rexona 250ml Aer Invisible L+p-,4001800-Des Rexona 250ml Aer V8 Men L+p-,4001818-Des Rexona 250ml Aer Active Dry L+p-,4075625-Des Rexona 250ml  Aer Fem Cotton Dry L+p-,4411188-Des Rexona 150ml Aer Intense Fresh Clinical,4411196-Des Rexona 150ml Aer Refresh Clinical",
    mensuracao: "17 dias"
  },
  campanha79: {
    nome: "69357 - Email - Dia Mundial do Consumidor 15032024",
    filtro: "Clientes do ciclo de Vida: Ativação e Rentabilização com CLV A B e sem compras no período de 30 a 15 dias",
    abordado: 117931,
    grupoControle: 8833,
    produtos: "315303-Coxao Mole Bov Resfr Peca/Pedaco Kg,989398-Cerveja Skol 269ml Pilsen Lata,350397-Cerveja Crystal 350ml Pilsen Lata,409952-Alcatra Bov Resfr C/Maminha Peca/Ped  Kg,122122-Bombom Nestle 251g Especialidades,2839474-Cerveja Petra 350ml Puro Malte Lata,2868156-Mist Lactea Mococa 395g Condensada",
    mensuracao: "0 dia"
  },
  campanha80: {
    nome: "69355 - Email - Dia Nacional dos Animais 14032024",
    filtro: "Clientes propensos de Alto Medio e Baixo Relacionamento no departamento: Pet Shop",
    abordado: 90000,
    grupoControle: 8678,
    produtos: "4397282-Tapete New Dots 60x60cm Higenico C/28 Un,4397274-Sh New Dots 500ml Banho Seco,2826534-Racao Special Cat 1kg Mix,4056876-Racao Special Cat 1kg Filhotes,2895374-Racao Special Cat 1kg Castrado,2895366-Racao Special Cat 1kg Carne,3951707-Alim Special Cat 85g Filhote Carne,3951715-Alim Special Cat 85g Castrado Carne,3975584-Alim Special Cat 85g Adulto Carne Molho",
    mensuracao: "0 dia"
  },
  campanha81: {
    nome: "69292 - Email - Festival Meu Bebe Cuidado em Todas as Idades Recuperacao disp2 Pub1 15032024",
    filtro: "Clientes com compras nos últimos 180 dias nos Grupos: 'Farinha e Composto Infantil;Formula Infantil;Fraldas Infantis;Papinha Infantil;Perfumaria Infantil', e sem compras no período de 90 a 40 dias",
    abordado: 62953,
    grupoControle: 8466,
    produtos: "3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "9 dias"
  },
  campanha82: {
    nome: "69297 - Email - Festival Meu Bebe Cuidado em Todas as Idades Recuperacao disp2 Pub2 15032024",
    filtro: "Clientes com compras nos últimos 180 dias nos Grupos: 'Farinha e Composto Infantil;Formula Infantil;Fraldas Infantis;Papinha Infantil;Perfumaria Infantil', excluindo público do primeiro disparo",
    abordado: 62679,
    grupoControle: 8456,
    produtos: "3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "9 dias"
  },
  campanha83: {
    nome: "69296 - Push - Festival Meu Bebe Cuidado em Todas as Idades Recuperacao disp2 Pub1 15032024",
    filtro: "Clientes com compras nos últimos 180 dias nos Grupos: 'Farinha e Composto Infantil;Formula Infantil;Fraldas Infantis;Papinha Infantil;Perfumaria Infantil', e sem compras no período de 90 a 40 dias",
    abordado: 13811,
    grupoControle: 6524,
    produtos: "3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "9 dias"
  },
  campanha84: {
    nome: "69299 - Push - Festival Meu Bebe Cuidado em Todas as Idades Recuperacao disp2 Pub2 15032024",
    filtro: "Clientes com compras nos últimos 180 dias nos Grupos: 'Farinha e Composto Infantil;Formula Infantil;Fraldas Infantis;Papinha Infantil;Perfumaria Infantil', excluindo público do primeiro disparo",
    abordado: 13770,
    grupoControle: 6489,
    produtos: "3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "9 dias"
  },
  campanha85: {
    nome: "69358 - SMS - Dia Mundial do Consumidor 15032024",
    filtro: "Clientes do ciclo de Vida: Ativação e Rentabilização com CLV A B e sem compras no período de 30 a 15 dias",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "315303-Coxao Mole Bov Resfr Peca/Pedaco Kg,989398-Cerveja Skol 269ml Pilsen Lata,350397-Cerveja Crystal 350ml Pilsen Lata,409952-Alcatra Bov Resfr C/Maminha Peca/Ped  Kg,122122-Bombom Nestle 251g Especialidades,2839474-Cerveja Petra 350ml Puro Malte Lata,2868156-Mist Lactea Mococa 395g Condensada",
    mensuracao: "0 dia"
  },
  campanha86: {
    nome: "69356 - SMS - Dia Nacional dos Animais 14032024",
    filtro: "Clientes propensos de Alto Medio e Baixo Relacionamento no departamento: Pet Shop",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "4397282-Tapete New Dots 60x60cm Higenico C/28 Un,4397274-Sh New Dots 500ml Banho Seco,2826534-Racao Special Cat 1kg Mix,4056876-Racao Special Cat 1kg Filhotes,2895374-Racao Special Cat 1kg Castrado,2895366-Racao Special Cat 1kg Carne,3951707-Alim Special Cat 85g Filhote Carne,3951715-Alim Special Cat 85g Castrado Carne,3975584-Alim Special Cat 85g Adulto Carne Molho",
    mensuracao: "0 dia"
  },
  campanha87: {
    nome: "69295 - SMS - Festival Meu Bebe Cuidado em Todas as Idades Recuperacao disp2 Pub1 15032024",
    filtro: "Clientes com compras nos últimos 180 dias nos Grupos: 'Farinha e Composto Infantil;Formula Infantil;Fraldas Infantis;Papinha Infantil;Perfumaria Infantil', e sem compras no período de 90 a 40 dias",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "9 dias"
  },
  campanha88: {
    nome: "69298 - SMS - Festival Meu Bebe Cuidado em Todas as Idades Recuperacao disp2 Pub2 15032024",
    filtro: "Clientes com compras nos últimos 180 dias nos Grupos: 'Farinha e Composto Infantil;Formula Infantil;Fraldas Infantis;Papinha Infantil;Perfumaria Infantil', excluindo público do primeiro disparo",
    abordado: 15000,
    grupoControle: 5856,
    produtos: "3976491-Algodao Benev 25g Hodrofilo Rolo,3976505-Algodao Benev C/100 Disco,884693-Colonia Infantil Huggies 100ml Extra Suave,469939-Cond Johnsons 200ml Baby Cabelo Claros,603104-Cond Johnsons 200ml Baby Cachos Definidos,2072599-Cond Johnsons 200ml Baby Cheirinho Prolong,469920-Cond Johnsons 200ml Baby Desembaraço Suave,2142350-Cond Johnsons 200ml Baby Gotas Brilho,1594656-Cr Assadura Tra La La Baby 45g Suave,671282-Cr Dent Tra La La 50g Kids,4421850-Não Encontrado,4421892-Não Encontrado,4421868-Não Encontrado,4421930-Não Encontrado,4421914-Não Encontrado,4341708-Fralda Huggies Supreme Care Hiper g C/66,2872919-Fralda Huggies Supreme Care Hiper m C/72,4341724-Fralda Huggies Supreme Care Hiper Xg C/58,4341716-Fralda Huggies Supreme Care Hiper Xxg C/58,4088123-Fralda Mili Baby Mega g C/42,4088093-Fralda Mili Baby Mega m C/48,4088107-Fralda Mili Baby Mega Xg C/36,4088115-Fralda Mili Baby Mega Xxg C/30,4075528-Fralda Mili Love & Care Rn Premium C/18,2768739-Fralda Pampers Confort Sec Fortbag g C/60,2768712-Fralda Pampers Confort Sec Fortbag m C/70,3974995-Fralda Pampers Confort Sec Fortbag p C/72,4084233-Fralda Pampers Confort Sec Fortbag Xg C/54,4084241-Fralda Pampers Confort Sec Fortbag Xxg C/52,4433181-Não Encontrado,2892863-Fralda Pampers Confort Sec Jumbo g C/128,2892871-Fralda Pampers Confort Sec Jumbo m C/148,2892880-Fralda Pampers Confort Sec Jumbo Xg C/116,2744120-Fralda Pampers Supersec Pacotao p C/34,858021-Hastes Flex Mili C/75,4330757-Lenco Umed Huggies C/32 Tripla Prot Disney Baby,4399749-Lenco Umed Mimmo C/40 Freshaqua,3988449-Lenco Umed Pampers C/192 Splash Baby Shark,4415418-Prot Solar Anasol Fps50 120g + Prot Solar Kids Fps 50 100g,1876503-Sab Granado 90g Bebe Trad,2857189-Sab Granado 90g Glicerina Bebe Camomila,4301927-Sab Johnsons 400ml Liq Baby Hora Do Sono,203963-Sab Johnsons 80g Baby Glicerina,1556274-Sab Johnsons 80g Baby Hora Sono,102881-Sab Johnsons 80g Baby Suave,4400739-Sab Protex 400ml Liq Baby Lavanda Cabeca Aos Pes,2954966-Sab Protex 85g Baby Protecao Delicada,2855569-Sab Tra La La 250ml Suave Pump,234605-Sh Johnsons 200ml Baby Cab Claros,1584162-Sh Johnsons 200ml Baby Cachos Definidos,2142333-Sh Johnsons 200ml Baby Gotas Brilho,141119-Sh Johnsons 200ml Baby Ph Balanceado,2795027-Sh Tra La La 480ml Kids Cachos,1628488-Sh Tra La La 480ml Kids Hidrat Musical,1028316-Sh Tra La La 480ml Kids Nutrikids,671290-Sh Tra La La 480ml Kids S/Embaraco,1594451-Talco Tra La La 160g Baby Hidrat,1594664-Talco Tra La La 160g Baby Suave,4421922-Não Encontrado,2783215-Toalha Umed Huggies C/48 3x1 One Done,885193-Toalha Umed Huggies C/48 Classica Flip Top,885185-Toalha Umed Huggies C/48 Supreme,2772132-Toalha Umed Huggies C/48 Wipes 100 Dias,3939200-Toalha Umed Mili C/100 Camomila/Calendula,1032968-Toalha Umed Mili C/50 Vitamina Aveia,3939235-Fralda Pampers Ajuste Total Pants g C/36,3939219-Fralda Pampers Ajuste Total Pants m C/42,3939243-Fralda Pampers Ajuste Total Pants Xg C/32,3939227-Fralda Pampers Ajuste Total Pants Xxg C/28,832936-Fralda Pampers Supersec Hiper g C/46,832944-Fralda Pampers Supersec Hiper m C/52,832952-Fralda Pampers Supersec Hiper Xg C/40,2892995-Fralda Pampers Supersec Hiper Xxg C/34",
    mensuracao: "9 dias"
  },
  campanha89: {
    nome: "69406 - Custom Audience - TRADE MKT AMBEV - CORONA SP 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Cervejas",
    abordado: 41478,
    grupoControle: 8057,
    produtos: "2864851-Cerveja Corona 330ml  Extra Long Neck",
    mensuracao: "15 dias"
  },
  campanha90: {
    nome: "69405 - Custom Audience - TRADE MKT AMBEV - PEPSI BLACK 2L PR MS 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Refrigerantes",
    abordado: 41887,
    grupoControle: 8054,
    produtos: "2759365-Refrig Pepsi 2l Zero Cola Pet",
    mensuracao: "15 dias"
  },
  campanha91: {
    nome: "69411 - Custom Audience - TRADE MKT AMBEV - PEPSI BLACK 2L SP 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Refrigerantes",
    abordado: 41885,
    grupoControle: 8054,
    produtos: "2759365-Refrig Pepsi 2l Zero Cola Pet",
    mensuracao: "15 dias"
  },
  campanha92: {
    nome: "69403 - Custom Audience - TRADE MKT AMBEV - PEPSI BLACK 350ML PR MS 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Refrigerantes",
    abordado: 41843,
    grupoControle: 8054,
    produtos: "2759373-Refrig Pepsi 350ml Zero Cola Black Lata",
    mensuracao: "15 dias"
  },
  campanha93: {
    nome: "69404 - Custom Audience - TRADE MKT AMBEV - PEPSI BLACK 350ML SP 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Refrigerantes",
    abordado: 49661,
    grupoControle: 8053,
    produtos: "2759373-Refrig Pepsi 350ml Zero Cola Black Lata",
    mensuracao: "15 dias"
  },
  campanha94: {
    nome: "69412 - Custom Audience - TRADE MKT COCA - THEREZOPOLIS 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Cervejas",
    abordado: 41839,
    grupoControle: 8054,
    produtos: "4053460-Cerveja Therezopolis 350ml Gold Lager,1862413-Cerveja Therezopolis 355ml Gold l Neck",
    mensuracao: "15 dias"
  },
  campanha95: {
    nome: "69402 - Custom Audience - TRADE MKT COCA-COLA CREATIONS K-WAVE 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Refrigerantes",
    abordado: 41852,
    grupoControle: 8053,
    produtos: "4434943 - Refrig Coca-Cola 310ml K-Wave Fruity Fantasy Sem Açúcar",
    mensuracao: "2 dias"
  },
  campanha96: {
    nome: "69415 - Custom Audience - TRADE MKT NESTLE - ACHOCOLATADO EM PO NESCAU 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Achocolatados em Pó",
    abordado: 41838,
    grupoControle: 8053,
    produtos: "3971465-Achoc Po Nescau 1.02kg Sache",
    mensuracao: "15 dias"
  },
  campanha97: {
    nome: "69407 - Custom Audience - TRADE MKT NESTLE - CANDY BARS 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Bomboniere",
    abordado: 41852,
    grupoControle: 8054,
    produtos: "4162986-Chocolate Garoto 25g Crocante 2,2796872-Choc Nestle 33g Prestigio Branco Un,2767228-Choc Nestle 33g Prestigio Dark Un,2075660-Choc Garoto 28g Caribe Banana,652067-Choc Nestle 40g Charge Un,652059-Choc Nestle 33g Prestigio Un,652040-Choc Nestle 32g Chokito Un,652016-Choc Nestle 38g Sensacao Un",
    mensuracao: "15 dias"
  },
  campanha98: {
    nome: "69414 - Custom Audience - TRADE MKT NESTLE - FORMULAS INFANTIS 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Formula Infantil",
    abordado: 1772,
    grupoControle: "Apropriação",
    produtos: "2863120-Composto Lac Ninho 800g Fases 3+ C/Prebio 3,2834936-Formula Inf Nestonutri 800g 1 a 3 Anos,2088568-Formula Inf Nanlac 800g Comfor 1 a 3 Anos,125202-Formula Inf Ninho 400g Fases 1+,1589296-Composto Lac Ninho 800g Fases 1+",
    mensuracao: "15 dias"
  },
  campanha99: {
    nome: "69413 - Custom Audience - TRADE MKT NESTLE - INGREDIENTES CULINARIOS 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Ingredientes Culinarios",
    abordado: 41821,
    grupoControle: 8153,
    produtos: "119989-Choc Po Nestle 200g Soluvel 50% Cacau,125598-Cacau Po Garoto 200g,128112-Choc Garoto 1kg Cobertura Ao Leite,128139-Choc Garoto 1kg Cobertura Meio Amargo,135135-Choc Garoto 500g Cobertura Ao Leite,325210-Choc Po Garoto 200g,518638-Choc Garoto 500g Cobetura Meio Amargo,916285-Choc Garoto 1kg Cobertura Blend,920924-Sobr Moca 2,.57kg Brigadeiro,920940-Sobr Moca 2.4kg Beijinho,921092-Sobr Moca 2.54kg Chocolate Fs,2776898-Cacau Po Nestle 200g Soluvel 100% Cacau,2811812-Choc Nestle 1kg Cobertura Ao Leite,2811820-Choc Nestle 1kg Cobertura Meio Amargo,2811839-Choc Nestle 1kg Cobertura Blend,2811847-Choc Nestle 1kg Cobertura Marfim,3996514-Sobr Moca 1kg Brigadeiro,3996530-Recheio Galak 1.01kg Choc Branco",
    mensuracao: "15 dias"
  },
  campanha100: {
    nome: "69408 - Custom Audience - TRADE MKT PEPSICO VERAO 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Salgadinhos",
    abordado: 41912,
    grupoControle: 8057,
    produtos: "2868636-Salgadinho Torcida 38g Bacon,2868628-Salgadinho Torcida 38g Calabresa,3959910-Salgadinho Torcida 38g Camarao,2868679-Salgadinho Torcida 38g Cebola,2868660-Salgadinho Torcida 38g Churrasco,2870959-Salgadinho Torcida 38g Costelinha/Limao,4079850-Salgadinho Torcida 38g Pao De Alho,2868652-Salgadinho Torcida 38g Pimenta Mexicana,4328051-Salgadinho Torcida 38g Vinagrete,363715-Agua Coco Kero Coco 330ml Trad,101257-Bebida Lac Toddynho 200ml Choc,2833000-Bebida Lac Toddynho 200ml Levinho,2887398-Aveia Quaker 165g Flocos Finos,2053187-Aveia Quaker 165g Flocos Regular,363715-Agua Coco Kero Coco 330ml Trad,101249-Achoc Po Toddy 370g Pvc,4344537-Batata Ruffles 134g Tubo Original,4344545-Batata Ruffles 134g Tubo Cream Cebola,4344529-Batata Ruffles 134g Tubo Cheddar,175285-Achoc Po Toddy 750g Pvc,3959740-Aveia Quaker 450g Flocos Finos,3975614-Aveia Quaker 450g Flocos Regular,2120488-Achoc Po Toddy 700g Original Sachet,175285-Achoc Po Toddy 750g Pvc,3976149-Salgadinho Doritos 300g Queijo Nacho,3976106-Salgadinho Doritos 140g Queijo Nacho,2928000-Batata Lays 135g Classica,3976203-Batata Lays 135g Creme Cebola,3976220-Não Encontrado,3976262-Batata Ruffles 115g Churrasco,3976130-Batata Ruffles 115g Sal,2720760-Salgadinho Cheetos 115g Mix,758558-Salgadinho Cheetos 125g Lua,2927900-Salgadinho Cheetos 140g Onda Requeijao,2927969-Salgadinho Fandangos 140g Presunto,2927985-Salgadinho Fandangos 140g Queijo,2360643-Amendoim Elma Chips 145g Japones,2864304-Não Encontrado,1584731-Amendoim Elma Chips 170g Ovinhos,4083610-Amendoim Elma Chips 130g Ovinhos Barbecue,2864312-Salgadinho Pingo Douro 90g Picanha Grelhada,429694-Salgadinho Pingo Douro 120g Bacon,4415205-Salgadinho Cheetos 78g Crunchy White Cheddar,4415213-Salgadinho Cheetos 78g Crunchy Super Cheddar,2927993-Salgadinho Doritos 84g Nacho,4087445-Batata Lays 68g Rustica Sal Marinho,4087437-Batata Lays 68g Cream Cheese,3976165-Batata Lays 80g Classica,3976351-Batata Lays 80g Creme Cebola,3976424-Batata Ruffles 76g Cebola/Salsa,3976440-Não Encontrado,3976289-Batata Ruffles 76g Original,3959775-Salgadinho Torcida 100g Churrasco,3959783-Salgadinho Torcida 100g Cebola,3959767-Salgadinho Torcida 100g Pimenta Mexicana,4081102-Salgadinho Torcida 100g Pao De Alho,2794080-Torrada Eqlibri 40g Panetini Cottage C/Erva,3986829-Não Encontrado,2794071-Torrada Eqlibri 40g Panetini Presunto Defumado,1585622-Torrada Eqlibri 40g Panetini Queijo Suave",
    mensuracao: "15 dias"
  },
  campanha101: {
    nome: "69409 - Custom Audience - TRADE MKT SCJ - LYSOFORM 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Departamento: Limpeza",
    abordado: 41888,
    grupoControle: 8057,
    produtos: "4076699-Desinf Lysoform 2l Suave Odor,4076923-Desinf Lysoform 2l Original,4432657-Desinf Lysoform 2l Lavanda,4432665-Desinf Lysoform 2l Citrus",
    mensuracao: "15 dias"
  },
  campanha102: {
    nome: "69422 - Custom Audience - TRADE MKT VENTISQUEIRO 16032024",
    filtro: "Clientes com app na Base Tokens",
    abordado: 42003,
    grupoControle: 8057,
    produtos: "820636-Vinho Ventisquero 750ml Tantehue Cabernet Sauvignon,819166-Vinho Ventisquero 750ml Queulat Cabernet Sauvignon,3971570-Vinho Ventisquero 750ml Explorador Cabernet Suavignon,819077-Vinho Ventisquero 750ml Classico Cabernet Sauvignon",
    mensuracao: "15 dias"
  },
  campanha103: {
    nome: "69410 - Custom Audience - TRADE MKT YPE LINHA GREEN 16032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Lava Roupas com a Marca: Tixan",
    abordado: 41789,
    grupoControle: 8053,
    produtos: "4332610 - Amac Ype 1l Conc Green,4411110 - Lava Roupa Tixan 1l Liq Green,4079728 - Lava Louca Ype 500ml Green,4009029 - Lava Louca Ype 406g Gel Conc Green,4079736 - Lava Roupa Tixan 800g Po Green,4079710 - Lava Roupa Tixan 1.6kg Po Green,4411102 - Limp Ype 500ml Multi Green Origem Vegetal,2929180 - Sabao Ype 180g Barra Green Natural",
    mensuracao: "15 dias"
  },
  campanha104: {
    nome: "69396 - Email - TRADE MKT BUDWEISER 330ML PR MS 15032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Cerveja",
    abordado: 41816,
    grupoControle: 8057,
    produtos: "2837013-Cerveja Budweiser 330ml Long Neck",
    mensuracao: "15 dias"
  },
  campanha105: {
    nome: "69398 - Email - TRADE MKT BUDWEISER 330ML SP 15032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Cerveja",
    abordado: 45848,
    grupoControle: 8057,
    produtos: "2837013-Cerveja Budweiser 330ml Long Neck",
    mensuracao: "15 dias"
  },
  campanha106: {
    nome: "69394 - Email - TRADE MKT BUDWEISER 350ML PR MS 15032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Cerveja",
    abordado: 50000,
    grupoControle: 8057,
    produtos: "2007959-Cerveja Budweiser 350ml Lata",
    mensuracao: "15 dias"
  },
  campanha107: {
    nome: "69395 - Email - TRADE MKT BUDWEISER 350ML SP 15032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Cerveja",
    abordado: 45848,
    grupoControle: 8057,
    produtos: "2007959-Cerveja Budweiser 350ml Lata",
    mensuracao: "15 dias"
  },
  campanha108: {
    nome: "69399 - Email - TRADE MKT SPATEN 350ML PR MS 15032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Cerveja",
    abordado: 23424,
    grupoControle: 8057,
    produtos: "3993035-Cerveja Spaten 350ml Munich Puro Malte Lata",
    mensuracao: "15 dias"
  },
  campanha109: {
    nome: "69400 - Email - TRADE MKT SPATEN 350ML SP 15032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Cerveja",
    abordado: 7496,
    grupoControle: 5335,
    produtos: "3993035-Cerveja Spaten 350ml Munich Puro Malte Lata",
    mensuracao: "15 dias"
  },
  campanha110: {
    nome: "69401 - Email - TRADE MKT YPE LINHA GREEN 15032024",
    filtro: "Clientes com compras nos últimos 90 dias no Grupo: Lava Roupas com a Marca: Tixan",
    abordado: 41792,
    grupoControle: 8030,
    produtos: "4332610 - Amac Ype 1l Conc Green,4411110 - Lava Roupa Tixan 1l Liq Green,4079728 - Lava Louca Ype 500ml Green,4009029 - Lava Louca Ype 406g Gel Conc Green,4079736 - Lava Roupa Tixan 800g Po Green,4079710 - Lava Roupa Tixan 1.6kg Po Green,4411102 - Limp Ype 500ml Multi Green Origem Vegetal,2929180 - Sabao Ype 180g Barra Green Natural",
    mensuracao: "15 dias"
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