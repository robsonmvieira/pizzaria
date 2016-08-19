// Pedidos
function calcPrice(nome_campo){
	vlr_pizza = Number(document.getElementById("vlr_pizza").value.replace("R$","").replace(',','.'));
	vlr_gfa_vinho = Number(document.getElementById("vlr_gfa_vinho").value.replace("R$","").replace(',','.'));
	vlr_gfa_refri = Number(document.getElementById("vlr_gfa_refri").value.replace("R$","").replace(',','.'));
	
	switch(nome_campo){
		case "qtd_pizza":
			qtd = Number(document.getElementById("qtd_pizza").value);
			total = qtd * vlr_pizza;
			document.getElementById("total_vlr_pizza").value = "R$ "+total.toFixed(2);
		break;
		case "qtd_gfa_vinho":
			qtd = Number(document.getElementById("qtd_gfa_vinho").value);
			total = qtd * vlr_gfa_vinho;
			document.getElementById("total_vlr_vinho").value = "R$ "+total.toFixed(2);
		break;
		case "qtd_gfa_refri":
			qtd = Number(document.getElementById("qtd_gfa_refri").value);
			total = qtd * vlr_gfa_refri;
			document.getElementById("total_vlr_refri").value = "R$ "+total.toFixed(2);
		break;
	}
	
	total_vlr_pizza = Number(document.getElementById("total_vlr_pizza").value.replace("R$","").replace(',','.'));
	total_vlr_vinho = Number(document.getElementById("total_vlr_vinho").value.replace("R$","").replace(',','.'));
	total_vlr_refri = Number(document.getElementById("total_vlr_refri").value.replace("R$","").replace(',','.'));
	
	total_compras = total_vlr_pizza + total_vlr_vinho + total_vlr_refri;
	document.getElementById("total_compras").value = "R$ "+total_compras.toFixed(2);
}

function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    	if (tecla==8 || tecla==0) return true;
	else  return false;
    }
}

function finalizaCompra(){
	t_pizza = document.getElementById("tipo_pizza").value;
	qtd_pizza = document.getElementById("qtd_pizza").value;
	total_pizza = document.getElementById("total_vlr_pizza").value;
	
	total_compras = document.getElementById("total_compras").value;
	
	alert("Compra realizada com sucesso! \n --------------------------------- \n Total: "+total_compras);
	location.href="pedidos.html";
}

function mostraFieldset(id){
	fieldset = document.getElementById(id).style.visibility="visible";

}

/* Parte do Fale conosco */
		function valida(){
		 var Name = fale.nome.value.length;
		 	
		 var Email = fale.email.value.length;
		 var telefone = fale.telefone.value.length;
		if (Name < 3){
			alert("Digite um nome válido");
			fale.nome.focus();
			return false;}	

		if (Email== ""){
		alert("Por favor digite um email válido");
		fale.Email.focus();
		return false;}
	
		if (telefone != 8){
			alert("digite seu telefone");
			fale.telefone.focus();
			return false;
		};
	} 

	
	/*Pedido*/

		function toggleMenu(){
    alert('teste');
			var menu_principal = document.getElementById('menu');
			if( menu_principal.style.display == 'block' ) {
				menu_principal.style.display = 'none';
			} else { 
				 menu_principal.style.display = 'block';
			}
			return menu_principal;			
		}


	