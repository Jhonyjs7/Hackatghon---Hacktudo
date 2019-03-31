function carregar() {
	alert('oi');
	$.ajax({
	data: "",
        dataType: 'json',
        url: 'http://datario.cloudapp.net:8080/api/OCTCBUSGETALLPOSITIONS?key=e872eb46-d22b-481d-9e65-aadc1344533a',
        type: 'GET',
        success: function (data) {
        var corpo = "";
                for (var i = 0, length = data.length; i < length; i++) {
        			alert(data[i]);
        		};	
        	}
        }
    }