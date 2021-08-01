

    let container = document.getElementById('container');

    const {width} = document.getElementById("slide1").getBoundingClientRect()
    let max = document.querySelectorAll(".carrosel img").length
    let slideAtivo = 0;
    
    
    function proxima () {
        if(slideAtivo >= max-1) return null
     slideAtivo = slideAtivo + 1
     const proximoSlide = document.querySelector(".carrosel");
     proximoSlide.style.transform=`translateX(${-(width*slideAtivo)}px)`
    }

    function voltar () {
        if(slideAtivo <= 0) return null
        slideAtivo = slideAtivo -1
        const slideAnterior = document.querySelector(".carrosel");
        slideAnterior.style.transform=`translateX(${-(width*slideAtivo)}px)`
       }


       // Simulação de uma api de produtos

       let produtos = [
        {   id:"1",
            nome:'sapato azul',
            tamanho:'G',
            preco:'200.00',
            sexo:'menino',
            src:"fotos/fotosProdutos/sapatoAzul-1.png",
            descricao:'botinha azul de crochê perfeita para o inverno',
            categoria:'calçado',
            maisVendido:true,
            destaqueSemana:false
        },
        {   
            id:"2",
            nome:'jaqueta preta',
            tamanho:'G',
            preco:'300.00',
            sexo:'menino',
            src:"fotos/fotosProdutos/jaqueta.png",
            descricao:'jaqueta corta vento preta',
            categoria:'meninos',
            maisVendido:true,
            destaqueSemana:false
        },
        {   id:"3",
            nome:'gorro marrom',
            tamanho:'G',
            preco:'200.00',
            sexo:'unisex',
            src:"fotos/fotosProdutos/gorro.png",
            descricao:'gorro marrom, ótimo para os dias de inverno',
            categoria:'acessorio',
            maisVendido:true,
            destaqueSemana:false
        },
        {   id:"4",
            nome:'bermuda cinza',
            tamanho:'G',
            preco:'200.00',
            sexo:'meninos',
            src:"fotos/fotosProdutos/bermuda-cinza.jpg",
            descricao:'body branco casual.',
            categoria:'meninos',
            maisVendido:false,
            destaqueSemana:true
        },
        {   id:"5",
            nome:'macaquinho',
            tamanho:'G',
            preco:'200.00',
            sexo:'meninos',
            src:"fotos/fotosProdutos/macacao.jpg",
            descricao:'Macaquinho casual.',
            categoria:'meninos',
            maisVendido:false,
            destaqueSemana:true
        },
        {   id:"6",
            nome:'short azul',
            tamanho:'G',
            preco:'200.00',
            sexo:'meninos',
            src:"fotos/fotosProdutos/short-azul.jpg",
            descricao:'short azul para o verão.',
            categoria:'meninos',
            maisVendido:false,
            destaqueSemana:true
        },
        
    ]

     // Inserção de html na div dos mais vendidos se propriedade maisVendido for true.

        const sectionMaisVendidos = document.getElementById("maisVendidos");

        sectionMaisVendidos.innerHTML = produtos.map(produto => (
            produto.maisVendido != true ? null :
            `
             <div class="produto">
                <a href=produto.html?produtoid=${produto.id}>
                <img src=${produto.src}>
                <h2>${produto.nome}</h2>
                <h3>R$ ${produto.preco}</h3>
                 <p>${produto.descricao}</p>
                 </a>
            </div>
        `
        )).join('')


        // Inserção de html na div dos destaques se propriedade  for true. 

        const sectionDestaques = document.getElementById("produtosDestaques")
        
        sectionDestaques.innerHTML = produtos.map(produto => (
            produto.destaqueSemana != true ? null :
            `
            </div>
				<div class="divProdutoDestaque">
					<a href='produto.html?produtoid=${produto.id}'>
						<img src=${produto.src}>
						<h2>${produto.nome}</h2>
						<h3>R$ ${produto.preco}</h3>
						<p>${produto.descricao}</p>
					</a>
				</div>
            `
        )).join('')



    // Menu responsivo 

    function handleclick () {
       const menu = document.getElementById("nav");
       let menuDisplay = menu.style.display;
       menu.style.display = menuDisplay == 'inline-block' ? 'none' : 'inline-block'
       
      
     
       
    }
        

    
