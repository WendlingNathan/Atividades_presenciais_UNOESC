<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%--
	Autor: Nathan Ritter Wendling
--%>


<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Exemplo JSP</title>
	</head>
	<body>
		<p>
			<%
				String nome = "DEV-TI";
				out.println("Curso: " + nome + "<br>");
			%>
			Nome: <%= nome %> <br>
		</p>
	
		<p>
			Produto: <c:out value="${produto.nome}"/> <br>
			Produto: ${produto.nome}<br>
			<%= request.getAttribute("produto") %>	
		</p>
	
		<table border="1">
			<c:forEach var="produto" items="${produtos}" varStatus="id">
				<tr bgcolor="#${id.count % 2 == 0 ? 'aaee88' : 'ffffff' }">
					<td>${produto.nome}</td>
					<td>${produto.quantidade}</td>
					<td>${produto.valor}</td>
				</tr>
			</c:forEach>
		</table>
		
		<br>
		<% for(int x = 0; x < 5; x++) { %>
			Olá Mundo com laço: <%= x+1 %><br>
		<%}%>
	</body>
</html>