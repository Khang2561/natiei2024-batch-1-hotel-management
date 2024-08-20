const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/*
document.addEventListener("DOMContentLoaded", function() {
	    // Hàm debug để kiểm tra sự kiện click của các nút sửa và xóa
	    function debugButtons() {
	        // Lắng nghe sự kiện nhấn nút sửa
	        document.querySelectorAll('.btn-info').forEach(button => {
	            button.addEventListener('click', function(event) {
	                event.preventDefault(); // Ngăn chặn hành động mặc định để dễ dàng kiểm tra
	                const targetId = this.getAttribute('data-bs-target');
	                console.log("Nút sửa được nhấn");
	                console.log("ID của modal cần mở:", targetId);
	                console.log("Thẻ HTML của nút nhấn:", this.outerHTML);
	                
	                // Kiểm tra sự tồn tại của modal
	                const modal = document.querySelector(targetId);
	                if (modal) {
	                    console.log("Modal tồn tại:", targetId);
	                } else {
	                    console.error("Modal không tồn tại:", targetId);
	                }
	            });
	        });

	        // Lắng nghe sự kiện nhấn nút xóa
	        document.querySelectorAll('.btn-danger').forEach(button => {
	            button.addEventListener('click', function(event) {
	                event.preventDefault(); // Ngăn chặn hành động mặc định để dễ dàng kiểm tra
	                const targetId = this.getAttribute('data-bs-target');
	                console.log("Nút xóa được nhấn");
	                console.log("ID của modal cần mở:", targetId);
	                console.log("Thẻ HTML của nút nhấn:", this.outerHTML);
	                
	                // Kiểm tra sự tồn tại của modal
	                const modal = document.querySelector(targetId);
	                if (modal) {
	                    console.log("Modal tồn tại:", targetId);
	                } else {
	                    console.error("Modal không tồn tại:", targetId);
	                }
	            });
	        });
	    }

	    // Gọi hàm debug
	    debugButtons();
	});*/